<template>
  <main class="max-w-[480px] m-auto" @click="handleClick">
    <component :is="Screen" />
  </main>

  <audio class="hidden" controls ref="audioTag">
    <source src="/musics/audio.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
</template>

<script setup>
import { computed, ref } from 'vue';
import Envelope from './components/Envelope.vue';
import Content from './components/Content.vue';

const opened = ref(false);
const Screen = computed(() => {
  return opened.value ? Content : Envelope;
});

const audioTag = ref(null);

const handleClick = () => {
  opened.value = true;
  audioTag.value?.play();
};
</script>
