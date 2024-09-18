/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-light": "#EEEEEE",
        "bg-dark": "#222831",
        "org-dark": "#393E46",
        "org-yellow": "#FFD369",
      },
      borderWidth: {
        1: "1px",
        2: "2px",
        3: "3px",
      },
      fontFamily: {
        Graphik: ["Graphik", "system-ui"],
        Vazir: ["Vazir", "system-ui"],
      },
    },
  },
  plugins: [],
};
