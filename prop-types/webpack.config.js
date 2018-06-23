const path = require('path');
module.exports = {
    entry: path.resolve(__dirname, './index.jsx'),
    output: {
        filename: './bundle.js'  // 打包后文件
    },
    mode:'development',
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