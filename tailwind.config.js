/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./{app,components,libs,pages,hooks}/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#00FFFF',
        secondary: '#00E096',
        dark: '#0A0F1C',
        card: '#0F172A',
        muted: '#A1A1AA',
        glowGreen: '#00FF94',
        glowPink: '#FF6EC7',
      },
    },
  },
  plugins: [],
}
