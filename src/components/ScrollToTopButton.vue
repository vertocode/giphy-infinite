<template>
  <q-btn
    v-if="showButton"
    @click="scrollToTop"
    class="fixed top-20 right-10 transition-opacity duration-300 ease-in-out"
    color="secondary"
    icon="arrow_upward"
    round
  >
    <q-tooltip v-model="showingTooltip">Scroll to top</q-tooltip>
  </q-btn>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const showButton = ref(false)
const showingTooltip = ref(false)

const scrollToTop = () => {
	window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleScroll = () => {
	showButton.value = window.scrollY > 100
}

onMounted(() => {
	window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
	window.removeEventListener('scroll', handleScroll)
})
</script>
