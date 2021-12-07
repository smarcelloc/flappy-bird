const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => ({
  mode: argv.mode ?? 'development',
  entry: './src/index.ts',
  devtool: argv.mode === 'development' ? 'inline-source-map' : false,
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@src': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/,
        use: 'file-loader',
      },
      {
        test: /\.(wav|mp3|ogg|aac|wma)$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'public', to: '' }],
    }),
  ],
  devServer: {
    compress: true,
    port: 9000,
  },
});
