'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b70749adeebb19acdc24fa9633cbe504",
"assets/AssetManifest.bin.json": "b9603be06d2c8485dfbf0439d07d3ba3",
"assets/assets/icons/add_circle.svg": "d040c9541938b60906204d0a68b769ec",
"assets/assets/icons/bank.svg": "2c268ee2052091a481977edd784dbd08",
"assets/assets/icons/burger.jpg": "6695f70bb47c7f911f79106478420021",
"assets/assets/icons/calendar.svg": "c4950e27428ba6d7fde203e321fa8173",
"assets/assets/icons/card.svg": "8d61503c39d547756d2e947590b59971",
"assets/assets/icons/cart.svg": "038b1bf1c14c15d34b4c63cdc21e0514",
"assets/assets/icons/cash_desk.svg": "8227384390e531c1d15a9dfe4953cc64",
"assets/assets/icons/check_circle.svg": "f010248e2b0d393ee18da5044a128c40",
"assets/assets/icons/clearAll.svg": "a72633ba555cc947b9cca2d72c2517f0",
"assets/assets/icons/delete.svg": "d2e2d2a87222e5ccb9e1f40c32b08f6d",
"assets/assets/icons/desserts.svg": "4b249ea8ad8ed14b6934db47715de10e",
"assets/assets/icons/drawer.svg": "56ca312f87f6802f9751e94078ca37ff",
"assets/assets/icons/drawer_history.svg": "ba705aef7041825590023bb3cc03c573",
"assets/assets/icons/drinks.svg": "04074462d592fee707fc38b7c9695670",
"assets/assets/icons/extras.svg": "e93e28f746306d64d5fa20ec59b04eb8",
"assets/assets/icons/eye.svg": "6836e34266f1b78e63daf6ff02ea39fe",
"assets/assets/icons/eye_off.svg": "0016b9bd73cc0f2d9c047ad33bad3f50",
"assets/assets/icons/holdOrder.svg": "b4295d823b0d39a65f35a0157d252fe3",
"assets/assets/icons/key.svg": "c3f6fbb155dce5fd27538930fae9ff8f",
"assets/assets/icons/logo.png": "4cbe38219a506f97d63f54b87ba7752a",
"assets/assets/icons/logout.svg": "e3c95584ae80d0f33da143a8e71faa6b",
"assets/assets/icons/logo_text.svg": "f3b219d458b17ca439aa31c9b13d9dd6",
"assets/assets/icons/meals.svg": "190aace9c67796ed262bf889e2de1120",
"assets/assets/icons/menu.svg": "073275b9f0e4f4ad915684990112e567",
"assets/assets/icons/notification.svg": "75d21fb5bcdcdb4bee2551ca4d09e3db",
"assets/assets/icons/orders.svg": "8dc3e75c8ffdb155e5f3f4f78dd587e5",
"assets/assets/icons/payment.svg": "900f1e20b99e90ceaf29abb23064bb25",
"assets/assets/icons/pay_in.svg": "862bbc78e0e364140c77113e2023a226",
"assets/assets/icons/pay_out.svg": "92c305d62a55de78a32beedc056c9043",
"assets/assets/icons/person.svg": "80a1ea92dc429ef8d1caedeb4be905d6",
"assets/assets/icons/print.svg": "f1aaa95287fbd8a67d9df549089b564c",
"assets/assets/icons/Promo.svg": "233c46471aed3ce67afbb87b9da5c456",
"assets/assets/icons/restaurant_icon.svg": "d789537c3e5425113027c05527b5b7f4",
"assets/assets/icons/sandwich.svg": "10d7c4479aa95409fde0d46553ee3c13",
"assets/assets/icons/search.svg": "e524ac76c42bf0301db01beef8adee99",
"assets/assets/icons/settings.svg": "e2a9b64d369bb9991805982d4051691c",
"assets/assets/icons/stock_count.svg": "941d8c9f57c6486a9e4843c0afc3ea1c",
"assets/assets/icons/storefront.svg": "25f96d3092eb107e23b96ecd1cde3c7e",
"assets/assets/translations/ar.json": "48dce3fc7a261c6ccb445612e813b9a0",
"assets/assets/translations/en.json": "cc5125cd6a6b0eeef5b013892418faa0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "8c73a8e08b11bb5cdb70cae3a7cd15d4",
"assets/NOTICES": "8f4eb2239c43b6b4ae0d2dd92251ae6e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.ico": "20c746a6af6ed43f76fab98b05269482",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "3bd29c1e090956736da8ff73d4837c2d",
"icons/apple-touch-icon.png": "c6a0be8ad56f3321f24bb0b099b84fb2",
"icons/icon-192-maskable.png": "ced311db5d24ed6eabf9f8bb12baa6e7",
"icons/Icon-192.png": "6cbecc58a6cb894b79c8d7fec98b57f3",
"icons/icon-512-maskable.png": "79643a49148661ce0fa9b170b81ae2f0",
"icons/Icon-512.png": "3099d21c0a008fdbb24fbf93838d90ce",
"icons/README.txt": "d3df3991a31f034bfa98afdfa3c622e1",
"index.html": "14c98c045e58c0861364ad7e83aaa195",
"/": "14c98c045e58c0861364ad7e83aaa195",
"main.dart.js": "f72c049b98a249fa3518a10aa3f02712",
"manifest.json": "539220c2ceddead74aa8ad3bc5d085dd",
"version.json": "32c1f6ddf0d8e30129d97988939cee0e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
