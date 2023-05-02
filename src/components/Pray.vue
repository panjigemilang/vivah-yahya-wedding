<template>
  <section
    class="relative h-screen flex justify-center items-center text-center flex-col p-2 md:p-5 lg:p-10 w-full max-w-lg m-auto"
  >
    <div class="content-bg absolute top-0 left-0 w-full h-screen z-0" />
    <div
      class="text-center pt-20 absolute bottom-14 w-full max-w-lg animate-pulse text-[#2C3A6E]"
    >
      Geser ke kanan →
    </div>
    <div class="relative w-10/12">
      <img
        src="/images/flower-line.png"
        alt="flower_line"
        class="rotate-180 flying"
      />
    </div>
    <div>
      <h3
        class="text-3xl p-5 text-[#ab7029]"
        :class="activeIndex === idx && 'fadeInDown'"
      >
        بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
      </h3>
      <div
        class="w-[300px] text-[#2C3A6E] p-5 font-semibold z-10"
        :class="activeIndex === idx && 'fadeInDown animation-delay-200'"
      >
        Assalamu'alaikum Warahmatullahi Wabarakatuh
      </div>
      <div
        class="w-[300px] text-[#2C3A6E] p-5 z-10"
        :class="activeIndex === idx && 'fadeInDown animation-delay-500'"
      >
        Atas berkat Rahmat Allah Subhanahu wa ta'ala serta tidak lupa kami
        mengucapkan shalawat serta salam kepada rasul junjungan kita nabi
        Muhammad Shalallahu 'alaihi wassalam
        <br />
        <br />
        kami bermaksud menyelenggarakan resepsi pernikahan putra putri kami
      </div>
    </div>
    <div class="w-10/12">
      <img src="/images/flower-line.png" alt="flower_line" class="shake" />
    </div>
  </section>
</template>

<script setup>
import { toRefs } from "vue"

const props = defineProps({
  activeIndex: Number,
  idx: Number,
})
const { activeIndex, idx } = toRefs(props)
</script>

<style scoped>
.content-bg {
  background: url("/images/motif1.jpg") repeat;
  background-attachment: fixed;
  background-size: 850px;
  background-position: top;
  opacity: 0.2;
}

.flying {
  /* animation: fly 5s forwards infinite; */
  animation: flyAbsolute 5s linear infinite;
  position: absolute;
  top: -50px;
  left: 0;
  rotate: -5deg;
}
.shake {
  animation: shake 2s cubic-bezier(0.36, 0.07, 0.19, 0.97) both infinite;
  transform: translate3d(0, 0, 0) rotate(0deg);
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0) rotate(3deg);
  }
  20%,
  80% {
    transform: translate3d(2px, 0, 0) rotate(-1deg);
  }
  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0) rotate(2deg);
  }
  40%,
  60% {
    transform: translate3d(4px, 0, 0) rotate(0deg);
  }
}

@keyframes flyAbsolute {
  6.25% {
    top: -45px;
    left: -20px;
    rotate: -5deg;
  }
  12.5% {
    top: -40px;
    left: -28px;
    rotate: -7deg;
  }
  18.75% {
    top: -43px;
    left: -36px;
    rotate: 0deg;
  }
  25% {
    top: -50px;
    left: -40px;
    rotate: 3deg;
  }
  31.25% {
    top: -54px;
    left: -36px;
  }
  37.5% {
    top: -57px;
    left: -28px;
    rotate: 5deg;
  }
  43.75% {
    top: -55px;
    left: -20px;
  }

  50% {
    top: -43px;
    left: 20px;
    rotate: 3deg;
  }
  56.25% {
    top: -40px;
    left: 28px;
  }
  62.5% {
    top: -45px;
    left: 36px;
    rotate: 2deg;
  }
  68.75% {
    top: -50px;
    left: 42px;
    rotate: 0deg;
  }
  75% {
    top: -55px;
    left: 36px;
    rotate: -2deg;
  }
  81.25% {
    top: -58px;
    left: 28px;
  }
  87.5% {
    top: -56px;
    left: 20px;
    rotate: -5deg;
  }
  93.75% {
    top: -52px;
    left: 5px;
  }
}

@keyframes fly {
  0%,
  100% {
    transition-timing-function: cubic-bezier(0.3, 0.27, 0.07, 1.64);
    transform: translate(0) rotate(0);
  }

  5% {
    transition-timing-function: ease-in-out;
    transform: translate(-24px, -8px) rotate(-15deg);
  }

  15% {
    transition-timing-function: cubic-bezier(0.3, 0.27, 0.07, 1.64);
    transform: translate(-36px, -26px) rotate(-11deg);
  }

  35% {
    transition-timing-function: ease-in-out;
    transform: translate(-16px, -16px) rotate(-5deg);
  }

  55% {
    transition-timing-function: ease-in-out;
    transform: translate(16px, 0px) rotate(0deg);
  }

  65% {
    transition-timing-function: linear;
    transform: translate(39px, 1px) rotate(3deg);
  }

  70% {
    transform: translate(44px, -31px) rotate(-9deg);
  }

  90% {
    transition-timing-function: linear;
    transform: translate(-4px, 0px) rotate(5deg);
  }
}
</style>
