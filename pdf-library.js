(() => {
'use strict';
const labels={debutant:'Débutant',intermediaire:'Intermédiaire',expert:'Expert',tous:'Tous niveaux'};
const topics=["Comptes usuels", "Opérations courantes", "Immobilisations", "TVA et CA3", "Lettrage et rapprochement bancaire", "Compte de résultat", "Bilan actif et passif", "Système d’information comptable", "PAIE", "Analyse des coûts et budgets", "Clôture et travaux d’inventaire", "Fiscalité des entreprises et IS", "Diagnostic financier et flux", "RSE et sobriété numérique"];
const library = [
  {
    "theme": "08",
    "label": "Cours complet • étape 01/14 · 55 pages",
    "level": "tous",
    "path": "cours-complets/02_COURS_SYSTEME_INFORMATION_COMPTABLE_2026.pdf",
    "sha256": "adc138b061289737bf82c31d8a0e79d5a63721aba31eb771b479dc35b493ef00",
    "download_name": "01_Cours_Systeme_dinformation_comptable.pdf"
  },
  {
    "theme": "08",
    "label": "Mémo · 20 pages",
    "level": "tous",
    "path": "memos/08 - Système d'information comptable.pdf",
    "sha256": "0f1dbe5772e8ca5ed2375036e0e0ffe26cef2af9f853cd56afb5458392ea194f",
    "download_name": "01_Memo_Systeme_dinformation_comptable.pdf"
  },
  {
    "theme": "08",
    "label": "Carte mentale · 11 pages",
    "level": "tous",
    "path": "cartes-mentales/08 - Système d'information comptable.pdf",
    "sha256": "8aceb949e8ddc29e25d0aa6fbd9973651f7ddb9d1c5b3b8fefff733fd5af5577",
    "download_name": "01_Carte_mentale_Systeme_dinformation_comptable.pdf"
  },
  {
    "theme": "08",
    "label": "Exercice rapide SIC — sujet · édition 22/10/2026 · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-2026-10-22/08_debutant_rapide_sujet.pdf",
    "type": "rapide",
    "source_status": "qcm issus banque R9; écritures nouvelles contrôlées par double entrée",
    "sha256": "546690e93f4a19d74f057549d76301ba23f777a1eb73924cf12faafc0abb6177",
    "download_name": "01_Systeme_dinformation_comptable_debutant_rapide_sujet.pdf"
  },
  {
    "theme": "08",
    "label": "Exercice rapide SIC — corrigé · édition 22/10/2026 · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-2026-10-22/08_debutant_rapide_corrige.pdf",
    "type": "rapide",
    "source_status": "qcm issus banque R9; écritures nouvelles contrôlées par double entrée",
    "sha256": "52a0d9b3c8ee4c925352cf155fa8ac20faeb41bb83e36306a94e5eba85c44299",
    "download_name": "01_Systeme_dinformation_comptable_debutant_rapide_corrige.pdf"
  },
  {
    "theme": "08",
    "label": "Exercice rapide SIC — sujet · édition 22/10/2026 · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-2026-10-22/08_intermediaire_rapide_sujet.pdf",
    "type": "rapide",
    "source_status": "qcm issus banque R9; écritures nouvelles contrôlées par double entrée",
    "sha256": "c2f435d2c0779db4e5b922f84b367767bfe7190851106365fb7d7271a897e78e",
    "download_name": "01_Systeme_dinformation_comptable_intermediaire_rapide_sujet.pdf"
  },
  {
    "theme": "08",
    "label": "Exercice rapide SIC — corrigé · édition 22/10/2026 · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-2026-10-22/08_intermediaire_rapide_corrige.pdf",
    "type": "rapide",
    "source_status": "qcm issus banque R9; écritures nouvelles contrôlées par double entrée",
    "sha256": "3601e79d340853df1392a504849420cf478441ceec6bfaad48f4775cc892dfbc",
    "download_name": "01_Systeme_dinformation_comptable_intermediaire_rapide_corrige.pdf"
  },
  {
    "theme": "08",
    "label": "Exercice rapide SIC — sujet · édition 22/10/2026 · difficulté 5/5",
    "level": "expert",
    "path": "exercices-2026-10-22/08_expert_rapide_sujet.pdf",
    "type": "rapide",
    "source_status": "qcm issus banque R9; écritures nouvelles contrôlées par double entrée",
    "sha256": "08fdddf4f7b65391e6e0b8027307d82c3eb239796bcc9d3c3134983b4bf926f7",
    "download_name": "01_Systeme_dinformation_comptable_expert_rapide_sujet.pdf"
  },
  {
    "theme": "08",
    "label": "Exercice rapide SIC — corrigé · édition 22/10/2026 · difficulté 5/5",
    "level": "expert",
    "path": "corriges-2026-10-22/08_expert_rapide_corrige.pdf",
    "type": "rapide",
    "source_status": "qcm issus banque R9; écritures nouvelles contrôlées par double entrée",
    "sha256": "6463a88bd80d890f1460beafccb620852f7ba4dafeb57083cafd0a003d7c896b",
    "download_name": "01_Systeme_dinformation_comptable_expert_rapide_corrige.pdf"
  },
  {
    "theme": "08",
    "label": "Exercice complet SIC — sujet · édition 22/10/2026 · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-2026-10-22/08_debutant_complet_sujet.pdf",
    "type": "complet",
    "source_status": "qcm issus banque R9; écritures nouvelles contrôlées par double entrée",
    "sha256": "d724f90147ed912576d8f1e5bfc217edc45d1d9fd86f0adaffb18c9d4c518d93",
    "download_name": "01_Systeme_dinformation_comptable_debutant_complet_sujet.pdf"
  },
  {
    "theme": "08",
    "label": "Exercice complet SIC — corrigé · édition 22/10/2026 · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-2026-10-22/08_debutant_complet_corrige.pdf",
    "type": "complet",
    "source_status": "qcm issus banque R9; écritures nouvelles contrôlées par double entrée",
    "sha256": "5fe44468e0bb2ee4ab92765d21c2113323bac5d0d8e01508fd35d66769ae8831",
    "download_name": "01_Systeme_dinformation_comptable_debutant_complet_corrige.pdf"
  },
  {
    "theme": "08",
    "label": "Exercice complet SIC — sujet · édition 22/10/2026 · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-2026-10-22/08_intermediaire_complet_sujet.pdf",
    "type": "complet",
    "source_status": "qcm issus banque R9; écritures nouvelles contrôlées par double entrée",
    "sha256": "87dd04ebe4d0ae96f7cbbd29f5a3795affa18982b4d6b28a67b8a2f7ccef7b9d",
    "download_name": "01_Systeme_dinformation_comptable_intermediaire_complet_sujet.pdf"
  },
  {
    "theme": "08",
    "label": "Exercice complet SIC — corrigé · édition 22/10/2026 · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-2026-10-22/08_intermediaire_complet_corrige.pdf",
    "type": "complet",
    "source_status": "qcm issus banque R9; écritures nouvelles contrôlées par double entrée",
    "sha256": "6db260bcc0165e737398bb79f220846ef7ef850c0722284c78e6345064bc1c46",
    "download_name": "01_Systeme_dinformation_comptable_intermediaire_complet_corrige.pdf"
  },
  {
    "theme": "08",
    "label": "Exercice complet SIC — sujet · édition 22/10/2026 · difficulté 5/5",
    "level": "expert",
    "path": "exercices-2026-10-22/08_expert_complet_sujet.pdf",
    "type": "complet",
    "source_status": "qcm issus banque R9; écritures nouvelles contrôlées par double entrée",
    "sha256": "78b4f3402df936f515e05013fc0079429ddc719b74ebbb7659140aac9a52d5eb",
    "download_name": "01_Systeme_dinformation_comptable_expert_complet_sujet.pdf"
  },
  {
    "theme": "08",
    "label": "Exercice complet SIC — corrigé · édition 22/10/2026 · difficulté 5/5",
    "level": "expert",
    "path": "corriges-2026-10-22/08_expert_complet_corrige.pdf",
    "type": "complet",
    "source_status": "qcm issus banque R9; écritures nouvelles contrôlées par double entrée",
    "sha256": "1812db73cd38ce76f291fe6d11063bf0681854ee9c808f7bdf0e98a20172abe7",
    "download_name": "01_Systeme_dinformation_comptable_expert_complet_corrige.pdf"
  },
  {
    "theme": "01",
    "label": "Cours complet • étape 02/14 · 64 pages",
    "level": "tous",
    "path": "cours-complets/01_COURS_COMPTES_USUELS_2026.pdf",
    "sha256": "aa4f02e6dbc27d2bd73d175b4af9f985c033d4bc3f3f5f2720ee14ca4a5854e4",
    "download_name": "02_Cours_Comptes_usuels.pdf"
  },
  {
    "theme": "01",
    "label": "Mémo · 32 pages",
    "level": "tous",
    "path": "memos/01 - Comptes usuels.pdf",
    "sha256": "61522aed577d13f6d41ec0ffec1603332ee290d40d51d9fe5e8929993eaf56ec",
    "download_name": "02_Memo_Comptes_usuels.pdf"
  },
  {
    "theme": "01",
    "label": "Carte mentale · 12 pages",
    "level": "tous",
    "path": "cartes-mentales/01 - Comptes usuels.pdf",
    "sha256": "3ddd9f0993d1d17d8ecffc350e52d730f0a7f5876fd809bea23f6d433391b03f",
    "download_name": "02_Carte_mentale_Comptes_usuels.pdf"
  },
  {
    "theme": "01",
    "label": "EXO rapide (édition 21/10/2026) · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-2026-10-21/01_debutant_rapide_sujet.pdf",
    "sha256": "14b3e25c1a0f7ab0e43bb950cb3a22a82ce37448bf4e18ceaa23155a91601a64",
    "download_name": "02_Comptes_usuels_debutant_rapide_sujet.pdf"
  },
  {
    "theme": "01",
    "label": "EXO rapide (édition 21/10/2026) · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-2026-10-21/01_debutant_rapide_corrige.pdf",
    "sha256": "419c4c2844a3639973ef4d8e23b33c6f93cd522be012852bc12872a3d15d7355",
    "download_name": "02_Comptes_usuels_debutant_rapide_corrige.pdf"
  },
  {
    "theme": "01",
    "label": "EXO rapide (édition 21/10/2026) · sujet · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-2026-10-21/01_intermediaire_rapide_sujet.pdf",
    "sha256": "5be9482df24fb40e0be9ad58f161e1b9e9d16c6201db54a272e369740a22d9fc",
    "download_name": "02_Comptes_usuels_intermediaire_rapide_sujet.pdf"
  },
  {
    "theme": "01",
    "label": "EXO rapide (édition 21/10/2026) · corrigé · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-2026-10-21/01_intermediaire_rapide_corrige.pdf",
    "sha256": "421a18fe5a6d1f7dea0b13867202b8fad3f63e6ee7546b373bcce51069456eb8",
    "download_name": "02_Comptes_usuels_intermediaire_rapide_corrige.pdf"
  },
  {
    "theme": "01",
    "label": "EXO rapide (édition 21/10/2026) · sujet · difficulté 5/5",
    "level": "expert",
    "path": "exercices-2026-10-21/01_expert_rapide_sujet.pdf",
    "sha256": "90a947a44b4b75ea6b937a81269aed9a87d08f7afe60a64c9cf2f03821a42878",
    "download_name": "02_Comptes_usuels_expert_rapide_sujet.pdf"
  },
  {
    "theme": "01",
    "label": "EXO rapide (édition 21/10/2026) · corrigé · difficulté 5/5",
    "level": "expert",
    "path": "corriges-2026-10-21/01_expert_rapide_corrige.pdf",
    "sha256": "96056375dbcc5ae578397304a774ca4143cbf476854b426603b4d0de34e328d6",
    "download_name": "02_Comptes_usuels_expert_rapide_corrige.pdf"
  },
  {
    "theme": "01",
    "label": "EXO complet (édition 21/10/2026) · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-2026-10-21/01_debutant_complet_sujet.pdf",
    "sha256": "41ace1ab0dedc44abf9b59a7db861cd68a8373d9609f84e26454aa2fbec548c1",
    "download_name": "02_Comptes_usuels_debutant_complet_sujet.pdf"
  },
  {
    "theme": "01",
    "label": "EXO complet · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-complets/01_debutant_exercices_complets.pdf",
    "sha256": "b47ebe9481ecf680dbadab30c5fbdc94d9d6dba93763ca8ee865b4f8e43e3062",
    "download_name": "02_Comptes_usuels_debutant_exercices_complets.pdf"
  },
  {
    "theme": "01",
    "label": "EXO complet complémentaire · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-valides/01_complet_debutant.pdf",
    "sha256": "b959317ffd7902cc16bd53eea6e388579628df7624b56124015986b0958e1233",
    "download_name": "02_Comptes_usuels_complet_debutant.pdf"
  },
  {
    "theme": "01",
    "label": "EXO complet (édition 21/10/2026) · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-2026-10-21/01_debutant_complet_corrige.pdf",
    "sha256": "6b4ad4e201f97975c7f74730525879799fa2b2dc351665eb619291198120451c",
    "download_name": "02_Comptes_usuels_debutant_complet_corrige.pdf"
  },
  {
    "theme": "01",
    "label": "EXO complet · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-complets/01_debutant_corrige_complet.pdf",
    "sha256": "4d487e17470dff66e9f1490dd81984e42caa518bd8c84fd981b9dce8671f1790",
    "download_name": "02_Comptes_usuels_debutant_corrige_complet.pdf"
  },
  {
    "theme": "01",
    "label": "EXO complet complémentaire · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-valides/01_complet_debutant.pdf",
    "sha256": "521eddc2968d5c7bc748be698af9e3f10aae65ab9714faa68d77251d41d252a9",
    "download_name": "02_Comptes_usuels_complet_debutant.pdf"
  },
  {
    "theme": "01",
    "label": "EXO complet (édition 21/10/2026) · sujet · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-2026-10-21/01_intermediaire_complet_sujet.pdf",
    "sha256": "6d71fb1a5caab86933a977a5d24ad92f0ce270c2180b305d3026e2b09dd0cff5",
    "download_name": "02_Comptes_usuels_intermediaire_complet_sujet.pdf"
  },
  {
    "theme": "01",
    "label": "EXO complet · sujet · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-complets/01_intermediaire_exercices_complets.pdf",
    "sha256": "7bad69643a3501dd7eaacc8d55f395013b564863ad20fc00addeaea3e2a55078",
    "download_name": "02_Comptes_usuels_intermediaire_exercices_complets.pdf"
  },
  {
    "theme": "01",
    "label": "EXO complet (édition 21/10/2026) · corrigé · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-2026-10-21/01_intermediaire_complet_corrige.pdf",
    "sha256": "bd508655a915d19eeb5a8daec46f71f86162831250f78f8f532a3bd5b389506e",
    "download_name": "02_Comptes_usuels_intermediaire_complet_corrige.pdf"
  },
  {
    "theme": "01",
    "label": "EXO complet · corrigé · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-complets/01_intermediaire_corrige_complet.pdf",
    "sha256": "ac979f554acb2aa2ca13c849ee79a5cfe37067738ecfd044ae6fdb51a0198fa6",
    "download_name": "02_Comptes_usuels_intermediaire_corrige_complet.pdf"
  },
  {
    "theme": "01",
    "label": "EXO complet (édition 21/10/2026) · sujet · difficulté 5/5",
    "level": "expert",
    "path": "exercices-2026-10-21/01_expert_complet_sujet.pdf",
    "sha256": "56369db3a1dd3f5c7461c97a870eb9947149c80060a6f40c638819c4999e7e69",
    "download_name": "02_Comptes_usuels_expert_complet_sujet.pdf"
  },
  {
    "theme": "01",
    "label": "EXO complet · sujet · difficulté 5/5",
    "level": "expert",
    "path": "exercices-complets/01_expert_exercices_complets.pdf",
    "sha256": "57a13f4a38d2979f3b0c0f62fcaf9f50357273652db1de7acbe3ee8919b084e3",
    "download_name": "02_Comptes_usuels_expert_exercices_complets.pdf"
  },
  {
    "theme": "01",
    "label": "EXO complet (édition 21/10/2026) · corrigé · difficulté 5/5",
    "level": "expert",
    "path": "corriges-2026-10-21/01_expert_complet_corrige.pdf",
    "sha256": "6e40514215eb83682700ff70258e8c0d6123d4f3fe65964d791ff58b47f41391",
    "download_name": "02_Comptes_usuels_expert_complet_corrige.pdf"
  },
  {
    "theme": "01",
    "label": "EXO complet · corrigé · difficulté 5/5",
    "level": "expert",
    "path": "corriges-complets/01_expert_corrige_complet.pdf",
    "sha256": "85be492821e9caaeb9d514cf0eb9757e4717edac248d2a296989c6b02ec5442a",
    "download_name": "02_Comptes_usuels_expert_corrige_complet.pdf"
  },
  {
    "theme": "02",
    "label": "Cours complet • étape 03/14 · 62 pages",
    "level": "tous",
    "path": "cours-complets/03_COURS_OPERATIONS_COURANTES_2026.pdf",
    "sha256": "e3917c9329d268500e764f5e408437b9ecf0a820c07fa6feb203e5d3149ec17c",
    "download_name": "03_Cours_Operations_courantes.pdf"
  },
  {
    "theme": "02",
    "label": "Mémo · 23 pages",
    "level": "tous",
    "path": "memos/02 - Opérations courantes.pdf",
    "sha256": "4306a46a2abea5c0db81ed8e989afdeeee636dbac9251b5a893dfd1a06aee9ea",
    "download_name": "03_Memo_Operations_courantes.pdf"
  },
  {
    "theme": "02",
    "label": "Carte mentale · 11 pages",
    "level": "tous",
    "path": "cartes-mentales/02 - Opérations courantes.pdf",
    "sha256": "7d450366637f83a7f3704afc2bf5b34a8ca0d7c5951d2ffc756957358c2f5d63",
    "download_name": "03_Carte_mentale_Operations_courantes.pdf"
  },
  {
    "theme": "02",
    "label": "EXO rapide (édition 21/10/2026) · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-2026-10-21/02_debutant_rapide_sujet.pdf",
    "sha256": "469fda86a8915b5f8cf00d2bc36183b8d99807bca787e48a55362fd17337aaa4",
    "download_name": "03_Operations_courantes_debutant_rapide_sujet.pdf"
  },
  {
    "theme": "02",
    "label": "EXO rapide (édition 21/10/2026) · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-2026-10-21/02_debutant_rapide_corrige.pdf",
    "sha256": "aa0fa8eff2a149b6284100bc47e620d50ab28c257217aaa59a919bd7f21454f9",
    "download_name": "03_Operations_courantes_debutant_rapide_corrige.pdf"
  },
  {
    "theme": "02",
    "label": "EXO rapide (édition 21/10/2026) · sujet · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-2026-10-21/02_intermediaire_rapide_sujet.pdf",
    "sha256": "4f911a5ee3b304845adec233f8475599df72e8ab10536389d3dd4bc91321230e",
    "download_name": "03_Operations_courantes_intermediaire_rapide_sujet.pdf"
  },
  {
    "theme": "02",
    "label": "EXO rapide (édition 21/10/2026) · corrigé · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-2026-10-21/02_intermediaire_rapide_corrige.pdf",
    "sha256": "29eee59567972764e32fd816cadfef9f0abc731339bff7a90a04d92e7e0655e1",
    "download_name": "03_Operations_courantes_intermediaire_rapide_corrige.pdf"
  },
  {
    "theme": "02",
    "label": "EXO rapide (édition 21/10/2026) · sujet · difficulté 5/5",
    "level": "expert",
    "path": "exercices-2026-10-21/02_expert_rapide_sujet.pdf",
    "sha256": "2c5610a93967125ddab52fde3079326792f519398c423b52648ee5b4a2869445",
    "download_name": "03_Operations_courantes_expert_rapide_sujet.pdf"
  },
  {
    "theme": "02",
    "label": "EXO rapide (édition 21/10/2026) · corrigé · difficulté 5/5",
    "level": "expert",
    "path": "corriges-2026-10-21/02_expert_rapide_corrige.pdf",
    "sha256": "27006897e528b6c75453797eaa3be8db9361b06c772fed998a4c7c7db44c1745",
    "download_name": "03_Operations_courantes_expert_rapide_corrige.pdf"
  },
  {
    "theme": "02",
    "label": "EXO complet (édition 21/10/2026) · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-2026-10-21/02_debutant_complet_sujet.pdf",
    "sha256": "a4457707c8274fa6f8955c03f60222923914e06c6f9892f15718018f4547f78a",
    "download_name": "03_Operations_courantes_debutant_complet_sujet.pdf"
  },
  {
    "theme": "02",
    "label": "EXO complet · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-complets/02_debutant_exercices_complets.pdf",
    "sha256": "52436f359eb042c503908979d4c57fa0a4632f7fc79105424cd363d27b2d29ee",
    "download_name": "03_Operations_courantes_debutant_exercices_complets.pdf"
  },
  {
    "theme": "02",
    "label": "EXO complet complémentaire · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-valides/02_complet_debutant.pdf",
    "sha256": "10e731294f2259705bdb5658e89b9f2bdaef43eedeeb3bc891c1bb50654eb405",
    "download_name": "03_Operations_courantes_complet_debutant.pdf"
  },
  {
    "theme": "02",
    "label": "EXO complet (édition 21/10/2026) · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-2026-10-21/02_debutant_complet_corrige.pdf",
    "sha256": "8f85b32f64dd6cb4da4d73a920b30b9eff78a7d1ba3557959f11479926f31e2c",
    "download_name": "03_Operations_courantes_debutant_complet_corrige.pdf"
  },
  {
    "theme": "02",
    "label": "EXO complet · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-complets/02_debutant_corrige_complet.pdf",
    "sha256": "cd392b75d8fdda3b06c6acb8c84df2c1a8f719b2fa9a73755f0712f8bf26c262",
    "download_name": "03_Operations_courantes_debutant_corrige_complet.pdf"
  },
  {
    "theme": "02",
    "label": "EXO complet complémentaire · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-valides/02_complet_debutant.pdf",
    "sha256": "05d4251d8994a724b05f5269ced23a05a8879ed512b1ba8494b586b5d7b0e6f1",
    "download_name": "03_Operations_courantes_complet_debutant.pdf"
  },
  {
    "theme": "02",
    "label": "EXO complet (édition 21/10/2026) · sujet · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-2026-10-21/02_intermediaire_complet_sujet.pdf",
    "sha256": "cca55fd973b4f9ae42ddc30a9eccb364fac8a79be68a3c3345ade3c6e591b1cc",
    "download_name": "03_Operations_courantes_intermediaire_complet_sujet.pdf"
  },
  {
    "theme": "02",
    "label": "EXO complet · sujet · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-complets/02_intermediaire_exercices_complets.pdf",
    "sha256": "efd13ea689bab7d1902f56650c6971204c3ecfedde48c065fd4932995e7e103b",
    "download_name": "03_Operations_courantes_intermediaire_exercices_complets.pdf"
  },
  {
    "theme": "02",
    "label": "EXO complet (édition 21/10/2026) · corrigé · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-2026-10-21/02_intermediaire_complet_corrige.pdf",
    "sha256": "569a5e5b6f13957f32e982d3672c30a6f50d946920d4539998e026e97808c881",
    "download_name": "03_Operations_courantes_intermediaire_complet_corrige.pdf"
  },
  {
    "theme": "02",
    "label": "EXO complet · corrigé · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-complets/02_intermediaire_corrige_complet.pdf",
    "sha256": "97767f507e1709d7ae12a24ae174d7d1d3bfa79ae0dd8f04c144e35c63bfa114",
    "download_name": "03_Operations_courantes_intermediaire_corrige_complet.pdf"
  },
  {
    "theme": "02",
    "label": "EXO complet (édition 21/10/2026) · sujet · difficulté 5/5",
    "level": "expert",
    "path": "exercices-2026-10-21/02_expert_complet_sujet.pdf",
    "sha256": "a5d8f29db00bb5a8fa542f3304966d833e0e56081fd790c7046f364d450fea48",
    "download_name": "03_Operations_courantes_expert_complet_sujet.pdf"
  },
  {
    "theme": "02",
    "label": "EXO complet · sujet · difficulté 5/5",
    "level": "expert",
    "path": "exercices-complets/02_expert_exercices_complets.pdf",
    "sha256": "68261233615b89351e94b0df720b5ac31f3a7a13730bf781e5e58b54483b8fe4",
    "download_name": "03_Operations_courantes_expert_exercices_complets.pdf"
  },
  {
    "theme": "02",
    "label": "EXO complet (édition 21/10/2026) · corrigé · difficulté 5/5",
    "level": "expert",
    "path": "corriges-2026-10-21/02_expert_complet_corrige.pdf",
    "sha256": "f45a3fe9795f20410e5dc12d8b2ace80c5d8710b0c8cc7e6c16ddb8a3e0ff8bc",
    "download_name": "03_Operations_courantes_expert_complet_corrige.pdf"
  },
  {
    "theme": "02",
    "label": "EXO complet · corrigé · difficulté 5/5",
    "level": "expert",
    "path": "corriges-complets/02_expert_corrige_complet.pdf",
    "sha256": "7d4b219938e6c8e0cd5b60d409d790b66cb67b9fee96ef0c9012382e140d6815",
    "download_name": "03_Operations_courantes_expert_corrige_complet.pdf"
  },
  {
    "theme": "04",
    "label": "Cours complet • étape 04/14 · 67 pages",
    "level": "tous",
    "path": "cours-complets/04_COURS_TVA_CA3_2026.pdf",
    "sha256": "c3fb1c2bd111a3981eeedd780e35a13161737d1240bf8d35011d5268773baafa",
    "download_name": "04_Cours_TVA_et_CA3.pdf"
  },
  {
    "theme": "04",
    "label": "Mémo · 27 pages",
    "level": "tous",
    "path": "memos/04 - TVA et CA3.pdf",
    "sha256": "06187528bc22d848593f90993bdc9beacea4b7daa8c733c1a03b009e6ff04f12",
    "download_name": "04_Memo_TVA_et_CA3.pdf"
  },
  {
    "theme": "04",
    "label": "Carte mentale · 13 pages",
    "level": "tous",
    "path": "cartes-mentales/04 - TVA et CA3.pdf",
    "sha256": "0e32b215924ebf2b127f2ab0ab997a8faccdcd3394bb82f8fe816d12133958c5",
    "download_name": "04_Carte_mentale_TVA_et_CA3.pdf"
  },
  {
    "theme": "04",
    "label": "EXO rapide (édition 21/10/2026) · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-2026-10-21/04_debutant_rapide_sujet.pdf",
    "sha256": "72a71b605533892535796eb6ef187b4006690104b8da82b5df45fc07e5507b7b",
    "download_name": "04_TVA_et_CA3_debutant_rapide_sujet.pdf"
  },
  {
    "theme": "04",
    "label": "EXO rapide (édition 21/10/2026) · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-2026-10-21/04_debutant_rapide_corrige.pdf",
    "sha256": "ddb855982b05a31986e51eddcce1d113669936fc4f2b9463ed19d40a7a393c5b",
    "download_name": "04_TVA_et_CA3_debutant_rapide_corrige.pdf"
  },
  {
    "theme": "04",
    "label": "EXO rapide (édition 21/10/2026) · sujet · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-2026-10-21/04_intermediaire_rapide_sujet.pdf",
    "sha256": "1bc9e6d48c0900731fdf70c59df3f8f47df9d2b313fdbb03f8c5a0a8e2d90316",
    "download_name": "04_TVA_et_CA3_intermediaire_rapide_sujet.pdf"
  },
  {
    "theme": "04",
    "label": "EXO rapide (édition 21/10/2026) · corrigé · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-2026-10-21/04_intermediaire_rapide_corrige.pdf",
    "sha256": "7f0a559fa23b2fc745d2bb16c91aec9b1fd8ab03f9cbb6271acab6cdeba60c45",
    "download_name": "04_TVA_et_CA3_intermediaire_rapide_corrige.pdf"
  },
  {
    "theme": "04",
    "label": "EXO rapide (édition 21/10/2026) · sujet · difficulté 5/5",
    "level": "expert",
    "path": "exercices-2026-10-21/04_expert_rapide_sujet.pdf",
    "sha256": "d51eb44d5cdd13ed4f656a67916cf6b3fa00b3b4b6db678a7b84c4326e82a626",
    "download_name": "04_TVA_et_CA3_expert_rapide_sujet.pdf"
  },
  {
    "theme": "04",
    "label": "EXO rapide (édition 21/10/2026) · corrigé · difficulté 5/5",
    "level": "expert",
    "path": "corriges-2026-10-21/04_expert_rapide_corrige.pdf",
    "sha256": "72ce5c66d382d89f7e0225cd0cb648cbdfa8d98d7e7f08c885fa7a2492fa6d75",
    "download_name": "04_TVA_et_CA3_expert_rapide_corrige.pdf"
  },
  {
    "theme": "04",
    "label": "EXO complet (édition 21/10/2026) · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-2026-10-21/04_debutant_complet_sujet.pdf",
    "sha256": "b074c1ca70f4d4cc0f921131beb4c71fce9340beabf7110effedda1844ed8fe2",
    "download_name": "04_TVA_et_CA3_debutant_complet_sujet.pdf"
  },
  {
    "theme": "04",
    "label": "EXO complet · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-complets/04_debutant_exercices_complets.pdf",
    "sha256": "8d2273c3ac05421db51a90575e64cf3208a173c22d0618b308d010c891d63938",
    "download_name": "04_TVA_et_CA3_debutant_exercices_complets.pdf"
  },
  {
    "theme": "04",
    "label": "EXO complet complémentaire · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-valides/04_complet_debutant.pdf",
    "sha256": "2f014173c2a8244073c66166c60ee9d213b0f80948a5fdfd58e78d97fa2062f9",
    "download_name": "04_TVA_et_CA3_complet_debutant.pdf"
  },
  {
    "theme": "04",
    "label": "EXO complet (édition 21/10/2026) · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-2026-10-21/04_debutant_complet_corrige.pdf",
    "sha256": "f954984e72e7120439802da6927d7a07363a6c1bf8273e92c20362ce95ee4185",
    "download_name": "04_TVA_et_CA3_debutant_complet_corrige.pdf"
  },
  {
    "theme": "04",
    "label": "EXO complet · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-complets/04_debutant_corrige_complet.pdf",
    "sha256": "fbf5d25d6dfeddb0e7f41a4eef1e5daed9e1a991f91f381048f6d9c64355e727",
    "download_name": "04_TVA_et_CA3_debutant_corrige_complet.pdf"
  },
  {
    "theme": "04",
    "label": "EXO complet complémentaire · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-valides/04_complet_debutant.pdf",
    "sha256": "25a71c141c8078213ba8f4c4048b12b934fbe3ad56d339e2d135930278fc9b88",
    "download_name": "04_TVA_et_CA3_complet_debutant.pdf"
  },
  {
    "theme": "04",
    "label": "EXO complet (édition 21/10/2026) · sujet · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-2026-10-21/04_intermediaire_complet_sujet.pdf",
    "sha256": "ed9ceccecb220e8d475bc230d2ba0374400981c202573160f86eb841f6a9af80",
    "download_name": "04_TVA_et_CA3_intermediaire_complet_sujet.pdf"
  },
  {
    "theme": "04",
    "label": "EXO complet · sujet · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-complets/04_intermediaire_exercices_complets.pdf",
    "sha256": "d5afd6cf751acd15f0c3ca59d4f95e096d729db04e9c2e0ad12102d9411785d1",
    "download_name": "04_TVA_et_CA3_intermediaire_exercices_complets.pdf"
  },
  {
    "theme": "04",
    "label": "EXO complet (édition 21/10/2026) · corrigé · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-2026-10-21/04_intermediaire_complet_corrige.pdf",
    "sha256": "3f4393825273e87e072103ad61de985b5414b7c10579f13e18e0607f947ecb46",
    "download_name": "04_TVA_et_CA3_intermediaire_complet_corrige.pdf"
  },
  {
    "theme": "04",
    "label": "EXO complet · corrigé · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-complets/04_intermediaire_corrige_complet.pdf",
    "sha256": "5ab8c3342676a0755de2d10a0e3514f86a36e548267bebfd562a7011005529ab",
    "download_name": "04_TVA_et_CA3_intermediaire_corrige_complet.pdf"
  },
  {
    "theme": "04",
    "label": "EXO complet (édition 21/10/2026) · sujet · difficulté 5/5",
    "level": "expert",
    "path": "exercices-2026-10-21/04_expert_complet_sujet.pdf",
    "sha256": "62a567453435a69e872d6596b6ffe2bc972a672b2c9e285acd1dd9d96494a47d",
    "download_name": "04_TVA_et_CA3_expert_complet_sujet.pdf"
  },
  {
    "theme": "04",
    "label": "EXO complet · sujet · difficulté 5/5",
    "level": "expert",
    "path": "exercices-complets/04_expert_exercices_complets.pdf",
    "sha256": "d72b5b0947572351566a92041a827fd1ac1ec52021154d39fbd26374ee572818",
    "download_name": "04_TVA_et_CA3_expert_exercices_complets.pdf"
  },
  {
    "theme": "04",
    "label": "EXO complet (édition 21/10/2026) · corrigé · difficulté 5/5",
    "level": "expert",
    "path": "corriges-2026-10-21/04_expert_complet_corrige.pdf",
    "sha256": "55ff8d1e40e66971640e2a7ee578e0572be84bb77db4e69e52f130941f4a2801",
    "download_name": "04_TVA_et_CA3_expert_complet_corrige.pdf"
  },
  {
    "theme": "04",
    "label": "EXO complet · corrigé · difficulté 5/5",
    "level": "expert",
    "path": "corriges-complets/04_expert_corrige_complet.pdf",
    "sha256": "fc5e58b0c236faf64ba428ad1b53e0c1b0bbc3b290b47b6ba9ac1a383df11a7c",
    "download_name": "04_TVA_et_CA3_expert_corrige_complet.pdf"
  },
  {
    "theme": "03",
    "label": "Cours complet • étape 05/14 · 58 pages",
    "level": "tous",
    "path": "cours-complets/05_COURS_IMMOBILISATIONS_2026.pdf",
    "sha256": "258f299fe58a4ed99e411a40404f5a886dd13935c43c400873f0e1f2216fdde5",
    "download_name": "05_Cours_Immobilisations.pdf"
  },
  {
    "theme": "03",
    "label": "Mémo · 22 pages",
    "level": "tous",
    "path": "memos/03 - Immobilisations.pdf",
    "sha256": "88631e481accd75f7e45fa4cc2c3f820ea0479e961ca90906b38efdc3011add7",
    "download_name": "05_Memo_Immobilisations.pdf"
  },
  {
    "theme": "03",
    "label": "Carte mentale · 12 pages",
    "level": "tous",
    "path": "cartes-mentales/03 - Immobilisations.pdf",
    "sha256": "0e0b2e5635f1fc63e0b21099d9c7076f71e528e13681a9dfcff242ffcbcfbe46",
    "download_name": "05_Carte_mentale_Immobilisations.pdf"
  },
  {
    "theme": "03",
    "label": "EXO rapide (édition 21/10/2026) · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-2026-10-21/03_debutant_rapide_sujet.pdf",
    "sha256": "d7fadf74edc73ea92ab82b1609546adfb17bdcadf3a52f894828286e94f36a61",
    "download_name": "05_Immobilisations_debutant_rapide_sujet.pdf"
  },
  {
    "theme": "03",
    "label": "EXO rapide (édition 21/10/2026) · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-2026-10-21/03_debutant_rapide_corrige.pdf",
    "sha256": "22946d5802d253a54a401244ce798d0d7d34acdcfb8f94ac8a959282a3aa6252",
    "download_name": "05_Immobilisations_debutant_rapide_corrige.pdf"
  },
  {
    "theme": "03",
    "label": "EXO rapide (édition 21/10/2026) · sujet · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-2026-10-21/03_intermediaire_rapide_sujet.pdf",
    "sha256": "b58cbad8c63148e727086c7e01ac37e02af468db8875663838d5ffc2f8c7abaf",
    "download_name": "05_Immobilisations_intermediaire_rapide_sujet.pdf"
  },
  {
    "theme": "03",
    "label": "EXO rapide (édition 21/10/2026) · corrigé · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-2026-10-21/03_intermediaire_rapide_corrige.pdf",
    "sha256": "b2646a673639d92a3a242ee3d2640ad3c343b2ee47e16e49d7568f8c759fb5b2",
    "download_name": "05_Immobilisations_intermediaire_rapide_corrige.pdf"
  },
  {
    "theme": "03",
    "label": "EXO rapide (édition 21/10/2026) · sujet · difficulté 5/5",
    "level": "expert",
    "path": "exercices-2026-10-21/03_expert_rapide_sujet.pdf",
    "sha256": "6dab394e50f329448f2c67aee5ac50d442d2abf2fdb53c6b170d615f6b167787",
    "download_name": "05_Immobilisations_expert_rapide_sujet.pdf"
  },
  {
    "theme": "03",
    "label": "EXO rapide (édition 21/10/2026) · corrigé · difficulté 5/5",
    "level": "expert",
    "path": "corriges-2026-10-21/03_expert_rapide_corrige.pdf",
    "sha256": "28c9953c2f513f02775160f900ac80162c67c98396be4bc9a85b27f9cceb69cb",
    "download_name": "05_Immobilisations_expert_rapide_corrige.pdf"
  },
  {
    "theme": "03",
    "label": "EXO complet (édition 21/10/2026) · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-2026-10-21/03_debutant_complet_sujet.pdf",
    "sha256": "5e1bd4fea21853b3eb4b4c3ab77f82b2d1826798d4df3e25a7c5b278040c8f66",
    "download_name": "05_Immobilisations_debutant_complet_sujet.pdf"
  },
  {
    "theme": "03",
    "label": "EXO complet · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-complets/03_debutant_exercices_complets.pdf",
    "sha256": "39abe3cab9a255d2b16803208a7cf7eb42b760f52ff6244fa580dec2a6eb308d",
    "download_name": "05_Immobilisations_debutant_exercices_complets.pdf"
  },
  {
    "theme": "03",
    "label": "EXO complet complémentaire · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-valides/03_complet_debutant.pdf",
    "sha256": "09203ef7ac9db791605c6092fd41ac5c173612e1860c52af5a4c336129f040f0",
    "download_name": "05_Immobilisations_complet_debutant.pdf"
  },
  {
    "theme": "03",
    "label": "EXO complet (édition 21/10/2026) · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-2026-10-21/03_debutant_complet_corrige.pdf",
    "sha256": "5f87b5086ec7da65836e1b718ee75ddce23eb71c43a696015f3057bb97b74f62",
    "download_name": "05_Immobilisations_debutant_complet_corrige.pdf"
  },
  {
    "theme": "03",
    "label": "EXO complet · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-complets/03_debutant_corrige_complet.pdf",
    "sha256": "6ac1219212313f92eac5b3b0e499993fa4c0537d6731a5618794b2d59623cbc5",
    "download_name": "05_Immobilisations_debutant_corrige_complet.pdf"
  },
  {
    "theme": "03",
    "label": "EXO complet complémentaire · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-valides/03_complet_debutant.pdf",
    "sha256": "cb7f4afe8200779e333d59fe9c3be5474ee975ce6597d727f9b4faa514f51c81",
    "download_name": "05_Immobilisations_complet_debutant.pdf"
  },
  {
    "theme": "03",
    "label": "EXO complet (édition 21/10/2026) · sujet · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-2026-10-21/03_intermediaire_complet_sujet.pdf",
    "sha256": "7a2ccd3da1eb60060638c86ad7861a91b5caa958b34edd7abb0d33c598ac3b72",
    "download_name": "05_Immobilisations_intermediaire_complet_sujet.pdf"
  },
  {
    "theme": "03",
    "label": "EXO complet · sujet · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-complets/03_intermediaire_exercices_complets.pdf",
    "sha256": "9bb25537378d9074c45c229c099a9abc5c99fad6cddf9f4fb2ce7351ad948f55",
    "download_name": "05_Immobilisations_intermediaire_exercices_complets.pdf"
  },
  {
    "theme": "03",
    "label": "EXO complet (édition 21/10/2026) · corrigé · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-2026-10-21/03_intermediaire_complet_corrige.pdf",
    "sha256": "224c266ae7416b14d921f32fc77886485396822b841c87bd76337d0e76936743",
    "download_name": "05_Immobilisations_intermediaire_complet_corrige.pdf"
  },
  {
    "theme": "03",
    "label": "EXO complet · corrigé · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-complets/03_intermediaire_corrige_complet.pdf",
    "sha256": "9701b78ba271d1d4e8d26dc4ededc9c580ca9f2cc1182cd8790b7145d1d37892",
    "download_name": "05_Immobilisations_intermediaire_corrige_complet.pdf"
  },
  {
    "theme": "03",
    "label": "EXO complet (édition 21/10/2026) · sujet · difficulté 5/5",
    "level": "expert",
    "path": "exercices-2026-10-21/03_expert_complet_sujet.pdf",
    "sha256": "f8d51e5528190301673207fa7b66eb3be4a67d2f367886425e26dca8f1f97e1f",
    "download_name": "05_Immobilisations_expert_complet_sujet.pdf"
  },
  {
    "theme": "03",
    "label": "EXO complet · sujet · difficulté 5/5",
    "level": "expert",
    "path": "exercices-complets/03_expert_exercices_complets.pdf",
    "sha256": "f5547528dcc6ad621427c89a6849342a21a22d4c83e02409e27b92448d4f33c2",
    "download_name": "05_Immobilisations_expert_exercices_complets.pdf"
  },
  {
    "theme": "03",
    "label": "EXO complet (édition 21/10/2026) · corrigé · difficulté 5/5",
    "level": "expert",
    "path": "corriges-2026-10-21/03_expert_complet_corrige.pdf",
    "sha256": "43b7d70d2402df03018ae0e09359a8fbce8422a6b20276462aa769f1cbbf9010",
    "download_name": "05_Immobilisations_expert_complet_corrige.pdf"
  },
  {
    "theme": "03",
    "label": "EXO complet · corrigé · difficulté 5/5",
    "level": "expert",
    "path": "corriges-complets/03_expert_corrige_complet.pdf",
    "sha256": "ef8043df4ae60872fd3b5b9c8354c080df64d2ca06c60c1ba4ca7d59e11fdece",
    "download_name": "05_Immobilisations_expert_corrige_complet.pdf"
  },
  {
    "theme": "09",
    "label": "Cours complet • étape 06/14 · 83 pages",
    "level": "tous",
    "path": "cours-complets/06_COURS_PAIE_2026.pdf",
    "sha256": "5d55fba20f4a5864a787da38a038512d129341917a552e234d22f33bd152f299",
    "download_name": "06_Cours_PAIE.pdf"
  },
  {
    "theme": "09",
    "label": "Mémo · 27 pages",
    "level": "tous",
    "path": "references-paie/PAIE - Mémo consolidé 2026.pdf",
    "sha256": "9172f55b7d6ce7d78a807cf4ddc3490a5116cdd469dfe1bffc5d9d0ddc4a8c36",
    "type": "memos",
    "note": "Consolidation des supports PAIE du 22/10/2026",
    "download_name": "06_Memo_PAIE.pdf"
  },
  {
    "theme": "09",
    "label": "Carte mentale · 15 pages",
    "level": "tous",
    "path": "references-paie/PAIE - Carte mentale consolidée 2026.pdf",
    "sha256": "f19457f0ce1e8e4135d1e504cf12b3e33fd43e2c7fe1327f73bb21d3371aa11d",
    "type": "cartes-mentales",
    "note": "Consolidation des supports PAIE du 22/10/2026",
    "download_name": "06_Carte_mentale_PAIE.pdf"
  },
  {
    "theme": "09",
    "label": "Exercice rapide PAIE — sujet · édition 22/10/2026 · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-2026-10-22/09_debutant_rapide_sujet.pdf",
    "type": "rapide",
    "source_status": "qcm issus banque R9; écritures nouvelles contrôlées par double entrée",
    "sha256": "3fb7ca8a5a086394a7f9797c337f6086053cfecc3878b9987c7f47fb471912c7",
    "download_name": "06_PAIE_debutant_rapide_sujet.pdf"
  },
  {
    "theme": "09",
    "label": "Exercice rapide PAIE — corrigé · édition 22/10/2026 · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-2026-10-22/09_debutant_rapide_corrige.pdf",
    "type": "rapide",
    "source_status": "qcm issus banque R9; écritures nouvelles contrôlées par double entrée",
    "sha256": "6515b710ac8c2076d7ab1153b9547fb2f612b7a82641520e83c0bfb4d4832d41",
    "download_name": "06_PAIE_debutant_rapide_corrige.pdf"
  },
  {
    "theme": "09",
    "label": "Exercice rapide PAIE — sujet · édition 22/10/2026 · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-2026-10-22/09_intermediaire_rapide_sujet.pdf",
    "type": "rapide",
    "source_status": "qcm issus banque R9; écritures nouvelles contrôlées par double entrée",
    "sha256": "f8f42e03a81076e4da452e16723289bcf8be15cfcb883bcf12e1c92e7381890b",
    "download_name": "06_PAIE_intermediaire_rapide_sujet.pdf"
  },
  {
    "theme": "09",
    "label": "Exercice rapide PAIE — corrigé · édition 22/10/2026 · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-2026-10-22/09_intermediaire_rapide_corrige.pdf",
    "type": "rapide",
    "source_status": "qcm issus banque R9; écritures nouvelles contrôlées par double entrée",
    "sha256": "1387876454d14b36b43dd00945df3514a72f882a976d8843d9518c252a33fbad",
    "download_name": "06_PAIE_intermediaire_rapide_corrige.pdf"
  },
  {
    "theme": "09",
    "label": "Exercice rapide PAIE — sujet · édition 22/10/2026 · difficulté 5/5",
    "level": "expert",
    "path": "exercices-2026-10-22/09_expert_rapide_sujet.pdf",
    "type": "rapide",
    "source_status": "qcm issus banque R9; écritures nouvelles contrôlées par double entrée",
    "sha256": "d06a79f4626180ade71140ea2a075500553576ab51cbb363b091a06e7cdbaea9",
    "download_name": "06_PAIE_expert_rapide_sujet.pdf"
  },
  {
    "theme": "09",
    "label": "Exercice rapide PAIE — corrigé · édition 22/10/2026 · difficulté 5/5",
    "level": "expert",
    "path": "corriges-2026-10-22/09_expert_rapide_corrige.pdf",
    "type": "rapide",
    "source_status": "qcm issus banque R9; écritures nouvelles contrôlées par double entrée",
    "sha256": "e53d7f89ecec22eaaaa2131426c74d3fe4ede9acaf0a3b3bc1bfc26b2c03f56d",
    "download_name": "06_PAIE_expert_rapide_corrige.pdf"
  },
  {
    "theme": "09",
    "label": "Exercice complet PAIE — sujet · édition 22/10/2026 · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-2026-10-22/09_debutant_complet_sujet.pdf",
    "type": "complet",
    "source_status": "qcm issus banque R9; écritures nouvelles contrôlées par double entrée",
    "sha256": "6b2234df672e4b64c95cc23a5f17b624720bf0c67a689f2a505b1de323672feb",
    "download_name": "06_PAIE_debutant_complet_sujet.pdf"
  },
  {
    "theme": "09",
    "label": "Exercice complet PAIE — corrigé · édition 22/10/2026 · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-2026-10-22/09_debutant_complet_corrige.pdf",
    "type": "complet",
    "source_status": "qcm issus banque R9; écritures nouvelles contrôlées par double entrée",
    "sha256": "f5e54402c287d0780293b02674eb33d062ffffd2026640fb6541165c92801f83",
    "download_name": "06_PAIE_debutant_complet_corrige.pdf"
  },
  {
    "theme": "09",
    "label": "Exercice complet PAIE — sujet · édition 22/10/2026 · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-2026-10-22/09_intermediaire_complet_sujet.pdf",
    "type": "complet",
    "source_status": "qcm issus banque R9; écritures nouvelles contrôlées par double entrée",
    "sha256": "3f93e63f3eab38c6a64b6fb81d39b5b524c9bd4ebea2ff8f9a72b9787554fdf6",
    "download_name": "06_PAIE_intermediaire_complet_sujet.pdf"
  },
  {
    "theme": "09",
    "label": "Exercice complet PAIE — corrigé · édition 22/10/2026 · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-2026-10-22/09_intermediaire_complet_corrige.pdf",
    "type": "complet",
    "source_status": "qcm issus banque R9; écritures nouvelles contrôlées par double entrée",
    "sha256": "52ac901bb2ddfa264f27da1a9b6e04c4a48e8eb39774874aeb3986419abdf2a0",
    "download_name": "06_PAIE_intermediaire_complet_corrige.pdf"
  },
  {
    "theme": "09",
    "label": "Exercice complet PAIE — sujet · édition 22/10/2026 · difficulté 5/5",
    "level": "expert",
    "path": "exercices-2026-10-22/09_expert_complet_sujet.pdf",
    "type": "complet",
    "source_status": "qcm issus banque R9; écritures nouvelles contrôlées par double entrée",
    "sha256": "a8c701d9b830050d4cdd204d7c3fe3da73813f62949b296a833c182ab604838f",
    "download_name": "06_PAIE_expert_complet_sujet.pdf"
  },
  {
    "theme": "09",
    "label": "Exercice complet PAIE — corrigé · édition 22/10/2026 · difficulté 5/5",
    "level": "expert",
    "path": "corriges-2026-10-22/09_expert_complet_corrige.pdf",
    "type": "complet",
    "source_status": "qcm issus banque R9; écritures nouvelles contrôlées par double entrée",
    "sha256": "04a9f793927086e34c27d914a3c60950032e15f7bc1ab1b9192cd0e94d6ec2f7",
    "download_name": "06_PAIE_expert_complet_corrige.pdf"
  },
  {
    "theme": "12",
    "label": "Cours complet • étape 07/14 · 28 pages",
    "level": "tous",
    "path": "cours-complets/12_COURS_FISCALITE_IS_2026.pdf",
    "sha256": "e13f68c278670a1d250e8677469362007926e299d1044f682bade8aa641af141",
    "download_name": "07_Cours_Fiscalite_des_entreprises_et_IS.pdf"
  },
  {
    "theme": "12",
    "label": "Mémo · 12 pages",
    "level": "tous",
    "path": "memos/12 - Fiscalite et IS.pdf",
    "sha256": "f1369f42aedc31ecde24a5064a66bb07d230ca87297ecabf5deb73df5ec318ca",
    "download_name": "07_Memo_Fiscalite_des_entreprises_et_IS.pdf"
  },
  {
    "theme": "12",
    "label": "Carte mentale · 6 pages",
    "level": "tous",
    "path": "cartes-mentales/12 - Fiscalite et IS.pdf",
    "sha256": "be61da88b685940d70a57acdd560eded11e573a51cab4cbd5e1cca169d05c5ca",
    "download_name": "07_Carte_mentale_Fiscalite_des_entreprises_et_IS.pdf"
  },
  {
    "theme": "12",
    "label": "Exercice rapide · sujet · 10 exercices · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-2026-10-27/12_debutant_rapide_sujet.pdf",
    "type": "rapide",
    "sha256": "80e78748a84f8792a1e254a4d4317de0828b630bdca89ff1302c7402c5ec57de",
    "download_name": "07_Fiscalite_des_entreprises_et_IS_debutant_rapide_sujet.pdf"
  },
  {
    "theme": "12",
    "label": "Exercice rapide · corrigé · 10 exercices · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-2026-10-27/12_debutant_rapide_corrige.pdf",
    "type": "rapide",
    "sha256": "c90a97528050257f960b125970da1a372805bc25a9fb5e6d9a8965ec22ac8048",
    "download_name": "07_Fiscalite_des_entreprises_et_IS_debutant_rapide_corrige.pdf"
  },
  {
    "theme": "12",
    "label": "Exercice complet · sujet · 10 exercices · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-2026-10-27/12_debutant_complet_sujet.pdf",
    "type": "complet",
    "sha256": "9731008a71466757ad9b19bc34c681ca693e735644c6821df4c16b60d24a2204",
    "download_name": "07_Fiscalite_des_entreprises_et_IS_debutant_complet_sujet.pdf"
  },
  {
    "theme": "12",
    "label": "Exercice complet · corrigé · 10 exercices · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-2026-10-27/12_debutant_complet_corrige.pdf",
    "type": "complet",
    "sha256": "c4be9261f24bab03f4233afb37d16a72665e337aa3b9a696ca8277f5b8229e0b",
    "download_name": "07_Fiscalite_des_entreprises_et_IS_debutant_complet_corrige.pdf"
  },
  {
    "theme": "12",
    "label": "Exercice rapide · sujet · 10 exercices · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-2026-10-27/12_intermediaire_rapide_sujet.pdf",
    "type": "rapide",
    "sha256": "7699ad58c11655ee677b833f1922d61c5fc67ced00aaeab28a61849717a340fb",
    "download_name": "07_Fiscalite_des_entreprises_et_IS_intermediaire_rapide_sujet.pdf"
  },
  {
    "theme": "12",
    "label": "Exercice rapide · corrigé · 10 exercices · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-2026-10-27/12_intermediaire_rapide_corrige.pdf",
    "type": "rapide",
    "sha256": "ecd24f76caab7e6d79e7fd52b5172003556ccab658bf27d0f26cc3e6ae80032e",
    "download_name": "07_Fiscalite_des_entreprises_et_IS_intermediaire_rapide_corrige.pdf"
  },
  {
    "theme": "12",
    "label": "Exercice complet · sujet · 10 exercices · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-2026-10-27/12_intermediaire_complet_sujet.pdf",
    "type": "complet",
    "sha256": "c01f16698a1936a3c17ffcd82e0e3481a64f2f2f53e441cec599c7b17e52b073",
    "download_name": "07_Fiscalite_des_entreprises_et_IS_intermediaire_complet_sujet.pdf"
  },
  {
    "theme": "12",
    "label": "Exercice complet · corrigé · 10 exercices · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-2026-10-27/12_intermediaire_complet_corrige.pdf",
    "type": "complet",
    "sha256": "1aa824cfd95d104d8bba8440c8aa7c26a5394e99211a2f9a63c5f1b06ee242fb",
    "download_name": "07_Fiscalite_des_entreprises_et_IS_intermediaire_complet_corrige.pdf"
  },
  {
    "theme": "12",
    "label": "Exercice rapide · sujet · 10 exercices · difficulté 5/5",
    "level": "expert",
    "path": "exercices-2026-10-27/12_expert_rapide_sujet.pdf",
    "type": "rapide",
    "sha256": "bbddbc196931a01507ceebb4f617e3ac64bdc3f8e88880ebf1ac8fe0868586da",
    "download_name": "07_Fiscalite_des_entreprises_et_IS_expert_rapide_sujet.pdf"
  },
  {
    "theme": "12",
    "label": "Exercice rapide · corrigé · 10 exercices · difficulté 5/5",
    "level": "expert",
    "path": "corriges-2026-10-27/12_expert_rapide_corrige.pdf",
    "type": "rapide",
    "sha256": "3a5c5afe63d87401248649123a65ca7441b35e8987fd2b3acf3a5bec3a6f9aed",
    "download_name": "07_Fiscalite_des_entreprises_et_IS_expert_rapide_corrige.pdf"
  },
  {
    "theme": "12",
    "label": "Exercice complet · sujet · 10 exercices · difficulté 5/5",
    "level": "expert",
    "path": "exercices-2026-10-27/12_expert_complet_sujet.pdf",
    "type": "complet",
    "sha256": "b0eee0efc6703553e0a036bd19842f52b2fd972b882ff7769d5b54810c64550d",
    "download_name": "07_Fiscalite_des_entreprises_et_IS_expert_complet_sujet.pdf"
  },
  {
    "theme": "12",
    "label": "Exercice complet · corrigé · 10 exercices · difficulté 5/5",
    "level": "expert",
    "path": "corriges-2026-10-27/12_expert_complet_corrige.pdf",
    "type": "complet",
    "sha256": "5d9adc24423b4781365ac14bf0fab0bf81616e9a053ebae3f0779dc798a4ba00",
    "download_name": "07_Fiscalite_des_entreprises_et_IS_expert_complet_corrige.pdf"
  },
  {
    "theme": "11",
    "label": "Cours complet • étape 08/14 · 28 pages",
    "level": "tous",
    "path": "cours-complets/11_COURS_CLOTURE_INVENTAIRE_2026.pdf",
    "sha256": "bb7d6ae33070a430b4bcdd2670e9c9af97dd2f6137396bb75d485028fd1086cf",
    "download_name": "08_Cours_Cloture_et_travaux_dinventaire.pdf"
  },
  {
    "theme": "11",
    "label": "Mémo · 12 pages",
    "level": "tous",
    "path": "memos/11 - Cloture et inventaire.pdf",
    "sha256": "d0bdf827e57f1e34bd2aa1ed9925f0241005fd359dff16f724a9cdef4b2b4193",
    "download_name": "08_Memo_Cloture_et_travaux_dinventaire.pdf"
  },
  {
    "theme": "11",
    "label": "Carte mentale · 6 pages",
    "level": "tous",
    "path": "cartes-mentales/11 - Cloture et inventaire.pdf",
    "sha256": "1f577b43671a0b7577644774aac3701fa60c0da2204add162f9b4bef834e63f9",
    "download_name": "08_Carte_mentale_Cloture_et_travaux_dinventaire.pdf"
  },
  {
    "theme": "11",
    "label": "Exercice rapide · sujet · 10 exercices · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-2026-10-27/11_debutant_rapide_sujet.pdf",
    "type": "rapide",
    "sha256": "2ca932c3bf35baae297b483e274af9d5b73f2f405c94602361899d69dfff86d4",
    "download_name": "08_Cloture_et_travaux_dinventaire_debutant_rapide_sujet.pdf"
  },
  {
    "theme": "11",
    "label": "Exercice rapide · corrigé · 10 exercices · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-2026-10-27/11_debutant_rapide_corrige.pdf",
    "type": "rapide",
    "sha256": "be17c18da310a8fe20cb3c0979ea051752fd9490d67ae2c2995937dd1a73dbc1",
    "download_name": "08_Cloture_et_travaux_dinventaire_debutant_rapide_corrige.pdf"
  },
  {
    "theme": "11",
    "label": "Exercice complet · sujet · 10 exercices · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-2026-10-27/11_debutant_complet_sujet.pdf",
    "type": "complet",
    "sha256": "6f2bae66cd5e4810cba179bb11221b925d0e83b2cbcc34922f210839eb14a474",
    "download_name": "08_Cloture_et_travaux_dinventaire_debutant_complet_sujet.pdf"
  },
  {
    "theme": "11",
    "label": "Exercice complet · corrigé · 10 exercices · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-2026-10-27/11_debutant_complet_corrige.pdf",
    "type": "complet",
    "sha256": "e2a8fd807936ce8e369ce0fed0f34cbc798fc9205669f0f8c3ff8859bacd3694",
    "download_name": "08_Cloture_et_travaux_dinventaire_debutant_complet_corrige.pdf"
  },
  {
    "theme": "11",
    "label": "Exercice rapide · sujet · 10 exercices · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-2026-10-27/11_intermediaire_rapide_sujet.pdf",
    "type": "rapide",
    "sha256": "5037255081f10e05c67e5cb5c54dccd1b0c8252f5f5537e08eeec2fd90a2288f",
    "download_name": "08_Cloture_et_travaux_dinventaire_intermediaire_rapide_sujet.pdf"
  },
  {
    "theme": "11",
    "label": "Exercice rapide · corrigé · 10 exercices · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-2026-10-27/11_intermediaire_rapide_corrige.pdf",
    "type": "rapide",
    "sha256": "f57f43c1d6174113e400f770fe907a5c7a5bb854b45bbbe944e6754290a00b4e",
    "download_name": "08_Cloture_et_travaux_dinventaire_intermediaire_rapide_corrige.pdf"
  },
  {
    "theme": "11",
    "label": "Exercice complet · sujet · 10 exercices · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-2026-10-27/11_intermediaire_complet_sujet.pdf",
    "type": "complet",
    "sha256": "743822bfc044f45253b162896dded580dc582db4c322b42d439a1cab3fac3f50",
    "download_name": "08_Cloture_et_travaux_dinventaire_intermediaire_complet_sujet.pdf"
  },
  {
    "theme": "11",
    "label": "Exercice complet · corrigé · 10 exercices · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-2026-10-27/11_intermediaire_complet_corrige.pdf",
    "type": "complet",
    "sha256": "f54985e0f65bb4bf0c873b4538935dfd32d1c64819db327f6d8278132e6e2f61",
    "download_name": "08_Cloture_et_travaux_dinventaire_intermediaire_complet_corrige.pdf"
  },
  {
    "theme": "11",
    "label": "Exercice rapide · sujet · 10 exercices · difficulté 5/5",
    "level": "expert",
    "path": "exercices-2026-10-27/11_expert_rapide_sujet.pdf",
    "type": "rapide",
    "sha256": "1ca8f5ef70f190c02ed6e92e474ec812db7b27b42403f46404d07946f0fff46f",
    "download_name": "08_Cloture_et_travaux_dinventaire_expert_rapide_sujet.pdf"
  },
  {
    "theme": "11",
    "label": "Exercice rapide · corrigé · 10 exercices · difficulté 5/5",
    "level": "expert",
    "path": "corriges-2026-10-27/11_expert_rapide_corrige.pdf",
    "type": "rapide",
    "sha256": "557db20135386eceb02b3e09e7d5c1c22ecbc74e1d03dd51bdda04071686f964",
    "download_name": "08_Cloture_et_travaux_dinventaire_expert_rapide_corrige.pdf"
  },
  {
    "theme": "11",
    "label": "Exercice complet · sujet · 10 exercices · difficulté 5/5",
    "level": "expert",
    "path": "exercices-2026-10-27/11_expert_complet_sujet.pdf",
    "type": "complet",
    "sha256": "1fbe15eda3e836c390f9e6c7d64ceea806cbdd494e19e28fe8a56bf31ea4102b",
    "download_name": "08_Cloture_et_travaux_dinventaire_expert_complet_sujet.pdf"
  },
  {
    "theme": "11",
    "label": "Exercice complet · corrigé · 10 exercices · difficulté 5/5",
    "level": "expert",
    "path": "corriges-2026-10-27/11_expert_complet_corrige.pdf",
    "type": "complet",
    "sha256": "e22b45f32f50a2ef1f12e12de3d2d408eb49fcff8236831aed76d6529c0ae987",
    "download_name": "08_Cloture_et_travaux_dinventaire_expert_complet_corrige.pdf"
  },
  {
    "theme": "05",
    "label": "Cours complet • étape 09/14 · 54 pages",
    "level": "tous",
    "path": "cours-complets/07_COURS_LETTRAGE_RAPPROCHEMENT_2026.pdf",
    "sha256": "55e40fc80298c2f2d3ef5f1211afe941c3b8dd0208b850ff64ed549134614d35",
    "download_name": "09_Cours_Lettrage_et_rapprochement_bancaire.pdf"
  },
  {
    "theme": "05",
    "label": "Mémo · 21 pages",
    "level": "tous",
    "path": "memos/05 - Lettrage et rapprochement bancaire.pdf",
    "sha256": "4847447cf16db3615b5f9a534f3057b1d35d69676be6ec6548f8ceecd4a84c03",
    "download_name": "09_Memo_Lettrage_et_rapprochement_bancaire.pdf"
  },
  {
    "theme": "05",
    "label": "Carte mentale · 12 pages",
    "level": "tous",
    "path": "cartes-mentales/05 - Lettrage et rapprochement bancaire.pdf",
    "sha256": "280dc67f42cf8deb8de0b48e2a2a3ded71248975545dc70ec7ce1df8dc1f3fc8",
    "download_name": "09_Carte_mentale_Lettrage_et_rapprochement_bancaire.pdf"
  },
  {
    "theme": "05",
    "label": "EXO rapide (édition 21/10/2026) · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-2026-10-21/05_debutant_rapide_sujet.pdf",
    "sha256": "6ceadf8e9f24347fc4c3ae8c87807f34df36349a3e828a7d9c52ebdfa883a227",
    "download_name": "09_Lettrage_et_rapprochement_bancaire_debutant_rapide_sujet.pdf"
  },
  {
    "theme": "05",
    "label": "EXO rapide (édition 21/10/2026) · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-2026-10-21/05_debutant_rapide_corrige.pdf",
    "sha256": "a3d9a4472b1224716f3a4ecfdb31b939b734c3089c855a9891fc44ba16ee0666",
    "download_name": "09_Lettrage_et_rapprochement_bancaire_debutant_rapide_corrige.pdf"
  },
  {
    "theme": "05",
    "label": "EXO rapide (édition 21/10/2026) · sujet · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-2026-10-21/05_intermediaire_rapide_sujet.pdf",
    "sha256": "cb25221762bde309f5f46ad0338a1cc8d1159e6127ca7013e8cff6f36d699dfb",
    "download_name": "09_Lettrage_et_rapprochement_bancaire_intermediaire_rapide_sujet.pdf"
  },
  {
    "theme": "05",
    "label": "EXO rapide (édition 21/10/2026) · corrigé · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-2026-10-21/05_intermediaire_rapide_corrige.pdf",
    "sha256": "b8ef0835fd346593b2ef5a128038d4f1152f039b3f25758e6cb593c0cf933492",
    "download_name": "09_Lettrage_et_rapprochement_bancaire_intermediaire_rapide_corrige.pdf"
  },
  {
    "theme": "05",
    "label": "EXO rapide (édition 21/10/2026) · sujet · difficulté 5/5",
    "level": "expert",
    "path": "exercices-2026-10-21/05_expert_rapide_sujet.pdf",
    "sha256": "a00fac29cb43d5cc950f3bab9c8c561b33c74d5ce7a408b3fa83f2699f3999ed",
    "download_name": "09_Lettrage_et_rapprochement_bancaire_expert_rapide_sujet.pdf"
  },
  {
    "theme": "05",
    "label": "EXO rapide (édition 21/10/2026) · corrigé · difficulté 5/5",
    "level": "expert",
    "path": "corriges-2026-10-21/05_expert_rapide_corrige.pdf",
    "sha256": "c128523b9987e90f6e0335cd3863f3b8a22dce2e3994eeb78f897a9d82f0f91f",
    "download_name": "09_Lettrage_et_rapprochement_bancaire_expert_rapide_corrige.pdf"
  },
  {
    "theme": "05",
    "label": "EXO complet (édition 21/10/2026) · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-2026-10-21/05_debutant_complet_sujet.pdf",
    "sha256": "162abbb55c7efdf4fcc30bf40b4611855047239cb56c2e95add27864b8c08969",
    "download_name": "09_Lettrage_et_rapprochement_bancaire_debutant_complet_sujet.pdf"
  },
  {
    "theme": "05",
    "label": "EXO complet · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-complets/05_debutant_exercices_complets.pdf",
    "sha256": "9f60c331f6ad3e35d620d7a95bbc1b2ab73a8f1bd35dd5d5aa1faeb4ba5bf299",
    "download_name": "09_Lettrage_et_rapprochement_bancaire_debutant_exercices_complets.pdf"
  },
  {
    "theme": "05",
    "label": "EXO complet complémentaire · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-valides/05_complet_debutant.pdf",
    "sha256": "95bdd09d2a33cf8c1433bcef999f0a229bc3c0e1edbc375e0d007c96f0a8aa06",
    "download_name": "09_Lettrage_et_rapprochement_bancaire_complet_debutant.pdf"
  },
  {
    "theme": "05",
    "label": "EXO complet (édition 21/10/2026) · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-2026-10-21/05_debutant_complet_corrige.pdf",
    "sha256": "602a19ed407d4f1115f94b47f54cf5dee98d9afb9f4631e440fecb8024308364",
    "download_name": "09_Lettrage_et_rapprochement_bancaire_debutant_complet_corrige.pdf"
  },
  {
    "theme": "05",
    "label": "EXO complet · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-complets/05_debutant_corrige_complet.pdf",
    "sha256": "8735e0d1cc57bb57a5b523907cefb8ab7bed7d4b604d8e1fe5eb84d3bc94bcbe",
    "download_name": "09_Lettrage_et_rapprochement_bancaire_debutant_corrige_complet.pdf"
  },
  {
    "theme": "05",
    "label": "EXO complet complémentaire · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-valides/05_complet_debutant.pdf",
    "sha256": "8fd2ac5f427dd3e7cdfdf79b875700d7e386fcf7386f4b40fa5cce17ecd9deae",
    "download_name": "09_Lettrage_et_rapprochement_bancaire_complet_debutant.pdf"
  },
  {
    "theme": "05",
    "label": "EXO complet (édition 21/10/2026) · sujet · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-2026-10-21/05_intermediaire_complet_sujet.pdf",
    "sha256": "785b4380bdaca201014a16e7a47f1fa67002b489a79e21b24f7c168d015da102",
    "download_name": "09_Lettrage_et_rapprochement_bancaire_intermediaire_complet_sujet.pdf"
  },
  {
    "theme": "05",
    "label": "EXO complet · sujet · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-complets/05_intermediaire_exercices_complets.pdf",
    "sha256": "68422f5974a989dd94632c32408f51fd3b82a2ed48ed06202adc4e36a8518356",
    "download_name": "09_Lettrage_et_rapprochement_bancaire_intermediaire_exercices_complets.pdf"
  },
  {
    "theme": "05",
    "label": "EXO complet (édition 21/10/2026) · corrigé · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-2026-10-21/05_intermediaire_complet_corrige.pdf",
    "sha256": "25ba68ded8be8208e21a9a66a0f989b7c9dd9de486bc936d09e6593588e767f2",
    "download_name": "09_Lettrage_et_rapprochement_bancaire_intermediaire_complet_corrige.pdf"
  },
  {
    "theme": "05",
    "label": "EXO complet · corrigé · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-complets/05_intermediaire_corrige_complet.pdf",
    "sha256": "d4ad036e7a9640808830e2c57b337f4a4bcfa4f8d13794c6f2d1fcd3150d0afe",
    "download_name": "09_Lettrage_et_rapprochement_bancaire_intermediaire_corrige_complet.pdf"
  },
  {
    "theme": "05",
    "label": "EXO complet (édition 21/10/2026) · sujet · difficulté 5/5",
    "level": "expert",
    "path": "exercices-2026-10-21/05_expert_complet_sujet.pdf",
    "sha256": "8e96db1f31c7148b02d0ab9c6a61bf19911e4bf1e68971c9fd255ef773323de9",
    "download_name": "09_Lettrage_et_rapprochement_bancaire_expert_complet_sujet.pdf"
  },
  {
    "theme": "05",
    "label": "EXO complet · sujet · difficulté 5/5",
    "level": "expert",
    "path": "exercices-complets/05_expert_exercices_complets.pdf",
    "sha256": "5e755190ce6ff25762422df107f862cce616b198e8e97f34b9f8bc2f5c48be4c",
    "download_name": "09_Lettrage_et_rapprochement_bancaire_expert_exercices_complets.pdf"
  },
  {
    "theme": "05",
    "label": "EXO complet (édition 21/10/2026) · corrigé · difficulté 5/5",
    "level": "expert",
    "path": "corriges-2026-10-21/05_expert_complet_corrige.pdf",
    "sha256": "d0c4d891dbc3f48a507944fc9369841c1f6bb9b1b56729b78a1b63e9252b1401",
    "download_name": "09_Lettrage_et_rapprochement_bancaire_expert_complet_corrige.pdf"
  },
  {
    "theme": "05",
    "label": "EXO complet · corrigé · difficulté 5/5",
    "level": "expert",
    "path": "corriges-complets/05_expert_corrige_complet.pdf",
    "sha256": "703555fca679bb2cff6ce4340360067fe862ffbc90f8c4da2930f340735fc7d6",
    "download_name": "09_Lettrage_et_rapprochement_bancaire_expert_corrige_complet.pdf"
  },
  {
    "theme": "06",
    "label": "Cours complet • étape 10/14 · 54 pages",
    "level": "tous",
    "path": "cours-complets/08_COURS_COMPTE_DE_RESULTAT_2026.pdf",
    "sha256": "39e2f0408f80910dab2d7891eba8317a96e9aadf5592d17ffa9f1a3c4761077b",
    "download_name": "10_Cours_Compte_de_resultat.pdf"
  },
  {
    "theme": "06",
    "label": "Mémo · 22 pages",
    "level": "tous",
    "path": "memos/06 - Compte de résultat.pdf",
    "sha256": "12e16f7255bd051aec6dde5f2455771f33e8a9d3e3c729d237db008e5fcf9630",
    "download_name": "10_Memo_Compte_de_resultat.pdf"
  },
  {
    "theme": "06",
    "label": "Carte mentale · 12 pages",
    "level": "tous",
    "path": "cartes-mentales/06 - Compte de résultat.pdf",
    "sha256": "950ae0d097bbf936e946f470593e2c99e5cff047f9905fd4ce1657c1488bd485",
    "download_name": "10_Carte_mentale_Compte_de_resultat.pdf"
  },
  {
    "theme": "06",
    "label": "EXO rapide (édition 21/10/2026) · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-2026-10-21/06_debutant_rapide_sujet.pdf",
    "sha256": "7ca29c5bd4c437fd6d605c22d2443be54ff1a4bfe6131cfa07c692b4576d23c1",
    "download_name": "10_Compte_de_resultat_debutant_rapide_sujet.pdf"
  },
  {
    "theme": "06",
    "label": "EXO rapide (édition 21/10/2026) · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-2026-10-21/06_debutant_rapide_corrige.pdf",
    "sha256": "c6ce0c92c154f23a1ea6706fc589ebe74be590d63aa3b34aa4de323d223a138f",
    "download_name": "10_Compte_de_resultat_debutant_rapide_corrige.pdf"
  },
  {
    "theme": "06",
    "label": "EXO rapide (édition 21/10/2026) · sujet · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-2026-10-21/06_intermediaire_rapide_sujet.pdf",
    "sha256": "b5592b3699a284923dc8c466547b1789a63d823d93ed0a10d38c0ff385886c74",
    "download_name": "10_Compte_de_resultat_intermediaire_rapide_sujet.pdf"
  },
  {
    "theme": "06",
    "label": "EXO rapide (édition 21/10/2026) · corrigé · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-2026-10-21/06_intermediaire_rapide_corrige.pdf",
    "sha256": "c3eadf04527a75d9babe30eded9141c6f1ec0a009bc063ba2e5f3afd09654534",
    "download_name": "10_Compte_de_resultat_intermediaire_rapide_corrige.pdf"
  },
  {
    "theme": "06",
    "label": "EXO rapide (édition 21/10/2026) · sujet · difficulté 5/5",
    "level": "expert",
    "path": "exercices-2026-10-21/06_expert_rapide_sujet.pdf",
    "sha256": "9adf4876c7c2794022981392456774fa425722ff28061daa59b5f29541629b4a",
    "download_name": "10_Compte_de_resultat_expert_rapide_sujet.pdf"
  },
  {
    "theme": "06",
    "label": "EXO rapide (édition 21/10/2026) · corrigé · difficulté 5/5",
    "level": "expert",
    "path": "corriges-2026-10-21/06_expert_rapide_corrige.pdf",
    "sha256": "14120161b649ac3f910c3bae8336c79e55285befc510111c1eb94cfec4fb0d59",
    "download_name": "10_Compte_de_resultat_expert_rapide_corrige.pdf"
  },
  {
    "theme": "06",
    "label": "EXO complet (édition 21/10/2026) · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-2026-10-21/06_debutant_complet_sujet.pdf",
    "sha256": "7d4ae08f17b1356e641ffba5fd622195053283bd4fc493a7223c2d07e5ec3272",
    "download_name": "10_Compte_de_resultat_debutant_complet_sujet.pdf"
  },
  {
    "theme": "06",
    "label": "EXO complet · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-complets/06_debutant_exercices_complets.pdf",
    "sha256": "629037dc15b6b69a9e869cc030bf524819ca2e9bb3f3ef0733ce01ab827c0806",
    "download_name": "10_Compte_de_resultat_debutant_exercices_complets.pdf"
  },
  {
    "theme": "06",
    "label": "EXO complet complémentaire · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-valides/06_complet_debutant.pdf",
    "sha256": "8f0a665a7571ae31b32d6f68d1e16a36532bfb18aa0364e3f457bc43dffc270f",
    "download_name": "10_Compte_de_resultat_complet_debutant.pdf"
  },
  {
    "theme": "06",
    "label": "EXO complet (édition 21/10/2026) · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-2026-10-21/06_debutant_complet_corrige.pdf",
    "sha256": "60f1a414de2f946e8c24b5a3bdf8ef527a0cd4644a0dcb5b025fb850ba3056a0",
    "download_name": "10_Compte_de_resultat_debutant_complet_corrige.pdf"
  },
  {
    "theme": "06",
    "label": "EXO complet · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-complets/06_debutant_corrige_complet.pdf",
    "sha256": "e219ff45b993d66ff4fe307693dfd31b985526f441060664c3aaff46c16cabd3",
    "download_name": "10_Compte_de_resultat_debutant_corrige_complet.pdf"
  },
  {
    "theme": "06",
    "label": "EXO complet complémentaire · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-valides/06_complet_debutant.pdf",
    "sha256": "07fc1d69f4dd884a00c67639f0c2c18cec14527b80ec54213b5a437e2bd52d82",
    "download_name": "10_Compte_de_resultat_complet_debutant.pdf"
  },
  {
    "theme": "06",
    "label": "EXO complet (édition 21/10/2026) · sujet · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-2026-10-21/06_intermediaire_complet_sujet.pdf",
    "sha256": "36b5df34bf99a183e8e386c9f39ab9190204435edfb768e320127e03511adfec",
    "download_name": "10_Compte_de_resultat_intermediaire_complet_sujet.pdf"
  },
  {
    "theme": "06",
    "label": "EXO complet · sujet · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-complets/06_intermediaire_exercices_complets.pdf",
    "sha256": "25861f1404bb5ed8837ad4a61cb178a1e81e19f4e316d36a4c49e325cedf571a",
    "download_name": "10_Compte_de_resultat_intermediaire_exercices_complets.pdf"
  },
  {
    "theme": "06",
    "label": "EXO complet (édition 21/10/2026) · corrigé · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-2026-10-21/06_intermediaire_complet_corrige.pdf",
    "sha256": "272eb7a3d56085534f57b8e22d84277b42cf1c870fa2282d15b64a83a1053f02",
    "download_name": "10_Compte_de_resultat_intermediaire_complet_corrige.pdf"
  },
  {
    "theme": "06",
    "label": "EXO complet · corrigé · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-complets/06_intermediaire_corrige_complet.pdf",
    "sha256": "b05fdb427a8a879e63abe5a83281b7ea405109a967b68a8e57df79e7348e0047",
    "download_name": "10_Compte_de_resultat_intermediaire_corrige_complet.pdf"
  },
  {
    "theme": "06",
    "label": "EXO complet (édition 21/10/2026) · sujet · difficulté 5/5",
    "level": "expert",
    "path": "exercices-2026-10-21/06_expert_complet_sujet.pdf",
    "sha256": "fd6c88d13ada32d14b3c6376c7297ed3a9747103b5a802dc5317e34d2fa68d42",
    "download_name": "10_Compte_de_resultat_expert_complet_sujet.pdf"
  },
  {
    "theme": "06",
    "label": "EXO complet · sujet · difficulté 5/5",
    "level": "expert",
    "path": "exercices-complets/06_expert_exercices_complets.pdf",
    "sha256": "353685b6c5cfb69d4d6752838ebdcaf41ae33a6674376e19c81d91fc21b2d321",
    "download_name": "10_Compte_de_resultat_expert_exercices_complets.pdf"
  },
  {
    "theme": "06",
    "label": "EXO complet (édition 21/10/2026) · corrigé · difficulté 5/5",
    "level": "expert",
    "path": "corriges-2026-10-21/06_expert_complet_corrige.pdf",
    "sha256": "c0f31a48b31207d08c87970fbe0484f590ea1ee2906b128c9dce06985ec50eb5",
    "download_name": "10_Compte_de_resultat_expert_complet_corrige.pdf"
  },
  {
    "theme": "06",
    "label": "EXO complet · corrigé · difficulté 5/5",
    "level": "expert",
    "path": "corriges-complets/06_expert_corrige_complet.pdf",
    "sha256": "76319f09bf0bb72d7f4aff9f369dc536d924cdf26d21663b935ad196914fb024",
    "download_name": "10_Compte_de_resultat_expert_corrige_complet.pdf"
  },
  {
    "theme": "07",
    "label": "Cours complet • étape 11/14 · 53 pages",
    "level": "tous",
    "path": "cours-complets/09_COURS_BILAN_ACTIF_PASSIF_2026.pdf",
    "sha256": "48fed0db2907d4f92892a16e644cfc36ebdf5bf694065b675b649beb0288af02",
    "download_name": "11_Cours_Bilan_actif_et_passif.pdf"
  },
  {
    "theme": "07",
    "label": "Mémo · 21 pages",
    "level": "tous",
    "path": "memos/07 - Bilan actif et passif.pdf",
    "sha256": "598d547e88b37bcb6daac7942b6c01a5aca0a7465c5673379eaeb2b9546e9036",
    "download_name": "11_Memo_Bilan_actif_et_passif.pdf"
  },
  {
    "theme": "07",
    "label": "Carte mentale · 12 pages",
    "level": "tous",
    "path": "cartes-mentales/07 - Bilan actif et passif.pdf",
    "sha256": "2fe490082977ec9e5ca6385111a3bb87ab6614126a4ed205ff56b55331f362d4",
    "download_name": "11_Carte_mentale_Bilan_actif_et_passif.pdf"
  },
  {
    "theme": "07",
    "label": "EXO rapide (édition 21/10/2026) · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-2026-10-21/07_debutant_rapide_sujet.pdf",
    "sha256": "b33218025a99eb28da24cabdc21e5b8ea9075bc052d3f86daf52869b1d8a0938",
    "download_name": "11_Bilan_actif_et_passif_debutant_rapide_sujet.pdf"
  },
  {
    "theme": "07",
    "label": "EXO rapide (édition 21/10/2026) · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-2026-10-21/07_debutant_rapide_corrige.pdf",
    "sha256": "a905347bfa7e766f06ecfd50067ebd1c2862c337e1d963784dbcccc24e3d31be",
    "download_name": "11_Bilan_actif_et_passif_debutant_rapide_corrige.pdf"
  },
  {
    "theme": "07",
    "label": "EXO rapide (édition 21/10/2026) · sujet · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-2026-10-21/07_intermediaire_rapide_sujet.pdf",
    "sha256": "7b86f9ba9ec689881bece3a465376ed65de96a7c34ee74b1f0ffae21f5e9af49",
    "download_name": "11_Bilan_actif_et_passif_intermediaire_rapide_sujet.pdf"
  },
  {
    "theme": "07",
    "label": "EXO rapide (édition 21/10/2026) · corrigé · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-2026-10-21/07_intermediaire_rapide_corrige.pdf",
    "sha256": "1e6d99c7e43ac373f1315e5caa00b75eb4d372c61e96c88ab5bb3dc4d882ed50",
    "download_name": "11_Bilan_actif_et_passif_intermediaire_rapide_corrige.pdf"
  },
  {
    "theme": "07",
    "label": "EXO rapide (édition 21/10/2026) · sujet · difficulté 5/5",
    "level": "expert",
    "path": "exercices-2026-10-21/07_expert_rapide_sujet.pdf",
    "sha256": "d6c57b2a21c9d6005e45da16b9be4649496199843dbffe3b000ed51073a05d5b",
    "download_name": "11_Bilan_actif_et_passif_expert_rapide_sujet.pdf"
  },
  {
    "theme": "07",
    "label": "EXO rapide (édition 21/10/2026) · corrigé · difficulté 5/5",
    "level": "expert",
    "path": "corriges-2026-10-21/07_expert_rapide_corrige.pdf",
    "sha256": "2e0de5e4ec7e9d85c7fb43ff79f5f8dbdbfa82d8fa7645bbb5dc2099c5918fba",
    "download_name": "11_Bilan_actif_et_passif_expert_rapide_corrige.pdf"
  },
  {
    "theme": "07",
    "label": "EXO complet (édition 21/10/2026) · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-2026-10-21/07_debutant_complet_sujet.pdf",
    "sha256": "3bb51dc6342cb4831c258e05f04d5ae23d0f2811d642a2dc91d88b3fef4983b9",
    "download_name": "11_Bilan_actif_et_passif_debutant_complet_sujet.pdf"
  },
  {
    "theme": "07",
    "label": "EXO complet · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-complets/07_debutant_exercices_complets.pdf",
    "sha256": "e901e37afb3491c5a844d8a8a8f60da9a3cf2896a77dcf1ca53016e7c6817b35",
    "download_name": "11_Bilan_actif_et_passif_debutant_exercices_complets.pdf"
  },
  {
    "theme": "07",
    "label": "EXO complet complémentaire · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-valides/07_complet_debutant.pdf",
    "sha256": "50968cdc643b08e08a0b42338b1cb0edb3054f5ba3cd966eea584bb27567acc3",
    "download_name": "11_Bilan_actif_et_passif_complet_debutant.pdf"
  },
  {
    "theme": "07",
    "label": "EXO complet (édition 21/10/2026) · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-2026-10-21/07_debutant_complet_corrige.pdf",
    "sha256": "8b4969082bacc71d8013f20c3ef29855ddf2298185197ca9ba9f1a76a8d2f973",
    "download_name": "11_Bilan_actif_et_passif_debutant_complet_corrige.pdf"
  },
  {
    "theme": "07",
    "label": "EXO complet · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-complets/07_debutant_corrige_complet.pdf",
    "sha256": "6702d3f77c13ac7b50ed5457e1fc74c50a2219237d2634bf9cbf0f256ce2f097",
    "download_name": "11_Bilan_actif_et_passif_debutant_corrige_complet.pdf"
  },
  {
    "theme": "07",
    "label": "EXO complet complémentaire · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-valides/07_complet_debutant.pdf",
    "sha256": "7fdb1347f6f786d488897aa15c92e4b6cff3a8944174d0dec468e53f3821099f",
    "download_name": "11_Bilan_actif_et_passif_complet_debutant.pdf"
  },
  {
    "theme": "07",
    "label": "EXO complet (édition 21/10/2026) · sujet · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-2026-10-21/07_intermediaire_complet_sujet.pdf",
    "sha256": "2bccc8966e07c1dcab1ed19c8c33ca46db14e38cf712b46c332e383e5e3d0b45",
    "download_name": "11_Bilan_actif_et_passif_intermediaire_complet_sujet.pdf"
  },
  {
    "theme": "07",
    "label": "EXO complet · sujet · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-complets/07_intermediaire_exercices_complets.pdf",
    "sha256": "e1513d90eefe718daf345b5363378c37b23b76c01c7c5a29da71143c31cf1f1c",
    "download_name": "11_Bilan_actif_et_passif_intermediaire_exercices_complets.pdf"
  },
  {
    "theme": "07",
    "label": "EXO complet (édition 21/10/2026) · corrigé · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-2026-10-21/07_intermediaire_complet_corrige.pdf",
    "sha256": "de4d1acf882c4a79c552e9af0491e2c22e68d0f1553f0bf91f4df4df4400c3c8",
    "download_name": "11_Bilan_actif_et_passif_intermediaire_complet_corrige.pdf"
  },
  {
    "theme": "07",
    "label": "EXO complet · corrigé · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-complets/07_intermediaire_corrige_complet.pdf",
    "sha256": "7136850087a4ceab22a83bc0f5c70f8e3d4124b4e740c23e911218b1c793e2f4",
    "download_name": "11_Bilan_actif_et_passif_intermediaire_corrige_complet.pdf"
  },
  {
    "theme": "07",
    "label": "EXO complet (édition 21/10/2026) · sujet · difficulté 5/5",
    "level": "expert",
    "path": "exercices-2026-10-21/07_expert_complet_sujet.pdf",
    "sha256": "c86768100cbdb9ebdd7603734cbd790c1274302c483c3678206f60db823398ee",
    "download_name": "11_Bilan_actif_et_passif_expert_complet_sujet.pdf"
  },
  {
    "theme": "07",
    "label": "EXO complet · sujet · difficulté 5/5",
    "level": "expert",
    "path": "exercices-complets/07_expert_exercices_complets.pdf",
    "sha256": "c46e679bf76e8113db0e91ff0ef0021dde0ba3b1027d63605b681071bc78819c",
    "download_name": "11_Bilan_actif_et_passif_expert_exercices_complets.pdf"
  },
  {
    "theme": "07",
    "label": "EXO complet (édition 21/10/2026) · corrigé · difficulté 5/5",
    "level": "expert",
    "path": "corriges-2026-10-21/07_expert_complet_corrige.pdf",
    "sha256": "3eac64cea4b05109b3a99617810d77f17263914187e59fc7ac0db51cd191652f",
    "download_name": "11_Bilan_actif_et_passif_expert_complet_corrige.pdf"
  },
  {
    "theme": "07",
    "label": "EXO complet · corrigé · difficulté 5/5",
    "level": "expert",
    "path": "corriges-complets/07_expert_corrige_complet.pdf",
    "sha256": "582755ef9866df3dd71702615303876bccf1016ff9d92f8f6d2d04c8dfd3e367",
    "download_name": "11_Bilan_actif_et_passif_expert_corrige_complet.pdf"
  },
  {
    "theme": "13",
    "label": "Cours complet • étape 12/14 · 28 pages",
    "level": "tous",
    "path": "cours-complets/13_COURS_DIAGNOSTIC_FINANCIER_2026.pdf",
    "sha256": "a0b89e5b5ff73c700831221244da91370944a38582eb9e148e9a81f0d54a4e88",
    "download_name": "12_Cours_Diagnostic_financier_et_flux.pdf"
  },
  {
    "theme": "13",
    "label": "Mémo · 12 pages",
    "level": "tous",
    "path": "memos/13 - Diagnostic financier.pdf",
    "sha256": "e7bd1a9d46eb5255730dcc754f78f3404d755ec454189e4aaac9253e396b96b5",
    "download_name": "12_Memo_Diagnostic_financier_et_flux.pdf"
  },
  {
    "theme": "13",
    "label": "Carte mentale · 6 pages",
    "level": "tous",
    "path": "cartes-mentales/13 - Diagnostic financier.pdf",
    "sha256": "88a03d843d93e567cacf7cdb795ed77c27e98cac279905940f4e5b7234465edf",
    "download_name": "12_Carte_mentale_Diagnostic_financier_et_flux.pdf"
  },
  {
    "theme": "13",
    "label": "Exercice rapide · sujet · 10 exercices · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-2026-10-27/13_debutant_rapide_sujet.pdf",
    "type": "rapide",
    "sha256": "f6e3c7c6dfd2821af5e5f6ecf380ea0898db5d7f917d0c53016b3edb44c795b8",
    "download_name": "12_Diagnostic_financier_et_flux_debutant_rapide_sujet.pdf"
  },
  {
    "theme": "13",
    "label": "Exercice rapide · corrigé · 10 exercices · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-2026-10-27/13_debutant_rapide_corrige.pdf",
    "type": "rapide",
    "sha256": "ecd591ade0b30d13e3d84a42e67b1ad7559b36f1b054a94b2eb2ed46cf152214",
    "download_name": "12_Diagnostic_financier_et_flux_debutant_rapide_corrige.pdf"
  },
  {
    "theme": "13",
    "label": "Exercice complet · sujet · 10 exercices · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-2026-10-27/13_debutant_complet_sujet.pdf",
    "type": "complet",
    "sha256": "0f2898e3f58f8b744508948f2ccc56fe5415232a592b899793fd021af0e10a47",
    "download_name": "12_Diagnostic_financier_et_flux_debutant_complet_sujet.pdf"
  },
  {
    "theme": "13",
    "label": "Exercice complet · corrigé · 10 exercices · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-2026-10-27/13_debutant_complet_corrige.pdf",
    "type": "complet",
    "sha256": "bd5c6d36ef7fd1c5f726aec668cef96278ec6aeaf3137a258e88fd9928e815f2",
    "download_name": "12_Diagnostic_financier_et_flux_debutant_complet_corrige.pdf"
  },
  {
    "theme": "13",
    "label": "Exercice rapide · sujet · 10 exercices · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-2026-10-27/13_intermediaire_rapide_sujet.pdf",
    "type": "rapide",
    "sha256": "2105b9868c8c1bde35ba1ee6b0ccf5a4d1e1d8af603a496f498840ce19250918",
    "download_name": "12_Diagnostic_financier_et_flux_intermediaire_rapide_sujet.pdf"
  },
  {
    "theme": "13",
    "label": "Exercice rapide · corrigé · 10 exercices · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-2026-10-27/13_intermediaire_rapide_corrige.pdf",
    "type": "rapide",
    "sha256": "14475d0ede0ba848d37be096ad62a3543f8d5ce15854ed85c957ddc3ea0e01a9",
    "download_name": "12_Diagnostic_financier_et_flux_intermediaire_rapide_corrige.pdf"
  },
  {
    "theme": "13",
    "label": "Exercice complet · sujet · 10 exercices · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-2026-10-27/13_intermediaire_complet_sujet.pdf",
    "type": "complet",
    "sha256": "b1ea954375570a6e8b13a8e56b2d9e1211c9fec448ec57271aef8baf3bcc41e9",
    "download_name": "12_Diagnostic_financier_et_flux_intermediaire_complet_sujet.pdf"
  },
  {
    "theme": "13",
    "label": "Exercice complet · corrigé · 10 exercices · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-2026-10-27/13_intermediaire_complet_corrige.pdf",
    "type": "complet",
    "sha256": "92864d3e0664983502acdb4fa167d07bd3516377b54435481cb062ace1376ae9",
    "download_name": "12_Diagnostic_financier_et_flux_intermediaire_complet_corrige.pdf"
  },
  {
    "theme": "13",
    "label": "Exercice rapide · sujet · 10 exercices · difficulté 5/5",
    "level": "expert",
    "path": "exercices-2026-10-27/13_expert_rapide_sujet.pdf",
    "type": "rapide",
    "sha256": "5841f39182e0e86401b2affee81a223aa08e17ac624380fe558a91d9ce3565b9",
    "download_name": "12_Diagnostic_financier_et_flux_expert_rapide_sujet.pdf"
  },
  {
    "theme": "13",
    "label": "Exercice rapide · corrigé · 10 exercices · difficulté 5/5",
    "level": "expert",
    "path": "corriges-2026-10-27/13_expert_rapide_corrige.pdf",
    "type": "rapide",
    "sha256": "aecfecf4a346f6b0f3450f6616cb19e385315ba5f256570bc693f7f8e139695d",
    "download_name": "12_Diagnostic_financier_et_flux_expert_rapide_corrige.pdf"
  },
  {
    "theme": "13",
    "label": "Exercice complet · sujet · 10 exercices · difficulté 5/5",
    "level": "expert",
    "path": "exercices-2026-10-27/13_expert_complet_sujet.pdf",
    "type": "complet",
    "sha256": "f47fabe711eeaefa71b9b13b5fca2c503b236a7462588ee5e072c8f4c614012e",
    "download_name": "12_Diagnostic_financier_et_flux_expert_complet_sujet.pdf"
  },
  {
    "theme": "13",
    "label": "Exercice complet · corrigé · 10 exercices · difficulté 5/5",
    "level": "expert",
    "path": "corriges-2026-10-27/13_expert_complet_corrige.pdf",
    "type": "complet",
    "sha256": "a2ab94add09a7bc744e1580aa2e6c195fce61a3a769b61a3b4f0768a398e1af4",
    "download_name": "12_Diagnostic_financier_et_flux_expert_complet_corrige.pdf"
  },
  {
    "theme": "10",
    "label": "Cours complet • étape 13/14 · 57 pages",
    "level": "tous",
    "path": "cours-complets/10_COURS_ANALYSE_COUTS_2026.pdf",
    "sha256": "cf4b5c7550c3f86510aefa73b5ff6099e5a6b86569a6c18c985e48b066cfd80a",
    "download_name": "13_Cours_Analyse_des_couts_et_budgets.pdf"
  },
  {
    "theme": "10",
    "label": "Mémo · 28 pages",
    "level": "tous",
    "path": "memos/10 - Analyse des couts.pdf",
    "sha256": "2e638980718c1acdac8b201ee43a5d12fc9b8218e5f7b57b675e1cb2c304e36c",
    "download_name": "13_Memo_Analyse_des_couts_et_budgets.pdf"
  },
  {
    "theme": "10",
    "label": "Carte mentale · 17 pages",
    "level": "tous",
    "path": "cartes-mentales/10 - Analyse des couts.pdf",
    "sha256": "7462dc812cae1ec3f3404b5bcf8e5cf8b032b41ef159c7167a3125b62e8a535a",
    "download_name": "13_Carte_mentale_Analyse_des_couts_et_budgets.pdf"
  },
  {
    "theme": "10",
    "label": "Exercice rapide · sujet · 10 exercices · édition 27/10/2026 · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-2026-10-27/10_debutant_rapide_sujet.pdf",
    "type": "rapide",
    "sha256": "1c72856592b1b6dcdfc77af1228737260b5775b96c145d3ed0f9c24ceb611e47",
    "download_name": "13_Analyse_des_couts_et_budgets_debutant_rapide_sujet.pdf"
  },
  {
    "theme": "10",
    "label": "Exercice rapide · corrigé · 10 exercices · édition 27/10/2026 · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-2026-10-27/10_debutant_rapide_corrige.pdf",
    "type": "rapide",
    "sha256": "4b74b3a22fb7cde9c76140d503e09574fd51ec371f6538f74db95dbd713925fd",
    "download_name": "13_Analyse_des_couts_et_budgets_debutant_rapide_corrige.pdf"
  },
  {
    "theme": "10",
    "label": "Exercice complet · sujet · 10 exercices · édition 27/10/2026 · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-2026-10-27/10_debutant_complet_sujet.pdf",
    "type": "complet",
    "sha256": "9e2a139fa23ca3a5a03ea380fb64b661830974f1b7cce95c3e4b707750e8a321",
    "download_name": "13_Analyse_des_couts_et_budgets_debutant_complet_sujet.pdf"
  },
  {
    "theme": "10",
    "label": "Exercice complet · corrigé · 10 exercices · édition 27/10/2026 · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-2026-10-27/10_debutant_complet_corrige.pdf",
    "type": "complet",
    "sha256": "669f239321eb91635f482c85d10199ae300c3263376f2754979bb10566eac2f7",
    "download_name": "13_Analyse_des_couts_et_budgets_debutant_complet_corrige.pdf"
  },
  {
    "theme": "10",
    "label": "Exercice rapide · sujet · 10 exercices · édition 27/10/2026 · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-2026-10-27/10_intermediaire_rapide_sujet.pdf",
    "type": "rapide",
    "sha256": "d62e86e8dee70f4da72b8400539e63bdcfcd61462645ae31bbf0ef0411755fb4",
    "download_name": "13_Analyse_des_couts_et_budgets_intermediaire_rapide_sujet.pdf"
  },
  {
    "theme": "10",
    "label": "Exercice rapide · corrigé · 10 exercices · édition 27/10/2026 · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-2026-10-27/10_intermediaire_rapide_corrige.pdf",
    "type": "rapide",
    "sha256": "6b518aaf286c9392b11b10abd1ee14f92723d54cf196e61cab15d653de367181",
    "download_name": "13_Analyse_des_couts_et_budgets_intermediaire_rapide_corrige.pdf"
  },
  {
    "theme": "10",
    "label": "Exercice complet · sujet · 10 exercices · édition 27/10/2026 · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-2026-10-27/10_intermediaire_complet_sujet.pdf",
    "type": "complet",
    "sha256": "4153046c20c92757536fd2f774c809a9d45f01e675a7dc4f4e6d0b88b9c09a19",
    "download_name": "13_Analyse_des_couts_et_budgets_intermediaire_complet_sujet.pdf"
  },
  {
    "theme": "10",
    "label": "Exercice complet · corrigé · 10 exercices · édition 27/10/2026 · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-2026-10-27/10_intermediaire_complet_corrige.pdf",
    "type": "complet",
    "sha256": "3679b75b5d6c5c71384a30381e7e2a4026826addb9d020c09307e6662d51857d",
    "download_name": "13_Analyse_des_couts_et_budgets_intermediaire_complet_corrige.pdf"
  },
  {
    "theme": "10",
    "label": "Exercice rapide · sujet · 10 exercices · édition 27/10/2026 · difficulté 5/5",
    "level": "expert",
    "path": "exercices-2026-10-27/10_expert_rapide_sujet.pdf",
    "type": "rapide",
    "sha256": "802b96fa074c72b24e7d6036b29c92861878a990ccef0787305776d05a539e06",
    "download_name": "13_Analyse_des_couts_et_budgets_expert_rapide_sujet.pdf"
  },
  {
    "theme": "10",
    "label": "Exercice rapide · corrigé · 10 exercices · édition 27/10/2026 · difficulté 5/5",
    "level": "expert",
    "path": "corriges-2026-10-27/10_expert_rapide_corrige.pdf",
    "type": "rapide",
    "sha256": "71056d9f437fafe3134f40c47920622782b063a34cf1764d9c3f1f82f4926ac8",
    "download_name": "13_Analyse_des_couts_et_budgets_expert_rapide_corrige.pdf"
  },
  {
    "theme": "10",
    "label": "Exercice complet · sujet · 10 exercices · édition 27/10/2026 · difficulté 5/5",
    "level": "expert",
    "path": "exercices-2026-10-27/10_expert_complet_sujet.pdf",
    "type": "complet",
    "sha256": "78a3297335ab8efa49b1b030a888cdadb4ba6ea4d2f8f41b8a81a4e37d2aa010",
    "download_name": "13_Analyse_des_couts_et_budgets_expert_complet_sujet.pdf"
  },
  {
    "theme": "10",
    "label": "Exercice complet · corrigé · 10 exercices · édition 27/10/2026 · difficulté 5/5",
    "level": "expert",
    "path": "corriges-2026-10-27/10_expert_complet_corrige.pdf",
    "type": "complet",
    "sha256": "9199e1797a1a00b9647eb0110623e67781001eee6dc85bf885175564aec94b50",
    "download_name": "13_Analyse_des_couts_et_budgets_expert_complet_corrige.pdf"
  },
  {
    "theme": "14",
    "label": "Cours complet • étape 14/14 · 28 pages",
    "level": "tous",
    "path": "cours-complets/14_COURS_RSE_SOBRIETE_2026.pdf",
    "sha256": "60827fd11d61702d93ab741315c77de950acdc854a2cb633e879564f3de837c0",
    "download_name": "14_Cours_RSE_et_sobriete_numerique.pdf"
  },
  {
    "theme": "14",
    "label": "Mémo · 12 pages",
    "level": "tous",
    "path": "memos/14 - RSE et sobriete numerique.pdf",
    "sha256": "d8883b4e28b9272f954d210ade1895a47958e9e8ee577a32b1e55862ab71a9ed",
    "download_name": "14_Memo_RSE_et_sobriete_numerique.pdf"
  },
  {
    "theme": "14",
    "label": "Carte mentale · 6 pages",
    "level": "tous",
    "path": "cartes-mentales/14 - RSE et sobriete numerique.pdf",
    "sha256": "a166d18b8587bb93a17eeb1b5a3e13f08a6964d8993787b292e886629fec6a99",
    "download_name": "14_Carte_mentale_RSE_et_sobriete_numerique.pdf"
  },
  {
    "theme": "14",
    "label": "Exercice rapide · sujet · 10 exercices · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-2026-10-27/14_debutant_rapide_sujet.pdf",
    "type": "rapide",
    "sha256": "567daa02f6d5ee038061363c702e9d59048021d244d9fc6453d9f874de90ad96",
    "download_name": "14_RSE_et_sobriete_numerique_debutant_rapide_sujet.pdf"
  },
  {
    "theme": "14",
    "label": "Exercice rapide · corrigé · 10 exercices · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-2026-10-27/14_debutant_rapide_corrige.pdf",
    "type": "rapide",
    "sha256": "84ef1c3724a7339b6e0d9eaf6c0e411ea7d216ba2f918230832ef70cbebe9fd4",
    "download_name": "14_RSE_et_sobriete_numerique_debutant_rapide_corrige.pdf"
  },
  {
    "theme": "14",
    "label": "Exercice complet · sujet · 10 exercices · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-2026-10-27/14_debutant_complet_sujet.pdf",
    "type": "complet",
    "sha256": "7e0ba831ccd076f713430fb1c44ccb2fa39e7aa4b1b2e0b5fc0d64832d97a3ca",
    "download_name": "14_RSE_et_sobriete_numerique_debutant_complet_sujet.pdf"
  },
  {
    "theme": "14",
    "label": "Exercice complet · corrigé · 10 exercices · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-2026-10-27/14_debutant_complet_corrige.pdf",
    "type": "complet",
    "sha256": "de2f026d85b777fd7f2edfa040e7cd6a975a791ed4035c3ae1f701b79355ebbd",
    "download_name": "14_RSE_et_sobriete_numerique_debutant_complet_corrige.pdf"
  },
  {
    "theme": "14",
    "label": "Exercice rapide · sujet · 10 exercices · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-2026-10-27/14_intermediaire_rapide_sujet.pdf",
    "type": "rapide",
    "sha256": "bb16b943b28ecb4c164047cca80d08c644bd9d78a6d545c9f458cf3a7ec33685",
    "download_name": "14_RSE_et_sobriete_numerique_intermediaire_rapide_sujet.pdf"
  },
  {
    "theme": "14",
    "label": "Exercice rapide · corrigé · 10 exercices · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-2026-10-27/14_intermediaire_rapide_corrige.pdf",
    "type": "rapide",
    "sha256": "5d8600189e5dd6acc2d5c9e9d436d9f80ca50fe51cd98c34488b7a85c6cd3a4a",
    "download_name": "14_RSE_et_sobriete_numerique_intermediaire_rapide_corrige.pdf"
  },
  {
    "theme": "14",
    "label": "Exercice complet · sujet · 10 exercices · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-2026-10-27/14_intermediaire_complet_sujet.pdf",
    "type": "complet",
    "sha256": "60b58b5658f8f481b4b72bcb01b9e8753b617430d759cfb4c0c7090c36961a9c",
    "download_name": "14_RSE_et_sobriete_numerique_intermediaire_complet_sujet.pdf"
  },
  {
    "theme": "14",
    "label": "Exercice complet · corrigé · 10 exercices · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-2026-10-27/14_intermediaire_complet_corrige.pdf",
    "type": "complet",
    "sha256": "b9db1c7e2abf4fd26b6064c06d2ecb8cf8c82c6d065cdb5a7cc9fd1fb446f5db",
    "download_name": "14_RSE_et_sobriete_numerique_intermediaire_complet_corrige.pdf"
  },
  {
    "theme": "14",
    "label": "Exercice rapide · sujet · 10 exercices · difficulté 5/5",
    "level": "expert",
    "path": "exercices-2026-10-27/14_expert_rapide_sujet.pdf",
    "type": "rapide",
    "sha256": "964a8392e979751bea53fb74664f4634ef1b324c24755c7396f00ace51c1aa31",
    "download_name": "14_RSE_et_sobriete_numerique_expert_rapide_sujet.pdf"
  },
  {
    "theme": "14",
    "label": "Exercice rapide · corrigé · 10 exercices · difficulté 5/5",
    "level": "expert",
    "path": "corriges-2026-10-27/14_expert_rapide_corrige.pdf",
    "type": "rapide",
    "sha256": "6076c9641d0cf43510c04540d655b5945b61739242da67353ea0cb1cffbec25f",
    "download_name": "14_RSE_et_sobriete_numerique_expert_rapide_corrige.pdf"
  },
  {
    "theme": "14",
    "label": "Exercice complet · sujet · 10 exercices · difficulté 5/5",
    "level": "expert",
    "path": "exercices-2026-10-27/14_expert_complet_sujet.pdf",
    "type": "complet",
    "sha256": "13f44fcebfca7408f7522020f006c76ea25372642df232e03fd0cd3f8f0e37a9",
    "download_name": "14_RSE_et_sobriete_numerique_expert_complet_sujet.pdf"
  },
  {
    "theme": "14",
    "label": "Exercice complet · corrigé · 10 exercices · difficulté 5/5",
    "level": "expert",
    "path": "corriges-2026-10-27/14_expert_complet_corrige.pdf",
    "type": "complet",
    "sha256": "a917b56db6b061e8c6be9e8d5595a3db483ecb3d99118b85d389cf0ffccf6f09",
    "download_name": "14_RSE_et_sobriete_numerique_expert_complet_corrige.pdf"
  }
];
window.ComptaAllowedPdfPaths = new Set(library.map(x=>x.path));
const safePaths=new Set(library.map(x=>x.path));
const root=document.getElementById('pdf-items');
const themeselect=document.getElementById('pdf-theme-filter');
const levelselect=document.getElementById('pdf-level-filter');
const kindselect=document.getElementById('pdf-kind-filter');
const search=document.getElementById('pdf-search');
const reset=document.getElementById('pdf-reset');
const count=document.getElementById('pdf-library-summary');
if(!root||!themeselect||!levelselect||!kindselect||!search||!reset)return;
const learningOrder=["08", "01", "02", "04", "03", "09", "12", "11", "05", "06", "07", "13", "10", "14"];
for(const id of learningOrder){const option=document.createElement('option');option.value=id;option.textContent=String(learningOrder.indexOf(id)+1).padStart(2,'0')+' · '+topics[Number(id)-1];themeselect.append(option)}
function kind(label){const v=label.toLowerCase();return v.startsWith('cours complet')?'cours':v.startsWith('exercice rapide')||v.startsWith('exo rapide')?'rapide':v.startsWith('exercice complet')||v.startsWith('exo complet')?'complet':'fiches'}
const PARTS=[{id:'cours',label:'Cours complet'},{id:'memo',label:'Mémo'},{id:'carte',label:'Carte mentale'},{id:'rapide',label:'Exercices rapides et corrigés'},{id:'complet',label:'Exercices complets et corrigés'}];
const difficultyLabel={debutant:'Débutant · 1/5',intermediaire:'Intermédiaire · 3/5',expert:'Expert · 5/5',tous:'Tous niveaux'};
const normalize=value=>String(value).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/\s+/g,' ').trim();
function subgroup(item){if(kind(item.label)==='cours')return 'cours';if(kind(item.label)==='rapide')return 'rapide';if(kind(item.label)==='complet')return 'complet';return item.label.toLowerCase().includes('carte')?'carte':'memo'}
function make(tag,cls,text){const node=document.createElement(tag);if(cls)node.className=cls;if(text)node.textContent=text;return node}
function preview(item,title,cls='btn subtle'){
 const button=make('button',cls,title);button.type='button';button.dataset.previewLocal=item.path;button.dataset.downloadName=item.download_name;button.dataset.downloadName=item.download_name;button.dataset.downloadName=item.download_name;button.dataset.downloadName=item.download_name;button.dataset.previewTitle=topics[Number(item.theme)-1]+' — '+item.label;return button;
}
function series(item){
 const dated=item.path.match(/2026-10-(21|22|27)/);if(dated)return {id:'edition-'+dated[0],label:'Série du '+dated[1]+' octobre 2026',priority:0};
 if(item.path.includes('-complets/'))return {id:'serie-complete',label:'Autre série complète',priority:1};
 if(item.path.includes('-valides/'))return {id:'serie-complementaire',label:'Série complémentaire',priority:2};
 return {id:item.path.replace(/corrig[ée]s?|sujets?|exercices?/gi,''),label:'Série complémentaire',priority:3};
}
function exerciseRows(items){
 const wrap=make('div','exercise-rows');
 for(const level of ['debutant','intermediaire','expert']){
  const rows=items.filter(i=>i.level===level);if(!rows.length)continue;
  const groups=new Map();for(const row of rows){const info=series(row);if(!groups.has(info.id))groups.set(info.id,{...info,items:[]});groups.get(info.id).items.push(row)}
  const ordered=[...groups.values()].sort((a,b)=>a.priority-b.priority||a.id.localeCompare(b.id));
  const levelBlock=make('div','exercise-level');const name=make('h5','',difficultyLabel[level]);levelBlock.append(name);
  function addPair(group,target){
   const pair=make('div','exercise-pair');
   if(ordered.length>1)pair.append(make('span','series-label',group.label));
   const actions=make('div','resource-actions');
   for(const item of group.items){
    const correction=/corrig/i.test(item.label);const button=preview(item,correction?'Corrigé':'Sujet',correction?'btn subtle':'linkbtn');
    button.setAttribute('aria-label',(correction?'Corrigé':'Sujet')+' · '+topics[Number(item.theme)-1]+' · '+difficultyLabel[level]+' · '+group.label);
    actions.append(button);
   }
   pair.append(actions);target.append(pair);
  }
  addPair(ordered[0],levelBlock);
  if(ordered.length>1){const more=make('details','more-series');more.append(make('summary','','Autres séries ('+(ordered.length-1)+')'));for(const group of ordered.slice(1))addPair(group,more);levelBlock.append(more)}
  wrap.append(levelBlock);
 }
 return wrap;
}
function matchesFilters(item){
 const words=normalize(search.value).split(' ').filter(Boolean);
 const text=normalize(topics[Number(item.theme)-1]+' '+item.label+' '+difficultyLabel[item.level]);
 return (themeselect.value==='all'||item.theme===themeselect.value)&&
  (levelselect.value==='all'||item.level==='tous'||item.level===levelselect.value)&&
  (kindselect.value==='all'||kind(item.label)===kindselect.value)&&words.every(w=>text.includes(w));
}
function render(){
 const visible=library.filter(matchesFilters);root.replaceChildren();
 const active=search.value.trim()!==''||[themeselect,levelselect,kindselect].some(x=>x.value!=='all');reset.hidden=!active;
 let themes=0;
 for(const id of learningOrder){
  const items=visible.filter(i=>i.theme===id);if(!items.length)continue;themes++;
  const card=make('article','course pdf-topic-card');card.id='theme-'+id;
  card.append(make('span','course-order','Étape '+String(learningOrder.indexOf(id)+1).padStart(2,'0')));
  const title=make('h3','',topics[Number(id)-1]);title.id='theme-title-'+id;card.setAttribute('aria-labelledby',title.id);card.append(title);
  const descriptions={"08": "Préparer · Système d’information comptable", "01": "Préparer · Comptes usuels", "02": "Enregistrer · Opérations courantes", "04": "Contrôler · TVA et CA3", "03": "Enregistrer · Immobilisations", "09": "Enregistrer · PAIE", "12": "Clôturer · Fiscalité des entreprises et IS", "11": "Clôturer · Clôture et travaux d’inventaire", "05": "Contrôler · Lettrage et rapprochement bancaire", "06": "Établir · Compte de résultat", "07": "Établir · Bilan actif et passif", "13": "Piloter · Diagnostic financier et flux", "10": "Piloter · Analyse des coûts et budgets", "14": "Améliorer · RSE et sobriété numérique"};
  card.append(make('p','theme-description',descriptions[id]));
  const docs=make('div','theme-documents');
  for(const part of PARTS.slice(0,3)){
   for(const item of items.filter(i=>subgroup(i)===part.id)){
    const title=part.id==='cours'?'Lire le cours':part.label;const button=preview(item,title,'document-button document-'+part.id);
    const pages=item.label.match(/(\d+) pages/);if(pages)button.append(make('small','',pages[1]+' pages'));
    button.setAttribute('aria-label',title+' · '+topics[Number(id)-1]);docs.append(button);
   }
  }
  if(docs.children.length)card.append(docs);
  const exercises=items.filter(i=>['rapide','complet'].includes(subgroup(i)));
  if(exercises.length){
   const detail=make('details','theme-exercises');detail.append(make('summary','','Exercices et corrigés'));
   for(const part of PARTS.slice(3)){
    const rows=exercises.filter(i=>subgroup(i)===part.id);if(!rows.length)continue;
    const block=make('section','pdf-resource-group');block.append(make('h4','',part.id==='rapide'?'Pour commencer : exercices rapides':'Pour aller plus loin : exercices complets'));block.append(exerciseRows(rows));detail.append(block);
   }
   card.append(detail);
  }
  const quiz=make('button','text-button theme-quiz','Faire un quiz sur ce thème →');quiz.type='button';quiz.dataset.quizTheme=id;card.append(quiz);root.append(card);
 }
 if(!themes){const empty=make('div','panel empty-results');empty.append(make('h3','','Aucun document trouvé'),make('p','','Essaie un autre mot ou efface les filtres.'));root.append(empty)}
 const filtered=active?' · sélection filtrée':'';
 count.textContent=themes+' thème'+(themes>1?'s':'')+' · '+visible.length+' document'+(visible.length>1?'s':'')+filtered;
}
for(const control of [themeselect,levelselect,kindselect])control.addEventListener('change',render);
search.addEventListener('input',render);
reset.addEventListener('click',()=>{search.value='';for(const control of [themeselect,levelselect,kindselect])control.value='all';render();search.focus()});
root.addEventListener('click',e=>{
 const quiz=e.target.closest('[data-quiz-theme]');if(quiz){window.dispatchEvent(new CustomEvent('compta:theme-quiz',{detail:{theme:quiz.dataset.quizTheme,level:levelselect.value}}));return;}
 const button=e.target.closest('[data-preview-local]');if(button&&!safePaths.has(button.dataset.previewLocal))e.preventDefault();
});
render();
})();
