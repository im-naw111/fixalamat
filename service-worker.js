
const CACHE_NAME = 'my-app-cache-v16';
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
  console.log('[SW] Installing...');
  self.skipWaiting(); // Aktifkan segera
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener('activate', event => {
  console.log('[SW] Activating...');
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            console.log('[SW] Deleting old cache:', key);
            return caches.delete(key);
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

// Terima pesan dari halaman utama
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    console.log('[SW] SKIP_WAITING received');
    self.skipWaiting();
  }
});
