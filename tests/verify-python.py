"""Execute every program study and guided solution in isolated Python processes."""
import json
import subprocess
import sys

export = r"""
const fs=require('fs'),vm=require('vm');const c=vm.createContext({});
vm.runInContext(['content.js','extended-practice.js','practice-bank.js'].map(f=>fs.readFileSync('dist/'+f,'utf8')).join('\n')+';globalThis.data={EXERCISES,PROGRAMS};',c);
process.stdout.write(JSON.stringify(c.data));
"""
data=json.loads(subprocess.check_output(['node','-e',export],text=True))
expected={
 'c1':'23.5','c2':'8.0','c3':'Check cooling','c4':'15','c5':'4','c6':'21.0','c7':'116','c8':'12','c9':'22','c10':'Safe interval','c11':'0\n1\n2\n3\n4','c12':'0.0078125',
 'w6-code-01':'3\n2\n1\nLaunch','w6-code-02':'120','w6-code-03':'1.5','w6-code-04':'8','w6-code-05':'True','w6-code-06':'9.5','w6-code-07':"['steel', 'aluminum']",'w6-code-08':"{'Cu': 2, 'Al': 1}",'w6-code-09':'250.0','w6-code-10':'1'
}
def execute(code):
 p=subprocess.run([sys.executable,'-I','-c',code],capture_output=True,text=True,timeout=5)
 assert p.returncode==0,p.stderr
 return p.stdout.rstrip('\n')
variants=0
for e in data['EXERCISES']:
 indent=e.get('indent',4 if e['id'] in ('c4','c5') else 0)
 for answer in e['answers']:
  code=e['before']+'\n'+' '*indent+answer+'\n'+e['after']
  assert execute(code)==expected[e['id']],e['id']
  variants+=1
for p in data['PROGRAMS']:
 assert execute(p['code'])==p['output'],p['id']
print(f"PASS: {variants} guided solutions match independent expected outputs; all {len(data['PROGRAMS'])} program studies reproduce their displayed Python output.")
