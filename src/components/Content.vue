<template>
  <section class="bg-[#fffbfa] relative">
    <div class="text-center pt-10 absolute w-full max-w-[480px] blink">scroll down</div>
    <div class="content-bg w-full h-[5000px]"/>
    <div class="content-bg-green w-full h-[4000px]"/>
    <Pray />
    <Profile />
    <Date />
    <Galllery />
    <Send />
  </section>
</template>

<script setup>
import Pray from './Pray.vue';
import Profile from './Profile.vue';
import Date from './Date.vue';
import Send from './Send.vue';
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
</style>
