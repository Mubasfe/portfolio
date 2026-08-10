/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Times New Roman"', 'Times', 'serif'],
      },
      colors: {
        navy: {
          900: '#0f1624',
          800: '#161d2d',
          700: '#1a233a',
        },
        accent: {
          light: '#60a5fa',
          DEFAULT: '#3b82f6',
          cyan: '#22d3ee'
        }
      }
    },
  },
  plugins: [],
}
