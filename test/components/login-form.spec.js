import {mount} from 'vue-test-utils'
import expect from 'expect'
import Auth from '~/../../components/auth/login-form.vue'

// import Assert from '../assertions.js'

describe('Authentication form component', () => {

	let assert, auth

	beforeEach(() => {
		assert = new Assert(Auth)
		auth = mount(Auth)
		auth.setData({
			error: false,
			username: '',
			password: '',
			message: '',
		})
	})

	it('exists', () => {
		expect(auth.isEmpty()).toBe(false)
	})

	it('contains name of loginForm', () => {
		expect(auth.name()).toBe('loginForm')
	})

	it('contains username field', () => {
		expect(auth.contains('input[name=username]')).toBe(true)
	})

	it('contains password field', () => {
		expect(auth.contains('input[name=password]')).toBe(true)
	})

	it('contains submit button', () => {
		expect(auth.contains('input[type=submit]')).toBe(true)
	})

	it('shows error message on invalid credentials', () => {

		// expect(auth.find('login-container__error').exists()).toBe(false)

		triggerInputEventOn('input[name=username]', '')
		triggerInputEventOn('input[name=password]', '')
		triggerClickEventOn('input[type=submit]')

		auth.setData({
			error: true
		})

		// auth.vm.$nextTick(() => {
			expect(auth.vm.message).toContain('Something is wrong with your credentials')
		// })

	})

	let triggerClickEventOn = (selector) => {
		auth.find(selector).trigger('click')
	}

	let triggerInputEventOn = (selector, value) => {
		let elm = selector ? auth.find(selector) : auth

		elm.element.value = value
		elm.trigger('input')
	}

})