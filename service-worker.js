if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let n={};const s=e=>a(e,d),o={module:{uri:d},exports:n,require:s};i[d]=Promise.all(c.map((e=>o[e]||s(e)))).then((e=>(r(...e),n)))}}define(["./workbox-b77dd8d1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/07/13/hello-world/index.html",revision:"138f8d3ee3ff9a33bb6f1de883f6bb0a"},{url:"404.html",revision:"44d975103c8b3d498146163d3c223437"},{url:"about/index.html",revision:"aac2251b5525e4004770fbf90bbfbfb0"},{url:"archives/2022/07/index.html",revision:"44a04dbaff291cd6b57f2cad01eac42d"},{url:"archives/2022/index.html",revision:"6e15d23dbec162dc8b84f9e267e59d5a"},{url:"archives/index.html",revision:"02842a7af46d6cc85aa700af25226a8b"},{url:"artitalk/index.html",revision:"8478d5d394073632bea6d69934d04286"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"categories/index.html",revision:"3f7d6a237860306ebaaa44ce34b257b4"},{url:"categories/开始测试/index.html",revision:"4dbd462f246abf7a23af6ab859bac46b"},{url:"css/index.css",revision:"2732b0127fc886922be1f21cc9216fb6"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"Gallery/index.html",revision:"7cba9a7a03fc3d130a94bdc38ee71d94"},{url:"Gallery/marvel/index.html",revision:"5f23f326d8f1560c037f02b44a0a93d1"},{url:"Gallery/ohmygirl/index.html",revision:"f66d9f16152a99d0c72149df0b03e9c0"},{url:"Gallery/wallpaper/index.html",revision:"ac52d19490741547847d291664414ce4"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/alipay.jpg",revision:"01b5a4be6d77a7208f23f7915907c8ea"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/logo.png",revision:"3cd8f0fcac44aa80a710eee081a74727"},{url:"img/pwaicons/144.png",revision:"474c725dc2552afd62370b5a46f66989"},{url:"img/pwaicons/192.png",revision:"e17c64ec2c5f3bfc83d44308f312ce51"},{url:"img/pwaicons/25.png",revision:"5987eaa7811ad8575946f672731d257c"},{url:"img/pwaicons/36.png",revision:"af5d75ccf98bae3e40eb27a7030ed6d0"},{url:"img/pwaicons/384.png",revision:"e53396424df98cf77de6b90db4de6335"},{url:"img/pwaicons/48.png",revision:"5ffb22fd9d38e4797fdfb4fbcc6e1c3a"},{url:"img/pwaicons/512.png",revision:"765bcd4918df081422888ae1c3a7401d"},{url:"img/pwaicons/72.png",revision:"92ca98225640e1a8878de9d2ac7d555e"},{url:"img/pwaicons/96.png",revision:"d4fcb72740325a6368257932b55e3a92"},{url:"img/pwaicons/android-chrome-144x144.png",revision:"474c725dc2552afd62370b5a46f66989"},{url:"img/pwaicons/android-chrome-192x192.png",revision:"e17c64ec2c5f3bfc83d44308f312ce51"},{url:"img/pwaicons/android-chrome-256x256.png",revision:"5987eaa7811ad8575946f672731d257c"},{url:"img/pwaicons/android-chrome-36x36.png",revision:"af5d75ccf98bae3e40eb27a7030ed6d0"},{url:"img/pwaicons/android-chrome-384x384.png",revision:"e53396424df98cf77de6b90db4de6335"},{url:"img/pwaicons/android-chrome-48x48.png",revision:"5ffb22fd9d38e4797fdfb4fbcc6e1c3a"},{url:"img/pwaicons/android-chrome-512x512.png",revision:"765bcd4918df081422888ae1c3a7401d"},{url:"img/pwaicons/android-chrome-72x72.png",revision:"92ca98225640e1a8878de9d2ac7d555e"},{url:"img/pwaicons/android-chrome-96x96.png",revision:"d4fcb72740325a6368257932b55e3a92"},{url:"img/pwaicons/apple-touch-icon.png",revision:"703893bfb9307d589b6aaa4e9a80b331"},{url:"img/pwaicons/favicon-16x16.png",revision:"2f0050dc1b908ea74f3258062e2ba791"},{url:"img/pwaicons/favicon-32x32.png",revision:"f398dc6608dd89f0d590bdf549bf1c14"},{url:"img/pwaicons/mstile-150x150.png",revision:"8c2f99e3ec5cdaeb838281740a9636aa"},{url:"img/pwaicons/README.html",revision:"05beb5d899ee2e81b363047f317c6ff3"},{url:"img/pwaicons/safari-pinned-tab.svg",revision:"a970855ca2dcefac85346fdde4b43469"},{url:"img/we.jpg",revision:"1516ab41399ce6f122f3903a4b961a63"},{url:"img/wechat.jpg",revision:"da3fdecd7914d0ed40012589e2209ab1"},{url:"index.html",revision:"2ec125907afe8df10f7818bbb657876f"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"c18a499c0568740658747b7fa50b8c49"},{url:"movies/DPlayer.min.js",revision:"813eadafbdbc48b00516250b74372767"},{url:"movies/index.html",revision:"3db287d62cc16e3801d6001b6321b192"},{url:"music/index.html",revision:"e4ea1398c71ff2aafcb24395b4b8354b"},{url:"photo/home.jpg",revision:"1a1f188bc4fa62f8dc19ba022ca2834c"},{url:"photo/logo.png",revision:"4fc1c4fea4fde5392fe5487f14608811"},{url:"photo/p.jpg",revision:"eaeeeaeaa809e4dbb178cd340e3a270b"},{url:"photo/s.jpg",revision:"7ffc017a9eeb2b894341ccc333b1008c"},{url:"photo/t.jpg",revision:"2084523ed6c05c976556153e2aaad803"},{url:"photo/u.jpg",revision:"d0e92a72470e090e3280c98cff8066a5"},{url:"tags/Hi/index.html",revision:"6eb15882d589451230ed4957cf899274"},{url:"tags/index.html",revision:"b4f0bcd556346040e669ee6516fe03cc"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
