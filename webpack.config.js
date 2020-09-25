const path = require('path');

module.exports = {
  entry: ['./client/widgets/related/index.js'],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
        exclude: /node_modules/,
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
};


// query: {
//   cacheDirectory: true
// }

// module: {
//   rules: [
//     {
//       test: /\.m?js$/,
//       exclude: /(node_modules|bower_components)/,
//       use: {
//         loader: 'babel-loader',
//         options: {
//           presets: ['@babel/preset-env']
//         }
//       }
//     }
//   ]
// }
// Options