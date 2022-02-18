import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/system";
import Navbar from "./Navbar";
import SideDrawer from "./SideDrawer";
import Fab from "@mui/material/Fab";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import BackToTop from "./BackToTop";
import MyTheme from "../styles/theme";
import PokeBall from "./PokeBall";
import useStyles from "../styles/styles";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);
export const navLinks = [{ title: `home`, path: `/` }];

const Header = () => {
  const classes = useStyles();
  return (
    <>
      {/* <HideOnScroll > */}
      <AppBar
        position="fixed"
        className={classes.navBar}
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
            <PokeBall />
            <Navbar className={classes.grow} navLinks={navLinks} />
            <SideDrawer navLinks={navLinks} />
          </Container>
        </Toolbar>
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
