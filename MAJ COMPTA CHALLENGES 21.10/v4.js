'use strict';
/* Compta Challenge V4: offline features + privacy conscious personal progression. */
(() => {
 const jokes=[
  "« J'ai demandé une augmentation. Mon chef m'a répondu : « On va voir ça au prochain exercice. » Ça fait trois ans que je m'échauffe. »",
  "« Mon comptable a une vie équilibrée : il est stressé au débit et fatigué au crédit. »",
  "« J'ai essayé le yoga pour retrouver mon équilibre. Finalement, j'ai ouvert une balance comptable. »",
  "« Dans les films, le héros trouve le trésor. En compta, il retrouve une facture de 2019. »",
  "« Le compte 471, c'est comme mon tiroir à chaussettes : je sais ce qui y entre, jamais ce qui en sort. »",
  "« J'ai dit « tout est sous contrôle ». Puis Excel a affiché #REF! et tout le monde s'est tu. »",
  "« Le premier rendez-vous romantique d'un comptable ? « Tu préfères qu'on se voie au débit ou au crédit ? » »",
  "« Certains voient la vie en rose. Moi, je la vois en rouge jusqu'au rapprochement bancaire. »",
  "« Mon patron voulait de la magie. Je lui ai montré un tableau croisé dynamique : il m'a demandé de faire apparaître du bénéfice. »",
  "« Je voulais tourner la page. Mais elle n'était pas numérotée et l'auditeur a refusé. »",
  "« Star Wars, épisode fiscal : « Je suis ton père… et je réclame la facture de ton sabre laser. » »",
  "« Mission Impossible : faire comprendre au patron que « on met ça en frais » n'est pas un plan de financement. »",
  "« Dans Titanic, tout semblait flotter… jusqu'à l'apparition d'un énorme passif. »",
  "« Le Parrain de la compta : « Je vais te faire une proposition… avec devis et conditions de paiement. » »",
  "« Retour vers le futur : même avec une DeLorean, impossible d'antidater une facture sans problème. »",
  "« Jurassic Compta : on a retrouvé une facture tellement ancienne qu'elle demandait à être payée en francs. »",
  "« Harry Potter et la chambre des écritures : « Expecto Justificatum ! » Toujours aucun ticket de caisse. »",
  "« Le Seigneur des Anneaux : « Un compte pour les gouverner tous »… malheureusement, c'est le compte d'attente. »",
  "« James Bond, 007 : autorisé à tuer, mais pas à valider une dépense sans justificatif. »",
  "« Les Avengers ont sauvé l'univers. Le comptable demande s'ils ont conservé les notes de frais du déplacement. »",
  "« Le Sixième Sens du comptable : il voit les factures impayées… même quand la direction prétend qu'elles n'existent pas. »",
  "« Le Silence des Agneaux ? Non : le silence du bureau quand on demande qui a touché à la caisse. »",
  "« Fast & Furious : mon directeur conduit à 200 km/h, moi je poursuis son reçu de péage. »",
  "« La Casa de Papel version compta : ils ont pris la caisse, mais ont oublié de lettrer le virement. »",
  "« Indiana Jones et le ticket perdu : le temple maudit, c'est le classeur « Divers ». »",
  "« Le Loup de Wall Street : « Vendez ! Achetez ! » Le comptable : « Vous avez les factures ? » »",
  "« Matrix : pilule rouge, pilule bleue… ou simplement corriger la formule qui pointe sur la mauvaise cellule. »",
  "« Rocky Balboa peut encaisser les coups. Moi, j'essaie déjà d'encaisser mes clients. »",
  "« Ocean's Eleven ? Dans mon service, Ocean's 401 : onze fournisseurs qui rappellent tous avant midi. »",
  "« À l'Oscar du meilleur suspense comptable : « Où sont passés les 12 centimes ? » Le coupable est toujours l'arrondi. »",
  "« Au foot, le VAR vérifie la ligne. En compta, le BAR vérifie… non, oubliez, c'est encore la balance. »",
  "« Mon comptable a demandé un mercato : il veut transférer le compte 471 dans une autre équipe. »",
  "« L'entraîneur voulait un triplé. J'ai marqué trois factures payées à l'heure : standing ovation. »",
  "« Le marathonien frappe le mur au 35e kilomètre. Le comptable, le 31 décembre à 23 h 59. »",
  "« Au basket, trois points, c'est superbe. En compta, trois centimes d'écart, c'est une nuit blanche. »",
  "« L'arbitre a sifflé un hors-jeu. Le comptable a sifflé une charge passée sur le mauvais exercice. »",
  "« Le PSG veut une étoile de plus. Moi, je veux juste un relevé bancaire qui tombe juste. »",
  "« En tennis, « avantage service ». En compta, « avantage fournisseur » : il a encore relancé trois fois. »",
  "« Le cycliste grimpe l'Alpe d'Huez. Le comptable grimpe la pile de factures sans ascenseur. »",
  "« Le gardien a arrêté un penalty. Moi, j'ai arrêté un double paiement : même émotion, moins de supporters. »",
  "« Ma meilleure performance sportive ? Courir derrière une facture avant la clôture. »",
  "« J'ai tenté un sprint fiscal. Mon coach m'a rappelé qu'un contrôle se prépare, il ne se sprinte pas. »",
  "« La troisième mi-temps du comptable ? Refaire le rapprochement bancaire parce qu'on a ajouté un virement. »",
  "« À l'arrivée du 100 mètres, on mesure les centièmes. Chez moi, on cherche encore les centimes. »",
  "« Médaille d'or du plongeon : mon moral, le jour où le grand livre affiche une anomalie. »",
  "« Mon programme électoral : moins d'impôts, plus de justificatifs, et une pause déjeuner. Même le candidat n'y croit pas. »",
  "« Le débat est ouvert : la gauche veut débiter, la droite veut créditer. La balance exige un gouvernement d'union. »",
  "« La motion de censure contre le compte 471 a échoué : personne n'a trouvé les pièces du dossier. »",
  "« Le ministre annonce « zéro déficit ». Le comptable demande poliment : « Dans quel onglet ? » »",
  "« Grande réforme nationale : désormais, chaque promesse de campagne doit être accompagnée d'une pièce justificative. »",
  "« Le budget est adopté à l'unanimité. Seul le tableur vote #VALEUR! contre. »",
  "« La commission des finances enquête sur un trou budgétaire. Le comptable a trouvé le trou : une parenthèse oubliée. »",
  "« Le porte-parole assure que les chiffres sont excellents. Excel demande à connaître ses sources. »",
  "« Débat télévisé : les candidats promettent la croissance. Le comptable promet de ne pas confondre chiffre d'affaires et bénéfice. »",
  "« Le gouvernement a présenté un plan de redressement. Moi aussi : redresser le fichier Excel après une formule effacée. »",
  "« Les élections ont un second tour. Les factures ont une seconde relance, puis un troisième tour non prévu. »",
  "« Discours officiel : « La transparence est notre priorité. » Réponse de l'auditeur : « Parfait, ouvrez les annexes. » »",
  "« L'opposition conteste chaque chiffre. Pour une fois, elle et le commissaire aux comptes sont d'accord. »",
  "« Promesse de campagne : plus jamais de réunion le vendredi. La clôture a immédiatement déposé un amendement. »",
  "« Le budget prévoit une embellie. Mon compte banque réclame un vote de confiance avant de la confirmer. »"
 ];
 document.getElementById('quote-of-day').textContent=jokes[Math.floor(Math.random()*jokes.length)];

 const $=id=>document.getElementById(id);
 const originalStart=startUI;
 startUI=function(){
  originalStart();
  /* Les cartes PDF sont conservées telles que construites et contrôlées dans index.html. */
 };
 window.ccPickExam=()=>{document.getElementById('mode').value='exam';document.getElementById('start').click()};
 const docs={
  complet:{title:'PCG consolidé ANC — 1er janvier 2026',url:'https://www.anc.gouv.fr/files/anc/files/1_Normes_fran%C3%A7aises/Reglements/Recueils/PCG_janvier2026/PCG--1er-janvier-2026.pdf'}
 };
 const dialog=$('pdf-dialog'),frame=$('pdf-frame');
 for(const b of document.querySelectorAll('[data-pcg-doc]'))b.addEventListener('click',()=>{
  const doc=docs[b.dataset.pcgDoc];if(!doc)return;
  $('pdf-title').textContent=doc.title;
  const link=$('pdf-download');link.href=doc.url;link.removeAttribute('download');link.target='_blank';link.rel='noopener noreferrer';link.textContent='↗ Ouvrir le document officiel';
  frame.src=doc.url;
  if(typeof dialog.showModal==='function')dialog.showModal();else window.open(doc.url,'_blank','noopener');
 });

 const resourceSection=$('ressources');
 if(resourceSection)resourceSection.addEventListener('click',event=>{
  const button=event.target.closest('[data-preview-local]');if(!button)return;
  const file=button.dataset.previewLocal;
  if(!window.ComptaAllowedPdfPaths?.has(file))return;
  $('pdf-title').textContent=button.dataset.previewTitle||'Document de révision';
  const link=$('pdf-download');link.href=file;link.textContent='⬇ Télécharger le PDF';link.setAttribute('download','');link.removeAttribute('target');
  frame.src=file;
  if(typeof dialog.showModal==='function')dialog.showModal();else window.open(file,'_blank','noopener');
 });
 $('pdf-close').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('close',()=>frame.removeAttribute('src'));
 dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
})();
