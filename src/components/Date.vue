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
      <div class="w-full mt-20 text-sm" :style="{
        opacity: bothOpacity,
        transform: `translateY(${akadTranslateX}px)`
      }">
        Pekan Sei Langgei, Bandar Masilam, Kab. Simalungun
        <br />
        Samping Masjid Al Hidayah
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
