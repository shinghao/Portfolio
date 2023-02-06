/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-btn-blue": "#23B1C2",
        "primary-text-dark": "rgb(75 85 99)",
        "primary-text-light": "#FFFFFF",
        "primary-bg-light": "#FFFFFF",
        "primary-bg-dark": "#000000",
      },
      fontSize: {
        "icon-button": ["3rem", "1"],
        xl: ["2.0rem", "2.8rem"],
        "2xl": ["2.4rem", "3.2rem"],
        "3xl": ["2.8rem", "3.6rem"],
        "4xl": ["3.2rem", "4rem"],
        "5xl": ["4.8rem", "1"],
        "6xl": ["6.4rem", "1"],
        "7xl": ["7.2rem", "1"],
        "8xl": ["9.6rem", "1"],
      },
      width: {
        "btn-m": "14rem",
        "btn-l": "20rem",
      },
      height: {
        "btn-primary": "5rem",
        "nav-bar": "9rem",
      },
      borderRadius: {
        "btn-primary": "2.5rem",
      },
      boxShadow: {
        "skills-card": "0 3px 8px #a17a69",
      },
    },
  },
  plugins: [],
};
