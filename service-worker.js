
const CACHE_NAME = 'my-app-cache-v4';
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/libs/swiper.min.css',
  '/libs/swiper.min.js',
  '/libs/fontawesome.min.css',
  '/webfonts/fa-brands-400.ttf',
  '/webfonts/fa-brands-400.woff2',
  '/webfonts/fa-regular-400.ttf',
  '/webfonts/fa-regular-400.woff2',
  '/webfonts/fa-solid-900.ttf',
  '/webfonts/fa-solid-900.woff2',
  '/webfonts/fa-v4compatibility.ttf',
  '/webfonts/fa-v4compatibility.woff2'
  
 // '/libs/all.min.js'
];

self.addEventListener('install', event => {
  console.log('[ServiceWorker] Install');
  self.skipWaiting(); // Agar SW langsung aktif
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener('activate', event => {
  console.log('[ServiceWorker] Activate');
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map(name => {
          if (name !== CACHE_NAME) {
            console.log('[ServiceWorker] Removing old cache:', name);
            return caches.delete(name);
          }
        })
      )
    )
  );
  return self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

// Update detection and notification
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('install', () => {
  self.skipWaiting(); // langsung aktifkan service worker yang baru
});



