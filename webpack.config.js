const CopyPlugin = require('copy-webpack-plugin');
const CONFIG = require('./.env');
const DEFAULT_CONFIG = require('./node_modules/@wordpress/scripts/config/webpack.config');
const path = require('path');

module.exports = {
  ...DEFAULT_CONFIG,
  module: {
    ...DEFAULT_CONFIG.module,
    rules: [
      ...DEFAULT_CONFIG.module.rules,
      {
        test: /\.svg$/,
        use: ["@svgr/webpack", "url-loader"]
      },
      {
        test: /\.(js)$/,
        loader: "eslint-loader",
        include: [
          //path.resolve(__dirname, ),
          path.join(__dirname, CONFIG.BUILD_DIR),
        ],
        options: {
          fix: CONFIG.CODE_AUTOFIX,
        },
      }
    ],
  },
  plugins: [
    ...DEFAULT_CONFIG.plugins,
    new CopyPlugin({
      patterns: [
        { 
          context: 'src',
          from: 'css/*.css',
          //to: CONFIG.BUILD_DIR
        },
        { 
          context: '.',
          from: '*.php'
        },
        { 
          context: 'src',
          from: 'images/*.png',
          //to: CONFIG.BUILD_DIR
        },
      ],
    })
  ]
};
