/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        main: "#9cdbfc",
        accent: "",
        link: "",
        "link-pressed": "",
        background: "#fafdff",
        "background-dark": "#06141a",
        "background-accent-dark": "#0c2733"
      },
      fontFamily: {
        'sans': ['Open Sans', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
