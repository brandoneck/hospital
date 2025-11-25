import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#020659", // azul fuerte
      dark: "#021859",
    },
    secondary: {
      main: "#8D93A6",
    },
    grey: {
      100: "#F2F2F2",
      300: "#BFBFBA",
    },
    common: {
      white: "#FFFFFF",
      black: "#000000", // opcional
    },
    custom: {
      blue1: "#020659",
      blue2: "#021859",
      gray1: "#8D93A6",
      gray2: "#BFBFBA",
      gray3: "#F2F2F2",
    },
  },
});
export default theme; 