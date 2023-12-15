/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeleft:
          "animate-delay-[20ms] animate-ease-out animate-alternate-reverse animate-fill-both"

      },
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.17)",
      },
    },
    plugins: [],
  }
}