<template>
  <section
    class="top-0 h-screen flex justify-center items-center bg-white w-full relative"
  >
    <img
      src="/images/envelope.jpg"
      alt="background"
      class="absolute top-0 left-0 w-full h-full"
    />
    <!-- <div class="absolute top-0">
      <img src="/images/flower-top.png" alt="flower_top" />
    </div>
    <div class="absolute bottom-0 left-0">
      <img src="/images/flower-bottom.png" alt="flower_bottom" />
    </div> -->
    <div class="text-center z-10">
      <h1 class="text-sm text-[#d39e5c] font-semibold mr-4">THE WEDDING OF</h1>
      <h2 class="text-6xl mt-10 wedding-font text-[#ab7029]">
        <span class="font-bold tracking-wider"> Dhara </span>
        <br />
        &
        <span class="font-bold tracking-wider"> Panji </span>
      </h2>
      <img
        src="/images/divider1.png"
        alt="divider1"
        class="w-8/12 mx-auto mt-20"
      />
      <div class="w-6/12 mx-auto text-[#e7b06c]">
        <div class="text-2xl font-semibold my-3 text-[#c99b63]">
          05 AGUSTUS, 2023
        </div>
        <hr class="border border-dashed border-[#e7b06c] rounded-full w-full" />
      </div>
      <div class="mt-4 mb-14 font-light text-[#ab7029]">
        <p class="">Kepada</p>
        <h3 class="wedding-font text-5xl font-semibold">{{ participant }}</h3>
        <div class="mt-10 text-sm animate-pulse italic">
          tap layar untuk membuka undangan
        </div>
      </div>
      <img src="/images/divider2.png" alt="divider1" class="w-7/12 mx-auto" />
    </div>
  </section>
</template>

<script setup>
const params = new URLSearchParams(window.location.search)
const participant = params.get("to")?.replace("-", " ") || "Anda"
</script>
