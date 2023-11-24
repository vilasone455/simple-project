/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("preline/plugin")],
};
