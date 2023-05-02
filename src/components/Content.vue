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
      @load="onSlideChange"
      @scroll="onSlideChange"
      @touchstart="onSlideChange"
    >
      <swiper-slide>
        <Pray :active-index="activeIndex" :idx="0" />
      </swiper-slide>
      <swiper-slide>
        <Profile :active-index="activeIndex" :idx="1" />
      </swiper-slide>
      <swiper-slide>
        <Date :active-index="activeIndex" :idx="2" />
      </swiper-slide>
      <swiper-slide>
        <Location :active-index="activeIndex" :idx="3" />
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
import { ref } from "vue"
import Pray from "./Pray.vue"
import Profile from "./Profile.vue"
import Date from "./Date.vue"
import Wishes from "./Wishes.vue"
import Gallery from "./Gallery.vue"
import Location from "./Location.vue"

export default {
  components: {
    Pray,
    Profile,
    Date,
    Wishes,
    Gallery,
    Location,
  },
  setup() {
    const params = new URLSearchParams(window.location.search)
    const withoutGallery = ref(params.get("without-gallery") === "yes")
    const withoutSend = ref(params.get("without-send") === "yes")
    const activeIndex = ref()
    const onSlideChange = () => {
      activeIndex.value = document.querySelector(
        ".swiper-initialized"
      )?.swiper.activeIndex
    }

    return {
      onSlideChange,
      activeIndex,
    }
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
