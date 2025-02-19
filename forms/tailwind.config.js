/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: "url()",
      boxShadow: { "custom-inset": "inset 0px 0px 10px rgba(0, 0, 0, 0.9)" },
    },
  },
  plugins: [],
};
