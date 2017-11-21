import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import user from './user'
import search from './search'

const plugins = []

// if(process.env.VUE_ENV === 'client') {

// }

const createStore = () => new Vuex.Store({
	modules: {
		user,
		search
	},
	plugins: [
		createPersistedState({
			key: 'taskly',
			paths: ['user', 'search']
		})
	],
});

export default createStore
