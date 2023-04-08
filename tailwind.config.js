/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        body:'#111111',
        line:'#1e1e1e',
        item:'#181818',
        card:'#252527',
        brandGreen:'#e8fe4e',
        brandGray:'#737373',
        brandBlue:'#1a2cb8',
        brandOrange:'#cbbca6',
      }
    },
  },
  plugins: [],
}
