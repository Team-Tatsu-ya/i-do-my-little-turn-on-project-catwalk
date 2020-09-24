const path = require('path');

module.exports = {
  entry: ['./client/widgets/related/index.js', './client/widgets/details/App.jsx', './client/widgets/reviews/index.js'],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};