const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCss = require("mini-css-extract-plugin");
const copyWebpack = require("copy-webpack-plugin");
const DotEnv = require("dotenv-webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    assetModuleFilename: "assets/images/[hash][ext][query]",
  },
  mode: "development",
  resolve: {
    extensions: [".js"],
    alias: {
      "@utils": path.resolve(__dirname, "src/utils/"),
      "@templates": path.resolve(__dirname, "src/templates/"),
      "@styles": path.resolve(__dirname, "src/styles/"),
      "@images": path.resolve(__dirname, "src/assets/images"),
    },
  },
  module: {
    rules: [
      // Toma en cuenta todos los JS
      {
        test: /\.m?.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      // Carga el CSS y trabaja con archivos Stylus
      {
        test: /\.css|.styl$/i,
        use: [MiniCss.loader, "css-loader", "stylus-loader"],
      },
      // Trabajar con las imágenes
      {
        test: /\.png$/i,
        type: "asset/resource",
      },
      // Añade las reglas para cargar las fuentes
      {
        test: /\.woff|.woff2$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][contenthash][ext]",
        },
      },
    ],
  },
  plugins: [
    // Plugin que toma el HTML y lo manda al dist y lo renombramos
    new HTMLWebpackPlugin({
      inject: true,
      template: "/public/index.html",
      filename: "./index.html",
    }),
    // Instanciamos el plugin de CSS
    new MiniCss({
      filename: "assets/[name][contenthash].css",
    }),
    // Plugin que mueve los archivos de una carpeta a otra dentro del dist
    new copyWebpack({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets/images"),
          to: "assets/images",
        },
      ],
    }),
    new DotEnv(),
  ],
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    historyApiFallback: true,
    port: 8080,
    open: true,
  },
};
