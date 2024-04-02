/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      yellow: "#FFDE7D",
      darkyellow: "#f5c545",
      blue: "#112A46",
      vanilla: "#F8F3D4",
    },
    extend: {
      cardHeight: {
        "24rem": "24rem",
      },
    },
  },
  plugins: [],
};
