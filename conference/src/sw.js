(function () {

    importScripts("https://cdn.rawgit.com/mozilla/localForage/master/dist/localforage.js");

    const FILES_TO_CACHE = [
        'main.bundle.js',
        'sw.js',
        'inline.bundle.js',
        'polyfills.bundle.js',
        'styles.bundle.js',
        'vendor.bundle.js',
        'app.1.js',
    ];

    const STATIC_CACHE_NAME = 'pages-cache-v2';

    self.addEventListener('install', event => {
        console.log('Installation du Service Worker...');
        console.log('Mise en cache des ressources');
        event.waitUntil(
            Promise.all([
                caches.open(STATIC_CACHE_NAME)
                    .then(cache => {
                        return cache.addAll(FILES_TO_CACHE);
                    }),
                fetch('https://raw.githubusercontent.com/DevInstitut/conference-data/master/sessions.json')
                    .then(resp => resp.json())
                    .then(sessions => {
                        localforage.config({ storeName: 'sessions' })
                        for (key in sessions) {
                            localforage.setItem(key, sessions[key])
                        }
                    })
                ]))
    })

    self.addEventListener('activate', event => {
        console.log('Activating new service worker...');
        const cacheWhitelist = [STATIC_CACHE_NAME];
        // suppression des caches excepté le cache courant (STATIC_CACHE_NAME) 
        event.waitUntil(
            caches.keys().then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        if (cacheWhitelist.indexOf(cacheName) < 0) {
                            return caches.delete(cacheName);
                        }
                    }));
            }));
    })

    self.skipWaiting();

    self.addEventListener('fetch', event => {
        console.log('Fetching:', event.request.url);
        event.respondWith(
            caches.match(event.request).then(response => {
                if (response) {
                    console.log(event.request.url, 'servi depuis le cache');
                    return response;
                }
                console.log(event.request.url, 'servi depuis le réseau'); return fetch(event.request)
            })
                // rubrique à ajouter 
                .then(function (response) {
                    return caches.open(STATIC_CACHE_NAME).then(cache => {
                        // mise en cache des ressources qui ne contiennent pas no.cache
                        if (event.request.url.indexOf('no.cache') < 0) {
                            cache.put(event.request.url, response.clone());
                        }
                        return response;
                    });
                })
                .catch(error => {
                    console.log("oops");
                }));
    });

})()