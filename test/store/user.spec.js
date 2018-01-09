// import Vuex from 'vuex'
import expect from 'expect'

//import {types} from '~/../../store/user.js'

describe('User store', () => {

	/**
	 * |----------------------------------
	 * |	User store action types
	 * |----------------------------------
	 */
	// it.only('has correct action types', () => {
	// 	assertActionType(SET_USER, 'SET_USER')
	// })

	/**
	 *|---------------------------------------
	 *|
	 *|	Helper functions
	 *|
	 *|---------------------------------------
	 */
	 let assertActionType = (type, value) => {
	 	expect(types.type).toContain(value)
	 }
})