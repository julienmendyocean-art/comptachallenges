'use strict';
const $=id=>document.getElementById(id);
const names=['Comptes usuels','Opérations courantes','Immobilisations','TVA et CA3','Lettrage et rapprochement bancaire','Compte de résultat','Bilan actif et passif'];
const colors=['#2576c8','#167754','#7952aa','#d37821','#167c91','#a05b78','#5369a8'];

const levels=['debutant','intermediaire','expert'];
const shuffle=a=>{const b=[...a];for(let i=b.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]]}return b};
const htmlEscape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let quizzes=[],state=null,interval=null,miniSession=0;
function readScores(){try{
 const all=JSON.parse(localStorage.getItem('compta-verified-v48-scores')||'[]');const cutoff=Date.now()-5*86400000;
 const recent=Array.isArray(all)?all.filter(s=>s&&typeof s.name==='string'&&s.name.length<=100&&Number.isFinite(s.score)&&s.score>=0&&s.score<=100&&typeof s.date==='string'&&Number.isFinite(Date.parse(s.date))&&Date.parse(s.date)>=cutoff):[];
 if(recent.length!==all.length)localStorage.setItem('compta-verified-v48-scores',JSON.stringify(recent));
 return recent;
}catch{return []}}
function writeScore(x){try{const a=readScores();a.push(x);localStorage.setItem('compta-verified-v48-scores',JSON.stringify(a.slice(-500)))}catch{}
 renderScores();if(typeof window.ccOnLocalScore==='function')Promise.resolve(window.ccOnLocalScore(x)).catch(console.warn)}
