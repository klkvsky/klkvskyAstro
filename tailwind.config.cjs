/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
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
        riseend: "#F74755"
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
