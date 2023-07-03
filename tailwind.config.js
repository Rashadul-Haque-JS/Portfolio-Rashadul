/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: { max: "767.98px" },
      md: { min: "768px", max: "991.98px" },
      lg: { min: "992px", max: "1199.98px" },
      xl: { min: "1200px",max: "1399.98px" },
      "2xl": { min: "1400px" },
      "3xl": { min: "1600px" },
    },
    plugins: [],
  },
};
