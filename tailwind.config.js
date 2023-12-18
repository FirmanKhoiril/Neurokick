/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "ui-sans-serif", "system-ui"],
      },
      textColor: {
        gray: "#C7D2DA",
      },
      backgroundColor: {
        primary: "#2E6FFF",
        darkInput: "#25272D",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
