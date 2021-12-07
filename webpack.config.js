const path = require('path');

module.exports = (env, argv) => ({
  mode: argv.mode ?? 'development',
  entry: './src/index.ts',
  devtool: argv.mode === 'development' ? 'inline-source-map' : false,
  output: {
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@src': path.resolve(__dirname, 'src'),
    },
  },
  devServer: {
    compress: true,
    port: 9000,
  },
});
