<template>
  <Parallax :configs="parallaxConfig" v-slot="{ values: {
    bothOpacity,
    akadTranslateX,
    resepsiTranslateX,
  } }">
    <section
      class="top-0 h-screen flex justify-center items-center text-center flex-col fixed p-10 w-full max-w-[480px] m-auto">
      <div class="w-full" :style="{
        opacity: bothOpacity,
        transform: `translateX(${akadTranslateX}px)`
      }">
        <div class="text-5xl text-[#ab7029] font-bold wedding-font">Akad</div>
        <div class="mt-10">Jumat, 4 November 2022</div>
        <div>08:00 s.d Selesai</div>
      </div>
      <div class="w-full mt-16" :style="{
        opacity: bothOpacity,
        transform: `translateX(${resepsiTranslateX}px)`
      }">
        <div class="text-5xl text-[#ab7029] font-bold wedding-font">Resepsi</div>
        <div class="mt-16">Sabtu, 5 November 2022</div>
        <div>08:00 s.d Selesai</div>
      </div>
      <div class="w-full mt-20 text-sm flex justify-center items-center flex-col" :style="{
        opacity: bothOpacity,
        transform: `translateY(${akadTranslateX}px)`
      }">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-[#ab7029]">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>

        <div class="mt-2">
          Pekan Sei Langgei, Bandar Masilam, Kab. Simalungun
          <br />
          Samping Masjid Al Hidayah
        </div>
      </div>
    </section>
  </Parallax>
</template>

<script setup>
import Parallax from './Parallax.vue';
import dateParallaxConfigs from '../configs/date-parallax';

const startingPoint = 2800;
const parallaxConfig = dateParallaxConfigs.map(config => ({
  ...config,
  start: config.start + startingPoint,
  end: config.end + startingPoint,
}))
</script>
