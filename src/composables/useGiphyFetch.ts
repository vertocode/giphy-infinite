import { get } from '../utils/api'
import { useGiphyStore } from 'stores/giphyStore'

export const useGiphyFetch = () => {
	const giphyStore = useGiphyStore()

	const getGifs = async (options?: { search?: string }) => {
		if (giphyStore.isLoading) {
			return
		}
		giphyStore.setLoading(true)
		const { search } = options || {}
		const limit = 50
		const offSet = giphyStore.gifs.length
		if (!process.env.GIPHY_API_KEY) {
			throw new Error('GIPHY_API_KEY is not set')
		}
		const response = await get('/gifs/trending', {
			params: {
				api_key: process.env.GIPHY_API_KEY || '',
				limit,
				offSet
			}
		})
		console.log('>>> response', response)

		giphyStore.setGifs(response.data)
		if (!search) {
			giphyStore.setTotalCount(response.pagination.total_count)
		}
		giphyStore.setLoading(false)
	}

	return { getGifs }
}
