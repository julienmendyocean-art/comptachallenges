# Veille réglementaire ComptaChallenges — 8 novembre 2026

## Résultat de la veille

Une nouveauté officielle pertinente pour le thème **Système d’information comptable (SIC) / RGPD** a été confirmée depuis la précédente consolidation : la recommandation de la CNIL relative aux outils de rejeu de session.

- **Adoption :** 8 octobre 2026.
- **Publication au Journal officiel :** 5 novembre 2026, JORF n°0259, texte n°70.
- **Source juridique :** délibération CNIL n° 2026-114, NOR CNIS2629115X.
- **Portée :** la délibération indique expressément que la recommandation est non prescriptive et non exhaustive. Elle ne crée pas une nouvelle obligation légale. Elle explicite le cadre déjà applicable, notamment l’article 82 de la loi Informatique et Libertés et le RGPD.

### Points opérationnels à enseigner

1. Les outils de rejeu utilisent des traceurs ; la CNIL considère qu’aucune exemption de l’article 82 n’est applicable : consentement préalable.
2. Définir les finalités avant la collecte et présenter chacune d’elles avant le choix de l’utilisateur.
3. Prévoir une information spécifique sur le rejeu de session dès le premier niveau de la CMP (recommandation CNIL).
4. Limiter les sessions et masquer les champs de formulaire, saisies, données de compte, mots de passe, données bancaires/sensibles, mouvements près des zones d’authentification et contenus de chatbots.
5. Justifier une durée de conservation courte, permettre la suppression individuelle et sécuriser les accès/habilitations.
6. Qualifier les rôles de l’éditeur et du fournisseur selon les finalités et les moyens effectivement déterminés.

### Contrôle du projet ComptaChallenges

Une recherche statique dans les fichiers HTML/JavaScript du projet fourni n’a pas trouvé d’intégration identifiée de type Hotjar, FullStory, Clarity, Smartlook ou LogRocket. Aucune configuration de rejeu n’a donc été modifiée. Cette recherche statique ne remplace pas un contrôle réseau en production : des scripts tiers ou des injections par la plateforme d’hébergement restent à vérifier dans le navigateur.

## Synchronisation documentaire réalisée

- Cours SIC, mémo SIC et carte mentale SIC : annexes précédentes remplacées par une version datée du 08/11/2026 ; les dates de révision du support ont été harmonisées.
- Quiz SIC : trois questions actualisées, une par niveau, avec source, portée non normative, date et méthode de revue.
- Exercice expert SIC et corrigé : quatrième cas ajouté sur le rejeu de session et les garanties attendues.
- Références du site : ajout des liens CNIL et Légifrance ; date de consolidation documentaire portée au 08/11/2026.
- Build du site : identifiant passé à `20261108-r12-9` ; manifeste et bibliothèque PDF synchronisés.

## Contrôle des autres sources et thèmes

La consultation des rubriques ANC, BOFiP/DGFiP, Légifrance, Urssaf, Service-Public et des publications CNIL n’a pas fait apparaître, au 08/11/2026, d’autre texte nouveau publié depuis la veille qui nécessite une modification des cours, mémos ou cartes mentales des autres thèmes. Les échéances déjà préparées pour 2026/2027 restent inchangées : notamment suppression du RSI TVA hors agriculture au 01/01/2027, facturation électronique/e-reporting selon les catégories au 01/09/2026 et 01/09/2027, et règlements ANC 2026-01/03 applicables en principe aux exercices ouverts à compter du 01/01/2027.

La page ANC intitulée « PCG 2017 » porte une mise à jour du 03/11/2026 mais son PDF lié est intitulé « version consolidée au 1er janvier 2017 » : elle n’a pas été utilisée comme source du PCG 2026. La page ANC « Plan comptable général » renvoie à la version consolidée au 1er janvier 2026 et au plan de comptes 2026.

## Sources officielles

- [Légifrance — délibération CNIL n° 2026-114](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000055058587) — JORF du 05/11/2026.
- [CNIL — recommandation sur les outils de rejeu de session](https://www.cnil.fr/fr/rejeu-de-session-recommandation) — 05/11/2026.
- [CNIL — règles applicables aux cookies et autres traceurs](https://www.cnil.fr/fr/cookies-et-autres-traceurs/que-dit-la-loi).
- [ANC — Plan comptable général, version 2026](https://www.anc.gouv.fr/plan-comptable-general-0).
- [DGFiP — suppression du régime simplifié de TVA au 01/01/2027](https://www.impots.gouv.fr/actualite/le-regime-simplifie-dimposition-la-tva-est-supprime-compter-du-1er-janvier-2027).
- [BOFiP — obligation de transmission des données de transaction](https://bofip.impots.gouv.fr/bofip/13897-PGP.html/identifiant=BOI-TVA-DECLA-20-30-50-20260930).

## Limites et statut

Le patch est incrémental et s’applique **après** le patch du 07/11/2026. Il ne constitue pas l’archive complète du site. Les contrôles Supabase/RLS/RPC, les journaux de production et le trafic réseau réel ne sont pas couverts. Aucun déploiement GitHub/Netlify n’a été effectué. L’archive ZIP finale du site n’a pas été créée ; elle reste bloquée jusqu’à la commande explicite « Lance la MAJ finale ».
