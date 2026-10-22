'use strict';
const fs=require('fs'),vm=require('vm'),path=require('path');
const root=process.argv[2]||path.resolve(__dirname,'..');
const app=fs.readFileSync(path.join(root,'app.js'),'utf8');
const data=JSON.parse(fs.readFileSync(path.join(root,'questions.json'),'utf8'));
const code=app.slice(0,app.indexOf('function begin()'));
const sandbox={Math,JSON,console,Set,Date,String,document:{getElementById:()=>({})}};
vm.createContext(sandbox);
vm.runInContext(code+'\nquizzes='+JSON.stringify(data)+';',sandbox);
let fail=[],distribution={notion:0,application:0,calcul:0,analyse:0};let runs=0;
for(let topic=0;topic<9;topic++)for(const level of ['debutant','intermediaire','expert','mixte'])for(let trial=0;trial<120;trial++){
 const sample=vm.runInContext(`sampleDiversified(pickForTopic(${topic},'${level}'),10)`,sandbox);
 const kinds=Object.fromEntries(['notion','application','calcul','analyse'].map(c=>[c,sample.filter(q=>q.category===c).length]));
 if(sample.length!==10)fail.push('bad length '+topic+level);
 for(const c of ['notion','application','calcul'])if(kinds[c]<2)fail.push('missing '+topic+level+' '+c+'='+kinds[c]);
 if(kinds.calcul>4)fail.push('too many maths '+topic+level+' '+kinds.calcul);
 if(new Set(sample.map(q=>q.q)).size!==10)fail.push('duplicate '+topic+level);
 for(const cat of Object.keys(distribution))distribution[cat]+=kinds[cat];
 runs++;
}
// Custom session 3 themes 15 questions, retaining varied questions per theme.
for(let trial=0;trial<100;trial++){
 let questions=[0,3,6].flatMap(topic=>vm.runInContext(`sampleDiversified(pickForTopic(${topic},'mixte'),5)`,sandbox));
 if(questions.length!==15||new Set(questions.map(q=>q.q)).size!==15)fail.push('custom invalid');
}
console.log(JSON.stringify({simulatedRuns:runs,questionsPresented:runs*10,customRuns:100,totalCategory:distribution,errors:fail.length,samples:fail.slice(0,6)},null,2));
if(fail.length)process.exitCode=1;
