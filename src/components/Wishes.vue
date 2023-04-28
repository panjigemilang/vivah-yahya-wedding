<template>
  <section
    class="relative h-screen flex justify-center items-center text-center flex-col p-10 w-full max-w-lg m-auto"
  >
    <div class="content-bg absolute top-0 left-0 w-full h-screen z-0" />
    <div class="mt-5 w-full wedding-font text-5xl text-center text-[#ab7029]">
      Wishes
    </div>
    <div class="mt-10 w-full relative h-[1500px]">
      <div class="w-full z-20 absolute top-0">
        <Disqus
          :lazy="false"
          class="w-full p-10 overflow-y-auto"
          shortname="https-pandha-wedding-netlify-app"
          @ready="handleDisqusReady"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { Disqus } from "vue-disqus"
</script>

<style scoped>
.content-bg {
  background: url("/images/paper.jpg") repeat;
  background-attachment: fixed;
  background-size: 850px;
  background-position: top;
  opacity: 0.2;
}
</style>
