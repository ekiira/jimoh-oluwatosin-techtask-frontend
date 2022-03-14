const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: [],
  theme: {
    extend: {
      colors: {
        ...defaultTheme.colors,
        royal: "#000055"
      }
    },
  },
  plugins: [],
};
