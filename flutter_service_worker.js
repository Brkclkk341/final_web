'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "9fd32966ddb5551910f1ce3db69edd2b",
"assets/assets/fonts/BlackOpsOne-Regular.ttf": "bc0d30551f2a2318acbcee074581c904",
"assets/assets/fonts/DelaGothicOne-Regular.ttf": "55f399efa5f812390e55d7452727ccea",
"assets/assets/fonts/LuckiestGuy-Regular.ttf": "c6004be49628b1226eb31b068348d24f",
"assets/assets/images/5500xt.jpg": "8d716b96d7cf834114c2391ede156e31",
"assets/assets/images/asus.jpg": "4b6878144fcd896ad63cb5987e2087c5",
"assets/assets/images/corsair1.jpg": "e5fa771247000f1bd4c998a6103662d1",
"assets/assets/images/corsair2.jpg": "35673a22ecd2116fac5df0f0a9f367ee",
"assets/assets/images/corsair3.jpg": "b82e382aee966b1e07773327b9c06dda",
"assets/assets/images/corsairkapak2.jpg": "8ec9ea4612387a6c0d7a31102a6df77a",
"assets/assets/images/ekrankartt.jpg": "13d6d6b6f8a472180a8993bc3e428700",
"assets/assets/images/gamepowermedusaappbar.jpeg": "939cc52c6be46900a51b1bd519a5e620",
"assets/assets/images/graffik.jpg": "92c132b6c15a22143f80b8e88ccc4f5f",
"assets/assets/images/hyperx.jpg": "1485886ac2a76cf190fcf3173146bfa5",
"assets/assets/images/hyperx1.jpg": "ea677f394fa410768f04f2d46c571943",
"assets/assets/images/hyperx2.jpg": "654413502e0d0ef514fe111a6bb8a0b5",
"assets/assets/images/hyperx3.jpg": "f703d063d7c758209454bf18bdfb8a89",
"assets/assets/images/kasa.png": "35ce51ded3375a5e76d092bcd9328f49",
"assets/assets/images/logig502.jpg": "638395980af916c810ea397b47da3589",
"assets/assets/images/logig5021.jpg": "6a22066ae85736a024ce189186490a4e",
"assets/assets/images/logig5022.jpg": "1e1a66b364c5376661803b2182674d39",
"assets/assets/images/logig5023.png": "f1fee43ca843cdd6266713d54c8adf6e",
"assets/assets/images/medusa.jpg": "cddd337b4be4c16afcdcaac29f82599e",
"assets/assets/images/medusa1.jpg": "fb538c3a0ae4e94e1951cce7c8a6621e",
"assets/assets/images/medusa2.jpeg": "b1d0b64c96917a44a4b89710ef19a0ed",
"assets/assets/images/medusa3.jpg": "b00cd9556d1fdadb27fa8379d066a1e5",
"assets/assets/images/monsterpusat.jpg": "0402a760befcc837d78a5ad37564d322",
"assets/assets/images/monsterpusat1.jpg": "a2cd2c5047867ee4f03c6363d5815949",
"assets/assets/images/monsterpusat2.jpg": "02cfb7a2b7b58a57a7d42fcc3bfe1f67",
"assets/assets/images/monsterpusat3.jpg": "aa2fda9df1b64a87e0ec6ad08941abad",
"assets/assets/images/msi.jpg": "4c654c0ac88ee61452252db5ec9411c8",
"assets/assets/images/msimonitor.jpg": "a2d2372cff71b29b84c9d21b59adabc8",
"assets/assets/images/razer.jpg": "09e95db408aae9b6d0f0631c6a6320cd",
"assets/assets/images/rtx.jpg": "c22441a07dd3681a77f9957b3ab32c74",
"assets/assets/images/rtx3090.jpg": "5d6e661b7c98b43b7631ef119a6ff145",
"assets/assets/images/rx580.jpg": "e260c74906b24722ad175817f2a426de",
"assets/assets/images/steelseries.jpg": "cedcdef17c3163e4dc3f20dda4348037",
"assets/assets/images/tforcedeltakapak.jpg": "54bdd28c0588b5ebd22c7472bc621171",
"assets/assets/images/tforcedeltaram1.jpg": "11f3427a96b19bbd5db719e8916b812f",
"assets/assets/images/tforcedeltaram2.jpeg": "6821d67516f5bbaa4c8b46daddc3affe",
"assets/assets/images/tforcedeltaram3.jpg": "bdc56117a286169af49f41cbbdb464fb",
"assets/FontManifest.json": "7a1b4b6779149dbcd8e819e6eb9ca8bd",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "b74152fa996e19d373690757f179e512",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_signin_button/assets/logos/2.0x/facebook_new.png": "83bf0093719b2db2b16e2839aee1069f",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_dark.png": "937022ea241c167c8ce463d2ef7ed105",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_light.png": "8f10eb93525f0c0259c5e97271796b3c",
"assets/packages/flutter_signin_button/assets/logos/3.0x/facebook_new.png": "12531aa3541312b7e5ddd41223fc60cb",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_dark.png": "ac553491f0002941159b405c2d37e8c6",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_light.png": "fe46d37e7d6a16ecd15d5908a795b4ee",
"assets/packages/flutter_signin_button/assets/logos/facebook_new.png": "e1dff5c319a9d7898aee817f624336e3",
"assets/packages/flutter_signin_button/assets/logos/google_dark.png": "c32e2778b1d6552b7b4055e49407036f",
"assets/packages/flutter_signin_button/assets/logos/google_light.png": "f71e2d0b0a2bc7d1d8ab757194a02cac",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "eb92586f0b9896231cdd1b20fc933e81",
"/": "eb92586f0b9896231cdd1b20fc933e81",
"main.dart.js": "75f5b2eabe89fdcd11f63dd8d2ffec58",
"manifest.json": "70b360a28926dbd43e0046a35b3e8a87",
"version.json": "96c09c3b5879c5f40df60c178d6bf28c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
