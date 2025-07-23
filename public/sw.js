// Service Worker per la PWA
const CACHE_NAME = 'dice-game-v1';
const urlsToCache = [
  '/',
  '/manifest.json',
  '/logo.jpg'
];

// Installazione del Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Intercettazione delle richieste
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Se c'è una risposta in cache, la restituiamo
        if (response) {
          return response;
        }
        // Altrimenti facciamo la richiesta alla rete
        return fetch(event.request);
      }
    )
  );
});

// Aggiornamento del Service Worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
