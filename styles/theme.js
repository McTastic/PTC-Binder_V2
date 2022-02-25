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
      water: "rgb(107, 181, 241)",
      fire: "rgb(250, 77, 8)",
      lightning: "yellow",
      normal: "burlywood",
      ice: "aqua",
      fighting: "brown",
      poison: "purple",
      psychic: "pink",
      ground: "tan",
      flying: "turquoise",
      bug: "lime",
      rock: "rgb(197, 168, 130)",
      ghost: "lavender",
      darkness: "black",
      dragon: "blue",
      metal: "grey",
      fairy: "lightpink"
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
