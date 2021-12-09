const CACHE = 'pwa-cache';
const precacheFiles = [];

self.addEventListener('install', function (event) {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      return cache.addAll(precacheFiles);
    })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function (event) {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fromCache(event.request).then(
      function (response) {
        event.waitUntil(
          fetch(event.request).then(function (response) {
            return updateCache(event.request, response);
          })
        );

        return response;
      },
      async function () {
        try {
          const response = await fetch(event.request);
          event.waitUntil(updateCache(event.request, response.clone()));
          return response;
        } catch (error) {
          console.error(
            '[PWA Builder] Network request failed and no cache.' + error
          );
        }
      }
    )
  );
});

async function fromCache(request) {
  const cache = await caches.open(CACHE);
  const matching = await cache.match(request);
  if (!matching || matching.status === 404) {
    return Promise.reject('no-match');
  }
  return matching;
}

async function updateCache(request, response) {
  const cache = await caches.open(CACHE);
  return await cache.put(request, response);
}
