/**
 * |-------------------------------------------
 * |
 * |	Assertion Helpers
 * |
 * |-------------------------------------------
 */
import expect from 'expect'

/**
 * AssertContains
 * assert a element exists in a component
 */
export const assertContains = (component, selector) => {

	if(!component)
		throw new Error('Could not find your component to assert is has certain element')

	if(!element)
		throw new Error('Could not assert on a empty element in your component')

	expect(component.contains(selector)).toBe(true)
}

/**
 * AssertNotContains
 * Assert a element not exists in a component
 */
export const assertContains = (component, selector) => {

	if(!component)
		throw new Error('Could not find your component to assert is has certain element')

	if(!element)
		throw new Error('Could not assert on a empty element in your component')

	expect(component.contains(selector)).toBe(false)
}

/**
 * Assert html on a component
 * @param  {[type]} component [description]
 * @param  {[type]} html      [description]
 * @return {[type]}           [description]
 */
export const assertHtmlOn = (component, html) => {
	if(!component) 
		throw new Error('Could not assert any html content on a non given component')

	expect(component.html()).toContain(html)
}