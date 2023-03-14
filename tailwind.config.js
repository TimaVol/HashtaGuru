/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#1F1F26",
      lightGray: "#B2B7BE",
      darkGray: "#425466",
      lightGreen: "#7B9292",
      darkGreen: "#426666",
      purpleLight: "#B33CDB",
      purpleDark: "#231A36",
      yellow: "#FBBA33",
      darkBrown: "#42424A",
      pink: "#DE2879",
      transparent: "transparent",
    },
    container: {
      padding: "15px",
      center: true,
    },
    extend: {
      backgroundImage: {
        mainGradient: "url('../public/images/mainGradient.png')",
        mainTitle:
          "linear-gradient(#C87C00, #8B3208, rgba(83,32,15,0.8), #010420)",
      },
    },
  },
  plugins: [],
};
