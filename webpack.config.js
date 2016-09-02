"use strict";

module.exports = {
  // context: __dirname + '/src',
  entry: {
    // app: ['./src/app.js']
    javascript: './src/app.js',
    css: ['./node_modules/bootstrap/dist/css/bootstrap.min.css'],
    html: ['./src/index.html', './src/test01.html']
  },
  output: {
    path: './dist/',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist/',
    port: 3000
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel",
      query: {
        presets: ['es2015']
      }
    }, {
      test: /\.(html|css)$/,
      loader: 'file?name=[name].[ext]'
        // loader: 'file?name=[path][name].[ext]'
    }]
  }
};