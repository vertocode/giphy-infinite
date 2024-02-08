<template>
  <q-page class="row items-baseline mt-10 justify-evenly">
    <SearchField />
    <GifList />
  </q-page>
</template>

<script setup lang="ts">
import SearchField from 'components/SearchField.vue'
import GifList from 'components/GifList.vue'
</script>
