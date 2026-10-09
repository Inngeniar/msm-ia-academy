import os
import re
import json

seed_path = r"c:\Users\nicol\OneDrive\Mundo Salud Médica\PROYECTO MSM\Curso IA_MSM\msm_curso_ia\nextjs_space\scripts\seed.ts"
topics_path = r"c:\Users\nicol\OneDrive\Mundo Salud Médica\PROYECTO MSM\Curso IA_MSM\msm_curso_ia\nextjs_space\scripts\topics-content.ts"

with open(seed_path, "r", encoding="utf-8") as f:
    seed_text = f.read()

with open(topics_path, "r", encoding="utf-8") as f:
    topics_text = f.read()

# Parse topicsContent
topic_sections = re.split(r'// ===================== SESIÓN (\d+) =====================', topics_text)
topics_by_session = {}
for i in range(1, len(topic_sections), 2):
    s_num = int(topic_sections[i])
    s_body = topic_sections[i+1]
    raw_items = re.findall(r'\{\s*titulo:\s*"([^"]+)",\s*intuicion:\s*"([^"]+)",\s*puntosClave:\s*\[(.*?)\],\s*accion:\s*"([^"]+)"', s_body, re.DOTALL)
    items = []
    for t, intu, pts_str, acc in raw_items:
        pts = re.findall(r'"([^"]+)"', pts_str)
        items.append({
            "titulo": t.strip(),
            "intuicion": intu.strip(),
            "puntosClave": pts,
            "accion": acc.strip()
        })
    topics_by_session[s_num] = items

print(f"Loaded detailed topics for sessions: {list(topics_by_session.keys())}")
