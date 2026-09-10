/**
 * AryanStreams Global - Universal Player Engine
 * Controls multi-server tabs, Shaka Player DASH playback, HLS.js,
 * and iframe embeds.
 */

window.AryanPlayerEngine = {
    currentStream: null,
    activeServerIdx: 0,
    hls: null,

    init: function(containerId, streamItem) {
        const container = document.getElementById(containerId);
        if (!container) return;

        this.currentStream = streamItem;
        this.activeServerIdx = 0;
        this.render(container);
    },

    switchServer: function(idx) {
        if (!this.currentStream || !this.currentStream.servers) return;
        this.activeServerIdx = idx;
        const container = document.getElementById('player-viewport-container');
        if (container) {
            this.render(container);
        }
    },

    render: function(container) {
        if (this.hls) {
            this.hls.destroy();
            this.hls = null;
        }

        const servers = this.currentStream.servers || [this.currentStream];
        const currentServer = servers[this.activeServerIdx] || servers[0];

        let html = '';

        // Multi-Server Selector Tabs Bar
        html += `<div class="bg-slate-900 border-b border-gray-800 p-2.5 flex items-center gap-2 overflow-x-auto custom-scrollbar">`;
        servers.forEach((srv, i) => {
            const isActive = i === this.activeServerIdx;
            html += `
                <button onclick="AryanPlayerEngine.switchServer(${i})"
                        class="px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${isActive ? 'bg-green-500 text-black shadow-lg shadow-green-500/25' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}">
                    <span class="w-2 h-2 rounded-full ${isActive ? 'bg-black animate-pulse' : 'bg-green-400'}"></span>
                    ${srv.name || 'Server ' + (i + 1)}
                </button>
            `;
        });
        html += `</div>`;

        // Player Canvas Area
        html += `<div class="relative aspect-video w-full bg-black overflow-hidden group">`;
        
        // Connecting Overlay
        html += `
            <div id="player-loading-overlay" class="absolute inset-0 z-20 bg-black/95 flex flex-col items-center justify-center transition-opacity duration-300">
                <div class="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mb-3"></div>
                <div class="text-sm font-bold text-white tracking-widest uppercase">Connecting Stream Server...</div>
                <div class="text-xs text-gray-400 mt-1 font-semibold">${currentServer.name || 'Server ' + (this.activeServerIdx + 1)}</div>
            </div>
        `;

        if (currentServer.type === 'video') {
            html += `<video id="global-video-element" class="w-full h-full object-contain" controls autoplay playsinline></video>`;
        } else {
            html += `<iframe id="global-iframe-element" src="${currentServer.url}" class="w-full h-full border-0" allowfullscreen allow="autoplay; encrypted-media; picture-in-picture"></iframe>`;
        }

        html += `</div>`;

        container.innerHTML = html;

        // Auto-remove loader once playback begins
        const loader = document.getElementById('player-loading-overlay');
        if (currentServer.type === 'video') {
            const video = document.getElementById('global-video-element');
            if (Hls.isSupported() && currentServer.url.includes('.m3u8')) {
                const hls = new Hls({ enableWorker: true });
                hls.loadSource(currentServer.url);
                hls.attachMedia(video);
                this.hls = hls;
                hls.on(Hls.Events.MANIFEST_PARSED, () => {
                    video.play().catch(() => {});
                    if (loader) loader.style.opacity = '0', setTimeout(() => loader.remove(), 300);
                });
            } else {
                video.src = currentServer.url;
                video.onloadeddata = () => {
                    video.play().catch(() => {});
                    if (loader) loader.style.opacity = '0', setTimeout(() => loader.remove(), 300);
                };
            }
        } else {
            const iframe = document.getElementById('global-iframe-element');
            if (iframe) {
                iframe.onload = () => {
                    if (loader) loader.style.opacity = '0', setTimeout(() => loader.remove(), 400);
                };
                setTimeout(() => { if (loader) loader.style.opacity = '0', setTimeout(() => loader.remove(), 300); }, 3000);
            }
        }
    }
};
