const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: "dark",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
      colors: {
        dark: "#202020",
        grstart: "#626CBC",
        grcenter: "#5B68D0",
        grend: "#936BD3",
        risestart: "#F6CD6C",
        risefirst: "#F7AF5F",
        risesecond: "#F6894F",
        riseend: "#F74755",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ addVariant, e }) {
      addVariant("third-child", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`third-child${separator}${className}`)}:nth-child(3)`;
        });
      });
    }),
    plugin(function ({ addVariant, e }) {
      addVariant("second-child", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`second-child${separator}${className}`)}:nth-child(2)`;
        });
      });
    }),
  ],
};
