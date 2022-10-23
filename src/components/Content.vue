<template>
  <section class="bg-[#fffbfa] relative overflow-hidden">
    <div class="text-center pt-20 absolute w-full max-w-[480px] blink">scroll down</div>
    <div class="content-bg w-full h-[2200px]"/>
    <div class="content-bg-green w-full" :style="{ height: '2000px'}" />
    <div v-if="withGallery" class="bg-black w-full" :style="{ height: '3000px', boxShadow: '0 -60px 34px 70px black'}" />
    <Pray />
    <Profile />
    <Date />
    <Galllery v-if="withGallery" />
    <Send />
    <div class="mt-20 w-full wedding-font text-5xl text-center text-[#ab7029]">
      Wishes
    </div>
    <div class="mt-10 w-full relative h-[600px] overflow-hidden">
      <div class="w-full z-20 absolute bottom-0" style="transform: translateY(-10rem);">
        <Disqus class="w-full p-10" shortname="https-vivah-yahya-netlify-app" @ready="handleDisqusReady" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import Pray from './Pray.vue';
import Profile from './Profile.vue';
import Date from './Date.vue';
import Send from './Send.vue';
import Galllery from './Gallery.vue';
import { Disqus } from 'vue-disqus';

const params = new URLSearchParams(window.location.search);
const withGallery = ref(params.get('with-gallery') === 'yes');

const handleDisqusReady = e => {
  console.log(e);
  console.log(document.querySelector('iframe[title="Disqus"]'))
}
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
    background: white;
  }
}
</style>
