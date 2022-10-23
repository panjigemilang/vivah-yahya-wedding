<template>
  <Parallax :configs="prayParallaxConfigs" v-slot="{ values: {
    bismillahOpacity,
    bismillahYPosition,
    salamOpacity,
    salamYPosition,
    maksudOpacity,
    maksudSize,
    separatorOpacity,
  } }">
    <section class="top-0 h-screen flex justify-center items-center text-center flex-col fixed p-10 w-full max-w-[480px] m-auto">
      <div
        class="w-10/12 h-1 absolute top-10 bg-[#ab7029] rounded-lg"
        :style="{
          opacity: separatorOpacity,
          transform: `scale(${separatorOpacity})`
        }"
      />
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
      <div
        class="w-10/12 h-1 absolute bottom-10 bg-[#ab7029] rounded-lg"
        :style="{
          opacity: separatorOpacity,
          transform: `scale(${separatorOpacity})`
        }"
      />
    </section>
  </Parallax>
</template>

<script setup>
import Parallax from './Parallax.vue';
import prayParallaxConfigs from '../configs/pray-parallax';
</script>
