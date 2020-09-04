const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
module.exports = function (env) {
  return {
    entry: {
        main: './src/js/index.js',      
        vendors: ['./src/js/vendors/vendor1.js', './src/js/vendors/vendor2.js'] 
    },
    output: {
      path: path.resolve(__dirname, 'destination'),
      filename: '[name].[contentHash].bundle.js',
      publicPath: '/',
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'destination'),
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './public/index.html',
        filename: './index.html',
      }),
    ],
  };
};