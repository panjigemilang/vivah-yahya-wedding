<template>
  <section
    class="relative h-screen flex justify-center items-center text-center flex-col p-2 md:p-5 lg:p-10 w-full max-w-lg m-auto"
  >
    <div class="content-bg absolute top-0 left-0 w-full h-screen" />
    <div
      class="relative w-full text-sm flex flex-col justify-center items-center text-[#2C3A6E]"
    >
      <div
        class="relative mb-8 text-5xl text-[#ab7029] font-bold wedding-font"
        :class="activeIndex === idx && 'fadeInDown'"
      >
        Lokasi
      </div>
      <p
        class="animate-pulse text-xs italic"
        :class="activeIndex === idx && 'fadeInDown'"
      >
        Ketuk peta di bawah untuk membuka di Google Maps
      </p>
      <div
        class="relative"
        :class="activeIndex === idx && 'fadeIn animation-delay-200'"
      >
        <a
          class="hover:scale-105 transition-all"
          href="https://maps.app.goo.gl/F1c3YEqj1nUAPCbh6?g_st=iw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/location.png" alt="maps" />
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5 lg:w-6 lg:h-6 top-24 left-24 sm:top-32 sm:left-28 md:top-28 lg:left-24 text-[#ab7029] animate-bounce absolute z-20"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      </div>
      <div
        class="mt-2"
        :class="activeIndex === idx && 'fadeInDown animation-delay-500'"
      >
        Gang Imam, Jalan Melanthon Siregar, Pematangsiantar
        <br />
        Sebrang Masjid Nurul Huda
      </div>
    </div>
  </section>
</template>

<script setup>
import { toRefs } from "vue"

const props = defineProps({
  activeIndex: Number,
  idx: Number,
})
const { activeIndex, idx } = toRefs(props)
</script>

<style scoped>
.content-bg {
  background: url("/images/motif2.jpg") repeat;
  background-attachment: fixed;
  background-size: 850px;
  background-position: top;
  opacity: 0.1;
}
</style>
