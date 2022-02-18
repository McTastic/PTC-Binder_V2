import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Create a theme instance.
let theme = createTheme({
  palette: {
    text: {
      primary: "#ffffff",
      secondary: "#cc0000",
    },
    background: {
      default: "#0447b3",
    },
    primary: {
      main: `#2b2929`,
    },
    secondary: { main: `#fafafa` },
    evenIcons: {
      main: "#cc0000",
    },
    oddIcons: {
      main: "#ffffff",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
