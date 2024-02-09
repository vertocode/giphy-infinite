import { defineStore } from 'pinia'

export const useGiphyStore = defineStore('giphyStore', {
	state: () => ({
		gifsOrStickers: [],
		totalCount: 0,
		isLoading: false,
		search: '',
		useStickers: false
	}),
	getters: {},
	actions: {
		setGifsOrStickers(gifsOrStickers) {
			this.gifsOrStickers.push(...gifsOrStickers)
		},
		setTotalCount(count) {
			this.totalCount = count
		},
		setLoading(isLoading) {
			this.isLoading = isLoading
		},
		setSearch(search) {
			this.search = search
		},
		setUseStickers(useStickers) {
			this.useStickers = useStickers
		}
	},
})
