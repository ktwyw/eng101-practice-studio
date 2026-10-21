"""Publish only weekly lecture slides and detailed notes from the supplied archive."""
import argparse,hashlib,io,json,pathlib,re,zipfile
from pypdf import PdfReader
ROOT=pathlib.Path(__file__).resolve().parents[1]
parser=argparse.ArgumentParser();parser.add_argument('archive',type=pathlib.Path);args=parser.parse_args()
folder=ROOT/'dist/downloads/course-materials';folder.mkdir(parents=True,exist_ok=True)
weeks=[]
with zipfile.ZipFile(args.archive) as source:
    for week in range(1,15):
        files=[];payloads=[]
        for kind in ['slides','notes']:
            pattern=fr'ENG101_Week{week}_'+('(?:Complete_Slides[^/]*|Course_Review)' if kind=='slides' else 'Detailed_Reading_Notes')+r'\.pdf$'
            matches=[name for name in source.namelist() if re.fullmatch(pattern,pathlib.PurePosixPath(name).name)]
            assert len(matches)==1,(week,kind,matches)
            original=matches[0];raw=source.read(original);reader=PdfReader(io.BytesIO(raw))
            assert not reader.is_encrypted and len(reader.pages)>0
            filename=f'week-{week:02}-{kind}.pdf';(folder/filename).write_bytes(raw)
            label='Lecture slides' if kind=='slides' else 'Detailed reading notes'
            files.append(dict(kind=kind,label=label,path='downloads/course-materials/'+filename,bytes=len(raw),pages=len(reader.pages),sha256=hashlib.sha256(raw).hexdigest(),original=pathlib.PurePosixPath(original).name))
            payloads.append((filename,raw))
            excerpt=' '.join((p.extract_text() or '') for p in list(reader.pages)[:2])
            print(f'Week {week:02} {kind}: {len(reader.pages)} pages, {len(raw)} bytes | '+re.sub(r'\s+',' ',excerpt)[:120])
        bundle=f'week-{week:02}-materials.zip'
        with zipfile.ZipFile(folder/bundle,'w',zipfile.ZIP_DEFLATED) as zipped:
            for filename,raw in payloads:zipped.writestr(filename,raw)
        weeks.append(dict(week=week,files=files,bundle='downloads/course-materials/'+bundle,bundleBytes=(folder/bundle).stat().st_size))
assert len(weeks)==14 and sum(len(w['files']) for w in weeks)==28
(ROOT/'dist/course-materials.js').write_text('/* Weekly PDFs supplied by the instructor; documents retain their original bytes. */\nconst COURSE_MATERIALS = '+json.dumps(weeks,ensure_ascii=False,indent=2)+';\n',encoding='utf8')
print('Verified 28 PDFs and prepared 14 weekly ZIP bundles. PDF bytes are unchanged.')
