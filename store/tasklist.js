/**
 * imports
 */


import Vuex from 'vuex'

import {
	makeRequest
} from '~/globals'

import {
	api
} from '~/globals/API/endpoints'


/**
 * types
 */


const types = {
	ADD_TASK_LIST: 'ADD_TASK_LIST',
	UPDATE_TASK_LIST: 'UPDATE_TASK_LIST',
	REMOVE_TASK_LIST: 'REMOVE_TASK_LIST',
	SET_TASKLISTS: 'SET_TASKLISTS',
	SET_TASKLIST: 'SET_TASKLIST'
}


/**
 * state
 */


const tasklist = {
	/**
	 * define state for tasklists
	 * @type {Object}
	 */
	state: {
		items: [
			{

			}
		],
		tasklist: {

		}
	},

	/**
	 * define custom getters for fetching tasklists
	 * @type {Object}
	 */
	getters: {
		getTasklists: state => {
			return state.items
		},

		getSingleTasklist: state => {
			return state.tasklist
		}
	},

	/**
	 * define actions bound to tasklists store
	 */
	actions: {

		/**
		 * get single tasklist
		 */
		 getTasklist(context, {slug}) {
			 return makeRequest('GET', api + 'tasklists/' + slug).then((response) => {
				 console.log(response)

				 context.commit(types.SET_TASKLIST, response.data.data)

				 return Promise.resolve()
			 })
			 .catch((error) => {
				 console.log(error)
				 return Promise.reject()
			 })
		 },

		/**
		 * get tasklists
		 * @type {[type]}
		 */
		getTasklists(context) {
			// console.log(context)

			return makeRequest('GET', api + 'tasklists')
				.then((response) => {
					//console.log(response.data)

					context.commit(types.SET_TASKLISTS, response.data.data)
				})
				.catch((error) => {
					throw new Error(error)
					console.log(error)
				})
		},

		/**
		 * create new tasklist action
		 */
		create(context, {
			name
		}) {
			console.log(name)

				return makeRequest('POST', api + 'tasklists/create-tasklist', {
						name
					})
					.then((response) => {
						console.log(response);

						// extending request
						return Promise.resolve();

					})

					context.commit(types.ADD_TASK_LIST, {
						name
					})
		},

		/**
		 * Update existing tasklist
		 * @param  {[type]} context [description]
		 * @param  {[type]} name    [description]
		 * @return {[type]}         [description]
		 */
		update(context, {
			name
		}) {

			context.commit(types.UPDATE_TASK_LIST, {
				name
			})

			try {

				makeRequest('PUT', api + 'tasklists/' + state.tasklists.slug + 'update-tasklist')
					.then((response) => {
						console.log(response);

						// extending request
						return Promist.resolve();
					})

			} catch (error) {
				// throw error here
			}
		},

		/**
		 * Delete existing tasklist
		 * @param  {[type]} context [description]
		 * @param  {[type]} id      [description]
		 * @return {[type]}         [description]
		 */
		delete(context, {
			id
		}) {

			try {

				makeRequest('DELETE', api + 'tasklists/' + id + '/delete-tasklist')
					.then((response) => {
						console.log(response);

							context.commit(types.REMOVE_TASK_LIST);

						return Promise.resolve();
					})

			} catch (error) {
				throw new Error('Could not delete your tasklist')
			}

			//context.commit(types.REMOVE_TASK_LIST);

		}
	},

	/**
	 * Mutations
	 */
	mutations: {

		/**
		 * add task list mutation
		 */
        [types.ADD_TASK_LIST](state, tasklist) {
			state.items = [tasklist].concat(state.items)
		},

		/**
		 * update task list mutation
		 */
        [types.UPDATE_TASK_LIST](state, payload) {
			const {
				name,
				tasklist
			} = payload

			if (name) {
				tasklist.name = name
			}
		},

		/**
		 * removing tasklist mutation
		 */
        [types.REMOVE_TASK_LIST](state, id) {
			state.items = state.items.filter(item => item.id !== id)
		},

		[types.SET_TASKLISTS](state, payload) {
			state.items = payload
		},

		[types.SET_TASKLIST](state, payload) {
			state.tasklist = payload
		}
	},
	namespaced: true
}


export default tasklist
