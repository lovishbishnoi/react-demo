// webpack.config.js
var path = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const PATH_SOURCE = path.join(__dirname, './src');
const PATH_DIST = path.join(__dirname, './dist');

module.exports = env => {

  const environment = env.environment;
  const isProduction = environment === 'production';
  const isDevelopment = environment === 'development';

  return {
    mode: environment,
    resolve: {
      extensions: [".jsx", ".js"]
    },

    devServer: {
      // The dev server will serve content from this directory.
      contentBase: PATH_DIST,

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

    entry: [
      path.join(PATH_SOURCE, './index.jsx'),
    ],

    output: {
      path: PATH_DIST,
      filename: 'js/[name].[hash].js',
    },

    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.jsx$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
        },
        {
          test: /\.jsx$/, // Apply this rule to files ending in .js
          exclude: /node_modules/, // Don't apply to files residing in node_modules
          use: { // Use the following loader and options
            loader: 'babel-loader',
            // We can pass options to both babel-loader and Babel. This option object
            // will replace babel.config.js
            options: {
              presets: [
                ['@babel/preset-env', {
                  debug: true, // Output the targets/plugins used when compiling
                }],

                '@babel/preset-react',

              ],
            },
          }
        },
        {
          test: /\.(scss|sass|css)$/,
          exclude: /node_modules/,
          use: [ // Use the following loader and options
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
          ]
        },
        {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader',
         ],
       },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(PATH_SOURCE, './index.html'),
      }),
    ],

  };
};
