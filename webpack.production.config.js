var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  devtool: 'cheap-source-map',
  entry: [
    path.resolve(__dirname, 'app/main.jsx'),
  ],
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: './bundle.js'
  },
  context: path.resolve(__dirname + '/app/assets'),
  module: {
    rules:[
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'app'),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          }
        ]
      },
      {
        test: /\.js[x]?$/,
        include: path.resolve(__dirname, 'app'),
        exclude: /node_modules/,
        use: 'babel-loader'
      }, {
        test: /\.(svg|m4v)$/,
        loader: 'file-loader'
      }, {
        test: /\.(jpg|png|ico|gif)$/,
        loader: 'url-loader',
        options: {
          fallback: 'file-loader',
          limit: 25000
        }
      }
      // {
      //   // match image files
      //   test: /\.(jpe?g|png|svg|gif|ico)$/,
      //
      //   // match one of the loader's main parameters (sizes and placeholder)
      //   // resourceQuery: /[?&](sizes|placeholder)(=|&|\[|$)/,
      //
      //   use: [
      //     'svg-loader',
      //     // any other loader
      //     'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
      //   ],
      // }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new CopyWebpackPlugin([
      { from: './app/index.html', to: 'index.html', context: path.resolve(__dirname) },
      { from: './app/main.css', to: 'main.css', context: path.resolve(__dirname) },
      { from: 'favicons', to: 'favicons' },
    ]),
  ]
};
