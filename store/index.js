import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import user from './user'

const plugins = []

// if(process.env.VUE_ENV === 'client') {
	
// }

const createStore = () => new Vuex.Store({
	modules: {
		user
	},
	plugins: [
		createPersistedState({
			key: 'taskly',
			paths: ['user']
		})
	],
});

export default createStore