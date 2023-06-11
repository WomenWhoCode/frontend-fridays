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
      template: 'pages/january18.html',
      inject: true,
      chunks: ['january18'],
      filename: 'pages/january18.html'
    }),
    new HtmlWebpackPlugin({
      template: 'pages/january-wallet.html',
      inject: true,
      chunks: ['january-wallet'],
      filename: 'pages/january-wallet.html'
    }),

    new HtmlWebpackPlugin({
      template: 'pages/wallet-card.html',
      inject: true,
      chunks: ['wallet-card'],
      filename: 'pages/wallet-card.html'
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
    new HtmlWebpackPlugin({
      template: "pages/jan13-poulami.html",
      inject: true,
      chunks: ['jan13-poulami'],
      filename: 'pages/jan13-poulami.html'
    }),

    new HtmlWebpackPlugin({
      template: "pages/calculator.html",
      inject: true,
      chunks: ['calculator'],
      filename: 'pages/calculator.html'
    }),

    new HtmlWebpackPlugin({
      template: "pages/jan27-poulami.html",
      inject: true,
      chunks: ['jan27-poulami'],
      filename: 'pages/jan27-poulami.html'
    }),
    new HtmlWebpackPlugin({
      template: "pages/jan27-poulami-second.html",
      inject: true,
      chunks: ['jan27-poulami-second'],
      filename: 'pages/jan27-poulami-second.html'
    }),
    new HtmlWebpackPlugin({
      template: "pages/feb-4-poulami.html",
      inject: true,
      chunks: ['feb-4-poulami'],
      filename: 'pages/feb-4-poulami.html'
    }),
    new HtmlWebpackPlugin({
      template: "pages/feb-4-poulami-second.html",
      inject: true,
      chunks: ['feb-4-poulami-second'],
      filename: 'pages/feb-4-poulami-second.html'
    }),
    new HtmlWebpackPlugin({
      template: "pages/march.html",
      inject: true,
      chunks: ['march-Mariya Harizanova'],
      filename: 'pages/march.html'
    }),
    new HtmlWebpackPlugin({
      template: "pages/mar-17-poulami.html",
      inject: true,
      chunks: ['mar-17-poulami'],
      filename: 'pages/mar-17-poulami.html'
    }),
    new HtmlWebpackPlugin({
      template: "pages/mar-24-poulami.html",
      inject: true,
      chunks: ['mar-24-poulami'],
      filename: 'pages/mar-24-poulami.html'
    }),
    new HtmlWebpackPlugin({
      template: "pages/april.html",
      inject: true,
      chunks: ['mariya-harizanova'],
      filename: 'pages/april.html'
    }),
    new HtmlWebpackPlugin({
      template: "pages/april-15.html",
      inject: true,
      chunks: ['mariya-harizanova'],
      filename: 'pages/april-15.html'
    }),
    new HtmlWebpackPlugin({
      template: "pages/march-31-poulami.html",
      inject: true,
      chunks: ['march-31-poulami'],
      filename: 'pages/march-31-poulami.html'
    }),
    new HtmlWebpackPlugin({
      template: "pages/may-file-upload-mariya.html",
      inject: true,
      chunks: ['mariya-harizanova'],
      filename: 'pages/may-file-upload-mariya.html'
    }),

    new HtmlWebpackPlugin({
      template: "pages/luz-april-14.html",
      inject: true,
      chunks: ['luz-april-14'],
      filename: 'pages/luz-april-14.html'
    }),
    new HtmlWebpackPlugin({
      template: "pages/april-14-poulami.html",
      inject: true,
      chunks: ['april-14-poulami'],
      filename: 'pages/april-14-poulami.html'
    }),
    new HtmlWebpackPlugin({
      template: "pages/luz-april-21.html",
      inject: true,
      chunks: ['luz-april-21'],
      filename: 'pages/luz-april-21.html'
    }),
    new HtmlWebpackPlugin({
      template: "pages/april-21-poulami.html",
      inject: true,
      chunks: ['april-21-poulami'],
      filename: 'pages/april-21-poulami.html'
    }),
    new HtmlWebpackPlugin({
      template: "pages/my_coding_partner.html",
      inject: true,
      chunks: ['may-mariya'],
      filename: 'pages/my_coding_partner.html'
    }),
    new HtmlWebpackPlugin({
      template: "pages/june_challenge.html",
      inject: true,
      chunks: ['june-mariya'],
      filename: 'pages/june_challenge.html'
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
        use: ["sass-loader"],
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