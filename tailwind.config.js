/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxl' : "1200px",
        'xxl': '1600px', 
        '4xl' : '1700px',
        '5xl' : '1800px',
      },
    },
  },
  plugins: [],
}
