const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const SPORTS_SOURCES = [
    'https://sportlink-playlist.pages.dev/zio.m3u'
];

const WILLOW_SOURCES = [
    'https://bintvjson.lovable.app/api/public/bintvjson',
    'https://raw.githubusercontent.com/srhady/willow-event/refs/heads/main/live_sports.json',
    'https://raw.githubusercontent.com/srhady/willow-event/refs/heads/main/primevideo_sports.json',
    'https://raw.githubusercontent.com/sportlive18/Willow-Cricbuzz-Prime-Video-Sport-Live-Event-Auto-Updated-Playlist/refs/heads/main/willow.json',
    'https://raw.githubusercontent.com/sportlive18/Willow-Cricbuzz-Prime-Video-Sport-Live-Event-Auto-Updated-Playlist/refs/heads/main/primesport.json',
    'https://sonujson-v5.pages.dev/Data/willow.json'
];

const SONY_M3U8_SOURCES = [
    'https://pastefy.app/6wOwFjlG/raw'
];

const JIO_MAP = {
    // Star Sports
    '1106': ['E1HD', 'star1', 'star1hd', 'star1enghd', 'ss1', '1106'],
    '1108': ['H1HD', 'star1hindihd', 'ss1h', '1108'],
    '1109': ['E2HD', 'star2', 'star2hd', 'star2enghd', 'ss2', '1109'],
    '1984': ['H2HD', 'star2hindihd', 'ss2h', '1984'],
    '1142': ['E1SD', 'star1eng', '1142'],
    '362':  ['H1SD', 'star1hindi', '362'],
    '1141': ['E2SD', 'star2eng', '1141'],
    '1985': ['H2SD', 'star2hindi', '1985'],
    '1389': ['SS3', 'ss3', '1389'],
    '460':  ['SE1HD', 'select1', 'ssselect1', '460'],
    '1123': ['SE1', '1123'],
    '461':  ['SE2HD', 'select2', 'ssselect2', '461'],
    '1114': ['SE2', '1114'],
    '3277': ['T1HD', 'star1tamil', 'ss1tam', '3277'],
    '1124': ['T1SD', '1124'],
    '3278': ['TE1HD', 'star1telugu', 'ss1tel', '3278'],
    '1651': ['TE1SD', '1651'],
    '1650': ['KA1SD', 'star1kannada', 'ss1kan', '1650'],
    '1122': ['KA2SD', 'star2kannada', 'ss2kan', '1122'],
    '3273': ['S2HD', 'star2tamil', 'ss2tam', '3273'],
    '3274': ['TE2HD', 'star2telugu', 'ss2tel', '3274'],

    // Sony Sports
    '162':  ['162', 'STEN1', 'ten1hd', 'ten1', 'sony1', 'sony_ten1_hd', 's6hd'],
    '891':  ['891', 'STEN2', 'ten2hd', 'ten2', 'sony2', 'sony_ten2_hd', 's2hd'],
    '892':  ['892', 'STEN3', 'ten3hd', 'ten3', 'sony3', 'sony_ten3_hd', 's3hindihd'],
    '3397': ['3514', '3397', 'STENT', 'ten4hd', 'ten4', 'sony4', 's4tamil'],
    '3514': ['3514', '3397', 'STENT', 'ten4hd', 'ten4', 'sony4', 's4tamil'],
    '3398': ['1773', '3398', 'STENTU', 'ten4telugu', 's4telugu'],
    '1773': ['1773', '3398', 'STENTU', 'ten4telugu', 's4telugu'],
    '3399': ['155', '3399', 'STEN5', 'ten5hd', 'ten5', 'sony5', 'sony_ten5_hd', 's5hd'],
    '155':  ['155', '3399', 'STEN5', 'ten5hd', 'ten5', 'sony5', 'sony_ten5_hd', 's5hd'],

    // DD Sports & Others
    '204':  ['204', 'dds', 'ddsports']
};

const DYNAMIC_COOKIE_MAP = {
    'ss1': 'ss1', 'e1hd': 'ss1', '1106': 'ss1', 'star1': 'ss1', 'star1hd': 'ss1', 'star1enghd': 'ss1',
    'ss2': 'ss2', 'e2hd': 'ss2', '1109': 'ss2', 'star2': 'ss2', 'star2hd': 'ss2', 'star2enghd': 'ss2',
    'ss1h': 'ss1h', 'h1hd': 'ss1h', '1108': 'ss1h', 'star1hindihd': 'ss1h',
    'ss2h': 'ss2h', 'h2hd': 'ss2h', '1984': 'ss2h', 'star2hindihd': 'ss2h',
    'ss1tam': 'ss1tam', 's2hd': 'ss1tam', 't1hd': 'ss1tam', '3277': 'ss1tam',
    'ss2tam': 'ss2tam', '3273': 'ss2tam',
    'ss1tel': 'ss1tel', 'te1hd': 'ss1tel', 'te2hd': 'ss1tel', '3278': 'ss1tel',
    'ss2tel': 'ss2tel', '3274': 'ss2tel',
    'ss1kan': 'ss1kan', 'ka1sd': 'ss1kan', '1650': 'ss1kan',
    'ss2kan': 'ss2kan', 'ka2sd': 'ss2kan', '1122': 'ss2kan'
};

