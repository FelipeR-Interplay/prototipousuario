/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'honduras-blue': '#002663',
        'honduras-cyan': '#00B7E3',
        'text-dark': '#131327',
        'bg-light': '#f1f1f1'
      }
    },
  },
  plugins: [],
} 