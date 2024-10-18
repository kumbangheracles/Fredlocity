// Nama cache, bisa disesuaikan dengan versi untuk keperluan update cache di masa mendatang
const CACHE_NAME = 'my-cache-v1';
// Daftar file yang ingin di-cache
const urlsToCache = [
    '/',                          // root directory
    '/index',                     // main HTML file (assumed .html extension)
    '/styles/styles.css',         // CSS file in styles folder
    '/scripts/scripts.js',        // main JS file
    '/service-worker',            // service worker itself
    '/IMG/',                      // folder for images (assumed you cache the whole folder)
    '/LOGO/',                     // folder for logos
    '/Product IMG/',              // folder for product images
    '/autocomplete',              // autocomplete JS file
    '/responsive2',               // another CSS file (assumed .css extension)
    '/responsives',               // assumed this is CSS as well
  ];

// Event install: Menyimpan file ke dalam cache saat service worker pertama kali diinstall
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache opened');
        return cache.addAll(urlsToCache);
      })
  );
});

// Event fetch: Mengambil data dari cache atau server jika tidak ada di cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Jika ada di cache, kembalikan dari cache
        if (response) {
          return response;
        }
        // Jika tidak ada di cache, fetch dari jaringan
        return fetch(event.request);
      })
  );
});

// Event activate: Menghapus cache lama saat ada versi baru
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            // Menghapus cache lama
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
