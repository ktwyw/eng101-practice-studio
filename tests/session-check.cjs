const fs=require('fs'),vm=require('vm'),assert=require('assert/strict');
const listeners={},nodes={},memory={};
function listen(e,f){const prior=listeners[e];listeners[e]=prior?(event=>{prior(event);f(event)}):f;}
function node(id){return nodes[id]||(nodes[id]={innerHTML:'',textContent:'',value:'',disabled:false,hidden:false,attributes:{},getBoundingClientRect(){return {top:0}},focus(){},showModal(){this.open=true},close(){this.open=false},classList:{values:new Set(),toggle(name,on){if(on)this.values.add(name);else this.values.delete(name);}},setAttribute(k,v){this.attributes[k]=v},removeAttribute(k){delete this.attributes[k]}});}
const links=['home','banks','banks/weeks-1-6','banks/weeks-7-14','practice','code','debugging','programs','readings','materials','session','guide'].map(p=>({...node(p),dataset:{page:p}}));
const c=vm.createContext({console,Date,Math,JSON,Number,String,Array,Object,Boolean,Set,location:{hash:'#practice'},sessionStorage:{getItem:k=>memory[k]||null,setItem:(k,v)=>memory[k]=v},window:{scrollTo(){},addEventListener:listen},document:{querySelector:s=>node(s==='main'?'main':s.slice(1)),querySelectorAll:()=>links,getElementById:node,addEventListener:listen}});
vm.runInContext(['content.js','extended-practice.js','code-lab-bank.js','practice-bank.js','program-studies-bank.js','first-half-bank.js','reading-bank.js','reading-room.js','debugging-bank.js','debugging-lab.js','second-half-bank.js','second-half-ui.js','site-structure.js','first-half-ui.js','course-materials.js','materials-page.js','code-lab-ui.js','app.js'].map(f=>fs.readFileSync('dist/'+f,'utf8')).join('\n')+`;globalThis.test={stats,dashboard,firstHalfHome,firstFiltered,startFirst,firstQuestionType,firstWeek,materialsHome,filteredMaterials,collectionCounts,home,codeHome,filteredCodeExercises,codeMeta,completedCode,nextCodeExercise,guide,session,startQuiz,quiz,summary,exercise,checkCode,normalizeCode,normalizeOutput,route,banks,topicHome,programHome,filteredPrograms,nextProgramStudy,programStudy,checkOutput,debuggingHome,filteredDebugCases,debugExercise,checkRepair,normalizeRepair,secondHalfHome,halfFiltered,startHalf,readingHome,readingCases,referenceExtras,getState:()=>state,getRun:()=>run};globalThis.content={TOPICS,MCQS,EXERCISES,PROGRAMS,IMPORTED_MCQS,DEBUG_CASES,READING_EXAMPLES,COURSE_READINGS,SECOND_HALF_MCQS,SECOND_HALF_WEEKS,FIRST_HALF_MCQS,FIRST_HALF_WEEKS,FOUNDATION_ADDITIONS,COURSE_MATERIALS,COURSE_PROGRAMS,PROGRAM_STUDY_ADDITIONS};`,c);
const t=c.test,d=c.content;
const click=(id,dataset={})=>listeners.click({target:{closest:()=>({id,dataset,hasAttribute:n=>n==='data-mixed'&&!!dataset.mixed})}});
assert.equal(d.MCQS.length,1000);assert.equal(d.EXERCISES.length,100);assert.equal(d.PROGRAMS.length,600);
const ids=[...d.MCQS,...d.EXERCISES,...d.PROGRAMS,...d.DEBUG_CASES].map(x=>x.id);assert.equal(new Set(ids).size,1800);
for(const topic of d.TOPICS)assert.ok(d.MCQS.filter(q=>q.topic===topic.id).length>=4);
for(const q of d.MCQS){assert.equal(q.options.length,4);assert.ok(q.answer>=0&&q.answer<4);assert.ok(q.explanation.length>20,q.id);}
for(const f of [t.home,t.codeHome,t.guide,t.session]){f();assert.ok(nodes.main.innerHTML.length>1500);}
listeners.input({target:{id:'search',value:'no-such-topic'}});assert.equal(nodes['no-results'].hidden,false);
listeners.input({target:{id:'search',value:'loops'}});assert.equal(nodes['no-results'].hidden,true);assert.ok(nodes['topic-grid'].innerHTML.includes('While loops'));
// Wrong attempt, answer lock, next, and retry retain first-submission accuracy.
const q=d.MCQS[0];t.startQuiz([q.id],'State check');t.quiz();
assert.ok(nodes.main.innerHTML.includes('id="check-answer" disabled'));
listeners.change({target:{name:'answer',value:String((q.answer+1)%4)}});click('check-answer');
assert.equal(t.stats().done,1);assert.equal(t.stats().missed,1);assert.ok(nodes.main.innerHTML.includes(q.explanation));
click('check-answer');assert.equal(t.getState().records[q.id].attempts,1);
click('next-question');assert.equal(c.location.hash,'summary');
t.startQuiz([q.id],'Retry');t.quiz();listeners.change({target:{name:'answer',value:String(q.answer)}});click('check-answer');
assert.equal(t.stats().done,1);assert.equal(t.stats().first,0);assert.equal(t.stats().missed,0);
assert.equal(t.getState().records[q.id].attempts,2);
// Empty code does not record an attempt; showing a solution does not solve it.
t.exercise('c7');node('code-answer').value='';t.checkCode('c7');assert.equal(t.stats().done,1);
click('show-solution',{id:'c7'});assert.equal(t.stats().code,0);assert.ok(t.getState().revealed.includes('c7'));
node('code-answer').value=" pressure_kpa = sensor [ 'pressure' ] ";t.checkCode('c7');assert.equal(t.stats().code,1);
assert.notEqual(t.normalizeCode("sensor['press ure']"),t.normalizeCode('sensor["pressure"]'));
// Token-aware checks accept harmless spacing, but reject invalid token boundaries.
for(const exercise of d.EXERCISES)for(const answer of exercise.answers)assert.notEqual(t.normalizeCode(answer),null);
for(const [actual,expected] of [
  ['if temperature>=75:', 'if temperature >= 75:'],
  ['for i in range ( 0 , 5 ) :', 'for i in range(0, 5):'],
  ['total += value', 'total+=value'],
  ["pressure_kpa=sensor['pressure']", 'pressure_kpa = sensor["pressure"]']
])assert.equal(t.normalizeCode(actual),t.normalizeCode(expected));
for(const [invalid,expected] of [
  ['iftemperature>=75:', 'if temperature >= 75:'],
  ['temperature = flo at(raw)', 'temperature = float(raw)'],
  ['if temperature > = 75:', 'if temperature >= 75:'],
  ['total + = value', 'total += value'],
  ['for iin range(5):', 'for i in range(5):'],
  ['whileerror>tolerance:', 'while error > tolerance:'],
  ['temperature = float(ra\nw)', 'temperature = float(raw)'],
  ['pressure_kpa = sensor["pressure]', 'pressure_kpa = sensor["pressure"]']
])assert.notEqual(t.normalizeCode(invalid),t.normalizeCode(expected));
t.exercise('c3');node('code-answer').value='iftemperature>=75:';t.checkCode('c3');
assert.equal(t.getState().records.c3.latestCorrect,false);
node('code-answer').value='if temperature >= 75:';t.checkCode('c3');
assert.equal(t.getState().records.c3.latestCorrect,true);
assert.equal(t.getState().records.c3.firstCorrect,false);
// Persisted data contains attempts and survives a new application runtime.
const persisted=memory['eng101-studio-v1'];assert.ok(persisted.includes('c7'));
const oldStats=JSON.stringify(t.stats());vm.runInContext('state=JSON.parse(sessionStorage.getItem(KEY))',c);assert.equal(JSON.stringify(t.stats()),oldStats);
click('reset-session');assert.equal(nodes['reset-dialog'].open,true);click('cancel-reset');assert.equal(nodes['reset-dialog'].open,false);assert.equal(t.stats().done,3);
click('reset-session');click('confirm-reset');assert.equal(t.stats().done,0);assert.equal(t.getState().revealed.length,0);
console.log('PASS: content structure, routes, search, MCQ locking, retries, explanations, guided code checks, solution handling, session persistence and reset.');
// All curated questions preserve source identity, have a program, and can complete a round.
assert.equal(d.IMPORTED_MCQS.length,310);
for(const q of d.IMPORTED_MCQS){const p=d.PROGRAMS.find(p=>p.id===q.program);assert.ok(p,q.id);assert.equal(p.code,q.code);assert.ok(p.questionIds.includes(q.id));}
for(const q of d.MCQS){t.startQuiz([q.id],'Complete content check');t.quiz();listeners.change({target:{name:'answer',value:String(q.answer)}});click('check-answer');assert.ok(t.getState().records[q.id].latestCorrect,q.id);assert.ok(nodes.main.innerHTML.includes('Correct choice:'));click('next-question');assert.equal(c.location.hash,'summary');}
assert.equal(t.stats().mcq,1000);
// Every new collection route renders, including every program and topic.
t.banks();assert.ok(nodes.main.innerHTML.includes('Choose your semester half'));t.firstHalfHome();for(const b of ['A','B','C','D'])assert.ok(nodes.main.innerHTML.includes('Mock '+b+' practice'));
for(const topic of d.TOPICS){t.topicHome(topic.id);assert.ok(nodes.main.innerHTML.includes(topic.name));click('',{topicStart:topic.id,sample:'yes'});assert.ok(t.getRun().ids.length<=10);assert.ok(t.getRun().ids.every(id=>d.MCQS.find(q=>q.id===id).topic===topic.id));}
for(const b of ['A','B','C','D']){click('',{bank:b,sample:'yes'});assert.equal(t.getRun().ids.length,10);assert.equal(new Set(t.getRun().ids).size,10);assert.ok(t.getRun().ids.every(id=>d.MCQS.find(q=>q.id===id).bank===b));}
t.programHome();assert.equal(nodes['program-count'].textContent,'200 programs');
click('',{programFilter:'lecture'});assert.equal(c.location.hash,'programs');assert.equal(t.filteredPrograms().length,10);
listeners.input({target:{id:'program-search',value:'Fibonacci'}});assert.equal(t.filteredPrograms().length,1);
listeners.input({target:{id:'program-search',value:'this search has no match'}});assert.equal(t.filteredPrograms().length,0);assert.ok(nodes['program-grid'].innerHTML.includes('No programs match'));
click('clear-program-filters');assert.equal(t.filteredPrograms().length,200);
listeners.change({target:{id:'program-topic',value:'strings'}});assert.ok(t.filteredPrograms().length>0);assert.ok(t.filteredPrograms().every(p=>p.topic==='strings'));click('clear-program-filters');
// Output comparisons normalize Windows newlines and trailing whitespace, preserving leading spaces.
assert.equal(t.normalizeOutput('a  \r\nb\t\r\n'),'a\nb');assert.notEqual(t.normalizeOutput('  x'),t.normalizeOutput('x'));
const study=d.PROGRAMS[0];t.programStudy(study.id);node('program-answer').value='';t.checkOutput(study.id);assert.equal(t.getState().records[study.id],undefined);
node('program-answer').value='a wrong prediction';t.checkOutput(study.id);assert.equal(t.getState().records[study.id].latestCorrect,false);
click('reveal-output',{id:study.id});assert.equal(t.stats().programs,0);assert.ok(t.getState().revealed.includes(study.id));
for(const p of d.PROGRAMS){t.programStudy(p.id);node('program-answer').value=p.output.split('\n').map(x=>x+' ').join('\r\n')+'\r\n';t.checkOutput(p.id);assert.ok(t.getState().records[p.id].latestCorrect,p.id);assert.ok(nodes.main.innerHTML.includes('Your output matches'));if(p.questionIds.length){click('',{programQuiz:p.id});assert.equal(t.getRun().ids.length,p.questionIds.length);}}
assert.equal(t.stats().programs,600);assert.equal(t.getState().records[study.id].firstCorrect,false);
// Every guided accepted answer checks, while solutions viewed alone remain unsolved.
for(const e of d.EXERCISES){for(const line of e.answers){t.exercise(e.id);node('code-answer').value=line;t.checkCode(e.id);assert.ok(t.getState().records[e.id].latestCorrect,e.id);}}
assert.equal(t.stats().code,100);assert.equal(t.stats().done,1700);
t.session();assert.ok(nodes.main.innerHTML.includes('600 / 600 program outputs checked'));assert.ok(nodes.main.innerHTML.includes('/ 1000'));assert.ok(nodes.main.innerHTML.includes('/ 100'));
// Original session records survive loading an expanded content bank.
const before=JSON.stringify(t.stats());vm.runInContext('state=JSON.parse(sessionStorage.getItem(KEY))',c);assert.equal(JSON.stringify(t.stats()),before);
click('reset-session');click('confirm-reset');assert.equal(t.stats().done,0);assert.equal(t.stats().programs,0);
console.log('PASS: all 1000 MCQs, 100 guided exercises, 600 program studies, collections, sampling, topic filters, output prediction, first attempts, persistence, and reset.');
// Debugging discovery, filters, draft persistence, repair checks, and first attempts.
assert.equal(d.DEBUG_CASES.length,100);t.debuggingHome();assert.equal(nodes['debug-count'].textContent,'100 exercises');
listeners.change({target:{id:'debug-source',value:'w7'}});assert.equal(t.filteredDebugCases().length,12);
listeners.change({target:{id:'debug-source',value:'w8'}});assert.equal(t.filteredDebugCases().length,8);
click('debug-clear-filters');click('',{debugCategory:'syntax'});assert.equal(t.filteredDebugCases().length,11);
listeners.input({target:{id:'debug-search',value:'not a matching debugging search'}});assert.equal(t.filteredDebugCases().length,0);assert.ok(nodes['debug-grid'].innerHTML.includes('No debugging exercises match'));
click('debug-clear-filters');assert.equal(t.filteredDebugCases().length,100);
listeners.change({target:{id:'debug-source',value:'new'}});assert.equal(t.filteredDebugCases().length,40);assert.ok(t.filteredDebugCases().every(e=>e.id.startsWith('debug-new-')));click('debug-clear-filters');
const de=d.DEBUG_CASES[0];t.debugExercise(de.id);node('debug-editor').value='';t.checkRepair(de.id);assert.equal(t.stats().done,0);
node('debug-editor').value=de.buggy;t.checkRepair(de.id);assert.equal(t.stats().debug,0);assert.equal(t.stats().missed,1);assert.equal(t.getState().records[de.id].firstCorrect,false);
click('review-missed');assert.equal(c.location.hash,'debug/'+de.id);
click('reveal-repair',{id:de.id});assert.equal(t.stats().debug,0);assert.ok(t.getState().revealed.includes(de.id));assert.ok(nodes.main.innerHTML.includes('Viewing the repair does not mark'));
node('debug-editor').value='a draft kept across navigation';listeners.input({target:{id:'debug-editor',dataset:{id:de.id},value:node('debug-editor').value}});t.debuggingHome();t.debugExercise(de.id);assert.ok(nodes.main.innerHTML.includes('a draft kept across navigation'));
const firstRecord=JSON.stringify(t.getState().records[de.id]);click('reset-repair',{id:de.id});assert.equal(t.getState().debugDrafts[de.id],undefined);assert.equal(JSON.stringify(t.getState().records[de.id]),firstRecord);
assert.equal(t.normalizeRepair('x = 1 # comment\nprint(x)'),t.normalizeRepair('x=1\r\nprint ( x )\r\n'));
assert.equal(t.normalizeRepair('if x:\n  print("ok")'),t.normalizeRepair("if x:\n    print('ok')"));
assert.notEqual(t.normalizeRepair('if x:\nprint("ok")'),t.normalizeRepair('if x:\n    print("ok")'));
assert.notEqual(t.normalizeRepair('returnforce / area'),t.normalizeRepair('return force / area'));
assert.notEqual(t.normalizeRepair('x = "a b"'),t.normalizeRepair('x = "ab"'));
assert.notEqual(t.normalizeRepair('x = 2'),t.normalizeRepair('x = "2"'));
for(const de of d.DEBUG_CASES){assert.ok(de.observed.error,de.id);assert.ok(de.explanation.length>40,de.id);assert.notEqual(t.normalizeRepair(de.buggy),t.normalizeRepair(de.solutions[0]),de.id);for(const solution of de.solutions){assert.ok(t.normalizeRepair(solution),de.id);t.debugExercise(de.id);node('debug-editor').value=solution;t.checkRepair(de.id);assert.ok(t.getState().records[de.id].latestCorrect,de.id);assert.ok(nodes.main.innerHTML.includes('matches a verified repair'),de.id);}}
assert.equal(t.stats().debug,100);assert.equal(t.stats().done,100);assert.equal(t.stats().first,99);assert.equal(t.stats().missed,0);
t.debuggingHome();listeners.change({target:{id:'debug-status',value:'solved'}});assert.equal(t.filteredDebugCases().length,100);listeners.change({target:{id:'debug-status',value:'new'}});assert.equal(t.filteredDebugCases().length,0);click('debug-clear-filters');
t.session();assert.ok(nodes.main.innerHTML.includes('100 / 100 debugging exercises repaired'));t.dashboard();assert.ok(nodes.main.innerHTML.includes('/ 1800'));
const debugSaved=JSON.stringify(t.stats());vm.runInContext('state=JSON.parse(sessionStorage.getItem(KEY))',c);assert.equal(JSON.stringify(t.stats()),debugSaved);assert.ok(t.getState().debugDrafts[de.id]);
click('reset-session');click('confirm-reset');assert.equal(t.stats().debug,0);assert.equal(t.getState().debugDrafts,undefined);
console.log('PASS: 100 debugging exercises, lexical/indentation checks, filters, drafts, hints, solution reveal, retry statistics, persistence, and reset.');
// Reading sources, chapter navigation, pagination, figures, and attribution.
assert.equal(d.READING_EXAMPLES.length,400);assert.equal(d.COURSE_READINGS.length,2);
t.readingHome();assert.equal(nodes['reading-count'].textContent,'400 examples');assert.equal((nodes['reading-grid'].innerHTML.match(/class="program-card"/g)||[]).length,24);assert.ok(nodes.main.innerHTML.includes('Instructor: Prof. Yanwei Wang'));assert.ok(!nodes['reading-grid'].innerHTML.includes('Week null'));
click('',{readingBook:'wang'});assert.equal(t.readingCases().length,320);
for(let chapter=1;chapter<=16;chapter++){listeners.change({target:{id:'reading-chapter',value:String(chapter)}});assert.ok(t.readingCases().length>0);assert.ok(t.readingCases().every(p=>p.chapter===chapter));}
click('',{readingBook:'guttag'});assert.equal(t.readingCases().length,80);assert.ok(t.readingCases().every(p=>p.origin.includes('Newly written')));
listeners.input({target:{id:'reading-search',value:'quarter-circle'}});assert.equal(t.readingCases().length,1);listeners.input({target:{id:'reading-search',value:'no reading example matches this phrase'}});assert.equal(t.readingCases().length,0);assert.ok(nodes['reading-grid'].innerHTML.includes('No examples match'));
click('clear-reading-filters');click('',{readingPage:'1'});assert.ok(nodes['reading-pagination-top'].innerHTML.includes('Page 2 of 17'));assert.equal((nodes['reading-grid'].innerHTML.match(/class="program-card"/g)||[]).length,24);
click('',{programFilter:'wang'});assert.equal(t.filteredPrograms().length,320);click('',{programPage:'1'});assert.ok(nodes['program-pagination'].innerHTML.includes('Page 2 of 14'));
click('',{programFilter:'guttag'});assert.equal(t.filteredPrograms().length,80);click('clear-program-filters');assert.equal(t.filteredPrograms().length,200);
let references=0;for(const example of d.READING_EXAMPLES){assert.ok(example.explanation.length>30,example.id);assert.ok(example.tryIt.length>20,example.id);assert.ok(Array.isArray(example.requirements));for(const img of example.images){assert.ok(fs.existsSync('dist/'+img),img);references++;}t.programStudy(example.id,'shown');assert.ok(nodes.main.innerHTML.includes('Why it works'));assert.ok(nodes.main.innerHTML.includes('Reading reference and modification prompt'));assert.ok(!nodes.main.innerHTML.includes('WEEK null'));assert.ok(!nodes.main.innerHTML.includes('Nazarbayev University'));}
assert.equal(references,35);
const html=fs.readFileSync('dist/index.html','utf8');assert.ok(html.includes('href="#readings"'));assert.ok(html.includes('Instructor: Prof. Yanwei Wang'));for(const file of fs.readdirSync('dist').filter(f=>/\.(html|js|css)$/.test(f))){assert.ok(!fs.readFileSync('dist/'+file,'utf8').includes('Nazarbayev University'),file);}
t.guide();assert.ok(nodes.main.innerHTML.includes('Instructor: Prof. Yanwei Wang'));assert.ok(!nodes.main.innerHTML.includes('Nazarbayev University'));
console.log('PASS: 400 reading examples, both sources, all sixteen manuscript chapters, pagination, figures, modification prompts, and requested instructor attribution.');
// Week 7–14 discovery, weekly/mixed rounds, browser filters and error review.
assert.equal(d.SECOND_HALF_MCQS.length,400);assert.equal(d.SECOND_HALF_WEEKS.length,8);
c.location.hash='#second-half';t.route();assert.ok(nodes.main.innerHTML.includes('400 original MCQs'));assert.equal(nodes['section-title'].textContent,'Practice sets / Weeks 7–14');assert.equal(t.halfFiltered().length,400);assert.equal((nodes['half-list'].innerHTML.match(/class="exercise-card"/g)||[]).length,20);
click('',{halfPage:'1'});assert.ok(nodes['half-pagination'].innerHTML.includes('Page 2 of 20'));
for(let w=7;w<=14;w++){
  click('',{halfStart:String(w),halfSample:'yes'});assert.equal(t.getRun().ids.length,10);assert.equal(new Set(t.getRun().ids).size,10);assert.ok(t.getRun().ids.every(id=>d.SECOND_HALF_MCQS.find(q=>q.id===id).week===w));
  click('',{halfStart:String(w)});assert.equal(t.getRun().ids.length,50);
  click('',{halfBrowse:String(w)});assert.equal(t.halfFiltered().length,50);assert.ok(t.halfFiltered().every(q=>q.week===w));
}
click('',{halfStart:'mixed'});assert.equal(t.getRun().ids.length,24);assert.equal(new Set(t.getRun().ids).size,24);for(let w=7;w<=14;w++)assert.equal(t.getRun().ids.filter(id=>d.SECOND_HALF_MCQS.find(q=>q.id===id).week===w).length,3);
click('',{halfClear:'yes'});listeners.change({target:{id:'half-mode',value:'python-output'}});assert.equal(t.halfFiltered().length,200);
listeners.change({target:{id:'half-week',value:'12'}});assert.equal(t.halfFiltered().length,25);
listeners.input({target:{id:'half-search',value:'bisect_left'}});assert.ok(t.halfFiltered().length>0);assert.ok(t.halfFiltered().every(q=>q.code.includes('bisect_left')));
listeners.input({target:{id:'half-search',value:'no matching second half question'}});assert.equal(t.halfFiltered().length,0);assert.ok(nodes['half-list'].innerHTML.includes('No questions match'));
click('',{halfClear:'yes'});click('',{halfStart:'missed'});assert.ok(nodes['half-count'].textContent.includes('No missed'));
const half=d.SECOND_HALF_MCQS[0];click('',{halfQuestion:half.id});t.quiz();assert.ok(nodes.main.innerHTML.includes('data-nav="banks/weeks-7-14"'));assert.equal(nodes['section-title'].textContent,'Practice sets / Weeks 7–14');listeners.change({target:{name:'answer',value:String((half.answer+1)%4)}});click('check-answer');assert.equal(t.getState().records[half.id].latestCorrect,false);t.secondHalfHome();listeners.change({target:{id:'half-progress',value:'missed'}});assert.equal(t.halfFiltered().length,1);click('',{halfStart:'missed'});assert.equal(t.getRun().ids[0],half.id);
t.startQuiz([half.id],'Retry');t.quiz();listeners.change({target:{name:'answer',value:String(half.answer)}});click('check-answer');assert.equal(t.getState().records[half.id].latestCorrect,true);assert.equal(t.getState().records[half.id].firstCorrect,false);
t.secondHalfHome();listeners.change({target:{id:'half-progress',value:'correct'}});assert.equal(t.halfFiltered().length,1);listeners.change({target:{id:'half-progress',value:'new'}});assert.equal(t.halfFiltered().length,399);
assert.ok(html.includes('href="#banks/weeks-7-14"'));assert.ok(html.indexOf('second-half-bank.js')<html.indexOf('app.js'));
console.log('PASS: 400 second-half MCQs, eight weekly rounds, balanced mixed round, pagination, search/type/week/progress filters, missed review and retained first-attempt statistics.');
// Site hierarchy, exact assessment order, collection scope and return destinations.
const savedRecords=JSON.stringify(t.getState());
for(const [hash,heading,active] of [
 ['','Home','home'],['#home','Home','home'],['#banks','Practice sets','banks'],
 ['#banks/weeks-1-6','Practice sets / Weeks 1–6','banks/weeks-1-6'],
 ['#banks/weeks-7-14','Practice sets / Weeks 7–14','banks/weeks-7-14'],
 ['#second-half','Practice sets / Weeks 7–14','banks/weeks-7-14'],
 ['#first-half','Practice sets / Weeks 1–6','banks/weeks-1-6']
]){c.location.hash=hash;t.route();assert.equal(nodes['section-title'].textContent,heading);assert.equal(links.find(a=>a.dataset.page===active).attributes['aria-current'],'page');assert.equal(links.filter(a=>a.attributes['aria-current']==='page').length,1);}
assert.equal(JSON.stringify(t.getState()),savedRecords);
t.dashboard();assert.ok(nodes.main.innerHTML.includes('1000'));assert.ok(nodes.main.innerHTML.includes('1800'));assert.ok(nodes.main.innerHTML.includes('320 examples'));assert.ok(nodes.main.innerHTML.includes('80 Guttag'));
t.banks();assert.ok(nodes.main.innerHTML.includes('600 MCQs'));assert.ok(nodes.main.innerHTML.includes('400 MCQs'));
c.location.hash='#banks/weeks-1-6';t.route();assert.ok(nodes.main.innerHTML.includes('600 MCQs'));assert.ok(nodes.main.innerHTML.includes('32 Studio originals'));click('',{bank:'A',sample:'yes'});t.quiz();assert.equal(t.getRun().returnTo,'banks/weeks-1-6');assert.ok(nodes.main.innerHTML.includes('data-nav="banks/weeks-1-6"'));t.summary();assert.ok(nodes.main.innerHTML.includes('Back to Weeks 1–6'));
c.location.hash='#banks/weeks-7-14';t.route();click('',{halfStart:'7',halfSample:'yes'});t.quiz();assert.equal(t.getRun().returnTo,'banks/weeks-7-14');t.summary();assert.ok(nodes.main.innerHTML.includes('Back to Weeks 7–14'));assert.equal(links.find(a=>a.dataset.page==='banks/weeks-7-14').attributes['aria-current'],'page');
c.location.hash='#programs/course';t.route();assert.equal(t.filteredPrograms().length,200);assert.ok(t.filteredPrograms().every(p=>!p.reading));assert.equal(nodes['section-title'].textContent,'Program studies');
click('clear-program-filters');assert.equal(t.filteredPrograms().length,200);
t.programStudy(d.READING_EXAMPLES[0].id);assert.ok(nodes.main.innerHTML.includes('data-nav="readings"'));assert.equal(nodes['section-title'].textContent,'Reading examples');
t.guide();const assessment=nodes.main.innerHTML.match(/<table class="assessment-table">([\s\S]*?)<\/table>/)[1];const rows=[...assessment.matchAll(/<tr><th scope="row">([^<]+)<\/th><td><strong>([^<]+)<\/strong><\/td><\/tr>/g)].map(m=>[m[1],m[2]]);assert.deepEqual(rows,[['Assignments','10%'],['Lab tasks','20%'],['Midterm','30%'],['Final exam','40%']]);
for(const text of ['Scope of this practice space','1800 distinct practice activities','Weeks 7–14','320 Wang collection examples','80 Guttag-aligned companions','600 programs in total'])assert.ok(nodes.main.innerHTML.includes(text),text);
t.session();assert.ok(nodes.main.innerHTML.includes('Weeks 1–6 · Topic progress'));assert.ok(nodes.main.innerHTML.includes('Weeks 7–14 · Weekly progress'));
click('debug-clear-filters');t.debuggingHome();assert.equal((nodes['debug-grid'].innerHTML.match(/class="program-card"/g)||[]).length,24);click('',{debugPage:'1'});assert.ok(nodes['debug-pagination-top'].innerHTML.includes('Page 2 of 5'));assert.ok(nodes['debug-pagination-top'].innerHTML.includes('100 exercises'));listeners.change({target:{id:'debug-source',value:'new'}});assert.equal((nodes['debug-grid'].innerHTML.match(/class="program-card"/g)||[]).length,24);assert.ok(nodes['debug-pagination-top'].innerHTML.includes('Page 1 of 2'));click('',{debugPage:'1'});assert.equal((nodes['debug-grid'].innerHTML.match(/class="program-card"/g)||[]).length,16);
for(const file of fs.readdirSync('dist').filter(f=>/\.(html|js|css)$/.test(f)))assert.ok(!fs.readFileSync('dist/'+file,'utf8').includes('Course Instructor:'),file);
assert.ok(html.includes('aria-label="Practice sets subpages"'));assert.ok(!html.includes('href="#second-half"'));
console.log('PASS: home overview, both Practice sets subpages, legacy links, active navigation, quiz return paths, exact assessment order, current scope, course-only library, weekly progress, debugging pagination, and concise instructor label.');
const skipHash=c.location.hash;click('skip-content');assert.equal(c.location.hash,skipHash);
// Follow all internal links emitted by the overview, guide and semester subpages.
const targets=new Set();for(const render of [t.dashboard,t.banks,t.firstHalfHome,t.secondHalfHome,t.guide]){render();for(const match of nodes.main.innerHTML.matchAll(/href="#([^"]+)"/g))targets.add(match[1]);}
for(const target of targets){c.location.hash='#'+target;t.route();assert.ok(nodes.main.innerHTML.length>400,target);assert.ok(!nodes.main.innerHTML.includes('undefined'),target);assert.ok(nodes['section-title'].textContent,target);}
console.log('PASS: skip-to-content preserves the route and every emitted collection/guide link resolves.');
// Six 100-question weeks mirror the second-half practice workflow.
assert.equal(d.FIRST_HALF_MCQS.length,600);assert.equal(d.FOUNDATION_ADDITIONS.length,258);
click('',{firstClear:'yes'});assert.equal(t.firstFiltered().length,600);assert.equal((nodes['first-list'].innerHTML.match(/class="exercise-card"/g)||[]).length,20);click('',{firstPage:'1'});assert.ok(nodes['first-pagination'].innerHTML.includes('Page 2 of 30'));
for(let week=1;week<=6;week++){
 assert.equal(d.FIRST_HALF_MCQS.filter(q=>t.firstWeek(q)===week).length,100);
 click('',{firstStart:String(week),firstSample:'yes'});assert.equal(t.getRun().ids.length,10);assert.equal(new Set(t.getRun().ids).size,10);assert.ok(t.getRun().ids.every(id=>t.firstWeek(d.MCQS.find(q=>q.id===id))===week));assert.equal(t.getRun().returnTo,'banks/weeks-1-6');
 click('',{firstStart:String(week)});assert.equal(t.getRun().ids.length,100);click('',{firstBrowse:String(week)});assert.equal(t.firstFiltered().length,100);
}
click('',{firstStart:'mixed'});assert.equal(t.getRun().ids.length,24);assert.equal(new Set(t.getRun().ids).size,24);for(let week=1;week<=6;week++)assert.equal(t.getRun().ids.filter(id=>t.firstWeek(d.MCQS.find(q=>q.id===id))===week).length,4);
click('',{firstClear:'yes'});listeners.change({target:{id:'first-source',value:'foundation-new'}});assert.equal(t.firstFiltered().length,258);listeners.change({target:{id:'first-source',value:'studio'}});assert.equal(t.firstFiltered().length,32);listeners.change({target:{id:'first-source',value:'all'}});listeners.change({target:{id:'first-type',value:'concept'}});assert.ok(t.firstFiltered().length>=56);assert.ok(t.firstFiltered().every(q=>!q.code));
click('',{firstClear:'yes'});listeners.input({target:{id:'first-search',value:'no foundation question matches this'}});assert.equal(t.firstFiltered().length,0);assert.ok(nodes['first-list'].innerHTML.includes('No questions match'));click('',{firstClear:'yes'});
const foundation=d.FOUNDATION_ADDITIONS[0];click('',{firstQuestion:foundation.id});t.quiz();assert.ok(nodes.main.innerHTML.includes('data-nav="banks/weeks-1-6"'));listeners.change({target:{name:'answer',value:String((foundation.answer+1)%4)}});click('check-answer');t.firstHalfHome();listeners.change({target:{id:'first-progress',value:'missed'}});assert.equal(t.firstFiltered().length,1);click('',{firstStart:'missed'});assert.equal(t.getRun().ids[0],foundation.id);t.quiz();listeners.change({target:{name:'answer',value:String(foundation.answer)}});click('check-answer');assert.equal(t.getState().records[foundation.id].firstCorrect,false);assert.equal(t.getState().records[foundation.id].latestCorrect,true);
// Course-material downloads and filters are connected to all fourteen weeks.
c.location.hash='#materials';t.route();assert.equal(nodes['section-title'].textContent,'Course materials');assert.equal(t.filteredMaterials().length,14);assert.equal(nodes['materials-count'].textContent,'14 weeks · 28 PDFs');assert.equal((nodes['materials-grid'].innerHTML.match(/class="material-file"/g)||[]).length,28);
listeners.change({target:{id:'materials-week',value:'14'}});assert.equal(t.filteredMaterials().length,1);assert.ok(nodes['materials-grid'].innerHTML.includes('week-14-slides.pdf'));assert.ok(nodes['materials-grid'].innerHTML.includes('240 pages'));listeners.change({target:{id:'materials-kind',value:'notes'}});assert.equal((nodes['materials-grid'].innerHTML.match(/class="material-file"/g)||[]).length,1);assert.ok(nodes['materials-grid'].innerHTML.includes('106 pages'));assert.ok(nodes['materials-grid'].innerHTML.includes('week-14-materials.zip'));
click('clear-material-filters');listeners.input({target:{id:'materials-search',value:'inheritance'}});assert.equal(t.filteredMaterials().length,1);assert.equal(t.filteredMaterials()[0].week,9);listeners.input({target:{id:'materials-search',value:'no matching materials'}});assert.equal(t.filteredMaterials().length,0);assert.ok(nodes['materials-grid'].innerHTML.includes('No weeks match'));click('clear-material-filters');
for(const w of d.COURSE_MATERIALS){assert.equal(w.files.length,2);for(const file of w.files)assert.ok(fs.existsSync('dist/'+file.path));assert.ok(fs.existsSync('dist/'+w.bundle));}
assert.ok(html.includes('href="#materials"'));assert.ok(html.includes('Practice sets <small>1000</small>'));assert.ok(html.includes('Weeks 1–6 <small>600</small>'));
t.guide();assert.ok(nodes.main.innerHTML.includes('1800 distinct practice activities'));assert.ok(nodes.main.innerHTML.includes('258 new questions; 100 per week'));assert.ok(nodes.main.innerHTML.includes('28 PDFs'));
console.log('PASS: six 100-question foundation weeks, 600/400 practice split, source/type/progress/search filters, mixed-round balance, retries, and all course-material page paths and downloads.');
// Code lab discovery, progress filters, saved drafts and complete-program support.
click('reset-session');click('confirm-reset');click('clear-code-filters');assert.equal(t.filteredCodeExercises().length,100);assert.equal(nodes['code-count'].textContent,'100 exercises');assert.equal((nodes['code-grid'].innerHTML.match(/class="exercise-card/g)||[]).length,24);click('',{codePage:'1'});assert.ok(nodes['code-pagination-top'].innerHTML.includes('Page 2 of 5'));
listeners.change({target:{id:'code-topic',value:'objects'}});assert.equal(t.filteredCodeExercises().length,4);assert.ok(nodes['code-pagination-top'].innerHTML.includes('Page 1 of 1'));listeners.change({target:{id:'code-week',value:'9'}});assert.equal(t.filteredCodeExercises().length,2);assert.ok(t.filteredCodeExercises().every(e=>t.codeMeta(e).week===9));
click('clear-code-filters');listeners.change({target:{id:'code-topic',value:'testing'}});assert.equal(t.filteredCodeExercises().length,4);listeners.change({target:{id:'code-topic',value:'algorithms'}});assert.equal(t.filteredCodeExercises().length,4);
click('clear-code-filters');listeners.change({target:{id:'code-level',value:'Challenge'}});assert.equal(t.filteredCodeExercises().length,5);listeners.input({target:{id:'code-search',value:'no such coding exercise'}});assert.equal(t.filteredCodeExercises().length,0);assert.ok(nodes['code-grid'].innerHTML.includes('No exercises match'));click('code-continue');assert.ok(nodes['code-count'].textContent.includes('No matching'));click('clear-code-filters');
const ce=d.EXERCISES.find(e=>e.id==='code-add-001');t.exercise(ce.id);listeners.input({target:{id:'code-answer',dataset:{id:ce.id},value:'count = int(raw)'}});assert.equal(t.stats().code,0);assert.equal(t.getState().codeDrafts[ce.id],'count = int(raw)');t.codeHome();listeners.change({target:{id:'code-status',value:'draft'}});assert.equal(t.filteredCodeExercises().length,1);click('code-continue');assert.equal(c.location.hash,'exercise/'+ce.id);c.location.hash='#exercise/'+ce.id;t.route();assert.ok(nodes.main.innerHTML.includes('count = int(raw)'));
const draftSaved=JSON.stringify(t.getState());vm.runInContext('state=JSON.parse(sessionStorage.getItem(KEY))',c);assert.equal(JSON.stringify(t.getState()),draftSaved);assert.ok(memory['eng101-studio-v1'].includes('codeDrafts'));
node('code-answer').value='count = str(raw)';t.checkCode(ce.id);assert.equal(t.getState().records[ce.id].firstCorrect,false);assert.equal(t.stats().code,0);click('show-solution',{id:ce.id});assert.equal(t.stats().code,0);assert.ok(nodes.main.innerHTML.includes('Complete verified program'));assert.ok(nodes.main.innerHTML.includes('Verified output'));assert.ok(nodes.main.innerHTML.includes('id="copy-completed-code"'));assert.ok(nodes.main.innerHTML.includes('Regression checks to run'));
node('code-answer').value=ce.answers[0];t.checkCode(ce.id);assert.equal(t.stats().code,1);assert.equal(t.getState().records[ce.id].firstCorrect,false);assert.equal(t.getState().records[ce.id].latestCorrect,true);t.codeHome();assert.equal(t.filteredCodeExercises().length,0);const codeRecord=JSON.stringify(t.getState().records[ce.id]);t.exercise(ce.id);click('clear-code-draft',{id:ce.id});assert.equal(t.getState().codeDrafts[ce.id],undefined);assert.equal(JSON.stringify(t.getState().records[ce.id]),codeRecord);
click('clear-code-filters');listeners.change({target:{id:'code-status',value:'solved'}});assert.equal(t.filteredCodeExercises().length,1);listeners.change({target:{id:'code-status',value:'new'}});assert.equal(t.filteredCodeExercises().length,99);click('clear-code-filters');
for(const e of d.EXERCISES){t.exercise(e.id);assert.ok(!nodes.main.innerHTML.includes('undefined'),e.id);t.exercise(e.id,'shown');assert.ok(nodes.main.innerHTML.includes('Complete verified program'),e.id);assert.ok(nodes.main.innerHTML.includes(t.codeMeta(e).referenceOutput.replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]))),e.id);assert.ok(t.completedCode(e).includes(e.answers[0]),e.id);}
listeners.change({target:{id:'code-topic',value:'objects'}});const objectExercises=t.filteredCodeExercises();assert.equal(t.nextCodeExercise(objectExercises[0].id).id,objectExercises[1].id);click('code-random');assert.ok(objectExercises.some(e=>'exercise/'+e.id===c.location.hash));
click('clear-code-filters');t.codeHome();assert.ok(nodes.main.innerHTML.includes('eng101-code-lab-worked-programs.zip'));assert.ok(fs.existsSync('dist/downloads/eng101-code-lab-worked-programs.zip'));assert.ok(html.includes('Code lab <small>100</small>'));click('reset-session');click('confirm-reset');assert.equal(t.getState().codeDrafts,undefined);
console.log('PASS: 100-exercise Code lab, topic/week/level/progress filters, search, pagination, saved drafts, retries, reveal behavior, complete programs/outputs, next-matching navigation and session reset.');
// Recover valid progress and drafts without trusting stale saved metadata.
c.savedSession={
 started:1234,
 records:{
  [ce.id]:{firstCorrect:false,latestCorrect:true,attempts:3,title:'Obsolete title',topic:'removed-topic',kind:'wrong-kind',time:500},
  removed:{firstCorrect:true,latestCorrect:true,attempts:9},
  [d.MCQS[0].id]:null,
  [d.MCQS[1].id]:{firstCorrect:'true',latestCorrect:true}
 },
 revealed:[ce.id,ce.id,'removed'],
 codeDrafts:{[ce.id]:'count = int(raw)',removed:'unknown draft',[d.EXERCISES[1].id]:42},
 debugDrafts:{[de.id]:'# a repair draft',removed:'unknown repair'}
};
vm.runInContext('state=restoreSession(savedSession)',c);
assert.equal(t.stats().done,1);assert.equal(t.stats().first,0);assert.equal(t.stats().code,1);
assert.equal(t.getState().records[ce.id].attempts,3);assert.equal(t.getState().records[ce.id].title,ce.name);
assert.equal(t.getState().records[ce.id].topic,ce.topic);assert.equal(t.getState().records[ce.id].kind,'code');
assert.equal(t.getState().records.removed,undefined);assert.equal(t.getState().codeDrafts.removed,undefined);
assert.equal(t.getState().revealed.length,1);assert.equal(t.getState().debugDrafts[de.id],'# a repair draft');
t.session();assert.ok(!nodes.main.innerHTML.includes('Obsolete title'));assert.ok(nodes.main.innerHTML.includes('not submitted to Moodle'));
for(const invalid of [null,[],42,{records:[],revealed:{}},{records:{[ce.id]:null},codeDrafts:[],debugDrafts:[]}]){
 c.savedSession=invalid;vm.runInContext('state=restoreSession(savedSession)',c);assert.equal(t.stats().done,0);t.session();
}
// The actual startup path also handles damaged JSON and unavailable storage.
const appSource=[...html.matchAll(/<script defer src="([^"]+)"/g)].map(m=>fs.readFileSync('dist/'+m[1],'utf8')).join('\n');
for(const [read,available] of [[()=>'{damaged JSON',true],[()=>{throw new Error('storage blocked')},false],[()=>JSON.stringify(c.savedSession),true]]){
 const boot=vm.createContext({console,Date,Math,JSON,Number,String,Array,Object,Boolean,Set,Map,location:{hash:'#home'},sessionStorage:{getItem:read,setItem(){}},window:{scrollTo(){},addEventListener(){}},document:{querySelector:()=>node('boot-main'),querySelectorAll:()=>links,getElementById:node,addEventListener(){}}});
 vm.runInContext(appSource,boot);assert.equal(vm.runInContext('stats().done',boot),0);assert.equal(vm.runInContext('storageOK',boot),available);
 assert.equal(nodes['boot-main'].innerHTML.includes('Session storage is unavailable'),!available);
}
assert.ok(html.includes('<noscript>'));assert.ok(html.includes('aria-labelledby="reset-title"'));
for(const render of [t.readingHome,t.programHome,t.debuggingHome]){render();assert.equal((nodes.main.innerHTML.match(/aria-pressed="true"/g)||[]).length,1);}
click('reset-session');click('confirm-reset');
console.log('PASS: stale/damaged session recovery, preserved first attempts and valid drafts, unavailable-storage startup, accessible filter state and JavaScript fallback.');
// The expanded Program studies page has a dedicated 200-study course view.
assert.equal(d.COURSE_PROGRAMS.length,200);assert.equal(d.PROGRAM_STUDY_ADDITIONS.length,128);
assert.equal(t.collectionCounts().course,200);assert.equal(t.collectionCounts().allPrograms,600);assert.equal(t.collectionCounts().total,1800);
c.location.hash='#programs/course';t.route();assert.equal(t.filteredPrograms().length,200);assert.ok(t.filteredPrograms().every(p=>!p.reading));
assert.ok(nodes.main.innerHTML.includes('200 course program studies'));assert.ok(nodes.main.innerHTML.includes('eng101-program-studies.zip'));
assert.ok(html.includes('Program studies <small>200</small>'));assert.ok(html.includes('href="#programs/course"'));
assert.equal((nodes['program-grid'].innerHTML.match(/class="program-card"/g)||[]).length,24);
click('',{programPage:'8'});assert.ok(nodes['program-pagination-top'].innerHTML.includes('Page 9 of 9'));assert.equal((nodes['program-grid'].innerHTML.match(/class="program-card"/g)||[]).length,8);
for(const [week,count] of [['1',14],['6',30],['14',12]]){
 listeners.change({target:{id:'program-week',value:week}});assert.equal(t.filteredPrograms().length,count);assert.ok(t.filteredPrograms().every(p=>p.week===Number(week)));assert.ok(nodes['program-pagination-top'].innerHTML.includes('Page 1 of'));
}
const finalWeek=t.filteredPrograms();assert.equal(t.nextProgramStudy(finalWeek[0].id).id,finalWeek[1].id);t.programStudy(finalWeek[0].id);assert.ok(nodes.main.innerHTML.includes('data-program="'+finalWeek[1].id+'"'));
click('clear-program-filters');click('',{programFilter:'course-new'});assert.equal(t.filteredPrograms().length,128);
listeners.change({target:{id:'program-topic',value:'objects'}});assert.ok(t.filteredPrograms().length>0);assert.ok(t.filteredPrograms().every(p=>p.topic==='objects'));
click('clear-program-filters');listeners.input({target:{id:'program-search',value:'a versioned report caches'}});assert.equal(t.filteredPrograms().length,1);
listeners.input({target:{id:'program-search',value:'no such program study here'}});assert.equal(t.filteredPrograms().length,0);assert.ok(nodes['program-grid'].innerHTML.includes('No programs match'));
click('clear-program-filters');
const ps=d.PROGRAM_STUDY_ADDITIONS.find(p=>p.week===7&&p.tests);t.programStudy(ps.id,'shown');assert.equal(t.getState().records[ps.id],undefined);assert.ok(nodes.main.innerHTML.includes('Regression checks to run after the program'));
node('program-answer').value='a wrong prediction';t.checkOutput(ps.id);assert.equal(t.getState().records[ps.id].latestCorrect,false);
t.programHome();listeners.change({target:{id:'program-progress',value:'missed'}});assert.equal(t.filteredPrograms().length,1);assert.equal(t.filteredPrograms()[0].id,ps.id);
node('program-answer').value=ps.output;t.checkOutput(ps.id);assert.equal(t.getState().records[ps.id].firstCorrect,false);assert.equal(t.getState().records[ps.id].latestCorrect,true);
listeners.change({target:{id:'program-progress',value:'solved'}});assert.equal(t.filteredPrograms().length,1);assert.equal(t.nextProgramStudy(ps.id),null);
listeners.change({target:{id:'program-progress',value:'new'}});assert.equal(t.filteredPrograms().length,199);
for(const p of d.PROGRAM_STUDY_ADDITIONS){
 t.programStudy(p.id,'shown');assert.ok(!nodes.main.innerHTML.includes('undefined'),p.id);
 assert.ok(nodes.main.innerHTML.includes('Why it works'),p.id);assert.ok(nodes.main.innerHTML.includes('Change it and predict again'),p.id);
 const escaped=p.explanation.replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));assert.ok(nodes.main.innerHTML.includes(escaped),p.id);
}
c.location.hash='#programs/all';t.route();assert.equal(t.filteredPrograms().length,600);assert.ok(nodes['program-pagination-top'].innerHTML.includes('Page 1 of 25'));
listeners.change({target:{id:'program-week',value:'reading'}});assert.equal(t.filteredPrograms().length,400);assert.ok(t.filteredPrograms().every(p=>p.reading));
click('clear-program-filters');assert.equal(t.filteredPrograms().length,200);t.guide();assert.ok(nodes.main.innerHTML.includes('600 programs in total'));assert.ok(nodes.main.innerHTML.includes('128 original studies'));
assert.ok(fs.existsSync('dist/downloads/eng101-program-studies.zip'));
click('reset-session');click('confirm-reset');assert.equal(t.stats().done,0);
console.log('PASS: 200 course studies by default, 128 additions, 600-program full library, weekly/source/topic/progress/search filters, pagination, next-matching navigation, explanatory material, downloads and retained first-attempt semantics.');
