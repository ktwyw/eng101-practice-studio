"""Run all reading examples headlessly and confirm reproducible printed outputs."""
import contextlib
import io
import json
import os
from pathlib import Path
import random
import subprocess
import sys
import tempfile
import warnings
import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt

export=r"""
const fs=require('fs'),vm=require('vm'),c=vm.createContext({});
vm.runInContext(fs.readFileSync('dist/practice-bank.js','utf8').replace('MCQS.push(...IMPORTED_MCQS);','')+'\n'+fs.readFileSync('dist/reading-bank.js','utf8')+';globalThis.data=READING_EXAMPLES;',c);
process.stdout.write(JSON.stringify(c.data));
"""
examples=json.loads(subprocess.check_output(['node','-e',export],text=True))
class Limit(Exception):
    pass
class BoundedOutput(io.StringIO):
    def write(self,text):
        if self.tell()+len(text)>16000:
            raise Limit('Excessive output')
        return super().write(text)
base=Path.cwd();plots=0
for example in examples:
    out=BoundedOutput();err=io.StringIO();steps=[0]
    def trace(frame,event,arg):
        if frame.f_code.co_filename=='reading-example' and event=='line':
            steps[0]+=1
            if steps[0]>80000:
                raise Limit('Excessive steps')
        return trace
    random.seed(101);np.random.seed(101);plt.close('all');plt.rcdefaults()
    try:
        with tempfile.TemporaryDirectory(prefix='reading-verify-') as directory:
            os.chdir(directory)
            with warnings.catch_warnings(),contextlib.redirect_stdout(out),contextlib.redirect_stderr(err):
                warnings.simplefilter('ignore')
                sys.settrace(trace)
                try:
                    exec(compile(example['code'],'reading-example','exec'),{})
                finally:
                    sys.settrace(None)
        actual=out.getvalue().rstrip('\n')
        assert actual==example['output'],(example['id'],'output mismatch',actual,example['output'])
        assert len(plt.get_fignums())==len(example['images']),(example['id'],'figure count mismatch')
        plots+=len(example['images'])
    finally:
        sys.settrace(None);os.chdir(base);plt.close('all')
for example in examples:
    for image in example['images']:
        assert (base/'dist'/image).is_file(),image
print(f'PASS: all {len(examples)} reading programs reproduce their reference outputs and {plots} figures; embedded assertions pass.')
