<template>
  <section class="bg-[#fffbfa] relative">
    <div class="text-center pt-10 absolute w-full max-w-[480px] blink">scroll down</div>
    <div class="content-bg w-full h-[5000px]"/>
    <div class="content-bg-green w-full" :class="`h-[${withGallery ? 8000 : 4000}px]`" />
    <Pray />
    <Profile />
    <Date />
    <Galllery v-if="withGallery" />
    <Send />
  </section>
</template>

<script setup>
import { ref } from 'vue';
import Pray from './Pray.vue';
import Profile from './Profile.vue';
import Date from './Date.vue';
import Send from './Send.vue';
import Galllery from './Gallery.vue';

const params = new URLSearchParams(window.location.search);
const withGallery = ref(params.get('with-gallery') === 'yes');
</script>

<style>
.content-bg {
  background: url('/images/leaf-pink.jpeg') repeat;
  background-attachment: fixed;
  opacity: .1;
}
.content-bg-green {
  background: url('/images/leaf.jpeg') repeat;
  background-attachment: fixed;
  opacity: .1;
}
@supports (-webkit-overflow-scrolling: touch) {
  .content-bg {
    background: #fef4f3;
  }
  .content-bg-green {
    background: #fef4f3
  }
}
</style>
