'use strict';
(async function(){
 const root=document.getElementById('duels-distance'); if(!root)return;
 const el=id=>document.getElementById(id), out=el('online-room'), status=el('online-status');
 const setStatus=(message,bad=false)=>{status.textContent=message;status.className=bad?'status-bad':'status-ok'};
 const textNode=(tag,text,className='')=>{const node=document.createElement(tag);node.textContent=String(text??'');if(className)node.className=className;return node};
 const url=window.COMPTA_SUPABASE_URL, key=window.COMPTA_SUPABASE_PUBLISHABLE_KEY;
 if(!url||!key){setStatus('Connexion Supabase absente (online-config.js).',true);return}
 let createClient;
 try{({createClient}=await import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.49.10/+esm'))}
 catch(e){setStatus('Supabase ne se charge pas : vérifie la connexion réseau.',true);return}
 const db=createClient(url,key,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}});
 const rpc=async(name,args={})=>{const {data,error}=await db.rpc(name,args);if(error)throw error;return data};
 const report=e=>setStatus('Erreur : '+(e?.message||String(e)),true);
 let session=null,code='',timer=null,refreshBusy=false,boardBusy=false,feedBusy=false,notesBusy=false;
 let alreadyNotified=new Set();
 const nickname=el('online-name'),publicBox=el('online-public'),authLabel=el('online-auth-state');
 const pendingKey='compta-pending-email-login';
 function localNick(){try{const d=JSON.parse(localStorage.getItem('compta-guest-nickname')||'null');return d&&Date.now()<d.exp?d.name:''}catch{return ''}}
 function keepNick(n){try{localStorage.setItem('compta-guest-nickname',JSON.stringify({name:n,exp:Date.now()+5*86400000}))}catch{}}
 const isRegistered=()=>Boolean(session?.user?.email && session.user.email_confirmed_at && !session.user.is_anonymous);
 async function syncSession(){const r=await db.auth.getSession();if(r.error)throw r.error;session=r.data.session;authLabel.textContent=isRegistered()?`✅ Compte e-mail vérifié : ${session.user.email}`:session?'🕶 Mode invité : résultats temporaires (5 jours)':'Aucune connexion active. Tu peux jouer avec un pseudonyme ou te connecter par e-mail.';
  el('online-logout').hidden=!session; el('online-account-email').hidden=isRegistered();
  if(isRegistered()){try{const p=await rpc('cc_my_profile');if(p?.nickname){nickname.value=p.nickname;el('player').value=p.nickname;el('privateName').value=p.nickname}publicBox.checked=Boolean(p?.public)}catch(e){console.warn('Profil non récupéré',e)}}
 }
 async function signGuest(){const r=await db.auth.getSession();if(r.error)throw r.error;
   if(r.data.session){session=r.data.session;return session}
   const a=await db.auth.signInAnonymously();if(a.error)throw a.error;session=a.data.session;
   await syncSession();return session;
 }
 async function setProfile(){const nick=nickname.value.trim();if(nick.length<2||nick.length>24)throw Error('Saisis un pseudonyme de 2 à 24 caractères.');
   await signGuest();await rpc('cc_set_profile',{p_nickname:nick,p_public:isRegistered()&&publicBox.checked});keepNick(nick);
   el('player').value=nick;el('privateName').value=nick;return nick;
 }
 el('online-guest').onclick=async()=>{try{if(isRegistered())throw Error('Tu es déjà connecté avec un compte e-mail. Utilise « Se déconnecter » pour changer de mode.');await setProfile();setStatus('Tu joues en invité. Tes résultats seront effacés après 5 jours.');await refreshAll()}catch(e){report(e)}};
 el('online-profile').onclick=async()=>{try{await setProfile();setStatus(isRegistered()?'Profil e-mail enregistré.':'Pseudonyme invité enregistré (5 jours).');await refreshAll()}catch(e){report(e)}};
 el('online-send-link').onclick=async()=>{
  const email=el('online-email').value.trim().toLowerCase();const nick=nickname.value.trim();
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){setStatus('Saisis une adresse e-mail valide.',true);return}
  if(nick.length<2||nick.length>24){setStatus('Choisis ton pseudonyme (2 à 24 caractères).',true);return}
  try{
    const {error}=await db.auth.signInWithOtp({email,options:{emailRedirectTo:location.origin+'/#duels-distance',shouldCreateUser:false}});
    if(error)throw error;
    sessionStorage.setItem(pendingKey,JSON.stringify({email,nickname:nick,pub:publicBox.checked,createdAt:Date.now()}));
    el('online-otp-box').hidden=false;
    setStatus('Si ce compte existe déjà, un lien de connexion sera envoyé. La création de nouveaux comptes est momentanément désactivée.');
  }catch(e){report(e)}
 };
 el('online-verify').onclick=async()=>{
  const token=el('online-otp').value.replace(/\s/g,'');const email=el('online-email').value.trim().toLowerCase();
  if(!/^\d{6,8}$/.test(token)){setStatus('Saisis le code de vérification reçu par e-mail.',true);return}
  try{const {error}=await db.auth.verifyOtp({email,token,type:'email'});if(error)throw error;await completeEmailLogin();setStatus('E-mail vérifié : ton compte est prêt !')}catch(e){report(e)}
 };
 async function completeEmailLogin(){await syncSession();if(!isRegistered())return;
  try{
    const raw=sessionStorage.getItem(pendingKey);const p=raw&&JSON.parse(raw);
    if(p&&Date.now()-p.createdAt<3600000&&p.nickname){
      await rpc('cc_set_profile',{p_nickname:p.nickname,p_public:Boolean(p.pub)});
      sessionStorage.removeItem(pendingKey);
    }
    await syncSession();await refreshAll();
  }catch(e){report(e)}
 }
 el('online-logout').onclick=async()=>{if(!confirm('Se déconnecter de ce compte ?'))return;try{const {error}=await db.auth.signOut();if(error)throw error;session=null;code='';clearInterval(timer);timer=null;out.replaceChildren();await syncSession();el('online-my-duels').replaceChildren();el('online-notifications').replaceChildren();el('online-server-progress').textContent='Connecte-toi pour retrouver tes résultats enregistrés.';setStatus('Déconnecté. Tu peux te reconnecter par e-mail ou jouer en invité.')}catch(e){report(e)}};
 el('online-notify').onclick=async()=>{if(!('Notification' in window)){setStatus('Les notifications du navigateur ne sont pas disponibles ici.',true);return}
  const p=await Notification.requestPermission();setStatus(p==='granted'?'Notifications activées tant que le site est ouvert.':'Notifications refusées ou indisponibles.')};
 const makeButton=(label,fn,cls='btn subtle')=>{const b=textNode('button',label,cls);b.type='button';b.onclick=fn;return b};
 const stateLabel=s=>({waiting:'En attente de l’adversaire (48 h)',active:'En cours',finished:'Terminé',expired:'Expiré — duel annulé'})[s]||s;
 const medals=['🥇','🥈','🥉','🍫'];
 async function renderRoom(){if(!code||refreshBusy)return;refreshBusy=true;
  try{
    const s=await rpc('cc_duel_state',{p_code:code});out.replaceChildren();
    out.append(textNode('h3','Duel '+s.code),textNode('p',stateLabel(s.status)));
    const expiry=new Date(s.expires_at);out.append(textNode('p','Limite de participation : '+expiry.toLocaleString('fr-FR'), 'muted'));
    out.append(textNode('p','Code à transmettre : '+s.code));
    if(s.players?.length){const scoreboard=textNode('div','', 'duel-players');
     for(const p of s.players){const line=textNode('div',(p.me?'👤 Moi · ':'⚔️ ')+p.nickname+' — '+(p.score===null?'Score masqué':p.score+'/10')+(p.done?' ✅':' ⏳'));
      scoreboard.append(line)}out.append(scoreboard)}
    if(s.status==='finished'){
      const a=s.players.find(p=>p.me),b=s.players.find(p=>!p.me);
      const message=!b?'Duel terminé.':a.score>b.score?'🏆 Tu remportes ce duel !':a.score<b.score?'👏 Ton adversaire remporte ce duel.':'🤝 Match nul !';
      const banner=textNode('div',message+' · '+a.score+'/10 contre '+(b?.score??'?')+'/10','duel-result-banner');out.prepend(banner);
      out.append(makeButton('Voir tous mes duels',()=>el('online-my-duels').scrollIntoView({behavior:'smooth',block:'center'})));
      await refreshBoards();await loadDuels();await loadNotifications();
    }else if(s.status==='expired'){
      out.append(textNode('p','Le délai de 48 heures est écoulé : ce duel est annulé.','status-bad'));
    }else if(s.question){
      const q=s.question;out.append(textNode('h4','Question '+q.position+' / 10'),textNode('p',q.prompt));
      q.options.forEach((option,i)=>{const b=makeButton(option,async()=>{
       out.querySelectorAll('.online-choice').forEach(c=>c.disabled=true);
       try{await rpc('cc_answer_duel',{p_code:code,p_position:q.position,p_choice:i});refreshBusy=false;await renderRoom();await loadDuels()}
       catch(e){report(e);refreshBusy=false}
      },'btn online-choice');out.append(b)})
    }else if(s.my_done){out.append(textNode('p','✅ Tes dix réponses sont enregistrées. Reviens consulter le résultat : il sera annoncé dès que l’adversaire aura terminé.','duel-wait-banner'))}
    else out.append(textNode('p','En attente des questions ou d’un second joueur.'));
  }catch(e){report(e)}finally{refreshBusy=false}
 }
 function enter(c){code=String(c).trim().toUpperCase();el('online-code').value=code;
  if(timer)clearInterval(timer);renderRoom(); timer=setInterval(()=>{if(document.visibilityState==='visible')renderRoom()},7000);
 }
 el('online-create').onclick=async()=>{try{await setProfile();const c=await rpc('cc_create_duel',{p_topic:el('online-topic').value,p_level:el('online-level').value});setStatus('Duel créé ! Partage le code : '+c);enter(c);await loadDuels()}catch(e){report(e)}};
 el('online-join').onclick=async()=>{try{await setProfile();const c=el('online-code').value.trim().toUpperCase();if(!c)throw Error('Saisis le code du duel.');await rpc('cc_join_duel',{p_code:c});setStatus('Duel rejoint. Bonne partie !');enter(c);await loadDuels()}catch(e){report(e)}};
 el('online-refresh-room').onclick=async()=>{if(!code){setStatus('Choisis d’abord un duel dans « Mes duels » ou entre son code.');return}await renderRoom();await loadNotifications();await loadDuels()};
 const topics={"01":"Comptes usuels","02":"Opérations courantes","03":"Immobilisations","04":"TVA","05":"Lettrage","06":"Compte de résultat","07":"Bilan"};
 async function loadDuels(){if(!session)return;
  try{const data=await rpc('cc_my_duels');const list=el('online-my-duels');list.replaceChildren();
    if(!Array.isArray(data)||!data.length){list.append(textNode('p','Aucun duel enregistré pour ce profil.'));return}
    for(const d of data){const row=textNode('div','','duel-history-item');let result='';
      if(d.status==='finished')result=d.result==='win'?'🏆 Victoire':d.result==='draw'?'🤝 Match nul':'💪 Défaite';
      else result=stateLabel(d.status);
      row.append(textNode('strong',`${topics[d.topic]||d.topic} · ${d.level} — ${result}`));
      const details=d.status==='finished'?`Ton score ${d.my_score}/10 · ${d.opponent_name} ${d.opponent_score}/10`:
        `Ton score ${d.my_done?d.my_score+'/10 (terminé)':'en cours'} · Échéance ${new Date(d.expires_at).toLocaleString('fr-FR')}`;
      row.append(textNode('p',details));row.append(makeButton('Ouvrir ce duel',()=>{enter(d.code);el('online-room').scrollIntoView({behavior:'smooth',block:'center'})}));list.append(row)}
  }catch(e){report(e)}
 }
 async function loadNotifications(){if(!session||notesBusy)return;notesBusy=true;
  try{const rows=await rpc('cc_my_notifications');const container=el('online-notifications');container.replaceChildren();let unread=0;
    for(const n of rows||[]){if(n.read)continue;unread++;
      const item=textNode('div','','notice-result');item.append(textNode('strong','🔔 '+n.title),textNode('p',n.body));
      item.append(makeButton('Voir le résultat',async()=>{await rpc('cc_mark_notification',{p_id:n.id});enter(n.code);await loadNotifications();await loadDuels()}));
      item.append(makeButton('Marquer comme lu',async()=>{await rpc('cc_mark_notification',{p_id:n.id});await loadNotifications()}));container.append(item);
      if(!alreadyNotified.has(n.id)){
       alreadyNotified.add(n.id);
       if('Notification' in window&&Notification.permission==='granted'&&document.visibilityState!=='visible')
         try{new Notification('Compta Challenge — '+n.title,{body:n.body})}catch{}
      }
    }
    if(!unread)container.append(textNode('p','Aucune nouvelle notification.'));
    el('online-notification-count').textContent=unread?`🔔 ${unread} nouveau(x) résultat(s)`:'Aucune notification en attente';
  }catch(e){report(e)}finally{notesBusy=false}
 }
 async function loadLeaderboard(){const rows=await rpc('cc_public_rankings');const list=el('online-leaders');list.replaceChildren();
  if(!rows?.length){list.append(textNode('li','Aucun joueur inscrit et volontaire pour le classement public.'));return}
  rows.forEach((p,i)=>list.append(textNode('li',`${medals[i]||'⭐'} ${p.nickname} — ${p.wins} victoire(s) · ${p.draws} nul(s) · ${p.losses} défaite(s) · ${p.played} duel(s) · ${p.points} bonnes réponses`)))
 }
 async function loadRecent(){const rows=await rpc('cc_recent_public_duels');const list=el('online-recent');list.replaceChildren();
  if(!rows?.length){list.append(textNode('li','Pas encore de duel terminé dont les deux joueurs ont accepté la publication.'));return}
  for(const m of rows){const [a,b]=m.players||[];const res=a?.score===b?.score?'🤝 Match nul':`🏆 ${a?.nickname||'Joueur'}`;
   const p=`${new Date(m.finished_at).toLocaleDateString('fr-FR')} · ${topics[m.topic]||m.topic} (${m.level}) — ${a?.nickname||'Joueur'} ${a?.score??'?'} - ${b?.score??'?'} ${b?.nickname||'Joueur'} · ${res}`;
   list.append(textNode('li',p))}
 }
 async function refreshBoards(){if(boardBusy||!session)return;boardBusy=true;try{await Promise.all([loadLeaderboard(),loadRecent()])}catch(e){report(e)}finally{boardBusy=false}}
 async function loadProgress(){if(!session)return;
  const root=el('online-server-progress');if(!isRegistered()){root.textContent='Invité : tes résultats sont consultables jusqu’à 5 jours. Inscris-toi par e-mail pour les retrouver sur d’autres appareils.';return}
  try{const d=await rpc('cc_my_progress');root.replaceChildren();root.append(textNode('p',`${d.all_played||0} quiz ou jeu(x) sauvegardé(s) dans ton compte.`));
   if(d.by_theme?.length){root.append(textNode('h4','Priorités de révision'));for(const x of d.by_theme.slice(0,7))root.append(textNode('p',`${topics[x.topic]||x.topic} : ${x.average_pct}% · ${x.games} partie(s)`))}
   else root.append(textNode('p','Pas encore de quiz ou de jeu sauvegardé.'));
   const h=(d.history||[]).slice(0,8);if(h.length){root.append(textNode('h4','Dernières activités'));for(const x of h)root.append(textNode('p',`${new Date(x.created_at).toLocaleDateString('fr-FR')} · ${x.mode} · ${x.correct}/${x.total} · ${topics[x.topic]||x.topic}`))}
  }catch(e){report(e)}
 }
 // Le navigateur peut déclarer un résultat solo ; il reste privé et n'est JAMAIS un résultat certifié du classement public.
 window.ccOnLocalScore=async x=>{if(!isRegistered())return;
  try{let topic=x.themeId||'Mixte';if(!topics[topic])topic=topic==='all'?'all':'Mixte';
   const mode=['solo','custom','chrono','sudden','exam','game'].includes(x.mode)?x.mode:'solo';
   const level=['debutant','intermediaire','expert'].includes(x.level)?x.level:'mixte';
   const correct=Math.max(0,Math.min(Number(x.total)||1,Number(x.correct)||0));
   await rpc('cc_record_activity',{p_mode:mode,p_topic:topic,p_level:level,p_correct:correct,p_total:Number(x.total)||1});
   await loadProgress();
  }catch(e){console.warn('Résultat local non synchronisé',e)}
 };
 async function refreshAll(){if(!session)return;await Promise.all([refreshBoards(),loadDuels(),loadNotifications(),loadProgress()])}
 el('online-reload').onclick=async()=>{try{if(code)await renderRoom();await refreshAll();setStatus('Classement, résultats et notifications actualisés.')}catch(e){report(e)}};
 document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')refreshAll()});
 db.auth.onAuthStateChange((event,newSession)=>{session=newSession;setTimeout(async()=>{
    try{if(event==='SIGNED_IN'){await completeEmailLogin();if(!isRegistered())await syncSession()}
      if(event==='SIGNED_OUT'){await syncSession()}}
    catch(e){console.warn('Transition Auth',e)}
 },0)});
 try{
  nickname.value=localNick();
  await syncSession();
  if(!session){const r=await db.auth.signInAnonymously();if(r.error)throw r.error;session=r.data.session;await syncSession()}
  const last=sessionStorage.getItem(pendingKey);if(isRegistered()&&last)await completeEmailLogin();
  setStatus('Supabase prêt. Enregistre ton pseudonyme, connecte-toi par e-mail ou joue en invité.');
  await refreshAll();
  setInterval(()=>{if(document.visibilityState==='visible')Promise.all([loadNotifications(),loadDuels(),refreshBoards()])},20000);
 }catch(e){report(e)}
})();
