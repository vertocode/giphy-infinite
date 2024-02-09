<template>
  <q-page class="row items-baseline mt-10 justify-evenly" style="min-height: 600px;">
    <SearchField @search="searchGifsOrStickers" @toggle="changeType"/>
    <GifList />
  </q-page>
</template>

<script setup lang="ts">
import SearchField from 'components/SearchField.vue'
import GifList from 'components/GifList.vue'
import { useGiphyStore } from 'src/stores/giphyStore'
import { useGiphyFetch } from 'src/composables/useGiphyFetch'

const giphyStore = useGiphyStore()
const { getGifsOrStickers } = useGiphyFetch()

const searchGifsOrStickers = async (search: string) => {
	if (search === giphyStore.search) return

	giphyStore.gifsOrStickers = []
	await getGifsOrStickers({ search })
	giphyStore.setSearch(search)
}

const changeType = async (useStickers: boolean) => {
	if (useStickers === giphyStore.useStickers) return

	giphyStore.gifsOrStickers = []
	giphyStore.setUseStickers(useStickers)
	await getGifsOrStickers({ search: giphyStore.search })
}
</script>
