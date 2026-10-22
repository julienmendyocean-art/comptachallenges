#!/usr/bin/env python3
"""Recalcul indépendant (Decimal) des 140 questions chiffrées des niveaux I/E.

Les formules correspondent à la lecture du scénario de chaque question, dans l'ordre
actuel du JSON. Toute variation de question ou d'ordre impose une revue humaine et
une mise à jour du test ; l'évaluation métier n'est pas entièrement automatisable.
"""
from decimal import Decimal, ROUND_HALF_UP
import re,json,sys
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
D=Decimal
# Expressions déterministes, interprétées uniquement à partir de ce fichier contrôlé.
F={
 '01-intermediaire':['v[0]*D("1.2")','v[0]*D("1.2")','v[0]*D("0.2")','v[0]*D("0.2")','v[0]*D("0.2")','v[0]-v[1]','v[0]-v[1]','v[0]+v[1]','v[0]+v[1]-v[2]','v[0]+v[1]'],
 '01-expert':['v[0]+v[1]-v[2]','v[0]+v[1]-v[2]','v[0]+v[1]-v[2]','v[0]-v[1]+v[2]','v[0]+v[1]-v[2]','v[0]+v[1]-v[2]','v[0]+v[1]-v[2]','v[0]+v[1]-v[2]','v[0]+v[1]-v[2]','v[0]+v[1]-v[2]'],
 '02-intermediaire':['v[0]*D("0.9")*D("1.2")','(v[0]-v[1])*D("0.2")','v[0]*D("0.9")*D("1.2")-v[1]','(v[0]-v[1])*D("1.2")','v[0]-v[1]-v[2]','v[0]*D("0.9")','v[1]/6','(v[0]+v[1])*D("0.2")','(v[0]-v[1])*D("0.1")','(v[0]-v[1])*D("0.2")'],
 '02-expert':['(v[0]*D("0.9")-v[1])*D("1.2")','(v[0]*D("0.9")-v[1])*D("0.2")','(v[0]+v[1]-v[2])*D("1.2")','v[0]-v[1]-v[2]-v[3]','v[0]*D("1.2")-v[1]-v[2]','(v[0]-v[2])*D("0.2")+v[1]*D("0.1")','(v[1]+v[2])/6','v[0]*D("0.9")*D("1.2")-v[1]-v[2]','(v[0]-v[1])*D("1.2")-v[2]','(v[0]-v[1]-v[2])*D("1.2")'],
 '03-intermediaire':['(v[0]+v[1])/5','v[0]-v[0]/5*2','v[0]-v[1]*3','v[1]*10/12','v[1]-v[0]','v[0]-v[1]-v[2]','v[0]+v[1]-v[2]','v[1]*2','v[0]-v[0]/5-v[1]','v[0]-v[1]-v[2]'],
 '03-expert':['(v[0]+v[1]-v[2])/5','v[0]-v[1]*3-v[2]','v[0]/5*9/12','v[0]-(v[1]-v[2]*2)-v[3]','v[1]*2+v[1]*6/12','v[0]-v[1]','v[0]-v[1]+v[2]','v[0]-v[1]-v[2]','v[0]-v[1]-v[2]','v[0]*2+v[0]*9/12'],
 '04-intermediaire':['v[0]-v[1]-v[2]','v[0]*D("0.2")+v[1]*D("0.1")','v[1]/6','D(0)','v[0]-v[1]-v[2]','(v[0]-v[1])*D("0.2")','v[0]*D("0.2")+v[1]*D("0.1")','(v[0]+v[1])/6','v[0]*D("0.2")','v[0]-v[1]+v[2]'],
 '04-expert':['v[0]-v[2]','(v[0]-v[2])*D("0.2")+v[1]*D("0.1")','v[0]-v[1]-v[2]+v[3]','v[0]-v[1]-v[2]','v[0]-v[1]+v[2]-v[3]','v[0]-v[1]+v[2]*D("0.5")','v[0]*D("0.2")+v[1]*D("0.1")-v[2]*D("0.2")','(v[0]+v[1])/6','v[0]-v[1]-v[2]-v[3]','v[0]*D("0.2")*D("0.25")'],
 '05-intermediaire':['v[0]-v[1]-v[2]','v[0]+v[1]-v[2]','v[0]-v[1]+v[2]','v[0]+v[1]-v[2]','v[0]+v[1]-v[2]','v[0]-v[1]-v[2]','v[0]+v[1]-v[2]','v[0]-v[1]+v[2]','v[0]+v[1]-v[2]','v[2]-v[0]-v[1]'],
 '05-expert':['v[0]+v[1]+v[2]-v[3]','v[0]-v[1]+v[2]-v[3]','v[0]+v[1]-v[2]-v[3]','v[0]+v[1]-v[2]-v[3]','v[0]+v[1]-v[2]-v[3]','v[0]-v[1]+v[2]-v[3]','v[0]+v[1]-v[2]-v[3]','v[0]+v[1]-v[2]-v[3]','v[0]+v[1]+v[2]-v[3]*2','v[0]+v[1]+v[2]-v[3]*2'],
 '06-intermediaire':['v[0]-v[1]-v[2]','v[0]-v[1]-v[2]','v[0]-v[1]-v[2]','v[0]+v[1]-v[2]','v[0]-v[1]-v[2]','v[0]+v[1]-v[2]','v[0]-v[1]-v[2]','v[0]-v[1]-v[2]','v[0]-v[1]-v[2]','v[0]+v[1]-v[2]'],
 '06-expert':['v[0]+v[1]-v[2]-v[3]','v[0]-v[1]+v[2]-v[3]','v[0]-v[1]-v[2]+v[3]','v[0]-v[1]+v[2]-v[3]','v[0]-v[1]-v[2]+v[3]','v[0]+v[1]-v[2]-v[3]','v[0]-v[1]-v[2]+v[3]','v[0]-v[1]+v[2]-v[3]','v[0]-v[1]-v[2]-v[3]','v[0]-v[1]+v[2]-v[3]'],
 '07-intermediaire':['v[0]+v[1]-v[2]','v[0]-v[1]','v[0]-v[1]','v[0]+v[1]+v[2]','v[0]+v[1]+v[2]','v[0]-v[1]-v[2]','v[0]-v[1]-v[2]','v[0]+v[1]-v[2]','v[0]-v[1]-v[2]','v[0]-v[1]-v[2]'],
 '07-expert':['v[0]+v[1]-v[2]-v[3]','v[0]+v[1]-v[2]','v[0]-v[1]','v[0]-v[1]+v[2]+v[3]','v[0]+v[1]-v[2]+v[3]','v[0]+v[1]-v[2]-v[3]','v[1]-v[0]-v[2]','v[0]-v[1]-v[2]-v[3]','v[0]-v[1]+v[2]+v[3]','v[0]-v[1]-v[2]+v[3]'],
}

