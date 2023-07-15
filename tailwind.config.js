/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        urbanistThin: ["UrbanistThin"],
        urbanistRegular: ["UrbanistRegular"],
        urbanistBold: ["UrbanistBold"]
      },
      colors: {
        'primary-color': '#FC69CA',
        'secondary-color': '#6854f3',
        'tertiary-color': '#F2F3FB',
        'dark': '#1F1F1F',
        'grey-transparent': 'rgb(240, 240, 240, 0.8)',
        'selected-menu-item': 'rgb(203, 200, 240, 0.9)',
        'unselected-menu-item': 'rgb(248, 248, 248, 0.5)'
      }
    },
  },
  plugins: [],
}

