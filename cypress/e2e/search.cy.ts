import { Selectors } from 'app/cypress/support/selectors'

const selectors = new Selectors()

describe('Search - Gif & Stickers', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	it('should search for "cat" in Gif list, and check if the result contains an updated list', () => {
		cy.get(selectors.gifCard).should('have.length', 50)
		cy.get(selectors.gifCard).then(($oldGifCards) => {
			cy.get(selectors.searchInput).type('cat')
			cy.get(selectors.searchButton).click()
			cy.get(selectors.gifCard).should('have.length', 50)
			cy.get(selectors.gifCard).should('not.be.eq', $oldGifCards)
		})
	})

	it('should search for "dog" in Stickers list, and check if the result contains an updated list', () => {
		cy.get(selectors.gifCard).should('have.length', 50)
		cy.get(selectors.stickersButton).last().click()
		cy.get(selectors.stickerCard).should('have.length', 50)
		cy.get(selectors.stickerCard).then(($oldStickerCards) => {
			cy.get(selectors.searchInput).type('cat')
			cy.get(selectors.searchButton).click()
			cy.get(selectors.stickerCard).should('have.length', 50)
			cy.get(selectors.stickerCard).should('not.be.eq', $oldStickerCards)
		})
	})
})
