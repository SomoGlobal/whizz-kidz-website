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
      colors: {
        facebook: '#1877F2',
        twitter: '#1DA1F2',
        instagram: '#E4405F',
        youtube: '#FF0000',
      },
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
