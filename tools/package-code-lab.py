"""Build a runnable worked-program download from the current 100-exercise Code lab."""
import ast,csv,io,json,pathlib,subprocess,zipfile
ROOT=pathlib.Path(__file__).resolve().parents[1]
script="const fs=require('fs'),vm=require('vm'),c=vm.createContext({});vm.runInContext(['content.js','extended-practice.js','code-lab-bank.js'].map(f=>fs.readFileSync('dist/'+f,'utf8')).join('\\n')+';globalThis.rows=EXERCISES.map(e=>({...e,meta:CODE_LAB_META[e.id]||e}));',c);console.log(JSON.stringify(c.rows));"
rows=json.loads(subprocess.check_output(['node','-e',script],cwd=ROOT));assert len(rows)==100
readme='''ENG 101 Code lab: 100 worked programs
Instructor: Prof. Yanwei Wang

Try the missing line on the website before consulting a worked solution.
Each programs/*.py file is a complete program using the first accepted answer.
The new examples include selected regression assertions at the end. Run one
file at a time with Python 3.10 or later. No third-party packages are required.

catalog.csv identifies the topic, week, level, task, hint, and explanation.
expected-output.json records the expected printed output for all 100 programs.
The website compares Python-like tokens for its guided one-line checks; it does
not execute your code. Other valid approaches may differ from the guided answer.
These are formative practice activities. Engineering limits are illustrative.
'''
stream=io.StringIO();writer=csv.writer(stream);writer.writerow(['file','title','topic','week','level','task','hint','explanation'])
outputs={}
path=ROOT/'dist/downloads/eng101-code-lab-worked-programs.zip'
with zipfile.ZipFile(path,'w',zipfile.ZIP_DEFLATED) as z:
    z.writestr('README.txt',readme)
    for e in rows:
        indent=e.get('indent',4 if e['id'] in ['c4','c5'] else 0)
        program=e['before']+'\n'+' '*indent+e['answers'][0]+'\n'+e['after']+'\n'
        if e.get('tests'):program+='\n# Selected regression checks\n'+e['tests']+'\n'
        program='# Instructor: Prof. Yanwei Wang\n# '+e['name']+'\n'+program
        ast.parse(program);filename='programs/'+e['id']+'.py';z.writestr(filename,program)
        meta=e['meta'];outputs[e['id']]=meta['referenceOutput']
        writer.writerow([filename,e['name'],e['topic'],meta['week'],meta['level'],e['task'],e['hint'],e['explanation']])
    z.writestr('catalog.csv',stream.getvalue());z.writestr('expected-output.json',json.dumps(outputs,indent=2))
with zipfile.ZipFile(path) as z:
    assert len([n for n in z.namelist() if n.endswith('.py')])==100
    assert len(z.namelist())==len(set(z.namelist()))
    assert len(list(csv.DictReader(io.StringIO(z.read('catalog.csv').decode()))))==100
print('Prepared 100 standalone worked programs, catalog and reference outputs.')
