<template>
  <main class="max-w-[480px] m-auto" @click="handleClick">
    <component :is="Screen" />
  </main>
</template>

<script setup>
import { computed, ref } from 'vue';
import Envelope from './components/Envelope.vue';
import Content from './components/Content.vue';

const opened = ref(false);
const Screen = computed(() => {
  return opened.value ? Content : Envelope;
});

const handleClick = () => {
  opened.value = true;
};
</script>
