const CACHE_NAME = 'nbraack-4c1cf18c-3948-4d27-b61b-3dd9951d974c';
const STATIC_FILES = ['/','/index.html','/static/css/main.55079bcc.chunk.css','/static/js/2.4bae4dea.chunk.js','/static/js/2.4bae4dea.chunk.js.LICENSE.txt','/static/js/main.6990131f.chunk.js','/static/js/runtime-main.3243a27a.js','/static/media/chalk-board.67e07c37.otf'];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches()
            .open(CACHE_NAME)
            .then(cache => cache.addAll(STATIC_FILES))
            .then(() => self.skipWaiting())
    );
});
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches()
            .keys()
            .then(keyList =>
                Promise.all(
                    keyList.map(key => {
                        if (key !== CACHE_NAME) return caches().delete(key);
                    })
                )
            )
    );
});
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
