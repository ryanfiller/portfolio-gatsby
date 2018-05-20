import { breaks } from '../../src/config/config';


describe('Check Elements Inside Header', function() {
	it('Check Logo', function() {
		cy.visit('http://localhost:8000/')
		cy.get('.rf-logo')
		.should('have.attr', 'href', '/')
	})

	it('Check Nav', function() {
		cy.get('.nav')
		.children('.nav__link')
		.should('have.attr', 'href')
	})

	it('Check Mobile Navicon', function() {
		cy.viewport(breaks.tablet, breaks.tablet)
		.get('.navicon')
	})

	it('Check Off Canvas', function() {
		cy.get('.nav')
		.children('#contact').click()
		.wrap('.site.open')
	})

	it('Check Off Canvas Mobile', function() {
		cy.viewport(breaks.tablet, breaks.tablet)
		.get('.navicon').click()
		.wrap('.site.open')
	})
})