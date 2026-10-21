"""Execute every accepted guided answer and all 100 downloadable worked programs."""
import csv,io,json,pathlib,subprocess,sys,tempfile,zipfile
ROOT=pathlib.Path(__file__).resolve().parents[1]
script="const fs=require('fs'),vm=require('vm'),c=vm.createContext({});vm.runInContext(['content.js','extended-practice.js','code-lab-bank.js'].map(f=>fs.readFileSync('dist/'+f,'utf8')).join('\\n')+';globalThis.rows=EXERCISES.map(e=>({...e,meta:CODE_LAB_META[e.id]||e}));',c);console.log(JSON.stringify(c.rows));"
rows=json.loads(subprocess.check_output(['node','-e',script],cwd=ROOT));assert len(rows)==100
assert len({e['id'] for e in rows})==100
variants=0
with tempfile.TemporaryDirectory() as directory:
    for e in rows:
        assert e['hint'] and len(e['explanation'])>30
        for answer in e['answers']:
            assert '\n' not in answer
            indent=e.get('indent',4 if e['id'] in ['c4','c5'] else 0)
            code=e['before']+'\n'+' '*indent+answer+'\n'+e['after']+'\n'+e.get('tests','')
            result=subprocess.run([sys.executable,'-I','-c',code],cwd=directory,capture_output=True,text=True,timeout=3)
            assert result.returncode==0,(e['id'],result.stderr)
            assert result.stdout.rstrip('\n')==e['meta']['referenceOutput'],(e['id'],result.stdout)
            variants+=1
    with zipfile.ZipFile(ROOT/'dist/downloads/eng101-code-lab-worked-programs.zip') as z:
        catalog=list(csv.DictReader(io.StringIO(z.read('catalog.csv').decode())))
        assert len(catalog)==100
        expected=json.loads(z.read('expected-output.json'))
        for e in rows:
            filename='programs/'+e['id']+'.py';code=z.read(filename).decode()
            assert 'Instructor: Prof. Yanwei Wang' in code
            assert 'Nazarbayev University' not in code
            result=subprocess.run([sys.executable,'-I','-c',code],cwd=directory,capture_output=True,text=True,timeout=3)
            assert result.returncode==0,(filename,result.stderr)
            assert result.stdout.rstrip('\n')==expected[e['id']]==e['meta']['referenceOutput'],filename
print(f'PASS: {variants} accepted solution variants, regression assertions and all 100 downloadable worked programs match independent reference outputs.')
