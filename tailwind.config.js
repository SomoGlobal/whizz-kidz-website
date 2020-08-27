module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx', './lib/*.tsx'],
  corePlugins: {
    clear: false,
    divideWidth: false,
  },
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce'],
  },
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
      },
      spacing: {
        28: '7rem',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
    },
  },
};
