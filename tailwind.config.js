/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

const conicGradient = (theme, direction, colorList) => {
  const params = [
    direction,
    ...colorList.map((color) => theme(`colors.${color}`)),
  ];

  return `conic-gradient(${params.join(", ")})`;
};

const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: "#7A00FF",
          50: "#DAB8FF",
          100: "#CFA3FF",
          200: "#BA7AFF",
          300: "#A552FF",
          400: "#8F29FF",
          500: "#7A00FF",
          600: "#5F00C7",
          700: "#44008F",
          800: "#290057",
          900: "#0F001F",
        },
        amber: colors.amber,
        lightBlue: colors.lightBlue,
        rose: colors.rose,
        gray: colors.gray,
      },
      backgroundImage: (theme) => ({
        "conic-gradient": conicGradient(theme, "from 300deg", [
          "red.400",
          "amber.100",
          "lightBlue.500",
          "blue.300",
          "purple.600",
          "pink.500",
          "rose.600",
          "red.400",
        ]),
      }),
    },
  },
  plugins: [Myclass],
};
