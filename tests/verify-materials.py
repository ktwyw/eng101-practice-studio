"""Verify 28 weekly PDF downloads and 14 two-file bundles against their manifest."""
import hashlib,io,json,pathlib,re,subprocess,zipfile
from pypdf import PdfReader
root=pathlib.Path(__file__).resolve().parents[1]
script="const fs=require('fs'),vm=require('vm'),c=vm.createContext({});vm.runInContext(fs.readFileSync('dist/course-materials.js','utf8')+';globalThis.rows=COURSE_MATERIALS;',c);console.log(JSON.stringify(c.rows));"
weeks=json.loads(subprocess.check_output(['node','-e',script],cwd=root))
assert [w['week'] for w in weeks]==list(range(1,15))
allowed=set()
for week in weeks:
    assert {f['kind'] for f in week['files']}=={'slides','notes'}
    bundle=root/'dist'/week['bundle'];allowed.add(bundle.name)
    assert bundle.stat().st_size==week['bundleBytes']
    with zipfile.ZipFile(bundle) as z:
        assert len(z.namelist())==2
        for f in week['files']:
            path=root/'dist'/f['path'];allowed.add(path.name);raw=path.read_bytes()
            assert re.fullmatch(r'week-\d{2}-(slides|notes)\.pdf',path.name)
            assert hashlib.sha256(raw).hexdigest()==f['sha256']
            assert len(raw)==f['bytes']
            assert len(PdfReader(io.BytesIO(raw)).pages)==f['pages']
            assert z.read(path.name)==raw
assert {p.name for p in (root/'dist/downloads/course-materials').iterdir()}==allowed
print('PASS: all 28 PDFs, their page counts, byte sizes and SHA-256 hashes, and all 14 two-document ZIP bundles match the published manifest.')
