<template>
  <section
    class="top-0 h-screen flex justify-center items-center text-center flex-col fixed w-full max-w-lg m-auto"
  >
    <div
      v-for="(setting, i) in galllerySettings"
      :key="i"
      :style="setting.customStyle"
      class="w-[80%] absolute"
    >
      <div class="h-[40vh] w-full rounded-3xl overflow-hidden">
        <img
          class="w-full h-full object-cover"
          :src="setting.url"
          :style="setting.customImageStyle"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const startingPoint = 3800 // 6500;
const galleryNames = ["one", "two", "three", "four"]
const parallaxConfig = []
const galllerySettings = galleryNames.map((name, i) => {
  galleryParallaxConfigs.forEach((config) => {
    parallaxConfig.push({
      ...config,
      start: config.start + startingPoint + (i % 2) * 200 + i * 500,
      end: config.end + startingPoint + (i % 2) * 200 + i * 500,
      variable: `${name}${config.variable}`,
    })
  })

  const finalSetting = {
    url: `/images/gallery/${name}.jpg`,
    name,
  }

  if (i % 2 === 0) {
    finalSetting.customStyle = {
      top: "50px",
    }
  } else
    finalSetting.customStyle = {
      bottom: "50px",
    }

  if (i === 1)
    finalSetting.customImageStyle = {
      objectPosition: "0 -80px",
    }

  return finalSetting
})
</script>
