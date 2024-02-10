import { Selectors } from 'app/cypress/support/selectors'

const selectors = new Selectors()

describe('Infinite scroll', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	it('should load more gifs when scrolling down', () => {
		cy.get(selectors.gifCard).should('have.length', 50)
		cy.scrollTo('bottom')
		cy.get(selectors.gifCard).should('have.length', 100)
		cy.scrollTo('bottom')
		cy.get(selectors.gifCard).should('have.length', 150)
	})

	it('should load more stickers when scrolling down', () => {
		cy.get(selectors.stickersButton).last().click()
		cy.get(selectors.stickerCard).should('have.length', 50)
		cy.scrollTo('bottom')
		cy.get(selectors.stickerCard).should('have.length', 100)
		cy.scrollTo('bottom')
		cy.get(selectors.stickerCard).should('have.length', 150)
	})
})
