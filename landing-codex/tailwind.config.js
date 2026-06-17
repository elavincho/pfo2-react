/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          ink: "#111827",
          teal: "#14b8a6",
          mint: "#99f6e4",
          cloud: "#f8fafc",
        },
      },
      boxShadow: {
        soft: "0 20px 60px rgba(15, 23, 42, 0.12)",
      },
    },
  },
  plugins: [],
};
