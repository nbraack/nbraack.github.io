importScripts("/precache-manifest.d858e849b876e67fbf2733b1a4a4ad28.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

// See https://developers.google.com/web/tools/workbox/guides/configure-workbox
workbox.setConfig({ debug: false });

self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));

// We need this in Webpack plugin (refer to swSrc option):
// https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin#full_injectmanifest_config
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// app-shell
workbox.routing.registerRoute("/", new workbox.strategies.NetworkFirst());

