/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      Dana: "Dana",
      DanaMedium: "Dana Medium",
      DanaDemi: "Dana Demi",

      Moraba: "Moraba",
      MorabaMedium: "Moraba Medium",
      MorabaBold: "MorabaBold",
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "0.625rem",
        },
      },
      colors: {
        primary: {
          1: "#B88E2F",
          2: "#FFF3E3",
          3: "#FCF8F3",
          4 : "#F9F1E7"
        },
        gray: {
          1: "#F4F5F7",
          2: "#898989",
          3: "#B0B0B0",
        },
      },
      spacing: {
        4.5: "1.125rem",
        25: "6.25rem",
        30: "7.5rem",
        50: "12.5rem",
      },
      backgroundImage: {
        landing: "url('./src/assets/images/landing-image.png')",
        mbLanding: "url('./src/assets/images/res.png')",
        shop : "url('./src/assets/images/shop/shop.png')"
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "&>*");
      addVariant("child-hover", "&>*:hover");
    },
  ],
};
