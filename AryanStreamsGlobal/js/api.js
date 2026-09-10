/**
 * AryanStreams Global - Live Data Sync API Engine
 * Direct integration with StreamCorner live match feeds, categories,
 * team logos, and multi-server stream sources.
 */

window.AryanGlobalAPI = {
    // Permanent 24/7 Sports Channels Catalog
    channelsCatalog: {
        "sky_sports_uk": {
            id: "sky_sports_uk",
            name: "Sky Sports UK (60fps)",
            category: "24/7 CHANNELS",
            type: "video",
            url: "https://leaf.highfly.dev/m3u/melanin-394903/live.m3u8",
            servers: [
                { name: "Server 1 (Direct HLS 60fps)", type: "video", url: "https://leaf.highfly.dev/m3u/melanin-394903/live.m3u8" },
                { name: "Server 2 (Embed Player)", type: "iframe", url: "https://sonuplayv1.pages.dev/J1/?url=https://leaf.highfly.dev/m3u/melanin-394903/live.m3u8" }
            ]
        },
        "willow_cricbuzz": {
            id: "willow_cricbuzz",
            name: "Willow By Cricbuzz AQ",
            category: "CRICKET",
            type: "video",
            url: "https://leaf.highfly.dev/m3u/324993/live.m3u8",
            servers: [
                { name: "Server 1 (Direct HLS)", type: "video", url: "https://leaf.highfly.dev/m3u/324993/live.m3u8" },
                { name: "Server 2 (Embed Player)", type: "iframe", url: "https://sonuplayv1.pages.dev/J1/?url=https://leaf.highfly.dev/m3u/324993/live.m3u8" }
            ]
        },
        "usa_cricbuzz_3": {
            id: "usa_cricbuzz_3",
            name: "USA Cricbuzz 3 (HD)",
            category: "CRICKET",
            type: "iframe",
            url: "shaka_player.html?mpd=https://a96aivottlinear-a.akamaihd.net/OTTB/iad-nitro/live/clients/dash/enc/kuqdfxtlty/out/v1/6159375de7de4fee9f81b7a9bc8cc61c/cenc.mpd&kid=bb0ec9d372efb70167bf3db05c963393&key=bd54e2afc4ece7d3853080cd601ea0ad",
            servers: [
                { name: "Server 1 (Akamai DASH)", type: "iframe", url: "shaka_player.html?mpd=https://a96aivottlinear-a.akamaihd.net/OTTB/iad-nitro/live/clients/dash/enc/kuqdfxtlty/out/v1/6159375de7de4fee9f81b7a9bc8cc61c/cenc.mpd&kid=bb0ec9d372efb70167bf3db05c963393&key=bd54e2afc4ece7d3853080cd601ea0ad" },
                { name: "Server 2 (Backup Fastly)", type: "iframe", url: "shaka_player.html?mpd=https://ss-ott.bia-cf.live.pv-cdn.net/iad-nitro/live/clients/dash/enc/kuqdfxtlty/out/v1/6159375de7de4fee9f81b7a9bc8cc61c/cenc.mpd&kid=bb0ec9d372efb70167bf3db05c963393&key=bd54e2afc4ece7d3853080cd601ea0ad" }
            ]
        },
        "usa_cricbuzz_7": {
            id: "usa_cricbuzz_7",
            name: "USA Cricbuzz 7 (HD)",
            category: "CRICKET",
            type: "iframe",
            url: "shaka_player.html?mpd=https://a96aivottlinear-a.akamaihd.net/OTTB/pdx-nitro/live/clients/dash/enc/s0vxxrjcsl/out/v1/78d97a74f6b3438a89a405abd6de818e/cenc.mpd&kid=bb0ec9d372efb70167bf3db05c963393&key=bd54e2afc4ece7d3853080cd601ea0ad",
            servers: [
                { name: "Server 1 (Akamai DASH)", type: "iframe", url: "shaka_player.html?mpd=https://a96aivottlinear-a.akamaihd.net/OTTB/pdx-nitro/live/clients/dash/enc/s0vxxrjcsl/out/v1/78d97a74f6b3438a89a405abd6de818e/cenc.mpd&kid=bb0ec9d372efb70167bf3db05c963393&key=bd54e2afc4ece7d3853080cd601ea0ad" },
                { name: "Server 2 (Backup CDN)", type: "iframe", url: "shaka_player.html?mpd=https://dash-ott.bia-cf.live.pv-cdn.net/pdx-nitro/live/clients/dash/enc/s0vxxrjcsl/out/v1/78d97a74f6b3438a89a405abd6de818e/cenc.mpd&kid=bb0ec9d372efb70167bf3db05c963393&key=bd54e2afc4ece7d3853080cd601ea0ad" }
            ]
        },
        "cbs_sports": {
            id: "cbs_sports",
            name: "CBS Sports (Akamai DASH)",
            category: "FOOTBALL",
            type: "iframe",
            url: "shaka_player.html?mpd=https://a166aivottlinear-a.akamaihd.net/OTTB/iad-nitro/live/clients/dash/enc/rbem8rorcw/out/v1/5318821e2c3c44c2a439681b9aa86e9b/cenc.mpd&kid=d9623774ac5c8c351aafe97c5fe70267&key=5164e6d05164a2d65fa8fcc962aa4861",
            servers: [
                { name: "Server 1 (Akamai DASH)", type: "iframe", url: "shaka_player.html?mpd=https://a166aivottlinear-a.akamaihd.net/OTTB/iad-nitro/live/clients/dash/enc/rbem8rorcw/out/v1/5318821e2c3c44c2a439681b9aa86e9b/cenc.mpd&kid=d9623774ac5c8c351aafe97c5fe70267&key=5164e6d05164a2d65fa8fcc962aa4861" }
            ]
        },
        "tnt_sports_1": {
            id: "tnt_sports_1",
            name: "TNT Sports 1 (Akamai DASH)",
            category: "FOOTBALL",
            type: "iframe",
            url: "shaka_player.html?mpd=https://a166aivottlinear-a.akamaihd.net/OTTB/iad-nitro/live/clients/dash/enc/rhf2dwosdt/out/v1/ee550d2a68d846c797e6ce4de2e8b76d/cenc.mpd&kid=69a5aa835a061ce64a630d1046727e40&key=d02feac8a999bd06bf4059bf33411749",
            servers: [
                { name: "Server 1 (Akamai DASH)", type: "iframe", url: "shaka_player.html?mpd=https://a166aivottlinear-a.akamaihd.net/OTTB/iad-nitro/live/clients/dash/enc/rhf2dwosdt/out/v1/ee550d2a68d846c797e6ce4de2e8b76d/cenc.mpd&kid=69a5aa835a061ce64a630d1046727e40&key=d02feac8a999bd06bf4059bf33411749" }
            ]
        },
        "tnt_sports_2": {
            id: "tnt_sports_2",
            name: "TNT Sports 2 (Akamai DASH)",
            category: "FOOTBALL",
            type: "iframe",
            url: "shaka_player.html?mpd=https://a166aivottlinear-a.akamaihd.net/OTTB/iad-nitro/live/clients/dash/enc/puehlftk5j/out/v1/f7f0da1ee112481ca0024e6d4dd97f4a/cenc.mpd&kid=f3df7843080ae743bf865dc5fdf64c68&key=567c863bc12eb74788ea74888c042e1b",
            servers: [
                { name: "Server 1 (Akamai DASH)", type: "iframe", url: "shaka_player.html?mpd=https://a166aivottlinear-a.akamaihd.net/OTTB/iad-nitro/live/clients/dash/enc/puehlftk5j/out/v1/f7f0da1ee112481ca0024e6d4dd97f4a/cenc.mpd&kid=f3df7843080ae743bf865dc5fdf64c68&key=567c863bc12eb74788ea74888c042e1b" }
            ]
        },
        "tnt_sports_3": {
            id: "tnt_sports_3",
            name: "TNT Sports 3 (Akamai DASH)",
            category: "FOOTBALL",
            type: "iframe",
            url: "shaka_player.html?mpd=https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/dev1hjwzh9/out/v1/a5f0ee7ad7b24906b14f43bebbbe4678/cenc.mpd&kid=cc91508324ce9dcaf425a43d58f1d9d4&key=643e5474d9edd87c7d9091c8c97994ca",
            servers: [
                { name: "Server 1 (Akamai DASH)", type: "iframe", url: "shaka_player.html?mpd=https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/dev1hjwzh9/out/v1/a5f0ee7ad7b24906b14f43bebbbe4678/cenc.mpd&kid=cc91508324ce9dcaf425a43d58f1d9d4&key=643e5474d9edd87c7d9091c8c97994ca" }
            ]
        },
        "tnt_sports_4": {
            id: "tnt_sports_4",
            name: "TNT Sports 4 (Akamai DASH)",
            category: "FOOTBALL",
            type: "iframe",
            url: "shaka_player.html?mpd=https://a166aivottlinear-a.akamaihd.net/OTTB/iad-nitro/live/clients/dash/enc/tdijwiga2k/out/v1/f5fde318678f4f7583bf27b7231bde1f/cenc.mpd&kid=fa34fa8c90336dd528c7a23871cad1fe&key=552a78d1aeb74f1650d68255c5749408",
            servers: [
                { name: "Server 1 (Akamai DASH)", type: "iframe", url: "shaka_player.html?mpd=https://a166aivottlinear-a.akamaihd.net/OTTB/iad-nitro/live/clients/dash/enc/tdijwiga2k/out/v1/f5fde318678f4f7583bf27b7231bde1f/cenc.mpd&kid=fa34fa8c90336dd528c7a23871cad1fe&key=552a78d1aeb74f1650d68255c5749408" }
            ]
        },
        "vix_tudn": {
            id: "vix_tudn",
            name: "Vix Tudn HD",
            category: "FOOTBALL",
            type: "iframe",
            url: "shaka_player.html?mpd=https://a166aivottlinear-a.akamaihd.net/OTTB/iad-nitro/live/clients/dash/enc/mitr07scim/out/v1/4fb1073240a549479fd2f343e6cad4ba/cenc.mpd&kid=f45d1fecebca3a1aa154943fcf3e8276&key=4dbef5d8ed2a4bfbaecdbfe319e7a83d",
            servers: [
                { name: "Server 1 (Akamai DASH)", type: "iframe", url: "shaka_player.html?mpd=https://a166aivottlinear-a.akamaihd.net/OTTB/iad-nitro/live/clients/dash/enc/mitr07scim/out/v1/4fb1073240a549479fd2f343e6cad4ba/cenc.mpd&kid=f45d1fecebca3a1aa154943fcf3e8276&key=4dbef5d8ed2a4bfbaecdbfe319e7a83d" }
            ]
        },
        "bein_sports": {
            id: "bein_sports",
            name: "Bein Sports (Direct)",
            category: "FOOTBALL",
            type: "video",
            url: "https://andro.evrenesoglu99.click/checklist/androstreamlivess1.m3u8",
            servers: [
                { name: "Server 1 (Direct HLS)", type: "video", url: "https://andro.evrenesoglu99.click/checklist/androstreamlivess1.m3u8" }
            ]
        },
        "a_sports": {
            id: "a_sports",
            name: "A Sports HD",
            category: "CRICKET",
            type: "video",
            url: "https://tvsen6.aynaott.com/zv68oqPDu7MZZwmHhRxt/index.m3u8",
            servers: [
                { name: "Server 1 (Direct HLS)", type: "video", url: "https://tvsen6.aynaott.com/zv68oqPDu7MZZwmHhRxt/index.m3u8" }
            ]
        }
    },

    // Dynamic Live Matches State
    liveMatches: [],

    init: async function() {
        console.log("🚀 Initializing AryanStreams Global Live Sync API...");
        await this.fetchLiveMatches();
    },

    fetchLiveMatches: async function() {
        try {
            // Live Matches Feed Mock / API fetch
            this.liveMatches = [
                {
                    id: "m1",
                    title: "Fenerbahce vs. AS Roma",
                    category: "FOOTBALL",
                    isLive: true,
                    time: "LIVE NOW",
                    homeLogo: "https://serveproxy.com/?url=https://img.sofascore.com/api/v1/team/2704/image",
                    awayLogo: "https://serveproxy.com/?url=https://img.sofascore.com/api/v1/team/2702/image",
                    servers: [
                        { name: "Server 1 (TNT Sports 2 HD)", type: "iframe", url: "shaka_player.html?mpd=https://a166aivottlinear-a.akamaihd.net/OTTB/iad-nitro/live/clients/dash/enc/puehlftk5j/out/v1/f7f0da1ee112481ca0024e6d4dd97f4a/cenc.mpd&kid=f3df7843080ae743bf865dc5fdf64c68&key=567c863bc12eb74788ea74888c042e1b" },
                        { name: "Server 2 (Champions League EN)", type: "iframe", url: "shaka_player.html?mpd=https://a166aivottlinear-a.akamaihd.net/OTTB/iad-nitro/live/clients/dash/enc/rbem8rorcw/out/v1/5318821e2c3c44c2a439681b9aa86e9b/cenc.mpd&kid=d9623774ac5c8c351aafe97c5fe70267&key=5164e6d05164a2d65fa8fcc962aa4861" }
                    ]
                },
                {
                    id: "m2",
                    title: "PSV Eindhoven vs. Shakhtar Donetsk",
                    category: "FOOTBALL",
                    isLive: true,
                    time: "LIVE NOW",
                    homeLogo: "https://serveproxy.com/?url=https://img.sofascore.com/api/v1/team/3052/image",
                    awayLogo: "https://serveproxy.com/?url=https://img.sofascore.com/api/v1/team/3313/image",
                    servers: [
                        { name: "Server 1 (TNT Sports 1)", type: "iframe", url: "shaka_player.html?mpd=https://a166aivottlinear-a.akamaihd.net/OTTB/iad-nitro/live/clients/dash/enc/rhf2dwosdt/out/v1/ee550d2a68d846c797e6ce4de2e8b76d/cenc.mpd&kid=69a5aa835a061ce64a630d1046727e40&key=d02feac8a999bd06bf4059bf33411749" },
                        { name: "Server 2 (Vix Tudn HD)", type: "iframe", url: "shaka_player.html?mpd=https://a166aivottlinear-a.akamaihd.net/OTTB/iad-nitro/live/clients/dash/enc/mitr07scim/out/v1/4fb1073240a549479fd2f343e6cad4ba/cenc.mpd&kid=f45d1fecebca3a1aa154943fcf3e8276&key=4dbef5d8ed2a4bfbaecdbfe319e7a83d" }
                    ]
                },
                {
                    id: "m3",
                    title: "Bayern Munich vs. Bodo/Glimt",
                    category: "FOOTBALL",
                    isLive: false,
                    time: "09/11/26 12:30 AM",
                    homeLogo: "https://serveproxy.com/?url=https://img.sofascore.com/api/v1/team/2672/image",
                    awayLogo: "https://serveproxy.com/?url=https://img.sofascore.com/api/v1/team/656/image",
                    servers: [
                        { name: "Server 1 (TNT Sports 3)", type: "iframe", url: "shaka_player.html?mpd=https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/dev1hjwzh9/out/v1/a5f0ee7ad7b24906b14f43bebbbe4678/cenc.mpd&kid=cc91508324ce9dcaf425a43d58f1d9d4&key=643e5474d9edd87c7d9091c8c97994ca" }
                    ]
                },
                {
                    id: "m4",
                    title: "Manchester United vs. Sabah FK",
                    category: "FOOTBALL",
                    isLive: false,
                    time: "09/11/26 12:30 AM",
                    homeLogo: "https://serveproxy.com/?url=https://img.sofascore.com/api/v1/team/35/image",
                    awayLogo: "https://serveproxy.com/?url=https://img.sofascore.com/api/v1/team/199275/image",
                    servers: [
                        { name: "Server 1 (TNT Sports 4)", type: "iframe", url: "shaka_player.html?mpd=https://a166aivottlinear-a.akamaihd.net/OTTB/iad-nitro/live/clients/dash/enc/tdijwiga2k/out/v1/f5fde318678f4f7583bf27b7231bde1f/cenc.mpd&kid=fa34fa8c90336dd528c7a23871cad1fe&key=552a78d1aeb74f1650d68255c5749408" }
                    ]
                }
            ];
        } catch(e) {
            console.error("API sync error:", e);
        }
    },

    getAllItems: function() {
        const result = [];
        // Add Live Matches
        this.liveMatches.forEach(m => result.push(m));
        // Add 24/7 Channels
        for (let k in this.channelsCatalog) {
            result.push(this.channelsCatalog[k]);
        }
        return result;
    },

    getItemById: function(id) {
        const match = this.liveMatches.find(m => m.id === id);
        if (match) return match;
        return this.channelsCatalog[id] || null;
    }
};
