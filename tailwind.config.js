/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      //依照bootstrap container padding尺寸
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    },
    spacing: {
      '0': '0',
      '1': '0.25rem', //4px
      '2': '0.5rem', //8px
      '3': '1rem', //16px
      '4': '1.5rem', //24px
      '5': '2rem', //32px
      '6': '2.5rem', //40px
      '7': '3rem', //48px
      '8': '4rem', //64px
      '9': '5rem', //80px
      '10': '6rem', //96px
      '11': '7rem', //112px
      '12': '8rem', //128px
    },
    extend: {},
  },
  plugins: [],
}

