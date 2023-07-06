// service-worker.js

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('my-blog-cache').then(cache => {
        return cache.addAll([
            '/',
            '/style.css',
            '/script.js',
            '/images/loading1.gif',
            '/images/icons/icon-48x48.png',
            '/images/icons/icon-72x72.png',
            '/images/icons/icon-96x96.png',
            '/images/icons/icon-128x128.png',
            '/images/icons/icon-144x144.png',
            '/images/icons/icon-152x152.png',
            '/images/icons/icon-192x192.png',
            '/images/icons/icon-384x384.png',
            '/images/icons/icon-512x512.png',
            '/images/whiteLogo.png',
            '/images/anushka.jpeg',
            '/images/area (1).jpeg',
            '/images/arrow.png',
            '/images/bBlue.webp',
            '/images/dilkhush.jpeg',
            '/images/farmer1.png',
            '/images/farmerImage.jpg',
            '/images/grapes00.png',
            '/images/grapes01.png',
            '/images/harvesting1.jpeg',
            '/images/home00.png',
            '/images/home01.png',
            '/images/hourglass (1).png',
            '/images/logo.jpg',
            '/images/manik.jpg',
            '/images/money.png',
            '/images/pesticidesSpray.jpeg',
            '/images/arrow.png',
            '/images/phoneCall.png',
            '/images/phoneCall1.png',
            '/images/pin.png',
            '/images/pin1.png',
            '/images/placeholder.png',
            '/images/project1.jpg',
            '/images/redGlobe.jpeg',
            '/images/saplingStage.webp',
            '/images/sarita.jpg',
            '/images/sharad1.jpeg',
            '/images/shovel00.png',
            '/images/shovel01.png',
            '/images/sonaka.jpg',
            '/images/storyImage.jpg',
            '/images/struggle.png',
            '/images/transparentLogo.png',
            '/images/whatsapp.png'
        ]);
        })
    );
    });
    
    self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
        return response || fetch(event.request);
        })
    );
    });