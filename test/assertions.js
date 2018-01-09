/**
 * |-------------------------------------------
 * |
 * |	Assertion Helpers
 * |
 * |-------------------------------------------
 */
import expect from 'expect'

export default class Assert {
	constructor(component){
		this.component = component
	}

	true(statement) {
		expect(statement).toBe(true)
	}

	false(statement) {
		expect(statement).toBe(false)
	}

	contains(selector) {
		if(!this.component)
			throw new Error('Could not find your component to assert is has certain element')

		if(!element)
			throw new Error('Could not assert on a empty element in your component')

		expect(this.component.contains(selector)).toBe(true)
	}

	notContains(selector) {
		if(!this.component)
			throw new Error('Could not find your component to assert is has certain element')

		if(!element)
			throw new Error('Could not assert on a empty element in your component')

		expect(this.component.contains(selector)).toBe(false)
	}

	html(html) {
		if(!this.component) 
			throw new Error('Could not assert any html content on a non given component')

		expect(this.component.html()).toContain(html)
	}

	exists(element) {
		expect(this.component.find(element).exists()).toBe(true)
	}

	notExists(element) {
		expect(this.component.find(element).exists()).toBe(false)
	}

	tick(callback, done) {
		this.component.vm.$nextTick(() => {
			try {
				callback()

				done()
			} catch(e) {
				done(e)
			}
		})
	}
}