// service-worker.js

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('my-blog-cache').then(cache => {
        return cache.addAll([
            '/',
            '/style.css',
            '/script.js',
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
            '/images/whatsapp.png',
            '/images/whiteLogo.png'
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