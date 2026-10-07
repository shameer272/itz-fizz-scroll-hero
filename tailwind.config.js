/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Syne', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        dark: {
          950: '#030407',
          900: '#07090E',
          850: '#0C0F17',
          800: '#121624',
        },
        accent: {
          cyan: '#00F0FF',
          violet: '#8B5CF6',
        }
      },
      letterSpacing: {
        editorial: '0.22em',
        ultra: '0.45em',
      },
    },
  },
  plugins: [],
}
