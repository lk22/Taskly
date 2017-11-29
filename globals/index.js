/**
 * Define import scripts
 */


import Axios from 'axios'


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