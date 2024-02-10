import { get } from '../utils/api'
import { useGiphyStore } from 'stores/giphyStore'

export const useGiphyFetch = () => {
	const giphyStore = useGiphyStore()

	const getGifsOrStickers = async (options?: { search?: string }) => {
		if (giphyStore.isLoading) {
			return
		}
		giphyStore.setLoading(true)
		const { search } = options || {}
		const limit = 50
		const offSet = giphyStore.gifsOrStickers.length
		if (!process.env.GIPHY_API_KEY) {
			throw new Error('GIPHY_API_KEY is not set')
		}

		const prefixEndpoint = giphyStore.useStickers ? '/stickers' : '/gifs'
		const endpoint = prefixEndpoint + (search ? '/search' : '/trending')

		const response = await get(endpoint, {
			params: {
				api_key: process.env.GIPHY_API_KEY || '',
				limit,
				offSet,
				...(search ? { q: search } : {})
			}
		})

		giphyStore.setGifsOrStickers(response.data)
		giphyStore.setTotalCount(response.pagination.total_count)
		giphyStore.setLoading(false)
	}

	return { getGifsOrStickers }
}
