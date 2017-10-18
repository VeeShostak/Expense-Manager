// node
const path = require('path');

module.exports = (env) => {
  const isProduction = env === 'production';
  console.log('env', env);

  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'), //__dirname dir of current location
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        // use multiple loaders with use: array
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }]
    },
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true // handle routing via client side
    }
  };

};
