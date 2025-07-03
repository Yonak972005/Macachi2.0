const CACHE_NAME = 'macachi-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/reset.css',
  '/funcionalidades.js',
  '/tornillos-de-lujo.html',
  'https://i.postimg.cc/QNJ34NCr/icon.png',
  'https://i.postimg.cc/zf3N4nvd/TORNILLO-DE-LUJO.png',
  'https://i.postimg.cc/L6sKvnXg/slider1.png',
  'https://i.postimg.cc/rwvB8j95/slider2.png',
  'https://i.postimg.cc/HnsKShp1/slider3.png',
  'https://i.postimg.cc/hvyYN1jz/slider4.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Cache abierto');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - retorna la respuesta
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
