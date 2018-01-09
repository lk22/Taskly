
module.exports = {
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
				test: /\.js$/,
				exclude: '/node_modules/', // excluding node modules
				use: {
			       	loader: 'babel-loader', // using babel loader 
			       	// defining options for babel loader
			    	options: {
			    		// using environment preset
			         	presets: ['babel-preset-env', 'babel-preset-latest']
				   	}
				}
			}
        ]
    }
};
