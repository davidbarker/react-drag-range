const path = require('path')
const packageJson = require(path.resolve(__dirname, "package.json"))
const HtmlWebPackPlugin = require("html-webpack-plugin")
const ESLintPlugin = require('eslint-webpack-plugin')

const mainFile = "DragRange.js"

module.exports = {
  entry: {
    main: path.resolve(__dirname, "src", mainFile),
  },

  output: {
    filename: "[name].js",
    library: mainFile.substring (0, mainFile.indexOf(".")),
    libraryTarget: "umd",
  },

  externals: process.env.NODE_ENV == "development" ? [] :
    Object.keys(packageJson.peerDependencies),

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve (__dirname, "src", "index.html"),
    }),
    new ESLintPlugin(),
  ],
}
