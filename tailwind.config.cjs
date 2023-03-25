/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'comic-blue':'#4c69f6',
        'comic-sky': '#4c94f6	',
        'comic-yellow': '#F6DB35',
        'comic-orange': '#ffc510',
        'comic-black' : ' #110F11',
        'comic-red': '#EE5454',
      }
    },
  },
  plugins: [],
}
