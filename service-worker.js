const CACHE_NAME = 'pwa-cache-v2';
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
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response =>
      response || fetch(event.request)
    )
  );
});
