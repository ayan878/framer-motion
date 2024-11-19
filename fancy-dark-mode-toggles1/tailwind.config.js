/** @type {import('tailwindcss').Config} */
export default {
  darkMode:"class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundLight: "var(--background-light)",
        backgroundDark: "var(--background-dark)",
      },
    },
  },
  plugins: [],
};
