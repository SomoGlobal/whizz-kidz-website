module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce'],
  },
  theme: {
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
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
