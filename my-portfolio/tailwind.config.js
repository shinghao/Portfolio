/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
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
        "primary-bg-dark": "rgb(75 85 99)",
      },
      fontSize: {
        "icon-button": ["3rem", "1"],
        lg: ["1.6rem", "2.8rem"],
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
        "btn-s": "12rem",
        "btn-m": "14rem",
        "btn-l": "20rem",
      },
      height: {
        "btn-primary-s": "4rem",
        "btn-primary-m": "5rem",
        "nav-bar": "8rem",
      },
      padding: {
        hero: "8rem",
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