const KNOWN_KEYS = {
    // Star Sports
    'h1hd': { kid: '11073b8f426e5092a2effada3bfaf721', key: '5d1c59a8052956bd056810f260161e5f' },
    'ss1h': { kid: '11073b8f426e5092a2effada3bfaf721', key: '5d1c59a8052956bd056810f260161e5f' },
    'star1hindihd': { kid: '11073b8f426e5092a2effada3bfaf721', key: '5d1c59a8052956bd056810f260161e5f' },
    '1108': { kid: '11073b8f426e5092a2effada3bfaf721', key: '5d1c59a8052956bd056810f260161e5f' },

    'h1sd': { kid: '30039b6e2c545c01aa84e649875c4977', key: '7aa610c68000fe9ed97851d40a52abff' },
    'star1hindi': { kid: '30039b6e2c545c01aa84e649875c4977', key: '7aa610c68000fe9ed97851d40a52abff' },
    '362': { kid: '30039b6e2c545c01aa84e649875c4977', key: '7aa610c68000fe9ed97851d40a52abff' },

    'e1hd': { kid: '06dd6287c4b956419d15d6c8e513aeed', key: 'a82d6b850b5c281c0054fc6d55e1c6ba' },
    'ss1': { kid: '06dd6287c4b956419d15d6c8e513aeed', key: 'a82d6b850b5c281c0054fc6d55e1c6ba' },
    'star1': { kid: '06dd6287c4b956419d15d6c8e513aeed', key: 'a82d6b850b5c281c0054fc6d55e1c6ba' },
    'star1hd': { kid: '06dd6287c4b956419d15d6c8e513aeed', key: 'a82d6b850b5c281c0054fc6d55e1c6ba' },
    'star1enghd': { kid: '06dd6287c4b956419d15d6c8e513aeed', key: 'a82d6b850b5c281c0054fc6d55e1c6ba' },
    '1106': { kid: '06dd6287c4b956419d15d6c8e513aeed', key: 'a82d6b850b5c281c0054fc6d55e1c6ba' },

    'e1sd': { kid: 'a415207154a154e59d6259f6c436937c', key: '56c3bac0e95368220dd75b6312a4458c' },
    'star1eng': { kid: 'a415207154a154e59d6259f6c436937c', key: '56c3bac0e95368220dd75b6312a4458c' },
    '1142': { kid: 'a415207154a154e59d6259f6c436937c', key: '56c3bac0e95368220dd75b6312a4458c' },

    'e2hd': { kid: 'b99144f27b865d6ba1007fead82b2783', key: 'b2f10f09a771327b9bc69484d78e4595' },
    'ss2': { kid: 'b99144f27b865d6ba1007fead82b2783', key: 'b2f10f09a771327b9bc69484d78e4595' },
    'star2': { kid: 'b99144f27b865d6ba1007fead82b2783', key: 'b2f10f09a771327b9bc69484d78e4595' },
    'star2hd': { kid: 'b99144f27b865d6ba1007fead82b2783', key: 'b2f10f09a771327b9bc69484d78e4595' },
    'star2enghd': { kid: 'b99144f27b865d6ba1007fead82b2783', key: 'b2f10f09a771327b9bc69484d78e4595' },
    '1109': { kid: 'b99144f27b865d6ba1007fead82b2783', key: 'b2f10f09a771327b9bc69484d78e4595' },

    'e2sd': { kid: 'd49703e538a2545fa2d8d57f34a4d0ba', key: '9ef07c1b359ee137db0493cebd6acdf0' },
    'star2eng': { kid: 'd49703e538a2545fa2d8d57f34a4d0ba', key: '9ef07c1b359ee137db0493cebd6acdf0' },
    '1141': { kid: 'd49703e538a2545fa2d8d57f34a4d0ba', key: '9ef07c1b359ee137db0493cebd6acdf0' },

    'h2hd': { kid: '8e48435ba038548299ee73fef998535d', key: 'b89d18e54ad2b5576c27c3259db19a3e' },
    'ss2h': { kid: '8e48435ba038548299ee73fef998535d', key: 'b89d18e54ad2b5576c27c3259db19a3e' },
    'star2hindihd': { kid: '8e48435ba038548299ee73fef998535d', key: 'b89d18e54ad2b5576c27c3259db19a3e' },
    '1984': { kid: '8e48435ba038548299ee73fef998535d', key: 'b89d18e54ad2b5576c27c3259db19a3e' },

    'h2sd': { kid: 'f9af22f6d76f5f5d98a35eed7fc35292', key: 'b979fbf840b5c984733d28aaf683762e' },
    'star2hindi': { kid: 'f9af22f6d76f5f5d98a35eed7fc35292', key: 'b979fbf840b5c984733d28aaf683762e' },
    '1985': { kid: 'f9af22f6d76f5f5d98a35eed7fc35292', key: 'b979fbf840b5c984733d28aaf683762e' },

    'ss3': { kid: 'e4e8647eaf0659ac85f61765a5abcdc1', key: 'd749c9b27505beb0e1a8b6c30ca65de6' },
    '1389': { kid: 'e4e8647eaf0659ac85f61765a5abcdc1', key: 'd749c9b27505beb0e1a8b6c30ca65de6' },
    'star3': { kid: 'e4e8647eaf0659ac85f61765a5abcdc1', key: 'd749c9b27505beb0e1a8b6c30ca65de6' },

    'se1hd': { kid: 'cc04426ac28359a7b620934ddbbecb7c', key: '0074c460557b1f21a60fa0aada550e3a' },
    'select1': { kid: 'cc04426ac28359a7b620934ddbbecb7c', key: '0074c460557b1f21a60fa0aada550e3a' },
    'select_1': { kid: 'cc04426ac28359a7b620934ddbbecb7c', key: '0074c460557b1f21a60fa0aada550e3a' },
    'ssselect1': { kid: 'cc04426ac28359a7b620934ddbbecb7c', key: '0074c460557b1f21a60fa0aada550e3a' },
    'starselect1': { kid: 'cc04426ac28359a7b620934ddbbecb7c', key: '0074c460557b1f21a60fa0aada550e3a' },
    '460': { kid: 'cc04426ac28359a7b620934ddbbecb7c', key: '0074c460557b1f21a60fa0aada550e3a' },

    'se1': { kid: 'df07fac4675a597f92cbe2edbffb7c23', key: '0d6b8e6559306e043bf26c7c8ffce7ae' },
    '1123': { kid: 'df07fac4675a597f92cbe2edbffb7c23', key: '0d6b8e6559306e043bf26c7c8ffce7ae' },

    'se2hd': { kid: '2c443dffefb256a5b7a1364cc4af3529', key: '1d78f35200eb5977a95de669788cf128' },
    'select2': { kid: '2c443dffefb256a5b7a1364cc4af3529', key: '1d78f35200eb5977a95de669788cf128' },
    'select_2': { kid: '2c443dffefb256a5b7a1364cc4af3529', key: '1d78f35200eb5977a95de669788cf128' },
    'ssselect2': { kid: '2c443dffefb256a5b7a1364cc4af3529', key: '1d78f35200eb5977a95de669788cf128' },
    'starselect2': { kid: '2c443dffefb256a5b7a1364cc4af3529', key: '1d78f35200eb5977a95de669788cf128' },
    '461': { kid: '2c443dffefb256a5b7a1364cc4af3529', key: '1d78f35200eb5977a95de669788cf128' },

    'se2': { kid: '2b307daa57a75698acfac3e85d4ff8c5', key: 'd3c17909d061caa2e0a9c75e195ae3d4' },
    '1114': { kid: '2b307daa57a75698acfac3e85d4ff8c5', key: 'd3c17909d061caa2e0a9c75e195ae3d4' },

    't1hd': { kid: '2272c0bc6b2e5cb090b1f55996e0026c', key: '943923934de1d5536ab01c67fca8b337' },
    'ss1tam': { kid: '2272c0bc6b2e5cb090b1f55996e0026c', key: '943923934de1d5536ab01c67fca8b337' },
    'star1tamil': { kid: '2272c0bc6b2e5cb090b1f55996e0026c', key: '943923934de1d5536ab01c67fca8b337' },
    '3277': { kid: '2272c0bc6b2e5cb090b1f55996e0026c', key: '943923934de1d5536ab01c67fca8b337' },

    't1sd': { kid: 'a05f788e6082561fad5565ab7457c995', key: '5756af02f8923b1e8767ff375bafb4aa' },
    '1124': { kid: 'a05f788e6082561fad5565ab7457c995', key: '5756af02f8923b1e8767ff375bafb4aa' },

    'te1hd': { kid: 'a56a509011675303900ead16165ba38f', key: 'c4c4c7aec0ff4a3fa0c6d8cb1ae56c30' },
    'ss1tel': { kid: 'a56a509011675303900ead16165ba38f', key: 'c4c4c7aec0ff4a3fa0c6d8cb1ae56c30' },
    'star1telugu': { kid: 'a56a509011675303900ead16165ba38f', key: 'c4c4c7aec0ff4a3fa0c6d8cb1ae56c30' },
    '3278': { kid: 'a56a509011675303900ead16165ba38f', key: 'c4c4c7aec0ff4a3fa0c6d8cb1ae56c30' },

    'te1sd': { kid: '8aa7da0842d65285b23e55619ab0f1c6', key: 'fe01e21ac81a19049d3ba82b5bd33dfa' },
    '1651': { kid: '8aa7da0842d65285b23e55619ab0f1c6', key: 'fe01e21ac81a19049d3ba82b5bd33dfa' },

    'ka1sd': { kid: 'bab01ce8ab695712a5fe390f1b4ffca2', key: '5685130a845e217080b84fc170b67f00' },
    'ss1kan': { kid: 'bab01ce8ab695712a5fe390f1b4ffca2', key: '5685130a845e217080b84fc170b67f00' },
    'star1kannada': { kid: 'bab01ce8ab695712a5fe390f1b4ffca2', key: '5685130a845e217080b84fc170b67f00' },
    '1650': { kid: 'bab01ce8ab695712a5fe390f1b4ffca2', key: '5685130a845e217080b84fc170b67f00' },

    's2hd': { kid: '92cfd893ab8551d59a773afce91fc790', key: '906e0d6c4accf6bdaad9a6167f8ae53a' },
    'ss2tam': { kid: '92cfd893ab8551d59a773afce91fc790', key: '906e0d6c4accf6bdaad9a6167f8ae53a' },
    'star2tamil': { kid: '92cfd893ab8551d59a773afce91fc790', key: '906e0d6c4accf6bdaad9a6167f8ae53a' },
    '3273': { kid: '92cfd893ab8551d59a773afce91fc790', key: '906e0d6c4accf6bdaad9a6167f8ae53a' },

    'te2hd': { kid: '01fc3874f21058dcbf8204f07616ce81', key: '8ba560fb1fcdfeaddfc254965e3a42f6' },
    'ss2tel': { kid: '01fc3874f21058dcbf8204f07616ce81', key: '8ba560fb1fcdfeaddfc254965e3a42f6' },
    'star2telugu': { kid: '01fc3874f21058dcbf8204f07616ce81', key: '8ba560fb1fcdfeaddfc254965e3a42f6' },
    '3274': { kid: '01fc3874f21058dcbf8204f07616ce81', key: '8ba560fb1fcdfeaddfc254965e3a42f6' },

    'ka2sd': { kid: '7af2add2968a56309519ac2680c18f25', key: 'f992a14e0def17ccdfe16f58c4ce56c5' },
    'ss2kan': { kid: '7af2add2968a56309519ac2680c18f25', key: 'f992a14e0def17ccdfe16f58c4ce56c5' },
    'star2kannada': { kid: '7af2add2968a56309519ac2680c18f25', key: 'f992a14e0def17ccdfe16f58c4ce56c5' },
    '1122': { kid: '7af2add2968a56309519ac2680c18f25', key: 'f992a14e0def17ccdfe16f58c4ce56c5' },

    // Sony Sports
    'sten1': { kid: '3394be91407c5fe99d784d2f2d6d4a12', key: '58665e1df41f9f22ed73c56384bb3f51' },
    '162': { kid: '3394be91407c5fe99d784d2f2d6d4a12', key: '58665e1df41f9f22ed73c56384bb3f51' },
    'ten1': { kid: '3394be91407c5fe99d784d2f2d6d4a12', key: '58665e1df41f9f22ed73c56384bb3f51' },
    'ten1hd': { kid: '3394be91407c5fe99d784d2f2d6d4a12', key: '58665e1df41f9f22ed73c56384bb3f51' },

    'sten2': { kid: '671ce7c8ccc95e0a95cba0d12831d12e', key: '175d284c9647b6feb379e7c1650a4f82' },
    '891': { kid: '671ce7c8ccc95e0a95cba0d12831d12e', key: '175d284c9647b6feb379e7c1650a4f82' },
    'ten2': { kid: '671ce7c8ccc95e0a95cba0d12831d12e', key: '175d284c9647b6feb379e7c1650a4f82' },
    'ten2hd': { kid: '671ce7c8ccc95e0a95cba0d12831d12e', key: '175d284c9647b6feb379e7c1650a4f82' },

    'sten3': { kid: '68318f7c97c55ba6ab8d0398a88fed3e', key: 'd312fb3325b4eb9462b4a0d2b6794adf' },
    '892': { kid: '68318f7c97c55ba6ab8d0398a88fed3e', key: 'd312fb3325b4eb9462b4a0d2b6794adf' },
    'ten3': { kid: '68318f7c97c55ba6ab8d0398a88fed3e', key: 'd312fb3325b4eb9462b4a0d2b6794adf' },
    'ten3hd': { kid: '68318f7c97c55ba6ab8d0398a88fed3e', key: 'd312fb3325b4eb9462b4a0d2b6794adf' },
    'sony3': { kid: '68318f7c97c55ba6ab8d0398a88fed3e', key: 'd312fb3325b4eb9462b4a0d2b6794adf' },

    'stent': { kid: '0df5f800775c5979ab8aeaff28ee674b', key: '47dd1b9c8d4049760059aab27bddf1cb' },
    '3514': { kid: '0df5f800775c5979ab8aeaff28ee674b', key: '47dd1b9c8d4049760059aab27bddf1cb' },
    '3397': { kid: '0df5f800775c5979ab8aeaff28ee674b', key: '47dd1b9c8d4049760059aab27bddf1cb' },
    'ten4': { kid: '0df5f800775c5979ab8aeaff28ee674b', key: '47dd1b9c8d4049760059aab27bddf1cb' },
    'ten4hd': { kid: '0df5f800775c5979ab8aeaff28ee674b', key: '47dd1b9c8d4049760059aab27bddf1cb' },
    's4tamil': { kid: '0df5f800775c5979ab8aeaff28ee674b', key: '47dd1b9c8d4049760059aab27bddf1cb' },

    'stentu': { kid: '494a8a050ecc5a22adab6dc304ead1b4', key: '9b3bbf2ccb71a876a2bbeb9cde00d7bf' },
    '1773': { kid: '494a8a050ecc5a22adab6dc304ead1b4', key: '9b3bbf2ccb71a876a2bbeb9cde00d7bf' },
    '3398': { kid: '494a8a050ecc5a22adab6dc304ead1b4', key: '9b3bbf2ccb71a876a2bbeb9cde00d7bf' },
    'ten4telugu': { kid: '494a8a050ecc5a22adab6dc304ead1b4', key: '9b3bbf2ccb71a876a2bbeb9cde00d7bf' },
    's4telugu': { kid: '494a8a050ecc5a22adab6dc304ead1b4', key: '9b3bbf2ccb71a876a2bbeb9cde00d7bf' },

    'sten5': { kid: 'd2d8709de11d5955b60c57d3c955733e', key: '7655200b24bf82808fb8addf2f02847b' },
    '155': { kid: 'd2d8709de11d5955b60c57d3c955733e', key: '7655200b24bf82808fb8addf2f02847b' },
    '3399': { kid: 'd2d8709de11d5955b60c57d3c955733e', key: '7655200b24bf82808fb8addf2f02847b' },
    'ten5': { kid: 'd2d8709de11d5955b60c57d3c955733e', key: '7655200b24bf82808fb8addf2f02847b' },
    'ten5hd': { kid: 'd2d8709de11d5955b60c57d3c955733e', key: '7655200b24bf82808fb8addf2f02847b' },
    's5hd': { kid: 'd2d8709de11d5955b60c57d3c955733e', key: '7655200b24bf82808fb8addf2f02847b' },

    // Premier Sports 1 & 2
    'sc_premier': { kid: '1444f4235529f183f0a5a486befe9cdb', key: 'e5e3fec67a1bb3472a2089c8a0a2557f' },
    'sc_premier1': { kid: '1444f4235529f183f0a5a486befe9cdb', key: 'e5e3fec67a1bb3472a2089c8a0a2557f' },
    'sc_premier_1': { kid: '1444f4235529f183f0a5a486befe9cdb', key: 'e5e3fec67a1bb3472a2089c8a0a2557f' },
    'sc_prem1': { kid: '1444f4235529f183f0a5a486befe9cdb', key: 'e5e3fec67a1bb3472a2089c8a0a2557f' },
    'prem1': { kid: '1444f4235529f183f0a5a486befe9cdb', key: 'e5e3fec67a1bb3472a2089c8a0a2557f' },
    'premier1': { kid: '1444f4235529f183f0a5a486befe9cdb', key: 'e5e3fec67a1bb3472a2089c8a0a2557f' },
    'premiersports1': { kid: '1444f4235529f183f0a5a486befe9cdb', key: 'e5e3fec67a1bb3472a2089c8a0a2557f' },
    'sc_premier2': { kid: '1a5df53609ebc9857898c490f4724918', key: '77f62980d582ec541280796acf8b2d19' },
    'sc_premier_2': { kid: '1a5df53609ebc9857898c490f4724918', key: '77f62980d582ec541280796acf8b2d19' },
    'sc_prem2': { kid: '1a5df53609ebc9857898c490f4724918', key: '77f62980d582ec541280796acf8b2d19' },
    'prem2': { kid: '1a5df53609ebc9857898c490f4724918', key: '77f62980d582ec541280796acf8b2d19' },
    'ps2': { kid: '1a5df53609ebc9857898c490f4724918', key: '77f62980d582ec541280796acf8b2d19' },
    'premier2': { kid: '1a5df53609ebc9857898c490f4724918', key: '77f62980d582ec541280796acf8b2d19' },
    'premiersports2': { kid: '1a5df53609ebc9857898c490f4724918', key: '77f62980d582ec541280796acf8b2d19' }
};

