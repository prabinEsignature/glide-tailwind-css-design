/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "Inter, sans-serif",
      },
      colors: {
        amaranth: "#A41045",
        gray: "#7D7E80",
        onyx: "#333740",
        night: "#0A0C10",
        timberwolf: "#D8D8D8",
      },
      backgroundColor: {
        "white-03": "rgba(255, 255, 255, 0.03)",
      },
      backgroundImage: {
        "home-overlay": "url('./assets/images/home_overlay.png')",
      },
    },
  },
  plugins: [],
};
