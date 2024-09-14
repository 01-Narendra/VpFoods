/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        suse: ['SUSE', 'system-ui'],
        sevillana: ["Sevillana", 'cursive'],
        alex: ["Alex Brush", 'cursive'],
        khand: ["Khand", 'sans-serif']
      }
    },
  },
  plugins: [],
}

