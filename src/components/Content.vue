<template>
  <div class="bg-[#fffbfa] relative overflow-hidden">
    <!-- <div
      v-if="!withoutGallery"
      class="bg-gradient-to-bl from-blue-300 via-sky-500 to-cyan-300 w-full"
      :style="{ height: '3000px', boxShadow: '0 -60px 34px 70px black' }"
    /> -->
    <swiper-container
      :slides-per-view="1"
      :mousewheel="true"
      :pagination="{
        type: 'progressbar',
      }"
      ref="swiper"
    >
      <swiper-slide>
        <Pray />
      </swiper-slide>
      <swiper-slide>
        <Profile />
      </swiper-slide>
      <swiper-slide>
        <Date />
      </swiper-slide>
      <swiper-slide>
        <Wishes />
      </swiper-slide>
    </swiper-container>
    <!-- <Gallery v-if="!withoutGallery" /> -->
    <!-- <Send v-if="!withoutSend" /> -->
  </div>
</template>

<script>
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle"
// register Swiper custom elements
register()
import { ref, onMounted, onUnmounted, reactive } from "vue"
import Pray from "./Pray.vue"
import Profile from "./Profile.vue"
import Date from "./Date.vue"
import Wishes from "./Wishes.vue"
import Gallery from "./Gallery.vue"

export default {
  components: {
    Pray,
    Profile,
    Date,
    Wishes,
    Gallery,
  },
  setup() {
    const params = new URLSearchParams(window.location.search)
    const withoutGallery = ref(params.get("without-gallery") === "yes")
    const withoutSend = ref(params.get("without-send") === "yes")
    const state = reactive({
      inMove: false,
      inMoveDelay: 400,
      activeSection: 0,
      offsets: [],
      touchStartY: 0,
    })
  },
}
</script>

<style>
@supports (-webkit-overflow-scrolling: touch) {
  .content-bg {
    background: #fef4f3;
  }
  .content-bg-green {
    background: white;
  }
}
</style>
