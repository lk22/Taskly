export default (options) => {
	function checkIfAuthenticated(to) {
		const authToken = window.localStorage.getItem('auth_token')

		// console.log('Auth token: ' + authToken)

		if(!authToken && to.fullPath.indexOf('/app') >= 0) {
			options.redirect('/login')
		}
	}

	options.app.beforeMount = () => {
		checkIfAuthenticated(options.route)
	}

	options.app.watch = {
		$route(to, from) {
			checkIfAuthenticated(to)
		}
	}
}