<template>
  <section
    class="relative h-screen flex justify-center items-center flex-col p-2 md:p-5 lg:p-10 w-full max-w-lg m-auto"
  >
    <div class="content-bg-green absolute top-0 left-0 w-full h-screen z-0" />
    <div class="grid grid-rows-[auto, 1rem, auto] items-center">
      <div
        class="w-full flex flex-col justify-center items-center z-10"
        :class="activeIndex === idx && 'fadeInLeft animation-delay-200'"
      >
        <div
          class="relative mb-8 text-5xl text-[#ab7029] font-bold wedding-font"
          :class="activeIndex === idx && 'fadeInDown'"
        >
          Mempelai
        </div>
        <!-- <div class="flex justify-center items-center">
          <div class="w-[120px] h-[200px] rounded-b-full overflow-hidden">
            <img
              class="object-cover object-top w-full h-full"
              src="/images/ukhti.png"
            />
          </div>
        </div> -->
        <div class="mt-5 ml-5">
          <div class="Target font-bold">
            <h1 class="text-xl">Dhara Amalia Tanjung</h1>
          </div>
          <div class="mt-3 text-xs text-[#2C3A6E]">
            <span class="font-bold"> Putri </span>
            dari Bapak
            <span class="font-semibold"> Amril Eddi Tanjung </span>
            dan <br />
            Ibu
            <span class="font-semibold"> Irmayani Marpaung </span>
          </div>
        </div>
      </div>
      <div
        class="text-5xl my-10 font-light wedding-font text-[#2C3A6E] text-center"
      >
        &
      </div>
      <div
        class="w-full flex flex-col justify-center items-center z-10"
        :class="activeIndex === idx && 'fadeInRight animation-delay-500'"
      >
        <div class="mr-5 text-right">
          <div class="Target font-bold">
            <h1 class="text-xl">Panji Gemilang</h1>
          </div>
          <div class="mt-3 text-xs text-[#2C3A6E]">
            <span class="font-bold"> Putra </span>
            dari Bapak
            <span class="font-semibold"> Agus Hernowo </span>
            dan <br />
            Ibu
            <span class="font-semibold"> Ita Eflinda </span>
          </div>
        </div>
        <!-- <div class="flex mt-5 justify-center items-center">
          <div class="w-[120px] h-[150px] rounded-b-full overflow-hidden">
            <img
              class="object-cover object-top w-full h-full"
              src="/images/akhi.png"
            />
          </div>
        </div> -->
      </div>
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

<style>
.content-bg-green {
  background: url("/images/blue-petal.jpg") repeat;
  background-attachment: fixed;
  background-size: 650px;
  background-position: center;
  opacity: 0.1;
}

.fadeIn {
  animation: fadeIn 1.5s both;
}

.fadeInDown {
  animation: fadeInDown 1.5s both;
}

.fadeInLeft {
  animation: fadeInLeft 1.5s both;
}

.fadeInRight {
  animation: fadeInRight 1.5s both;
}

.animation-delay-200 {
  animation-delay: 200ms !important;
}

.animation-delay-500 {
  animation-delay: 500ms !important;
}

@keyframes masked {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -10000px 5000px;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translatex(50px);
  }

  to {
    opacity: 1;
    transform: translatex(0px);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translatex(-50px);
  }

  to {
    opacity: 1;
    transform: translatex(0px);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translatey(-50px);
  }

  to {
    opacity: 1;
    transform: translatey(0px);
  }
}

.Target {
  z-index: 1;
}

.Target h1 {
  background: -webkit-linear-gradient(
      left,
      #ab7029 0%,
      #eca246 25%,
      #eee452 50%,
      #8a581a 100%
    )
    repeat;
  -webkit-background-clip: text;
  -ms-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -ms-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  /*Animation  한번에 여러개 적용하기 */
  animation: masked 60s linear infinite, fadeInDown 1.5s both 1;
  -webkit-animation: masked 60s linear infinite, fadeInDown 1.5s both 1;
  -moz-animation: masked 60s linear infinite, fadeInDown 1.5s both 1;
  -o-animation: masked 60s linear infinite, fadeInDown 1.5s both 1;
}
</style>