function isCookieValid(cookieStr, expireVal) {
    if (!cookieStr && !expireVal) return false;
    const nowSec = Math.floor(Date.now() / 1000);
    let expSec = 0;
    if (typeof expireVal === 'number' && expireVal > 0) {
        expSec = expireVal;
    } else if (cookieStr) {
        const m = cookieStr.match(/exp=(\d+)/);
        if (m) expSec = parseInt(m[1], 10);
    }
    if (expSec > 0) {
        return expSec > (nowSec + 60);
    }
    return Boolean(cookieStr && cookieStr.length > 20);
}

async function fetchDynamicCookie(workerKey) {
    try {
        const text = await fetchEndpoint('https://rough-snowflake-13bc.himanshuvalverde.workers.dev/?id=' + encodeURIComponent(workerKey));
        const data = JSON.parse(text);
        if (data && data.cookie) return data.cookie.trim();
    } catch(e) {}

    if (workerKey === 'ss1h') {
        try {
            const text = await fetchEndpoint('https://allrounder2-0.pages.dev/api/Hindi.json');
            const data = JSON.parse(text);
            if (data && data.cookie) return data.cookie.trim();
        } catch(e) {}
    }
    if (workerKey === 'ss1') {
        try {
            const text = await fetchEndpoint('https://allrounder2-0.pages.dev/api/sony-3.json');
            const data = JSON.parse(text);
            if (data && data.cookie) return data.cookie.trim();
        } catch(e) {}
    }

    return null;
}

