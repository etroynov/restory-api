const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  devtool: 'none',
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },

      // Styles
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      },

      {
        test: /\.(svg|png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    // new UglifyJsPlugin({
    //   uglifyOptions: {
    //     ecma: 8,
    //     output: {
    //       comments: false,
    //       beautify: false,
    //     },
    //     toplevel: false,
    //     nameCache: null,
    //     ie8: false,
    //     keep_classnames: undefined,
    //     keep_fnames: false,
    //     safari10: false
    //   }
    // })
  ]
};
