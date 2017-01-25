var webpack = require('webpack');
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
  devtool: 'cheap-module-eval-source-map'


}