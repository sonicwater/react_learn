const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const mode = "production";

module.exports = {
  	entry:{
        index:'./src/js/index.jsx',
        contact:'./src/js/contact.jsx',
        about:'./src/js/about.jsx'
    }, 
    mode,
	output: {
        filename: './js/[name].[chunkhash].js'
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
        }),
        new ExtractTextPlugin({
            filename: "css/[name].[chunkhash].css"
        })
    ]
};