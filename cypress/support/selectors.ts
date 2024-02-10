export class Selectors {
	get gifCard() {
		return '[data-cy="gif-card"]'
	}

	get stickerCard() {
		return '[data-cy="sticker-card"]'
	}

	get searchInput() {
		return '[data-cy="search-input"]'
	}

	get searchButton() {
		return '[data-cy="search-button"]'
	}

	get stickersButton() {
		return '.q-btn.non-selectable span:contains("Stickers")'
	}
}