function parseZioM3U(m3uContent) {
    const lines = m3uContent.split('\n');
    const channels = [];
    let currentInf = null;
    let headersLine = '';
    let licenseKeyLine = '';

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line.startsWith('#EXTINF')) {
            currentInf = line;
            headersLine = '';
            licenseKeyLine = '';
        } else if (line.includes('license_key=')) {
            licenseKeyLine = line;
        } else if (line.includes('Cookie=')) {
            headersLine = line;
        } else if (line.startsWith('http') && currentInf) {
            const streamUrl = line;
            const idMatch = currentInf.match(/tvg-id="([^"]+)"/);
            const rawId = idMatch ? idMatch[1] : '';
            const nameParts = currentInf.split(',');
            const name = nameParts.length > 1 ? nameParts[1].trim() : '';
            const logoMatch = currentInf.match(/tvg-logo="([^"]+)"/);
            const logo = logoMatch ? logoMatch[1] : '';

            let cookie = '';
            let expire = 0;
            if (headersLine) {
                const cookieMatch = headersLine.match(/Cookie=([^\r\n&]+)/);
                if (cookieMatch) {
                    cookie = cookieMatch[1].trim();
                    const expMatch = cookie.match(/exp=(\d+)/);
                    if (expMatch) expire = parseInt(expMatch[1], 10);
                }
            }

            const keysList = [];
            let primaryKid = '';
            let primaryKey = '';
            if (licenseKeyLine) {
                const rawKeys = licenseKeyLine.replace('#KODIPROP:inputstream.adaptive.license_key=', '').trim();
                const pairs = rawKeys.split(',');
                pairs.forEach(pair => {
                    const [k, v] = pair.split(':');
                    if (k && v) {
                        keysList.push(`${k.trim().toLowerCase()}:${v.trim().toLowerCase()}`);
                        if (!primaryKid) {
                            primaryKid = k.trim().toLowerCase();
                            primaryKey = v.trim().toLowerCase();
                        }
                    }
                });
            }

            if (rawId && streamUrl) {
                const aliases = JIO_MAP[rawId] || [rawId];
                const primaryId = aliases[0];

                const channelObj = {
                    id: primaryId,
                    name: name,
                    channel_id: rawId,
                    aliases: aliases,
                    stream_url: streamUrl,
                    key_id: primaryKid,
                    key: primaryKey,
                    sonuxs: keysList,
                    cookie: cookie,
                    cookie_expire: expire,
                    logo: logo
                };
                channels.push(channelObj);

                aliases.forEach(alias => {
                    if (alias !== primaryId) {
                        channels.push({
                            ...channelObj,
                            id: alias
                        });
                    }
                });
            }
            currentInf = null;
        }
    }
    return channels;
}

function fetchEndpoint(url) {
    return new Promise((resolve, reject) => {
        const client = url.startsWith('https') ? https : http;
        const req = client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' }, timeout: 15000 }, (res) => {
            if (res.statusCode < 200 || res.statusCode >= 300) {
                return reject(new Error(`Status ${res.statusCode}`));
            }
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        });
        req.on('error', reject);
        req.on('timeout', () => { req.destroy(); reject(new Error('Timeout')); });
    });
}

