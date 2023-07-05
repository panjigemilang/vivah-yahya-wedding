<template>
  <section
    class="relative h-screen flex justify-center items-center text-center flex-col p-2 md:p-5 lg:p-10 w-full max-w-lg m-auto"
  >
    <div class="content-bg absolute top-0 left-0 w-full h-screen" />
    <div class="w-full">
      <div :class="activeIndex === idx && 'fadeInDown'">
        <div class="relative text-5xl text-[#ab7029] font-bold wedding-font">
          Akad
        </div>
        <div class="mt-14 text-[#2C3A6E]">
          Sabtu, <span class="font-bold"> 26 Agustus 2023 </span>
        </div>
        <div class="text-[#2C3A6E]">
          <span class="font-semibold"> 09:00 </span>
          s.d
          <span class="font-semibold"> Selesai </span>
        </div>
      </div>
      <div :class="activeIndex === idx && 'fadeInDown animation-delay-200'">
        <div
          class="relative mt-10 text-5xl text-[#ab7029] font-bold wedding-font"
        >
          Resepsi
        </div>
        <div class="mt-14 text-[#2C3A6E]">
          Sabtu, <span class="font-bold"> 26 Agustus 2023 </span>
        </div>
        <div class="text-[#2C3A6E]">
          <span class="font-semibold"> 11:00 </span>
          s.d
          <span class="font-semibold"> Selesai </span>
        </div>
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
