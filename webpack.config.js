const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});
const sourcePath = path.join(__dirname, './');
const dotenv = require('dotenv').config().parsed;
const config = Object.assign(require('./src/constants/config'), dotenv);

const {
  ENV,
  PORT,
  API_URL
} = config;
const isProd = ENV === 'production';

module.exports = {
  entry: {
    vendor: [
      'babel-polyfill',
      'jquery',
      'moment/moment.js',
      'assets/style/main.scss'
    ],
    app: [
      'src/index.js',
    ]
  },
  module: {
    rules: [
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|ttf|woff|svg)/,
        loader: 'file-loader'
      }, {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: [['es2015', {
            "modules": false
          }], 'react', 'stage-2'],
          plugins: ['transform-runtime', 'transform-decorators-legacy']
        }
      }, {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
    alias: {
      'jquery': path.resolve(__dirname, "node_modules") + "/jquery/src/jquery.js",
      'base': path.resolve(__dirname, './'),
      'src': path.resolve(__dirname, './src'),
      'assets': path.resolve(__dirname, './src/assets'),
      'components': path.resolve(__dirname, './src/components'),
      'api': path.resolve(__dirname, './src/api')
    },
    modules: [
      path.resolve(__dirname, 'node_modules'),
      'node_modules',
      sourcePath
    ]
  },
  plugins: [
    htmlWebpackPlugin,
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './'),
    historyApiFallback: true,
    port: PORT,
  }
};