<template>
  <div class="flex gap-5 w-3/5 justify-center">
    <q-input
      class="w-4/5"
      v-model="search"
      filled
      color="secondary"
      placeholder="Search for GIFs"
      @keyup.enter="searchGifs"
    />
    <q-btn
      color="secondary"
      label="Search"
      icon="search"
      @click="searchGifs"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const search = ref('')

const searchGifs = () => {
  console.log(search.value)
}
</script>
