/**
 * imports
 */


 		import Vuex from 'vuex'

 		import {
 			makeRequest
 		} from '~/globals'

 		import {
 			api,
 			oauth
 		} from '~/globals/API/endpoints'


/**
 * Define action types
 */


		const types = {
			SET_USER: 'SET_USER',
			UPDATE_USER: 'UPDATE_USER',
			TOGGLE_ADMIN: 'TOGGLE_ADMIN',
		}



/**
 * define user state to create in store
 * @return {[type]} [description]
 */

		const user = {
				/**
				 * Define User state
				 * @type {Object}
				 */
				state: {
					authUser: null,
					authToken: null,
					data: {

					}
				},

				/**
				 * Define getters to the user store
				 * @type {Object}
				 */
				getters: {
					getUser: state => {
						return state.authUser
					}
				},

				/**
				 * Actions
				 */
				actions: {
					/**
					 * Login user with credentials
					 * @param  {[type]} context          [description]
					 * @param  {[type]} options.email    [description]
					 * @param  {[type]} options.password [description]
					 * @return {[type]}                  [description]
					 */
					async login(context, {
						username,
						password
					}) {
						try {

							const { data } = await makeRequest('POST', api + 'login', {
								username,
								password
							}).then((response) => {
								const auth = response.data.authUser
								const token = response.data.success.token
								console.log({
									auth: auth,
									token: token
								})


								context.commit(types.SET_USER, {
									...auth,
									token,
								})


								// window.localStorage.setItem('auth_token', token)
								return Promise.resolve()
							})


							console.log(data)

						} catch (error) {

							if(error.response && error.response.status === 401) {
								throw new Error('Bad Request')
							}

						}
					},

					/**
					 * registering new user
					 */
					async register(context, {
						firstname,
						lastname,
						email,
						password,
						c_password
					}) {

						try {

							const { user } = await makeRequest('POST', api + 'register', {
								firstname,
								lastname,
								email,
								password,
								c_password
							}).then((response) => {
								console.log(response)
								return Promise.resolive()
							})

							context.commit(types.SET_USER, user)

						} catch (error) {

							if(error.response && error.response.status === 401) {
								throw new Error('Bad request')
							}

						}

					}
				},

				/**
				 * Mutations
				 * @param  {[type]} state [description]
				 * @return {[type]}       [description]
				 */
				mutations: {

					/**
					 * set user state mutation
					 */
					[types.SET_USER](state, user) {
						state.data = user;
					}
				},
				namespaced:true
		}


export default user
