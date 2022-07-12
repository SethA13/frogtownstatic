import * as Path from 'path';

module.exports = [
  {
    watch: true,
    output: {
      filename: 'indexBundle.js',
      path: __dirname,
      libraryTarget: 'commonjs',
    },
    name: 'index',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    entry: Path.resolve(__dirname, 'views/index.js'),
    mode: 'development',
    devtool: 'source-map',
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      // fallback: {
      //   https: require.resolve("https-browserify"),
      //   http: require.resolve("stream-http"),
      // },
    },
  },
];
