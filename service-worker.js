self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('eurotrip-cache').then((cache) => {
      return cache.addAll([
        'Roteiro_Atualizado_Com_CuttySark.html',
        'manifest.json',
        'icon-192.png',
        'icon-512.png'
      ]);
    })
  );
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});