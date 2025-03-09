/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", '[data-theme="dark"]'], // Enables dark mode with class or attribute
  theme: {
    extend: {
      colors: {
        background: "var(--background-color)",
        foreground: "var(--foreground-color)",
        border: "var(--border-color)",
        primaryText: "var(--primary-text-color)",
        secondaryText: "var(--secondary-text-color)",
        primaryButton: "var(--primary-button-color)",
        secondaryButton: "var(--secondary-button-color)",
      },
      borderWidth: {
        1: "1px",
        0.5: "0.5px",
      },
      borderRadius: {
        4: "4px",
        8: "8px",
        16: "16px",
      },
    },
  },
  plugins: [],
};
