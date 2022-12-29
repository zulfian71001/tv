/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "5rem",
    },
    extend: {
      colors : {
        main : "#181D31",
      },
      backgroundImage: {
        'bg1': "url('/src/image/bg.jpg')",
      },
    },
  },
  plugins: [],
}