async function syncSports() {
    console.log('🔄 Syncing Sports & Sony/Star TV Channels from upstream...');
    for (const src of SPORTS_SOURCES) {
        try {
            console.log(`Fetching Sports from upstream: ${src}`);
            const text = await fetchEndpoint(src);
            let channels = [];
            if (src.endsWith('.m3u') || text.includes('#EXTM3U')) {
                channels = parseZioM3U(text);
            } else {
                const data = JSON.parse(text);
                channels = data.channels || data.data || (Array.isArray(data) ? data : []);
            }

            if (Array.isArray(channels) && channels.length > 0) {
                // Auto-refresh Star Sports live cookies if expired or expiring within 30 minutes
                const nowSec = Math.floor(Date.now() / 1000);
                const cookieCache = {};
                let refreshedCookiesCount = 0;
                // Sync fresh tokens from sonujson (Star Sports Select 1/2 HD & SD, etc.)
                try {
                    console.log('Fetching live backup sports tokens from https://sonujson-v5.pages.dev/Data/sports.json ...');
                    const sonuRaw = await fetchEndpoint('https://sonujson-v5.pages.dev/Data/sports.json');
                    const sonuParsed = JSON.parse(sonuRaw);
                    const sonuChannels = sonuParsed.channels || [];
                    const sonuMap = new Map();
                    sonuChannels.forEach(c => {
                        if (c.id) sonuMap.set(c.id.toLowerCase(), c);
                        if (c.channel_id) sonuMap.set(String(c.channel_id).toLowerCase(), c);
                    });

                    for (const ch of channels) {
                        const aliases = ch.aliases || (ch.channel_id && JIO_MAP[ch.channel_id]) || [ch.id || '', ch.channel_id || ''];
                        let match = null;
                        for (const a of aliases) {
                            if (a && sonuMap.has(String(a).toLowerCase())) {
                                match = sonuMap.get(String(a).toLowerCase());
                                break;
                            }
                        }
                        if (match) {
                            const isFreshCookie = match.cookie && match.cookie_expire && match.cookie_expire > nowSec;
                            if (isFreshCookie && (!ch.cookie_expire || match.cookie_expire >= ch.cookie_expire)) {
                                ch.cookie = match.cookie;
                                ch.cookie_expire = match.cookie_expire;
                                refreshedCookiesCount++;
                            }
                            if (match.stream_url) {
                                ch.stream_url = match.stream_url;
                            }
                            if (match.sonuxs && match.sonuxs.length > 0) {
                                ch.sonuxs = match.sonuxs;
                            } else if (match.key_id && match.key) {
                                ch.key_id = match.key_id.toLowerCase();
                                ch.key = match.key.toLowerCase();
                                ch.sonuxs = [`${ch.key_id}:${ch.key}`];
                            }
                            if (match.key_id) ch.key_id = match.key_id.toLowerCase();
                            if (match.key) ch.key = match.key.toLowerCase();
                        }
                    }
                } catch(e) {
                    console.log('Note: sonujson live token merge skipped:', e.message);
                }


                for (const ch of channels) {
                    const id = String(ch.id || ch.channel_id || '').toLowerCase();
                    const workerKey = DYNAMIC_COOKIE_MAP[id];
                    if (workerKey) {
                        const isExpiring = !ch.cookie || !ch.cookie_expire || ch.cookie_expire < (nowSec + 1800);
                        if (isExpiring) {
                            if (cookieCache[workerKey] === undefined) {
                                console.log(`Refreshing live cookie for ${workerKey}...`);
                                const fresh = await fetchDynamicCookie(workerKey);
                                if (fresh) {
                                    const expMatch = fresh.match(/exp=(\d+)/);
                                    cookieCache[workerKey] = {
                                        cookie: fresh,
                                        expire: expMatch ? parseInt(expMatch[1], 10) : 0
                                    };
                                } else {
                                    cookieCache[workerKey] = null;
                                }
                            }
                            if (cookieCache[workerKey]) {
                                ch.cookie = cookieCache[workerKey].cookie;
                                ch.cookie_expire = cookieCache[workerKey].expire;
                                refreshedCookiesCount++;
                            }
                        }
                    }
                }
                if (refreshedCookiesCount > 0) {
                    console.log(`✅ Refreshed live cookies for ${refreshedCookiesCount} channel entries!`);
                }

                const dataDir = path.join(__dirname, '..', 'data');
                if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
                const filePath = path.join(dataDir, 'sports.json');
                const m3uPath = path.join(dataDir, 'sports.m3u');

                function getSportsSignature(chs) {
                    return chs.map(c => `${c.id || c.channel_id || ''}|${c.stream_url || ''}|${c.raw_url || ''}|${(c.sonuxs || []).join(',')}|${c.cookie || ''}`).sort().join('\n');
                }

                let hasChanged = true;
                if (fs.existsSync(filePath) && fs.existsSync(m3uPath)) {
                    try {
                        const oldData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
                        const oldSig = getSportsSignature(oldData.channels || []);
                        const newSig = getSportsSignature(channels);
                        const hoursSince = (Date.now() - fs.statSync(m3uPath).mtimeMs) / (1000 * 60 * 60);
                        if (oldSig === newSig && hoursSince < 6) {
                            hasChanged = false;
                        }
                    } catch (e) {
                        hasChanged = true;
                    }
                }

                if (!hasChanged) {
                    console.log('⚡ Sports & TV channels are unchanged. Keeping existing playlist (no dummy commit).');
                    return true;
                }

                const payload = {
                    last_updated: new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }) + ' IST',
                    source: src,
                    channels: channels
                };
                fs.writeFileSync(filePath, JSON.stringify(payload, null, 2), 'utf8');
                console.log(`✅ Saved ${channels.length} channels from upstream to ${filePath}`);

                // Also write clean sports.m3u playlist for IPTV and external players
                let m3uOut = '#EXTM3U x-tvg-url="https://www.tsepg.cf/epg.xml.gz"\n';
                m3uOut += '# Written and Directed by ✨ A R Y A N ✨\n';
                m3uOut += '# Join us on Telegram: https://t.me/aryanstreams\n';
                m3uOut += `#DATE:- ${payload.last_updated}\n\n`;

                const seenUrls = new Set();
                channels.forEach(ch => {
                    if (!ch.stream_url || seenUrls.has(ch.stream_url)) return;
                    seenUrls.add(ch.stream_url);

                    m3uOut += `#EXTINF:-1 tvg-id="${ch.channel_id || ch.id}" tvg-name="${ch.name}" tvg-logo="${ch.logo || ''}" group-title="Live Sports",${ch.name}\n`;
                    m3uOut += `#KODIPROP:inputstream=inputstream.adaptive\n`;
                    m3uOut += `#KODIPROP:inputstream.adaptive.manifest_type=mpd\n`;
                    if (ch.sonuxs && ch.sonuxs.length > 0) {
                        m3uOut += `#KODIPROP:inputstream.adaptive.license_type=clearkey\n`;
                        m3uOut += `#KODIPROP:inputstream.adaptive.license_key=${ch.sonuxs.join(',')}\n`;
                    }
                    if (ch.cookie) {
                        m3uOut += `#EXTHTTP:{"User-Agent": "Virat", "Referer": "https://www.jiotv.com/", "Origin": "https://www.jiotv.com/", "Cookie": "${ch.cookie}"}\n`;
                    }
                    m3uOut += `${ch.stream_url}\n\n`;
                });
                fs.writeFileSync(m3uPath, m3uOut, 'utf8');
                console.log(`✅ Saved sports.m3u playlist to ${m3uPath}`);

                return true;
            }
        } catch (err) {
            console.warn(`⚠️ Failed to fetch Sports from ${src}:`, err.message);
        }
    }
    return false;
}

const CRICKET_CHANNELS = {
    willow1: {
        name: 'Willow Cricket HD (Server 1)',
        url: 'https://trend48.st/live-tv?ch=willow-usa'
    },
    willow2: {
        name: 'Willow Cricket 2 (Server 2)',
        url: 'https://trend48.st/live-tv?ch=willowxtra-usa'
    },
    willow_usa: {
        name: 'Willow USA (Trend48)',
        url: 'https://trend48.st/live-tv?ch=willow-usa'
    },
    sky_cricket: {
        name: 'Sky Sports Cricket (UK)',
        url: 'https://trend48.st/live-tv?ch=skysportscricket-uk'
    },
    fox_cricket: {
        name: 'Fox Sports 501 (Cricket)',
        url: 'https://trend48.st/live-tv?ch=foxsports501-au'
    },
    supersport_cricket: {
        name: 'SuperSport Cricket (ZA)',
        url: 'https://trend48.st/live-tv?ch=supersportcricket-za'
    },
    asports: {
        name: 'A Sports HD (Pakistan)',
        url: 'https://trend48.st/live-tv?ch=asports-pk'
    },
    tensports_pk: {
        name: 'Ten Sports PK',
        url: 'https://trend48.st/live-tv?ch=tensports-pk'
    },
    sony_sports: {
        name: 'Sony Sports Ten 1 HD',
        url: 'https://trend48.st/live-tv?ch=sonyten1-in'
    },
    sony_sports_3: {
        name: 'Sony Sports Ten 3 HD',
        url: 'https://trend48.st/live-tv?ch=sonyten3-in'
    },
    sony_sports_5: {
        name: 'Sony Sports Ten 5 HD',
        url: 'https://trend48.st/live-tv?ch=sonyten5-in'
    },
    ptv_sports: {
        name: 'PTV Sports HD',
        url: 'https://trend48.st/live-tv?ch=ptvsports-pk'
    },
    star_sports1: {
        name: 'Star Sports 1 HD',
        url: 'https://trend48.st/live-tv?ch=starsports1-in'
    }
};

