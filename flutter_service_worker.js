'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "6a6033064c7621bfcbc9e4b9a9ddbeab",
"index.html": "48d479ea5806c0247ebada928f02ff52",
"/": "48d479ea5806c0247ebada928f02ff52",
"main.dart.js": "79e5ab162ece5ec32d90ea93e04999ff",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f780076df122800e9eb8137874ca432f",
".git/config": "59b88a856f3ea8446a31e66caa27871c",
".git/objects/92/089cabad948c67bf3ecb5d646a07c782be63ae": "9c95c3abaa7ca0a75b422a9970fcd9fc",
".git/objects/0c/ac3c447b1e3c790b0407e073bb34b4d629b1bf": "43af37a2b452b11438eb96d8a2d041d0",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/3b/ddad9cba960a588dacce57ac81c89e3f623b1b": "8ab0032c4b10558396042fd27015268b",
".git/objects/03/ac33a5a35eac51271336c6da0643b4a6b27675": "e2bdeee488b44da97f85d7d54664529c",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/505d35f09cf925a6517f228bfbc4ed73e89f7e": "a0ba527db2fe296ff985374cd88d2006",
".git/objects/9e/b184cdd878998e755486d6c9744c1ebcf51fe4": "c543f4b33bb1a9df1e6a7c382d20d719",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/3c/1615c166609605d0a8e530579d69bbd2863673": "88afd73568ba74c71ed5495af2ada9a6",
".git/objects/58/b30dfe21555d64aff7967c38e12a8b6d0dd6c9": "7b66f67b018b0f1d17849cad363fce6c",
".git/objects/58/be097b4905558854262376645d2d5e5dee3357": "882da8c879743502a5cae807702e4638",
".git/objects/93/15a0e7d8f0fbb564201f3adaa65ddcd191217e": "aa43ff53acbeca707bd6a2ce51f61bf9",
".git/objects/5a/9d520424eed1ed363e53cb278b6905c00877cb": "32e9ea7cd8d9bd3e40a16646e4a85521",
".git/objects/5a/85d0198feb78a219bd4181cb131bc28befb83c": "efb9f139507ad4385136399982451b14",
".git/objects/33/f9ea3481a1dfc49e675cbc86912f5f6c1e8aca": "13e9f6903248d2ffaee3a3e1a47c49dc",
".git/objects/33/05da0869dacaec62407126a46467cea6e64cd2": "d7ac81504d1898df0379df988df71c28",
".git/objects/33/06b61929b8520b0ddf759fd0018c8d3a3e55aa": "be864277aca02bafb076161e841db236",
".git/objects/9c/37b012f3e1f89f62f4c1df61e7376cbfe1e6f6": "2730bb2640ae534b8774f041f28eda87",
".git/objects/02/586a802df480b0d8c309b16102a407aceae3d8": "6208c333f5faba7be1e05baa49ea7912",
".git/objects/b2/da4c53aa639039560735616809e05a43a6d5a1": "3109da34d50367157766ee9160332c7e",
".git/objects/d0/cdb06c7ec5467b2d01b50b3c8b473c4a805469": "719c8ef4fc783717cd7d73e73dac61ce",
".git/objects/b3/9ee3c7dd732ea6c8ce4123b5b74c87f07c7505": "11ae762ce8ebaf4c930e042fae76c423",
".git/objects/b3/365436d3c9c030f209c65e6f7834bfcd068559": "ba970b4d9c7ac7c50d2d3bce30e12868",
".git/objects/df/104b008fba91891fac8a854121a4c8bfb94c2a": "cb533ce5518aded350a2a7ec61775332",
".git/objects/da/48e56c51f4a66fb27d0b41f548ce33d023c3f4": "66e26553e45b49124f6d07b7080c1bd4",
".git/objects/b4/b5e336f216e37759d7f03b6d935602b596d369": "ac4ca39297fa9042208f50f30965ce9e",
".git/objects/a5/9de0a32573ceacd4bb0c1514a51c2879a2f228": "4877e3c342e08ab525a7c77b9cc9b6d4",
".git/objects/a5/edac336c41c9abf9a5e3f9e464a4d0a1279e7e": "8b2adf7d4c876fb77a834ca1831ae13a",
".git/objects/d1/977238724b76a0d4001d6392a1800c93b809c2": "83236d18bb50672361baf4513d82bc01",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/692fb6cee8cf7d6ad5d6326b2dcd9aa89ca014": "557c8e66fe63cb5a1ced040ba0211f67",
".git/objects/ae/678713e03c548f6cdf55f7b36e3d0505d89509": "463a71e750ebc29430f0e37ce61dd2d2",
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
".git/objects/ca/e91998dc86cda888fab977b0351ec4153a66dc": "533ee26cc466838574984efea16ae0b9",
".git/objects/c8/fa23a7181556a8ee02c09d1a7c6dd071f348f4": "c325e5367901e192e971c17413da3667",
".git/objects/fb/27ce0de5330f2a162f7de987de6dad611f33ff": "89944dedeba9b757a6e706870236f58f",
".git/objects/ec/44d1eb3373df8f226602305e4ed2841018d0cf": "f249ba0e939fd18e509ef81f969dd6ee",
".git/objects/18/de4d710796d9aac337019ca191cff1b4298be9": "81bbb4b2d44c75f865490f2d88d81318",
".git/objects/4b/5f303c4c0eed637be27d4075f6d3e062a40fc6": "b97f1208d78dd93fcc5c9fb3534f0ba7",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4b/acc667664f2314abe93c05f35d3fb1334170b9": "0791f7fcb05fbd5ebf5b6bb0690a8b2f",
".git/objects/11/0462826b3e0966e56ee43db2421bf560ca6206": "7f155eaa4185435ea36ddb349ef5d38a",
".git/objects/7d/310f305b93cd2d9dc6bdb9dda6592619f9bd81": "a455c745d18bf1f68c35fa9f04944305",
".git/objects/7d/a0549cb47a41dc8ce6e82ebf1283b693a20ef5": "00aa0f36b0a9fe8980f3ff93d4315fa3",
".git/objects/7c/db0e19108c85a92ef6c836b69db9d90fd3e5e3": "9976f066ca76a5122de2c539dc4dc7fa",
".git/objects/7c/cf77df745253c6cf2eb08ead3cd2182cc8f709": "229d4adcb686d45d6471bc474f63e0de",
".git/objects/16/50849aa0d3507769a1ff46423d5d34a367ee3e": "ecbdc7f1ecfa36781cf9864bffd0a166",
".git/objects/16/84ab6953cfdeb5c03dce90c95a8d8a9dc9764e": "2670786537a6584d7212d5d23118e952",
".git/objects/42/5a6c1bfc28f68de8f8e43fc6c67ecbf5ecbe85": "4f1e55ca2bff8aed974ab325fa3a8a75",
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
".git/objects/4c/98caca823704a9d08e56c05f037323083b3638": "2b6d46f30636363a3a38f777e7190815",
".git/objects/26/a36ae611b0d5e0dcf68bf1b3eb2bcc154c96dd": "60d95ca56b14eecd68ae2b63607c628d",
".git/objects/26/b8ec318e510439169b9dbc058694277031b8ca": "2fb97ffd5ba79ed8447a1af8ecc17cf2",
".git/objects/4d/ebdf8f8e64b07a9c41cdc999514ff25111eef4": "ad60f66d806056a33ae2725fbb05abb1",
".git/objects/4d/25fe01a353f3db3b22af3e16207d8a17e7c9ca": "d0a9fcbd40f62657a1c88c9d9bcca5b9",
".git/objects/81/bde912ca3032d6f56738a4084f99f6011e6c75": "40b05c45abfd4926dcbf05a18f7fa50c",
".git/objects/81/73f91482d5ceee949cb02455b2c3fc1b832374": "ea5aa940c9a80c247fc3439e7dde7faa",
".git/objects/81/35fc953d63aa095401ecffa2a48dbe3fad3be2": "15d1777521955996264f6806f28c5ede",
".git/objects/88/9e2a1e4b632006ead37366869aa939f33111c3": "6e6fd2fecc3d223807592105876ffe50",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/ebf2715c016a6fd17ee8814f9051041f1ef1a0": "0b8e145609bb8fd7704090bd23f170bd",
".git/objects/9f/00123901b22bece9ea71fb1c64432f40f7593f": "fcfac033e7305c6fe132a0d79d82d0ff",
".git/objects/6b/a4a60b43f5b0046a5bd8fa55cb52caf13d654b": "4882f9f2a7e0f26c3cf0a9524b27379b",
".git/objects/07/6a2df6935d59e22df0015effc08ea7e9ef23c9": "06281e0e7ae945a357dbcddb8a41a30b",
".git/objects/07/b93ae59357be8af16dde2c0d1438099fd17354": "d1d29ec14d3b1fc0167b5b6835d1cc41",
".git/objects/07/4674816c8c1c58071d95c1ff82c224f0513a27": "4426494d5810325ad4d377d2f5ebac45",
".git/objects/38/5b6cf4b7b0f178c2e2962a2ed530fbd4a92569": "0aba1644e01c757aee865343359e6f31",
".git/objects/38/77f62a5b04cf5c0f3a8940e7957b2e132eedb6": "40ba013215ee6700c9fd8946bbe6e384",
".git/objects/9a/b0f83723d429ea14334630411af37d48768383": "c33255f0379bed0b7879362d3ae40f7a",
".git/objects/9a/19f463d6eae52810b51e37d45d5c2098d4301d": "76ddbb5e8a6c19dd74c386e88f97ff2a",
".git/objects/91/075086c3af7cdddb53f86afa4ba8ca473d23b3": "ac8e6e8868fe61cb8bbd88b76c120a21",
".git/objects/3a/06907d86adcdaa09cf2aada8de43e1dd89a9b5": "0f91a30c37b881f77f170496c3f4b845",
".git/objects/3a/83540485ab176af229467079ad98a64209b48c": "97a4e4854317f569dd065142a5cd3959",
".git/objects/98/5efcbfb07a5185f3902481e159bc3c16896d3f": "827d66dc576eb3393d93f28a0e97176a",
".git/objects/5e/fd0f91edf9a538601be3b1249c4754e66ac517": "cf70887f6b8b45fc685dc8c6c81e1eef",
".git/objects/5b/d0bcfc78611d82d9ed976cdda99f74f89ca726": "2884542e6e36031cf6e810b1136623b4",
".git/objects/37/33a1e8d2d2daf924f6d0cea28470c2945abf4a": "157204350d156027f563731d82c15232",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/08/f17dcdf7ee109903a1255b8a8463c5f1ba7768": "97d24d1fb401267459b39f92a64bf548",
".git/objects/01/bfcb93e7d44b4a5d1115e8507e4a4f28ff4525": "82ca5196f66af6497ca3f607d2546410",
".git/objects/39/825b78cc1597958e0d014a7427394f2d15dda0": "b6694e92e238be8bfca77b8d7d0091a5",
".git/objects/39/ec5820f391762b60e6238a29f4c72524c7fd6c": "8b8912b2cc9112a7e98f7c1b9858a471",
".git/objects/99/7587a7616765cc09138d2d9ef1174eed5e95a3": "8b3f080432be288f102b893fcb56909e",
".git/objects/52/a6e699b248f02c997f11d4a36bd78c240bfdd4": "da34db26110ad9784cb260085f5e1708",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/63/726274d57e64d519e0f6821d9e28b9d1c58f71": "384b9ffef837d0fa824bcadda7957378",
".git/objects/90/861dd611fc93e526506b7de58e0a858d1af285": "fd8bf9277c4f5a3fa9201fa73cafb5f1",
".git/objects/bf/83d2e45f94fe91b247d46916726685e6c1dd1f": "9e124c7e4b7ace1b8c7a09e3fe5fb27e",
".git/objects/ba/1b619c5b01c182b675756f4d175e979fef41b2": "89fbe8159ce97c5824e5aa4d9685e1b0",
".git/objects/ba/4f76f47f128374225323b1606c718b3a948627": "b2b00dc996c8531c5d65d0eea450bbfa",
".git/objects/ba/a39bbfd5c55253a5d0484737aa9a46177435c7": "8a1f014a98e9887f070c537dc00c68a6",
".git/objects/a7/19e463e7acad85b8e61fff02e1636e9e49a01f": "db58f7340781e23b699699c7242971f8",
".git/objects/a7/5901989e6f9e466e83ca4227a59429ac1cdaaf": "e04de6425cbe806ad3bbcfd64fb2370e",
".git/objects/b8/e3767adf175de79499876759e70ac126664130": "81699498c7c16d36a9f7b92ccf4a034e",
".git/objects/b1/eeeb8504a11afbdd870a9ed3fed02151b38222": "30c457434ac0fffb166f5e3c3acb6a95",
".git/objects/b1/63c5b0d666c077ad922e5b215e0890b24e69a9": "ae9ff3f10e9dbb08954b64d5ea47d6eb",
".git/objects/dd/2440db9ef8905ea9c37a2446c32e328615f63d": "0a89194e021fe19bcce50369cdf2d52c",
".git/objects/d5/5ca79e26b9c128d714e0e6d26747b290f084ac": "726db4e45a59ae0920177e244a1add39",
".git/objects/d5/808d9b01993fb685214893a4b68653b092893c": "b6ce07c733ceeb991b291c28e24ccdff",
".git/objects/aa/98304dd9c8f01617c97810fa931826d569545f": "498f8710948beacf749246fa4e9f1575",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/27d2816a9b8d0da73a364433165af102f254b6": "d500657dd45db662d063358a62852603",
".git/objects/a8/5537bd99b887a4b7b740461bc64bf5749f696f": "c43962fdbcd51f8047423a14c52f6928",
".git/objects/a6/413906cc68f863bdc3791f1d97620180ed3606": "1ecf7564a30401c1790776401267f816",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/0dcaa0f39c7ef5aa1e8b916c4219bf79403452": "fd95d761bb6b25865efc8083977e4857",
".git/objects/ea/8298c8436559dec522e12cf67388957491b206": "7038ecb625ea2e599141e2d00db6ac0c",
".git/objects/cd/9b85817c041ecdb76c7cec087e3299816ec047": "b2d28d8fb728b560d0bf8c5b6a6a935f",
".git/objects/f9/0540cd570aa23a3a92e974110392de0fa40201": "53574ee1d7e3d2f764de4e1f1f5ac787",
".git/objects/fa/441bafa6066fe489372c1f948d71204c6e67a4": "8bf4c21031cdf4fd93361ab7049147da",
".git/objects/fa/8a03f12efb2ed9f835de73693dbde5cd10dfea": "d395f1504120bdde748fddf0f607ccbf",
".git/objects/ff/c83a08bbfa179a1f4cd0370979186c9ad7e68f": "ce066209fdf8913f69075202e5a8b8f2",
".git/objects/c2/2de41d6f7624cfa2123a27da57c4afa8c6091f": "15de6cbb44b505a585b2eca7616c0c13",
".git/objects/c2/9ee4c5be97a3888d47d93ce98220fec8974ad0": "bc14c954c3ceacac8667590809b6ec64",
".git/objects/e7/f6d846d8302b3e38bf628e9a720fab4dbcefd4": "70adf6ccdaa3bc74c833611e78535186",
".git/objects/f8/b8f8f9463865cfc8d378944620fbf2912dfc52": "ef6da355b754f1d2ae8222b1d553a3ae",
".git/objects/f8/d9c69c35fa79dc167af75b9fbb1d0021152f15": "5c8a6d30f8a927ee607f0f6ab89a36d3",
".git/objects/e0/c85fc26d29feb6a0d5705b931b6050a2c0d570": "b402c32350594c45ca33f6b2e80821b4",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/9fea33d38a9b1362c0580115bdd92e21c3d5f2": "1f2f3228d694926849f2faf3fdeb466f",
".git/objects/2c/6efbfb7c19d1191c107c195d54d03b87c75fae": "a7b776f47b0ba2643b42bf7d4d28eda2",
".git/objects/79/01c09cd9b99cb1000d6cc5b2891b695615f637": "ebe4b9fd59c2ea828910ca9a9ed96595",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/70/fe4fa97cbb7c8eea7347267ba61082f7755210": "c7e47cd531b95bac0c9859b5a165c9f6",
".git/objects/70/dbe017fe1ffe05a528ff7a27485cbb679c510d": "99d642caaa2c32001a289de212461df2",
".git/objects/4a/6e8a8c8c9896a127d4bd45b7228e4c43d1a6f4": "7b884a5dae1ac499a5afdbfc76f5d832",
".git/objects/8d/ca4fb0e8a4d96c0ea88e1ef4aea232887bfa0c": "93de941c460b9e901a9b38df9c783ba5",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8c/e3cc65deab38666038c19bd481d70c5872a6e4": "4800b4172706fea494a306acfc51452b",
".git/objects/76/df6761694c6f72932ab676e3dd9c81647084bf": "32616babd67ff6af105c2b141bafd570",
".git/objects/76/82f4963155deeee0d11ca23dde4b8b4b82f8e4": "30bd23a439f9e0f9e494d046ca89b95f",
".git/objects/1c/27317aa50dfbde013ad5b8e1619bfdaf1b9046": "989292d75f65f1936d0b3fabb20b85e8",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/8b/ee749f0fb856ade05f9c5138a4a10355b373bd": "aeafb6d3ab62ce6434aa1846fbc4f8c2",
".git/objects/8b/58922f960b30fb8a8420ba2cad0753013bfc12": "b133e2fadf1c63908d273fb27bc22838",
".git/objects/7f/a0194ac39be7117fdba5c46d7f915827d5cab8": "b2a82bad70ae024ee634df146f03e1a1",
".git/objects/25/b98eb485eb9a58d4e2c3e0dbaa0113c41b1d2e": "f222131b557b0f03aa5b7b556d60e3dc",
".git/objects/25/ceabe985a4cde5be1e41e3cd73a2cb74874f9f": "227141568cadef6ba80fbea54761ef1a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "88d905f9339d5e1fc4b876d67bd9d0f2",
".git/logs/refs/heads/main": "3a35ffaac1e1f107ae382922bb905c0a",
".git/logs/refs/remotes/origin/main": "6d1c99dbbb4e6ce6f2b3ac0837b43739",
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
".git/refs/heads/main": "6670b8d091cf071a99cd79adfe5b0c8c",
".git/refs/remotes/origin/main": "6670b8d091cf071a99cd79adfe5b0c8c",
".git/index": "9c46e949342faf4711abd97bb94c07e5",
".git/COMMIT_EDITMSG": "e30260020baeb0398ff07b37dd33ed16",
".git/FETCH_HEAD": "f902f32be8a8c490a19624f8974c3181",
"assets/AssetManifest.json": "db7e41ca4c3599ef266ceabcf7ec8287",
"assets/NOTICES": "a3dfb30151d9e2236a29ab0bd93f93c2",
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
