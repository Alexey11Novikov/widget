const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  // Enable sourcemaps for debugging webpack's output.
  module: {
    rules: [
      {
        test: /\.css$/, // Регулярное выражение для обработки файлов с расширением .css
        use: ["style-loader", "css-loader"], // Загрузчики, используемые для обработки CSS-файлов
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // Каталог, откуда будет раздаваться статика
    },
    hot: false,
    port: "8080",
    open: true, // Автоматически открывать браузер после запуска сервера разработки
    static: false,
  },
  mode: "development", // Режим сборки (в данном случае - разработка)
};
