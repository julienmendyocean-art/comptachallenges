#!/usr/bin/env python3
from pathlib import Path
import json
R=Path(__file__).resolve().parents[1]
d=json.loads((R/'CONTROLE_ECRITURES_MEMO_TVA_R4.json').read_text(encoding='utf-8'))
assert d['all_balanced'] and len(d['journaux'])==24
assert all(abs(x['debit']-x['credit'])<0.001 for x in d['journaux'])
assert all(x['rows']>=2 for x in d['journaux'])
print('OK : 24 exemples journaux TVA, débit = crédit.')
