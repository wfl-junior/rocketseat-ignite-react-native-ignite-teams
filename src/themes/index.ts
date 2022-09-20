export const defaultTheme = {
  colors: {
    white: "#FFFFFF",
    green: {
      700: "#00875F",
      500: "#00B37E",
    },
    red: {
      light: "#F75A68",
      dark: "#AA2834",
    },
    gray: {
      100: "#E1E1E6",
      200: "#C4C4CC",
      300: "#7C7C8A",
      400: "#323238",
      500: "#29292E",
      600: "#202024",
      700: "#121214",
    },
  },
  fontFamily: {
    regular: "Roboto_400Regular",
    bold: "Roboto_700Bold",
  },
  fontSize: {
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "24px",
  },
} as const;
