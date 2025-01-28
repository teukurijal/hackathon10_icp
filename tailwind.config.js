/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(45deg, rgba(105, 120, 255, 0.282), rgb(255, 255, 255), rgba(255, 255, 255, 0.3), rgba(13, 220, 170, 0.247))',
      },
      backgroundColor:{
        'primary': '#071029'
      }
    },
  },
  plugins: [],
}

