module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  // mode: "jit",
  theme: {
    extend: {
      colors: {
        theme: "#9C149C",
        currencyBg: "#F4F3F8",
        sec: "#E5E5E5",
        txt: "#828181",
        primary: "#2C0C6A",
        btnPrimary: "#4305EB",
        btnSec: "#877E9E",
        btnTex: "#6FAE75",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};