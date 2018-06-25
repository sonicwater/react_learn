const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: [  
        'babel-polyfill',   
        'react-hot-loader/patch', //设置这里  
        __dirname + './index.jsx'  
    ],
    output: {
        filename: './bundle.js'  // 打包后文件
    },
    mode:'development',
    devServer: {  
        contentBase: './build',   
        port: '1188',   
        historyApiFallback: true,    
        inline: true,    
        hot: true,  //设置这里  
    },
    plugins: [  
        new HtmlWebpackPlugin({  
            template: __dirname + "./index.html"  
        }),  
        new webpack.HotModuleReplacementPlugin() //设置这里  
    ],     
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