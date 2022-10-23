<template>
  <Parallax :configs="prayParallaxConfigs" v-slot="{ values: {
    bismillahOpacity,
    bismillahYPosition,
    salamOpacity,
    salamYPosition,
    maksudOpacity,
    maksudSize,
  } }">
    <section class="top-0 h-screen flex justify-center items-center text-center flex-col fixed p-10 w-full max-w-[480px] m-auto">
      <h3 :style="{
        opacity: bismillahOpacity,
        transform: `translateY(${bismillahYPosition}px)`
      }" class="text-3xl absolute p-5 text-[#ab7029]">
        بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
      </h3>
      <div :style="{
        opacity: salamOpacity,
        transform: `translateY(${salamYPosition}px)`
      }" class="w-[300px] absolute p-5">Assalamu'alaikkum Warahmatullahi Wabarakatuh</div>
      <div :style="{
        opacity: maksudOpacity,
        transform: `scale(${maksudSize})`
      }" class="w-[300px] absolute p-5">Dengan memohon Rahmat dan Ridho Allah SWT, kami bermaksud menyelenggarakan resepsi
        pernikahan putra putri kami</div>
    </section>
  </Parallax>
</template>

<script setup>
import Parallax from './Parallax.vue';
import prayParallaxConfigs from '../configs/pray-parallax';
</script>
