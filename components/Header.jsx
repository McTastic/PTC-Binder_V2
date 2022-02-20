import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/system";
import Nav from "./Nav";
// import SideDrawer from "./SideDrawer";
import Fab from "@mui/material/Fab";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import BackToTop from "./BackToTop";
import MyTheme from "../styles/theme";
import PokeBall from "./PokeBall";
// import useStyles from "../styles/styles";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const Header = () => {
  //   const classes = useStyles();
  return (
    <>
      {/* <HideOnScroll > */}
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: `rgba(7, 7, 7, 0.726)`,
          backdropFilter: `blur(5px)`,
          height: "5em",
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
        }}
      >
        <Toolbar>
          <Container
            maxWidth="lg"
            sx={{ display: `flex`, justifyContent: `space-between` }}
          >
            {/* <Nav navLinks={navLinks} /> */}
            {/* <SideDrawer navLinks={navLinks} /> */}
          </Container>
        </Toolbar>
        <PokeBall />
      </AppBar>
      {/* </HideOnScroll> */}
      <Offset id="back-to-top-anchor" />
      <BackToTop>
        <Fab
          style={MyTheme.palette.accent}
          size="large"
          aria-label="back to top"
        >
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
    </>
  );
};

export default Header;
