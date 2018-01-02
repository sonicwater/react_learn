const webpack = require('webpack');
const path = require('path');
//const HtmlWebpackPlugin = require('html-webpack-plugin');
//const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		app:path.join(__dirname, './app/index.jsx'),
		//venter:Object.keys(pkg.dependencies)
	},
	output:{
		path: path.join(__dirname, './build'),
		filename: '[name].js'
	},
	/*
	plugins: [
		new HtmlWebpackPlugin({
			title:'首页',
			filename:'index.html'
		})
	],*/
  	module: {
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
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    }
}












