// Choose a cache name
const cacheName = 'cache-v1'

// List the files to precache
const precacheResources = [
  './',
  './index.html',
  './main.css',
  './assets/fontes/PressStart2P.ttf',
  './assets/imagens/circulo.png ',
  './assets/imagens/game-over.png',
  './assets/imagens/logo-empresa.png',
  './assets/imagens/mapa.png',
  './assets/imagens/menu-inicial.png',
  './assets/imagens/menu-sala.png',
  './assets/imagens/persa-comum1.png',
  './assets/imagens/player1.png',
  './assets/imagens/player2.png',
  './assets/imagens/salas.png',
  './assets/imagens/telacheia.png',
  './assets/imagens/vazio.png',
  './assets/musicas/musica-combate.mp3',
  './assets/musicas/musica-menu.mp3',
  './assets/musicas/erro.mp3',
  './assets/musicas/credito.mp3',
  './assets/musicas/clique.mp3',
  '/dist/index.js',
  '/js/axios.min.js',
  '/js/cena0.js',
  '/js/cena2.js',
  '/js/cena3.js',
  '/js/config.js',
  '/js/defeat.js',
  '/js/index.js',
  '/js/logo.js',
  '/js/phaser.min.js',
  '/js/sala.js',
  '/js/win.js',
  '',
  '',
  '',



]

// When the service worker is installing, open the cache and add the precache resources to it
self.addEventListener('install', (event) => {
  console.log('Service worker install event!')
  event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(precacheResources)))
})

self.addEventListener('activate', (event) => {
  console.log('Service worker activate event!')
})

// When there's an incoming fetch request, try and respond with a precached resource, otherwise fall back to the network
self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request)
    })
  )
})