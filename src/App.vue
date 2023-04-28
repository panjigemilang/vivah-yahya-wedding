<template>
  <main class="relative max-w-lg m-auto" @click="handleClick">
    <component :is="Screen" />
    <Audio :opened="opened" />
  </main>
</template>

<script setup>
import { computed, ref } from "vue"
import Audio from "./components/Audio.vue"
import Envelope from "./components/Envelope.vue"
import Content from "./components/Content.vue"

const opened = ref(false)
const Screen = computed(() => {
  return opened.value ? Content : Envelope
})

const handleClick = () => {
  opened.value = true
}
</script>
