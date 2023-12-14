/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      extend: {
        colors: {
          darkBackground: "#0C111F",
          brightColor: "#F9EC7D",
        },
      },
    },
  },
  plugins: [],
};
