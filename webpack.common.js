// webpack.config.js
var path = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const PATH_SOURCE = path.join(__dirname, './src');
const PATH_DIST = path.join(__dirname, './dist');

const htmlWebPack = new HtmlWebpackPlugin({
    template: path.join(PATH_SOURCE, '/assets/index.html'),
});

const extractCss = new MiniCssExtractPlugin({
    filename: 'assets/css/style.min.css',
    chunkFilename: 'assets/css/bootstrap.min.css',
});

module.exports = {

    entry: [
        path.join(PATH_SOURCE, './index.jsx'),
      ],
  
    resolve: {
      extensions: [".jsx", ".js"]
    },

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
      htmlWebPack,
      extractCss,
    ],
};
