const theme = {
  colors: {
    text: {
      light: "hsl(0deg, 0%, 10%)", // white
      dark: "hsl(0deg, 0%, 100%)", // near-black
    },
    background: {
      light: "hsl(0deg, 0%, 100%)", // white
      dark: "hsl(250deg, 70%, 7%)", // navy navy blue
    },
    primary: {
      light: "hsl(340deg, 100%, 40%)", // Pinkish-red
      dark: "hsl(50deg, 100%, 50%)", // Yellow
    },
    secondary: {
      light: "hsl(250deg, 100%, 50%)", // Purplish-blue
      dark: "hsl(190deg, 100%, 40%)", // Cyan
    },
    // Grays, scaling from least-noticeable to most-noticeable
    gray300: {
      light: "hsl(0deg, 0%, 70%)",
      dark: "hsl(0deg, 0%, 30%)",
    },
    gray500: {
      light: "hsl(0deg, 0%, 50%)",
      dark: "hsl(0deg, 0%, 50%)",
    },
    gray700: {
      light: "hsl(0deg, 0%, 30%)",
      dark: "hsl(0deg, 0%, 70%)",
    },
  },

  color_mode_key: "color-mode",
  initial_color_mode_css_prop: "--initial-color-mode",
}

export default theme
