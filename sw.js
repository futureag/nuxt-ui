importScripts('/nuxt-ui/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "MVP-UI",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/nuxt-ui/_nuxt/app.30892c8377072a1775a7538fb2947bbb.css",
    "revision": "30892c8377072a1775a7538fb2947bbb"
  },
  {
    "url": "/nuxt-ui/_nuxt/app.60dbcc8c74af6b3d7074.js",
    "revision": "63ae5f9c61bcdb5534c89f9c3e2bf804"
  },
  {
    "url": "/nuxt-ui/_nuxt/layouts/default.ee81748c736fd847ae44.js",
    "revision": "40b2706c65a2d964c5472f176c153ca5"
  },
  {
    "url": "/nuxt-ui/_nuxt/manifest.86c4783b627b16b40007.js",
    "revision": "ed9950d3eef24c4a6b005d769ad98304"
  },
  {
    "url": "/nuxt-ui/_nuxt/pages/index.4e6ed28dcdfb1423a499.js",
    "revision": "761d71bd782c6dc37439397c4c20d55c"
  },
  {
    "url": "/nuxt-ui/_nuxt/pages/inspire.c162cb835fb852e4f189.js",
    "revision": "57ef985b63fce89211442d03d5f81fe2"
  },
  {
    "url": "/nuxt-ui/_nuxt/vendor.92ba3ae6ecbbcf867a62.js",
    "revision": "47f2bae54eb785be46c6816dd1543409"
  }
])


workboxSW.router.registerRoute(new RegExp('/nuxt-ui/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/nuxt-ui/.*'), workboxSW.strategies.networkFirst({}), 'GET')

