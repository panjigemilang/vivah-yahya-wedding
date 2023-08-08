<template>
  <button
    class="h-8 w-8 fixed bottom-4 right-9 translate-x-1/2 cursor-text rounded-full flex flex-col align-middle items-center z-30 opacity-30"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <span class="text-white"> &copy; </span>
    <div
      class="absolute right-0 bottom-8 bg-white rounded-md p-5 text-xs"
      :class="hover ? 'opacity-100' : 'opacity-0'"
    >
      <a
        href="https://www.freepik.com/free-vector/floral-design-wedding-invitation_4168422.htm#query=flowers&position=6&from_view=search&track=robertav1_2_sidr"
        >Image by rawpixel.com</a
      >
       on Freepik
      <a href="https://www.vecteezy.com/free-vector/flowers"
        >Flowers Vectors by Vecteezy</a
      >
      <a
        href="https://www.flaticon.com/free-icons/wedding"
        title="wedding icons"
        >Wedding icons created by Freepik - Flaticon</a
      >
    </div>
  </button>
</template>

<script setup>
import { ref } from "vue"

const hover = ref(false)
</script>

<style></style>
