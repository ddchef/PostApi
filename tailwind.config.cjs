/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts}","./index.html"],
  theme: {
    extend: {
      lineHeight: {
        'extra-loose': '2.5',
        '8.5': '34px',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes:["light"]
  }
}
