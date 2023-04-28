<template>
  <div class="bg-[#fffbfa] relative overflow-hidden">
    <div class="text-center pt-20 absolute w-full max-w-lg animate-pulse">
      scroll down
    </div>
    <!-- <div
      v-if="!withoutGallery"
      class="bg-gradient-to-bl from-blue-300 via-sky-500 to-cyan-300 w-full"
      :style="{ height: '3000px', boxShadow: '0 -60px 34px 70px black' }"
    /> -->
    <Pray />
    <Profile :index="1" :activeSection="activeSection" />
    <Date />
    <!-- <Gallery v-if="!withoutGallery" /> -->
    <!-- <Send v-if="!withoutSend" /> -->
    <Wishes />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, reactive, watch } from "vue"
import Pray from "./Pray.vue"
import Profile from "./Profile.vue"
import Date from "./Date.vue"
import Wishes from "./Wishes.vue"
import Gallery from "./Gallery.vue"
import { Disqus } from "vue-disqus"

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

watch(state, (val) => {
  console.log("barubah", val.activeSection)
})

const calculateSectionOffsets = () => {
  let sections = document.getElementsByTagName("section")
  let length = sections.length

  for (let i = 0; i < length; i++) {
    let sectionOffset = sections[i].offsetTop
    state.offsets.push(sectionOffset)
  }
}

function handleMouseWheel(e) {
  if (e.wheelDelta < 30 && !state.inMove) {
    moveUp()
  } else if (e.wheelDelta > 30 && !state.inMove) {
    moveDown()
  }

  e.preventDefault()
  return false
}

function handleMouseWheelDOM(e) {
  if (e.detail > 0 && !state.inMove) {
    moveUp()
  } else if (e.detail < 0 && !state.inMove) {
    moveDown()
  }

  return false
}

const moveDown = () => {
  state.inMove = true
  state.activeSection--

  if (state.activeSection < 0) state.activeSection = state.offsets.length - 1

  scrollToSection(state.activeSection, true)
}

const moveUp = () => {
  state.inMove = true
  state.activeSection++

  if (state.activeSection > state.offsets.length - 1) state.activeSection = 0

  scrollToSection(state.activeSection, true)
}

const scrollToSection = (id, force = false) => {
  if (state.inMove && !force) return false

  state.activeSection = id
  state.inMove = true

  // get section and scroll into view if it exists
  let section = document.getElementsByTagName("section")[id]
  if (section) {
    document
      .getElementsByTagName("section")
      [id].scrollIntoView({ behavior: "smooth" })
  }

  setTimeout(() => {
    state.inMove = false
  }, state.inMoveDelay)
}

const touchStart = (e) => {
  e.preventDefault()

  state.touchStartY = e.touches[0].clientY
}

const touchMove = (e) => {
  if (state.inMove) return false
  e.preventDefault()

  const currentY = e.touches[0].clientY

  if (state.touchStartY < currentY) {
    moveDown()
  } else {
    moveUp()
  }

  state.touchStartY = 0
  return false
}

onMounted(() => {
  calculateSectionOffsets()

  window.addEventListener("DOMMouseScroll", handleMouseWheelDOM) // Mozilla Firefox
  window.addEventListener("mousewheel", handleMouseWheel, {
    passive: false,
  }) // Other browsers

  window.addEventListener("touchstart", touchStart, { passive: false }) // mobile devices
  window.addEventListener("touchmove", touchMove, { passive: false }) // mobile devices
})

onUnmounted(() => {
  window.removeEventListener("DOMMouseScroll", handleMouseWheelDOM) // Mozilla Firefox
  window.removeEventListener("mousewheel", handleMouseWheel, {
    passive: false,
  }) // Other browsers

  window.removeEventListener("touchstart", touchStart) // mobile devices
  window.removeEventListener("touchmove", touchMove) // mobile devices
})
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
