const webpack = require('webpack');

module.exports = {
  	entry: './index.jsx',
  	output: {
    	filename: 'bundle.js'
  	},
  	module: {
    	loaders:[
      		{ 
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader', 
                query: {
                    presets: ['react', 'es2015']
                }
            }
    	]
  	}
};
















