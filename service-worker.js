if(!self.define){let e,c={};const i=(i,a)=>(i=new URL(i+".js",a).href,c[i]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=c,document.head.appendChild(e)}else e=i,importScripts(i),c()})).then((()=>{let e=c[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,r)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(c[f])return;let o={};const s=e=>i(e,f),d={module:{uri:f},exports:o,require:s};c[f]=Promise.all(a.map((e=>d[e]||s(e)))).then((e=>(r(...e),o)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"hsiao"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:".git/COMMIT_EDITMSG",revision:"a8297d555dd34879e8e48e1cf12acefa"},{url:".git/HEAD",revision:"cf7dd3ce51958c5f13fece957cc417fb"},{url:".git/config",revision:"eb4e0c08dfc6240f487e7c5256d16771"},{url:".git/description",revision:"a0a7c3fff21f2aea3cfa1d0316dd816c"},{url:".git/hooks/applypatch-msg.sample",revision:"ce562e08d8098926a3862fc6e7905199"},{url:".git/hooks/commit-msg.sample",revision:"579a3c1e12a1e74a98169175fb913012"},{url:".git/hooks/fsmonitor-watchman.sample",revision:"ea587b0fae70333bce92257152996e70"},{url:".git/hooks/post-update.sample",revision:"2b7ea5cee3c49ff53d41e00785eb974c"},{url:".git/hooks/pre-applypatch.sample",revision:"054f9ffb8bfe04a599751cc757226dda"},{url:".git/hooks/pre-commit.sample",revision:"305eadbbcd6f6d2567e033ad12aabbc4"},{url:".git/hooks/pre-merge-commit.sample",revision:"39cb268e2a85d436b9eb6f47614c3cbc"},{url:".git/hooks/pre-push.sample",revision:"2c642152299a94e05ea26eae11993b13"},{url:".git/hooks/pre-rebase.sample",revision:"56e45f2bcbc8226d2b4200f7c46371bf"},{url:".git/hooks/pre-receive.sample",revision:"2ad18ec82c20af7b5926ed9cea6aeedd"},{url:".git/hooks/prepare-commit-msg.sample",revision:"2b5c047bdb474555e1787db32b2d2fc5"},{url:".git/hooks/push-to-checkout.sample",revision:"c7ab00c7784efeadad3ae9b228d4b4db"},{url:".git/hooks/update.sample",revision:"647ae13c682f7827c22f5fc08a03674e"},{url:".git/index",revision:"3fdec422f1bafc69f3cfeec5d40290f1"},{url:".git/info/exclude",revision:"036208b4a1ab4a235d75c181e685e5a3"},{url:".git/logs/HEAD",revision:"2ed765229248abc8e3ba7221374372a6"},{url:".git/logs/refs/heads/main",revision:"98807535cb7bcefd03971e05574a6df9"},{url:".git/logs/refs/remotes/origin/main",revision:"48041a44b9a8e799d119a657076e2faf"},{url:".git/logs/refs/remotes/origin/master",revision:"fb076ff3cc5fb8ba432eb5c9d5773ed1"},{url:".git/objects/03/c0c5d5ec302ed7b0ee2c401df9427fb9d3c117",revision:"54f2e425d9966378f4b9e3aabdff123a"},{url:".git/objects/06/088b011eccebb820b6e8de0cd244aa443208ba",revision:"4f18158bc88befa7e9f756b6581d5ac3"},{url:".git/objects/14/27cf62752646ad7217df0a61aa01fdef7475d1",revision:"bfa523644de53ee4eb6a62c76ea64a23"},{url:".git/objects/3b/37a43ae2fdef53050291d95da2e49f78cf398e",revision:"4ef02e8b2db48716e1fa47bd022d6b96"},{url:".git/objects/3b/db7ef37b5b3b5da3a2e8323c8edb99ac17516e",revision:"e36051adec500cd59a0b2de84709f151"},{url:".git/objects/3f/b8af6623f4910dbbc0f452a274417106769f17",revision:"62483fb781ea7f687588a4cf3d739df5"},{url:".git/objects/40/4e192a95ccccbede087203c42b1f25f6bc6e67",revision:"010c4d10994f19373c44417d242ea81f"},{url:".git/objects/42/af00963d81b8e39a30435c60ac482d1f8756e0",revision:"26bb471dc60166721fa2dab537a7e152"},{url:".git/objects/46/ca04dee251a4fa85a2891a145fbe20cc619d96",revision:"275ee1051b6c252880820012f7cfc9bc"},{url:".git/objects/5f/2098ed27e2f2878de62894b6c3bc31d07c585f",revision:"6863c193550716c13abb3a06d5833d0a"},{url:".git/objects/78/08237a18d4009501f950044f8388d13c5e1044",revision:"313a475d2f80b662788d044371006b97"},{url:".git/objects/79/1e9c8c2c69ddb7be30cef2517dd6050b079cf0",revision:"715e4e69d8ba148679331d64fcd23da7"},{url:".git/objects/79/1f62f2325462738ec7918f50da04ccb73b4cc0",revision:"5afb18bd31e7c7a0a3c3393631660965"},{url:".git/objects/ab/4c2d5f4dc8ddfba0afdb2d41be7559a3528041",revision:"4c30f419d950bd3049a6526c1e8d2145"},{url:".git/objects/b0/2aa64d97167ad649e496908b35f14c603d9249",revision:"edd4e72d4c6369d8a7a23f6e644b060b"},{url:".git/objects/c3/48c414cdcaa4cfbf7bc2724168806e90f62404",revision:"af3266a39f831f1e1b9a1ff57963e0ba"},{url:".git/objects/c5/00769e3df9d6a6f1977ace8be4e63a8095e36a",revision:"a27caf6b95176465b22ac7aa5aac77c4"},{url:".git/objects/cf/10a5602e653bb126332934e2b7f34081c19a01",revision:"6d43a3dd93262ac24a89f77e927e2fb3"},{url:".git/objects/df/36fcfb72584e00488330b560ebcf34a41c64c2",revision:"8d64c371a19d1531f83f2c0808382a92"},{url:".git/objects/e4/4c0d5b0ff35e7facaed6353e0be801d4f3b10d",revision:"4f19f0d23fd3d2cc594544b163a71049"},{url:".git/objects/eb/0536286f3081c6c0646817037faf5446e3547d",revision:"1a3d16cf0de5f5a1d8a91ca26fc0adcd"},{url:".git/objects/f2/4d454a2ecb8851bb893192b64ee09386d30e24",revision:"9f991e6575200d806aeef7885598d926"},{url:".git/refs/heads/main",revision:"c84641c674555a48f62982674235cbe5"},{url:".git/refs/remotes/origin/main",revision:"c84641c674555a48f62982674235cbe5"},{url:".git/refs/remotes/origin/master",revision:"c84641c674555a48f62982674235cbe5"},{url:"css/app.155d118e.css",revision:null},{url:"img/email.267b5d9d.gif",revision:null},{url:"img/fb-image.png",revision:"c85844eeccf3e58a8b32a92544d561a0"},{url:"img/logo.97648954.jpg",revision:null},{url:"img/projects/project1/cover.png",revision:"e486c0e6463794118a5b8ac293ddb7bd"},{url:"img/projects/project1/pic01.png",revision:"5353d758a857dd095c44c291bb4be303"},{url:"img/projects/project1/pic01_small.png",revision:"4faaf948f6f5ec01382cdec183e30806"},{url:"img/projects/project1/pic02.png",revision:"63ba0fdfb0e2d32dc46601304dff5409"},{url:"img/projects/project1/pic02_small.png",revision:"324ea56f44e0ea068fa756a1ca307837"},{url:"img/projects/project1/pic03.png",revision:"e0b58b4190742968e0060353c469b7d7"},{url:"img/projects/project1/pic03_small.png",revision:"7f72a6a09f32d56aac220ecc366a28c3"},{url:"img/projects/project1/pic04.png",revision:"3406993b518f3a29f75aac72e037ee31"},{url:"img/projects/project1/pic04_small.png",revision:"5de9d863d678abeda8d1a3097c5795b3"},{url:"img/projects/project2/cover.png",revision:"9ac828d2a78667dbce07f86017feedff"},{url:"img/projects/project2/pic01.png",revision:"19e38cbae5738df27c510f1e36f08a6d"},{url:"img/projects/project2/pic01_small.png",revision:"7fbc689aa4932742ecd4b508647a74cf"},{url:"img/projects/project2/pic02.png",revision:"206bf80e1474225ade7099d63828a686"},{url:"img/projects/project2/pic02_small.png",revision:"e665441bcf868a6c718121cd961d8f36"},{url:"index.html",revision:"15933e92a831cdeebbfb60d3af17c48d"},{url:"js/app.3cadb149.js",revision:null},{url:"js/chunk-vendors.27655c58.js",revision:null},{url:"manifest.json",revision:"98c8caeb4f37d04dd4e548479bed443a"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
