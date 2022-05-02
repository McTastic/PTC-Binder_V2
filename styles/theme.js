import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Create a theme instance.
let theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#77A6CC",
          disabled: "#5A5A5A"
        },
      },
    },
  },
  palette: {
    text: {
      primary: "#ffffff",
      secondary: "#2b2929",
    },
    background: {
      default: "Putting here to remove default value",
    },
    secondary: { main: `#96095b` },
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
      colorless: "rgb(187,187,187)",
      ice: "aqua",
      fighting: "#C22E28",
      poison: "purple",
      psychic: "#F95587",
      ground: "#E2BF65",
      flying: "#A98FF3",
      bug: "#A6B91A",
      rock: "rgb(197, 168, 130)",
      ghost: "lavender",
      darkness: "black",
      dragon: "#6F35FC",
      metal: "#B7B7CE",
      fairy: "rgb(244,189,201)",
    },
  },
  typography:{
    fontFamily:[
      "Barlow Condensed","sans-serif"
    ].join(",")
  }
});

theme = responsiveFontSizes(theme);

export default theme;
