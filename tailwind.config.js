/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        josefin: ['JosefinSans', 'sans-serif'],
        martel: ['Martel', 'serif'],
        titillium: ['TitilliumWeb', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
