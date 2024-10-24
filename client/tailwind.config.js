/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./node_modules/tw-elements/dist/js/**/*.js",
  
      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
      extend: {
          colors: {
              'primary': '#0833a2',
              'secondary': '#002090',
              'tertiary': '#143486',
          },
      },
  },
  darkMode: "class",
  }