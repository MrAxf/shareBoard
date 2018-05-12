const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackShellPlugin = require('webpack-shell-plugin');

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
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "../css/style.css"
    })
  ]
};

if (process.env.NODE_ENV == "development"){
  conf.devtool = "source-map";
  conf.plugins.push(shellPlugin);
}

module.exports = conf;