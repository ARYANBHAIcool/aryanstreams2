/**
 * AryanStreams Global - Stream API Engine
 * StreamCorner-identical live & upcoming match feed, 24/7 channels catalog,
 * Sofascore logos, and multi-server stream mappings.
 */

window.AryanGlobalAPI = {
    // 24/7 Channels Catalog (Dedicated Channel View)
    channelsCatalog: [
        {
            id: "amc",
            name: "AMC",
            category: "24/7 CHANNELS",
            type: "iframe",
            logo: "https://m.media-amazon.com/images/S/pv-target-images/c4526445da1e72faca3e5b485c490386d3d6857c9a8b440bd871afbac79eac6f._SL500_FMpng_.png",
            servers: [
                { name: "Server 1 (Direct Stream)", type: "iframe", url: "https://sonuplayv1.pages.dev/J1/?url=https://leaf.highfly.dev/m3u/melanin-394903/live.m3u8" },
                { name: "Server 2 (Backup HD)", type: "video", url: "https://leaf.highfly.dev/m3u/melanin-394903/live.m3u8" }
            ]
        },
        {
            id: "bbc-news",
            name: "BBC NEWS",
            category: "24/7 CHANNELS",
            type: "iframe",
            logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-kingdom/bbc-news-uk.png",
            servers: [
                { name: "Server 1 (UK Feed)", type: "video", url: "https://leaf.highfly.dev/m3u/324993/live.m3u8" },
                { name: "Server 2 (Embed)", type: "iframe", url: "https://sonuplayv1.pages.dev/J1/?url=https://leaf.highfly.dev/m3u/324993/live.m3u8" }
            ]
        },
        {
            id: "cnn",
            name: "CNN",
            category: "24/7 CHANNELS",
            type: "iframe",
            logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png",
            servers: [
                { name: "Server 1 (Live USA)", type: "iframe", url: "shaka_player.html?mpd=https://a166aivottlinear-a.akamaihd.net/OTTB/iad-nitro/live/clients/dash/enc/rbem8rorcw/out/v1/5318821e2c3c44c2a439681b9aa86e9b/cenc.mpd&kid=d9623774ac5c8c351aafe97c5fe70267&key=5164e6d05164a2d65fa8fcc962aa4861" }
            ]
        },
        {
            id: "hbo-east",
            name: "HBO EAST",
            category: "24/7 CHANNELS",
            type: "iframe",
            logo: "https://m.media-amazon.com/images/G/01/digital/video/Linear_Clean_Slate/HBO_EAST_WHITE_1920x1080_f._SL500_FMpng_.png",
            servers: [
                { name: "Server 1 (HBO East HD)", type: "iframe", url: "shaka_player.html?mpd=https://a166aivottlinear-a.akamaihd.net/OTTB/iad-nitro/live/clients/dash/enc/rhf2dwosdt/out/v1/ee550d2a68d846c797e6ce4de2e8b76d/cenc.mpd&kid=69a5aa835a061ce64a630d1046727e40&key=d02feac8a999bd06bf4059bf33411749" }
            ]
        },
        {
            id: "sky-sports-main",
            name: "SKY SPORTS MAIN EVENT",
            category: "24/7 CHANNELS",
            type: "video",
            logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-kingdom/sky-sports-main-event-uk.png",
            servers: [
                { name: "Server 1 (60FPS HLS)", type: "video", url: "https://leaf.highfly.dev/m3u/melanin-394903/live.m3u8" },
                { name: "Server 2 (Akamai DASH)", type: "iframe", url: "shaka_player.html?mpd=https://a96aivottlinear-a.akamaihd.net/OTTB/iad-nitro/live/clients/dash/enc/kuqdfxtlty/out/v1/6159375de7de4fee9f81b7a9bc8cc61c/cenc.mpd&kid=bb0ec9d372efb70167bf3db05c963393&key=bd54e2afc4ece7d3853080cd601ea0ad" }
            ]
        },
        {
            id: "tnt-sports-1",
            name: "TNT SPORTS 1",
            category: "24/7 CHANNELS",
            type: "iframe",
            logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-kingdom/tnt-sports-1-uk.png",
            servers: [
                { name: "Server 1 (UK Feed)", type: "iframe", url: "shaka_player.html?mpd=https://a166aivottlinear-a.akamaihd.net/OTTB/iad-nitro/live/clients/dash/enc/rhf2dwosdt/out/v1/ee550d2a68d846c797e6ce4de2e8b76d/cenc.mpd&kid=69a5aa835a061ce64a630d1046727e40&key=d02feac8a999bd06bf4059bf33411749" }
            ]
        },
        {
            id: "tnt-sports-2",
            name: "TNT SPORTS 2",
            category: "24/7 CHANNELS",
            type: "iframe",
            logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-kingdom/tnt-sports-2-uk.png",
            servers: [
                { name: "Server 1 (UK Feed)", type: "iframe", url: "shaka_player.html?mpd=https://a166aivottlinear-a.akamaihd.net/OTTB/iad-nitro/live/clients/dash/enc/puehlftk5j/out/v1/f7f0da1ee112481ca0024e6d4dd97f4a/cenc.mpd&kid=f3df7843080ae743bf865dc5fdf64c68&key=567c863bc12eb74788ea74888c042e1b" }
            ]
        },
        {
            id: "willow-cricket",
            name: "WILLOW CRICKET HD",
            category: "CRICKET",
            type: "video",
            logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/willow-cricket-us.png",
            servers: [
                { name: "Server 1 (Direct HLS)", type: "video", url: "https://leaf.highfly.dev/m3u/324993/live.m3u8" },
                { name: "Server 2 (Akamai DASH)", type: "iframe", url: "shaka_player.html?mpd=https://a96aivottlinear-a.akamaihd.net/OTTB/pdx-nitro/live/clients/dash/enc/s0vxxrjcsl/out/v1/78d97a74f6b3438a89a405abd6de818e/cenc.mpd&kid=bb0ec9d372efb70167bf3db05c963393&key=bd54e2afc4ece7d3853080cd601ea0ad" }
            ]
        }
    ],

    // Live Matches (Active Now)
    liveMatches: [
        {
            id: "real-madrid-vs-barcelona",
            title: "Real Madrid vs Barcelona",
            sport: "FOOTBALL",
            competition: "UEFA Champions League",
            status: "LIVE",
            minute: "68'",
            score: "2 - 1",
            timeDisplay: "LIVE 68'",
            team1: {
                name: "Real Madrid",
                logo: "https://wsrv.nl/?url=https://api.sofascore.app/api/v1/team/2829/image&w=128&h=128"
            },
            team2: {
                name: "Barcelona",
                logo: "https://wsrv.nl/?url=https://api.sofascore.app/api/v1/team/2817/image&w=128&h=128"
            },
            servers: [
                { name: "Server 1 (TNT Sports 2)", type: "iframe", url: "shaka_player.html?mpd=https://a166aivottlinear-a.akamaihd.net/OTTB/iad-nitro/live/clients/dash/enc/puehlftk5j/out/v1/f7f0da1ee112481ca0024e6d4dd97f4a/cenc.mpd&kid=f3df7843080ae743bf865dc5fdf64c68&key=567c863bc12eb74788ea74888c042e1b" },
                { name: "Server 2 (Sky Sports 60fps)", type: "video", url: "https://leaf.highfly.dev/m3u/melanin-394903/live.m3u8" },
                { name: "Server 3 (SonuPlay Embed)", type: "iframe", url: "https://sonuplayv1.pages.dev/J1/?url=https://leaf.highfly.dev/m3u/melanin-394903/live.m3u8" }
            ]
        },
        {
            id: "man-city-vs-arsenal",
            title: "Manchester City vs Arsenal",
            sport: "FOOTBALL",
            competition: "English Premier League",
            status: "LIVE",
            minute: "42'",
            score: "1 - 0",
            timeDisplay: "LIVE 42'",
            team1: {
                name: "Manchester City",
                logo: "https://wsrv.nl/?url=https://api.sofascore.app/api/v1/team/17/image&w=128&h=128"
            },
            team2: {
                name: "Arsenal",
                logo: "https://wsrv.nl/?url=https://api.sofascore.app/api/v1/team/42/image&w=128&h=128"
            },
            servers: [
                { name: "Server 1 (Sky Sports Main)", type: "video", url: "https://leaf.highfly.dev/m3u/melanin-394903/live.m3u8" },
                { name: "Server 2 (TNT Sports 1)", type: "iframe", url: "shaka_player.html?mpd=https://a166aivottlinear-a.akamaihd.net/OTTB/iad-nitro/live/clients/dash/enc/rhf2dwosdt/out/v1/ee550d2a68d846c797e6ce4de2e8b76d/cenc.mpd&kid=69a5aa835a061ce64a630d1046727e40&key=d02feac8a999bd06bf4059bf33411749" }
            ]
        },
        {
            id: "india-vs-australia-t20",
            title: "India vs Australia",
            sport: "CRICKET",
            competition: "ICC T20 International Series",
            status: "LIVE",
            minute: "Innings 2",
            score: "145/3 (16.2 ov)",
            timeDisplay: "LIVE",
            team1: {
                name: "India",
                logo: "https://wsrv.nl/?url=https://api.sofascore.app/api/v1/team/346808/image&w=128&h=128"
            },
            team2: {
                name: "Australia",
                logo: "https://wsrv.nl/?url=https://api.sofascore.app/api/v1/team/346804/image&w=128&h=128"
            },
            servers: [
                { name: "Server 1 (Willow Cricket)", type: "video", url: "https://leaf.highfly.dev/m3u/324993/live.m3u8" },
                { name: "Server 2 (Akamai DASH)", type: "iframe", url: "shaka_player.html?mpd=https://a96aivottlinear-a.akamaihd.net/OTTB/pdx-nitro/live/clients/dash/enc/s0vxxrjcsl/out/v1/78d97a74f6b3438a89a405abd6de818e/cenc.mpd&kid=bb0ec9d372efb70167bf3db05c963393&key=bd54e2afc4ece7d3853080cd601ea0ad" }
            ]
        },
        {
            id: "lakers-vs-celtics",
            title: "LA Lakers vs Boston Celtics",
            sport: "BASKETBALL",
            competition: "NBA Regular Season",
            status: "LIVE",
            minute: "Q3 04:12",
            score: "88 - 84",
            timeDisplay: "LIVE Q3",
            team1: {
                name: "LA Lakers",
                logo: "https://wsrv.nl/?url=https://api.sofascore.app/api/v1/team/3429/image&w=128&h=128"
            },
            team2: {
                name: "Boston Celtics",
                logo: "https://wsrv.nl/?url=https://api.sofascore.app/api/v1/team/3422/image&w=128&h=128"
            },
            servers: [
                { name: "Server 1 (TNT Sports)", type: "iframe", url: "shaka_player.html?mpd=https://a166aivottlinear-a.akamaihd.net/OTTB/iad-nitro/live/clients/dash/enc/rhf2dwosdt/out/v1/ee550d2a68d846c797e6ce4de2e8b76d/cenc.mpd&kid=69a5aa835a061ce64a630d1046727e40&key=d02feac8a999bd06bf4059bf33411749" },
                { name: "Server 2 (Direct HLS)", type: "video", url: "https://leaf.highfly.dev/m3u/melanin-394903/live.m3u8" }
            ]
        }
    ],

    // Upcoming Matches (Fixtures Today & Future)
    upcomingMatches: [
        {
            id: "liverpool-vs-chelsea",
            title: "Liverpool vs Chelsea",
            sport: "FOOTBALL",
            competition: "English Premier League",
            status: "UPCOMING",
            timeDisplay: "TODAY 20:30",
            team1: {
                name: "Liverpool",
                logo: "https://wsrv.nl/?url=https://api.sofascore.app/api/v1/team/44/image&w=128&h=128"
            },
            team2: {
                name: "Chelsea",
                logo: "https://wsrv.nl/?url=https://api.sofascore.app/api/v1/team/38/image&w=128&h=128"
            },
            servers: [
                { name: "Server 1 (Sky Sports Main)", type: "video", url: "https://leaf.highfly.dev/m3u/melanin-394903/live.m3u8" },
                { name: "Server 2 (TNT Sports 1)", type: "iframe", url: "shaka_player.html?mpd=https://a166aivottlinear-a.akamaihd.net/OTTB/iad-nitro/live/clients/dash/enc/rhf2dwosdt/out/v1/ee550d2a68d846c797e6ce4de2e8b76d/cenc.mpd&kid=69a5aa835a061ce64a630d1046727e40&key=d02feac8a999bd06bf4059bf33411749" }
            ]
        },
        {
            id: "psg-vs-bayern",
            title: "PSG vs Bayern Munich",
            sport: "FOOTBALL",
            competition: "UEFA Champions League",
            status: "UPCOMING",
            timeDisplay: "TODAY 21:00",
            team1: {
                name: "PSG",
                logo: "https://wsrv.nl/?url=https://api.sofascore.app/api/v1/team/1644/image&w=128&h=128"
            },
            team2: {
                name: "Bayern Munich",
                logo: "https://wsrv.nl/?url=https://api.sofascore.app/api/v1/team/2672/image&w=128&h=128"
            },
            servers: [
                { name: "Server 1 (CBS Sports)", type: "iframe", url: "shaka_player.html?mpd=https://a166aivottlinear-a.akamaihd.net/OTTB/iad-nitro/live/clients/dash/enc/rbem8rorcw/out/v1/5318821e2c3c44c2a439681b9aa86e9b/cenc.mpd&kid=d9623774ac5c8c351aafe97c5fe70267&key=5164e6d05164a2d65fa8fcc962aa4861" },
                { name: "Server 2 (TNT Sports 2)", type: "iframe", url: "shaka_player.html?mpd=https://a166aivottlinear-a.akamaihd.net/OTTB/iad-nitro/live/clients/dash/enc/puehlftk5j/out/v1/f7f0da1ee112481ca0024e6d4dd97f4a/cenc.mpd&kid=f3df7843080ae743bf865dc5fdf64c68&key=567c863bc12eb74788ea74888c042e1b" }
            ]
        },
        {
            id: "ufc-305-main-card",
            title: "UFC 305: Main Event",
            sport: "FIGHTING",
            competition: "UFC Championship PPV",
            status: "UPCOMING",
            timeDisplay: "TOMORROW 02:00",
            team1: {
                name: "Adesanya",
                logo: "https://wsrv.nl/?url=https://m.media-amazon.com/images/S/pv-target-images/c4526445da1e72faca3e5b485c490386d3d6857c9a8b440bd871afbac79eac6f._SL500_FMpng_.png"
            },
            team2: {
                name: "Du Plessis",
                logo: "https://wsrv.nl/?url=https://m.media-amazon.com/images/S/pv-target-images/02fc1e9f87d890307bc233d06dca2c4c83d8741ed43d95ed1f781d10fe21b356._SL500_FMpng_.png"
            },
            servers: [
                { name: "Server 1 (TNT Sports Box Office)", type: "iframe", url: "shaka_player.html?mpd=https://a166aivottlinear-a.akamaihd.net/OTTB/iad-nitro/live/clients/dash/enc/rhf2dwosdt/out/v1/ee550d2a68d846c797e6ce4de2e8b76d/cenc.mpd&kid=69a5aa835a061ce64a630d1046727e40&key=d02feac8a999bd06bf4059bf33411749" }
            ]
        },
        {
            id: "yankees-vs-red-sox",
            title: "NY Yankees vs Boston Red Sox",
            sport: "BASEBALL",
            competition: "MLB Major League Baseball",
            status: "UPCOMING",
            timeDisplay: "TOMORROW 19:10",
            team1: {
                name: "NY Yankees",
                logo: "https://wsrv.nl/?url=https://api.sofascore.app/api/v1/team/3549/image&w=128&h=128"
            },
            team2: {
                name: "Boston Red Sox",
                logo: "https://wsrv.nl/?url=https://api.sofascore.app/api/v1/team/3540/image&w=128&h=128"
            },
            servers: [
                { name: "Server 1 (NBC Sports)", type: "iframe", url: "shaka_player.html?mpd=https://a166aivottlinear-a.akamaihd.net/OTTB/iad-nitro/live/clients/dash/enc/rbem8rorcw/out/v1/5318821e2c3c44c2a439681b9aa86e9b/cenc.mpd&kid=d9623774ac5c8c351aafe97c5fe70267&key=5164e6d05164a2d65fa8fcc962aa4861" }
            ]
        },
        {
            id: "england-vs-south-africa-odi",
            title: "England vs South Africa 2nd ODI",
            sport: "CRICKET",
            competition: "International ODI Series",
            status: "UPCOMING",
            timeDisplay: "15 OCT 14:00",
            team1: {
                name: "England",
                logo: "https://wsrv.nl/?url=https://api.sofascore.app/api/v1/team/346807/image&w=128&h=128"
            },
            team2: {
                name: "South Africa",
                logo: "https://wsrv.nl/?url=https://api.sofascore.app/api/v1/team/346816/image&w=128&h=128"
            },
            servers: [
                { name: "Server 1 (Willow Cricket)", type: "video", url: "https://leaf.highfly.dev/m3u/324993/live.m3u8" }
            ]
        }
    ],

    // Methods
    getAllMatches: function() {
        return [...this.liveMatches, ...this.upcomingMatches];
    },

    getChannels: function() {
        return this.channelsCatalog;
    },

    getMatchById: function(id) {
        const all = [...this.liveMatches, ...this.upcomingMatches, ...this.channelsCatalog];
        return all.find(m => m.id === id);
    }
};