def money(text):
    # Ne pas fusionner les numéros de comptes et N-1 avec les montants qui suivent.
    text=re.sub(r'\b512\s+(?=\d[\d\s]*,\d{2}\s*€)', '', text)
    text=re.sub(r'\bN-1\s+(?=\d[\d\s]*,\d{2}\s*€)', 'N précédent ', text)
    values=re.findall(r'(?<!\d)(\d[\d\s\u00a0]*,\d{2})\s*€',text)
    return [D(s.replace(' ','').replace('\u00a0','').replace(',','.')) for s in values]

def run():
    groups=json.loads((ROOT/'questions.json').read_text(encoding='utf-8'))
    issues=[]; n=0
    for group in groups:
        groupid=group['id']
        if groupid.endswith('debutant'):continue
        formulas=F.get(groupid)
        if not formulas or len(formulas)!=len(group['questions'][10:20]): issues.append((groupid,'formules absentes/mauvais nombre'));continue
        for i,(q,formula) in enumerate(zip(group['questions'][10:20],formulas)):
            v=money(q['q'])
            try:
                result=eval(formula,{'__builtins__':{}},{'v':v,'D':D})
                expected=result.quantize(D('0.01'),rounding=ROUND_HALF_UP)
                actual=money(q['options'][q['correct']])[0]
                if actual!=expected:issues.append((groupid,i+1,str(actual),str(expected),formula))
                else:n+=1
            except Exception as e:issues.append((groupid,i+1,repr(e),formula))
    print('Calculs indépendants vérifiés:',n,'sur',sum(len(x) for x in F.values()))
    if issues:
        for x in issues:print('ERREUR:',x)
        return 1
    return 0
if __name__=='__main__':sys.exit(run())
