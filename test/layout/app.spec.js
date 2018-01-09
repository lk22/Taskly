import { mount } from 'vue-test-utils'
import expect from 'expect'

import App from '~/../../layouts/app.vue'

describe('App layout', () => {

	let app

	beforeEach(() => {
		app = mount(App)
	})

	it('contains app wrapper', () => {
		expectMarkup('.app')
	})

	it('contains sidebar component', () => {
		expectMarkup('.taskly-sidebar')
	})

	let expectMarkup = (markup) => {
		expect(
			app.contains(markup)
		).toBe(true)
	}

})