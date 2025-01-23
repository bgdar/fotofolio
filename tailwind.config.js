/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3490dc",
        secondary: "#41b883",
        accent: "#e67e22",
        "dark-gray": "#34495e",
        "light-gray": "#f1f1f1",
      },
      fontFamily: {
        primary: " 'Inter', sans-serif",
      },
    },
  },
  plugins: [],
};
