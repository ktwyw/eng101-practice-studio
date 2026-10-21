"""Run all 200 course studies and their actual downloadable files independently."""
import ast
import collections
import csv
import io
import json
import pathlib
import subprocess
import sys
import tempfile
import zipfile

ROOT = pathlib.Path(__file__).resolve().parents[1]
export = r"""
const fs=require('fs'),vm=require('vm'),c=vm.createContext({});
vm.runInContext(['content.js','extended-practice.js','practice-bank.js'].map(f=>fs.readFileSync('dist/'+f,'utf8')).join('\n')+';globalThis.earlier=JSON.parse(JSON.stringify(PROGRAMS));',c);
vm.runInContext(['program-studies-bank.js','reading-bank.js'].map(f=>fs.readFileSync('dist/'+f,'utf8')).join('\n')+';globalThis.rows={earlier,all:PROGRAMS,course:COURSE_PROGRAMS,added:PROGRAM_STUDY_ADDITIONS};',c);
console.log(JSON.stringify(c.rows));
"""
data = json.loads(subprocess.check_output(['node', '-e', export], cwd=ROOT))
programs, additions = data['course'], data['added']
assert len(programs) == 200 and len(additions) == 128 and len(data['all']) == 600
assert len({p['id'] for p in data['all']}) == 600
assert len(data['earlier']) == 72
lookup = {p['id']: p for p in programs}
for earlier in data['earlier']:
    assert lookup[earlier['id']] == earlier, earlier['id']
assert collections.Counter(p['week'] for p in programs) == {1:14, 2:14, 3:14, 4:14, 5:14, 6:30, 7:12, 8:12, 9:12, 10:14, 11:14, 12:14, 13:10, 14:12}
assert len({p['name'] for p in programs}) == 200
signatures = collections.Counter(ast.dump(ast.parse(p['code']), include_attributes=False) for p in data['all'])
for p in additions:
    assert signatures[ast.dump(ast.parse(p['code']), include_attributes=False)] == 1, p['id']
    assert p['bank'] == 'course-new' and not p['questionIds'] and not p['requirements']
    assert len(p['explanation']) > 100 and len(p['tryIt']) > 40


def execute(code, directory, name):
    result = subprocess.run([sys.executable, '-I', '-c', code], cwd=directory, capture_output=True, text=True, timeout=5)
    assert result.returncode == 0, (name, result.stderr)
    return result.stdout.rstrip('\n')


with zipfile.ZipFile(ROOT / 'dist/downloads/eng101-program-studies.zip') as archive, tempfile.TemporaryDirectory() as directory:
    expected_files = {'README.txt', 'catalog.csv', 'expected-output.json'}
    catalog = list(csv.DictReader(io.StringIO(archive.read('catalog.csv').decode())))
    assert len(catalog) == 200
    rows = {row['id']: row for row in catalog}
    assert json.loads(archive.read('expected-output.json')) == {p['id']: p['output'] for p in programs}
    for p in programs:
        checked = p['code'] + '\n' + p.get('tests', '')
        assert execute(checked, directory, p['id']) == p['output'], p['id']
        name = f'programs/{p["id"]}.py'
        text = archive.read(name).decode()
        ast.parse(text, feature_version=(3, 10))
        assert p['code'].rstrip() in text and 'Instructor: Prof. Yanwei Wang' in text
        assert execute(text, directory, name) == p['output'], name
        output_name = f'outputs/{p["id"]}.txt'
        assert archive.read(output_name).decode() == p['output'] + '\n'
        assert rows[p['id']]['week'] == str(p['week'])
        assert rows[p['id']]['title'] == p['name']
        if p.get('explanation'):
            assert rows[p['id']]['explanation'] == p['explanation']
            assert rows[p['id']]['try_it'] == p['tryIt']
        expected_files.update([name, output_name])
    assert len(archive.namelist()) == len(set(archive.namelist())) and set(archive.namelist()) == expected_files
    for name in archive.namelist():
        text = archive.read(name).decode()
        assert 'Nazarbayev University' not in text and 'Course Instructor:' not in text
    assert archive.testzip() is None

print('PASS: all 200 course programs and all 200 downloadable files reproduce their verified outputs; 128 unique additions, regression checks, weekly coverage and all earlier 72 objects are intact. Full library: 600.')
