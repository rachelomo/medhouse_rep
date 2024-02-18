/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#0c527b",
        brown: "#8B4513",
        deepFade: '#4F4F4F', 
      },
    },
  },
  variants: {},
  plugins: [],
};
