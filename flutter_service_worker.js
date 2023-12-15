'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "6a6033064c7621bfcbc9e4b9a9ddbeab",
"index.html": "d5af4b21fb06322195cad4c4af9dcb1f",
"/": "d5af4b21fb06322195cad4c4af9dcb1f",
"main.dart.js": "5e476c8b2e9011ec99b2750ff4cdb430",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f780076df122800e9eb8137874ca432f",
".git/config": "59b88a856f3ea8446a31e66caa27871c",
".git/objects/3b/ddad9cba960a588dacce57ac81c89e3f623b1b": "8ab0032c4b10558396042fd27015268b",
".git/objects/03/ac33a5a35eac51271336c6da0643b4a6b27675": "e2bdeee488b44da97f85d7d54664529c",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/505d35f09cf925a6517f228bfbc4ed73e89f7e": "a0ba527db2fe296ff985374cd88d2006",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/33/05da0869dacaec62407126a46467cea6e64cd2": "d7ac81504d1898df0379df988df71c28",
".git/objects/df/104b008fba91891fac8a854121a4c8bfb94c2a": "cb533ce5518aded350a2a7ec61775332",
".git/objects/da/48e56c51f4a66fb27d0b41f548ce33d023c3f4": "66e26553e45b49124f6d07b7080c1bd4",
".git/objects/d1/977238724b76a0d4001d6392a1800c93b809c2": "83236d18bb50672361baf4513d82bc01",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/40052006be9a3adbc518b3f6edf87b73eb538d": "f4979f5286f4b1b7f22b09155d96beae",
".git/objects/ae/9d56350ca5950f8cf36c181519f864bd83a566": "e51937ed24fe41d5fa38141ab8816513",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/cf3b25a8dc5c6b7da5c515c06b3fe9c404de8a": "eac1f24e592279a1195fbbf3fbc1884a",
".git/objects/e2/cfcaaa4da0556d6460d9ccb06d49b4fbf8063a": "467e0e3def8b3b288c5d8e8ec96e2318",
".git/objects/f3/5b92fa10e12f572a47c10687e925da348d8c65": "b4afefd8d7babf7799ab983381930c7b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/8dcca5f06edecf9f91c2e41f1db2d9abbc82fa": "9950e777fb882db46b930f6b6576d2fe",
".git/objects/fc/f306587b27e33b7162c3f3d4ec508b853c8d8b": "bde7df0db8f36cee3bf18ea1cdff4de7",
".git/objects/cf/e4a3722c230d2674b4a412b35a33dc6274f720": "6837165297386112b809533187c4e05a",
".git/objects/4b/5f303c4c0eed637be27d4075f6d3e062a40fc6": "b97f1208d78dd93fcc5c9fb3534f0ba7",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/42/ef98eaf89d7ef9ae482a6620625a841b6fd018": "a832143739ab3113976fd122aad82939",
".git/objects/45/422820de7344aec676abef9f0666cedf528e0e": "c29cab029659309ab69c58a56f462ad1",
".git/objects/73/ca78919911f425b49928a2a1c7118271d023c0": "dd9bb379e816295b42eaed66c6f09535",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/124d60e904f592c06cdbb5b684904051e8196f": "8161960f627aec314dbb09ef7eeda695",
".git/objects/7e/b956d620a06d3349f660f1ec1877e8ab97db40": "663d33d6d6d40927809d7642ce2a49dc",
".git/objects/19/7b322692c2b943dd3ff296d58aa992f246cb09": "f5126779fe086dcae2ba11638ac43eb6",
".git/objects/4d/ebdf8f8e64b07a9c41cdc999514ff25111eef4": "ad60f66d806056a33ae2725fbb05abb1",
".git/objects/4d/25fe01a353f3db3b22af3e16207d8a17e7c9ca": "d0a9fcbd40f62657a1c88c9d9bcca5b9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/ebf2715c016a6fd17ee8814f9051041f1ef1a0": "0b8e145609bb8fd7704090bd23f170bd",
".git/objects/38/77f62a5b04cf5c0f3a8940e7957b2e132eedb6": "40ba013215ee6700c9fd8946bbe6e384",
".git/objects/9a/b0f83723d429ea14334630411af37d48768383": "c33255f0379bed0b7879362d3ae40f7a",
".git/objects/37/33a1e8d2d2daf924f6d0cea28470c2945abf4a": "157204350d156027f563731d82c15232",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/99/7587a7616765cc09138d2d9ef1174eed5e95a3": "8b3f080432be288f102b893fcb56909e",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/ba/1b619c5b01c182b675756f4d175e979fef41b2": "89fbe8159ce97c5824e5aa4d9685e1b0",
".git/objects/b8/e3767adf175de79499876759e70ac126664130": "81699498c7c16d36a9f7b92ccf4a034e",
".git/objects/b1/63c5b0d666c077ad922e5b215e0890b24e69a9": "ae9ff3f10e9dbb08954b64d5ea47d6eb",
".git/objects/d5/5ca79e26b9c128d714e0e6d26747b290f084ac": "726db4e45a59ae0920177e244a1add39",
".git/objects/d5/808d9b01993fb685214893a4b68653b092893c": "b6ce07c733ceeb991b291c28e24ccdff",
".git/objects/aa/98304dd9c8f01617c97810fa931826d569545f": "498f8710948beacf749246fa4e9f1575",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/0dcaa0f39c7ef5aa1e8b916c4219bf79403452": "fd95d761bb6b25865efc8083977e4857",
".git/objects/f9/0540cd570aa23a3a92e974110392de0fa40201": "53574ee1d7e3d2f764de4e1f1f5ac787",
".git/objects/fa/8a03f12efb2ed9f835de73693dbde5cd10dfea": "d395f1504120bdde748fddf0f607ccbf",
".git/objects/e7/f6d846d8302b3e38bf628e9a720fab4dbcefd4": "70adf6ccdaa3bc74c833611e78535186",
".git/objects/f8/b8f8f9463865cfc8d378944620fbf2912dfc52": "ef6da355b754f1d2ae8222b1d553a3ae",
".git/objects/e0/c85fc26d29feb6a0d5705b931b6050a2c0d570": "b402c32350594c45ca33f6b2e80821b4",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/70/fe4fa97cbb7c8eea7347267ba61082f7755210": "c7e47cd531b95bac0c9859b5a165c9f6",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/76/df6761694c6f72932ab676e3dd9c81647084bf": "32616babd67ff6af105c2b141bafd570",
".git/objects/76/82f4963155deeee0d11ca23dde4b8b4b82f8e4": "30bd23a439f9e0f9e494d046ca89b95f",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8d578cdb564a643ac03f60f280205687",
".git/logs/refs/heads/main": "8db5b7591b39e346dbf5e126ccd2e919",
".git/logs/refs/remotes/origin/main": "95bcee211c3f0a9604645abe65b8da99",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "9ff441ea333ac7d95987a5c49ca1fe42",
".git/refs/remotes/origin/main": "9ff441ea333ac7d95987a5c49ca1fe42",
".git/index": "5103c083740b1aee9a216048649d6239",
".git/COMMIT_EDITMSG": "4f98f59e877ecb84ff75ef0fab45bac5",
".git/FETCH_HEAD": "f5bbbb0540155fdeae81586fb572712a",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "acb3a5e7ed5566219aa67b708ec9c6bd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
