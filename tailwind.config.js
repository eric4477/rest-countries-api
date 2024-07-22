/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        "custom-light": "rgba(99, 99, 99, 0.2) 0px 0px 8px 0px;",
        "custom-dark": " rgba(0, 0, 0, 0.1) 0px 4px 12px",
      },
      colors: {
        white: "hsl(0, 0%, 100%)",
        lightColors: {
          "very-dark-blue": "hsl(200, 15%, 8%)",
          "dark-gray": "hsl(0, 0%, 52%)",
          "very-light-gray": "hsl(0, 0%, 98%)",
        },
        darkColors: {
          "dark-blue": "hsl(209, 23%, 22%)",
          "very-dark-blue": "hsl(207, 26%, 17%)",
        },
      },
      fontFamily: {
        sans: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
