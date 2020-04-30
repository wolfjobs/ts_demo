const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  output: {
    filename: "bundle.js",
    path: `${__dirname}/dist`
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  devServer: {
    host: "127.0.0.1",
    port: "3000",
    stats: 'errors-only',
    // hot: true,
    // watchContentBase: true,
    // quiet: true,
    // hotOnly: false,
    historyApiFallback: {
      rewrites: [
        {from: /\*/, to: '/index.html'},
      ]
    },
  },

  module: {
    rules: [
      {test: /\.tsx?$/, loader: "awesome-typescript-loader"},
      {enforce: "pre", test: /\.js$/, loader: "source-map-loader"},
      {
        test: /\.(less)$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true,
                modifyVars: {
                  "@primary-color": "#e60012",
                }
              },
            }
          }
        ]
      }
    ]
  },

  externals: {},
  plugins: [
    new HTMLWebpackPlugin({
      // favicon: "./public/favicon.ico",
      template: "./src/index.html",
      inject: true,
    }),

  ],

};