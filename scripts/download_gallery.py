#!/usr/bin/env python3
"""Download Box gallery photos for Platte Valley Airpark website."""

import urllib.request, urllib.parse, json, os, sys, time

# Hardcode credentials directly
BOX_CLIENT_ID = '02q2amvu3l80kgc0tygxjj7oqxpejgl6'
BOX_CLIENT_SECRET = 'IBj65zEolWdTfn2rewgAUWljZNcchZB6'
BOX_ENTERPRISE_ID = '1265190527'

# Get token
creds = {
    'grant_type': 'client_credentials',
    'client_id': BOX_CLIENT_ID,
    'client_secret': BOX_CLIENT_SECRET,
    'box_subject_type': 'enterprise',
    'box_subject_id': BOX_ENTERPRISE_ID
}
req = urllib.request.Request(
    'https://api.box.com/oauth2/token',
    data=urllib.parse.urlencode(creds).encode(),
    headers={'Content-Type': 'application/x-www-form-urlencoded'}
)
with urllib.request.urlopen(req) as r:
    TOKEN = json.load(r)['access_token']

AS_USER = '39870539327'
IMAGES_DIR = '/Users/flyz88/.openclaw/workspace/platte-valley-airpark/public/images'

PHOTOS = {
    # Group A: Erin April 2026 Pancake Breakfast
    '2263164032812': 'es-apr-pancake-DSC_0121.jpg',
    '2263161695879': 'es-apr-pancake-DSC_0122.jpg',
    '2263164083838': 'es-apr-pancake-DSC_0123.jpg',
    '2263161774496': 'es-apr-pancake-DSC_0126.jpg',
    '2263161734008': 'es-apr-pancake-DSC_0127.jpg',
    '2263164499114': 'es-apr-pancake-DSC_0128.jpg',
    '2263165830644': 'es-apr-pancake-DSC_0129.jpg',
    '2263154167196': 'es-apr-pancake-DSC_0130.jpg',
    '2263163099862': 'es-apr-pancake-DSC_0132.jpg',
    '2263164705506': 'es-apr-pancake-DSC_0135.jpg',
    '2263160281490': 'es-apr-pancake-DSC_0136.jpg',
    '2263155338147': 'es-apr-pancake-DSC_0137.jpg',
    # Group B: Erin May 30 Pancake Fly-In
    '2255051982442': 'es-may30-DSC_0157.jpg',
    '2255052620785': 'es-may30-DSC_0158.jpg',
    '2255045502261': 'es-may30-DSC_0159.jpg',
    '2255029439146': 'es-may30-DSC_0162.jpg',
    '2255044648763': 'es-may30-DSC_0163.jpg',
    '2255066507139': 'es-may30-DSC_0169.jpg',
    '2255056730069': 'es-may30-DSC_0170.jpg',
    '2255054223824': 'es-may30-DSC_0172.jpg',
    '2255023746735': 'es-may30-DSC_0173.jpg',
    '2255052783801': 'es-may30-DSC_0174.jpg',
    '2255029504051': 'es-may30-DSC_0177.jpg',
    '2257815403000': 'es-may30-DSC_0178.jpg',
    '2255069644361': 'es-may30-DSC_0180.jpg',
    '2257829253241': 'es-may30-DSC_0181.jpg',
    '2255040736222': 'es-may30-DSC_0183.jpg',
    '2255070604045': 'es-may30-DSC_0184.jpg',
    '2257817541391': 'es-may30-DSC_0184b.jpg',
    '2255069853192': 'es-may30-DSC_0187.jpg',
    '2255045125625': 'es-may30-DSC_0188.jpg',
    '2255057431067': 'es-may30-DSC_0189.jpg',
    '2255027889582': 'es-may30-IMG_0437.jpg',
    # Group C: Erin Flight1
    '2231371990894': 'es-flight1-DSC_0001.jpg',
    '2231373061995': 'es-flight1-DSC_0003.jpg',
    '2231376587219': 'es-flight1-DSC_0004.jpg',
    '2231373095870': 'es-flight1-DSC_0018.jpg',
    '2231366018179': 'es-flight1-DSC_0029.jpg',
    '2231371266864': 'es-flight1-DSC_0045.jpg',
    '2231371150909': 'es-flight1-DSC_0049.jpg',
    '2231374012178': 'es-flight1-DSC_0051.jpg',
    '2231370342396': 'es-flight1-DSC_0052.jpg',
    '2231372162274': 'es-flight1-DSC_0053.jpg',
    '2231373378432': 'es-flight1-DSC_0056.jpg',
    '2231377739570': 'es-flight1-DSC_0064.jpg',
    '2231374331477': 'es-flight1-DSC_0066.jpg',
    '2231374568981': 'es-flight1-DSC_0080.jpg',
    '2231372565115': 'es-flight1-DSC_0084.jpg',
    '2231366541501': 'es-flight1-DSC_0092.jpg',
    '2231366454457': 'es-flight1-DSC_0093.jpg',
    '2231373227754': 'es-flight1-DSC_0105.jpg',
    '2231367822605': 'es-flight1-DSC_0106.jpg',
    '2231374352558': 'es-flight1-DSC_0107.jpg',
    '2231376652103': 'es-flight1-DSC_0110.jpg',
    '2231373262894': 'es-flight1-DSC_0112.jpg',
    '2231374820782': 'es-flight1-DSC_0113.jpg',
    '2231374571654': 'es-flight1-DSC_0114.jpg',
    '2231375329524': 'es-flight1-DSC_0115.jpg',
    # Group D: Dave Shull May 2 Morning
    '2226256647830': 'dave-may02-L1001136.jpg',
    '2226255383161': 'dave-may02-L1001139.jpg',
    '2226249620539': 'dave-may02-L1001142.jpg',
    '2226254411108': 'dave-may02-L1001144.jpg',
    '2226259182400': 'dave-may02-L1001150.jpg',
    '2226259203629': 'dave-may02-L1001133.jpg',
    # Group E: Zachery ES Edited April Pancake
    '2231375137203': 'zs-apr-pancake-IMG_5608.jpg',
    '2231374972105': 'zs-apr-pancake-IMG_5665.jpg',
    '2231379983442': 'zs-apr-pancake-IMG_5706.jpg',
    '2231374835357': 'zs-apr-pancake-IMG_5716.jpg',
    '2231369584731': 'zs-apr-pancake-IMG_5726.jpg',
    '2231376426862': 'zs-apr-pancake-IMG_5741.jpg',
    '2231374218261': 'zs-apr-pancake-IMG_5752.jpg',
    '2231377417781': 'zs-apr-pancake-IMG_5794.jpg',
    '2231379843701': 'zs-apr-pancake-IMG_5797.jpg',
    '2231377930925': 'zs-apr-pancake-IMG_5806.jpg',
    '2231371017484': 'zs-apr-pancake-IMG_5812.jpg',
    '2231369058424': 'zs-apr-pancake-IMG_5814.jpg',
    '2231376942672': 'zs-apr-pancake-IMG_5818.jpg',
    '2231377090835': 'zs-apr-pancake-IMG_5830.jpg',
    '2231373229671': 'zs-apr-pancake-IMG_5833.jpg',
    '2231375862066': 'zs-apr-pancake-IMG_5856.jpg',
    '2231377813558': 'zs-apr-pancake-IMG_5857.jpg',
    '2231377384008': 'zs-apr-pancake-IMG_5861.jpg',
    '2231369762301': 'zs-apr-pancake-IMG_5867.jpg',
    '2231376333504': 'zs-apr-pancake-IMG_5869.jpg',
    '2231370541661': 'zs-apr-pancake-IMG_5900.jpg',
    '2231375576426': 'zs-apr-pancake-IMG_5915.jpg',
    '2231376170391': 'zs-apr-pancake-IMG_5924.jpg',
    '2231371438849': 'zs-apr-pancake-IMG_5926.jpg',
    '2231370991171': 'zs-apr-pancake-IMG_5928.jpg',
    # Group F: Josh Jackson Pre-2025 Field Shoot
    '2263170505542': 'jj-field-11.jpg',
    '2263076749659': 'jj-field-18.jpg',
    '2263168298364': 'jj-field-2.jpg',
    '2263186002086': 'jj-field-20.jpg',
    '2263177168798': 'jj-field-25.jpg',
    '2263169329427': 'jj-field-26.jpg',
    '2263176182101': 'jj-field-28.jpg',
    '2263170483703': 'jj-field-3.jpg',
    '2263171355879': 'jj-field-31.jpg',
    '2263171395637': 'jj-field-33.jpg',
    '2263052586352': 'jj-field-34.jpg',
    '2263171381341': 'jj-field-4.jpg',
    '2263167698376': 'jj-field-44.jpg',
    '2263175046663': 'jj-field-59.jpg',
    '2263172077481': 'jj-field-6edit.jpg',
    '2263080875697': 'jj-field-6.jpg',
    '2263181860731': 'jj-field-66.jpg',
    '2263185567784': 'jj-field-68.jpg',
    '2263171761525': 'jj-field-71.jpg',
    '2263170546573': 'jj-field-8.jpg',
    '2263173698242': 'jj-field-9.jpg',
}

downloaded = []
failed = []

for file_id, filename in PHOTOS.items():
    out_path = os.path.join(IMAGES_DIR, filename)
    url = f'https://api.box.com/2.0/files/{file_id}/content'
    
    req = urllib.request.Request(url, headers={
        'Authorization': f'Bearer {TOKEN}',
        'As-User': AS_USER
    })
    
    try:
        with urllib.request.urlopen(req) as r:
            data = r.read()
        with open(out_path, 'wb') as f:
            f.write(data)
        size_kb = len(data) // 1024
        print(f"  ✓ {filename} ({size_kb} KB)")
        downloaded.append(filename)
    except Exception as e:
        print(f"  ✗ FAILED {filename}: {e}", file=sys.stderr)
        failed.append((filename, str(e)))

print(f"\nDownloaded: {len(downloaded)}/{len(PHOTOS)}")
if failed:
    print(f"Failed: {len(failed)}")
    for fn, err in failed:
        print(f"  - {fn}: {err}")
