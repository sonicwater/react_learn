var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var mode = "production";

module.exports = {
  	entry:{
        index:'./src/js/index.js',
        contact:'./src/js/contact.js',
        about:'./src/js/about.js',
    }, 
    mode,
	output: {
        filename: './js/[name].[chunkhash].js'
	},
    module: {
        rules: [
            {
                test: /\.json$/,
                type: "javascript/auto"
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.less$/, 
                use: ExtractTextPlugin.extract({
                    use:[ 'css-loader','less-loader'],
                    fallback: 'style-loader',
                })
            },
            {
    　　　　　　test: /\.html$/,
                use: 'html-loader'
    　　　　}, 
            {
    　　　　　　test: /\.(png|jpg)$/,
    　　　　　　loader: 'url-loader?limit=8192&name=images/[hash:8].[ext]'
    　　　　}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'index',
            filename: './index.html',
            template: './src/index.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            title: 'contact',
            filename: './contact.html',
            template: './src/contact.html',
            chunks: ['contact']
        }),
        new HtmlWebpackPlugin({
            title: 'about',
            filename: './about.html',
            template: './src/about.html',
            chunks: ['about']
        })
    ]
};