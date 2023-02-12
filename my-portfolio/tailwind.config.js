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
        "primary-text-light": "#F5F5Fa",
        "primary-bg-light": "#F5F5FA",
        "primary-bg-dark": "rgb(75 85 99)",
      },
      screens: {
        xxm: "375px",
        xm: "425px",
        xsm: "540px",
        sm: "640px",
        md: "768px",
        navbar: "800px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1536px",
        "5xl": "1800px",
        "6xl": "1920px",
        "4k": "2560px",
      },
      fontSize: {
        "icon-button": ["1.9rem", "1"],
      },
      width: {
        "btn-s": "12rem",
        "btn-m": "14rem",
        "btn-l": "20rem",
      },
      height: {
        "btn-primary-s": "4rem",
        "btn-primary-m": "5rem",
        "nav-bar": "5rem",
      },
      padding: {
        hero: "5rem",
      },
      borderRadius: {
        "btn-primary": "2.5rem",
      },
      boxShadow: {
        "project-card": "0 20px 40px 0 rgb(0 0 0 / 45%)",
        "skills-card": "0 3px 8px #a17a69",
      },
    },
  },
  plugins: [],
};
