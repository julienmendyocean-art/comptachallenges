# Veille réglementaire ComptaChallenges — 10 novembre 2026

## Changements confirmés et applicables aujourd’hui

### RSE — entrée en vigueur des ESRS simplifiés

Le règlement délégué (UE) 2026/1563, adopté le 3 juillet et publié au Journal officiel de l’Union européenne le 21 septembre 2026, **entre en vigueur le 10 novembre 2026** (article 3). Il remplace les annexes I et II du règlement 2023/2772. Il s’applique aux exercices commençant le 1er janvier 2027 ou après cette date. Il est directement applicable dans les États membres.

Pour les exercices commençant entre le 1er janvier et le 31 décembre 2026, l’article 2 prévoit trois options :
1. ESRS antérieurs, version du règlement 2023/2772 modifié en dernier lieu par le règlement 2025/1416 ;
2. ESRS simplifiés du règlement 2026/1563 ;
3. ESRS antérieurs avec huit allègements ciblés prévus par l’annexe I du règlement 2026/1563.

L’entreprise indique clairement dans son état de durabilité quelle version elle applique. Cette modification ne rend pas toutes les PME assujetties : le champ CSRD doit être vérifié séparément.

Le règlement (UE) 2026/1560 sur le standard volontaire reste distinct : en vigueur depuis le 24/09/2026 ; son plafond de chaîne de valeur s’applique aux exercices ouverts à compter du 01/01/2027.

**Source officielle :** [EUR-Lex — règlement délégué (UE) 2026/1563, texte français](
https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32026R1563) — JOUE 21/09/2026, art. 1 à 3. [EUR-Lex — règlement (UE) 2026/1560](
https://eur-lex.europa.eu/eli/reg_del/2026/1560/oj?locale=fr).

### PAIE — échéance de la CFP personnelle des indépendants en novembre

La fiche officielle Service-Public Entreprendre, vérifiée le 01/01/2026, rappelle le paiement annuel en novembre de la CFP personnelle des entrepreneurs individuels, y compris micro-entrepreneurs. Pour 2026 : EI hors micro : 120 € commerce/libéral (0,25 % du PASS) ; 139 € artisanat (0,29 % du PASS) ; 163 € dans les cas avec conjoint collaborateur indiqués par la fiche. Micro-entrepreneurs : 0,1 % du CA commercial, 0,3 % du CA artisanal, 0,2 % du CA libéral. Paiement mensuel : 5 ou 20 novembre selon l’échéance ; trimestriel : 5 novembre.

Ce n’est pas une nouvelle règle entrée en vigueur le 10 novembre : c’est une échéance annuelle 2026 pertinente à rappeler au moment du paiement. Elle est distincte de la CFP employeur, calculée sur la masse salariale et déclarée mensuellement en DSN. Le support précise la distinction pour éviter toute confusion dans le bulletin et les écritures.

**Sources officielles :** [Service-Public — CFP des entrepreneurs individuels](https://entreprendre.service-public.gouv.fr/vosdroits/F23459) ; [Urssaf — barèmes 2026](https://www.urssaf.fr/accueil/outils-documentation/taux-baremes/taux-cotisations-ac-plnr.html) ; [Service-Public — CFP employeur](https://entreprendre.service-public.gouv.fr/vosdroits/F22570).

## Synchronisation effectuée

- RSE : cours, mémo et carte mentale ; annexes du 07/11 remplacées par une version du 10/11 qui distingue l’entrée en vigueur du 10/11 et l’application aux exercices ouverts dès le 01/01/2027.
- RSE : trois questions de quiz (débutant, intermédiaire, expert) actualisées ; exercice expert et corrigé mis à jour sur les choix transitoires et la traçabilité.
- PAIE : cours, mémo et carte mentale complétés sur la CFP personnelle de l’indépendant, distincte de la CFP employeur en DSN.
- PAIE : trois questions de quiz (débutant, intermédiaire, expert) actualisées ; un exercice expert et un corrigé dédiés à la CFP indépendante ajoutés sans écraser l’exercice FNAL/CNRACL/SMIC déjà validé.
- Références du site : liens officiels EUR-Lex, Service-Public et Urssaf ajoutés/actualisés.
- Version du site : `20261110-r12-10` ; manifeste et bibliothèque PDF synchronisés.

## Contrôles réalisés

- 42 groupes de quiz ; 1 260 questions conservées.
- 290 ressources dans le manifeste, chemins uniques ; les 2 nouveaux PDF PAIE sont référencés.
- PDF modifiés et nouveaux : ouverture, extraction de texte et pages contrôlées.
- JSON valide ; syntaxe JavaScript du fichier de bibliothèque contrôlée.
- Intégrité SHA-256 des fichiers modifiés et intégrité ZIP contrôlées.

## Thèmes sans changement direct retenu aujourd’hui

Aucun nouveau texte publié le 9 ou le 10 novembre 2026 n’a été identifié dans les sources officielles consultées qui justifie de modifier les thèmes PCG, opérations courantes, TVA, immobilisations, lettrage/rapprochement, compte de résultat, bilan, clôture, analyse des coûts, fiscalité/IS, diagnostic financier ou SIC. Les échéances déjà documentées demeurent suivies, notamment la recodification TVA au 01/01/2027 et les règlements ANC 2026 applicables aux exercices ouverts dès le 01/01/2027 selon leurs dispositions.

## Limites et statut

Ce delta est incrémental et doit être appliqué **après** le patch du 07/11/2026 puis le delta SIC du 08/11/2026. Il ne constitue pas l’archive complète du site. Les contrôles de production, de trafic réseau, Supabase/RLS/RPC, les éventuels scripts injectés par l’hébergeur et la publication ne sont pas couverts. Aucun déploiement GitHub/Netlify n’a été effectué. L’archive ZIP finale du site n’a pas été créée ; elle reste bloquée jusqu’à la commande explicite « Lance la MAJ finale ».
