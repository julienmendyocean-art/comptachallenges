# ComptaChallenges — paquet d’importation candidat — 06/11/2026

- Fichiers PDF référencés : 266
- PDF copiés : 266
- Chemins absents : 0
- Empreintes SHA-256 en échec : 0
- Groupes de quiz : 42
- Questions : 1260
- Métadonnées manquantes (par champ) : {'source_kind': 810, 'scope': 630}

## Vérifications JavaScript
- `app.js` : OK
- `v4.js` : OK
- `online.js` : OK
- `pdf-library.js` : OK

## Correctifs réglementaires
Les correctifs SIC et PAIE sont inclus séparément dans `CORRECTIFS_A_INTEGRER_APRES_REVUE/`. Ils ne remplacent pas les cours, mémos ou cartes sources : leur intégration éditoriale et leur validation réglementaire ne sont pas certifiées dans ce paquet.

## Limites et statut
- Paquet statique construit à partir du dépôt fourni ; aucun push GitHub ni déploiement Netlify.
- Audit Supabase/RLS/RPC et tests multi-comptes non réalisés.
- Les scripts de contrôle historiques ne sont pas tous adaptés au schéma actuel (42 groupes, 14 thèmes, 1 260 questions) ; leurs échecs ne sont pas utilisés comme preuve de défaut sans adaptation.
- La présence des métadonnées ne vaut pas certification juridique individuelle.
- Ne pas considérer ce paquet comme une publication de production tant que les contrôles métier et serveur ne sont pas terminés.
