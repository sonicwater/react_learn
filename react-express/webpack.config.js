const path = require('path');

module.exports = {
    // 页面入口文件配置
    entry : {
        index: './client/static/js/index.jsx'
    },
    // 入口文件输出配置
    output : {
        path: path.join(__dirname, './build/js/'),
        filename: '[name].bundle.js'
    },
    module: {
        // 加载器配置
        loaders: [
            { 
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader', 
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
}