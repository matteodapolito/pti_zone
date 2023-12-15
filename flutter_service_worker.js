'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "6a6033064c7621bfcbc9e4b9a9ddbeab",
"index.html": "c89cb53af0a5adcbfc50d4483571680d",
"/": "c89cb53af0a5adcbfc50d4483571680d",
"main.dart.js": "c0d127b5011b8100d40d2f0ebbb45bdd",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f780076df122800e9eb8137874ca432f",
".git/config": "59b88a856f3ea8446a31e66caa27871c",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/3b/ddad9cba960a588dacce57ac81c89e3f623b1b": "8ab0032c4b10558396042fd27015268b",
".git/objects/03/ac33a5a35eac51271336c6da0643b4a6b27675": "e2bdeee488b44da97f85d7d54664529c",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/505d35f09cf925a6517f228bfbc4ed73e89f7e": "a0ba527db2fe296ff985374cd88d2006",
".git/objects/9e/b184cdd878998e755486d6c9744c1ebcf51fe4": "c543f4b33bb1a9df1e6a7c382d20d719",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/58/be097b4905558854262376645d2d5e5dee3357": "882da8c879743502a5cae807702e4638",
".git/objects/33/05da0869dacaec62407126a46467cea6e64cd2": "d7ac81504d1898df0379df988df71c28",
".git/objects/9c/37b012f3e1f89f62f4c1df61e7376cbfe1e6f6": "2730bb2640ae534b8774f041f28eda87",
".git/objects/02/586a802df480b0d8c309b16102a407aceae3d8": "6208c333f5faba7be1e05baa49ea7912",
".git/objects/df/104b008fba91891fac8a854121a4c8bfb94c2a": "cb533ce5518aded350a2a7ec61775332",
".git/objects/da/48e56c51f4a66fb27d0b41f548ce33d023c3f4": "66e26553e45b49124f6d07b7080c1bd4",
".git/objects/d1/977238724b76a0d4001d6392a1800c93b809c2": "83236d18bb50672361baf4513d82bc01",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/40052006be9a3adbc518b3f6edf87b73eb538d": "f4979f5286f4b1b7f22b09155d96beae",
".git/objects/ae/9d56350ca5950f8cf36c181519f864bd83a566": "e51937ed24fe41d5fa38141ab8816513",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/54567527949a5257e2ff3a570b0b9396ae65eb": "7b80822a496d2eda0ff365bb58a934f0",
".git/objects/e5/32e2721390d753926c131fb5a8ca66ae30defe": "85128be9afd5b0cc54a49364a6012fed",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/cf3b25a8dc5c6b7da5c515c06b3fe9c404de8a": "eac1f24e592279a1195fbbf3fbc1884a",
".git/objects/e2/cfcaaa4da0556d6460d9ccb06d49b4fbf8063a": "467e0e3def8b3b288c5d8e8ec96e2318",
".git/objects/f3/5b92fa10e12f572a47c10687e925da348d8c65": "b4afefd8d7babf7799ab983381930c7b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/8dcca5f06edecf9f91c2e41f1db2d9abbc82fa": "9950e777fb882db46b930f6b6576d2fe",
".git/objects/fc/f306587b27e33b7162c3f3d4ec508b853c8d8b": "bde7df0db8f36cee3bf18ea1cdff4de7",
".git/objects/fd/73c1a29ec10ae77111f2ea10915b0bb50697db": "2b2ec157fa63c48f8629cfab5f0f5e06",
".git/objects/cf/e4a3722c230d2674b4a412b35a33dc6274f720": "6837165297386112b809533187c4e05a",
".git/objects/cf/347d073797aff30c9c23fc324306975ff28df5": "80f4c8acc6a1395aec54e51ed369425a",
".git/objects/c8/fa23a7181556a8ee02c09d1a7c6dd071f348f4": "c325e5367901e192e971c17413da3667",
".git/objects/4b/5f303c4c0eed637be27d4075f6d3e062a40fc6": "b97f1208d78dd93fcc5c9fb3534f0ba7",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4b/acc667664f2314abe93c05f35d3fb1334170b9": "0791f7fcb05fbd5ebf5b6bb0690a8b2f",
".git/objects/11/0462826b3e0966e56ee43db2421bf560ca6206": "7f155eaa4185435ea36ddb349ef5d38a",
".git/objects/16/50849aa0d3507769a1ff46423d5d34a367ee3e": "ecbdc7f1ecfa36781cf9864bffd0a166",
".git/objects/42/ef98eaf89d7ef9ae482a6620625a841b6fd018": "a832143739ab3113976fd122aad82939",
".git/objects/45/99358847a4456f4783b0c55256d26153e5452f": "a4facfbdc3d944e466dc7a1795af966c",
".git/objects/45/422820de7344aec676abef9f0666cedf528e0e": "c29cab029659309ab69c58a56f462ad1",
".git/objects/73/ca78919911f425b49928a2a1c7118271d023c0": "dd9bb379e816295b42eaed66c6f09535",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/124d60e904f592c06cdbb5b684904051e8196f": "8161960f627aec314dbb09ef7eeda695",
".git/objects/7e/b956d620a06d3349f660f1ec1877e8ab97db40": "663d33d6d6d40927809d7642ce2a49dc",
".git/objects/19/ac3d6a6a09ce5a75cddedaf430938ed84512b6": "7add8996616b4e72146ed110a6ff90cc",
".git/objects/19/7b322692c2b943dd3ff296d58aa992f246cb09": "f5126779fe086dcae2ba11638ac43eb6",
".git/objects/26/b8ec318e510439169b9dbc058694277031b8ca": "2fb97ffd5ba79ed8447a1af8ecc17cf2",
".git/objects/4d/ebdf8f8e64b07a9c41cdc999514ff25111eef4": "ad60f66d806056a33ae2725fbb05abb1",
".git/objects/4d/25fe01a353f3db3b22af3e16207d8a17e7c9ca": "d0a9fcbd40f62657a1c88c9d9bcca5b9",
".git/objects/81/bde912ca3032d6f56738a4084f99f6011e6c75": "40b05c45abfd4926dcbf05a18f7fa50c",
".git/objects/81/73f91482d5ceee949cb02455b2c3fc1b832374": "ea5aa940c9a80c247fc3439e7dde7faa",
".git/objects/81/35fc953d63aa095401ecffa2a48dbe3fad3be2": "15d1777521955996264f6806f28c5ede",
".git/objects/88/9e2a1e4b632006ead37366869aa939f33111c3": "6e6fd2fecc3d223807592105876ffe50",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/ebf2715c016a6fd17ee8814f9051041f1ef1a0": "0b8e145609bb8fd7704090bd23f170bd",
".git/objects/07/b93ae59357be8af16dde2c0d1438099fd17354": "d1d29ec14d3b1fc0167b5b6835d1cc41",
".git/objects/38/77f62a5b04cf5c0f3a8940e7957b2e132eedb6": "40ba013215ee6700c9fd8946bbe6e384",
".git/objects/9a/b0f83723d429ea14334630411af37d48768383": "c33255f0379bed0b7879362d3ae40f7a",
".git/objects/9a/19f463d6eae52810b51e37d45d5c2098d4301d": "76ddbb5e8a6c19dd74c386e88f97ff2a",
".git/objects/3a/83540485ab176af229467079ad98a64209b48c": "97a4e4854317f569dd065142a5cd3959",
".git/objects/98/5efcbfb07a5185f3902481e159bc3c16896d3f": "827d66dc576eb3393d93f28a0e97176a",
".git/objects/5e/fd0f91edf9a538601be3b1249c4754e66ac517": "cf70887f6b8b45fc685dc8c6c81e1eef",
".git/objects/37/33a1e8d2d2daf924f6d0cea28470c2945abf4a": "157204350d156027f563731d82c15232",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/08/f17dcdf7ee109903a1255b8a8463c5f1ba7768": "97d24d1fb401267459b39f92a64bf548",
".git/objects/39/825b78cc1597958e0d014a7427394f2d15dda0": "b6694e92e238be8bfca77b8d7d0091a5",
".git/objects/99/7587a7616765cc09138d2d9ef1174eed5e95a3": "8b3f080432be288f102b893fcb56909e",
".git/objects/52/a6e699b248f02c997f11d4a36bd78c240bfdd4": "da34db26110ad9784cb260085f5e1708",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/bf/83d2e45f94fe91b247d46916726685e6c1dd1f": "9e124c7e4b7ace1b8c7a09e3fe5fb27e",
".git/objects/ba/1b619c5b01c182b675756f4d175e979fef41b2": "89fbe8159ce97c5824e5aa4d9685e1b0",
".git/objects/a7/5901989e6f9e466e83ca4227a59429ac1cdaaf": "e04de6425cbe806ad3bbcfd64fb2370e",
".git/objects/b8/e3767adf175de79499876759e70ac126664130": "81699498c7c16d36a9f7b92ccf4a034e",
".git/objects/b1/eeeb8504a11afbdd870a9ed3fed02151b38222": "30c457434ac0fffb166f5e3c3acb6a95",
".git/objects/b1/63c5b0d666c077ad922e5b215e0890b24e69a9": "ae9ff3f10e9dbb08954b64d5ea47d6eb",
".git/objects/dd/2440db9ef8905ea9c37a2446c32e328615f63d": "0a89194e021fe19bcce50369cdf2d52c",
".git/objects/d5/5ca79e26b9c128d714e0e6d26747b290f084ac": "726db4e45a59ae0920177e244a1add39",
".git/objects/d5/808d9b01993fb685214893a4b68653b092893c": "b6ce07c733ceeb991b291c28e24ccdff",
".git/objects/aa/98304dd9c8f01617c97810fa931826d569545f": "498f8710948beacf749246fa4e9f1575",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/5537bd99b887a4b7b740461bc64bf5749f696f": "c43962fdbcd51f8047423a14c52f6928",
".git/objects/a6/413906cc68f863bdc3791f1d97620180ed3606": "1ecf7564a30401c1790776401267f816",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/0dcaa0f39c7ef5aa1e8b916c4219bf79403452": "fd95d761bb6b25865efc8083977e4857",
".git/objects/cd/9b85817c041ecdb76c7cec087e3299816ec047": "b2d28d8fb728b560d0bf8c5b6a6a935f",
".git/objects/f9/0540cd570aa23a3a92e974110392de0fa40201": "53574ee1d7e3d2f764de4e1f1f5ac787",
".git/objects/fa/8a03f12efb2ed9f835de73693dbde5cd10dfea": "d395f1504120bdde748fddf0f607ccbf",
".git/objects/c2/2de41d6f7624cfa2123a27da57c4afa8c6091f": "15de6cbb44b505a585b2eca7616c0c13",
".git/objects/c2/9ee4c5be97a3888d47d93ce98220fec8974ad0": "bc14c954c3ceacac8667590809b6ec64",
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
".git/objects/8b/58922f960b30fb8a8420ba2cad0753013bfc12": "b133e2fadf1c63908d273fb27bc22838",
".git/objects/25/ceabe985a4cde5be1e41e3cd73a2cb74874f9f": "227141568cadef6ba80fbea54761ef1a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1568fa698c3127d3d4bf5b8d4bdd94c0",
".git/logs/refs/heads/main": "06829cb18fb2d814bd50d8d549e01ffd",
".git/logs/refs/remotes/origin/main": "761ccf1115d4ed9b99eebc75215ccc9f",
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
".git/refs/heads/main": "2d8261add9d971eb4bb78479b53ff422",
".git/refs/remotes/origin/main": "2d8261add9d971eb4bb78479b53ff422",
".git/index": "335dc269404486f481e92ae6d9d46149",
".git/COMMIT_EDITMSG": "4f98f59e877ecb84ff75ef0fab45bac5",
".git/FETCH_HEAD": "60fe909c7c56ce8bb5fddbe2afcb1151",
"assets/AssetManifest.json": "db7e41ca4c3599ef266ceabcf7ec8287",
"assets/NOTICES": "acb3a5e7ed5566219aa67b708ec9c6bd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/logo/pt_logo.png": "9f67bbc82d12bed709c3b3f4176a36e3",
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
