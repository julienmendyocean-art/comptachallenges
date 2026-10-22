# ComptaChallenges — Compte rendu de préparation R9 (22 octobre 2026)

**Statut : préparé et vérifié localement, pas publié sur GitHub/Netlify.**

## Périmètre traité
- 9 thèmes, 3 niveaux, 30 QCM par groupe, soit **810 questions**.
- 630 questions héritées de R8 inchangées et 180 nouvelles pour SIC et PAIE.
- Types : notion 179, application 256, calcul 254, analyse 121.
- 9 mémos enrichis de notions à comprendre, à utiliser et de points de vigilance.
- 9 cours chronologiques enrichis : **8 × 54 pages + PAIE 70 pages = 502 pages**. Aucun exercice à réaliser ni corrigé introduit dans ces neuf cours.
- 223 PDF dans le site : 18 pédagogiques enrichis et 205 autres inchangés, comprenant tous les exercices/corrigés historiques.
- TVA : fiche conservée en cinq parties, option pour les débits et acomptes conservés.

## Contrôles effectués
- Structure des 810 QCM : 27 groupes de 30, choix A/B/C/D, bonne réponse, explication, source institutionnelle, unicité exacte des énoncés et diversité notion/application/calcul/analyse.
- 30 calculs nouveaux SIC/PAIE comparés à des résultats de référence ; 175 calculs antérieurs testés par scripts dédiés (35 débutants + 140 intermédiaires/experts).
- 18 scripts Python de qualité/publication réussis ; syntaxe JavaScript contrôlée pour app.js, pdf-library.js et v4.js.
- Tirages diversifiés simulés : **4 320 parties** de 10 questions et **100 quiz personnalisés**, sans doublon exact ni partie seulement chiffrée.
- Parcours interface testés en navigateur **en mémoire** : lancement des quiz SIC et PAIE, trois niveaux chacun, quatre choix, correction affichée, abandon et absence d’erreur JavaScript (6 parcours).
- 223 PDF présents et empreintes SHA-256 cohérentes ; les 205 PDF hors enrichissement sont conservés à l’octet près.
- Anciennes écritures comptables des exercices : contrôle d’équilibre débit/crédit et intégrité des PDF déjà testé ; cela ne certifie pas à lui seul le choix du compte ni le traitement fiscal.

## Limites importantes
- Les 180 nouvelles questions disposent d’une **revue documentaire ciblée**, pas d’une certification juridique ou réglementaire individuelle par un professionnel pour toutes les situations.
- Vérification hors ligne ; **aucun test de déploiement GitHub/Netlify ou Supabase en production**. Le domaine public peut encore afficher une version ancienne.
- L’authentification et les duels distants restent suspendus faute de validation des politiques Supabase, de la sécurité serveur et du RGPD.
- Les 9 thèmes ont des quiz ; les **exercices PDF restent ceux des sept thèmes initiaux**. Aucun nouveau sujet/corrigé SIC ou PAIE n’a été créé dans cette mise à jour.

## Sources-cadres principales
- ANC / PCG : https://www.anc.gouv.fr/plan-comptable-general-0
- BOFiP : https://bofip.impots.gouv.fr/
- DGFiP : https://www.impots.gouv.fr/professionnel/achatvente-de-biens
- CNIL : https://www.cnil.fr/fr/guide-de-la-securite-des-donnees-personnelles
- Code du travail numérique : https://code.travail.gouv.fr/
- Service-Public Entreprendre : https://entreprendre.service-public.gouv.fr/

## Intégration prévue
Créer une branche GitHub de préparation, remplacer les fichiers du dépôt avec le contenu de l’archive R9, lancer les contrôles GitHub Actions, vérifier les 810 QCM et 223 PDF sur Netlify **avant la publication publique**. Ne pas déposer de fichiers d’audit privés ou de secrets Supabase dans le dépôt.

## Liste des mémos enrichis
- memos/01 - Comptes usuels.pdf
- memos/02 - Opérations courantes.pdf
- memos/03 - Immobilisations.pdf
- memos/04 - TVA et CA3.pdf
- memos/05 - Lettrage et rapprochement bancaire.pdf
- memos/06 - Compte de résultat.pdf
- memos/07 - Bilan actif et passif.pdf
- memos/08 - Système d'information comptable.pdf
- references-paie/PAIE - Mémo consolidé 2026.pdf

## Liste des cours enrichis
- cours-complets/01_COURS_COMPTES_USUELS_2026.pdf
- cours-complets/02_COURS_SYSTEME_INFORMATION_COMPTABLE_2026.pdf
- cours-complets/03_COURS_OPERATIONS_COURANTES_2026.pdf
- cours-complets/04_COURS_TVA_CA3_2026.pdf
- cours-complets/05_COURS_IMMOBILISATIONS_2026.pdf
- cours-complets/06_COURS_PAIE_2026.pdf
- cours-complets/07_COURS_LETTRAGE_RAPPROCHEMENT_2026.pdf
- cours-complets/08_COURS_COMPTE_DE_RESULTAT_2026.pdf
- cours-complets/09_COURS_BILAN_ACTIF_PASSIF_2026.pdf
