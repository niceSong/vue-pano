const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './example/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js',
    library: 'vue-pano',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    alias: {
      vue: 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.glsl$/,
        loader: 'raw-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options:{
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
            comments: false
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.html$/,
        loader: 'vue-html-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 8989,
    noInfo: true
  },
  devtool: '#eval-source-map',
  plugins: [new VueLoaderPlugin()]
}

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'github') {
  module.exports.devtool = '#source-map'
  // http://vuejs.github.io/vue-loader/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new UglifyJSPlugin({
      uglifyOptions: {
        warning: "verbose",
        ecma: 6,
        beautify: false,
        compress: false,
        comments: false,
        mangle: false,
        toplevel: false,
        keep_classnames: true,
        keep_fnames: true
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin()
  ])
}

if (process.env.NODE_ENV === 'production') {
  module.exports.entry = './src/Pano.vue'
  module.exports.externals = {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  }
}
