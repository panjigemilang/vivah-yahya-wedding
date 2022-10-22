const configs = [
  {
    start: 0,
    end: 700,
    variable: 'bothOpacity',
    startValue: 0,
    endValue: 1,
  },
  {
    start: 0,
    end: 700,
    variable: 'akadTranslateX',
    startValue: -80,
    endValue: 0,
  },
  {
    start: 0,
    end: 700,
    variable: 'resepsiTranslateX',
    startValue: 80,
    endValue: 0,
  },
  // fade out
  {
    start: 1400,
    end: 1900,
    variable: 'bothOpacity',
    startValue: 1,
    endValue: 0,
  },
  {
    start: 1400,
    end: 1900,
    variable: 'akadTranslateX',
    startValue: 0,
    endValue: 80,
  },
  {
    start: 1400,
    end: 1900,
    variable: 'resepsiTranslateX',
    startValue: 0,
    endValue: -90,
  },
]

export default configs;
