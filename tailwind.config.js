/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#0c527b",
        w: "#262626",
        deepFade: "#554728",
        red: "#FF0000",
        blur: "#1096E5",
        gry: "#666666",
        b: "#3E7696",
        r: "#6E6B66",
        o: "#212121",
        or:"#FFFFFF"
      },
    },
  },
  variants: {},
  plugins: [],
};
