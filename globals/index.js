/**
 * Define import scripts
 */


import Axios from 'axios'

import store from '~/store'

// console.log('store', store)

/**
 * define default headers
 * @type {Object}
 */
Axios.defaults.headers.common = {
	Accept: 'application/json',
	'Content-type': 'X-Requested-With',
	'X-Requested-With': 'XMLHttpRequest',
}

/**
 * sending Authentication token
 * @type {[type]}
 */
Axios.interceptors.request.use((config) => {
	const state = store()
		.state;
	const token = state.user.data.token;
	console.log('token', token);
	// Add auth token before request
	if (token) {
		config.headers.common = {
			Authorization: `Bearer ${token}`,
		};
	}

	return config;
}, (error) => {
	return Promise.reject(error);
});

/**
 * Make new AJAX Request to API
 * @param  {[type]} method [description]
 * @param  {[type]} route  [description]
 * @param  {Object} data   [description]
 * @return {[type]}        [description]
 */


export const makeRequest = (method, route, data = {}) => {
	switch (method) {
		case 'GET':
			return Axios.get(route)
			break;

		case 'POST':
			return Axios.post(route, data)
			break;

		case 'PUT':
			return Axios.put(route, data)
			break;

		case 'PATCH':
			return Axios.patch(route, data)
			break;

		case 'DELETE':
			return Axios.delete(route, data)
			break;
	}

	return Axios.get(route)
}


/**
 * Log more messages to the console.log
 */


export const log = (messages = []) => {
	messages.forEach((message) => {
		console.log(message)
	})
}