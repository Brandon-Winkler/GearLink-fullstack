/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'FitYellow': '#ECFF12'
      },
      fontFamily: {
        bebas: ['Bebas Neue, sans-serif'],
        roboto: ['Roboto, sans-serif'],
        dm: ['DM Sans, sans-serif']
      },
    },
  },
  plugins: [],
}

