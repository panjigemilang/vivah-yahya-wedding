<template>
  <div class="w-full h-screen flex justify-center items-center">
    <button v-if="!opened" @click="handleClick" class="active:opacity-20 z-20 cursor-pointer text-2xl px-10 py-5 bg-[#ab7029] rounded-full flex items-center text-white">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-[30px]">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
      <div class="ml-5 font-semibold">Open Wedding Gift</div>
    </button>
    <div v-else class="p-7 rounded-3xl border border-[#ab7029]">
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

const handleClick = () => {
  opened.value = true;
};

const handleCopy = text => {
  window.copyTextToClipboard(text);
}
</script>
