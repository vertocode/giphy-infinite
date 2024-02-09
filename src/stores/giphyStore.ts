import { defineStore } from 'pinia'

export const useGiphyStore = defineStore('giphyStore', {
	state: () => ({
		gifs: [],
		totalCount: 0,
		isLoading: false
	}),
	getters: {},
	actions: {
		setGifs(gifs) {
			this.gifs.push(...gifs)
		},
		setTotalCount(count) {
			this.totalCount = count
		},
		setLoading(isLoading) {
			this.isLoading = isLoading
		}
	},
})
