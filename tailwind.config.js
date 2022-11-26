/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Fraunces", "serif"],
    },

    extend: {
      // fontFamily: {
      //   fraunces: ["Fraunces", "serif"],
      // },
    },
    colors: {
      orange: "#F43B00",
      white: "#fff",
      translucent: "rgba(0, 0, 0, 0.3)",
      main_background: "#FCEAF8",
    },
  },
  plugins: [],
};
