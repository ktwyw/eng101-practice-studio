"""Check the exact published assets, download contents and Python baseline."""
import ast
import csv
import io
import json
import pathlib
import re
import subprocess
import zipfile
from html.parser import HTMLParser

ROOT = pathlib.Path(__file__).resolve().parents[1]
DIST = ROOT / 'dist'
SCRIPTS = [
    'content.js', 'extended-practice.js', 'code-lab-bank.js', 'practice-bank.js', 'program-studies-bank.js',
    'first-half-bank.js', 'reading-bank.js', 'reading-room.js',
    'debugging-bank.js', 'debugging-lab.js', 'second-half-bank.js',
    'second-half-ui.js', 'site-structure.js', 'first-half-ui.js',
    'course-materials.js', 'materials-page.js', 'code-lab-ui.js', 'app.js',
]
DATA_SCRIPTS = [s for s in SCRIPTS if s in {
    'content.js', 'extended-practice.js', 'code-lab-bank.js', 'practice-bank.js', 'program-studies-bank.js',
    'first-half-bank.js', 'reading-bank.js', 'debugging-bank.js',
    'second-half-bank.js', 'course-materials.js',
}]
export = r"""
const fs=require('fs'),vm=require('vm'),c=vm.createContext({});
vm.runInContext(%s.map(f=>fs.readFileSync('dist/'+f,'utf8')).join('\n')+
';globalThis.data={MCQS,EXERCISES,PROGRAMS,READING_EXAMPLES,DEBUG_CASES,CODE_LAB_META,COURSE_MATERIALS};',c);
console.log(JSON.stringify(c.data));
""" % json.dumps(DATA_SCRIPTS)
data = json.loads(subprocess.check_output(['node', '-e', export], cwd=ROOT))


class Assets(HTMLParser):
    def __init__(self):
        super().__init__()
        self.scripts = []
        self.ids = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            self.ids.append(attrs['id'])
        if tag == 'script':
            assert 'defer' in attrs
            self.scripts.append(attrs['src'])
        for key in ['src', 'href']:
            value = attrs.get(key, '')
            if value and not re.match(r'^(?:https?:|data:|#)', value):
                assert (DIST / value).is_file(), value


html = (DIST / 'index.html').read_text()
parser = Assets()
parser.feed(html)
assert parser.scripts == SCRIPTS, 'Script order must match the tested release.'
assert len(parser.ids) == len(set(parser.ids)), 'Duplicate shell element IDs.'
for file in DIST.glob('*.js'):
    subprocess.run(['node', '--check', str(file)], check=True, capture_output=True)
assert {p.name for p in DIST.iterdir() if p.is_file()} == set(SCRIPTS + ['index.html', 'styles.css'])
allowed_files = set(SCRIPTS + ['index.html', 'styles.css'])
allowed_files.update(image for p in data['READING_EXAMPLES'] for image in p['images'])
allowed_files.update(['downloads/eng101-reading-examples.zip', 'downloads/eng101-code-lab-worked-programs.zip', 'downloads/eng101-program-studies.zip'])
for week in data['COURSE_MATERIALS']:
    allowed_files.add(week['bundle'])
    allowed_files.update(file['path'] for file in week['files'])
assert {p.relative_to(DIST).as_posix() for p in DIST.rglob('*') if p.is_file()} == allowed_files, 'Unexpected or missing published files.'
for file in DIST.rglob('*'):
    if file.suffix in {'.js', '.html', '.css', '.svg'}:
        text = file.read_text()
        assert not re.search(r'Nazarbayev\s+University|Course Instructor:', text, re.I), file
        assert not re.search(r'/workspace/(?:scratch|sites)/|terminal\.local|localhost:', text), file

# Parse every complete worked program using the syntax promised in the guide.
third_party = {'numpy', 'matplotlib', 'pandas', 'scipy'}
for program in data['PROGRAMS']:
    tree = ast.parse(program['code'], filename=program['id'], feature_version=(3, 10))
    imported = set()
    for node in ast.walk(tree):
        if isinstance(node, ast.Import):
            imported.update(alias.name.split('.')[0] for alias in node.names)
        elif isinstance(node, ast.ImportFrom) and node.module:
            imported.add(node.module.split('.')[0])
    assert imported & third_party <= set(program.get('requirements', [])), program['id']
for case in data['DEBUG_CASES']:
    for repair in case['solutions']:
        ast.parse(repair + '\n' + case['tests'], filename=case['id'], feature_version=(3, 10))
for exercise in data['EXERCISES']:
    indent = exercise.get('indent', 4 if exercise['id'] in ['c4', 'c5'] else 0)
    for answer in exercise['answers']:
        code = '\n'.join([exercise['before'], ' ' * indent + answer, exercise['after']])
        ast.parse(code, filename=exercise['id'], feature_version=(3, 10))

with zipfile.ZipFile(DIST / 'downloads/eng101-reading-examples.zip') as archive:
    names = archive.namelist()
    expected = {'README.txt', 'catalog.csv'}
    catalog = list(csv.DictReader(io.StringIO(archive.read('catalog.csv').decode())))
    assert len(catalog) == 400
    rows = {row['file']: row for row in catalog}
    for example in data['READING_EXAMPLES']:
        name = f'{example["reading"]}/chapter_{example["chapter"]:02}/{example["id"]}.py'
        output = f'outputs/{example["id"]}.txt'
        expected.update([name, output])
        source = archive.read(name).decode()
        assert source.endswith('\n' + example['code'] + '\n'), name
        assert 'Instructor: Prof. Yanwei Wang' in source, name
        assert archive.read(output).decode() == example['output'] + '\n', name
        assert rows[name]['explanation'] == example['explanation'], name
        assert rows[name]['try_it'] == example['tryIt'], name
        assert rows[name]['requirements'] == ', '.join(example['requirements']), name
    assert len(names) == len(set(names)) and set(names) == expected
    for name in names:
        assert not re.search(r'Nazarbayev\s+University|Course Instructor:', archive.read(name).decode(), re.I), name
    assert archive.testzip() is None

with zipfile.ZipFile(DIST / 'downloads/eng101-code-lab-worked-programs.zip') as archive:
    names = archive.namelist()
    assert len(names) == len(set(names)) == 103
    assert {n for n in names if n.endswith('.py')} == {f'programs/{e["id"]}.py' for e in data['EXERCISES']}
    outputs = json.loads(archive.read('expected-output.json'))
    assert outputs == {e['id']: data['CODE_LAB_META'].get(e['id'], e)['referenceOutput'] for e in data['EXERCISES']}
    for name in names:
        assert not re.search(r'Nazarbayev\s+University|Course Instructor:', archive.read(name).decode(), re.I), name
    assert archive.testzip() is None

print('PASS: release script order and syntax, asset whitelist, attribution, Python 3.10 syntax, declared packages, and reading/Code lab ZIP contents match the website.')
