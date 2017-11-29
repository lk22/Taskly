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
	ADD_NEW_TASK: 'ADD_NEW_TASK',
	UPDATE_TASK: 'UPDATE_TASK',
	REMOVE_TASK: 'REMOVE_TASK',
	SET_PRIORITY: 'SET_PRIORITY',
	CHECKOUT_TASK: 'CHECKOUT_TASK',
	CHECKOUT_ALL_TASKS: 'CHECKOUT_ALL_TASKS'
}


/**
 * task store
 */


const task = {
	/**
	 * State object
	 */
	state: {
		items: [],
		task: {}
	},

	/**
	 * getter methods
	 */
	getters: {
		getTasks: state => {
			return state.items
		},

		getTask: state => (id) => {
			return state.items.filter(task => task.id === id)
		}
	},

	actions: {

		/**
		 * creating a new task
		 */
		create(context, {
			name,
			priority
		}) {

			// make API request
			makeRequest('POST', api + 'tasks/create-task', {
					name,
					priority
				})
				.then((response) => {
					console.log(response);

					const name = name;
					const priority = priority;

					context.commit(types.ADD_NEW_TASK, {
						name,
						priority
					})

					return Promise.resolve();
				})
				.catch((error) {
					throw new Error(error)
				})

		},


		/**
		 * updating existing task
		 */
		update(context, {
			name,
			priority,
			workHours,
			id
		}) {

			const id = state.task.id

			// make API request
			makeRequest('PUT', api + 'tasks/' + id + '/update-task', {
					name,
					priority
				})
				.then((response) => {
					console.log(response);

					const name = name;
					const priority = priority;

					context.commit(types.UPDATE_TASK, {
						name,
						priority
					})

					return Promise.resolve();
				})
				.catch((error) {
					throw new Error(error);
				})
		},

		/**
		 * remove existing task
		 */
		delete(context, {
			id
		}) {

			const id = state.task.id;
			makeRequest('DELETE', api + 'tasks/' + id + '/delete-task')
				.then((response) => {
					console.log(response);

					context.commit(types.REMOVE_TASK);

					return Promise.resolve();
				})
		},

		/**
		 * @todo
		 * 1: add setPriority action Here
		 * 2: checkoutTask action
		 * 3: checkAllTasks action
		 */

		/**
		 * set priority to task
		 * @param {[type]} context  [description]
		 * @param {[type]} priority [description]
		 * @param {[type]} id       [description]
		 */
		setPriority(context, {
			priority,
			id
		}) {
			const id = state.task.id
			makeRequest('PATCH', api + 'tasks/' + id + '/set-priority', {
					priority
				})
				.then((response) => {
					console.log(response)

					const priority = priority

					context.commit(types.SET_PRIORITY, {
						priority
					})
				})
				.catch((error) => {
					console.log(error);

					throw new Error(error);
				})
		},

		/**
		 * checkout task
		 * @type {Object}
		 */
		checkoutTask(context, {
			id
		}) {
			const id = state.task.id

			makeRequest('PATCH', api + 'tasks/' + id + '/checkout-task', {})
				.then((response) => {
					console.log(response);

					context.commit(types.CHECKOUT_TASK);
				})
				.catch((error) => {
					throw new Error(error)
				})
		},

		/**
		 * checkout all tasks
		 * @type {Object}
		 */
		checkoutAllTasks(context) {

			makeRequest('PATCH', api + 'tasks/check-all')
				.then((response) => {
					console.log(response);

					context.commit(types.CHECKOUT_ALL_TASKS);

					return Promise.resolve();
				})
				.catch((error) => {
					throw new Error(error);
				})
		}
	},

	mutations: {

		/**
		 * create task mutation
		 * @type {Boolean}
		 */
        [ADD_NEW_TASK](state, payload) {
			state.items = [task].concat(state.items)
		},

		/**
		 * updating existing task mutation
		 * @type {Boolean}
		 */
        [UPDATE_TASK](state, payload) {
			const {
				name,
				priority,
				workHours,
				task
			} = payload

			if (name) {
				task.name = name
			}

			if (priority) {
				task.priority = priority
			}

			if (workHours) {
				task.workHours = workHours
			}
		},

		/**
		 * removing task
		 * @type {Boolean}
		 */
        [REMOVE_TASK](state, task) {
			state.items = state.items(item => item.id !== task.id)
		},

	},
	namespaced: true;
}


export default task