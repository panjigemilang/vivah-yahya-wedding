<template>
  <button
    class="h-8 w-8 fixed top-12 right-9 translate-x-1/2 cursor-pointer rounded-full border-2 flex items-center"
    :class="state.audioPaused ? 'border-gray-300' : 'border-green-400'"
    @click="playPause"
    v-if="opened"
  >
    <h1
      class="text-green-500 justify-center w-full"
      :class="state.audioPaused ? 'text-gray-300' : 'text-green-400'"
    >
      ♫
    </h1>
    <div
      class="w-4/5 absolute border border-gray-400 -rotate-45 -translate-x-1/2 left-1/2"
      v-if="state.audioPaused"
    ></div>
  </button>
  <audio ref="audioTag" class="hidden">
    <source src="/musics/syukron.mp4" type="audio/mpeg" />
    Your browser does not support the audio element.
  </audio>
</template>

<script setup>
import { reactive, ref, toRefs, watch } from "vue"

const props = defineProps({
  opened: Boolean,
})
const { opened } = toRefs(props)
const audioTag = ref(null)
const state = reactive({ audioPaused: false })

const playPause = () => {
  if (audioTag.value?.paused) {
    audioTag.value.play()
    state.audioPaused = false
  } else {
    audioTag.value?.pause()
    state.audioPaused = true
  }
}

watch(
  opened,
  () => {
    audioTag.value.volume = 0.1
    audioTag.value?.play()
  },
  { deep: true }
)
</script>

<style></style>
