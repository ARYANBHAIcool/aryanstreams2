import urllib.request
import json

headers = {'User-Agent': 'Mozilla/5.0'}

def get_numeric(ch_id):
    return "".join([c for c in str(ch_id) if c.isdigit()])

# We need to map:
# "05" (ausvsban)
# "0583" (indvssrl)
# "04" (ausvsjap)
# "092" (arnhem)
# "098" (saitama)
# "08" (willowcricbuzz)

urls = [
    'https://sonujson-v3.pages.dev/Data/willow.json',
    'https://sonujson-v3.pages.dev/Data/prime.json'
]

all_matches = []
for u in urls:
    try:
        req = urllib.request.Request(u, headers=headers)
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            all_matches.extend(data.get('Matches', data.get('matches', [])))
    except Exception as e:
        print(f"Error reading {u}: {e}")

targets = ["05", "0583", "04", "092", "098", "08"]

print("=== MAPPINGS ===")
for target in targets:
    found = False
    for m in all_matches:
        ch_id = m.get('id', '')
        num_id = get_numeric(ch_id)
        if target in num_id or num_id == target:
            print(f"Target: {target} matches Match: {m.get('event_name', m.get('title'))} (ID: {ch_id}, NumID: {num_id})")
            # print details
            servers = m.get('CnpTV', {})
            server_url = next(iter(servers.values())) if servers else ""
            print(f"  Stream: {server_url}")
            print(f"  DRM Key: {m.get('drm_key')}")
            found = True
    if not found:
        # Check partial match
        for m in all_matches:
            ch_id = m.get('id', '')
            num_id = get_numeric(ch_id)
            if num_id.startswith(target) or target.startswith(num_id):
                print(f"Target: {target} partially matches Match: {m.get('event_name', m.get('title'))} (ID: {ch_id}, NumID: {num_id})")
                servers = m.get('CnpTV', {})
                server_url = next(iter(servers.values())) if servers else ""
                print(f"  Stream: {server_url}")
                print(f"  DRM Key: {m.get('drm_key')}")
                found = True
        if not found:
            print(f"Target: {target} - NO MATCH FOUND IN CURRENT LIVE API LIST")
