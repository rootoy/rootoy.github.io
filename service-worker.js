if(!self.define){let e,s={};const r=(r,a)=>(r=new URL(r+".js",a).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(a,i)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let d={};const c=e=>r(e,f),o={module:{uri:f},exports:d,require:c};s[f]=Promise.all(a.map((e=>o[e]||c(e)))).then((e=>(i(...e),d)))}}define(["./workbox-7d6a3f4d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/07/13/hello-world/index.html",revision:"72ad0d22dff0aac1c9706d011a54f7bd"},{url:"2022/08/10/fanghua/index.html",revision:"ed3033b899f0f0445b1357d48330b3c5"},{url:"404.html",revision:"d8a7b351c8fb1dd63e7dd215cee64b93"},{url:"404/index.html",revision:"ffab981a8592098714552ff16d7793e4"},{url:"about/index.html",revision:"84d200fff166dd8fa8dd2c5ed695fcd2"},{url:"archives/2022/07/index.html",revision:"611730d920c810b09f284f8bc940ab05"},{url:"archives/2022/08/index.html",revision:"f6636e4532ca5ed5dac7979235df2712"},{url:"archives/2022/index.html",revision:"e82bad38a237fede29185e46aae64416"},{url:"archives/index.html",revision:"e7baa970aad0c444b88bb199ef50c112"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/DPlayer.min.js",revision:"472552604f19815d0a634bd3d953171e"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"categories/index.html",revision:"bbc07fa536c8505b9900d01e844c9ce4"},{url:"categories/开始测试/index.html",revision:"c8a12bc39e420d74d536d1dd926ba308"},{url:"categories/文学/index.html",revision:"44448868a091de6d4a110346d7535180"},{url:"css/global/animation.css",revision:"2cf7c60d33a4819b31f14c6b36b0329a"},{url:"css/global/comment.css",revision:"1249c2fd3a3da4febf5076828aee05b0"},{url:"css/global/dark.css",revision:"b3c616f09d7b4514cda74e38019b6907"},{url:"css/global/footer.css",revision:"163929ef65682cae59805c2257bc6916"},{url:"css/global/header.css",revision:"01cec9dc5b240b886ae4609d7517aadd"},{url:"css/global/index.css",revision:"83ff6765c62329fe7f105ee055ac34d6"},{url:"css/global/nav.css",revision:"3bdefa991bade417e7117ad397ca2e39"},{url:"css/global/search.css",revision:"a7623307571e4d3106889d674f3cd604"},{url:"css/index.css",revision:"496f4b91c607141ebb5cc832ece3799d"},{url:"css/main.css",revision:"786553647b164b9c9759df1239d13e96"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/favicon.png",revision:"ec41633d9157dea1742ad4744aacd892"},{url:"img/load.gif",revision:"a79c22516f48f38472836b2d35298bc4"},{url:"img/logo.gif",revision:"89af7d3e5baf460a8348ddc6a4d57006"},{url:"img/logo.png",revision:"4fc1c4fea4fde5392fe5487f14608811"},{url:"index.html",revision:"5b2f55f086006233e9e35610af8b1992"},{url:"js/lazyload.js",revision:"3369755467fdd94dea1cd076ce7ba048"},{url:"js/main.js",revision:"ee0ad7094a3227ee55de892f7faf9483"},{url:"js/search.js",revision:"f8103040a5eeed5338f5e3bbca463f6c"},{url:"js/utlis.js",revision:"d65421285ef448bd7ef00a7fbc940fca"},{url:"link/index.html",revision:"51caa18bcc85765a7254482ccfe4238e"},{url:"links/index.html",revision:"e92b8feb265bd4265d31e838442df0df"},{url:"live2dw/assets/moc/tororo.2048/texture_00.png",revision:"9bd791736cfc91b62670dee5f7fbd45c"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"svg/angle-right.svg",revision:"58880281c4689dbd63770b19d093e3d3"},{url:"svg/arrow-up.svg",revision:"dbf4d0deed73e8bad10f8f5752c44cf7"},{url:"svg/categorie.svg",revision:"0ac88617bbfdbb15a8709f7f101b3adb"},{url:"svg/check.svg",revision:"4e3e591c69571fea00a4ea8d323fbadb"},{url:"svg/chevron-left.svg",revision:"831c35f6fc93d146d4bf1ca9a91b957d"},{url:"svg/chevron-right.svg",revision:"304e246c180f92acbe8a526cc637b05f"},{url:"svg/clipboard.svg",revision:"6cf2cff82ad757539f86ae3d309d0780"},{url:"svg/clock.svg",revision:"f0f1d20611c837cb795a2a6a8d6f6118"},{url:"svg/comments.svg",revision:"01a55e6d6a40d2e7b6d9f3a7bea9bf02"},{url:"svg/copyright.svg",revision:"0f6a371aebaa7339971fe797e8706622"},{url:"svg/date.svg",revision:"f96798508abe70768554f026af276701"},{url:"svg/eye.svg",revision:"fcfdd3d9e09777d9a587cbea99ae28e3"},{url:"svg/fan.svg",revision:"d043255b6cd7742b427bbbf0f4916e08"},{url:"svg/file-word.svg",revision:"4fe6ae1103cbc481cd5ce61ea07fa38e"},{url:"svg/folder-closed.svg",revision:"3581711c4bc944579b30627539276c88"},{url:"svg/folder-open.svg",revision:"cfe7c7960744383827895e0858cfdce2"},{url:"svg/list-ul.svg",revision:"f93c3051fc52a12405a591010d590b83"},{url:"svg/moon.svg",revision:"331b9101e66b41bb2c8f0d743d88dd68"},{url:"svg/right.svg",revision:"fe728095fb25a3ad40e82e7228c1e3d3"},{url:"svg/search.svg",revision:"3db851319e8796573d1ddb0316680ba6"},{url:"svg/sun.svg",revision:"dff31424caa8904b4413def4ddbf66af"},{url:"svg/tag.svg",revision:"5ed8c479c864e5ce20789f3eac8ab334"},{url:"tags/Hi/index.html",revision:"06471c8de818c2879c32f83e5c868847"},{url:"tags/index.html",revision:"817b032cc759e9172066038ec0b46cc2"},{url:"tags/散文/index.html",revision:"25015de2af165a3f709eaae6089bd0b0"},{url:"tags/阅读/index.html",revision:"fb192e0f589ca0c0b9714234015eaa21"},{url:"third-party/css/fancybox.css",revision:"7de51bdaad47e14cda90c98558f4ebc7"},{url:"third-party/fontawesome-free/css/all.css",revision:"bce1671a196eb46f5ef96c87a65e4222"},{url:"third-party/fontawesome-free/css/all.min.css",revision:"6386fb409d4a2abc96eee7be8f6d4cc4"},{url:"third-party/fontawesome-free/css/brands.css",revision:"7b02d8ff6f61d5710db7199c1c15b4d5"},{url:"third-party/fontawesome-free/css/brands.min.css",revision:"68d2fca552d477ce4ab50288a1c1c03a"},{url:"third-party/fontawesome-free/css/fontawesome.css",revision:"69f9171df6541000fae8cd6d7036c4c7"},{url:"third-party/fontawesome-free/css/fontawesome.min.css",revision:"e7c13f7644e01262156aed20f373ad5e"},{url:"third-party/fontawesome-free/css/regular.css",revision:"56104ed26aab573dcc2d62474ca7e456"},{url:"third-party/fontawesome-free/css/regular.min.css",revision:"a6249317044d2316de607e456df1473c"},{url:"third-party/fontawesome-free/css/solid.css",revision:"b1f4871ace214cbbe551ec2718ae4a63"},{url:"third-party/fontawesome-free/css/solid.min.css",revision:"ce820b25ef09418a545a226ef2eb3874"},{url:"third-party/fontawesome-free/css/svg-with-js.css",revision:"20da4b74ef3ed2656c58063b7f55bc92"},{url:"third-party/fontawesome-free/css/svg-with-js.min.css",revision:"20f3124732abd6f5bea1c2e9f5fbf8b3"},{url:"third-party/fontawesome-free/css/v4-font-face.css",revision:"838b64ad9aa41d2bd7f5a2874d892d32"},{url:"third-party/fontawesome-free/css/v4-font-face.min.css",revision:"0fdec9f99be0dedfe90b5360f1a635a5"},{url:"third-party/fontawesome-free/css/v4-shims.css",revision:"46d696c57df41678483a3b10e38e0fbe"},{url:"third-party/fontawesome-free/css/v4-shims.min.css",revision:"5eacad119bfdba6f9b33facdfb626440"},{url:"third-party/fontawesome-free/css/v5-font-face.css",revision:"f6529c1a7da31005f9305344ed2d77f1"},{url:"third-party/fontawesome-free/css/v5-font-face.min.css",revision:"af9f54e1e2c9db82febd2b01b87b39d2"},{url:"third-party/fontawesome-free/webfonts/fa-brands-400.ttf",revision:"a78ffbbed2d858c61e068e3b756c9988"},{url:"third-party/fontawesome-free/webfonts/fa-brands-400.woff2",revision:"cd2b4095e9ce66cde642c3502a4022d9"},{url:"third-party/fontawesome-free/webfonts/fa-regular-400.ttf",revision:"b1a1bebb63656b34a23982706f712f71"},{url:"third-party/fontawesome-free/webfonts/fa-regular-400.woff2",revision:"e8a1ba418ee6d897d1339ef22e6d8e60"},{url:"third-party/fontawesome-free/webfonts/fa-solid-900.ttf",revision:"738201559a50502aacabdbdb02720910"},{url:"third-party/fontawesome-free/webfonts/fa-solid-900.woff2",revision:"55b416a8df21f9f987aa352f10d1343b"},{url:"third-party/fontawesome-free/webfonts/fa-v4compatibility.ttf",revision:"0d6f5f1852affca569715821fe4aa29b"},{url:"third-party/fontawesome-free/webfonts/fa-v4compatibility.woff2",revision:"786e6b3373bab47e928c81c26eeccb08"},{url:"third-party/js/cardlink.js",revision:"0dc388fe302cc7597b8f404d7f73649b"},{url:"third-party/js/fancybox.js",revision:"f9b0fd0bed5d34fb77a4ff50b3cfde5b"},{url:"third-party/js/pjax.js",revision:"d810aff16a7f45392bdeec5493ebee8e"},{url:"third-party/js/prefetch-page.js",revision:"f3b13aa1dc3c6fba39eb68ddbea62ef2"}],{})}));
//# sourceMappingURL=service-worker.js.map
