import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Create a theme instance.
let theme = createTheme({
  palette: {
    text: {
      primary: "#0000",
      secondary: "#cc0000",
    },
    background: {
      default: "#0447b3",
    },
    primary: {
      main: `#2b2929`,
    },
    secondary: { main: `#fafafa` },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
