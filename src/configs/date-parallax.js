const configs = [
  {
    start: 0,
    end: 300,
    variable: 'bothOpacity',
    startValue: 0,
    endValue: 1,
  },
  {
    start: 0,
    end: 300,
    variable: 'akadTranslateX',
    startValue: -80,
    endValue: 0,
  },
  {
    start: 0,
    end: 300,
    variable: 'resepsiTranslateX',
    startValue: 80,
    endValue: 0,
  },
  // fade out
  {
    start: 800,
    end: 1100,
    variable: 'bothOpacity',
    startValue: 1,
    endValue: 0,
  },
  {
    start: 800,
    end: 1100,
    variable: 'akadTranslateX',
    startValue: 0,
    endValue: 80,
  },
  {
    start: 800,
    end: 1100,
    variable: 'resepsiTranslateX',
    startValue: 0,
    endValue: -90,
  },
]

export default configs;
