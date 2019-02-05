const defaultConfig = require('./babel-ori.config.js')
const babelMerge = require('babel-merge')

module.exports = babelMerge(defaultConfig, {
  plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]],
})