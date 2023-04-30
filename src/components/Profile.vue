<template>
  <section
    class="relative h-screen flex justify-center items-center flex-col p-10 w-full max-w-lg m-auto"
  >
    <div class="content-bg-green absolute top-0 left-0 w-full h-screen z-0" />
    <div class="w-full flex flex-col justify-center items-center z-10">
      <div class="flex justify-center items-center">
        <div class="w-[120px] h-[200px] rounded-b-full overflow-hidden">
          <img
            class="object-cover object-top w-full h-full"
            src="/images/ukhti.png"
          />
        </div>
      </div>
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
          <span class="font-semibold"> Irmayani </span>
        </div>
      </div>
    </div>

    <div class="text-5xl my-10 font-light wedding-font text-[#2C3A6E]">&</div>

    <div class="w-full flex flex-col justify-center items-center z-10">
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
      <div class="flex mt-5 justify-center items-center">
        <div class="w-[120px] h-[150px] rounded-b-full overflow-hidden">
          <img
            class="object-cover object-top w-full h-full"
            src="/images/akhi.png"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, toRefs, watch } from "vue"

const props = defineProps({
  index: Number,
  activeSection: Number,
})

const { index, activeSection } = toRefs(props)
console.log("naon siah", activeSection)

watch(
  activeSection,
  (val) => {
    console.log("naon siah", val)
  },
  { deep: true }
)
</script>

<style>
.content-bg-green {
  background: url("/images/blue_petal.jpg") repeat;
  background-attachment: fixed;
  background-size: 650px;
  background-position: center;
  opacity: 0.1;
}

@keyframes masked {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -10000px 5000px;
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
