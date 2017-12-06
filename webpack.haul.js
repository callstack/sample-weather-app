const sharedConfig = require('./webpack.config.shared');

module.exports = ({ platform }, defaults) => ({
  entry: './src/index.mobile.js',
  resolve: {
    ...defaults.resolve,
    alias: {
      ...defaults.resolve.alias,
      ...sharedConfig.resolve.alias,
    }
  }
});