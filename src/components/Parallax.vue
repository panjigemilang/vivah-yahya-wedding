<template>
  <slot ref="child" :values="state.values" />
</template>

<script setup>
import { onMounted, onUnmounted, reactive, ref } from 'vue';
/*
const configs = [
  {
    start: 0,
    end: 1200,
    variable: 'height',
    startValue: 200,
    endValue: 400,
  }
]
*/
const { configs } = defineProps({
  configs: {
    type: Array,
    default: []
  },
});
const state = reactive({
  values: {}
});
const child = ref(null);

const calculateConfigActive = ({ config, scrollPosition }) => {
  return scrollPosition >= config.start && scrollPosition <= config.end;
};

const handleScroll = () => {
  const scrollPosition = window.scrollY;
  const variableCount = {};

  const finalValues = { ...state.values };

  configs.forEach((config, i) => {
    const isConfigActive = calculateConfigActive({ config, scrollPosition });
    const { variable, start, end, startValue, endValue } = config;
    if (!variableCount[variable]) variableCount[variable] = 0;
    variableCount[variable]++;

    if (isConfigActive) {
      const endPoint = end - start;
      const currentPoint = scrollPosition - start;
      const valueSize = endValue - startValue;
      // 25% of 100 = 25;
      // if starting from 200 then end result should be 225;
      finalValues[variable] = currentPoint / endPoint * valueSize + startValue;
    } else if (scrollPosition > end) {
      finalValues[variable] = endValue;
    } else if (variableCount[variable] === 1 && scrollPosition < start) {
      finalValues[variable] = startValue;
    }
  });

  state.values = finalValues;
}

onMounted(() => {
  [...configs].reverse().forEach(config => {
    state.values[config.variable] = config.startValue;
  });
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
})
</script>
