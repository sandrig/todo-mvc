const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: [/.css$|.scss$/],
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Todo MVC",
      template: "./src/index.html"
    })
  ],
  devServer: {
    port: 8080
  }
};

module.exports = function(a, b) {
  const production = b.mode === "production";
  config.devtool = production ? false : "eval-sourcemap";
  return config;
};
