<template>
  <div class="flex gap-5 w-3/5 justify-center">
    <q-input
      class="w-4/5"
      v-model="search"
      filled
      color="secondary"
      :placeholder="`Search for ${useStickers ? 'Stickers' : 'GIFs'}`"
      @keyup.enter="$emit('search', search)"
    />
    <q-btn
      color="secondary"
      label="Search"
      icon="search"
      @click="$emit('search', search)"
    />
    <q-btn-toggle
      @click="$emit('toggle', useStickers)"
      v-model="useStickers"
      push
      glossy
      toggle-color="teal"
      :options="[
          { label: 'Gifs', value: false, slot: 'gifs' },
          { label: 'Stickers', value: true, slot: 'stickers' }
        ]"
    >
      <template v-slot:gifs v-if="useStickers">
        <q-tooltip>Click here to update the list with Gifs!</q-tooltip>
      </template>

      <template v-slot:stickers v-else>
        <q-tooltip>Click here to update the list with Stickers!!</q-tooltip>
      </template>
    </q-btn-toggle>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const useStickers = ref(false)
const search = ref('')
</script>
