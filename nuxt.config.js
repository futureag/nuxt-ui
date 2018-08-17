const pkg = require('./package');

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [ { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' } ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [ '@/assets/scss/style.scss' ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [ '@plugins/axios.js' ],

  /*
  ** Nuxt.js modules
  */
  modules: [ '@nuxtjs/axios', '@nuxtjs/pwa', 'nuxt-buefy', 'nuxt-logger' ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    // credentials: true,
    // baseURL: 'http://localhost:3001/api/v1',
    baseURL: process.env.BASE_URL || 'http://localhost:3001/api/v1',
    redirectError: {
      401: '/login'
    }
    // requestInterceptor: (config, { store, req }) => {
    //   console.log('HERE')
    //   return config
    // }
  },

  env: {
    // issuerCdnUrl: process.env.ISSUER_CDN_URL || 'https://issuers-cdn.s3.amazonaws.com/securitize'
  },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  }
};
