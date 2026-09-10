/**
 * AryanStreams Global - StreamCorner Real-Time Sync Engine
 * Direct integration with StreamCorner real stream servers:
 * - topembed.pw.getsugatensho.sbs
 * - amazon.com.pandecocogaming.sbs
 * - sportsembed.su.getsugatensho.sbs
 */

window.AryanGlobalAPI = {
    providers: [
        { name: "Paramount+", logo: "https://m.media-amazon.com/images/G/01/digital/video/Linear_Clean_Slate/ParamountPlus_White_1920x1080._SL500_FMpng_.png", bg: "bg-blue-600" },
        { name: "Peacock", logo: "https://m.media-amazon.com/images/G/01/digital/video/Linear_Clean_Slate/Peacock_White_1920x1080._SL500_FMpng_.png", bg: "bg-zinc-800" },
        { name: "Sky Go", logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-kingdom/sky-sports-main-event-uk.png", bg: "bg-white" },
        { name: "Sling TV", logo: "https://m.media-amazon.com/images/G/01/digital/video/Linear_Clean_Slate/Sling_White_1920x1080._SL500_FMpng_.png", bg: "bg-sky-600" }
    ],

    channelsCatalog: [
    {
        "id": "family-guy",
        "title": "Family Guy",
        "sport": "24/7 STREAMS",
        "league": "24/7 STREAMS",
        "startTime": "LIVE",
        "isLive": true,
        "team1": {
            "name": "Family Guy",
            "logo": "https://wsrv.nl/?url=https://www.hollywoodreporter.com/wp-content/uploads/2024/01/TCDFAGU_FE122.jpg?w=1296&h=730&crop=1&resize=1000%2C563"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://wsrv.nl/?url=https://www.hollywoodreporter.com/wp-content/uploads/2024/01/TCDFAGU_FE122.jpg?w=1296&h=730&crop=1&resize=1000%2C563"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=family-guy"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=family-guy"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=family-guy"
            }
        ]
    }
],

    matches: [
    {
        "id": "6e2ab9e0193a7785a7d6e65098c7f32c",
        "title": "Fenerbahce vs. AS Roma",
        "sport": "FOOTBALL",
        "league": "UEFA CHAMPIONS LEAGUE",
        "startTime": "09/10/26 10:15 PM",
        "isLive": false,
        "team1": {
            "name": "Fenerbahce",
            "logo": "https://wsrv.nl/?url=https://wwwimage-us.pplusstatic.com/thumbnails/photos/w570-q80/channel/23cc9e78-5680-416b-81c3-aea22f20bedd/UCHPL_THMB_26_Fenerbahce_Main_Roma_Main_6tfcm.jpg?format=webp"
        },
        "team2": {
            "name": "AS Roma",
            "logo": "https://wsrv.nl/?url=https://wwwimage-us.pplusstatic.com/thumbnails/photos/w570-q80/channel/23cc9e78-5680-416b-81c3-aea22f20bedd/UCHPL_THMB_26_Fenerbahce_Main_Roma_Main_6tfcm.jpg?format=webp"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=6e2ab9e0193a7785a7d6e65098c7f32c"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=6e2ab9e0193a7785a7d6e65098c7f32c"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=6e2ab9e0193a7785a7d6e65098c7f32c"
            }
        ]
    },
    {
        "id": "f1159f20f95f5ae55fc0724fe81eafde",
        "title": "PSV Eindhoven vs. Shakhtar Donetsk",
        "sport": "FOOTBALL",
        "league": "UEFA CHAMPIONS LEAGUE",
        "startTime": "09/10/26 10:15 PM",
        "isLive": false,
        "team1": {
            "name": "PSV Eindhoven",
            "logo": "https://wsrv.nl/?url=https://wwwimage-us.pplusstatic.com/thumbnails/photos/w570-q80/channel/ae1a4d24-54ec-40c5-b0d1-8563e5d34f80/UCHPL_THMB_26_PSV_Main_ShakhtarDonetsk_Alt_pz80x.jpg?format=webp"
        },
        "team2": {
            "name": "Shakhtar Donetsk",
            "logo": "https://wsrv.nl/?url=https://wwwimage-us.pplusstatic.com/thumbnails/photos/w570-q80/channel/ae1a4d24-54ec-40c5-b0d1-8563e5d34f80/UCHPL_THMB_26_PSV_Main_ShakhtarDonetsk_Alt_pz80x.jpg?format=webp"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=f1159f20f95f5ae55fc0724fe81eafde"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=f1159f20f95f5ae55fc0724fe81eafde"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=f1159f20f95f5ae55fc0724fe81eafde"
            }
        ]
    },
    {
        "id": "21602a92cadfbfb57766fac6f5bce45b",
        "title": "Bayern Munich vs. Bodo/Glimt",
        "sport": "FOOTBALL",
        "league": "UEFA CHAMPIONS LEAGUE",
        "startTime": "09/11/26 12:30 AM",
        "isLive": false,
        "team1": {
            "name": "Bayern Munich",
            "logo": "https://wsrv.nl/?url=https://wwwimage-us.pplusstatic.com/thumbnails/photos/w570-q80/channel/e2e2c61b-d5e7-4f47-83b2-2c5923f02dd2/UCHPL_THMB_26_BayernMunchen_Main_BodoGlimt_Main_ybgzm.jpg?format=webp"
        },
        "team2": {
            "name": "Bodo/Glimt",
            "logo": "https://wsrv.nl/?url=https://wwwimage-us.pplusstatic.com/thumbnails/photos/w570-q80/channel/e2e2c61b-d5e7-4f47-83b2-2c5923f02dd2/UCHPL_THMB_26_BayernMunchen_Main_BodoGlimt_Main_ybgzm.jpg?format=webp"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=21602a92cadfbfb57766fac6f5bce45b"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=21602a92cadfbfb57766fac6f5bce45b"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=21602a92cadfbfb57766fac6f5bce45b"
            }
        ]
    },
    {
        "id": "038a6b09e08c81c1b38bd16f21c27e7a",
        "title": "Como vs. RB Leipzig",
        "sport": "FOOTBALL",
        "league": "UEFA CHAMPIONS LEAGUE",
        "startTime": "09/11/26 12:30 AM",
        "isLive": false,
        "team1": {
            "name": "Como",
            "logo": "https://wsrv.nl/?url=https://wwwimage-us.pplusstatic.com/thumbnails/photos/w570-q80/channel/363adbc5-903b-4425-b6e7-09392c632764/UCHPL_THMB_26_Como_Main_RBLeipzig_Main_xhcov.jpg?format=webp"
        },
        "team2": {
            "name": "RB Leipzig",
            "logo": "https://wsrv.nl/?url=https://wwwimage-us.pplusstatic.com/thumbnails/photos/w570-q80/channel/363adbc5-903b-4425-b6e7-09392c632764/UCHPL_THMB_26_Como_Main_RBLeipzig_Main_xhcov.jpg?format=webp"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=038a6b09e08c81c1b38bd16f21c27e7a"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=038a6b09e08c81c1b38bd16f21c27e7a"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=038a6b09e08c81c1b38bd16f21c27e7a"
            }
        ]
    },
    {
        "id": "0625286f596ca9ad61a595129360734c",
        "title": "Manchester United vs. Sabah FK",
        "sport": "FOOTBALL",
        "league": "UEFA CHAMPIONS LEAGUE",
        "startTime": "09/11/26 12:30 AM",
        "isLive": false,
        "team1": {
            "name": "Manchester United",
            "logo": "https://wsrv.nl/?url=https://wwwimage-us.pplusstatic.com/thumbnails/photos/w570-q80/channel/f1fe1432-130e-4ce1-9b5e-62c99d488809/UCHPL_THMB_26_ManchesterUnited_Main_Sabah_Main_px214.jpg?format=webp"
        },
        "team2": {
            "name": "Sabah FK",
            "logo": "https://wsrv.nl/?url=https://wwwimage-us.pplusstatic.com/thumbnails/photos/w570-q80/channel/f1fe1432-130e-4ce1-9b5e-62c99d488809/UCHPL_THMB_26_ManchesterUnited_Main_Sabah_Main_px214.jpg?format=webp"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=0625286f596ca9ad61a595129360734c"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=0625286f596ca9ad61a595129360734c"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=0625286f596ca9ad61a595129360734c"
            }
        ]
    },
    {
        "id": "f8a5659943268cce01509bb259946fb4",
        "title": "Slavia Prague vs. Lens",
        "sport": "FOOTBALL",
        "league": "UEFA CHAMPIONS LEAGUE",
        "startTime": "09/11/26 12:30 AM",
        "isLive": false,
        "team1": {
            "name": "Slavia Prague",
            "logo": "https://wsrv.nl/?url=https://wwwimage-us.pplusstatic.com/thumbnails/photos/w570-q80/channel/a0c21035-abd6-4930-8c00-40130198f461/UCHPL_THMB_26_SlaviaPraha_Main_Lens_Main_a6n8f.jpg?format=webp"
        },
        "team2": {
            "name": "Lens",
            "logo": "https://wsrv.nl/?url=https://wwwimage-us.pplusstatic.com/thumbnails/photos/w570-q80/channel/a0c21035-abd6-4930-8c00-40130198f461/UCHPL_THMB_26_SlaviaPraha_Main_Lens_Main_a6n8f.jpg?format=webp"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=f8a5659943268cce01509bb259946fb4"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=f8a5659943268cce01509bb259946fb4"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=f8a5659943268cce01509bb259946fb4"
            }
        ]
    },
    {
        "id": "007c4cc7d2412055776ed026bd4961ad",
        "title": "Spanish Grand Prix - Practice 1",
        "sport": "FOOTBALL",
        "league": "MOTORSPORTS",
        "startTime": "09/11/26 5:00 PM",
        "isLive": false,
        "team1": {
            "name": "Spanish Grand Prix - Practice 1",
            "logo": "https://wsrv.nl/?url=https://images-na.ssl-images-amazon.com/images/S/le-target-images-prod/amzn1.dv.gti.95aaab95-fdbe-47f3-b224-123f920c48eb/6/BOXART-16X9/en-US._SX624_FMavif_PQ65_.jpeg"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://wsrv.nl/?url=https://images-na.ssl-images-amazon.com/images/S/le-target-images-prod/amzn1.dv.gti.95aaab95-fdbe-47f3-b224-123f920c48eb/6/BOXART-16X9/en-US._SX624_FMavif_PQ65_.jpeg"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=007c4cc7d2412055776ed026bd4961ad"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=007c4cc7d2412055776ed026bd4961ad"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=007c4cc7d2412055776ed026bd4961ad"
            }
        ]
    },
    {
        "id": "7819f00dda78ce8905b9c2a26ee3c107",
        "title": "Spanish Grand Prix - Practice 2",
        "sport": "FOOTBALL",
        "league": "MOTORSPORTS",
        "startTime": "09/11/26 8:30 PM",
        "isLive": false,
        "team1": {
            "name": "Spanish Grand Prix - Practice 2",
            "logo": "https://wsrv.nl/?url=https://images-na.ssl-images-amazon.com/images/S/le-target-images-prod/amzn1.dv.gti.a9eca117-ba9a-4aa7-a89a-8de1c39435ca/6/BOXART-16X9/en-US._SX624_FMavif_PQ65_.jpeg"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://wsrv.nl/?url=https://images-na.ssl-images-amazon.com/images/S/le-target-images-prod/amzn1.dv.gti.a9eca117-ba9a-4aa7-a89a-8de1c39435ca/6/BOXART-16X9/en-US._SX624_FMavif_PQ65_.jpeg"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=7819f00dda78ce8905b9c2a26ee3c107"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=7819f00dda78ce8905b9c2a26ee3c107"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=7819f00dda78ce8905b9c2a26ee3c107"
            }
        ]
    },
    {
        "id": "d774600e3915f0264fecd0bfc36d1789",
        "title": "Spanish Grand Prix - Practice 3",
        "sport": "FOOTBALL",
        "league": "MOTORSPORTS",
        "startTime": "09/12/26 4:00 PM",
        "isLive": false,
        "team1": {
            "name": "Spanish Grand Prix - Practice 3",
            "logo": "https://wsrv.nl/?url=https://images-na.ssl-images-amazon.com/images/S/le-target-images-prod/amzn1.dv.gti.efa3275c-655f-42dc-98ea-ed7b4a10ac8e/6/BOXART-16X9/en-US._SX624_FMavif_PQ65_.jpeg"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://wsrv.nl/?url=https://images-na.ssl-images-amazon.com/images/S/le-target-images-prod/amzn1.dv.gti.efa3275c-655f-42dc-98ea-ed7b4a10ac8e/6/BOXART-16X9/en-US._SX624_FMavif_PQ65_.jpeg"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=d774600e3915f0264fecd0bfc36d1789"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=d774600e3915f0264fecd0bfc36d1789"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=d774600e3915f0264fecd0bfc36d1789"
            }
        ]
    },
    {
        "id": "33caf1039cdf021615ab5bcf3c497bc5",
        "title": "Spanish Grand Prix - Qualifying",
        "sport": "FOOTBALL",
        "league": "MOTORSPORTS",
        "startTime": "09/12/26 7:30 PM",
        "isLive": false,
        "team1": {
            "name": "Spanish Grand Prix - Qualifying",
            "logo": "https://wsrv.nl/?url=https://images-na.ssl-images-amazon.com/images/S/le-target-images-prod/amzn1.dv.gti.2e7c7f96-8f75-4314-b8b1-d0f515ef20c7/3/BOXART-16X9/en-US._SX624_FMavif_PQ65_.jpeg"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://wsrv.nl/?url=https://images-na.ssl-images-amazon.com/images/S/le-target-images-prod/amzn1.dv.gti.2e7c7f96-8f75-4314-b8b1-d0f515ef20c7/3/BOXART-16X9/en-US._SX624_FMavif_PQ65_.jpeg"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=33caf1039cdf021615ab5bcf3c497bc5"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=33caf1039cdf021615ab5bcf3c497bc5"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=33caf1039cdf021615ab5bcf3c497bc5"
            }
        ]
    },
    {
        "id": "6ef3b4468e79f087da38699db85c997b",
        "title": "CARIBBEAN PREMIER LEAGUE",
        "sport": "FOOTBALL",
        "league": "Watch Now",
        "startTime": "VS",
        "isLive": false,
        "team1": {
            "name": "CARIBBEAN PREMIER LEAGUE",
            "logo": "https://serveproxy.com/?url=https://our.today/wp-content/uploads/2026/07/CPL-Caribbean-Premier-League.jpg"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://serveproxy.com/?url=https://our.today/wp-content/uploads/2026/07/CPL-Caribbean-Premier-League.jpg"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=6ef3b4468e79f087da38699db85c997b"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=6ef3b4468e79f087da38699db85c997b"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=6ef3b4468e79f087da38699db85c997b"
            }
        ]
    },
    {
        "id": "95b737bdf2639bc03c55619b17b68407",
        "title": "EUROPEAN T20 PREMIER LEAGUE",
        "sport": "FOOTBALL",
        "league": "Watch Now",
        "startTime": "VS",
        "isLive": false,
        "team1": {
            "name": "EUROPEAN T20 PREMIER LEAGUE",
            "logo": "https://serveproxy.com/?url=https://upload.wikimedia.org/wikipedia/en/1/10/ETPL_Blue_Logo.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://serveproxy.com/?url=https://upload.wikimedia.org/wikipedia/en/1/10/ETPL_Blue_Logo.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=95b737bdf2639bc03c55619b17b68407"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=95b737bdf2639bc03c55619b17b68407"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=95b737bdf2639bc03c55619b17b68407"
            }
        ]
    },
    {
        "id": "cb4e78225c41a868e5282e0888120b89",
        "title": "MOTOGP - GRAN PREMIO DI SAN MARINO",
        "sport": "FOOTBALL",
        "league": "Watch Now",
        "startTime": "VS",
        "isLive": false,
        "team1": {
            "name": "MOTOGP - GRAN PREMIO DI SAN MARINO",
            "logo": "https://serveproxy.com/?url=https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8fGgE14VBFQKRIMiWIvOlIwpL6AEobQtL3OkLLu7AzsBPGzeXGHsz5PL0NED5DHlAyKCFhPHoNaFB4Z1csH_vvpU47Pbtslr1za618knr-wojLCDa1hyW40v59Qw_UjMGWLREzicm9ZDl7yMuylyu7xMdMoQG3-XXKLoZafem7lpKqxfKavQu-33Mbck/s1600/mgp.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://serveproxy.com/?url=https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8fGgE14VBFQKRIMiWIvOlIwpL6AEobQtL3OkLLu7AzsBPGzeXGHsz5PL0NED5DHlAyKCFhPHoNaFB4Z1csH_vvpU47Pbtslr1za618knr-wojLCDa1hyW40v59Qw_UjMGWLREzicm9ZDl7yMuylyu7xMdMoQG3-XXKLoZafem7lpKqxfKavQu-33Mbck/s1600/mgp.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=cb4e78225c41a868e5282e0888120b89"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=cb4e78225c41a868e5282e0888120b89"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=cb4e78225c41a868e5282e0888120b89"
            }
        ]
    },
    {
        "id": "458b1b91e5b8aa2f80422e4942eaf949",
        "title": "US OPEN",
        "sport": "FOOTBALL",
        "league": "Watch Now",
        "startTime": "VS",
        "isLive": false,
        "team1": {
            "name": "US OPEN",
            "logo": "https://serveproxy.com/?url=https://img.sofascore.com/api/v1/unique-tournament/2449/image"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://serveproxy.com/?url=https://img.sofascore.com/api/v1/unique-tournament/2449/image"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=458b1b91e5b8aa2f80422e4942eaf949"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=458b1b91e5b8aa2f80422e4942eaf949"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=458b1b91e5b8aa2f80422e4942eaf949"
            }
        ]
    },
    {
        "id": "e3877227c7d0e727f071670567fd785e",
        "title": "UFC FIGHT NIGHT: SILVA VS DELGADO",
        "sport": "FOOTBALL",
        "league": "Watch Now",
        "startTime": "VS",
        "isLive": false,
        "team1": {
            "name": "UFC FIGHT NIGHT: SILVA",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/ufc-us.png"
        },
        "team2": {
            "name": "DELGADO",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/ufc-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=e3877227c7d0e727f071670567fd785e"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=e3877227c7d0e727f071670567fd785e"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=e3877227c7d0e727f071670567fd785e"
            }
        ]
    },
    {
        "id": "82b059063295bfccf25fc6aafc2a302e",
        "title": "NAMIBIA VS SOUTH AFRICA",
        "sport": "FOOTBALL",
        "league": "Watch Now",
        "startTime": "VS",
        "isLive": false,
        "team1": {
            "name": "NAMIBIA",
            "logo": "https://serveproxy.com/?url=https://img.sofascore.com/api/v1/team/187747/image"
        },
        "team2": {
            "name": "SOUTH AFRICA",
            "logo": "https://serveproxy.com/?url=https://img.sofascore.com/api/v1/team/199275/image"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=82b059063295bfccf25fc6aafc2a302e"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=82b059063295bfccf25fc6aafc2a302e"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=82b059063295bfccf25fc6aafc2a302e"
            }
        ]
    },
    {
        "id": "41447d782da237552d6feed53390eeaa",
        "title": "ENGLAND VS PAKISTAN",
        "sport": "FOOTBALL",
        "league": "Watch Now",
        "startTime": "VS",
        "isLive": false,
        "team1": {
            "name": "ENGLAND",
            "logo": "https://serveproxy.com/?url=https://img.sofascore.com/api/v1/team/187754/image"
        },
        "team2": {
            "name": "PAKISTAN",
            "logo": "https://serveproxy.com/?url=https://img.sofascore.com/api/v1/team/187757/image"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=41447d782da237552d6feed53390eeaa"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=41447d782da237552d6feed53390eeaa"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=41447d782da237552d6feed53390eeaa"
            }
        ]
    },
    {
        "id": "40ec11cd330f7a4038994796f5c95bb6",
        "title": "MANCHESTER UNITED VS SABAH FK",
        "sport": "FOOTBALL",
        "league": "Watch Now",
        "startTime": "VS",
        "isLive": false,
        "team1": {
            "name": "MANCHESTER UNITED",
            "logo": "https://serveproxy.com/?url=https://img.sofascore.com/api/v1/team/267828/image"
        },
        "team2": {
            "name": "SABAH FK",
            "logo": "https://serveproxy.com/?url=https://img.sofascore.com/api/v1/team/35/image"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=40ec11cd330f7a4038994796f5c95bb6"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=40ec11cd330f7a4038994796f5c95bb6"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=40ec11cd330f7a4038994796f5c95bb6"
            }
        ]
    },
    {
        "id": "aa82e77ed032f5aa02b859b2e70e402b",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://serveproxy.com/?url=https://img.sofascore.com/api/v1/team/656/image"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://serveproxy.com/?url=https://img.sofascore.com/api/v1/team/2672/image"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=aa82e77ed032f5aa02b859b2e70e402b"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=aa82e77ed032f5aa02b859b2e70e402b"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=aa82e77ed032f5aa02b859b2e70e402b"
            }
        ]
    },
    {
        "id": "f74c20f453cff3161c339297357ffc4e",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://serveproxy.com/?url=https://img.sofascore.com/api/v1/team/36360/image"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://serveproxy.com/?url=https://img.sofascore.com/api/v1/team/2704/image"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=f74c20f453cff3161c339297357ffc4e"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=f74c20f453cff3161c339297357ffc4e"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=f74c20f453cff3161c339297357ffc4e"
            }
        ]
    },
    {
        "id": "7a63e88c9237455813ede624a401d615",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://serveproxy.com/?url=https://img.sofascore.com/api/v1/team/72/image"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://serveproxy.com/?url=https://img.sofascore.com/api/v1/team/133/image"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=7a63e88c9237455813ede624a401d615"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=7a63e88c9237455813ede624a401d615"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=7a63e88c9237455813ede624a401d615"
            }
        ]
    },
    {
        "id": "16c61a8a6676f5dd837b70e5657e065f",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://serveproxy.com/?url=https://img.sofascore.com/api/v1/team/2702/image"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://serveproxy.com/?url=https://img.sofascore.com/api/v1/team/3052/image"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=16c61a8a6676f5dd837b70e5657e065f"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=16c61a8a6676f5dd837b70e5657e065f"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=16c61a8a6676f5dd837b70e5657e065f"
            }
        ]
    },
    {
        "id": "aacee924fa289ac7af092830cfcb9fcd",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://serveproxy.com/?url=https://img.sofascore.com/api/v1/team/3313/image"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://serveproxy.com/?url=https://img.sofascore.com/api/v1/team/2952/image"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=aacee924fa289ac7af092830cfcb9fcd"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=aacee924fa289ac7af092830cfcb9fcd"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=aacee924fa289ac7af092830cfcb9fcd"
            }
        ]
    },
    {
        "id": "9d98ec9898b49eae2b69029287d8323d",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://serveproxy.com/?url=https://img.sofascore.com/api/v1/team/5981/image"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://serveproxy.com/?url=https://img.sofascore.com/api/v1/team/39723/image"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=9d98ec9898b49eae2b69029287d8323d"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=9d98ec9898b49eae2b69029287d8323d"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=9d98ec9898b49eae2b69029287d8323d"
            }
        ]
    },
    {
        "id": "cdc7dd9cd7056b6c9263c13ee3d79a83",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://serveproxy.com/?url=https://img.sofascore.com/api/v1/team/174972/image"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://serveproxy.com/?url=https://img.sofascore.com/api/v1/team/2301/image"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=cdc7dd9cd7056b6c9263c13ee3d79a83"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=cdc7dd9cd7056b6c9263c13ee3d79a83"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=cdc7dd9cd7056b6c9263c13ee3d79a83"
            }
        ]
    },
    {
        "id": "cebdcd9ddd48df0e16b34a1562cb4fc0",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://serveproxy.com/?url=https://img.sofascore.com/api/v1/team/187809/image"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://serveproxy.com/?url=https://img.sofascore.com/api/v1/team/213119/image"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=cebdcd9ddd48df0e16b34a1562cb4fc0"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=cebdcd9ddd48df0e16b34a1562cb4fc0"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=cebdcd9ddd48df0e16b34a1562cb4fc0"
            }
        ]
    },
    {
        "id": "ad5796f3635b6da6a666c076013f2bc7",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://serveproxy.com/?url=https://scdnmain.net/assets/tournament/40-c.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://serveproxy.com/?url=https://scdnmain.net/assets/tournament/40-c.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=ad5796f3635b6da6a666c076013f2bc7"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=ad5796f3635b6da6a666c076013f2bc7"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=ad5796f3635b6da6a666c076013f2bc7"
            }
        ]
    },
    {
        "id": "984b145c2056eca5a6f1616d904ff807",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=984b145c2056eca5a6f1616d904ff807"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=984b145c2056eca5a6f1616d904ff807"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=984b145c2056eca5a6f1616d904ff807"
            }
        ]
    },
    {
        "id": "022336e0e72e417f4cc8eb5c56f0008e",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=022336e0e72e417f4cc8eb5c56f0008e"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=022336e0e72e417f4cc8eb5c56f0008e"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=022336e0e72e417f4cc8eb5c56f0008e"
            }
        ]
    },
    {
        "id": "caa43d3ed8b5b17e84777ca67bed64c3",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=caa43d3ed8b5b17e84777ca67bed64c3"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=caa43d3ed8b5b17e84777ca67bed64c3"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=caa43d3ed8b5b17e84777ca67bed64c3"
            }
        ]
    },
    {
        "id": "29678d0a4fde5751bfbfc953cc00937e",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=29678d0a4fde5751bfbfc953cc00937e"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=29678d0a4fde5751bfbfc953cc00937e"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=29678d0a4fde5751bfbfc953cc00937e"
            }
        ]
    },
    {
        "id": "dbfb30ddf513baaf75c4bfb8d4fcde27",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=dbfb30ddf513baaf75c4bfb8d4fcde27"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=dbfb30ddf513baaf75c4bfb8d4fcde27"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=dbfb30ddf513baaf75c4bfb8d4fcde27"
            }
        ]
    },
    {
        "id": "b9d7f5f8997caad61d57b16bb65e79cb",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=b9d7f5f8997caad61d57b16bb65e79cb"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=b9d7f5f8997caad61d57b16bb65e79cb"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=b9d7f5f8997caad61d57b16bb65e79cb"
            }
        ]
    },
    {
        "id": "77cd15943cfe964cc29595d932ccae67",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=77cd15943cfe964cc29595d932ccae67"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=77cd15943cfe964cc29595d932ccae67"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=77cd15943cfe964cc29595d932ccae67"
            }
        ]
    },
    {
        "id": "eb2faa6d1a2b0103f2bfac2d57d0cc14",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=eb2faa6d1a2b0103f2bfac2d57d0cc14"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=eb2faa6d1a2b0103f2bfac2d57d0cc14"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=eb2faa6d1a2b0103f2bfac2d57d0cc14"
            }
        ]
    },
    {
        "id": "d02bd4201ce3f643e4dc4f4736cbb73e",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=d02bd4201ce3f643e4dc4f4736cbb73e"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=d02bd4201ce3f643e4dc4f4736cbb73e"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=d02bd4201ce3f643e4dc4f4736cbb73e"
            }
        ]
    },
    {
        "id": "473bf042f6abda684404552e79fd459c",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=473bf042f6abda684404552e79fd459c"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=473bf042f6abda684404552e79fd459c"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=473bf042f6abda684404552e79fd459c"
            }
        ]
    },
    {
        "id": "066f8c3567e7b1b7ef14504a1cf28485",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=066f8c3567e7b1b7ef14504a1cf28485"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=066f8c3567e7b1b7ef14504a1cf28485"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=066f8c3567e7b1b7ef14504a1cf28485"
            }
        ]
    },
    {
        "id": "b566f63e2e26e8d284eddd6cf05a5e1c",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=b566f63e2e26e8d284eddd6cf05a5e1c"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=b566f63e2e26e8d284eddd6cf05a5e1c"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=b566f63e2e26e8d284eddd6cf05a5e1c"
            }
        ]
    },
    {
        "id": "ff659d610a7abd1534f21584a4659f2e",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=ff659d610a7abd1534f21584a4659f2e"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=ff659d610a7abd1534f21584a4659f2e"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=ff659d610a7abd1534f21584a4659f2e"
            }
        ]
    },
    {
        "id": "GRNTe94e4aaa07ed7857bc2b",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=GRNTe94e4aaa07ed7857bc2b"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=GRNTe94e4aaa07ed7857bc2b"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=GRNTe94e4aaa07ed7857bc2b"
            }
        ]
    },
    {
        "id": "71e7b656f77fbfe9ffc787e99eb2c554",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=71e7b656f77fbfe9ffc787e99eb2c554"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=71e7b656f77fbfe9ffc787e99eb2c554"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=71e7b656f77fbfe9ffc787e99eb2c554"
            }
        ]
    },
    {
        "id": "4668533b720211f2c639cdc9f480c61f",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=4668533b720211f2c639cdc9f480c61f"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=4668533b720211f2c639cdc9f480c61f"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=4668533b720211f2c639cdc9f480c61f"
            }
        ]
    },
    {
        "id": "1740bdcb43eb27db1cf0a62459f5717c",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=1740bdcb43eb27db1cf0a62459f5717c"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=1740bdcb43eb27db1cf0a62459f5717c"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=1740bdcb43eb27db1cf0a62459f5717c"
            }
        ]
    },
    {
        "id": "GRNTa230c9a75752dcd974e8",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=GRNTa230c9a75752dcd974e8"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=GRNTa230c9a75752dcd974e8"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=GRNTa230c9a75752dcd974e8"
            }
        ]
    },
    {
        "id": "b419ff4c423a3f209b785ad5a0e9518b",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=b419ff4c423a3f209b785ad5a0e9518b"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=b419ff4c423a3f209b785ad5a0e9518b"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=b419ff4c423a3f209b785ad5a0e9518b"
            }
        ]
    },
    {
        "id": "c39d52ae68857f9f7dd585768bd4fda4",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=c39d52ae68857f9f7dd585768bd4fda4"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=c39d52ae68857f9f7dd585768bd4fda4"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=c39d52ae68857f9f7dd585768bd4fda4"
            }
        ]
    },
    {
        "id": "164fa8573f7b4d15e15ce8860b6f6754",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=164fa8573f7b4d15e15ce8860b6f6754"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=164fa8573f7b4d15e15ce8860b6f6754"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=164fa8573f7b4d15e15ce8860b6f6754"
            }
        ]
    },
    {
        "id": "e298ec7713e5fa4c9aa08d1595ffe0d2",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=e298ec7713e5fa4c9aa08d1595ffe0d2"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=e298ec7713e5fa4c9aa08d1595ffe0d2"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=e298ec7713e5fa4c9aa08d1595ffe0d2"
            }
        ]
    },
    {
        "id": "GRNTd5e05bc6697965f1b83b",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=GRNTd5e05bc6697965f1b83b"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=GRNTd5e05bc6697965f1b83b"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=GRNTd5e05bc6697965f1b83b"
            }
        ]
    },
    {
        "id": "a4055f9643e2a346d8d97b39a0adeb55",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=a4055f9643e2a346d8d97b39a0adeb55"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=a4055f9643e2a346d8d97b39a0adeb55"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=a4055f9643e2a346d8d97b39a0adeb55"
            }
        ]
    },
    {
        "id": "9e26cfcb3ffc6fa31e6c9e7b4f4b7868",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=9e26cfcb3ffc6fa31e6c9e7b4f4b7868"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=9e26cfcb3ffc6fa31e6c9e7b4f4b7868"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=9e26cfcb3ffc6fa31e6c9e7b4f4b7868"
            }
        ]
    },
    {
        "id": "a95a5f1455796665c98307cde693a1c5",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=a95a5f1455796665c98307cde693a1c5"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=a95a5f1455796665c98307cde693a1c5"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=a95a5f1455796665c98307cde693a1c5"
            }
        ]
    },
    {
        "id": "GRNTb6a5969a856312907c98",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=GRNTb6a5969a856312907c98"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=GRNTb6a5969a856312907c98"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=GRNTb6a5969a856312907c98"
            }
        ]
    },
    {
        "id": "GRNTd228e786190d41b892d8",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=GRNTd228e786190d41b892d8"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=GRNTd228e786190d41b892d8"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=GRNTd228e786190d41b892d8"
            }
        ]
    },
    {
        "id": "GRNTd0c7c82d89d1e86b96b8",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=GRNTd0c7c82d89d1e86b96b8"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=GRNTd0c7c82d89d1e86b96b8"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=GRNTd0c7c82d89d1e86b96b8"
            }
        ]
    },
    {
        "id": "GRNT821690ea7ff7bd0a353e",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=GRNT821690ea7ff7bd0a353e"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=GRNT821690ea7ff7bd0a353e"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=GRNT821690ea7ff7bd0a353e"
            }
        ]
    },
    {
        "id": "GRNTea6a004ba452f4237e6d",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=GRNTea6a004ba452f4237e6d"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=GRNTea6a004ba452f4237e6d"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=GRNTea6a004ba452f4237e6d"
            }
        ]
    },
    {
        "id": "GRNTf08b41d3fdd6f185221a",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=GRNTf08b41d3fdd6f185221a"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=GRNTf08b41d3fdd6f185221a"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=GRNTf08b41d3fdd6f185221a"
            }
        ]
    },
    {
        "id": "GRNT35d1b2e077af93dbbb3f",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=GRNT35d1b2e077af93dbbb3f"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=GRNT35d1b2e077af93dbbb3f"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=GRNT35d1b2e077af93dbbb3f"
            }
        ]
    },
    {
        "id": "GRNT06f2f9ad65c143394e79",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=GRNT06f2f9ad65c143394e79"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=GRNT06f2f9ad65c143394e79"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=GRNT06f2f9ad65c143394e79"
            }
        ]
    },
    {
        "id": "GRNT705db3468e6f6e58b9e5",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=GRNT705db3468e6f6e58b9e5"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=GRNT705db3468e6f6e58b9e5"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=GRNT705db3468e6f6e58b9e5"
            }
        ]
    },
    {
        "id": "GRNT87de93d00af0c41fc280",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=GRNT87de93d00af0c41fc280"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=GRNT87de93d00af0c41fc280"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=GRNT87de93d00af0c41fc280"
            }
        ]
    },
    {
        "id": "GRNT025b64a2bd71353d37e9",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=GRNT025b64a2bd71353d37e9"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=GRNT025b64a2bd71353d37e9"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=GRNT025b64a2bd71353d37e9"
            }
        ]
    },
    {
        "id": "GRNT36e13b3e730b64d2098d",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=GRNT36e13b3e730b64d2098d"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=GRNT36e13b3e730b64d2098d"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=GRNT36e13b3e730b64d2098d"
            }
        ]
    },
    {
        "id": "GRNT08d72312f541bf3b0fb1",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=GRNT08d72312f541bf3b0fb1"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=GRNT08d72312f541bf3b0fb1"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=GRNT08d72312f541bf3b0fb1"
            }
        ]
    },
    {
        "id": "GRNT440f6b881955f3f6c8f3",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=GRNT440f6b881955f3f6c8f3"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=GRNT440f6b881955f3f6c8f3"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=GRNT440f6b881955f3f6c8f3"
            }
        ]
    },
    {
        "id": "9958de9b7c6b5166b4048302ceacd8a1",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=9958de9b7c6b5166b4048302ceacd8a1"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=9958de9b7c6b5166b4048302ceacd8a1"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=9958de9b7c6b5166b4048302ceacd8a1"
            }
        ]
    },
    {
        "id": "0b7a9a1b5ae357d298cd551eddf4b0fa",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=0b7a9a1b5ae357d298cd551eddf4b0fa"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=0b7a9a1b5ae357d298cd551eddf4b0fa"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=0b7a9a1b5ae357d298cd551eddf4b0fa"
            }
        ]
    },
    {
        "id": "4f1c849bae56f4072cf6e00dc9c5b486",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=4f1c849bae56f4072cf6e00dc9c5b486"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=4f1c849bae56f4072cf6e00dc9c5b486"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=4f1c849bae56f4072cf6e00dc9c5b486"
            }
        ]
    },
    {
        "id": "3a65712fc3694f62de964717c63bb986",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=3a65712fc3694f62de964717c63bb986"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=3a65712fc3694f62de964717c63bb986"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=3a65712fc3694f62de964717c63bb986"
            }
        ]
    },
    {
        "id": "650ab4f7877442c2e73520375a39579c",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=650ab4f7877442c2e73520375a39579c"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=650ab4f7877442c2e73520375a39579c"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=650ab4f7877442c2e73520375a39579c"
            }
        ]
    },
    {
        "id": "c2d12a611496aec6c817042830f04e39",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=c2d12a611496aec6c817042830f04e39"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=c2d12a611496aec6c817042830f04e39"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=c2d12a611496aec6c817042830f04e39"
            }
        ]
    },
    {
        "id": "d6fcb786f151df65e5fee2fec00b618a",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=d6fcb786f151df65e5fee2fec00b618a"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=d6fcb786f151df65e5fee2fec00b618a"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=d6fcb786f151df65e5fee2fec00b618a"
            }
        ]
    },
    {
        "id": "8f82d752cee573ed64f7bd1186dd54e4",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=8f82d752cee573ed64f7bd1186dd54e4"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=8f82d752cee573ed64f7bd1186dd54e4"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=8f82d752cee573ed64f7bd1186dd54e4"
            }
        ]
    },
    {
        "id": "9bb4eb47a1385954ea6c36d1e3dbad19",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=9bb4eb47a1385954ea6c36d1e3dbad19"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=9bb4eb47a1385954ea6c36d1e3dbad19"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=9bb4eb47a1385954ea6c36d1e3dbad19"
            }
        ]
    },
    {
        "id": "bfa39da044211b2070342801e65e74f7",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=bfa39da044211b2070342801e65e74f7"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=bfa39da044211b2070342801e65e74f7"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=bfa39da044211b2070342801e65e74f7"
            }
        ]
    },
    {
        "id": "75978bb377168b95ddf0b6965a1166c1",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=75978bb377168b95ddf0b6965a1166c1"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=75978bb377168b95ddf0b6965a1166c1"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=75978bb377168b95ddf0b6965a1166c1"
            }
        ]
    },
    {
        "id": "9e72d04a077fc8d336e7e0021f6932b4",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=9e72d04a077fc8d336e7e0021f6932b4"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=9e72d04a077fc8d336e7e0021f6932b4"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=9e72d04a077fc8d336e7e0021f6932b4"
            }
        ]
    },
    {
        "id": "1c6808fc0602d7fe6b3000bab12f8e26",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=1c6808fc0602d7fe6b3000bab12f8e26"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=1c6808fc0602d7fe6b3000bab12f8e26"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=1c6808fc0602d7fe6b3000bab12f8e26"
            }
        ]
    },
    {
        "id": "1a64dc99a0d07a86323d15bc90ed130a",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=1a64dc99a0d07a86323d15bc90ed130a"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=1a64dc99a0d07a86323d15bc90ed130a"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=1a64dc99a0d07a86323d15bc90ed130a"
            }
        ]
    },
    {
        "id": "89d1558300c49dd93fdd7872d54c1671",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=89d1558300c49dd93fdd7872d54c1671"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=89d1558300c49dd93fdd7872d54c1671"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=89d1558300c49dd93fdd7872d54c1671"
            }
        ]
    },
    {
        "id": "962794eb39e7b211dd61dd57805a07b8",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=962794eb39e7b211dd61dd57805a07b8"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=962794eb39e7b211dd61dd57805a07b8"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=962794eb39e7b211dd61dd57805a07b8"
            }
        ]
    },
    {
        "id": "ef8ec5c0de6f3f87aaf6ce642d9ee1c4",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=ef8ec5c0de6f3f87aaf6ce642d9ee1c4"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=ef8ec5c0de6f3f87aaf6ce642d9ee1c4"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=ef8ec5c0de6f3f87aaf6ce642d9ee1c4"
            }
        ]
    },
    {
        "id": "2c4de9413c64d64e1c26dfa6997e86d2",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=2c4de9413c64d64e1c26dfa6997e86d2"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=2c4de9413c64d64e1c26dfa6997e86d2"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=2c4de9413c64d64e1c26dfa6997e86d2"
            }
        ]
    },
    {
        "id": "f5c31329c7a8e209f6c7fe46cb84e436",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=f5c31329c7a8e209f6c7fe46cb84e436"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=f5c31329c7a8e209f6c7fe46cb84e436"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=f5c31329c7a8e209f6c7fe46cb84e436"
            }
        ]
    },
    {
        "id": "d85536e0c28cf57f693d65565afa0540",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=d85536e0c28cf57f693d65565afa0540"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=d85536e0c28cf57f693d65565afa0540"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=d85536e0c28cf57f693d65565afa0540"
            }
        ]
    },
    {
        "id": "652cc97b2011314eeb5cdee3b664b9f5",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=652cc97b2011314eeb5cdee3b664b9f5"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=652cc97b2011314eeb5cdee3b664b9f5"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=652cc97b2011314eeb5cdee3b664b9f5"
            }
        ]
    },
    {
        "id": "df46ceae601c6086c4943d4613a2595e",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=df46ceae601c6086c4943d4613a2595e"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=df46ceae601c6086c4943d4613a2595e"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=df46ceae601c6086c4943d4613a2595e"
            }
        ]
    },
    {
        "id": "aff8dd95e2e970c3cedf25da89f0bd33",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=aff8dd95e2e970c3cedf25da89f0bd33"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=aff8dd95e2e970c3cedf25da89f0bd33"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=aff8dd95e2e970c3cedf25da89f0bd33"
            }
        ]
    },
    {
        "id": "2dce9c3559b25aee9f8b6453210a83c4",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=2dce9c3559b25aee9f8b6453210a83c4"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=2dce9c3559b25aee9f8b6453210a83c4"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=2dce9c3559b25aee9f8b6453210a83c4"
            }
        ]
    },
    {
        "id": "GRNT7031ecdf695ab120d5ef",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=GRNT7031ecdf695ab120d5ef"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=GRNT7031ecdf695ab120d5ef"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=GRNT7031ecdf695ab120d5ef"
            }
        ]
    },
    {
        "id": "GRNTc8002070d4269c1d864e",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=GRNTc8002070d4269c1d864e"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=GRNTc8002070d4269c1d864e"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=GRNTc8002070d4269c1d864e"
            }
        ]
    },
    {
        "id": "GRNTc54a52ce6f61deb65488",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=GRNTc54a52ce6f61deb65488"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=GRNTc54a52ce6f61deb65488"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=GRNTc54a52ce6f61deb65488"
            }
        ]
    },
    {
        "id": "GRNTded42bcc390584458206",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=GRNTded42bcc390584458206"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=GRNTded42bcc390584458206"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=GRNTded42bcc390584458206"
            }
        ]
    },
    {
        "id": "GRNTc67e10dbf27c4149e062",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=GRNTc67e10dbf27c4149e062"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=GRNTc67e10dbf27c4149e062"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=GRNTc67e10dbf27c4149e062"
            }
        ]
    },
    {
        "id": "GRNT219ab98fbaabb80c8013",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=GRNT219ab98fbaabb80c8013"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=GRNT219ab98fbaabb80c8013"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=GRNT219ab98fbaabb80c8013"
            }
        ]
    },
    {
        "id": "GRNTc743b5ca543a018a1d6f",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=GRNTc743b5ca543a018a1d6f"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=GRNTc743b5ca543a018a1d6f"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=GRNTc743b5ca543a018a1d6f"
            }
        ]
    },
    {
        "id": "GRNT1160de9a85aec84bc676",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=GRNT1160de9a85aec84bc676"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=GRNT1160de9a85aec84bc676"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=GRNT1160de9a85aec84bc676"
            }
        ]
    },
    {
        "id": "983b575744539c64f6b334a9007d8c93",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=983b575744539c64f6b334a9007d8c93"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=983b575744539c64f6b334a9007d8c93"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=983b575744539c64f6b334a9007d8c93"
            }
        ]
    },
    {
        "id": "3c6e2444e77afddd3bd4433902f170be",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=3c6e2444e77afddd3bd4433902f170be"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=3c6e2444e77afddd3bd4433902f170be"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=3c6e2444e77afddd3bd4433902f170be"
            }
        ]
    },
    {
        "id": "ea12f4cc4711d953cde74522eb4002fb",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=ea12f4cc4711d953cde74522eb4002fb"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=ea12f4cc4711d953cde74522eb4002fb"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=ea12f4cc4711d953cde74522eb4002fb"
            }
        ]
    },
    {
        "id": "36df5c0a65e367091135a8ed8d5354ce",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=36df5c0a65e367091135a8ed8d5354ce"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=36df5c0a65e367091135a8ed8d5354ce"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=36df5c0a65e367091135a8ed8d5354ce"
            }
        ]
    },
    {
        "id": "28fb86aaa05544c83d3afcb12e805142",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=28fb86aaa05544c83d3afcb12e805142"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=28fb86aaa05544c83d3afcb12e805142"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=28fb86aaa05544c83d3afcb12e805142"
            }
        ]
    },
    {
        "id": "773f43af9881e13a40f420b0f9a822a4",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=773f43af9881e13a40f420b0f9a822a4"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=773f43af9881e13a40f420b0f9a822a4"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=773f43af9881e13a40f420b0f9a822a4"
            }
        ]
    },
    {
        "id": "6a464d5c3167a836736813a867c5fbed",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=6a464d5c3167a836736813a867c5fbed"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=6a464d5c3167a836736813a867c5fbed"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=6a464d5c3167a836736813a867c5fbed"
            }
        ]
    },
    {
        "id": "GRNTb759d3fbc3332dd6e27b",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=GRNTb759d3fbc3332dd6e27b"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=GRNTb759d3fbc3332dd6e27b"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=GRNTb759d3fbc3332dd6e27b"
            }
        ]
    },
    {
        "id": "9638ed3f8ce91ca8ed5acd78841a315f",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=9638ed3f8ce91ca8ed5acd78841a315f"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=9638ed3f8ce91ca8ed5acd78841a315f"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=9638ed3f8ce91ca8ed5acd78841a315f"
            }
        ]
    },
    {
        "id": "c62d501ffe71c9da39e1f8da1a0929ad",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=c62d501ffe71c9da39e1f8da1a0929ad"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=c62d501ffe71c9da39e1f8da1a0929ad"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=c62d501ffe71c9da39e1f8da1a0929ad"
            }
        ]
    },
    {
        "id": "e8a8784fbf2528926545562be41b56e5",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=e8a8784fbf2528926545562be41b56e5"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=e8a8784fbf2528926545562be41b56e5"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=e8a8784fbf2528926545562be41b56e5"
            }
        ]
    },
    {
        "id": "ab89fc32acc6f0cbbd59d79d6669c09d",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=ab89fc32acc6f0cbbd59d79d6669c09d"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=ab89fc32acc6f0cbbd59d79d6669c09d"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=ab89fc32acc6f0cbbd59d79d6669c09d"
            }
        ]
    },
    {
        "id": "01e54d3253a7ef6c58c3812f683db200",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=01e54d3253a7ef6c58c3812f683db200"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=01e54d3253a7ef6c58c3812f683db200"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=01e54d3253a7ef6c58c3812f683db200"
            }
        ]
    },
    {
        "id": "6d72cd442e0f4a8f8f2a7ae054bf8efc",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=6d72cd442e0f4a8f8f2a7ae054bf8efc"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=6d72cd442e0f4a8f8f2a7ae054bf8efc"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=6d72cd442e0f4a8f8f2a7ae054bf8efc"
            }
        ]
    },
    {
        "id": "GRNT83f842b74172a53e485b",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=GRNT83f842b74172a53e485b"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=GRNT83f842b74172a53e485b"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=GRNT83f842b74172a53e485b"
            }
        ]
    },
    {
        "id": "d6701e60c3658f9fc8dfff86d4a8f554",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=d6701e60c3658f9fc8dfff86d4a8f554"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=d6701e60c3658f9fc8dfff86d4a8f554"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=d6701e60c3658f9fc8dfff86d4a8f554"
            }
        ]
    },
    {
        "id": "09074a37d9d0bb4186cdd4a3f619bc38",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=09074a37d9d0bb4186cdd4a3f619bc38"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=09074a37d9d0bb4186cdd4a3f619bc38"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=09074a37d9d0bb4186cdd4a3f619bc38"
            }
        ]
    },
    {
        "id": "ff061deb5999d2a40af581e56577859e",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=ff061deb5999d2a40af581e56577859e"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=ff061deb5999d2a40af581e56577859e"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=ff061deb5999d2a40af581e56577859e"
            }
        ]
    },
    {
        "id": "a196c3bb53b3d8ec3911b07133fbf3ae",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=a196c3bb53b3d8ec3911b07133fbf3ae"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=a196c3bb53b3d8ec3911b07133fbf3ae"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=a196c3bb53b3d8ec3911b07133fbf3ae"
            }
        ]
    },
    {
        "id": "fe982d2a0fd12d612915bab52a95f0db",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=fe982d2a0fd12d612915bab52a95f0db"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=fe982d2a0fd12d612915bab52a95f0db"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=fe982d2a0fd12d612915bab52a95f0db"
            }
        ]
    },
    {
        "id": "05c4a49d55eca29714cc41fdb0e6affb",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=05c4a49d55eca29714cc41fdb0e6affb"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=05c4a49d55eca29714cc41fdb0e6affb"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=05c4a49d55eca29714cc41fdb0e6affb"
            }
        ]
    },
    {
        "id": "d5d5d8205b715b6f0026ee012eb9f680",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=d5d5d8205b715b6f0026ee012eb9f680"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=d5d5d8205b715b6f0026ee012eb9f680"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=d5d5d8205b715b6f0026ee012eb9f680"
            }
        ]
    },
    {
        "id": "637d4dea4a2a8edcd550f2a1d8195173",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=637d4dea4a2a8edcd550f2a1d8195173"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=637d4dea4a2a8edcd550f2a1d8195173"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=637d4dea4a2a8edcd550f2a1d8195173"
            }
        ]
    },
    {
        "id": "de5ce1ec46b52142aa316d6a6ae31276",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=de5ce1ec46b52142aa316d6a6ae31276"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=de5ce1ec46b52142aa316d6a6ae31276"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=de5ce1ec46b52142aa316d6a6ae31276"
            }
        ]
    },
    {
        "id": "8034326130ec2632c27e4654eea600a9",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=8034326130ec2632c27e4654eea600a9"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=8034326130ec2632c27e4654eea600a9"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=8034326130ec2632c27e4654eea600a9"
            }
        ]
    },
    {
        "id": "cdaa353181d4325589824013183f2617",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=cdaa353181d4325589824013183f2617"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=cdaa353181d4325589824013183f2617"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=cdaa353181d4325589824013183f2617"
            }
        ]
    },
    {
        "id": "GRNT33aac91e8540bcf0c111",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=GRNT33aac91e8540bcf0c111"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=GRNT33aac91e8540bcf0c111"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=GRNT33aac91e8540bcf0c111"
            }
        ]
    },
    {
        "id": "09b09dfa276bb69f2180767d70228182",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=09b09dfa276bb69f2180767d70228182"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=09b09dfa276bb69f2180767d70228182"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=09b09dfa276bb69f2180767d70228182"
            }
        ]
    },
    {
        "id": "8872f784bb810591c1e32dd02e8d6218",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=8872f784bb810591c1e32dd02e8d6218"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=8872f784bb810591c1e32dd02e8d6218"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=8872f784bb810591c1e32dd02e8d6218"
            }
        ]
    },
    {
        "id": "GRNTbfce6987d615c058edc1",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=GRNTbfce6987d615c058edc1"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=GRNTbfce6987d615c058edc1"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=GRNTbfce6987d615c058edc1"
            }
        ]
    },
    {
        "id": "GRNT0df58ad0d5d0f26aecc2",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=GRNT0df58ad0d5d0f26aecc2"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=GRNT0df58ad0d5d0f26aecc2"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=GRNT0df58ad0d5d0f26aecc2"
            }
        ]
    },
    {
        "id": "GRNTa4bbc05e1a270c6274a6",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=GRNTa4bbc05e1a270c6274a6"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=GRNTa4bbc05e1a270c6274a6"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=GRNTa4bbc05e1a270c6274a6"
            }
        ]
    },
    {
        "id": "GRNTd2842a77948d416ee0ad",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=GRNTd2842a77948d416ee0ad"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=GRNTd2842a77948d416ee0ad"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=GRNTd2842a77948d416ee0ad"
            }
        ]
    },
    {
        "id": "GRNT30aab0e0eed77f3b4834",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=GRNT30aab0e0eed77f3b4834"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=GRNT30aab0e0eed77f3b4834"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=GRNT30aab0e0eed77f3b4834"
            }
        ]
    },
    {
        "id": "GRNT4a2b62c085c818be9025",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=GRNT4a2b62c085c818be9025"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=GRNT4a2b62c085c818be9025"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=GRNT4a2b62c085c818be9025"
            }
        ]
    },
    {
        "id": "GRNT0716a2060dfde77bbe81",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=GRNT0716a2060dfde77bbe81"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=GRNT0716a2060dfde77bbe81"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=GRNT0716a2060dfde77bbe81"
            }
        ]
    },
    {
        "id": "759204519a77b112798c6ddeae293357",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=759204519a77b112798c6ddeae293357"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=759204519a77b112798c6ddeae293357"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=759204519a77b112798c6ddeae293357"
            }
        ]
    },
    {
        "id": "90bdcde9ca416a50a898899424ab4fe5",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=90bdcde9ca416a50a898899424ab4fe5"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=90bdcde9ca416a50a898899424ab4fe5"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=90bdcde9ca416a50a898899424ab4fe5"
            }
        ]
    },
    {
        "id": "e62cb8f623c3805f07c665dc032e5f18",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=e62cb8f623c3805f07c665dc032e5f18"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=e62cb8f623c3805f07c665dc032e5f18"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=e62cb8f623c3805f07c665dc032e5f18"
            }
        ]
    },
    {
        "id": "a0ed7b00f766218e2886024a6e2e9c88",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=a0ed7b00f766218e2886024a6e2e9c88"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=a0ed7b00f766218e2886024a6e2e9c88"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=a0ed7b00f766218e2886024a6e2e9c88"
            }
        ]
    },
    {
        "id": "b63989e656753dd002a451646a35e037",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=b63989e656753dd002a451646a35e037"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=b63989e656753dd002a451646a35e037"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=b63989e656753dd002a451646a35e037"
            }
        ]
    },
    {
        "id": "59bf611f25ca2e7a1cde286fdb376f0f",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=59bf611f25ca2e7a1cde286fdb376f0f"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=59bf611f25ca2e7a1cde286fdb376f0f"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=59bf611f25ca2e7a1cde286fdb376f0f"
            }
        ]
    },
    {
        "id": "3c9274c6bacd5112f7dcf4f28448486a",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=3c9274c6bacd5112f7dcf4f28448486a"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=3c9274c6bacd5112f7dcf4f28448486a"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=3c9274c6bacd5112f7dcf4f28448486a"
            }
        ]
    },
    {
        "id": "96e4c9bd197d644775f8e672f66f48cc",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=96e4c9bd197d644775f8e672f66f48cc"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=96e4c9bd197d644775f8e672f66f48cc"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=96e4c9bd197d644775f8e672f66f48cc"
            }
        ]
    },
    {
        "id": "6341efbb90a3d1f7b8b0a09701051f05",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=6341efbb90a3d1f7b8b0a09701051f05"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=6341efbb90a3d1f7b8b0a09701051f05"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=6341efbb90a3d1f7b8b0a09701051f05"
            }
        ]
    },
    {
        "id": "731658064ae33c8d46c5599e7102c1d0",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=731658064ae33c8d46c5599e7102c1d0"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=731658064ae33c8d46c5599e7102c1d0"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=731658064ae33c8d46c5599e7102c1d0"
            }
        ]
    },
    {
        "id": "01afb53a5fe149cb0f3b590171318380",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=01afb53a5fe149cb0f3b590171318380"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=01afb53a5fe149cb0f3b590171318380"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=01afb53a5fe149cb0f3b590171318380"
            }
        ]
    },
    {
        "id": "ef4894ca5a7e237e57cf63ec9538b0fe",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=ef4894ca5a7e237e57cf63ec9538b0fe"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=ef4894ca5a7e237e57cf63ec9538b0fe"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=ef4894ca5a7e237e57cf63ec9538b0fe"
            }
        ]
    },
    {
        "id": "96d83f9bc77e3a00ce28ae2f0cfc4193",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=96d83f9bc77e3a00ce28ae2f0cfc4193"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=96d83f9bc77e3a00ce28ae2f0cfc4193"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=96d83f9bc77e3a00ce28ae2f0cfc4193"
            }
        ]
    },
    {
        "id": "1b34efc217a6f0da0ebae177a5fbe932",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=1b34efc217a6f0da0ebae177a5fbe932"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=1b34efc217a6f0da0ebae177a5fbe932"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=1b34efc217a6f0da0ebae177a5fbe932"
            }
        ]
    },
    {
        "id": "GRNTc065f45ea553705d6c09",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=GRNTc065f45ea553705d6c09"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=GRNTc065f45ea553705d6c09"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=GRNTc065f45ea553705d6c09"
            }
        ]
    },
    {
        "id": "47f0e87c7e2e6285e0608c55904f9ce5",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=47f0e87c7e2e6285e0608c55904f9ce5"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=47f0e87c7e2e6285e0608c55904f9ce5"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=47f0e87c7e2e6285e0608c55904f9ce5"
            }
        ]
    },
    {
        "id": "cc20f38f728a42f0ef0ccfee7ea81d54",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=cc20f38f728a42f0ef0ccfee7ea81d54"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=cc20f38f728a42f0ef0ccfee7ea81d54"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=cc20f38f728a42f0ef0ccfee7ea81d54"
            }
        ]
    },
    {
        "id": "be3694aecd92e9a7d5a24ad284ea4843",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=be3694aecd92e9a7d5a24ad284ea4843"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=be3694aecd92e9a7d5a24ad284ea4843"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=be3694aecd92e9a7d5a24ad284ea4843"
            }
        ]
    },
    {
        "id": "b83e46f5f75e219d40b78e8c74ae3635",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=b83e46f5f75e219d40b78e8c74ae3635"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=b83e46f5f75e219d40b78e8c74ae3635"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=b83e46f5f75e219d40b78e8c74ae3635"
            }
        ]
    },
    {
        "id": "ee93f10ae73209b82b14d71a755a8741",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=ee93f10ae73209b82b14d71a755a8741"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=ee93f10ae73209b82b14d71a755a8741"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=ee93f10ae73209b82b14d71a755a8741"
            }
        ]
    },
    {
        "id": "6f5b71969e62caf986163b4617843cfb",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=6f5b71969e62caf986163b4617843cfb"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=6f5b71969e62caf986163b4617843cfb"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=6f5b71969e62caf986163b4617843cfb"
            }
        ]
    },
    {
        "id": "4c855f8e9db056ff952752aebf1f1ebf",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=4c855f8e9db056ff952752aebf1f1ebf"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=4c855f8e9db056ff952752aebf1f1ebf"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=4c855f8e9db056ff952752aebf1f1ebf"
            }
        ]
    },
    {
        "id": "4e9081bb6aaf5b64c6442e520484f069",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=4e9081bb6aaf5b64c6442e520484f069"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=4e9081bb6aaf5b64c6442e520484f069"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=4e9081bb6aaf5b64c6442e520484f069"
            }
        ]
    },
    {
        "id": "81d5161d1dc5b01bb0350617ef7a9756",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=81d5161d1dc5b01bb0350617ef7a9756"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=81d5161d1dc5b01bb0350617ef7a9756"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=81d5161d1dc5b01bb0350617ef7a9756"
            }
        ]
    },
    {
        "id": "aa4b4d037acbd3d905a231370b05b824",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=aa4b4d037acbd3d905a231370b05b824"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=aa4b4d037acbd3d905a231370b05b824"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=aa4b4d037acbd3d905a231370b05b824"
            }
        ]
    },
    {
        "id": "d5d0c69b7c0683b8c6d28116ff225dad",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=d5d0c69b7c0683b8c6d28116ff225dad"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=d5d0c69b7c0683b8c6d28116ff225dad"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=d5d0c69b7c0683b8c6d28116ff225dad"
            }
        ]
    },
    {
        "id": "595182be6013d4be2ae1c93cd3e72d12",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=595182be6013d4be2ae1c93cd3e72d12"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=595182be6013d4be2ae1c93cd3e72d12"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=595182be6013d4be2ae1c93cd3e72d12"
            }
        ]
    },
    {
        "id": "70d963969df0f519948e6deec69ea9e4",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=70d963969df0f519948e6deec69ea9e4"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=70d963969df0f519948e6deec69ea9e4"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=70d963969df0f519948e6deec69ea9e4"
            }
        ]
    },
    {
        "id": "afa45ae157a797147d49047dca6d403e",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=afa45ae157a797147d49047dca6d403e"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=afa45ae157a797147d49047dca6d403e"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=afa45ae157a797147d49047dca6d403e"
            }
        ]
    },
    {
        "id": "f3a3cac46c597a62bc71c5d31d517830",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=f3a3cac46c597a62bc71c5d31d517830"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=f3a3cac46c597a62bc71c5d31d517830"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=f3a3cac46c597a62bc71c5d31d517830"
            }
        ]
    },
    {
        "id": "GRNT2ebf339757661215746e",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=GRNT2ebf339757661215746e"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=GRNT2ebf339757661215746e"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=GRNT2ebf339757661215746e"
            }
        ]
    },
    {
        "id": "99c04feab7173bd0666432a3e857ab9a",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=99c04feab7173bd0666432a3e857ab9a"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=99c04feab7173bd0666432a3e857ab9a"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=99c04feab7173bd0666432a3e857ab9a"
            }
        ]
    },
    {
        "id": "c2fe7702123aae018da7b7bd1025f750",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=c2fe7702123aae018da7b7bd1025f750"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=c2fe7702123aae018da7b7bd1025f750"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=c2fe7702123aae018da7b7bd1025f750"
            }
        ]
    },
    {
        "id": "29b416ba2c35d7d375b4dea0cc0cbe94",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=29b416ba2c35d7d375b4dea0cc0cbe94"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=29b416ba2c35d7d375b4dea0cc0cbe94"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=29b416ba2c35d7d375b4dea0cc0cbe94"
            }
        ]
    },
    {
        "id": "GRNT8fe739e1e45c5db0d22b",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=GRNT8fe739e1e45c5db0d22b"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=GRNT8fe739e1e45c5db0d22b"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=GRNT8fe739e1e45c5db0d22b"
            }
        ]
    },
    {
        "id": "35663fdd223aafd41922bd9ea6c96a90",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=35663fdd223aafd41922bd9ea6c96a90"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=35663fdd223aafd41922bd9ea6c96a90"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=35663fdd223aafd41922bd9ea6c96a90"
            }
        ]
    },
    {
        "id": "51d5ed39c8bb6f6bba1a24ee5959a08a",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=51d5ed39c8bb6f6bba1a24ee5959a08a"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=51d5ed39c8bb6f6bba1a24ee5959a08a"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=51d5ed39c8bb6f6bba1a24ee5959a08a"
            }
        ]
    },
    {
        "id": "66ad7f6e498043e282a86fa20fb83442",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=66ad7f6e498043e282a86fa20fb83442"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=66ad7f6e498043e282a86fa20fb83442"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=66ad7f6e498043e282a86fa20fb83442"
            }
        ]
    },
    {
        "id": "9bfb725c684d4caed4932e0ada3d9dfe",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=9bfb725c684d4caed4932e0ada3d9dfe"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=9bfb725c684d4caed4932e0ada3d9dfe"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=9bfb725c684d4caed4932e0ada3d9dfe"
            }
        ]
    },
    {
        "id": "83dfcc9d208aabbafd7abf55fc3fc907",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=83dfcc9d208aabbafd7abf55fc3fc907"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=83dfcc9d208aabbafd7abf55fc3fc907"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=83dfcc9d208aabbafd7abf55fc3fc907"
            }
        ]
    },
    {
        "id": "9f6cc336711bd2ce9ae96ba3a301e40a",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=9f6cc336711bd2ce9ae96ba3a301e40a"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=9f6cc336711bd2ce9ae96ba3a301e40a"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=9f6cc336711bd2ce9ae96ba3a301e40a"
            }
        ]
    },
    {
        "id": "bf6635e138043088478f8df78a461a1a",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=bf6635e138043088478f8df78a461a1a"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=bf6635e138043088478f8df78a461a1a"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=bf6635e138043088478f8df78a461a1a"
            }
        ]
    },
    {
        "id": "GRNTe8e7d773c422a94eb880",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=GRNTe8e7d773c422a94eb880"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=GRNTe8e7d773c422a94eb880"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=GRNTe8e7d773c422a94eb880"
            }
        ]
    },
    {
        "id": "f5f872458199a7b742ce267dd1f6f343",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=f5f872458199a7b742ce267dd1f6f343"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=f5f872458199a7b742ce267dd1f6f343"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=f5f872458199a7b742ce267dd1f6f343"
            }
        ]
    },
    {
        "id": "93999bd26ebbf33235970de08c23a498",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=93999bd26ebbf33235970de08c23a498"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=93999bd26ebbf33235970de08c23a498"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=93999bd26ebbf33235970de08c23a498"
            }
        ]
    },
    {
        "id": "4f7ea65197e67aef2e996d29f7bc18c8",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=4f7ea65197e67aef2e996d29f7bc18c8"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=4f7ea65197e67aef2e996d29f7bc18c8"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=4f7ea65197e67aef2e996d29f7bc18c8"
            }
        ]
    },
    {
        "id": "GRNT3fe26d5e161a2fed8d5b",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=GRNT3fe26d5e161a2fed8d5b"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=GRNT3fe26d5e161a2fed8d5b"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=GRNT3fe26d5e161a2fed8d5b"
            }
        ]
    },
    {
        "id": "GRNT2a4aad40490f17d66caa",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=GRNT2a4aad40490f17d66caa"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=GRNT2a4aad40490f17d66caa"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=GRNT2a4aad40490f17d66caa"
            }
        ]
    },
    {
        "id": "GRNTadcbf128800c567136c6",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=GRNTadcbf128800c567136c6"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=GRNTadcbf128800c567136c6"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=GRNTadcbf128800c567136c6"
            }
        ]
    },
    {
        "id": "e56a354c6e14774e27d76658c05a1164",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=e56a354c6e14774e27d76658c05a1164"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=e56a354c6e14774e27d76658c05a1164"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=e56a354c6e14774e27d76658c05a1164"
            }
        ]
    },
    {
        "id": "068da9f4c9cd4dd26bf8ee19f9c40fc2",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=068da9f4c9cd4dd26bf8ee19f9c40fc2"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=068da9f4c9cd4dd26bf8ee19f9c40fc2"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=068da9f4c9cd4dd26bf8ee19f9c40fc2"
            }
        ]
    },
    {
        "id": "e3a157b1c830688e632f4c517b311ad6",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=e3a157b1c830688e632f4c517b311ad6"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=e3a157b1c830688e632f4c517b311ad6"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=e3a157b1c830688e632f4c517b311ad6"
            }
        ]
    },
    {
        "id": "286c262f74059177105b65e805fdbab6",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=286c262f74059177105b65e805fdbab6"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=286c262f74059177105b65e805fdbab6"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=286c262f74059177105b65e805fdbab6"
            }
        ]
    },
    {
        "id": "efac61013edc2923ea6f87183b08c0b3",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=efac61013edc2923ea6f87183b08c0b3"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=efac61013edc2923ea6f87183b08c0b3"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=efac61013edc2923ea6f87183b08c0b3"
            }
        ]
    },
    {
        "id": "b8d41bc5bba61e8cf3c3f19fe0afc669",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=b8d41bc5bba61e8cf3c3f19fe0afc669"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=b8d41bc5bba61e8cf3c3f19fe0afc669"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=b8d41bc5bba61e8cf3c3f19fe0afc669"
            }
        ]
    },
    {
        "id": "20b1d45e3c27c12aefca328fb98da9cf",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=20b1d45e3c27c12aefca328fb98da9cf"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=20b1d45e3c27c12aefca328fb98da9cf"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=20b1d45e3c27c12aefca328fb98da9cf"
            }
        ]
    },
    {
        "id": "9d09ad72c16158c53f79a23008040fe8",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=9d09ad72c16158c53f79a23008040fe8"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=9d09ad72c16158c53f79a23008040fe8"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=9d09ad72c16158c53f79a23008040fe8"
            }
        ]
    },
    {
        "id": "47e61048396ad25e975d560c3bf46c1c",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=47e61048396ad25e975d560c3bf46c1c"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=47e61048396ad25e975d560c3bf46c1c"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=47e61048396ad25e975d560c3bf46c1c"
            }
        ]
    },
    {
        "id": "55dfeefedfcacdb91dd7a7cb905a787d",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=55dfeefedfcacdb91dd7a7cb905a787d"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=55dfeefedfcacdb91dd7a7cb905a787d"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=55dfeefedfcacdb91dd7a7cb905a787d"
            }
        ]
    },
    {
        "id": "4bbee4f7ec22f08d317fb16cc49bd6f6",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=4bbee4f7ec22f08d317fb16cc49bd6f6"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=4bbee4f7ec22f08d317fb16cc49bd6f6"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=4bbee4f7ec22f08d317fb16cc49bd6f6"
            }
        ]
    },
    {
        "id": "GRNT42ec62037343aeb4d359",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=GRNT42ec62037343aeb4d359"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=GRNT42ec62037343aeb4d359"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=GRNT42ec62037343aeb4d359"
            }
        ]
    },
    {
        "id": "b8cd9d85d159ee95a6ccd76aed2b6b94",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=b8cd9d85d159ee95a6ccd76aed2b6b94"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=b8cd9d85d159ee95a6ccd76aed2b6b94"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=b8cd9d85d159ee95a6ccd76aed2b6b94"
            }
        ]
    },
    {
        "id": "94e1918beea77c865d2b2a296af57e30",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=94e1918beea77c865d2b2a296af57e30"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=94e1918beea77c865d2b2a296af57e30"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=94e1918beea77c865d2b2a296af57e30"
            }
        ]
    },
    {
        "id": "d122531683afabdd3c4e2dd811e62cbc",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=d122531683afabdd3c4e2dd811e62cbc"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=d122531683afabdd3c4e2dd811e62cbc"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=d122531683afabdd3c4e2dd811e62cbc"
            }
        ]
    },
    {
        "id": "05e9f8e55c23025036ac25ec4ee10e79",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=05e9f8e55c23025036ac25ec4ee10e79"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=05e9f8e55c23025036ac25ec4ee10e79"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=05e9f8e55c23025036ac25ec4ee10e79"
            }
        ]
    },
    {
        "id": "fc2fe59955acfd5f1a9b42d648f03ee1",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=fc2fe59955acfd5f1a9b42d648f03ee1"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=fc2fe59955acfd5f1a9b42d648f03ee1"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=fc2fe59955acfd5f1a9b42d648f03ee1"
            }
        ]
    },
    {
        "id": "c9bb6573ff5f1dbba98e6972e262191c",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=c9bb6573ff5f1dbba98e6972e262191c"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=c9bb6573ff5f1dbba98e6972e262191c"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=c9bb6573ff5f1dbba98e6972e262191c"
            }
        ]
    },
    {
        "id": "8704ee640e923809cf85b944931d2318",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=8704ee640e923809cf85b944931d2318"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=8704ee640e923809cf85b944931d2318"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=8704ee640e923809cf85b944931d2318"
            }
        ]
    },
    {
        "id": "GRNTfebcc247762b7820f4eb",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=GRNTfebcc247762b7820f4eb"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=GRNTfebcc247762b7820f4eb"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=GRNTfebcc247762b7820f4eb"
            }
        ]
    },
    {
        "id": "GRNTf5f151d05f53c36364ce",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=GRNTf5f151d05f53c36364ce"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=GRNTf5f151d05f53c36364ce"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=GRNTf5f151d05f53c36364ce"
            }
        ]
    },
    {
        "id": "GRNT6060160bc60df3ad01d7",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=GRNT6060160bc60df3ad01d7"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=GRNT6060160bc60df3ad01d7"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=GRNT6060160bc60df3ad01d7"
            }
        ]
    },
    {
        "id": "GRNT300dfa96cc0881835d1f",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=GRNT300dfa96cc0881835d1f"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=GRNT300dfa96cc0881835d1f"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=GRNT300dfa96cc0881835d1f"
            }
        ]
    },
    {
        "id": "GRNT91f64736a9b03afcfbd2",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=GRNT91f64736a9b03afcfbd2"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=GRNT91f64736a9b03afcfbd2"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=GRNT91f64736a9b03afcfbd2"
            }
        ]
    },
    {
        "id": "GRNTc91a32337073cca896f3",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=GRNTc91a32337073cca896f3"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=GRNTc91a32337073cca896f3"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=GRNTc91a32337073cca896f3"
            }
        ]
    },
    {
        "id": "GRNTb11bc88e9aa126fd3b03",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=GRNTb11bc88e9aa126fd3b03"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=GRNTb11bc88e9aa126fd3b03"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=GRNTb11bc88e9aa126fd3b03"
            }
        ]
    },
    {
        "id": "GRNTa3e1109b5eeb2b5c96c0",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=GRNTa3e1109b5eeb2b5c96c0"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=GRNTa3e1109b5eeb2b5c96c0"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=GRNTa3e1109b5eeb2b5c96c0"
            }
        ]
    },
    {
        "id": "d97b13d243df4918d8049c825b182bbb",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=d97b13d243df4918d8049c825b182bbb"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=d97b13d243df4918d8049c825b182bbb"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=d97b13d243df4918d8049c825b182bbb"
            }
        ]
    },
    {
        "id": "0a2ec484cdacfe4057fbb185a55a78ad",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=0a2ec484cdacfe4057fbb185a55a78ad"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=0a2ec484cdacfe4057fbb185a55a78ad"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=0a2ec484cdacfe4057fbb185a55a78ad"
            }
        ]
    },
    {
        "id": "3b0b932875ddca6c192be514881d1f88",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=3b0b932875ddca6c192be514881d1f88"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=3b0b932875ddca6c192be514881d1f88"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=3b0b932875ddca6c192be514881d1f88"
            }
        ]
    },
    {
        "id": "03593570c81a9af3e14af391d0048485",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=03593570c81a9af3e14af391d0048485"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=03593570c81a9af3e14af391d0048485"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=03593570c81a9af3e14af391d0048485"
            }
        ]
    },
    {
        "id": "ff48d661c63f8f5f46c5e4e8fb84f377",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=ff48d661c63f8f5f46c5e4e8fb84f377"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=ff48d661c63f8f5f46c5e4e8fb84f377"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=ff48d661c63f8f5f46c5e4e8fb84f377"
            }
        ]
    },
    {
        "id": "5f311f86d4bb75a9760566c6f0402c9b",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=5f311f86d4bb75a9760566c6f0402c9b"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=5f311f86d4bb75a9760566c6f0402c9b"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=5f311f86d4bb75a9760566c6f0402c9b"
            }
        ]
    },
    {
        "id": "2ed33d32e7583485bddf08ccf9daf65a",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=2ed33d32e7583485bddf08ccf9daf65a"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=2ed33d32e7583485bddf08ccf9daf65a"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=2ed33d32e7583485bddf08ccf9daf65a"
            }
        ]
    },
    {
        "id": "c4c73b82ec90ed96198002dd3222f536",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=c4c73b82ec90ed96198002dd3222f536"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=c4c73b82ec90ed96198002dd3222f536"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=c4c73b82ec90ed96198002dd3222f536"
            }
        ]
    },
    {
        "id": "b497aeb1ee29fb39e42f5c7a5bfac6e9",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=b497aeb1ee29fb39e42f5c7a5bfac6e9"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=b497aeb1ee29fb39e42f5c7a5bfac6e9"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=b497aeb1ee29fb39e42f5c7a5bfac6e9"
            }
        ]
    },
    {
        "id": "0475b24fe8c1b6150f84c998c4eeec54",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=0475b24fe8c1b6150f84c998c4eeec54"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=0475b24fe8c1b6150f84c998c4eeec54"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=0475b24fe8c1b6150f84c998c4eeec54"
            }
        ]
    },
    {
        "id": "da1b75bd37f2aebed8d9eac7053a434f",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=da1b75bd37f2aebed8d9eac7053a434f"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=da1b75bd37f2aebed8d9eac7053a434f"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=da1b75bd37f2aebed8d9eac7053a434f"
            }
        ]
    },
    {
        "id": "996acc979e7dc316de31d5e21d52ff8e",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=996acc979e7dc316de31d5e21d52ff8e"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=996acc979e7dc316de31d5e21d52ff8e"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=996acc979e7dc316de31d5e21d52ff8e"
            }
        ]
    },
    {
        "id": "a4ee235a09abd643c583ab812f10798e",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=a4ee235a09abd643c583ab812f10798e"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=a4ee235a09abd643c583ab812f10798e"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=a4ee235a09abd643c583ab812f10798e"
            }
        ]
    },
    {
        "id": "c4371871b2e156beab0cb9226ce14ecc",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=c4371871b2e156beab0cb9226ce14ecc"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=c4371871b2e156beab0cb9226ce14ecc"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=c4371871b2e156beab0cb9226ce14ecc"
            }
        ]
    },
    {
        "id": "fe3b79c4f0175e43ce5f409e328e8edd",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=fe3b79c4f0175e43ce5f409e328e8edd"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=fe3b79c4f0175e43ce5f409e328e8edd"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=fe3b79c4f0175e43ce5f409e328e8edd"
            }
        ]
    },
    {
        "id": "bdb0816c793a022cc2567dc6ae06b3f3",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=bdb0816c793a022cc2567dc6ae06b3f3"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=bdb0816c793a022cc2567dc6ae06b3f3"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=bdb0816c793a022cc2567dc6ae06b3f3"
            }
        ]
    },
    {
        "id": "9858b255b09293d06e287a02d2cb3759",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=9858b255b09293d06e287a02d2cb3759"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=9858b255b09293d06e287a02d2cb3759"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=9858b255b09293d06e287a02d2cb3759"
            }
        ]
    },
    {
        "id": "64eb30caebec876aa355b1fbc073e069",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=64eb30caebec876aa355b1fbc073e069"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=64eb30caebec876aa355b1fbc073e069"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=64eb30caebec876aa355b1fbc073e069"
            }
        ]
    },
    {
        "id": "affd23383f7c6ed26fa2d1a751d2158d",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=affd23383f7c6ed26fa2d1a751d2158d"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=affd23383f7c6ed26fa2d1a751d2158d"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=affd23383f7c6ed26fa2d1a751d2158d"
            }
        ]
    },
    {
        "id": "d9777d727b978aee289cc1da843e50ac",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=d9777d727b978aee289cc1da843e50ac"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=d9777d727b978aee289cc1da843e50ac"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=d9777d727b978aee289cc1da843e50ac"
            }
        ]
    },
    {
        "id": "e637deff442b6eee2909bb079d662b78",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=e637deff442b6eee2909bb079d662b78"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=e637deff442b6eee2909bb079d662b78"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=e637deff442b6eee2909bb079d662b78"
            }
        ]
    },
    {
        "id": "3efdf848bfbc9c83f74374f3b2be1876",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=3efdf848bfbc9c83f74374f3b2be1876"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=3efdf848bfbc9c83f74374f3b2be1876"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=3efdf848bfbc9c83f74374f3b2be1876"
            }
        ]
    },
    {
        "id": "0b977ae8f0a4a92a90ccdb22c9b1693f",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=0b977ae8f0a4a92a90ccdb22c9b1693f"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=0b977ae8f0a4a92a90ccdb22c9b1693f"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=0b977ae8f0a4a92a90ccdb22c9b1693f"
            }
        ]
    },
    {
        "id": "eb90d19d6fb40eded5b2d33c2f356c4c",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=eb90d19d6fb40eded5b2d33c2f356c4c"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=eb90d19d6fb40eded5b2d33c2f356c4c"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=eb90d19d6fb40eded5b2d33c2f356c4c"
            }
        ]
    },
    {
        "id": "c3871ad93879a7d2e2129a715394e3cd",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=c3871ad93879a7d2e2129a715394e3cd"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=c3871ad93879a7d2e2129a715394e3cd"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=c3871ad93879a7d2e2129a715394e3cd"
            }
        ]
    },
    {
        "id": "22d63804c606070134e79527b32cc9cd",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=22d63804c606070134e79527b32cc9cd"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=22d63804c606070134e79527b32cc9cd"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=22d63804c606070134e79527b32cc9cd"
            }
        ]
    },
    {
        "id": "347e559e4a99c4d6bf5b596c7caa4d57",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=347e559e4a99c4d6bf5b596c7caa4d57"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=347e559e4a99c4d6bf5b596c7caa4d57"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=347e559e4a99c4d6bf5b596c7caa4d57"
            }
        ]
    },
    {
        "id": "b98f057800ae41586c9ccb5b0794ed25",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=b98f057800ae41586c9ccb5b0794ed25"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=b98f057800ae41586c9ccb5b0794ed25"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=b98f057800ae41586c9ccb5b0794ed25"
            }
        ]
    },
    {
        "id": "a1c7b2239791a92ca08d80e50ae733db",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=a1c7b2239791a92ca08d80e50ae733db"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=a1c7b2239791a92ca08d80e50ae733db"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=a1c7b2239791a92ca08d80e50ae733db"
            }
        ]
    },
    {
        "id": "dec653431af8641ea8e83b2b62cd5ce4",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=dec653431af8641ea8e83b2b62cd5ce4"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=dec653431af8641ea8e83b2b62cd5ce4"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=dec653431af8641ea8e83b2b62cd5ce4"
            }
        ]
    },
    {
        "id": "5155d8ac5d160a29a955e33a579e57f1",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=5155d8ac5d160a29a955e33a579e57f1"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=5155d8ac5d160a29a955e33a579e57f1"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=5155d8ac5d160a29a955e33a579e57f1"
            }
        ]
    },
    {
        "id": "638526b0f6d7dfad4272855624560958",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=638526b0f6d7dfad4272855624560958"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=638526b0f6d7dfad4272855624560958"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=638526b0f6d7dfad4272855624560958"
            }
        ]
    },
    {
        "id": "551a13098d555372275855b10123ce9d",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=551a13098d555372275855b10123ce9d"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=551a13098d555372275855b10123ce9d"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=551a13098d555372275855b10123ce9d"
            }
        ]
    },
    {
        "id": "64aa283d80851b535b6106eb3ab36fc3",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=64aa283d80851b535b6106eb3ab36fc3"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=64aa283d80851b535b6106eb3ab36fc3"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=64aa283d80851b535b6106eb3ab36fc3"
            }
        ]
    },
    {
        "id": "d1f36f0c23b1816c0948747e8c9b014c",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=d1f36f0c23b1816c0948747e8c9b014c"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=d1f36f0c23b1816c0948747e8c9b014c"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=d1f36f0c23b1816c0948747e8c9b014c"
            }
        ]
    },
    {
        "id": "283e558cb2fc0988f3a1cdf7a08f1198",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=283e558cb2fc0988f3a1cdf7a08f1198"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=283e558cb2fc0988f3a1cdf7a08f1198"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=283e558cb2fc0988f3a1cdf7a08f1198"
            }
        ]
    },
    {
        "id": "5ccb63c8366405108f4a56c3e16b59ce",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=5ccb63c8366405108f4a56c3e16b59ce"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=5ccb63c8366405108f4a56c3e16b59ce"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=5ccb63c8366405108f4a56c3e16b59ce"
            }
        ]
    },
    {
        "id": "4383057a40b445bc6aeaaf88c04ab6fc",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=4383057a40b445bc6aeaaf88c04ab6fc"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=4383057a40b445bc6aeaaf88c04ab6fc"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=4383057a40b445bc6aeaaf88c04ab6fc"
            }
        ]
    },
    {
        "id": "770962ac6834edca4d8e73f95dc58086",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=770962ac6834edca4d8e73f95dc58086"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=770962ac6834edca4d8e73f95dc58086"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=770962ac6834edca4d8e73f95dc58086"
            }
        ]
    },
    {
        "id": "6e2ab9e0193a7785a7d6e65098c7f32c",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=6e2ab9e0193a7785a7d6e65098c7f32c"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=6e2ab9e0193a7785a7d6e65098c7f32c"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=6e2ab9e0193a7785a7d6e65098c7f32c"
            }
        ]
    },
    {
        "id": "f1159f20f95f5ae55fc0724fe81eafde",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=f1159f20f95f5ae55fc0724fe81eafde"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=f1159f20f95f5ae55fc0724fe81eafde"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=f1159f20f95f5ae55fc0724fe81eafde"
            }
        ]
    },
    {
        "id": "21602a92cadfbfb57766fac6f5bce45b",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=21602a92cadfbfb57766fac6f5bce45b"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=21602a92cadfbfb57766fac6f5bce45b"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=21602a92cadfbfb57766fac6f5bce45b"
            }
        ]
    },
    {
        "id": "038a6b09e08c81c1b38bd16f21c27e7a",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=038a6b09e08c81c1b38bd16f21c27e7a"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=038a6b09e08c81c1b38bd16f21c27e7a"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=038a6b09e08c81c1b38bd16f21c27e7a"
            }
        ]
    },
    {
        "id": "0625286f596ca9ad61a595129360734c",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=0625286f596ca9ad61a595129360734c"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=0625286f596ca9ad61a595129360734c"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=0625286f596ca9ad61a595129360734c"
            }
        ]
    },
    {
        "id": "f8a5659943268cce01509bb259946fb4",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=f8a5659943268cce01509bb259946fb4"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=f8a5659943268cce01509bb259946fb4"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=f8a5659943268cce01509bb259946fb4"
            }
        ]
    },
    {
        "id": "dd577654f05a27aff351cb618c3b65ed",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=dd577654f05a27aff351cb618c3b65ed"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=dd577654f05a27aff351cb618c3b65ed"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=dd577654f05a27aff351cb618c3b65ed"
            }
        ]
    },
    {
        "id": "ffa3ec6ed54949e8c5deb7f861618e7a",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=ffa3ec6ed54949e8c5deb7f861618e7a"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=ffa3ec6ed54949e8c5deb7f861618e7a"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=ffa3ec6ed54949e8c5deb7f861618e7a"
            }
        ]
    },
    {
        "id": "e78ad5b3670731bc2fcfee33981cfdc5",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=e78ad5b3670731bc2fcfee33981cfdc5"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=e78ad5b3670731bc2fcfee33981cfdc5"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=e78ad5b3670731bc2fcfee33981cfdc5"
            }
        ]
    },
    {
        "id": "8a15a8e45d19c218d2cf4d67d615d6b0",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=8a15a8e45d19c218d2cf4d67d615d6b0"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=8a15a8e45d19c218d2cf4d67d615d6b0"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=8a15a8e45d19c218d2cf4d67d615d6b0"
            }
        ]
    },
    {
        "id": "a75ddf0f9931dc2eeb7bdc62a637fdbd",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=a75ddf0f9931dc2eeb7bdc62a637fdbd"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=a75ddf0f9931dc2eeb7bdc62a637fdbd"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=a75ddf0f9931dc2eeb7bdc62a637fdbd"
            }
        ]
    },
    {
        "id": "99b504ccc744cf91e36d7309c561c991",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=99b504ccc744cf91e36d7309c561c991"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=99b504ccc744cf91e36d7309c561c991"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=99b504ccc744cf91e36d7309c561c991"
            }
        ]
    },
    {
        "id": "07d547de7ee1cd35ebdbc2f851031f70",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=07d547de7ee1cd35ebdbc2f851031f70"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=07d547de7ee1cd35ebdbc2f851031f70"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=07d547de7ee1cd35ebdbc2f851031f70"
            }
        ]
    },
    {
        "id": "f9bfda908fb87b114b0fab0a5ef854ad",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=f9bfda908fb87b114b0fab0a5ef854ad"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=f9bfda908fb87b114b0fab0a5ef854ad"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=f9bfda908fb87b114b0fab0a5ef854ad"
            }
        ]
    },
    {
        "id": "a4a4d127833e57e9d133ccf6f2ee3d4c",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=a4a4d127833e57e9d133ccf6f2ee3d4c"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=a4a4d127833e57e9d133ccf6f2ee3d4c"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=a4a4d127833e57e9d133ccf6f2ee3d4c"
            }
        ]
    },
    {
        "id": "54d355bee131d799c87b6b6aa5c05854",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=54d355bee131d799c87b6b6aa5c05854"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=54d355bee131d799c87b6b6aa5c05854"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=54d355bee131d799c87b6b6aa5c05854"
            }
        ]
    },
    {
        "id": "cbc611f4f44742f2e9db487549bec2a4",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=cbc611f4f44742f2e9db487549bec2a4"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=cbc611f4f44742f2e9db487549bec2a4"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=cbc611f4f44742f2e9db487549bec2a4"
            }
        ]
    },
    {
        "id": "c9856e76cbec20e5b276371755bce387",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=c9856e76cbec20e5b276371755bce387"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=c9856e76cbec20e5b276371755bce387"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=c9856e76cbec20e5b276371755bce387"
            }
        ]
    },
    {
        "id": "02103482954eb830e07a40f660535536",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=02103482954eb830e07a40f660535536"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=02103482954eb830e07a40f660535536"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=02103482954eb830e07a40f660535536"
            }
        ]
    },
    {
        "id": "9bbe30cf42b0b467af4cf4f653daa0e4",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=9bbe30cf42b0b467af4cf4f653daa0e4"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=9bbe30cf42b0b467af4cf4f653daa0e4"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=9bbe30cf42b0b467af4cf4f653daa0e4"
            }
        ]
    },
    {
        "id": "e533c7c27a7f6b067b400de3facfb554",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=e533c7c27a7f6b067b400de3facfb554"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=e533c7c27a7f6b067b400de3facfb554"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=e533c7c27a7f6b067b400de3facfb554"
            }
        ]
    },
    {
        "id": "a88670f0b350a9e1a45290a8280efbe6",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=a88670f0b350a9e1a45290a8280efbe6"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=a88670f0b350a9e1a45290a8280efbe6"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=a88670f0b350a9e1a45290a8280efbe6"
            }
        ]
    },
    {
        "id": "77b363ac74cdd3b7f15636f52170fbde",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=77b363ac74cdd3b7f15636f52170fbde"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=77b363ac74cdd3b7f15636f52170fbde"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=77b363ac74cdd3b7f15636f52170fbde"
            }
        ]
    },
    {
        "id": "9745dec56f20f29f249482026d99b60a",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=9745dec56f20f29f249482026d99b60a"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=9745dec56f20f29f249482026d99b60a"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=9745dec56f20f29f249482026d99b60a"
            }
        ]
    },
    {
        "id": "9e0c398944c1f331e5a4a7b1382e374f",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=9e0c398944c1f331e5a4a7b1382e374f"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=9e0c398944c1f331e5a4a7b1382e374f"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=9e0c398944c1f331e5a4a7b1382e374f"
            }
        ]
    },
    {
        "id": "f9fe44c4de3ef0e9e104446ea6cf7bd7",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=f9fe44c4de3ef0e9e104446ea6cf7bd7"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=f9fe44c4de3ef0e9e104446ea6cf7bd7"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=f9fe44c4de3ef0e9e104446ea6cf7bd7"
            }
        ]
    },
    {
        "id": "06e535331cbbdfda42f2d20bd8e06ccc",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=06e535331cbbdfda42f2d20bd8e06ccc"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=06e535331cbbdfda42f2d20bd8e06ccc"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=06e535331cbbdfda42f2d20bd8e06ccc"
            }
        ]
    },
    {
        "id": "81233c4a76a12dc15336259aaa94be5a",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=81233c4a76a12dc15336259aaa94be5a"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=81233c4a76a12dc15336259aaa94be5a"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=81233c4a76a12dc15336259aaa94be5a"
            }
        ]
    },
    {
        "id": "b37ff16ea47c3da717d7b7a85b1ee27b",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=b37ff16ea47c3da717d7b7a85b1ee27b"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=b37ff16ea47c3da717d7b7a85b1ee27b"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=b37ff16ea47c3da717d7b7a85b1ee27b"
            }
        ]
    },
    {
        "id": "9a216dfe90d4a20050209f17e82893f9",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=9a216dfe90d4a20050209f17e82893f9"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=9a216dfe90d4a20050209f17e82893f9"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=9a216dfe90d4a20050209f17e82893f9"
            }
        ]
    },
    {
        "id": "69e0b68fd320b9d457a7f4eadcb3fee2",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=69e0b68fd320b9d457a7f4eadcb3fee2"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=69e0b68fd320b9d457a7f4eadcb3fee2"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=69e0b68fd320b9d457a7f4eadcb3fee2"
            }
        ]
    },
    {
        "id": "b1311d1cea6444d4baee331f54a8aac7",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=b1311d1cea6444d4baee331f54a8aac7"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=b1311d1cea6444d4baee331f54a8aac7"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=b1311d1cea6444d4baee331f54a8aac7"
            }
        ]
    },
    {
        "id": "f03d1e67d7a6b5aba5b31009ef0bb4cb",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=f03d1e67d7a6b5aba5b31009ef0bb4cb"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=f03d1e67d7a6b5aba5b31009ef0bb4cb"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=f03d1e67d7a6b5aba5b31009ef0bb4cb"
            }
        ]
    },
    {
        "id": "74ff975615c778713509510dc43aa0f4",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=74ff975615c778713509510dc43aa0f4"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=74ff975615c778713509510dc43aa0f4"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=74ff975615c778713509510dc43aa0f4"
            }
        ]
    },
    {
        "id": "4402bf1032d552ec0a1147042651049d",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=4402bf1032d552ec0a1147042651049d"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=4402bf1032d552ec0a1147042651049d"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=4402bf1032d552ec0a1147042651049d"
            }
        ]
    },
    {
        "id": "378821a01ac61104b56c6dad77356167",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=378821a01ac61104b56c6dad77356167"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=378821a01ac61104b56c6dad77356167"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=378821a01ac61104b56c6dad77356167"
            }
        ]
    },
    {
        "id": "a78187fa247e3a78b620e3a36a259fc5",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=a78187fa247e3a78b620e3a36a259fc5"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=a78187fa247e3a78b620e3a36a259fc5"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=a78187fa247e3a78b620e3a36a259fc5"
            }
        ]
    },
    {
        "id": "847daf64eedcdb6b8161bedf574381c3",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=847daf64eedcdb6b8161bedf574381c3"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=847daf64eedcdb6b8161bedf574381c3"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=847daf64eedcdb6b8161bedf574381c3"
            }
        ]
    },
    {
        "id": "699ac19ed1601e057f9a3caba5444a52",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=699ac19ed1601e057f9a3caba5444a52"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=699ac19ed1601e057f9a3caba5444a52"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=699ac19ed1601e057f9a3caba5444a52"
            }
        ]
    },
    {
        "id": "e2e59f6bc7a2fc697e2167518828643c",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=e2e59f6bc7a2fc697e2167518828643c"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=e2e59f6bc7a2fc697e2167518828643c"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=e2e59f6bc7a2fc697e2167518828643c"
            }
        ]
    },
    {
        "id": "4dad3259a5bc9da7358464eb9edbcf8d",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=4dad3259a5bc9da7358464eb9edbcf8d"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=4dad3259a5bc9da7358464eb9edbcf8d"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=4dad3259a5bc9da7358464eb9edbcf8d"
            }
        ]
    },
    {
        "id": "aa6212b58e1605b283eaf848943b08c0",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=aa6212b58e1605b283eaf848943b08c0"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=aa6212b58e1605b283eaf848943b08c0"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=aa6212b58e1605b283eaf848943b08c0"
            }
        ]
    },
    {
        "id": "c2ca69a79c4f3598dad0246f99f096c9",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=c2ca69a79c4f3598dad0246f99f096c9"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=c2ca69a79c4f3598dad0246f99f096c9"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=c2ca69a79c4f3598dad0246f99f096c9"
            }
        ]
    },
    {
        "id": "685c72d439d477ad6e8dba533caf3f1e",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=685c72d439d477ad6e8dba533caf3f1e"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=685c72d439d477ad6e8dba533caf3f1e"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=685c72d439d477ad6e8dba533caf3f1e"
            }
        ]
    },
    {
        "id": "40da093723561863491011564021d3b8",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=40da093723561863491011564021d3b8"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=40da093723561863491011564021d3b8"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=40da093723561863491011564021d3b8"
            }
        ]
    },
    {
        "id": "458f2ec4289a1f67807fbd4c859cb485",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=458f2ec4289a1f67807fbd4c859cb485"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=458f2ec4289a1f67807fbd4c859cb485"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=458f2ec4289a1f67807fbd4c859cb485"
            }
        ]
    },
    {
        "id": "a6098a6642932ad3f3c7a86058809a72",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=a6098a6642932ad3f3c7a86058809a72"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=a6098a6642932ad3f3c7a86058809a72"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=a6098a6642932ad3f3c7a86058809a72"
            }
        ]
    },
    {
        "id": "08ed853997a1958b3edeeae087647b07",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=08ed853997a1958b3edeeae087647b07"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=08ed853997a1958b3edeeae087647b07"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=08ed853997a1958b3edeeae087647b07"
            }
        ]
    },
    {
        "id": "6fef3ddf34535ed06addd7304ba203a7",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=6fef3ddf34535ed06addd7304ba203a7"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=6fef3ddf34535ed06addd7304ba203a7"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=6fef3ddf34535ed06addd7304ba203a7"
            }
        ]
    },
    {
        "id": "78c977411cacd58d69505cfd3cdd469e",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=78c977411cacd58d69505cfd3cdd469e"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=78c977411cacd58d69505cfd3cdd469e"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=78c977411cacd58d69505cfd3cdd469e"
            }
        ]
    },
    {
        "id": "36ca7289338c78596f702740b41f5103",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=36ca7289338c78596f702740b41f5103"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=36ca7289338c78596f702740b41f5103"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=36ca7289338c78596f702740b41f5103"
            }
        ]
    },
    {
        "id": "f2c7009ac80c562c69306a5768785524",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=f2c7009ac80c562c69306a5768785524"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=f2c7009ac80c562c69306a5768785524"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=f2c7009ac80c562c69306a5768785524"
            }
        ]
    },
    {
        "id": "f106d20d50cc11885114029a86426001",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=f106d20d50cc11885114029a86426001"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=f106d20d50cc11885114029a86426001"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=f106d20d50cc11885114029a86426001"
            }
        ]
    },
    {
        "id": "82a15bfae7e34d60e6993080ed7a6f5a",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=82a15bfae7e34d60e6993080ed7a6f5a"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=82a15bfae7e34d60e6993080ed7a6f5a"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=82a15bfae7e34d60e6993080ed7a6f5a"
            }
        ]
    },
    {
        "id": "0e769f98351412b804ceeeecf679c252",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=0e769f98351412b804ceeeecf679c252"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=0e769f98351412b804ceeeecf679c252"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=0e769f98351412b804ceeeecf679c252"
            }
        ]
    },
    {
        "id": "f1da5704fc2506549b07b8b4b2fce3fd",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=f1da5704fc2506549b07b8b4b2fce3fd"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=f1da5704fc2506549b07b8b4b2fce3fd"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=f1da5704fc2506549b07b8b4b2fce3fd"
            }
        ]
    },
    {
        "id": "98717239af5c6218c10b725c486c18bf",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=98717239af5c6218c10b725c486c18bf"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=98717239af5c6218c10b725c486c18bf"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=98717239af5c6218c10b725c486c18bf"
            }
        ]
    },
    {
        "id": "8aeea85c0e254dc2b64dd955a01bbbdd",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=8aeea85c0e254dc2b64dd955a01bbbdd"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=8aeea85c0e254dc2b64dd955a01bbbdd"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=8aeea85c0e254dc2b64dd955a01bbbdd"
            }
        ]
    },
    {
        "id": "0cffd50fac960af5b76dbc286c94999b",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=0cffd50fac960af5b76dbc286c94999b"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=0cffd50fac960af5b76dbc286c94999b"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=0cffd50fac960af5b76dbc286c94999b"
            }
        ]
    },
    {
        "id": "109354c467872ec0c681c05f8926e3c8",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=109354c467872ec0c681c05f8926e3c8"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=109354c467872ec0c681c05f8926e3c8"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=109354c467872ec0c681c05f8926e3c8"
            }
        ]
    },
    {
        "id": "c9d8face369adaa97447de754556d5ce",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=c9d8face369adaa97447de754556d5ce"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=c9d8face369adaa97447de754556d5ce"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=c9d8face369adaa97447de754556d5ce"
            }
        ]
    },
    {
        "id": "c2156897d54240e933d38df5829d5bb1",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=c2156897d54240e933d38df5829d5bb1"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=c2156897d54240e933d38df5829d5bb1"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=c2156897d54240e933d38df5829d5bb1"
            }
        ]
    },
    {
        "id": "f0bfb92d0a92f268126feeb6ec0b5c62",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=f0bfb92d0a92f268126feeb6ec0b5c62"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=f0bfb92d0a92f268126feeb6ec0b5c62"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=f0bfb92d0a92f268126feeb6ec0b5c62"
            }
        ]
    },
    {
        "id": "049a0bb33618e6b8183cf0044aee4d74",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=049a0bb33618e6b8183cf0044aee4d74"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=049a0bb33618e6b8183cf0044aee4d74"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=049a0bb33618e6b8183cf0044aee4d74"
            }
        ]
    },
    {
        "id": "91f05aadb6cc58af0e752f93f6491bb9",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=91f05aadb6cc58af0e752f93f6491bb9"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=91f05aadb6cc58af0e752f93f6491bb9"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=91f05aadb6cc58af0e752f93f6491bb9"
            }
        ]
    },
    {
        "id": "b8b7852258434fa17c525c2aef02f577",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=b8b7852258434fa17c525c2aef02f577"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=b8b7852258434fa17c525c2aef02f577"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=b8b7852258434fa17c525c2aef02f577"
            }
        ]
    },
    {
        "id": "d5a6beae90aa2a1c9537928dc816afe7",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=d5a6beae90aa2a1c9537928dc816afe7"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=d5a6beae90aa2a1c9537928dc816afe7"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=d5a6beae90aa2a1c9537928dc816afe7"
            }
        ]
    },
    {
        "id": "b90a41b129d2d75877f4073c7393d6aa",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=b90a41b129d2d75877f4073c7393d6aa"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=b90a41b129d2d75877f4073c7393d6aa"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=b90a41b129d2d75877f4073c7393d6aa"
            }
        ]
    },
    {
        "id": "6e285e66068469f3232096491dfd05e3",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=6e285e66068469f3232096491dfd05e3"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=6e285e66068469f3232096491dfd05e3"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=6e285e66068469f3232096491dfd05e3"
            }
        ]
    },
    {
        "id": "2d98e2987efc7a7902347dcddeff1883",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=2d98e2987efc7a7902347dcddeff1883"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=2d98e2987efc7a7902347dcddeff1883"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=2d98e2987efc7a7902347dcddeff1883"
            }
        ]
    },
    {
        "id": "f990d7801212b30345ac597974ae4b98",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=f990d7801212b30345ac597974ae4b98"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=f990d7801212b30345ac597974ae4b98"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=f990d7801212b30345ac597974ae4b98"
            }
        ]
    },
    {
        "id": "fdf5b65a932a66f7d6ccf3f793854800",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=fdf5b65a932a66f7d6ccf3f793854800"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=fdf5b65a932a66f7d6ccf3f793854800"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=fdf5b65a932a66f7d6ccf3f793854800"
            }
        ]
    },
    {
        "id": "baa94500b87f1a81fa9c30078911c800",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=baa94500b87f1a81fa9c30078911c800"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=baa94500b87f1a81fa9c30078911c800"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=baa94500b87f1a81fa9c30078911c800"
            }
        ]
    },
    {
        "id": "ab73dee2e0ca724d99153edf080c3e5c",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=ab73dee2e0ca724d99153edf080c3e5c"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=ab73dee2e0ca724d99153edf080c3e5c"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=ab73dee2e0ca724d99153edf080c3e5c"
            }
        ]
    },
    {
        "id": "63258b686da1eaf1c8e32d7036432ee6",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=63258b686da1eaf1c8e32d7036432ee6"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=63258b686da1eaf1c8e32d7036432ee6"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=63258b686da1eaf1c8e32d7036432ee6"
            }
        ]
    },
    {
        "id": "b5325b4dcac9f331811def777abfbec3",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=b5325b4dcac9f331811def777abfbec3"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=b5325b4dcac9f331811def777abfbec3"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=b5325b4dcac9f331811def777abfbec3"
            }
        ]
    },
    {
        "id": "cbb682406aa0d4088eb755c2db2d824c",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=cbb682406aa0d4088eb755c2db2d824c"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=cbb682406aa0d4088eb755c2db2d824c"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=cbb682406aa0d4088eb755c2db2d824c"
            }
        ]
    },
    {
        "id": "3ed5d4060fc5e7594da28e1faccbd30a",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=3ed5d4060fc5e7594da28e1faccbd30a"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=3ed5d4060fc5e7594da28e1faccbd30a"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=3ed5d4060fc5e7594da28e1faccbd30a"
            }
        ]
    },
    {
        "id": "e5797887f6f1d7795a3a614a63f360d3",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=e5797887f6f1d7795a3a614a63f360d3"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=e5797887f6f1d7795a3a614a63f360d3"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=e5797887f6f1d7795a3a614a63f360d3"
            }
        ]
    },
    {
        "id": "0b264d8e9ef0f73e0cdf29d90f46e8f8",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=0b264d8e9ef0f73e0cdf29d90f46e8f8"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=0b264d8e9ef0f73e0cdf29d90f46e8f8"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=0b264d8e9ef0f73e0cdf29d90f46e8f8"
            }
        ]
    },
    {
        "id": "529f933385e1fb7db17d09b8ae50e258",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=529f933385e1fb7db17d09b8ae50e258"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=529f933385e1fb7db17d09b8ae50e258"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=529f933385e1fb7db17d09b8ae50e258"
            }
        ]
    },
    {
        "id": "5f81482459bfe8f6f25f9d85d319c74e",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=5f81482459bfe8f6f25f9d85d319c74e"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=5f81482459bfe8f6f25f9d85d319c74e"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=5f81482459bfe8f6f25f9d85d319c74e"
            }
        ]
    },
    {
        "id": "72df9df1a8f39ef6daf940ab37e194fb",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=72df9df1a8f39ef6daf940ab37e194fb"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=72df9df1a8f39ef6daf940ab37e194fb"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=72df9df1a8f39ef6daf940ab37e194fb"
            }
        ]
    },
    {
        "id": "0873862b3aa81966fdb1d7311ee4edef",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=0873862b3aa81966fdb1d7311ee4edef"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=0873862b3aa81966fdb1d7311ee4edef"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=0873862b3aa81966fdb1d7311ee4edef"
            }
        ]
    },
    {
        "id": "23da1c0e65fc678930b0ef5de4b1a149",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=23da1c0e65fc678930b0ef5de4b1a149"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=23da1c0e65fc678930b0ef5de4b1a149"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=23da1c0e65fc678930b0ef5de4b1a149"
            }
        ]
    },
    {
        "id": "7c3b7c44268dfa093ecb712b2168c8ae",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=7c3b7c44268dfa093ecb712b2168c8ae"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=7c3b7c44268dfa093ecb712b2168c8ae"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=7c3b7c44268dfa093ecb712b2168c8ae"
            }
        ]
    },
    {
        "id": "007c4cc7d2412055776ed026bd4961ad",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=007c4cc7d2412055776ed026bd4961ad"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=007c4cc7d2412055776ed026bd4961ad"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=007c4cc7d2412055776ed026bd4961ad"
            }
        ]
    },
    {
        "id": "7819f00dda78ce8905b9c2a26ee3c107",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=7819f00dda78ce8905b9c2a26ee3c107"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=7819f00dda78ce8905b9c2a26ee3c107"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=7819f00dda78ce8905b9c2a26ee3c107"
            }
        ]
    },
    {
        "id": "d774600e3915f0264fecd0bfc36d1789",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=d774600e3915f0264fecd0bfc36d1789"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=d774600e3915f0264fecd0bfc36d1789"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=d774600e3915f0264fecd0bfc36d1789"
            }
        ]
    },
    {
        "id": "33caf1039cdf021615ab5bcf3c497bc5",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=33caf1039cdf021615ab5bcf3c497bc5"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=33caf1039cdf021615ab5bcf3c497bc5"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=33caf1039cdf021615ab5bcf3c497bc5"
            }
        ]
    },
    {
        "id": "e43f9067b92da5c2961bb2c05d4561c2",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=e43f9067b92da5c2961bb2c05d4561c2"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=e43f9067b92da5c2961bb2c05d4561c2"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=e43f9067b92da5c2961bb2c05d4561c2"
            }
        ]
    },
    {
        "id": "dd099b0b249343012e7538174dff01ee",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=dd099b0b249343012e7538174dff01ee"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=dd099b0b249343012e7538174dff01ee"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=dd099b0b249343012e7538174dff01ee"
            }
        ]
    },
    {
        "id": "03fadb5d4735f37f2e7bd02bf64427ce",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=03fadb5d4735f37f2e7bd02bf64427ce"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=03fadb5d4735f37f2e7bd02bf64427ce"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=03fadb5d4735f37f2e7bd02bf64427ce"
            }
        ]
    },
    {
        "id": "439362e7cd45f4a6fbe500f22e92828d",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=439362e7cd45f4a6fbe500f22e92828d"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=439362e7cd45f4a6fbe500f22e92828d"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=439362e7cd45f4a6fbe500f22e92828d"
            }
        ]
    },
    {
        "id": "3a53184af14aa853559b022e6da7611c",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=3a53184af14aa853559b022e6da7611c"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=3a53184af14aa853559b022e6da7611c"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=3a53184af14aa853559b022e6da7611c"
            }
        ]
    },
    {
        "id": "0c9c16c8847ef34a399161ad56630cca",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=0c9c16c8847ef34a399161ad56630cca"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=0c9c16c8847ef34a399161ad56630cca"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=0c9c16c8847ef34a399161ad56630cca"
            }
        ]
    },
    {
        "id": "61656c27a7cc9547c1017936ff364acc",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=61656c27a7cc9547c1017936ff364acc"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=61656c27a7cc9547c1017936ff364acc"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=61656c27a7cc9547c1017936ff364acc"
            }
        ]
    },
    {
        "id": "97dba633d4886227bca140960df5c33a",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=97dba633d4886227bca140960df5c33a"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=97dba633d4886227bca140960df5c33a"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=97dba633d4886227bca140960df5c33a"
            }
        ]
    },
    {
        "id": "61fb37c64121ae997fb629170080067f",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=61fb37c64121ae997fb629170080067f"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=61fb37c64121ae997fb629170080067f"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=61fb37c64121ae997fb629170080067f"
            }
        ]
    },
    {
        "id": "5625815d519ea8b8bf85a6f8b8c626f2",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=5625815d519ea8b8bf85a6f8b8c626f2"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=5625815d519ea8b8bf85a6f8b8c626f2"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=5625815d519ea8b8bf85a6f8b8c626f2"
            }
        ]
    },
    {
        "id": "37fb963f54adbbb6c62ef36e548c4fa6",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=37fb963f54adbbb6c62ef36e548c4fa6"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=37fb963f54adbbb6c62ef36e548c4fa6"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=37fb963f54adbbb6c62ef36e548c4fa6"
            }
        ]
    },
    {
        "id": "cd455ec6bef6df0a759c47f72d7f59ab",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=cd455ec6bef6df0a759c47f72d7f59ab"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=cd455ec6bef6df0a759c47f72d7f59ab"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=cd455ec6bef6df0a759c47f72d7f59ab"
            }
        ]
    },
    {
        "id": "00d39c18f1e3d503484268aae954b78e",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=00d39c18f1e3d503484268aae954b78e"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=00d39c18f1e3d503484268aae954b78e"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=00d39c18f1e3d503484268aae954b78e"
            }
        ]
    },
    {
        "id": "89165a3de3f26d1f00003950fba27bf4",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=89165a3de3f26d1f00003950fba27bf4"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=89165a3de3f26d1f00003950fba27bf4"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=89165a3de3f26d1f00003950fba27bf4"
            }
        ]
    },
    {
        "id": "59be19b5ce968459cd3293d4e94b8b12",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=59be19b5ce968459cd3293d4e94b8b12"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=59be19b5ce968459cd3293d4e94b8b12"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=59be19b5ce968459cd3293d4e94b8b12"
            }
        ]
    },
    {
        "id": "773fee9cae37b5b55ca2ba644bda0dba",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=773fee9cae37b5b55ca2ba644bda0dba"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=773fee9cae37b5b55ca2ba644bda0dba"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=773fee9cae37b5b55ca2ba644bda0dba"
            }
        ]
    },
    {
        "id": "ebbebeb34e9e60291b805a1ef47d0320",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=ebbebeb34e9e60291b805a1ef47d0320"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=ebbebeb34e9e60291b805a1ef47d0320"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=ebbebeb34e9e60291b805a1ef47d0320"
            }
        ]
    },
    {
        "id": "9af475d39d6b8da849e66a0398a3ef19",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=9af475d39d6b8da849e66a0398a3ef19"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=9af475d39d6b8da849e66a0398a3ef19"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=9af475d39d6b8da849e66a0398a3ef19"
            }
        ]
    },
    {
        "id": "60805b1e569278c430ca17568428fdf0",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=60805b1e569278c430ca17568428fdf0"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=60805b1e569278c430ca17568428fdf0"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=60805b1e569278c430ca17568428fdf0"
            }
        ]
    },
    {
        "id": "7bcdcc990eef3f11e5e45804eca82e7c",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=7bcdcc990eef3f11e5e45804eca82e7c"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=7bcdcc990eef3f11e5e45804eca82e7c"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=7bcdcc990eef3f11e5e45804eca82e7c"
            }
        ]
    },
    {
        "id": "893fc30525f95722777431ead63d92f3",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=893fc30525f95722777431ead63d92f3"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=893fc30525f95722777431ead63d92f3"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=893fc30525f95722777431ead63d92f3"
            }
        ]
    },
    {
        "id": "5acb7cf22bbabe4f82a07af205b3b429",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=5acb7cf22bbabe4f82a07af205b3b429"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=5acb7cf22bbabe4f82a07af205b3b429"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=5acb7cf22bbabe4f82a07af205b3b429"
            }
        ]
    },
    {
        "id": "c169be5ef1e33865d391c53cd67ec2b1",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=c169be5ef1e33865d391c53cd67ec2b1"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=c169be5ef1e33865d391c53cd67ec2b1"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=c169be5ef1e33865d391c53cd67ec2b1"
            }
        ]
    },
    {
        "id": "07dd19f3b6bd147199e6dd1f4fa987f7",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=07dd19f3b6bd147199e6dd1f4fa987f7"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=07dd19f3b6bd147199e6dd1f4fa987f7"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=07dd19f3b6bd147199e6dd1f4fa987f7"
            }
        ]
    },
    {
        "id": "e6d7104204a06a46e55f3fbaa3101c61",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=e6d7104204a06a46e55f3fbaa3101c61"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=e6d7104204a06a46e55f3fbaa3101c61"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=e6d7104204a06a46e55f3fbaa3101c61"
            }
        ]
    },
    {
        "id": "59509b1b1c5c05b3af4455bde723369b",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=59509b1b1c5c05b3af4455bde723369b"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=59509b1b1c5c05b3af4455bde723369b"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=59509b1b1c5c05b3af4455bde723369b"
            }
        ]
    },
    {
        "id": "8534b2d20dd1fc0d6aecdaa1797c0791",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=8534b2d20dd1fc0d6aecdaa1797c0791"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=8534b2d20dd1fc0d6aecdaa1797c0791"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=8534b2d20dd1fc0d6aecdaa1797c0791"
            }
        ]
    },
    {
        "id": "7bfa7203438885d1f9bbfb9a1d6b58fa",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=7bfa7203438885d1f9bbfb9a1d6b58fa"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=7bfa7203438885d1f9bbfb9a1d6b58fa"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=7bfa7203438885d1f9bbfb9a1d6b58fa"
            }
        ]
    },
    {
        "id": "19518e59e30752c9b5d1e6f1dfb5ea0f",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=19518e59e30752c9b5d1e6f1dfb5ea0f"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=19518e59e30752c9b5d1e6f1dfb5ea0f"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=19518e59e30752c9b5d1e6f1dfb5ea0f"
            }
        ]
    },
    {
        "id": "b8f7cd73e476cfacfaa5674fe3a97623",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=b8f7cd73e476cfacfaa5674fe3a97623"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=b8f7cd73e476cfacfaa5674fe3a97623"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=b8f7cd73e476cfacfaa5674fe3a97623"
            }
        ]
    },
    {
        "id": "a065058a0b7d5c94f1dc9fa8eb2f54bc",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=a065058a0b7d5c94f1dc9fa8eb2f54bc"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=a065058a0b7d5c94f1dc9fa8eb2f54bc"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=a065058a0b7d5c94f1dc9fa8eb2f54bc"
            }
        ]
    },
    {
        "id": "fd524128c92e0d3aec3eb02bf2632ab7",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=fd524128c92e0d3aec3eb02bf2632ab7"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=fd524128c92e0d3aec3eb02bf2632ab7"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=fd524128c92e0d3aec3eb02bf2632ab7"
            }
        ]
    },
    {
        "id": "e49d391175151779f5223886b3921364",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=e49d391175151779f5223886b3921364"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=e49d391175151779f5223886b3921364"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=e49d391175151779f5223886b3921364"
            }
        ]
    },
    {
        "id": "f8862ee591eec602dee53042cbaa13d3",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=f8862ee591eec602dee53042cbaa13d3"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=f8862ee591eec602dee53042cbaa13d3"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=f8862ee591eec602dee53042cbaa13d3"
            }
        ]
    },
    {
        "id": "e0a9f7957b60bad7cc4a36f92e76205c",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=e0a9f7957b60bad7cc4a36f92e76205c"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=e0a9f7957b60bad7cc4a36f92e76205c"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=e0a9f7957b60bad7cc4a36f92e76205c"
            }
        ]
    },
    {
        "id": "d71b38ef138d8cfc3926bea7bd54202f",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=d71b38ef138d8cfc3926bea7bd54202f"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=d71b38ef138d8cfc3926bea7bd54202f"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=d71b38ef138d8cfc3926bea7bd54202f"
            }
        ]
    },
    {
        "id": "f7e86e6208a818b3164552fbd10fc930",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=f7e86e6208a818b3164552fbd10fc930"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=f7e86e6208a818b3164552fbd10fc930"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=f7e86e6208a818b3164552fbd10fc930"
            }
        ]
    },
    {
        "id": "9ca93522f7ae0900e7d4b8a06ca2d106",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=9ca93522f7ae0900e7d4b8a06ca2d106"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=9ca93522f7ae0900e7d4b8a06ca2d106"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=9ca93522f7ae0900e7d4b8a06ca2d106"
            }
        ]
    },
    {
        "id": "b5b9377040c0a6d83d38adfa6533f4cf",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=b5b9377040c0a6d83d38adfa6533f4cf"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=b5b9377040c0a6d83d38adfa6533f4cf"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=b5b9377040c0a6d83d38adfa6533f4cf"
            }
        ]
    },
    {
        "id": "dc31090936e56114784053b8485e4769",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=dc31090936e56114784053b8485e4769"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=dc31090936e56114784053b8485e4769"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=dc31090936e56114784053b8485e4769"
            }
        ]
    },
    {
        "id": "e26236a3c9fbb186d8224e52d0bfa7f5",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=e26236a3c9fbb186d8224e52d0bfa7f5"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=e26236a3c9fbb186d8224e52d0bfa7f5"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=e26236a3c9fbb186d8224e52d0bfa7f5"
            }
        ]
    },
    {
        "id": "a18a0732fd97b6f4c0ce95e95b8efe56",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=a18a0732fd97b6f4c0ce95e95b8efe56"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=a18a0732fd97b6f4c0ce95e95b8efe56"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=a18a0732fd97b6f4c0ce95e95b8efe56"
            }
        ]
    },
    {
        "id": "b94a61735d7c69dc8da722a3271c74fc",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=b94a61735d7c69dc8da722a3271c74fc"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=b94a61735d7c69dc8da722a3271c74fc"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=b94a61735d7c69dc8da722a3271c74fc"
            }
        ]
    },
    {
        "id": "f13816e079bb25985ce622c3314590bc",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=f13816e079bb25985ce622c3314590bc"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=f13816e079bb25985ce622c3314590bc"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=f13816e079bb25985ce622c3314590bc"
            }
        ]
    },
    {
        "id": "fe5ef39a642fdccdee8380a6fe715cb4",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=fe5ef39a642fdccdee8380a6fe715cb4"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=fe5ef39a642fdccdee8380a6fe715cb4"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=fe5ef39a642fdccdee8380a6fe715cb4"
            }
        ]
    },
    {
        "id": "66f0c0510ab13a75f705d649b5e4ab59",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=66f0c0510ab13a75f705d649b5e4ab59"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=66f0c0510ab13a75f705d649b5e4ab59"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=66f0c0510ab13a75f705d649b5e4ab59"
            }
        ]
    },
    {
        "id": "247a48c9ccf30bf3edbf6cfb566d6e76",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=247a48c9ccf30bf3edbf6cfb566d6e76"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=247a48c9ccf30bf3edbf6cfb566d6e76"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=247a48c9ccf30bf3edbf6cfb566d6e76"
            }
        ]
    },
    {
        "id": "95a6a7f49d43aea92e7999c04cf7d598",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=95a6a7f49d43aea92e7999c04cf7d598"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=95a6a7f49d43aea92e7999c04cf7d598"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=95a6a7f49d43aea92e7999c04cf7d598"
            }
        ]
    },
    {
        "id": "12ca3dbc43d8ee7426b4f3dd51effd34",
        "title": "Match Stream",
        "sport": "FOOTBALL",
        "league": "SPORTS",
        "startTime": "TODAY",
        "isLive": false,
        "team1": {
            "name": "Match Stream",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "team2": {
            "name": "Opponent",
            "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cnn-us.png"
        },
        "servers": [
            {
                "name": "Server 1 (StreamCorner 1080p)",
                "type": "iframe",
                "url": "https://topembed.pw.getsugatensho.sbs/mpegts?p=12ca3dbc43d8ee7426b4f3dd51effd34"
            },
            {
                "name": "Server 2 (Pandecoco HD)",
                "type": "iframe",
                "url": "https://amazon.com.pandecocogaming.sbs/?p=12ca3dbc43d8ee7426b4f3dd51effd34"
            },
            {
                "name": "Server 3 (Sportsembed Live)",
                "type": "iframe",
                "url": "https://sportsembed.su.getsugatensho.sbs/?p=12ca3dbc43d8ee7426b4f3dd51effd34"
            }
        ]
    }
],

    getAllMatches: function() {
        return this.matches;
    },

    getChannels: function() {
        return this.channelsCatalog.length > 0 ? this.channelsCatalog : this.matches.filter(m => m.sport === "24/7 STREAMS" || m.league.includes("24/7"));
    },

    getItemById: function(id) {
        const all = [...this.matches, ...this.channelsCatalog];
        return all.find(item => item.id === id);
    }
};
