let path = require('path');
let Autoprefixer = require('autoprefixer');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');

let loaders = [
    { test: /\.js$/,   exclude: /node_modules/, loader: "babel" },
    { test: /\.scss$/, loader: ExtractTextPlugin.extract("style", "css!postcss!sass") },
    { test: /\.html$/, loader: "html" }
];

let plugins = [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../src/index.html'),
        filename: './index.html',
        inject: true,
        hash: true
    }),
    new ExtractTextPlugin("index.css")
];

module.exports = {
    entry: {
        index: path.join(__dirname, '../src/index.js')
    },
    module: {
        loaders: loaders
    },
    output: {
        path: path.join(__dirname, '../build'),
        filename: '[name].js'
    },
    plugins: plugins,
    postcss: () => {
       return [ Autoprefixer({browsers: ['last 20 versions']}) ];
    }
};