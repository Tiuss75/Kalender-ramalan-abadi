// sw.js - Service Worker untuk PWA Kalender Jawa
const CACHE_NAME = 'kalender-jawa-v2.0';
const urlsToCache = [
  './',
  './index.html',
  './main.js',
  './data-wuku.js',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Segoe+UI:wght@400;700&display=swap'
];

// Install Service Worker
self.addEventListener('install', event => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Caching files');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('Service Worker: Installed');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('Service Worker: Install failed', error);
      })
  );
});

// Activate Service Worker
self.addEventListener('activate', event => {
  console.log('Service Worker: Activating...');
  // Remove old caches
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('Service Worker: Clearing old cache', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
  console.log('Service Worker: Activated');
  return self.clients.claim();
});

// Fetch resources
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  // Skip Chrome extensions
  if (event.request.url.startsWith('chrome-extension://')) return;

  // Skip analytics/telemetry
  if (event.request.url.includes('analytics') || 
      event.request.url.includes('telemetry')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          console.log('Service Worker: Serving from cache', event.request.url);
          return response;
        }

        // Not in cache - fetch from network
        return fetch(event.request)
          .then(response => {
            // Check if valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone response
            const responseToCache = response.clone();

            // Add to cache
            caches.open(CACHE_NAME)
              .then(cache => {
                // Cache only certain file types
                const url = new URL(event.request.url);
                const shouldCache = 
                  event.request.url.includes('data-wuku.js') ||
                  event.request.url.includes('main.js') ||
                  event.request.url.includes('.html') ||
                  event.request.url.includes('.css') ||
                  event.request.url.includes('.png') ||
                  event.request.url.includes('.jpg') ||
                  event.request.url.includes('.json');

                if (shouldCache) {
                  cache.put(event.request, responseToCache);
                  console.log('Service Worker: Cached new resource', event.request.url);
                }
              });

            return response;
          })
          .catch(error => {
            console.error('Service Worker: Fetch failed', error);
            // Fallback for specific pages
            if (event.request.url.includes('.html')) {
              return caches.match('./index.html');
            }
          });
      })
  );
});

// Background sync for token validation
self.addEventListener('sync', event => {
  if (event.tag === 'sync-token') {
    console.log('Service Worker: Background sync for token');
    event.waitUntil(
      // Simpan aktivitas token untuk sync nanti
      Promise.resolve()
    );
  }
});

// Push notifications
self.addEventListener('push', event => {
  console.log('Service Worker: Push received', event);
  
  const options = {
    body: event.data ? event.data.text() : 'Update kalender Jawa tersedia!',
    icon: '/logo192.png',
    badge: '/logo192.png',
    vibrate: [200, 100, 200],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '1'
    },
    actions: [
      {
        action: 'explore',
        title: 'Buka Kalender',
        icon: '/logo192.png'
      },
      {
        action: 'close',
        title: 'Tutup',
        icon: '/logo192.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Kalender Jawa', options)
  );
});

self.addEventListener('notificationclick', event => {
  console.log('Service Worker: Notification click', event);
  
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});
