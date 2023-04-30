<template>
  <section
    class="relative h-screen flex justify-center items-center text-center flex-col p-10 w-full max-w-lg m-auto"
  >
    <div class="content-bg absolute top-0 left-0 w-full h-screen" />
    <div class="w-full">
      <div class="relative text-5xl text-[#ab7029] font-bold wedding-font">
        Akad
      </div>
      <div class="mt-14 text-[#2C3A6E]">
        Sabtu, <span class="font-bold"> 5 Agustus 2023 </span>
      </div>
      <div class="text-[#2C3A6E]">
        <span class="font-semibold"> 08:00 </span>
        s.d
        <span class="font-semibold"> 10:00 </span>
      </div>
      <div
        class="relative mt-10 text-5xl text-[#ab7029] font-bold wedding-font"
      >
        Resepsi
      </div>
      <div class="mt-14 text-[#2C3A6E]">
        Sabtu, <span class="font-bold"> 5 Agustus 2023 </span>
      </div>
      <div class="text-[#2C3A6E]">
        <span class="font-semibold"> 10:00 </span>
        s.d
        <span class="font-semibold"> Selesai </span>
      </div>
    </div>
    <div class="w-full mt-20 text-sm flex justify-center items-center flex-col">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 text-[#ab7029] animate-bounce"
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

      <div class="mt-2 text-[#2C3A6E]">
        Gang Imam, Jalan Melanthon Siregar, Pematangsiantar
        <br />
        Sebrang Masjid Nurul Huda
      </div>
    </div>
  </section>
</template>

<style scoped>
.content-bg {
  background: url("/images/motif2.jpg") repeat;
  background-attachment: fixed;
  background-size: 850px;
  background-position: top;
  opacity: 0.1;
}
</style>
