"""Verify repaired programs and expose each deliberately faulty source case."""
import contextlib
import io
import json
import subprocess
import sys

export=r"""
const fs=require('fs'),vm=require('vm'),c=vm.createContext({});
vm.runInContext(fs.readFileSync('dist/debugging-bank.js','utf8')+';globalThis.cases=DEBUG_CASES;',c);
process.stdout.write(JSON.stringify(c.cases));
"""
cases=json.loads(subprocess.check_output(['node','-e',export],text=True))
class StepLimit(Exception):
    pass
class LimitedOutput(io.StringIO):
    def write(self,text):
        if self.tell()<5000:
            return super().write(text[:5000-self.tell()])
        return len(text)
def check(code,tests):
    namespace={};steps=0;output=LimitedOutput();program_output=None;error=None
    def trace(frame,event,arg):
        nonlocal steps
        if event=='line':
            steps+=1
            if steps>1500:
                raise StepLimit('Execution stopped after 1500 traced steps')
        return trace
    try:
        with contextlib.redirect_stdout(output):
            sys.settrace(trace)
            exec(compile(code,'practice','exec'),namespace)
            program_output=output.getvalue().rstrip('\n')
            output.seek(0);output.truncate()
            exec(compile(tests,'regression checks','exec'),namespace)
    except BaseException as exc:
        error=type(exc).__name__
    finally:
        sys.settrace(None)
    return program_output if program_output is not None else output.getvalue().rstrip('\n'),error
repairs=0
for case in cases:
    for solution in case['solutions']:
        printed,error=check(solution,case['tests'])
        assert error is None,(case['id'],'repair fails',error)
        assert printed==case['referenceOutput'],(case['id'],'reference output changed')
        repairs+=1
    printed,error=check(case['buggy'],case['tests'])
    expected=case['observed']['error']['type']
    if error is None and printed!=case['referenceOutput']:
        error='OutputMismatch'
    assert error==expected,(case['id'],'wrong failure reason',error,expected)
print(f'PASS: {repairs} debugging repairs pass their regression checks; all {len(cases)} faulty cases reproduce the intended failure or incorrect output. Unbounded examples stop at a fixed trace limit.')