const FOOTBALL_CHANNELS = {
    sky_pl: {
        name: 'Sky Sports Premier League (Server 1)',
        url: 'https://trend48.st/live-tv?ch=skysportspremierleague-uk'
    },
    sky_main: {
        name: 'Sky Sports Main Event (Server 2)',
        url: 'https://trend48.st/live-tv?ch=skysportsmainevent-uk'
    },
    tnt1: {
        name: 'TNT Sports 1 (Server 3)',
        url: 'https://trend48.st/live-tv?ch=tntsports1-uk'
    },
    bein1fr: {
        name: 'beIN Sports 1 FR (Server 4)',
        url: 'https://trend48.st/live-tv?ch=beinsports1-fr'
    },
    movistar_laliga: {
        name: 'Movistar LaLiga (Server 5)',
        url: 'https://trend48.st/live-tv?ch=movistarlaliga-es'
    }
};

const GENERIC_CHANNELS = {
    srv1: { name: 'Sky Sports Main Event (Server 1)', url: 'https://trend48.st/live-tv?ch=skysportsmainevent-uk' },
    srv2: { name: 'TNT Sports 1 (Server 2)', url: 'https://trend48.st/live-tv?ch=tntsports1-uk' },
    srv3: { name: 'Willow Cricket HD (Server 3)', url: 'https://trend48.st/live-tv?ch=willow-usa' },
    srv4: { name: 'beIN Sports 1 FR (Server 4)', url: 'https://trend48.st/live-tv?ch=beinsports1-fr' },
    srv5: { name: 'Sony Sports Ten 1 HD (Server 5)', url: 'https://trend48.st/live-tv?ch=sonyten1-in' }
};

function isWillow1Linear(u) {
    if (!u) return false;
    if (u.includes('c3BkOGdwb2gtNjU4Ng') || u.includes('spd8gpoh-6586')) return true;
    try {
        if (u.includes('id=')) {
            const b64 = u.split('id=')[1].split('&')[0];
            const dec = Buffer.from(b64, 'base64').toString('utf8');
            return dec.includes('spd8gpoh-6586');
        }
    } catch(e) {}
    return false;
}

function normalizeWillowMatch(m) {
    const alpha = m.stream_url_alpha || {};
    const bravo = m.stream_url_bravo || {};
    const rawCnp = m.CnpTV || {};

    const fastly1 = rawCnp.fastly_server1 || alpha['Fistly Server'] || alpha['Fastly Server'] || '';
    const amazon1 = rawCnp.amazon_server1 || alpha['Amazon Server'] || '';
    const akamai1 = rawCnp.akamai_server1 || alpha['Akamai Server'] || '';
    const cf1 = rawCnp.cloudfront_server1 || alpha['Cloudfront Server 1'] || alpha['CloudFront Server 1'] || alpha['Cloudfront Server'] || '';

    const fastly2 = rawCnp.fastly_server2 || bravo['Fistly Server'] || bravo['Fastly Server'] || '';
    const amazon2 = rawCnp.amazon_server2 || bravo['Amazon Server'] || '';
    const akamai2 = rawCnp.akamai_server2 || bravo['Akamai Server'] || '';
    const cf2 = rawCnp.cloudfront_server2 || bravo['Cloudfront Server 1'] || bravo['CloudFront Server 1'] || bravo['Cloudfront Server'] || '';

    const cnp = {
        fastly_server1: fastly1,
        amazon_server1: amazon1,
        akamai_server1: akamai1,
        cloudfront_server1: cf1,
        fastly_server2: fastly2,
        amazon_server2: amazon2,
        akamai_server2: akamai2,
        cloudfront_server2: cf2
    };

    let rawStreams = Array.isArray(m.streams) ? m.streams.slice() : [];
    if (m.url && rawStreams.length === 0) rawStreams.push({ name: 'Live Stream', url: m.url });
    const cleanId = (m.id || m.match_id || '').replace(/^match-/, '');
    const title = m.event_name || m.name || m.title || m.synopsis || 'Live Cricket Event';
    const image = m.image || m.cover_image || m.poster || '';

    // Check specific matches to avoid false blanket linear channel assignment
    const isAusVsSa = /south africa.*australia|australia.*south africa/i.test(title);
    const isPakVsSl = /pakistan.*sri lanka|sri lanka.*pakistan/i.test(title);
    const isPakVsEng = /pakistan.*england|england.*pakistan/i.test(title);
    const isIndVsZim = /india.*zimbabwe|zimbabwe.*india/i.test(title);
    const isNzVsInd = /new zealand.*india|india.*new zealand/i.test(title);
    const isWbbl = /wbbl|womens big bash|big bash/i.test(title);
    const isCricket = isAusVsSa || isPakVsSl || isPakVsEng || isIndVsZim || isNzVsInd || isWbbl || /cricket|t20|odi|test/i.test(title);
    const isFootball = /vs.?|fc|united|city|everton|aston villa|arsenal|chelsea|liverpool|madrid|barcelona|premier league/i.test(title) && !isCricket;

    // Filter out PPV.ST and old adware links
    rawStreams = rawStreams.filter(st => {
        if (!st || !st.url) return false;
        if (st.url.includes('ppv.st') || st.url.includes('bintv-sources') || st.url.includes('pages.dev')) return false;
        if (isWillow1Linear(st.url)) {
            return isAusVsSa;
        }
        return true;
    });

    if (isAusVsSa) {
        const dedicated = [
            CRICKET_CHANNELS.willow_usa,
            CRICKET_CHANNELS.fox_cricket,
            CRICKET_CHANNELS.supersport_cricket,
            CRICKET_CHANNELS.sky_cricket,
            CRICKET_CHANNELS.star_sports1
        ];
        dedicated.forEach(ds => {
            if (!rawStreams.some(s => s.url === ds.url)) rawStreams.push(ds);
        });
    } else if (isPakVsSl) {
        const dedicated = [
            CRICKET_CHANNELS.willow2,
            CRICKET_CHANNELS.asports,
            CRICKET_CHANNELS.tensports_pk,
            CRICKET_CHANNELS.sky_cricket,
            CRICKET_CHANNELS.sony_sports,
            CRICKET_CHANNELS.ptv_sports
        ];
        dedicated.forEach(ds => {
            if (!rawStreams.some(s => s.url === ds.url)) rawStreams.push(ds);
        });
    } else if (isPakVsEng) {
        const dedicated = [
            CRICKET_CHANNELS.sky_cricket,
            CRICKET_CHANNELS.willow_usa,
            CRICKET_CHANNELS.asports,
            CRICKET_CHANNELS.tensports_pk,
            CRICKET_CHANNELS.sony_sports
        ];
        dedicated.forEach(ds => {
            if (!rawStreams.some(s => s.url === ds.url)) rawStreams.push(ds);
        });
    } else if (isIndVsZim) {
        const dedicated = [
            CRICKET_CHANNELS.sony_sports,
            CRICKET_CHANNELS.sony_sports_3,
            CRICKET_CHANNELS.sony_sports_5,
            CRICKET_CHANNELS.willow_usa
        ];
        dedicated.forEach(ds => {
            if (!rawStreams.some(s => s.url === ds.url)) rawStreams.push(ds);
        });
    } else if (isNzVsInd) {
        const dedicated = [
            CRICKET_CHANNELS.willow_usa,
            CRICKET_CHANNELS.sky_cricket,
            CRICKET_CHANNELS.sony_sports,
            CRICKET_CHANNELS.fox_cricket
        ];
        dedicated.forEach(ds => {
            if (!rawStreams.some(s => s.url === ds.url)) rawStreams.push(ds);
        });
    } else if (isWbbl) {
        const dedicated = [
            CRICKET_CHANNELS.fox_cricket,
            CRICKET_CHANNELS.sky_cricket,
            CRICKET_CHANNELS.willow_usa,
            CRICKET_CHANNELS.sony_sports,
            CRICKET_CHANNELS.star_sports1
        ];
        dedicated.forEach(ds => {
            if (!rawStreams.some(s => s.url === ds.url)) rawStreams.push(ds);
        });
    } else if (isFootball) {
        const dedicated = [
            FOOTBALL_CHANNELS.sky_pl,
            FOOTBALL_CHANNELS.sky_main,
            FOOTBALL_CHANNELS.tnt1,
            FOOTBALL_CHANNELS.bein1fr,
            FOOTBALL_CHANNELS.movistar_laliga
        ];
        dedicated.forEach(ds => {
            if (!rawStreams.some(s => s.url === ds.url)) rawStreams.push(ds);
        });
    } else if (rawStreams.length === 0) {
        // Generic fallback with 5 channels
        const dedicated = [
            GENERIC_CHANNELS.srv1,
            GENERIC_CHANNELS.srv2,
            GENERIC_CHANNELS.srv3,
            GENERIC_CHANNELS.srv4,
            GENERIC_CHANNELS.srv5
        ];
        dedicated.forEach(ds => {
            if (!rawStreams.some(s => s.url === ds.url)) rawStreams.push(ds);
        });
    }

    const hasCnp = Object.values(cnp).some(v => typeof v === 'string' && v.trim().length > 0 && !v.includes('pages.dev'));
    const isSeriesActive = isAusVsSa || isPakVsSl || isPakVsEng || isIndVsZim || isNzVsInd || isWbbl;
    const isLive = isSeriesActive || hasCnp || rawStreams.length > 0;
    const status = isLive ? 'LIVE' : (m.status ? m.status.toUpperCase() : 'UPCOMING');

    // Preserve exact match time from upstream (IST / UTC)
    let time = m.time || m.start_time || m.date || (isLive ? 'LIVE NOW' : 'Upcoming');
    if (m.time && !m.time.toLowerCase().startsWith('live now') && m.time.toLowerCase() !== 'upcoming') {
        time = m.time;
    } else if (isAusVsSa && (!m.time || m.time === 'Upcoming')) {
        time = 'LIVE NOW • Test Series';
    } else if (isPakVsSl && (!m.time || m.time === 'Upcoming')) {
        time = 'LIVE NOW • ODI Tri-Series';
    } else if (isPakVsEng && (!m.time || m.time === 'Upcoming')) {
        time = 'LIVE NOW • ODI Tri-Series';
    } else if (isIndVsZim && (!m.time || m.time === 'Upcoming')) {
        time = 'LIVE NOW • Bilateral Series';
    } else if (isNzVsInd && (!m.time || m.time === 'Upcoming')) {
        time = 'LIVE NOW • Prime Video';
    }

    const sport = m.sport || m.category || (isCricket ? 'Cricket' : (isFootball ? 'Football' : 'Sports'));
    const drmKey = m.drm_key || '';

    return {
        id: cleanId,
        match_id: cleanId,
        event_name: title,
        title: title,
        synopsis: m.synopsis || title,
        image: image,
        cover_image: image,
        status: status,
        time: time,
        sport: sport,
        drm_key: drmKey,
        streams: rawStreams,
        CnpTV: cnp,
        stream_url_alpha: alpha,
        stream_url_bravo: bravo
    };
}

