/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Poppins', 'system-ui', 'sans-serif'],
        sign: ['"Covered By Your Grace"', 'cursive'],
      },
      colors: {
        bg: '#0c0b09',
        bg2: '#111009',
        surface: '#191712',
        surface2: '#201e18',
        accent: '#c8512a',
        'accent-light': '#e06840',
        gold: '#b89a4a',
        muted: '#7a7368',
        subtle: '#3a3530',
      },
    },
  },
  plugins: [],
}