function startUI(){
 names.forEach((n,i)=>{
  let card=document.createElement('article');card.className='course';card.style.setProperty('--accent',colors[i]);
  let h=document.createElement('h3');h.textContent=(i+1)+'. '+n;card.append(h);
  let p=document.createElement('p');p.textContent='Mémo actualisé, carte mentale, exercices et corrigés accessibles dans la bibliothèque PDF.';card.append(p);
  for(const [label,path] of [['📘 Mémo','memos/'],['🧠 Carte mentale','cartes-mentales/'],['✍️ Exercices','exercices/'],['✅ Corrigés','corriges/']]){let a=document.createElement('a');a.className='linkbtn';a.textContent=label;a.href=(path==='memos/'||path==='cartes-mentales/')?path+String(i+1).padStart(2,'0')+' - '+names[i]+'.pdf':'#ressources';if(a.href.endsWith('.pdf'))a.download='';card.append(a)}
  /* La bibliothèque complète des PDF est construite par pdf-library.js. */
  let option=document.createElement('option');option.value=String(i);option.textContent=n;$('topic').append(option);
  let label=document.createElement('label'),cb=document.createElement('input');cb.type='checkbox';cb.value=i;label.append(cb,document.createTextNode(n));$('topicchecks').append(label);
 });
 $('mode').addEventListener('change',updateMode);$('start').addEventListener('click',begin);
 $('next').addEventListener('click',next);$('quit').addEventListener('click',()=>{if(confirm('Abandonner cette partie ?'))stopGame()});
 document.querySelectorAll('[data-game]').forEach(b=>b.addEventListener('click',()=>miniGame(b.dataset.game)));
 $('privateName').addEventListener('input',renderScores);$('player').addEventListener('change',()=>{if(!$('privateName').value)$('privateName').value=$('player').value;renderScores()});
 $('export').addEventListener('click',()=>{const blob=new Blob([JSON.stringify(readScores(),null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='mes_scores_compta_challenge.json';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)});
 $('reset').addEventListener('click',()=>{if(confirm('Effacer les scores et le pseudonyme invité de cet appareil ? Les données serveur ne seront pas effacées.')){localStorage.removeItem('compta-verified-v48-scores');localStorage.removeItem('compta-guest-nickname');sessionStorage.removeItem('compta-pending-email-login');renderScores()}});
 updateMode();renderScores();
}
function updateMode(){let m=$('mode').value;$('customwrap').hidden=m!=='custom';$('opponentwrap').hidden=m!=='duel';$('topicwrap').hidden=m==='custom';$('levelwrap').hidden=m==='custom'||m==='exam';$('topicwrap').hidden=m==='custom'||m==='exam';}
function pickForTopic(i,level){const id=String(i+1).padStart(2,'0');const group=quizzes.filter(x=>x.fiche===id&&(level==='mixte'||x.id.endsWith(level)));return shuffle(group.flatMap(x=>x.questions.map(q=>({...q,theme:x.theme,level:x.level}))));}
// Diversité pédagogique garantie sur chaque tirage: notions, pratique, calcul et analyse.
// Aucun utilisateur ne reçoit un quiz exclusivement chiffré si la banque contient des cas variés.
function sampleDiversified(pool,count){
 const seen=new Set(),unique=[];
 for(const q of shuffle(pool)){
  const key=String(q.q||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/\s+/g,' ').trim();
  if(!seen.has(key)){seen.add(key);unique.push(q)}
 }
 const categories=['notion','application','calcul','analyse'];
 const remaining=shuffle(unique),selected=[];
 const picked=Object.fromEntries(categories.map(c=>[c,0]));
 const quotas=count<=5?{notion:1,application:1,calcul:1,analyse:1}:{notion:2,application:2,calcul:2,analyse:1};
 function take(category){
  const idx=remaining.findIndex(q=>q.category===category);
  if(idx<0)return false;
  selected.push(remaining.splice(idx,1)[0]);picked[category]++;return true;
 }
 for(const c of categories)for(let j=0;j<quotas[c]&&selected.length<count;j++)take(c);
 while(selected.length<count&&remaining.length){
  // Privilégier les familles les moins représentées; plafonner les calculs si possible.
  let available=categories.filter(c=>remaining.some(q=>q.category===c));
  const cap=count<=5?2:4;
  const alternatives=available.filter(c=>c!=='calcul');
  if(picked.calcul>=cap&&alternatives.length)available=alternatives;
  available.sort((a,b)=>picked[a]-picked[b]||categories.indexOf(a)-categories.indexOf(b));
  if(!available.length)break;
  take(available[0]);
 }
 return shuffle(selected);
}
function begin(){if(!quizzes.length){$('alert').textContent='Questions indisponibles.';return}const mode=$('mode').value;let questions;
 if(mode==='exam'){$('alert').textContent='L’examen final est suspendu jusqu’à validation complète des 20 questions.';return;}else if(mode==='custom'){
  const checked=[...document.querySelectorAll('#topicchecks input:checked')].map(x=>+x.value);
  if(checked.length!==3){$('alert').textContent='Sélectionne exactement trois thèmes.';return}
  questions=shuffle(checked.flatMap(i=>sampleDiversified(pickForTopic(i,'mixte'),5)));
 }else{questions=sampleDiversified(pickForTopic(+$('topic').value,mode==='chrono'?'mixte':$('level').value),10)}
 if(questions.length<((mode==='custom')?15:10)){$('alert').textContent='Cette sélection ne contient pas suffisamment de questions disponibles.';return}
 const player=$('player').value.trim()||'Participant';const opponent=$('opponent').value.trim()||'Adversaire';
 state={mode,questions,players:mode==='duel'?[player,opponent]:[player],turn:0,index:0,correct:0,answers:[],verified:false,started:Date.now(),deadline:0};
 $('alert').textContent='';$('results').hidden=true;$('quizgame').hidden=false;clearInterval(interval);
 if(mode==='chrono')state.deadline=Date.now()+150000;
 if(mode==='sudden')state.deadline=Date.now()+10000;
 interval=setInterval(tick,150);showQuestion();$('quizgame').scrollIntoView({behavior:'smooth',block:'start'});
}
function tick(){if(!state)return;if(state.mode!=='chrono'&&state.mode!=='sudden')return;const secs=Math.max(0,Math.ceil((state.deadline-Date.now())/1000));$('timer').textContent='⏱ '+secs+' s';if(secs===0){if(state.mode==='sudden'){state.answers.push({item:state.questions[state.index],choice:null,correct:false});finish()}else finish()}}
function showQuestion(){if(!state)return;if(state.index>=state.questions.length){finish();return}state.verified=false;
 if(state.mode==='sudden')state.deadline=Date.now()+10000;
 const item=state.questions[state.index];$('who').textContent=state.players[state.turn]+' · Question '+(state.index+1)+'/'+state.questions.length;
 $('bar').style.width=(state.index/state.questions.length*100)+'%';$('bar').parentElement.setAttribute('aria-valuenow',String(Math.round(state.index/state.questions.length*100)));$('prompt').textContent=item.q;$('choices').replaceChildren();$('explanation').hidden=true;$('next').hidden=true;
 const options=shuffle(Object.entries(item.options));options.forEach(([letter,value])=>{const b=document.createElement('button');b.type='button';b.textContent=letter+' · '+value;b.dataset.letter=letter;b.addEventListener('click',()=>answer(letter));$('choices').append(b)});
 if(state.mode==='chrono')tick();else $('timer').textContent=state.mode==='sudden'?'⏱ 10 s':'';
}
function answer(letter){if(!state||state.verified)return;state.verified=true;if(state.mode==='sudden')state.deadline=Number.POSITIVE_INFINITY;const item=state.questions[state.index],ok=letter===item.correct;if(ok)state.correct++;
 state.answers.push({item,choice:letter,correct:ok});
 [...$('choices').children].forEach(b=>{b.disabled=true;if(b.dataset.letter===item.correct)b.classList.add('good');else if(b.dataset.letter===letter)b.classList.add('bad')});
 $('explanation').hidden=false;$('explanation').textContent=(ok?'✔ Bonne réponse. ':'✘ Bonne réponse : '+item.options[item.correct]+'. ')+item.explanation;
 if(item.source){const link=document.createElement('a');link.href=item.source;link.target='_blank';link.rel='noopener noreferrer';link.textContent=' ↗ Vérifier la règle dans la source officielle';$('explanation').append(document.createElement('br'),link)}
 if(state.mode==='sudden'&&!ok){const current=state;setTimeout(()=>{if(state===current)finish()},700);return}
 if(state.mode==='chrono'){const current=state;setTimeout(()=>{if(state===current){state.index++;showQuestion()}},350);return}
 $('next').hidden=false;$('next').textContent=state.index===state.questions.length-1?(state.mode==='duel'&&state.turn===0?'Passer à l’adversaire →':'Voir les résultats →'):'Question suivante →';
}
function next(){if(!state||!state.verified)return;state.index++;if(state.index>=state.questions.length){if(state.mode==='duel'&&state.turn===0){state.first={name:state.players[0],correct:state.correct,answers:state.answers};state.turn=1;state.index=0;state.correct=0;state.answers=[];showQuestion();alert('Au tour de '+state.players[1]+' !');return}finish()}else showQuestion()}
function stopGame(){clearInterval(interval);state=null;$('quizgame').hidden=true}
function feedback(score){return score===100?'🎊 Bravo 👏🏻 Tu es (presque) comptable 😂😅':score>=90?'Bravo. Tu y es presque 💪🏻':score>=80?'C’est bien, encore un effort 👍🏿':score>=70?'Reprends tes fiches et tu feras mieux la prochaine fois 😉':'Prends ton temps. Tu vas y arriver. 🙌🏻'}
function finish(){if(!state)return;clearInterval(interval);const s=state;state=null;$('quizgame').hidden=true;$('results').hidden=false;$('results').replaceChildren();$('results').className='panel celebrate';
 const outcomes=s.mode==='duel'?[s.first,{name:s.players[1],correct:s.correct,answers:s.answers}]:[{name:s.players[0],correct:s.correct,answers:s.answers}];
 for(const outcome of outcomes){const total=s.mode==='chrono'?Math.max(1,outcome.answers.length):s.questions.length;const score=Math.round(outcome.correct/total*100);const h=document.createElement('h3');h.textContent=s.mode==='exam'?(outcome.correct<=10?'De grosses révisions sont nécessaires : redouble d’efforts !':outcome.correct===11?'Continue à réviser pour être parfaitement prêt.':'Tu es prêt ! Reste confiant, sans relâcher tes efforts.') :feedback(score);$('results').append(h);const p=document.createElement('p');p.className='score';p.textContent=score+' %';$('results').append(p);const sub=document.createElement('p');sub.textContent=outcome.name+' · '+outcome.correct+' bonne(s) réponse(s) sur '+total;$('results').append(sub);
 writeScore({name:outcome.name,score,correct:outcome.correct,total,mode:s.mode,date:new Date().toISOString(),theme:s.mode==='exam'||s.mode==='custom'?'Mixte':names[+$('topic').value],themeId:s.mode==='exam'?'all':String(+$('topic').value+1).padStart(2,'0'),level:s.mode==='exam'?'mixte':$('level').value,topics:s.mode==='exam'?['01','02','03','04','05','06','07']:undefined});
 const share=document.createElement('button');share.className='btn';share.textContent='Partager mon résultat';share.addEventListener('click',async()=>{const txt=outcome.name+' a obtenu '+score+' % sur Compta Challenge !';if(navigator.share){try{await navigator.share({title:'Compta Challenge',text:txt,url:location.href})}catch{}}else if(navigator.clipboard){await navigator.clipboard.writeText(txt);share.textContent='Copié !'}else{prompt('Copier le résultat :',txt)}});$('results').append(share);
 const details=document.createElement('details'),summary=document.createElement('summary');summary.textContent='Voir mes réponses et les corrections';details.append(summary);outcome.answers.forEach((a,i)=>{const d=document.createElement('div');d.className='reviewitem';const strong=document.createElement('strong');strong.textContent=(a.correct?'✔ ':'✘ ')+(i+1)+'. '+a.item.q;const para=document.createElement('p');para.textContent='Bonne réponse : '+a.item.options[a.item.correct]+' — '+a.item.explanation;d.append(strong,para);details.append(d)});$('results').append(details)
 }
 if(s.mode==='duel'){let p=document.createElement('h3');p.textContent=outcomes[0].correct===outcomes[1].correct?'🤝 Match nul !':'🏆 Victoire de '+(outcomes[0].correct>outcomes[1].correct?outcomes[0].name:outcomes[1].name);$('results').prepend(p)}
 $('bar').style.width='100%';$('bar').parentElement.setAttribute('aria-valuenow','100');$('results').scrollIntoView({behavior:'smooth',block:'start'});
}
function renderScores(){const scores=readScores(),best=new Map();scores.forEach(s=>{if(!best.has(s.name)||best.get(s.name).score<s.score)best.set(s.name,s)});const top=[...best.values()].sort((a,b)=>b.score-a.score).slice(0,20);$('leaders').replaceChildren();top.forEach((s,i)=>{let li=document.createElement('li');li.textContent=(['🥇','🥈','🥉','🍫'][i]||'⭐')+' '+s.name+' — '+s.score+' %';$('leaders').append(li)});
 if(!top.length)$('leaders').textContent='Aucun score pour le moment.';const n=$('privateName').value.trim();const mine=scores.filter(s=>s.name.toLocaleLowerCase()===n.toLocaleLowerCase());$('myprogress').textContent=!n?'Entre ton pseudonyme pour afficher tes statistiques.':!mine.length?'Aucune partie enregistrée sous ce pseudonyme.':mine.length+' partie(s) · meilleur score : '+Math.max(...mine.map(x=>x.score))+' % · moyenne : '+Math.round(mine.reduce((sum,x)=>sum+x.score,0)/mine.length)+' %';}
// Les anciens jeux demeurent hors ligne tant que leurs banques ne sont pas validées.
function miniGame(){const target=$('minigame');if(target){target.hidden=true;target.replaceChildren()}}
fetch('questions.json').then(r=>{if(!r.ok)throw Error('HTTP '+r.status);return r.json()}).then(q=>{quizzes=q;startUI()}).catch(e=>{startUI();$('alert').textContent='Impossible de charger les questions : '+e.message+'. Utilise le site hébergé sur Netlify.'});
