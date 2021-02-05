/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "9d877d65abc1e88cc8dd16ac77ad2518"
  },
  {
    "url": "assets/css/0.styles.49b04f50.css",
    "revision": "38f5d83feb81154d13cefbc3f57b24f0"
  },
  {
    "url": "assets/img/ea938e88743823524dc296849831992f.png",
    "revision": "ea938e88743823524dc296849831992f"
  },
  {
    "url": "assets/img/hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "assets/img/img123.png",
    "revision": "ea938e88743823524dc296849831992f"
  },
  {
    "url": "assets/img/search.72b0ff46.svg",
    "revision": "72b0ff466169d7f6d483e301dcfe4c00"
  },
  {
    "url": "assets/js/10.ae7ee5d0.js",
    "revision": "8cf81e27a91b899f2584759b3a5f4729"
  },
  {
    "url": "assets/js/11.e1a0e795.js",
    "revision": "5c77300b2c9746c5af8bfcd144854d4c"
  },
  {
    "url": "assets/js/12.5f217aee.js",
    "revision": "f2c6e83bcf8b8f9084f06efd077fe095"
  },
  {
    "url": "assets/js/13.bd15d007.js",
    "revision": "bc5435dea1b1de5fea8d51c97528758d"
  },
  {
    "url": "assets/js/14.b5a59d09.js",
    "revision": "1cf40942970fdfabc13b615b59470a80"
  },
  {
    "url": "assets/js/15.d7f6b18c.js",
    "revision": "72c4dba20daed9c794d9531e484087f2"
  },
  {
    "url": "assets/js/16.11368241.js",
    "revision": "b4e9f524a1d38855d974c40791210a80"
  },
  {
    "url": "assets/js/17.68f9752b.js",
    "revision": "731372a07ffda01d51fd94590fb5327f"
  },
  {
    "url": "assets/js/18.1c515f26.js",
    "revision": "7de9c0e0572266c24d0e248eb0cfb975"
  },
  {
    "url": "assets/js/19.d4020588.js",
    "revision": "a618938fec6499e3c6570fdc391cf89c"
  },
  {
    "url": "assets/js/2.ef72027d.js",
    "revision": "13c02f94ea57f84f26833834d56a8e43"
  },
  {
    "url": "assets/js/20.0615add9.js",
    "revision": "6806a09cca211deba794cdb0f05f4944"
  },
  {
    "url": "assets/js/21.677c0d26.js",
    "revision": "1782fa0a3cc4d39f7cf03d2ff83f1d27"
  },
  {
    "url": "assets/js/22.d2a09692.js",
    "revision": "4cdbcffe9009b3c91412d9f8ff165b90"
  },
  {
    "url": "assets/js/23.9a0c03e5.js",
    "revision": "303f2f58dac0669b0c6503ebf14b2ce3"
  },
  {
    "url": "assets/js/3.f508376e.js",
    "revision": "becf0ba9e24445edfc0fa3e6725d9c32"
  },
  {
    "url": "assets/js/4.28926fe7.js",
    "revision": "98a57b635a11f82306c6d84c5edf402e"
  },
  {
    "url": "assets/js/5.1be6641c.js",
    "revision": "f3e7cac16712a4147d1a999add88cec7"
  },
  {
    "url": "assets/js/6.7f0745fd.js",
    "revision": "566486bf55834f16c936e1d760c2f86c"
  },
  {
    "url": "assets/js/7.a1669acb.js",
    "revision": "432a3e282f3ed4c2e1f6bec658984940"
  },
  {
    "url": "assets/js/8.d94f8c6a.js",
    "revision": "c58722c9aaf0ec7b134ed8dc6ec3a2e4"
  },
  {
    "url": "assets/js/9.d796dafd.js",
    "revision": "12fdc4b3636ebcf50993a4797d9806ff"
  },
  {
    "url": "assets/js/app.f09dd1ff.js",
    "revision": "572644ff1746699855195eb54bce6fe3"
  },
  {
    "url": "imgs/media/ea938e88743823524dc296849831992f.png",
    "revision": "ea938e88743823524dc296849831992f"
  },
  {
    "url": "imgs/media/image1.png",
    "revision": "1b4f47d212bfaff2da43cd55d81050e7"
  },
  {
    "url": "index.html",
    "revision": "9311639fe74020c92ac2eaf9c19a07bb"
  },
  {
    "url": "media/ea938e88743823524dc296849831992f.png",
    "revision": "ea938e88743823524dc296849831992f"
  },
  {
    "url": "media/image1.png",
    "revision": "1b4f47d212bfaff2da43cd55d81050e7"
  },
  {
    "url": "技术文件/about.html",
    "revision": "745176524e08310c49592acfa306665b"
  },
  {
    "url": "技术文件/about1.html",
    "revision": "320f25c80d0f6b4a59f9795e4023d841"
  },
  {
    "url": "技术文件/index.html",
    "revision": "393acbfff2bc295aeb31bf7d40fc19fe"
  },
  {
    "url": "技术文件/md测试/index.html",
    "revision": "e6a8725bee3ff29d9b980fd8ecdaec40"
  },
  {
    "url": "技术文件/md测试/vuepress介绍.html",
    "revision": "1d1664f7228ff19b38666e920ab0f248"
  },
  {
    "url": "技术文件/md测试/vuepress介绍1.html",
    "revision": "71f306e09e9c7a36a3d3ba31c81dd0b0"
  },
  {
    "url": "规范文档/about1.html",
    "revision": "fb02e03f8b800591ccdb66e4f8bd477d"
  },
  {
    "url": "规范文档/about2.html",
    "revision": "95bc0da64288f73c5954c0552ea8d2b3"
  },
  {
    "url": "规范文档/about3.html",
    "revision": "216a1ded1ba40d88b1f0549bca777f89"
  },
  {
    "url": "规范文档/index.html",
    "revision": "997a6dc94794459c5cef2fed2d5289cb"
  },
  {
    "url": "规范文档/常用规范/about1.html",
    "revision": "e611967f5d8a4ea378c0c73b43dc90e3"
  },
  {
    "url": "规范文档/常用规范/about2.html",
    "revision": "605b2ec1b19d9dcc7992ca6c5e4fa233"
  },
  {
    "url": "规范文档/常用规范/about3.html",
    "revision": "aeb97f285ab100ab82062845c2a4bb63"
  },
  {
    "url": "规范文档/常用规范/index.html",
    "revision": "5d09dd116fab426e9664fc237b738195"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
