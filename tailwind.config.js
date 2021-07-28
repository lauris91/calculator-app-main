module.exports = {
  purge: ["./public/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "press-start": ['"Spartan"'],
      },
      backgroundColor: {
        main: "var(--main-bg)",
        toggle: "var(--toggle-bg)",
        result: "var(--result-key)",
        reset: "var(--reset-key)",
        screen: "var(--screen-bg)",
        key: "var(--key-bg)",
        keyShadow: "var(--key-bg-shadow)",
      },
      textColor: {
        header: "var(--header-text)",
        keyMain: "var(--key-text-main)",
        keyResult: "var(--key-text-result)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
