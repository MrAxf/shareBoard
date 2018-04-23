const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackShellPlugin = require('webpack-shell-plugin');

const extractSass = new ExtractTextPlugin({
  filename: "../css/style.css"
});
const shellPlugin = new WebpackShellPlugin({
  onBuildEnd: ['nodemon']
});

const conf = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, '/public/js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }],
          // use style-loader in development
          fallback: "style-loader"
        })
      }
    ]
  },
  plugins: [
    extractSass
  ]
};

if (process.env.NODE_ENV == "development"){
  conf.devtool = "source-map";
  conf.plugins.push(shellPlugin);
}

module.exports = conf;