import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Create a theme instance.
let theme = createTheme({
  palette: {
    text: {
      primary: "#ffffff",
      secondary: "#2b2929",
    },
    background: {
      default: "Putting here to remove default value",
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
    types: {
      grass: "rgb(82, 241, 82)",
      water: "rgb(107, 181, 241)"
    }
  },
});

theme = responsiveFontSizes(theme);

export default theme;
