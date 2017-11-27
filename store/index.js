import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import user from './user'
import search from './search',
import tasklist from './tasklist'
import task from './task'

const plugins = []

// if(process.env.VUE_ENV === 'client') {

// }

const createStore = () => new Vuex.Store({
	modules: {
		user,
		search,
		tasklist
		task
	},
	plugins: [
		createPersistedState({
			key: 'taskly',
			paths: [
				'user',
				'search',
				'tasklist',
				'task'
			]
		})
	],
});

export default createStore
