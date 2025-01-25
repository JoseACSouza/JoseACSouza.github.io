/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ["./docs/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      lineHeight: {
        'crowded': '0.2',
      },
      colors: {
        'main-orange': '#f27c22',
        'main-blue': '#004aad',
      },
      fontFamily: {
        'main': 'vhs-gothic'
      }
    },
  },
  plugins: [],
}

