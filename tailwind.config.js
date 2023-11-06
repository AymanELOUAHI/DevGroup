/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '100px',
      backgroundColor: 'beige',
      fontFamily: 'Arial, sans-serif',
      maxWidth: {
        width: '100%',
      },
    },
    plugins: [],
  }
}
