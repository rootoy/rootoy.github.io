if(!self.define){let e,i={};const c=(c,a)=>(c=new URL(c+".js",a).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let n={};const o=e=>c(e,r),s={module:{uri:r},exports:n,require:o};i[r]=Promise.all(a.map((e=>s[e]||o(e)))).then((e=>(d(...e),n)))}}define(["./workbox-b77dd8d1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/06/28/hello-world/index.html",revision:"e057a2cd89143080fcc3b7bc6eba6ba3"},{url:"404.html",revision:"7c87ccc9245d3297129f0f32ff66a345"},{url:"about/index.html",revision:"3fb13bd24d3ab6bd82f5db640bcf4485"},{url:"archives/2022/06/index.html",revision:"0b8230ff0c1f7cb497bdafc4a80448b7"},{url:"archives/2022/index.html",revision:"7570e16be1c590a06c427490d0881db6"},{url:"archives/index.html",revision:"72aafe26d52973b3e63ba69dbbe15685"},{url:"artitalk/index.html",revision:"cde3e026da86b1a989e5e3d36532eac1"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"categories/index.html",revision:"1bbcc64c0b7a6418d964fde5df4440ba"},{url:"css/index.css",revision:"2732b0127fc886922be1f21cc9216fb6"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"Gallery/index.html",revision:"4f1487cf8d4b1f0e55edbf474a893d09"},{url:"Gallery/marvel/index.html",revision:"0b67c042dea35fc5397a44753c843d3a"},{url:"Gallery/ohmygirl/index.html",revision:"05d25880faf06b6232eaf7ad60691eab"},{url:"Gallery/wallpaper/index.html",revision:"3d1bc14fd4b7c5d66c7c948e5fd896b2"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/alipay.jpg",revision:"01b5a4be6d77a7208f23f7915907c8ea"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/logo.png",revision:"3cd8f0fcac44aa80a710eee081a74727"},{url:"img/pwaicons/144.png",revision:"474c725dc2552afd62370b5a46f66989"},{url:"img/pwaicons/192.png",revision:"e17c64ec2c5f3bfc83d44308f312ce51"},{url:"img/pwaicons/25.png",revision:"5987eaa7811ad8575946f672731d257c"},{url:"img/pwaicons/36.png",revision:"af5d75ccf98bae3e40eb27a7030ed6d0"},{url:"img/pwaicons/384.png",revision:"e53396424df98cf77de6b90db4de6335"},{url:"img/pwaicons/48.png",revision:"5ffb22fd9d38e4797fdfb4fbcc6e1c3a"},{url:"img/pwaicons/512.png",revision:"765bcd4918df081422888ae1c3a7401d"},{url:"img/pwaicons/72.png",revision:"92ca98225640e1a8878de9d2ac7d555e"},{url:"img/pwaicons/96.png",revision:"d4fcb72740325a6368257932b55e3a92"},{url:"img/pwaicons/android-chrome-144x144.png",revision:"474c725dc2552afd62370b5a46f66989"},{url:"img/pwaicons/android-chrome-192x192.png",revision:"e17c64ec2c5f3bfc83d44308f312ce51"},{url:"img/pwaicons/android-chrome-256x256.png",revision:"5987eaa7811ad8575946f672731d257c"},{url:"img/pwaicons/android-chrome-36x36.png",revision:"af5d75ccf98bae3e40eb27a7030ed6d0"},{url:"img/pwaicons/android-chrome-384x384.png",revision:"e53396424df98cf77de6b90db4de6335"},{url:"img/pwaicons/android-chrome-48x48.png",revision:"5ffb22fd9d38e4797fdfb4fbcc6e1c3a"},{url:"img/pwaicons/android-chrome-512x512.png",revision:"765bcd4918df081422888ae1c3a7401d"},{url:"img/pwaicons/android-chrome-72x72.png",revision:"92ca98225640e1a8878de9d2ac7d555e"},{url:"img/pwaicons/android-chrome-96x96.png",revision:"d4fcb72740325a6368257932b55e3a92"},{url:"img/pwaicons/apple-touch-icon.png",revision:"703893bfb9307d589b6aaa4e9a80b331"},{url:"img/pwaicons/favicon-16x16.png",revision:"2f0050dc1b908ea74f3258062e2ba791"},{url:"img/pwaicons/favicon-32x32.png",revision:"f398dc6608dd89f0d590bdf549bf1c14"},{url:"img/pwaicons/mstile-150x150.png",revision:"8c2f99e3ec5cdaeb838281740a9636aa"},{url:"img/pwaicons/README.html",revision:"f924371da24fc05e3b37e809b9a8c590"},{url:"img/pwaicons/safari-pinned-tab.svg",revision:"a970855ca2dcefac85346fdde4b43469"},{url:"img/we.jpg",revision:"1516ab41399ce6f122f3903a4b961a63"},{url:"img/wechat.jpg",revision:"da3fdecd7914d0ed40012589e2209ab1"},{url:"index.html",revision:"e6237a65947cddd69104a8d977861bae"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"44abd66ceb4c950041432f75d1f61443"},{url:"movies/index.html",revision:"8007ef19e8cfac213037ef576e6e33c7"},{url:"music/index.html",revision:"530349ee7599becfd35186ebaecb136f"},{url:"photo/home.jpg",revision:"1a1f188bc4fa62f8dc19ba022ca2834c"},{url:"photo/logo.png",revision:"4fc1c4fea4fde5392fe5487f14608811"},{url:"photo/p.jpg",revision:"eaeeeaeaa809e4dbb178cd340e3a270b"},{url:"photo/s.jpg",revision:"7ffc017a9eeb2b894341ccc333b1008c"},{url:"photo/t.jpg",revision:"2084523ed6c05c976556153e2aaad803"},{url:"photo/u.jpg",revision:"d0e92a72470e090e3280c98cff8066a5"},{url:"tags/index.html",revision:"8f01fdf242a67b25dcbbc0cccb0ea85e"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
