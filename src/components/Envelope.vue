<template>
  <section class="top-0 h-screen flex justify-center items-center bg-white w-full relative">
    <div class="absolute bottom-0 left-0">
      <img class="w-[250px]" src="/images/flower-2.jpeg"/>
    </div>
    <div class="absolute top-0">
      <img class="w-[250px]" src="/images/flower-3.jpg"/>
    </div>
    <div class="text-center z-10">
      <h1 class="text-2xl">Undangan Pernikahan</h1>
      <h2 class="text-5xl mt-10 wedding-font text-[#ab7029]">Vivah & Yahya</h2>
      <div class="mt-20">4 - 5 November 2022</div>
      <div class="mt-10 text-sm font-light">Kepada</div>
      <h3 class="mt-1 font-bold">{{ participant }}</h3>
      <div class="mt-10 text-xs blink">tap layar untuk membuka undangan</div>
    </div>
  </section>
</template>

<script setup>
const params = new URLSearchParams(window.location.search);
const participant = params.get('to') || 'Anda'
</script>