async function syncWillow() {
    console.log('🔄 Syncing Willow & Cricbuzz Live Matches from multiple redundant upstreams...');
    const matchMap = new Map();
    let sourcesSucceeded = 0;

    for (const src of WILLOW_SOURCES) {
        try {
            console.log(`Fetching Willow from upstream: ${src}`);
            const text = await fetchEndpoint(src);
            const data = JSON.parse(text);
            let rawList = data.Matches || data.matches || (Array.isArray(data) ? data : []);
            if ((!rawList || rawList.length === 0) && data && (data['Live Events'] || data['Upcoming Events'])) {
                rawList = (data['Live Events'] || []).concat(data['Upcoming Events'] || []).filter(e => e.category === 'Cricket' || /cricket|test|odi|t20/i.test(e.name || ''));
            }
            if (Array.isArray(rawList) && rawList.length > 0) {
                sourcesSucceeded++;
                rawList.forEach(m => {
                    const norm = normalizeWillowMatch(m);
                    if (!norm.id) return;
                    if (!matchMap.has(norm.id)) {
                        matchMap.set(norm.id, norm);
                    } else {
                        const existing = matchMap.get(norm.id);
                        Object.keys(norm.CnpTV).forEach(k => {
                            if (!existing.CnpTV[k] && norm.CnpTV[k]) {
                                existing.CnpTV[k] = norm.CnpTV[k];
                            }
                        });
                        if (!existing.drm_key && norm.drm_key) existing.drm_key = norm.drm_key;
                        if (norm.streams && norm.streams.length > 0) {
                            norm.streams.forEach(st => {
                                if (isWillow1Linear(st.url) && !/south africa.*australia|australia.*south africa/i.test(existing.event_name)) return;
                                if (!existing.streams.some(es => es.url === st.url)) {
                                    existing.streams.push(st);
                                }
                            });
                        }
                        if (!/south africa.*australia|australia.*south africa/i.test(existing.event_name)) {
                            existing.streams = (existing.streams || []).filter(st => !isWillow1Linear(st.url));
                        }
                        if (!existing.image && norm.image) {
                            existing.image = norm.image;
                            existing.cover_image = norm.image;
                        }
                        if (norm.status === 'LIVE') existing.status = 'LIVE';
                        if (norm.time && norm.time !== 'Upcoming' && norm.time !== 'LIVE NOW' && (!existing.time || existing.time === 'Upcoming' || existing.time === 'LIVE NOW')) {
                            existing.time = norm.time;
                        }
                    }
                });
            }
        } catch (err) {
            console.warn(`⚠️ Upstream ${src} temporarily unavailable:`, err.message);
        }
    }

    const matches = Array.from(matchMap.values());
    if (matches.length > 0) {
        const dataDir = path.join(__dirname, '..', 'data');
        if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
        const filePath = path.join(dataDir, 'willow.json');

        function getWillowSignature(ms) {
            return ms.map(m => `${m.id || m.match_id || ''}|${JSON.stringify(m.streams || [])}|${JSON.stringify(m.CnpTV || {})}|${m.drm_key || ''}`).sort().join('\n');
        }

        let hasChanged = true;
        if (fs.existsSync(filePath)) {
            try {
                const oldData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
                const oldSig = getWillowSignature(oldData.Matches || []);
                const newSig = getWillowSignature(matches);
                const hoursSince = (Date.now() - fs.statSync(filePath).mtimeMs) / (1000 * 60 * 60);
                if (oldSig === newSig && hoursSince < 6) {
                    hasChanged = false;
                }
            } catch (e) {
                hasChanged = true;
            }
        }

        if (!hasChanged) {
            console.log('⚡ Willow matches & stream links are unchanged. Keeping existing feed (no dummy commit).');
            return true;
        }

        const payload = {
            last_updated: new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }) + ' IST',
            sources_checked: WILLOW_SOURCES.length,
            sources_active: sourcesSucceeded,
            Matches: matches
        };
        fs.writeFileSync(filePath, JSON.stringify(payload, null, 2), 'utf8');
        console.log(`✅ Saved ${matches.length} unified matches from ${sourcesSucceeded} active sources to ${filePath}`);
        return true;
    }
    return false;
}

