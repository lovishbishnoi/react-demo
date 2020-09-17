const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const processEnv = new webpack.DefinePlugin({ 'process.env.ENV_NAME': JSON.stringify('dev') });

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {

    // Specify a host. (Defaults to 'localhost'.)
    host: 'localhost',

    // Specify a port number on which to listen for requests.
    port: 8080,

    // When using the HTML5 History API (you'll probably do this with React
    // later), index.html should be served in place of 404 responses.
    historyApiFallback: true,

    // Show a full-screen overlay in the browser when there are compiler
    // errors or warnings.
    overlay: {
      errors: true,
      warnings: true,
    },
  },
  plugins: [
    processEnv,
  ],
});
