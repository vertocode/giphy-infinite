<template>
  <div class="flex gap-5 w-full sm:w-3/5 justify-center mx-2">
    <div class="w-full flex gap-5 mx-3 justify-center">
      <q-input
        data-cy="search-input"
        class="w-3/5"
        v-model="search"
        filled
        color="secondary"
        :placeholder="`Search for ${useStickers ? 'Stickers' : 'GIFs'}`"
        @keyup.enter="$emit('search', search)"
      />
      <q-btn
        data-cy="search-button"
        color="secondary"
        label="Search"
        icon="search"
        @click="$emit('search', search)"
      />
    </div>
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

const useStickers = ref<boolean>(false)
const search = ref<string>('')
</script>
