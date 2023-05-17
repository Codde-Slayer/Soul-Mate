const path = require('path');

module.exports = {
	  entry: './client/src/index.js',
	  
	  output: {
		  path: path.resolve(__dirname, '/client.dist',),
		  filename: 'bundle.js' ,
	  },
		name: 'browser',
		mode: 'development',

	  module: {
		rules: [{
			test: /\.js$/,
			loader: 'babel-loader',
			include: [
				path.resolve(__dirname, './client/dist')
			],

			options: {
				presets: ['react'] 
			},
		}]
	  },
	  devServer: {
		static: path.join(__dirname, './client/dist'),
		compress: true,
		port: 8000
	  }
	  
  };

