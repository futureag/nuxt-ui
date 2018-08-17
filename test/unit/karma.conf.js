// we can just use the exact same webpack config by requiring it
// however, remember to delete the original entry since we don't
// need it during tests
var webpackConfig = require('./webpack.config.js')
delete webpackConfig.entry

process.env.CHROME_BIN = require('puppeteer').executablePath()

// karma.conf.js
module.exports = function (config) {
  config.set({
    browsers: [ 'ChromeHeadless_custom' ],
    customLaunchers: {
      ChromeHeadless_custom: {
        base: 'ChromeHeadless',
        flags: [ '--no-sandbox', '--disable-setuid-sandbox' ]
      }
    },
    autoWatch: false,
    frameworks: [ 'mocha', 'chai', 'sinon' ],
    // this is the entry file for all our tests.
    files: [ 'index.js' ],
    reporters: [ 'spec' ],
    // we will pass the entry file to webpack for bundling.
    preprocessors: {
      'index.js': [ 'webpack' ]
    },
    // use the webpack config
    webpack: webpackConfig,
    // avoid walls of useless text
    webpackMiddleware: {
      noInfo: true
    },
    singleRun: true,
    browserConsoleLogOptions: {
      terminal: false
    }
  })
}
