const path = require('path')

module.exports = {
  entry: './test.js',

  output: {
    filename: 'bundle.test.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: path.resolve(__dirname, '../../index.js'),
            options: {
              defines: {
                IS_DEV: true
              }
            }
          }
        ]
      }
    ]
  },

  resolve: {
    // options for resolving module requests
    // (does not apply to resolving to loaders)

    modules: [
      'node_modules'
    ]
  }
}
