/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "dark-gradient":
          "radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%)",
      },
      margin: {
        7.5: "1.875rem",
      },
    },
    colors: {
      brand: "hsl(25, 97%, 53%)",
      "brand-gray": {
        200: "hsl(217, 12%, 63%)",
        DEFAULT: "hsl(216, 12%, 54%)",
      },
      "brand-blue": {
        DEFAULT: "hsl(213, 19%, 18%)",
        900: "hsl(216, 12%, 8%)",
      },
      white: "#fff",
      black: "#000",
    },
    fontFamily: {
      sans: ["Overpass", "sans-serif"],
    },
    fontSize: {
      base: ["0.9375rem", "1.375rem"],
      md: ["1.5rem", "1.875rem"],
      lg: ["1.75rem", "2.25rem"],
    },
  },
  screens: {
    md: "768px",
    xl: "1440px",
  },
  plugins: [],
};
