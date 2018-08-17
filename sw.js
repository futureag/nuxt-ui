importScripts('/nuxt-ui/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "MVP-UI",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/nuxt-ui/_nuxt/app.3bbe0edfea4419953ca2.js",
    "revision": "0a6e3f7d7518c33813dae5c8849344fa"
  },
  {
    "url": "/nuxt-ui/_nuxt/app.80cdf3265bacd71e8ccf6538d593e6fa.css",
    "revision": "80cdf3265bacd71e8ccf6538d593e6fa"
  },
  {
    "url": "/nuxt-ui/_nuxt/layouts/default.3c0324ddf17d7a236d5e.js",
    "revision": "f4d277bfca57f16ffef4edbf4d20a469"
  },
  {
    "url": "/nuxt-ui/_nuxt/manifest.26504c3924486e114b6f.js",
    "revision": "57ce001f17deaa01e0917c2fed3f4819"
  },
  {
    "url": "/nuxt-ui/_nuxt/pages/index.18c3e9a7c7a77d428e43.js",
    "revision": "c10d9a6c530f076904db8df776816fd8"
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

