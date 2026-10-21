"""Package the 200 course program studies and their explanatory catalog."""
import ast
import csv
import io
import json
import pathlib
import subprocess
import zipfile

ROOT = pathlib.Path(__file__).resolve().parents[1]
export = r"""
const fs=require('fs'),vm=require('vm'),c=vm.createContext({});
vm.runInContext(['content.js','extended-practice.js','practice-bank.js','program-studies-bank.js'].map(f=>fs.readFileSync('dist/'+f,'utf8')).join('\n')+';globalThis.rows=COURSE_PROGRAMS;',c);
console.log(JSON.stringify(c.rows));
"""
programs = json.loads(subprocess.check_output(['node', '-e', export], cwd=ROOT))
assert len(programs) == 200 and not any(p.get('reading') for p in programs)

readme = '''ENG 101 Program Studies
Instructor: Prof. Yanwei Wang

200 complete course programs: the earlier 62 Mock A-D programs and ten Week 6
teaching examples, plus 128 original studies covering Weeks 1-14. The separate
400 Reading examples are not duplicated in this archive.

Run one file at a time with Python 3.10 or later. The course programs use only
the standard library. Complete printed reference outputs are supplied in the
outputs folder and expected-output.json. Leading spaces can matter.

Predict the output before running. Read the explanation and modification prompt
in catalog.csv, then change one input and predict again. Where supplied, selected
regression assertions follow the worked program. Assertions should be enabled.
Earlier Mock A-D programs have related MCQs and explanations on the website;
catalog.csv includes their question IDs and a direct link to each program.

Week 10-11 operation counts use their stated classroom cost models; they are not
elapsed-time benchmarks. Week 13 studies execute Python demonstrations of
language differences, not native MATLAB, C++ or Java code. Engineering data and
models are illustrative and are not certified equipment or design guidance.

These are ungraded practice activities. Website progress stays in the current
browser tab; running these files does not submit work or update Moodle grades.
'''

catalog = io.StringIO()
writer = csv.writer(catalog)
writer.writerow(['file', 'id', 'week', 'topic', 'title', 'source', 'explanation', 'try_it', 'related_mcqs', 'website'])
target = ROOT / 'dist/downloads/eng101-program-studies.zip'
with zipfile.ZipFile(target, 'w', zipfile.ZIP_DEFLATED) as archive:
    archive.writestr('README.txt', readme)
    for p in programs:
        name = f'programs/{p["id"]}.py'
        header = f'# ENG 101 Program study - Week {p["week"]}\n# Instructor: Prof. Yanwei Wang\n# {p["name"]}\n# Source: {p["source"]}\n\n'
        body = header + p['code'].rstrip() + '\n'
        if p.get('tests'):
            body += '\n# Selected regression checks; keep assertions enabled.\n' + p['tests'] + '\n'
        ast.parse(body, filename=name, feature_version=(3, 10))
        archive.writestr(name, body)
        archive.writestr(f'outputs/{p["id"]}.txt', p['output'] + '\n')
        explanation = p.get('explanation') or ('Use the related five MCQs on the website to study the printed statements and carefully stated modifications.' if p['questionIds'] else 'Trace the teaching comments and each function call in this standalone Week 6 program. The corresponding guided exercise is available on the website.')
        prompt = p.get('tryIt') or 'Change one supported input, predict the complete output and rerun the program in a fresh Python process.'
        writer.writerow([name, p['id'], p['week'], p['topic'], p['name'], p['source'], explanation, prompt, ' '.join(p['questionIds']), 'https://eng101-practice-studio.eager-melon-2769.chatgpt.site/#program/' + p['id']])
    archive.writestr('catalog.csv', catalog.getvalue())
    archive.writestr('expected-output.json', json.dumps({p['id']: p['output'] for p in programs}, ensure_ascii=False, indent=2) + '\n')
with zipfile.ZipFile(target) as archive:
    assert len(archive.namelist()) == len(set(archive.namelist())) == 403
    assert archive.testzip() is None
print('Packaged 200 course studies, 200 reference outputs, regression assertions, an explanatory catalog and README.')