async function syncSonyM3U8() {
    console.log('🔄 Syncing Sony Liv Direct M3U8 Feeds (Universal iOS & PC)...');
    for (const src of SONY_M3U8_SOURCES) {
        try {
            console.log(`Fetching Sony M3U8 from: ${src}`);
            const body = await fetchEndpoint(src);
            const lines = body.split('\n');
            const channels = [];
            
            for (let i = 0; i < lines.length; i++) {
                if (lines[i].startsWith('#EXTINF:')) {
                    const idMatch = lines[i].match(/tvg-id="([^"]+)"/);
                    const nameParts = lines[i].split(',');
                    const name = nameParts.length > 1 ? nameParts[1].trim() : '';
                    let streamUrl = '';
                    for (let j = i + 1; j < lines.length; j++) {
                        const trimmed = lines[j].trim();
                        if (trimmed && !trimmed.startsWith('#')) {
                            streamUrl = trimmed;
                            break;
                        }
                    }
                    if (idMatch && streamUrl) {
                        channels.push({
                            id: idMatch[1].trim(),
                            name: name,
                            raw_url: streamUrl,
                            proxied_url: 'https://stream-through-spark.lovable.app/api/proxy?u=' + encodeURIComponent(streamUrl),
                            backup_proxied_url: 'https://aryanstreams.pages.dev/api/public/px/sony?url=' + encodeURIComponent(streamUrl)
                        });
                    }
                }
            }

            if (channels.length > 0) {
                const dataDir = path.join(__dirname, '..', 'data');
                if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
                const filePath = path.join(dataDir, 'sony_m3u8.json');

                function getSonySignature(chs) {
                    return chs.map(c => `${c.id || ''}|${c.raw_url || ''}`).sort().join('\n');
                }

                let hasChanged = true;
                if (fs.existsSync(filePath)) {
                    try {
                        const oldData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
                        const oldSig = getSonySignature(oldData.channels || []);
                        const newSig = getSonySignature(channels);
                        const hoursSince = (Date.now() - fs.statSync(filePath).mtimeMs) / (1000 * 60 * 60);
                        if (oldSig === newSig && hoursSince < 6) {
                            hasChanged = false;
                        }
                    } catch (e) {
                        hasChanged = true;
                    }
                }

                if (!hasChanged) {
                    console.log('⚡ Sony M3U8 channels are unchanged. Keeping existing feed (no dummy commit).');
                    return true;
                }

                const payload = {
                    last_updated: new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }) + ' IST',
                    source: src,
                    channels: channels
                };
                fs.writeFileSync(filePath, JSON.stringify(payload, null, 2), 'utf8');
                console.log(`✅ Saved ${channels.length} Sony M3U8 channels to ${filePath}`);
                return true;
            }
        } catch (err) {
            console.warn(`⚠️ Failed to fetch Sony M3U8 from ${src}:`, err.message);
        }
    }
    return false;
}


async function syncEvents() {
    console.log('🔄 Syncing own live events (Football & Cricket)...');
    try {
        const fetchJson = async (url) => {
            try {
                const text = await fetchEndpoint(url);
                return JSON.parse(text);
            } catch (e) {
                return null;
            }
        };

        const [fbV6, fbV5, crV6, crV5, srhadyWillow] = await Promise.all([
            fetchJson('https://sonujson-v6.pages.dev/Data/events/football.json'),
            fetchJson('https://sonujson-v5.pages.dev/Data/events/football.json'),
            fetchJson('https://sonujson-v6.pages.dev/Data/events/cricket.json'),
            fetchJson('https://sonujson-v5.pages.dev/Data/events/cricket.json'),
            fetchJson('https://raw.githubusercontent.com/srhady/willow-event/refs/heads/main/live_sports.json')
        ]);

        const footballEvents = (fbV6 && fbV6.events && fbV6.events.length > 0) ? fbV6.events : ((fbV5 && fbV5.events) || []);
        let cricketEvents = (crV6 && crV6.events && crV6.events.length > 0) ? crV6.events : ((crV5 && crV5.events) || []);

        if (srhadyWillow && srhadyWillow.Matches && Array.isArray(srhadyWillow.Matches)) {
            srhadyWillow.Matches.forEach(m => {
                const exists = cricketEvents.some(ce => ce.title && ce.title.toLowerCase().includes((m.title || '').toLowerCase().slice(0, 10)));
                if (!exists && m.match_id) {
                    cricketEvents.push({
                        id: m.match_id,
                        title: m.title || 'Cricket Event',
                        slug: (m.title || '').toLowerCase().replace(/[^a-z0-9]+/g, '-'),
                        cat: 'Live Events',
                        status: 'live',
                        event: {
                            name: m.title,
                            category: 'Cricket',
                            teamA: m.team_1 || 'Team A',
                            teamB: m.team_2 || 'Team B',
                            startTimeIST: m.time_stamp || ''
                        },
                        dashStreams: (m.channels || []).map(ch => ({
                            title: ch.name || 'Stream',
                            type: ch.type || (ch.url && ch.url.includes('.mpd') ? 'dash' : 'hls'),
                            url: ch.url,
                            key: ch.key
                        }))
                    });
                }
            });
        }

        const eventsDir = path.join(__dirname, '..', 'data', 'events');
        if (!fs.existsSync(eventsDir)) fs.mkdirSync(eventsDir, { recursive: true });

        const nowIST = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }) + ' IST';

        if (footballEvents.length > 0) {
            fs.writeFileSync(path.join(eventsDir, 'football.json'), JSON.stringify({
                last_updated: nowIST,
                source: "AryanStreams Official Feed",
                events: footballEvents
            }, null, 2), 'utf8');
            console.log(`✅ Saved ${footballEvents.length} football events to data/events/football.json`);
        }

        if (cricketEvents.length > 0) {
            fs.writeFileSync(path.join(eventsDir, 'cricket.json'), JSON.stringify({
                last_updated: nowIST,
                source: "AryanStreams Official Feed",
                events: cricketEvents
            }, null, 2), 'utf8');
            console.log(`✅ Saved ${cricketEvents.length} cricket events to data/events/cricket.json`);
        }

        if (footballEvents.length > 0 || cricketEvents.length > 0) {
            fs.writeFileSync(path.join(eventsDir, 'all.json'), JSON.stringify({
                last_updated: nowIST,
                source: "AryanStreams Official Feed",
                football_count: footballEvents.length,
                cricket_count: cricketEvents.length,
                events: [...footballEvents, ...cricketEvents]
            }, null, 2), 'utf8');
            console.log(`✅ Saved ${footballEvents.length + cricketEvents.length} total events to data/events/all.json`);
            return true;
        }
    } catch (e) {
        console.warn('⚠️ syncEvents error:', e.message);
    }
    return false;
}

async function main() {
    const sOk = await syncSports();
    const wOk = await syncWillow();
    const mOk = await syncSonyM3U8();
    const eOk = await syncEvents();
    if (!sOk && !wOk && !mOk && !eOk) {
        console.error('❌ Failed to sync any feeds');
        process.exit(1);
    }
    console.log('🎉 All live feeds (Sports, Willow, Sony M3U8 & Own Events) successfully synchronized!');
}

main();
