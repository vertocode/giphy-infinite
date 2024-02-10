import { defineStore, StoreDefinition } from 'pinia'
import type { GiphyObject } from 'src/types/giphy'

interface GiphyStore {
  gifsOrStickers: GiphyObject[]
  totalCount: number
  isLoading: boolean
  search: string
  useStickers: boolean
}

export const useGiphyStore: StoreDefinition = defineStore('giphyStore', {
	state: (): GiphyStore => ({
		gifsOrStickers: [],
		totalCount: 0,
		isLoading: false,
		search: '',
		useStickers: false
	}),
	getters: {},
	actions: {
		setGifsOrStickers(gifsOrStickers: GiphyObject[]) {
			this.gifsOrStickers.push(...gifsOrStickers)
		},
		setTotalCount(count: number) {
			this.totalCount = count
		},
		setLoading(isLoading: boolean) {
			this.isLoading = isLoading
		},
		setSearch(search: string) {
			this.search = search
		},
		setUseStickers(useStickers: boolean) {
			this.useStickers = useStickers
		}
	}
})
