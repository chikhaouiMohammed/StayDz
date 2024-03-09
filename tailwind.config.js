/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "mainColor": "#FF432A",
        "mainTextColor": "#212832"
      },
      fontFamily:{
        poppins: "Poppins",
        volkhov: "Volkhov",
      },
    },
  },
  plugins: [],
}
