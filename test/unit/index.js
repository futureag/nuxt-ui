// test/index.js
// require all test files using special Webpack feature
// https://webpack.github.io/docs/context.html#require-context
import Vue from 'vue'

const isHeadlessChrome = /\bHeadlessChrome\//.test(navigator.userAgent)
Vue.config.devtools = !isHeadlessChrome
Vue.config.productionTip = false

var testsContext = require.context('.', true, /\.spec$/)
testsContext.keys().forEach(testsContext)
