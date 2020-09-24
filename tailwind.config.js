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
        linkedin: '#0077B5',
        primary: {
          green: '#7fba27',
          yellow: '#ffdc05',
          pink: '#cf378c',
          blue: '#0da7e0',
          gray: '#54575c',
        },
        secondary: {
          green: '#4c9d34',
          yellow: '#f6a805',
          pink: '#543278',
          blue: '#004b97',
          gray: '#3d3a36',
        },
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
