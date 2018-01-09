import {mount} from 'vue-test-utils'
import expect from 'expect'
import Auth from '~/../../components/auth/login-form.vue'

describe('Authentication form component', () => {

	let auth

	it('contains username field', () => {
		auth = mount(Auth)

		assertContains(auth, 'input[name=username')
	})

	it('contains password field', () => {
		auth = mount(Auth)

		assertContains(auth, 'input[name=password]')
	})

	it.only('contains submit button', () => {
		auth = mount(Auth)

		assertContains(auth, 'input[type=submit]')
	})

	it('shows error message on invalid credentials', () => {
		auth = mount(Auth)

		triggerInputEventOn('input[name=username]', '')
		triggerInputEventOn('input[name=password]', '')
		triggerClickEventOn('input.auth-btn')

		console.log(auth.vm.$options)

		// expect(auth.vm.error).toContain('Something is wrong with your credentials please double check and try again')
	})

	let assertContains = (component, selector) => {
		expect(component.contains(selector)).toBe(true)
	}

	let assertNotContains = (component, selector) => {
		expect(component.contains(selector)).toBe(false)
	}

	let triggerClickEventOn = (selector) => {
		auth.find(selector).trigger('click')
	}

	let triggerInputEventOn = (selector, value) => {
		let elm = selector ? auth.find(selector) : auth

		elm.element.value = value
		elm.trigger('input')
	}

})