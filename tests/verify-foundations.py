"""Execute authored new output questions and check the 600/400 collection contract."""
import collections,json,pathlib,subprocess,sys,tempfile
root=pathlib.Path(__file__).resolve().parents[1]
script="const fs=require('fs'),vm=require('vm'),c=vm.createContext({});vm.runInContext(['content.js','extended-practice.js','practice-bank.js','first-half-bank.js','second-half-bank.js'].map(f=>fs.readFileSync('dist/'+f,'utf8')).join('\\n')+';globalThis.data={all:MCQS,added:FOUNDATION_ADDITIONS,first:FIRST_HALF_MCQS.map(q=>({...q,assignedWeek:firstWeek(q)}))};',c);console.log(JSON.stringify(c.data));"
data=json.loads(subprocess.check_output(['node','-e',script],cwd=root))
assert len(data['all'])==1000 and len(data['first'])==600 and len(data['added'])==258
assert collections.Counter(q['assignedWeek'] for q in data['first'])=={i:100 for i in range(1,7)}
assert len({q['id'] for q in data['all']})==1000
assert len({(q['title'],q['code']) for q in data['all']})==1000
old=[q for q in data['all'] if q['bank']!='foundation-new'] if all('bank' in q for q in data['all']) else [q for q in data['all'] if q.get('bank')!='foundation-new']
assert not [q['id'] for q in data['added'] if q['code'] and any(q['code']==p['code'] for p in old)]
assert collections.Counter(q['answer'] for q in data['added'])=={0:65,1:65,2:64,3:64}
checked=0
with tempfile.TemporaryDirectory() as directory:
    for q in data['added']:
        assert len(q['options'])==4 and len(set(q['options']))==4
        assert len(q['explanation'])>30
        if q['mode']=='python-output':
            result=subprocess.run([sys.executable,'-c',q['code']],cwd=directory,text=True,capture_output=True,timeout=3)
            assert result.returncode==0,(q['id'],result.stderr)
            assert result.stdout.rstrip('\n')==q['options'][q['answer']],q['id']
            checked+=1
assert checked==202
print('PASS: 600 foundation MCQs, 100/week, 258 unique additions, balanced answer positions, and all 202 new Python output answers verified. Total MCQs: 1000.')
