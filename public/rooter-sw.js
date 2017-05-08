
var doCache = true;

var CACHE_NAME = 'rooter-cache-v1';

self.addEventListener("activate", event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys()
      .then(keyList =>
        Promise.all(keyList.map(key => {
          if (!cacheWhitelist.includes(key)) {
            console.log('Deleting cache: ' + key)
            return caches.delete(key);
          }
        }))
      )
  );
});

self.addEventListener('install', function(event) {
  if (doCache) {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
          fetch("asset-manifest.json")
            .then(response => {
              return response.json()
            })
            .then(assets => {
              console.log(assets);
              const urlsToCache = [
                "/",
                assets["main.js"]
              ]
              cache.addAll(urlsToCache)
              console.log('Assets Cached !');
            })
        })
    );
  }
});

self.addEventListener('fetch', function(event) {
    if (doCache) {
      event.respondWith(
          caches.match(event.request).then(function(response) {
              return response || fetch(event.request);
          })
      );
    }
});
