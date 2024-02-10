<template>
  <q-dialog :model-value="show" @hide="show = false">
    <q-card>
      <q-card-section class="bg-secondary text-center">
        <q-icon
          name="close"
          class="text-2xl absolute top-2 right-2 cursor-pointer text-white"
          @click="show = false"
        />
        <h3 class="text-slate-50 text-2xl text-bold text-wrap mt-6">{{ gif?.title }}</h3>
        <div class="column items-center">
          <q-img class="w-52 sm:w-96 mt-3 mx-auto" :src="gif?.images?.original?.url" />
          <q-btn
            class="bg-slate-200 w-52 sm:w-96"
            label="Download"
            @click="download"
          />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { GiphyObject } from 'src/types/giphy'

const show = ref(false)

interface Props {
  gif: GiphyObject | null
}

const props = defineProps<Props>()
const emits = defineEmits(['close'])

const download = () => {
	const gifUrl = props.gif?.images?.original?.url

	if (gifUrl) {
		fetch(gifUrl)
			.then(response => response.blob())
			.then(blob => {
				const blobUrl = URL.createObjectURL(blob)

				const link = document.createElement('a')
				link.href = blobUrl
				link.download = props.gif?.title.replaceAll(' ', '_').toLowerCase() + '.gif'

				document.body.appendChild(link)
				link.click()

				document.body.removeChild(link)
				URL.revokeObjectURL(blobUrl)
			})
			.catch(error => {
				console.error('Error downloading:', error)
			})
	}
}

watch(() => show.value,() => {
	if (!show.value) {
		emits('close')
	}
})

watch(() => props.gif, () => {
	if (props.gif) {
		show.value = true
	}
})
</script>
