"""Package the current website's reading bank and an explanatory catalog."""
import ast,csv,io,json,pathlib,subprocess,zipfile
ROOT=pathlib.Path(__file__).resolve().parents[1]
export="const fs=require('fs'),vm=require('vm'),c=vm.createContext({});vm.runInContext('const PROGRAMS=[];'+fs.readFileSync('dist/reading-bank.js','utf8')+';globalThis.data=READING_EXAMPLES;',c);console.log(JSON.stringify(c.data));"
examples=json.loads(subprocess.check_output(['node','-e',export],cwd=ROOT))
wang=sum(e['reading']=='wang' for e in examples);guttag=sum(e['reading']=='guttag' for e in examples)
readme=f'''ENG 101 Reading Examples
Instructor: Prof. Yanwei Wang

{len(examples)} standalone Python programs: {wang} in the Wang collection and {guttag} Guttag-aligned
companions. The Wang collection includes 272 chapter-source adaptations and
48 original companions. The 80 Guttag companions are newly written programs
aligned with concepts in the cited second-edition book. Chapter references do
not imply that Guttag authored the companion code. Origins are identified in
each file and in catalog.csv.

Run one program at a time using Python 3.10 or later. Some examples require the
packages named in catalog.csv (NumPy, Pandas, Matplotlib or SciPy). Programs use
embedded data fixtures and local seeded generators where appropriate. Generated
files are written into the current working directory. Plots display in your
Python environment. Reference outputs are included in the outputs folder.

Predict, run, explain, modify one input, then predict again. Keep the supplied
assertions and add independent known-result and boundary checks. Seeded random
examples are repeatable illustrations, not statistical guarantees. Classroom
models and limits are illustrative, not certified engineering design rules.

Readings:
Yanwei Wang, Programming for Engineers with Python, working course manuscript.
John V. Guttag, Introduction to Computation and Programming Using Python:
With Application to Understanding Data, second edition, MIT Press.
'''
text=io.StringIO();writer=csv.writer(text)
writer.writerow(['file','reading','chapter','chapter_title','topic','title','requirements','explanation','try_it','origin'])
archive=ROOT/'dist/downloads/eng101-reading-examples.zip'
with zipfile.ZipFile(archive,'w',zipfile.ZIP_DEFLATED) as z:
    z.writestr('README.txt',readme)
    for e in examples:
        name=f'{e["reading"]}/chapter_{e["chapter"]:02}/{e["id"]}.py'
        header=f'# Instructor: Prof. Yanwei Wang\n# {e["source"]}\n# {e["origin"]}\n'
        content=header+'\n'+e['code']+'\n'
        ast.parse(content)
        z.writestr(name,content)
        z.writestr(f'outputs/{e["id"]}.txt',e['output']+'\n')
        writer.writerow([name,e['readingLabel'],e['chapter'],e['chapterTitle'],e['topic'],e['name'],', '.join(e['requirements']),e['explanation'],e['tryIt'],e['origin']])
    z.writestr('catalog.csv',text.getvalue())
with zipfile.ZipFile(archive) as z:
    names=z.namelist();programs=[n for n in names if n.endswith('.py')]
    assert len(names)==len(set(names))
    assert len(programs)==400
    assert sum(n.startswith('wang/') for n in programs)==320
    assert sum(n.startswith('guttag/') for n in programs)==80
    assert len(list(csv.DictReader(io.StringIO(z.read('catalog.csv').decode()))))==400
    assert len([n for n in names if n.startswith('outputs/')])==400
    for name in names:
        assert 'Nazarbayev University' not in z.read(name).decode(),name
    for name in programs:
        assert 'Instructor: Prof. Yanwei Wang' in z.read(name).decode()
print('PASS: 400-program ZIP: 320 Wang, 80 Guttag; catalog, outputs, Python syntax and attribution checked.')
