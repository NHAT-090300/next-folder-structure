module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
    './src/features/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      lineClamp: {
        5: '5',
        10: '10',
        15: '15',
      },
    },
    container: {
      maxWidth: '100%',
    },
    screens: {
      xs: '375px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1180px',
      content: '1250px',
      '2xl': '1536px',
      '3xl': '1920px',
      ms: {
        raw: '(max-height: 700px)',
      },
    },
    colors: {
      main: '#F80',
      primary: '#FF8800',
      primary_50: '#FFF2E6',
      primary_100: '#FFFCF3',
      secondary: '#100A55',
      secondary_500: '#1C125F',
      black: '#232044',
      white: '#FFFFFF',
      purple: '#100A55',
      purple_700: '#34306a',
      gray: '#667085',
      // gray color
      gray_50: '#F9FAFB',
      gray_100: '#F4F4F6',
      gray_200: '#E5E6EB',
      gray_300: '#D3D5DA',
      gray_400: '#9EA3AE',
      gray_500: '#6C727F',
      gray_600: '#4D5461',
      gray_700: '#394150',
      gray_800: '#212936',
      gray_900: '#0B0A0F',
      // orange
      orange_500: '#FB6514',
      // error color
      error: '#FD504F',
      error_10: '#FFEDED',
      // success color
      success: '#38C976',
      success_10: '#EBFAF3',
      // warning color
      warning: '#FCB121',
      warning_10: '#FFF6E5',
      // info
      info: '#3EAFFF',
      info_10: '#ECF7FF',
      //semantic
      semantic_1: '#7875FC',
      semantic_2: '#4285FA',
      semantic_3: '#46C8DD',
      semantic_4: '#FF1F7D',
      semantic_10: '#FFF6E5',
      semantic_stroke: '#7B61FF',
      //neutral
      neutral_3: '#EEE',
      //orange
      orange: '#FFA800',
      // red
      red: '#FF0000',
      // grey
      grey_100: '#000929',
      grey_900: '#0B0A0F',
      // blue
      blue: '#007AFF',
    },
    backgroundImage: {},
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      '50%': '50%',
      '60%': '60%',
      '70%': '70%',
      '80%': '80%',
      '90%': '90%',
      16: '4rem',
      '160px': '160px',
    },
    boxShadow: {},
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container-xl': {
          '@apply px-6 mx-auto max-w-screen-content': '',
        },
        '.container-2xl': {
          '@apply mx-auto max-w-screen-2xl': '',
        },
        '.container-3xl': {
          '@apply mx-auto max-w-screen-3xl': '',
        },
        '.typography-h1': {
          '@apply text-[24px] md:text-[40px]': '',
          '@apply leading-9 md:leading-[56px]': '',
        },
        '.typography-h2': {
          '@apply text-[20px] md:text-[32px]': '',
        },
        '.typography-h3': {
          '@apply text-[20px] md:text-[24px]': '',
          '@apply leading-8 md:leading-9': '',
        },
        '.typography-h4': {
          '@apply text-[16px] md:text-[20px]': '',
          '@apply leading-8 md:leading-[30px]': '',
        },
        '.typography-h5': {
          '@apply text-[14px] md:text-[16px]': '',
          '@apply leading-6 md:leading-7': '',
        },
        '.typography-h6': {
          '@apply text-[12px] md:text-[14px]': '',
        },
        '.typography-h7': {
          '@apply text-[10px] md:text-[12px]': '',
          '@apply leading-4 md:leading-5': '',
        },
      });
    },
    require('@tailwindcss/aspect-ratio'),
  ],
  variants: {
    extend: {
      display: ['group-hover'],
      animation: ['group-hover'],
    },
  },
};
