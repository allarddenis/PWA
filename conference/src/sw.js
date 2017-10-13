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

    self.addEventListener('install', event => {})

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
                console.log(event.request.url, 'servi depuis le réseau');
                return fetch(event.request).then(function (resp) {

                    if (event.request.url.indexOf('no.cache') > 0) {
                        return resp;
                    }

                    const lastUrlPart = event.request.url.split('/')[event.request.url.split('/').length - 1];

                    // Saving all json files into IndexedDB
                    if (lastUrlPart.indexOf('.json') > 0) {

                        console.log('Saving json', lastUrlPart);

                        const dataNameInCache = lastUrlPart.split('.')[0];

                        localforage.config({ storeName: 'json' })
                        var responseClone = resp.clone();

                        responseClone.json().then(data => {
                            localforage.setItem(dataNameInCache, data)
                        })
                    }
                    else if (lastUrlPart.indexOf('.js') > 0) {

                        if(FILES_TO_CACHE.indexOf(lastUrlPart)>0)
                        {
                            console.log('Saving js', lastUrlPart);
                            caches.open(STATIC_CACHE_NAME).then(cache =>
                                cache.add(lastUrlPart)
                            )
                        }
                    }
                    else {
                        console.log('Not caching a file', lastUrlPart);
                        //cache.addAll(lastUrlPart);
                    }
                    // else{
                    return resp;
                });
            })
        )
    })

})()