// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const CopyWebpackPlugin = require('copy-webpack-plugin');

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = isProduction ?
  MiniCssExtractPlugin.loader :
  "style-loader";

const config = {
  context: path.join(__dirname, "src"),
  entry: ["./index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '/dist'),
    },
    open: true,
    host: "localhost",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "../index.html",
    }),

    new HtmlWebpackPlugin({
      template: "pages/november18.html",
      inject: true,
      chunks: ['november18'],
      filename: 'pages/november18.html'
    }),
    new HtmlWebpackPlugin({
      template: "pages/dec2.html",
      inject: true,
      chunks: ['dec2'],
      filename: 'pages/dec2.html'
    }),
    new HtmlWebpackPlugin({
      template: "pages/dec9.html",
      inject: true,
      chunks: ['dec9'],
      filename: 'pages/dec9.html'
    }),
    new HtmlWebpackPlugin({
      template: "pages/dec13.html",
      inject: true,
      chunks: ['dec13'],
      filename: 'pages/dec13.html'
    }),
     new HtmlWebpackPlugin({
       template: "pages/january6.html",
       inject: true,
       chunks: ['january6'],
       filename: 'pages/january6.html'
     }),
     new HtmlWebpackPlugin({
      template: "pages/jan6.html",
      inject: true,
      chunks: ['jan6'],
      filename: 'pages/jan6.html'
    }),
    new HtmlWebpackPlugin({
      template: "pages/jan6-luz.html",
      inject: true,
      chunks: ['jan6-luz'],
      filename: 'pages/jan6-luz.html'
    }),

    new CopyWebpackPlugin({ //assets only
      patterns: [{
        from: "./assets",
        to: "assets"
      }]
    })


    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {

    rules: [{
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [ "sass-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },

};
module.exports = () => {
  if (isProduction) {
    console.log("=====prod mode on====");
    config.mode = "production";

    // config.plugins.push(new )
    config.plugins.push(new MiniCssExtractPlugin());

  } else {
    config.mode = "development";

  }
  return config;
};