var webpack = require('webpack');
var path = require('path');
module.exports = {
	entry :['script!jquery/dist/jquery.min.js',
	'script!foundation-sites/dist/js/foundation.min.js',
	'./app/app.jsx'],
	externals:{
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery':'jquery'
		})
	],
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		root : __dirname,
		alias :{
			Main: 'app/components/main.jsx',
			Timer: 'app/components/timer.jsx',
			Countdown: 'app/components/countdown.jsx',
			CountDownForm: 'app/components/CountDownForm.jsx',
			Controls: 'app/components/controls.jsx',
			Clock: 'app/components/clock.jsx',
			ApplicationCustomStyle: 'app/styles/app.scss',
			Nav : 'app/components/nav.jsx'
		
		},
		extensions: ['','.js','.jsx']
	},
	module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-0' }
    ]
  },
  sassLoader:{
	  includePaths:[
	  path.resolve(__dirname,'./node_modules/foundation-sites/scss')
	  ]
		  
	  
	  
  },
  devtool: 'cheap-module-eval-source-map'


}