module.exports = {
	/*
	 ** Headers of the page
	 */
	head: {
		title: 'taskly-vue',
		meta: [
			{
				charset: 'utf-8'
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1'
			},
			{
				hid: 'description',
				name: 'description',
				content: 'Nuxt.js project'
			}
    ],
		link: [
			{
				rel: 'icon',
				type: 'image/x-icon',
				href: '/favicon.ico'
			},
			{
				type: 'text/javascript',
				href: 'https://use.fontawesome.com/5964f513fc.js'
			}
    	]
	},
	/*
	 ** Customize the progress bar color
	 */
	loading: {
		color: '#3B8070'
	},
	/*
	 ** Build configuration
	 */
	build: {
		vendor: ['axios']
		/*
		 ** Run ESLint on save
		 */
		// extend (config, ctx) {
		//   if (ctx.dev && ctx.isClient) {
		//     config.module.rules.push({
		//       enforce: 'pre',
		//       test: /\.(js|vue)$/,
		//       loader: 'eslint-loader',
		//       exclude: /(node_modules)/
		//     })
		//   }
		// }
	},

	generate: {
		dir: 'public'
	},

	plugins: ['~/plugins/auth'],

	router: {
		middleware: 'auth'
	},

	mode: 'spa',
	/**/

	/**
	 * modules to use
	 */
	modules: [

		/**
		 * Bootstrap
		 * @type {[type]}
		 */
	    'bootstrap-vue/nuxt',

	    // Or if you have custom bootstrap CSS...
	    ['bootstrap-vue/nuxt', {
			css: false
		}],

		/**
		 * fontawsome
		 */

		 '@nuxtjs/font-awesome',
	]
}