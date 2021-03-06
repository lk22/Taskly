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
	CHECKOUT_ALL_TASKS: 'CHECKOUT_ALL_TASKS',
	SET_WORK_HOURS: 'SET_WORK_HOURS'
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
			priority,
			workHours
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
						priority,
						workHours
					})

					return Promise.resolve();
				})
				.catch((error) => {
					throw new Error(error)
				})

		},


		/**
		 * updating existing task
		 */
		update(context, payload = { /* payload, update */ }) {
			// Commit changes in store
			context.commit(types.UPDATE_TASK, payload);

			// make API request
			return makeRequest('PUT', api + 'tasks/' + payload.task.id + '/update-task', payload.update)
				.then((response) => {
					return response.data;
					// return Promise.resolve(response.data);
				})
				.catch((error) => {
					return Promise.reject(error);
				});
		},

		/**
		 * remove existing task
		 */
		delete(context, {
			id
		}) {

			makeRequest('DELETE', api + 'tasks/' + id + '/delete-task')
				.then((response) => {
					console.log(response);

					context.commit(types.REMOVE_TASK);

					return Promise.resolve();
				})
		},

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
		 * set work hours
		 * @type {[type]}
		 */
		setWorkHours(context, {
			workHours
		}) {

			makeRequest('PATCH', api + 'tasks/set-workhour', {
					work_hours: workHours
				})
				.then((response) => {
					console.log(response)

					return Promise.resolve()
				})

			// const workHours = workHours
			context.commit(types.SET_WORK_HOURS, {
				workHours
			})
		},

		/**
		 * checkout task
		 * @type {Object}
		 */
		checkoutTask(context, {
			id
		}) {

			makeRequest('PATCH', api + 'tasks/' + id + '/checkout-task', {})
				.then((response) => {
					console.log(response)

					context.commit(types.CHECKOUT_TASK)
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

			return makeRequest('PATCH', api + 'tasks/check-all')
				.then((response) => {
					console.log(response)

					context.commit(types.CHECKOUT_ALL_TASKS)

					return Promise.resolve()
				})
				.catch((error) => {
					throw new Error(error)
				})
		}
	},

	mutations: {

		/**
		 * create task mutation
		 * @type {Boolean}
		 */
        [types.ADD_NEW_TASK](state, payload) {
			state.items = [payload].concat(state.items)
		},

		/**
		 * updating existing task mutation
		 * @type {Boolean}
		 */
        [types.UPDATE_TASK](state, payload) {
			// merge the task and update objects to one object
			payload.task = Object.assign(payload.task, payload.update);
		},

		/**
		 * removing task
		 * @type {Boolean}
		 */
        [types.REMOVE_TASK](state, task) {
			state.items = state.items.filter(item => item.id !== task.id)
		},

		/**
		 * patching priority
		 * @type {Boolean}
		 */
		[types.SET_PRIORITY](state, task) {
			const {
				priority
			} = payload
			state.items.filter(item => item.priority === task.priority)
		},

		/**
		 * set new work hours limit
		 * @type {[type]}
		 */
		[types.SET_WORK_HOURS](state, task) {
			const {
				workHours
			} = task

			state.items.filter(item => item.work_hours === task.work_hours)
		},

		/**
		 * checkout single task mutation
		 * @type {[type]}
		 */
		[types.CHECKOUT_TASK](state, task) {
			state.items.filter(item => item.is_checked === task.is_checked)
		},

		/**
		 * checkout all tasks
		 * @type {[type]}
		 */
		[types.CHECKOUT_ALL_TASKS](state, task) {
			state.items = state.items.filter(item => item.is_checked !== task.is_checked)
		}

	},
	namespaced: true
}


export default task
