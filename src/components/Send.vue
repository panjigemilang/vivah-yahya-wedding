<template>
  <div class="w-full h-screen flex justify-center items-center">
    <div class="p-7 rounded-3xl border border-[#ab7029]">
      <div class="text-[#ab7029] text-center wedding-font text-5xl">Wedding Gift</div>
      <div class="text-center mt-20 flex justify-center items-center flex-col">
        <div class="font-bold">BRI</div>
        <div>A.n. Haviva Hajaralia Ray</div>
        <div>{{ vivahRek }}</div>
        <button @click="handleCopy(vivahRek)"
          class="active:opacity-20 mt-3 z-20 cursor-pointer px-4 py-2 text-xs rounded-full flex items-center bg-[#ab7029] text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-[20px]">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
          </svg>
          <div class="ml-2 font-semibold">Salin</div>
        </button>
      </div>
      <div class="text-center mt-10 flex justify-center items-center flex-col">
        <div class="font-bold">Mandiri</div>
        <div>A.n. Yahya Sahaja</div>
        <div>{{ yahyaRek }}</div>
        <button @click="handleCopy(yahyaRek)"
          class="active:opacity-20 mt-3 z-20 cursor-pointer px-4 py-2 text-xs rounded-full flex items-center bg-[#ab7029] text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-[20px]">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
          </svg>
          <div class="ml-2 font-semibold">Salin</div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const opened = ref(false);

const vivahRek = 782301004400534;
const yahyaRek = 1390016600912;

const handleCopy = text => {
  window.copyTextToClipboard(text);
}
</script>
