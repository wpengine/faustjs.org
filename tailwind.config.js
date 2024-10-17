const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./wp-blocks/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: colors.white,
      gray: colors.gray,
      teal: {
        100: "#E7FAFB",
        200: "#D7F6F8",
        300: "#AFEDF1",
        400: "#87E5EA",
        500: "#5EDCE2",
        600: "#36D3DB",
        700: "#0ECAD4",
        800: "#0CA8B1",
        900: "#09878D",
        1000: "#07656A",
        1100: "#054347",
      },
      blue: {
        100: "#E6F0FB",
        200: "#D5E6F8",
        300: "#AACEF1",
        400: "#80B5EB",
        500: "#559CE4",
        600: "#2A84DD",
        700: "#006BD6",
        800: "#0059B2",
        900: "#00478F",
        1000: "#00366B",
        1100: "#002447",
      },
      yellow: {
        100: "#FFF9ED",
        200: "#FFF5E2",
        300: "#FFEBC4",
        400: "#FFE1A7",
        500: "#FFD789",
        600: "#FFCD6B",
        700: "#FFC34E",
        800: "#D5A341",
        900: "#AA8234",
        1000: "#806227",
        1100: "#55411A",
      },
      purple: {
        100: "#F2ECFC",
        200: "#E9E0FB",
        300: "#D3C1F6",
        400: "#BDA2F2",
        500: "#A683EE",
        600: "#9064E9",
        700: "#7A45E5",
        800: "#663ABF",
        900: "#512E99",
        1000: "#3D2373",
        1100: "#29174C",
      },
      red: {
        100: "#FCE7EC",
        200: "#F9D8E0",
        300: "#F4B0C0",
        400: "#EE89A1",
        500: "#E86182",
        600: "#E33962",
        700: "#DD1243",
        800: "#B80F38",
        900: "#930C2D",
        1000: "#6F0922",
        1100: "#4A0616",
      },
    },
    extend: {
      fontFamily: {
        lora: ["Lora", "serif"],
        inter: ["Inter", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
