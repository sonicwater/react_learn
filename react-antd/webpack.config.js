const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: path.resolve(__dirname, './src/js/index.jsx'),
    output: {
        filename: 'bundle.js'  // 打包后文件
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            },
        ]
    }
}