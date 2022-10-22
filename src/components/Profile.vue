<template>
  <Parallax :configs="parallaxConfig" v-slot="{ values: {
    bothOpacity,
    vivahTranslateY,
    andOpacity,
    yahyaTranslateY
  } }">
    <section class="top-0 h-screen flex justify-center items-center flex-col fixed p-10 w-full max-w-[480px] m-auto">
      <div
        class="w-full flex justify-center items-center"
        :style="{
          opacity: bothOpacity,
          transform: `translateY(${vivahTranslateY}px)`,
        }"
      >
        <div class="flex justify-center items-center">
          <div class="w-[120px] h-[120px] rounded-full overflow-hidden">
            <img class="object-cover w-full h-full" style="transform: scale(3) translate(-28px, 0px)" src="/images/vivah.jpeg" />
          </div>
        </div>
        <div class="ml-5">
          <div class="text-xl">Havivah Hajaralia Ray</div>
          <div class="mt-3 text-xs">Putri dari Bapak Basir dan Ibu Endang</div>
        </div>
      </div>

      <div
        class="text-5xl font-light wedding-font"
        :style="{
          opacity: andOpacity,
        }"
      >&</div>

      <div
        class="w-full flex justify-center items-center"
        :style="{
          opacity: bothOpacity,
          transform: `translateY(${yahyaTranslateY}px)`,
        }"
      >
        <div class="mr-5 text-right">
          <div class="text-xl">Yahya Sahaja</div>
          <div class="mt-3 text-xs">Putra dari Bapak Tri Agus Haryanto dan Ibu Nursabiha</div>
        </div>
        <div class="flex justify-center items-center">
          <div class="w-[120px] h-[120px] rounded-full overflow-hidden">
            <img class="object-cover w-full h-full" style="transform: scale(2.5) translate(7px, 21px);"
              src="/images/yahya.jpeg" />
          </div>
        </div>
      </div>
    </section>
  </Parallax>
</template>

<script setup>
import Parallax from './Parallax.vue';
import profileParallaxConfigs from '../configs/profile-parallax';

const startingPoint = 4500;
const parallaxConfig = profileParallaxConfigs.map(config => ({
  ...config,
  start: config.start + startingPoint,
  end: config.end + startingPoint,
}))
</script>
