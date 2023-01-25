/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {//note that i didn't add black and white use them directly as classes
        'success-dark': '#027A48',
        'success': '#32D583',
        'failed-dark': '#F04438',
        'failed': '#feeceb',
        'main-bg': '#f8f8f8'
      },
      fontFamily: {
        'MainFont': ['Montserrat', 'sans-serif'],
        'SecondFont': ['Inter' ,'sans-serif']
      }
    }
  },
  plugins: [require('flowbite/plugin')],
}