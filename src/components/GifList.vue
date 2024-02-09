<template>
  <GifDetailModal :gif="gitDetailsModal" @close="gitDetailsModal = null"/>
  <main class="mt-8 flex gap-2 w-full px-10 justify-between items-center">
    <div
      v-for="gif in gifs" :key="gif.id"
      class="bg-secondary cursor-pointer"
      @click="gitDetailsModal = gif"
    >
      <q-img :src="gif.images.original.url" class="w-12 w-52" />
    </div>
  </main>
  <div class="flex justify-center items-center h-96" v-if="isLoading">
    <q-spinner color="secondary" size="100px" />
  </div>
</template>

<script setup lang="ts">
import { useGiphyFetch } from 'src/composables/useGiphyFetch'
import { onMounted, computed, onBeforeUnmount, ref } from 'vue'
import { useGiphyStore } from 'src/stores/giphyStore'
import GifDetailModal from 'components/GifDetailModal.vue'

const { getGifs } = useGiphyFetch()
const giphyStore = useGiphyStore()

const gitDetailsModal = ref(null)

const gifs = computed(() => giphyStore.gifs)
const isLoading = computed(() => giphyStore.isLoading)

const handleScroll = async () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const bodyHeight = document.body.offsetHeight;

  // Check if the scroll is almost in the end (95% of the page) and if is not in loading to add more items in the list
  if ((scrollY + windowHeight >= bodyHeight * 0.95) && !isLoading.value) {
    await getGifs()
  }
}

onMounted(async () => {
  await getGifs()
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
