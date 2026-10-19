# Audit des questions et correction — Compta Challenge V4.9

Date : 17 octobre 2026. **Périmètre : quiz interactifs et banque de duels**, indépendamment des 147 PDF préalablement contrôlés sur d’autres plateformes et conservés intégralement.

## Sources réglementaires
- ANC, [PCG consolidé au 1er janvier 2026](https://www.anc.gouv.fr/plan-comptable-general-0).
- ANC, [plan de comptes officiel 2026](https://www.anc.gouv.fr/files/anc/files/1_Normes_fran%C3%A7aises/Plans%20comptables/2026/Plan-de-comptes-2026.pdf).
- DGFiP, [taux normal de TVA 20 %](https://bofip.impots.gouv.fr/bofip/1376-PGP.html/identifiant=BOI-TVA-LIQ-20-20140919).
- DGFiP, [exigibilité de TVA, biens et acomptes](https://bofip.impots.gouv.fr/bofip/534-PGP.html/identifiant=BOI-TVA-BASE-20-10-20221221).
- [Arrêté d’homologation des règlements ANC du 12 août 2026](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000054791025) ; vigilance sur l'entrée en vigueur spécifique des textes.

## Méthodes appliquées
1. Contrôle de structure et de réponses pour 1 054 entrées initiales de la banque de duels : propositions, indices de correction, doublons et qualité des explications.
2. Recalcul des **420 questions chiffrées** de familles identifiées par deux méthodes indépendantes (SQL + JavaScript) : **420 concordances**, sans double bonne proposition.
3. Élimination des 5 répétitions exactes parmi ces 420 et conservation d'une version distincte lorsqu'un doublon existe.
4. Contrôle des codes PCG 2026 et de leurs usages pour des cas de journal, de TVA et de compte de résultat ; clarification notamment du compte 661.
5. **477 questions de duel retenues** dans les 7 thèmes et 3 niveaux, avec source, date et méthode de contrôle enregistrées.
6. **577 autres questions non approuvées** : 567 retirées de question_bank après archivage privé, 10 conservées uniquement pour l'intégrité référentielle de duels historiques et jamais tirées de nouveau.
7. **70 QCM locaux** : réponses, choix et explications recontrôlés ; trois libellés clarifiés et sources conservées.
8. Tous les 147 PDF préexistants strictement identiques (empreintes SHA-256 identiques).

## Tests locaux
- 01. 7 fiches x 10 QCM : OK
- 02. 70 bonnes réponses revues contre la grille PCG/TVA : OK
- 03. 4 choix distincts sur chaque QCM : OK
- 04. Explication et lien ANC/BOFiP par question : OK
- 05. 7 calculs ciblés indépendants revalidés : OK
- 06. 147 PDF préservés bit-à-bit : OK
- 07. Les 3 niveaux de duel activés : OK
- 08. Aucune clé Supabase secrète dans les fichiers : OK
- 09. Syntaxe de tous les scripts JS : OK
- 10. ZIP racine prêt pour Netlify : OK
- 11. Examen non validé toujours suspendu : OK
- 12. PDF bibliothèque consultable et téléchargeable : OK

## Limites et prochaine validation
Les méthodes automatiques détectent les incohérences formelles et les calculs erronés, mais **ne prouvent pas à elles seules une conformité juridique absolue** pour toutes les hypothèses comptables. Les exercices particuliers requièrent une revue humaine compétente lors d'une modification de norme.
Les parcours Netlify réels et les authentifications e-mail ne sont pas validés par ces tests locaux.
Les PDF ont été conservés sur la base de la validation externe indiquée par le propriétaire, non sur une nouvelle certification de leurs 147 contenus.
Les 10 questions de duels historiques non approuvées restent bloquées à la consultation.

## Règle de publication
Aucune nouvelle question non contrôlée n'est tirée : le RPC de création de duel exige `review_status = 'validee'` avec `source_url` et `reviewed_at`. La table question_bank reste protégée par RLS. La banque et les réponses de duels sont côté serveur ; le site distribue uniquement les 70 QCM solo validés.
