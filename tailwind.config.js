/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html.js}"],
  theme: {
    extend: {
      fontFamily:{
        "haken":["'hanken Grotesk'", 'sans-serif']
      }

    },
  },
  plugins: [],
}

// para agregarle mas contenido al tailwind personalizado se hace en el theme.extend