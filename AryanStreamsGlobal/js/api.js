/**
 * AryanStreams Global - StreamCorner Exact API Data Engine
 * Includes matches from StreamCorner feeds: MLB, NFL, UCL, Cricket, UFC, 24/7 Channels
 */

window.AryanGlobalAPI = {
    // StreamCorner Sections & Categories
    categories: [
        "24/7 STREAMS",
        "AMERICAN FOOTBALL",
        "AUSTRALIAN FOOTBALL",
        "BASEBALL",
        "BASKETBALL",
        "CARIBBEAN PREMIER LEAGUE",
        "CON. LIBERTADORES",
        "CON. SUDAMERICANA",
        "CRICKET",
        "CYCLING",
        "ETPL",
        "FIGHTING"
    ],

    // Provider Badges (Paramount+, Peacock, Sky Go, Sling)
    providers: [
        { name: "Paramount+", logo: "https://m.media-amazon.com/images/G/01/digital/video/Linear_Clean_Slate/ParamountPlus_White_1920x1080._SL500_FMpng_.png", bg: "bg-blue-600" },
        { name: "Peacock", logo: "https://m.media-amazon.com/images/G/01/digital/video/Linear_Clean_Slate/Peacock_White_1920x1080._SL500_FMpng_.png", bg: "bg-zinc-800" },
        { name: "Sky Go", logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-kingdom/sky-sports-main-event-uk.png", bg: "bg-white" },
        { name: "Sling TV", logo: "https://m.media-amazon.com/images/G/01/digital/video/Linear_Clean_Slate/Sling_White_1920x1080._SL500_FMpng_.png", bg: "bg-sky-600" }
    ],

    // 24/7 Channels List (StreamCorner /channels route)
    channelsCatalog: [
        {
            id: "amc",
            name: "AMC",
            category: "24/7 STREAMS",
            logo: "https://m.media-amazon.com/images/S/pv-target-images/c4526445da1e72faca3e5b485c490386d3d6857c9a8b440bd871afbac79eac6f._SL500_FMpng_.png",
            servers: [
                { name: "Server 1 (Direct Stream)", type: "iframe", url: "https://sonuplayv1.pages.dev/J1/?url=https://leaf.highfly.dev/m3u/melanin-394903/live.m3u8" },
                { name: "Server 2 (Backup HD)", type: "video", url: "https://leaf.highfly.dev/m3u/melanin-394903/live.m3u8" }
            ]
        },
        {
            id: "bbc-news",
            name: "BBC NEWS",
            category: "24/7 STREAMS",
            logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-kingdom/bbc-news-uk.png",
            servers: [
                { name: "Server 1 (UK Feed)", type: "video", url: "https://leaf.highfly.dev/m3u/324993/live.m3u8" },
                { name: "Server 2 (Embed)", type: "iframe", url: "https://sonuplayv1.pages.dev/J1/?url=https://leaf.highfly.dev/m3u/324993/live.m3u8" }
            ]
        },
        {
            id: "cnn",
            name: "CNN",
            category: "24/7 STREAMS",
            logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png",
            servers: [
                { name: "Server 1 (Live USA)", type: "iframe", url: "shaka_player.html?mpd=https://a166aivottlinear-a.akamaihd.net/OTTB/iad-nitro/live/clients/dash/enc/rbem8rorcw/out/v1/5318821e2c3c44c2a439681b9aa86e9b/cenc.mpd&kid=d9623774ac5c8c351aafe97c5fe70267&key=5164e6d05164a2d65fa8fcc962aa4861" }
            ]
        },
        {
            id: "hbo-east",
            name: "HBO EAST",
            category: "24/7 STREAMS",
            logo: "https://m.media-amazon.com/images/G/01/digital/video/Linear_Clean_Slate/HBO_EAST_WHITE_1920x1080_f._SL500_FMpng_.png",
            servers: [
                { name: "Server 1 (HBO East HD)", type: "iframe", url: "shaka_player.html?mpd=https://a166aivottlinear-a.akamaihd.net/OTTB/iad-nitro/live/clients/dash/enc/rhf2dwosdt/out/v1/ee550d2a68d846c797e6ce4de2e8b76d/cenc.mpd&kid=69a5aa835a061ce64a630d1046727e40&key=d02feac8a999bd06bf4059bf33411749" }
            ]
        },
        {
            id: "sky-sports-main",
            name: "SKY SPORTS MAIN EVENT",
            category: "24/7 STREAMS",
            logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-kingdom/sky-sports-main-event-uk.png",
            servers: [
                { name: "Server 1 (60FPS HLS)", type: "video", url: "https://leaf.highfly.dev/m3u/melanin-394903/live.m3u8" },
                { name: "Server 2 (Akamai DASH)", type: "iframe", url: "shaka_player.html?mpd=https://a96aivottlinear-a.akamaihd.net/OTTB/iad-nitro/live/clients/dash/enc/kuqdfxtlty/out/v1/6159375de7de4fee9f81b7a9bc8cc61c/cenc.mpd&kid=bb0ec9d372efb70167bf3db05c963393&key=bd54e2afc4ece7d3853080cd601ea0ad" }
            ]
        },
        {
            id: "tnt-sports-1",
            name: "TNT SPORTS 1",
            category: "24/7 STREAMS",
            logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-kingdom/tnt-sports-1-uk.png",
            servers: [
                { name: "Server 1 (UK Feed)", type: "iframe", url: "shaka_player.html?mpd=https://a166aivottlinear-a.akamaihd.net/OTTB/iad-nitro/live/clients/dash/enc/rhf2dwosdt/out/v1/ee550d2a68d846c797e6ce4de2e8b76d/cenc.mpd&kid=69a5aa835a061ce64a630d1046727e40&key=d02feac8a999bd06bf4059bf33411749" }
            ]
        },
        {
            id: "tnt-sports-2",
            name: "TNT SPORTS 2",
            category: "24/7 STREAMS",
            logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-kingdom/tnt-sports-2-uk.png",
            servers: [
                { name: "Server 1 (UK Feed)", type: "iframe", url: "shaka_player.html?mpd=https://a166aivottlinear-a.akamaihd.net/OTTB/iad-nitro/live/clients/dash/enc/puehlftk5j/out/v1/f7f0da1ee112481ca0024e6d4dd97f4a/cenc.mpd&kid=f3df7843080ae743bf865dc5fdf64c68&key=567c863bc12eb74788ea74888c042e1b" }
            ]
        },
        {
            id: "willow-cricket",
            name: "WILLOW CRICKET HD",
            category: "24/7 STREAMS",
            logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/willow-cricket-us.png",
            servers: [
                { name: "Server 1 (Direct HLS)", type: "video", url: "https://leaf.highfly.dev/m3u/324993/live.m3u8" },
                { name: "Server 2 (Akamai DASH)", type: "iframe", url: "shaka_player.html?mpd=https://a96aivottlinear-a.akamaihd.net/OTTB/pdx-nitro/live/clients/dash/enc/s0vxxrjcsl/out/v1/78d97a74f6b3438a89a405abd6de818e/cenc.mpd&kid=bb0ec9d372efb70167bf3db05c963393&key=bd54e2afc4ece7d3853080cd601ea0ad" }
            ]
        }
    ],

    // All Live & Upcoming Matches (StreamCorner Exact Catalog)
    matches: [
        {
            id: "florida-am-vs-miami",
            title: "Florida A&M Rattlers at Miami Hurricanes",
            sport: "AMERICAN FOOTBALL",
            league: "AMERICAN FOOTBALL",
            section: "BETA",
            startTime: "09/11/26 5:30 AM",
            isLive: false,
            team1: { name: "Florida A&M", logo: "https://wsrv.nl/?url=https://api.sofascore.app/api/v1/team/2829/image&w=128&h=128" },
            team2: { name: "Miami Hurricanes", logo: "https://wsrv.nl/?url=https://api.sofascore.app/api/v1/team/2817/image&w=128&h=128" },
            servers: [
                { name: "Server 1 (CBS Sports)", type: "iframe", url: "shaka_player.html?mpd=https://a166aivottlinear-a.akamaihd.net/OTTB/iad-nitro/live/clients/dash/enc/rbem8rorcw/out/v1/5318821e2c3c44c2a439681b9aa86e9b/cenc.mpd&kid=d9623774ac5c8c351aafe97c5fe70267&key=5164e6d05164a2d65fa8fcc962aa4861" },
                { name: "Server 2 (HLS 60fps)", type: "video", url: "https://leaf.highfly.dev/m3u/melanin-394903/live.m3u8" }
            ]
        },
        {
            id: "49ers-vs-rams",
            title: "San Francisco 49ers at Los Angeles Rams",
            sport: "AMERICAN FOOTBALL",
            league: "AMERICAN FOOTBALL",
            section: "BETA",
            startTime: "09/11/26 6:05 AM",
            isLive: true,
            minute: "Q2 08:30",
            team1: { name: "SF 49ers", logo: "https://wsrv.nl/?url=https://api.sofascore.app/api/v1/team/3429/image&w=128&h=128" },
            team2: { name: "LA Rams", logo: "https://wsrv.nl/?url=https://api.sofascore.app/api/v1/team/3422/image&w=128&h=128" },
            servers: [
                { name: "Server 1 (TNT Sports 1)", type: "iframe", url: "shaka_player.html?mpd=https://a166aivottlinear-a.akamaihd.net/OTTB/iad-nitro/live/clients/dash/enc/rhf2dwosdt/out/v1/ee550d2a68d846c797e6ce4de2e8b76d/cenc.mpd&kid=69a5aa835a061ce64a630d1046727e40&key=d02feac8a999bd06bf4059bf33411749" }
            ]
        },
        {
            id: "tampa-vs-atlanta",
            title: "Tampa Bay Rays vs. Atlanta Braves",
            sport: "BASEBALL",
            league: "MLB",
            section: "BETA",
            startTime: "09/10/26 9:45 PM",
            isLive: true,
            minute: "Top 7th",
            team1: { name: "Tampa Bay Rays", logo: "https://wsrv.nl/?url=https://api.sofascore.app/api/v1/team/3549/image&w=128&h=128" },
            team2: { name: "Atlanta Braves", logo: "https://wsrv.nl/?url=https://api.sofascore.app/api/v1/team/3540/image&w=128&h=128" },
            servers: [
                { name: "Server 1 (Akamai DASH)", type: "iframe", url: "shaka_player.html?mpd=https://a166aivottlinear-a.akamaihd.net/OTTB/iad-nitro/live/clients/dash/enc/rbem8rorcw/out/v1/5318821e2c3c44c2a439681b9aa86e9b/cenc.mpd&kid=d9623774ac5c8c351aafe97c5fe70267&key=5164e6d05164a2d65fa8fcc962aa4861" }
            ]
        },
        {
            id: "astros-vs-phillies",
            title: "Houston Astros vs. Philadelphia Phillies",
            sport: "BASEBALL",
            league: "MLB",
            section: "BETA",
            startTime: "09/10/26 10:35 PM",
            isLive: false,
            team1: { name: "Houston Astros", logo: "https://wsrv.nl/?url=https://api.sofascore.app/api/v1/team/3549/image&w=128&h=128" },
            team2: { name: "Philly Phillies", logo: "https://wsrv.nl/?url=https://api.sofascore.app/api/v1/team/3540/image&w=128&h=128" },
            servers: [
                { name: "Server 1 (Sky Sports)", type: "video", url: "https://leaf.highfly.dev/m3u/melanin-394903/live.m3u8" }
            ]
        },
        {
            id: "rangers-vs-mariners",
            title: "Texas Rangers vs. Seattle Mariners",
            sport: "BASEBALL",
            league: "MLB",
            section: "BETA",
            startTime: "09/11/26 1:40 AM",
            isLive: false,
            team1: { name: "Texas Rangers", logo: "https://wsrv.nl/?url=https://api.sofascore.app/api/v1/team/3549/image&w=128&h=128" },
            team2: { name: "Seattle Mariners", logo: "https://wsrv.nl/?url=https://api.sofascore.app/api/v1/team/3540/image&w=128&h=128" },
            servers: [
                { name: "Server 1 (HLS 60fps)", type: "video", url: "https://leaf.highfly.dev/m3u/melanin-394903/live.m3u8" }
            ]
        },
        {
            id: "rockies-vs-yankees",
            title: "Colorado Rockies at New York Yankees",
            sport: "BASEBALL",
            league: "MLB",
            section: "BETA",
            startTime: "09/11/26 4:30 AM",
            isLive: false,
            team1: { name: "Colorado Rockies", logo: "https://wsrv.nl/?url=https://api.sofascore.app/api/v1/team/3549/image&w=128&h=128" },
            team2: { name: "NY Yankees", logo: "https://wsrv.nl/?url=https://api.sofascore.app/api/v1/team/3540/image&w=128&h=128" },
            servers: [
                { name: "Server 1 (Akamai DASH)", type: "iframe", url: "shaka_player.html?mpd=https://a166aivottlinear-a.akamaihd.net/OTTB/iad-nitro/live/clients/dash/enc/rbem8rorcw/out/v1/5318821e2c3c44c2a439681b9aa86e9b/cenc.mpd&kid=d9623774ac5c8c351aafe97c5fe70267&key=5164e6d05164a2d65fa8fcc962aa4861" }
            ]
        },
        {
            id: "pirates-vs-white-sox",
            title: "Pittsburgh Pirates at Chicago White Sox",
            sport: "BASEBALL",
            league: "MLB",
            section: "BETA",
            startTime: "09/11/26 5:10 AM",
            isLive: false,
            team1: { name: "Pittsburgh Pirates", logo: "https://wsrv.nl/?url=https://api.sofascore.app/api/v1/team/3549/image&w=128&h=128" },
            team2: { name: "Chicago White Sox", logo: "https://wsrv.nl/?url=https://api.sofascore.app/api/v1/team/3540/image&w=128&h=128" },
            servers: [
                { name: "Server 1 (TNT Sports 2)", type: "iframe", url: "shaka_player.html?mpd=https://a166aivottlinear-a.akamaihd.net/OTTB/iad-nitro/live/clients/dash/enc/puehlftk5j/out/v1/f7f0da1ee112481ca0024e6d4dd97f4a/cenc.mpd&kid=f3df7843080ae743bf865dc5fdf64c68&key=567c863bc12eb74788ea74888c042e1b" }
            ]
        },
        {
            id: "england-vs-pakistan",
            title: "ENGLAND VS PAKISTAN",
            sport: "CRICKET",
            league: "CRICKET",
            section: "MATCHES",
            startTime: "09/10/26 3:30 PM",
            isLive: true,
            minute: "Innings 2",
            team1: { name: "ENGLAND", logo: "https://wsrv.nl/?url=https://api.sofascore.app/api/v1/team/346807/image&w=128&h=128" },
            team2: { name: "PAKISTAN", logo: "https://wsrv.nl/?url=https://api.sofascore.app/api/v1/team/346808/image&w=128&h=128" },
            servers: [
                { name: "Server 1 (Willow Cricket)", type: "video", url: "https://leaf.highfly.dev/m3u/324993/live.m3u8" },
                { name: "Server 2 (Akamai DASH)", type: "iframe", url: "shaka_player.html?mpd=https://a96aivottlinear-a.akamaihd.net/OTTB/pdx-nitro/live/clients/dash/enc/s0vxxrjcsl/out/v1/78d97a74f6b3438a89a405abd6de818e/cenc.mpd&kid=bb0ec9d372efb70167bf3db05c963393&key=bd54e2afc4ece7d3853080cd601ea0ad" }
            ]
        },
        {
            id: "manchester-united-vs-sabah",
            title: "MANCHESTER UNITED VS SABAH FK",
            sport: "FOOTBALL",
            league: "UCL",
            section: "MATCHES",
            startTime: "09/11/26 12:30 AM",
            isLive: false,
            team1: { name: "MANCHESTER UNITED", logo: "https://wsrv.nl/?url=https://api.sofascore.app/api/v1/team/35/image&w=128&h=128" },
            team2: { name: "SABAH FK", logo: "https://wsrv.nl/?url=https://api.sofascore.app/api/v1/team/2672/image&w=128&h=128" },
            servers: [
                { name: "Server 1 (TNT Sports 1)", type: "iframe", url: "shaka_player.html?mpd=https://a166aivottlinear-a.akamaihd.net/OTTB/iad-nitro/live/clients/dash/enc/rhf2dwosdt/out/v1/ee550d2a68d846c797e6ce4de2e8b76d/cenc.mpd&kid=69a5aa835a061ce64a630d1046727e40&key=d02feac8a999bd06bf4059bf33411749" }
            ]
        },
        {
            id: "bayern-vs-bodo",
            title: "BAYERN MÜNCHEN VS BODØ/GLIMT",
            sport: "FOOTBALL",
            league: "UCL",
            section: "MATCHES",
            startTime: "09/11/26 12:30 AM",
            isLive: false,
            team1: { name: "BAYERN MÜNCHEN", logo: "https://wsrv.nl/?url=https://api.sofascore.app/api/v1/team/2672/image&w=128&h=128" },
            team2: { name: "BODØ/GLIMT", logo: "https://wsrv.nl/?url=https://api.sofascore.app/api/v1/team/1644/image&w=128&h=128" },
            servers: [
                { name: "Server 1 (CBS Sports)", type: "iframe", url: "shaka_player.html?mpd=https://a166aivottlinear-a.akamaihd.net/OTTB/iad-nitro/live/clients/dash/enc/rbem8rorcw/out/v1/5318821e2c3c44c2a439681b9aa86e9b/cenc.mpd&kid=d9623774ac5c8c351aafe97c5fe70267&key=5164e6d05164a2d65fa8fcc962aa4861" }
            ]
        },
        {
            id: "fenerbahce-vs-roma",
            title: "FENERBAHÇE VS AS ROMA",
            sport: "FOOTBALL",
            league: "UCL",
            section: "MATCHES",
            startTime: "09/10/26 10:15 PM",
            isLive: true,
            minute: "72'",
            team1: { name: "FENERBAHÇE", logo: "https://wsrv.nl/?url=https://api.sofascore.app/api/v1/team/3052/image&w=128&h=128" },
            team2: { name: "AS ROMA", logo: "https://wsrv.nl/?url=https://api.sofascore.app/api/v1/team/2702/image&w=128&h=128" },
            servers: [
                { name: "Server 1 (TNT Sports 2)", type: "iframe", url: "shaka_player.html?mpd=https://a166aivottlinear-a.akamaihd.net/OTTB/iad-nitro/live/clients/dash/enc/puehlftk5j/out/v1/f7f0da1ee112481ca0024e6d4dd97f4a/cenc.mpd&kid=f3df7843080ae743bf865dc5fdf64c68&key=567c863bc12eb74788ea74888c042e1b" },
                { name: "Server 2 (Sky Sports)", type: "video", url: "https://leaf.highfly.dev/m3u/melanin-394903/live.m3u8" }
            ]
        },
        {
            id: "psv-vs-shakhtar",
            title: "PSV EINDHOVEN VS SHAKHTAR DONETSK",
            sport: "FOOTBALL",
            league: "UCL",
            section: "MATCHES",
            startTime: "09/10/26 10:15 PM",
            isLive: true,
            minute: "54'",
            team1: { name: "PSV EINDHOVEN", logo: "https://wsrv.nl/?url=https://api.sofascore.app/api/v1/team/2948/image&w=128&h=128" },
            team2: { name: "SHAKHTAR DONETSK", logo: "https://wsrv.nl/?url=https://api.sofascore.app/api/v1/team/2944/image&w=128&h=128" },
            servers: [
                { name: "Server 1 (Sky Sports Main)", type: "video", url: "https://leaf.highfly.dev/m3u/melanin-394903/live.m3u8" }
            ]
        }
    ],

    // Methods
    getAllMatches: function() {
        return this.matches;
    },

    getChannels: function() {
        return this.channelsCatalog;
    },

    getItemById: function(id) {
        const all = [...this.matches, ...this.channelsCatalog];
        return all.find(item => item.id === id);
    }
};
