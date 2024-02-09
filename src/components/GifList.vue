<template>
  <GifDetailModal :gif="gitDetailsModal" @close="gitDetailsModal = null"/>
  <main
    v-if="gifsOrStickers.length"
    class="mt-8 flex gap-2 w-full px-5 justify-center items-center"
  >
    <div
      v-for="gifOrSticker in gifsOrStickers" :key="gifOrSticker.id"
      class="bg-secondary cursor-pointer"
      @click="gitDetailsModal = gifOrSticker"
    >
      <q-img :src="gifOrSticker.images.original.url" class="w-12 w-52" />
    </div>
  </main>
  <div class="w-full text-center" v-else-if="!isLoading">
    <h2 class="text-bold text-2xl">Items not found according to your search criteria.</h2>
    <p class="mt-5">Try change your search, or clear it.</p>
    <q-img src="src/assets/404.gif" class="w-12 w-52" />
  </div>
  <div class="flex justify-center items-center h-96 w-full" v-if="isLoading">
    <q-spinner color="secondary" size="100px" />
  </div>
</template>

<script setup lang="ts">
import { useGiphyFetch } from 'src/composables/useGiphyFetch'
import { onMounted, computed, onBeforeUnmount, ref } from 'vue'
import { useGiphyStore } from 'src/stores/giphyStore'
import GifDetailModal from 'components/GifDetailModal.vue'

const { getGifsOrStickers } = useGiphyFetch()
const giphyStore = useGiphyStore()

const gitDetailsModal = ref(null)

const gifsOrStickers = computed(() => giphyStore.gifsOrStickers)
const isLoading = computed(() => giphyStore.isLoading)

const handleScroll = async () => {
	if (isLoading.value || !gifsOrStickers.value.length) return
	const scrollY = window.scrollY
	const windowHeight = window.innerHeight
	const bodyHeight = document.body.offsetHeight

	// Check if the scroll is almost in the end (95% of the page) and if is not in loading to add more items in the list
	if ((scrollY + windowHeight >= bodyHeight * 0.95) && !isLoading.value) {
		await getGifsOrStickers({ search: giphyStore.search })
	}
}

onMounted(async () => {
	await getGifsOrStickers()
	window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
	window.removeEventListener('scroll', handleScroll)
})
</script>

