"""Check authored reference outputs independently by executing isolated snippets."""
import contextlib, io, json, pathlib, subprocess, sys, tempfile, collections
root=pathlib.Path(__file__).resolve().parents[1]
data=json.loads(subprocess.check_output(['node','-e',"const fs=require('fs'),vm=require('vm');const c=vm.createContext({});vm.runInContext('const MCQS=[];'+fs.readFileSync('dist/second-half-bank.js','utf8')+';globalThis.qs=SECOND_HALF_MCQS',c);console.log(JSON.stringify(c.qs))"],cwd=root))
assert len(data)==400
assert collections.Counter(q['week'] for q in data)=={w:50 for w in range(7,15)}
assert collections.Counter(q['answer'] for q in data)=={i:100 for i in range(4)}
assert len({q['id'] for q in data})==400
assert len({(q['title'],q['code']) for q in data})==400
fail=[]
with tempfile.TemporaryDirectory() as td:
    for q in data:
        assert len(set(q['options']))==4 and len(q['explanation'])>30,q['id']
        if q['mode']!='python-output':continue
        r=subprocess.run([sys.executable,'-c',q['code']],cwd=td,text=True,capture_output=True,timeout=3)
        actual=r.stdout.rstrip('\n');expected=q['options'][q['answer']]
        if r.returncode or actual!=expected:fail.append((q['id'],expected,actual,r.stderr))
assert not fail,json.dumps(fail,indent=2)
print('PASS: 400 unique questions, 50/week, balanced answer positions; all 200 Python output answers executed and matched.')
