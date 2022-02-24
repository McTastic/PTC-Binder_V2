import React, { useContext, useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MuiNextLink from "./MuiNextLink";
import PokeBall from "./PokeBall";
import "../styles/navbar.module.css";
import { Store } from "/utils/globalStore.js";
import Cookies from "js-cookie";
import Router from "next/router";

const drawerWidth = 220;

function ResponsiveDrawer({ navLinks }) {
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  const { window } = navLinks;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <PokeBall />
      <List
        onClick={handleDrawerToggle} //<--closes drawer when link clicked
      >
        {navLinks.map(({ title, path, onClick }, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              {index % 2 === 0 ? (
                <InboxIcon className="evenIcons" color="evenIcons" />
              ) : (
                <MailIcon className="oddIcons" color="oddIcons" />
              )}
            </ListItemIcon>
            <ListItemText>
              <MuiNextLink href={path} color="#ffffff">
                {title}
              </MuiNextLink>
            </ListItemText>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );
  const logoutHandler = () => {
    dispatch({ type: "USER_LOGOUT" });
    Cookies.remove("userInfo");
    Cookies.remove("cartItems");
    Router.push("/");
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: `rgba(7, 7, 7, 0.726)`,
          backdropFilter: `blur(5px)`,
          height: "5em",
          "& .MuiContainer-root": {
            justifyContent: "flex-end",
          },
        }}
      >
        <Container
          maxWidth="xl"
          sx={{ display: `flex`, justifyContent: `center` }}
        >
          {userInfo ? (
            <>
              <Button
                onClick={logoutHandler}
                sx={{ mt: { xs: "2.35em", lg: "-1.5em" } }}
              >
                <Typography
                  mt={2}
                  fontSize="1.5em"
                  color="#ffffff"
                  variant="button"
                  sx={{
                    mt: { sm: "2em" },
                    zIndex: "999",
                    textDecoration: "none",
                    transition: "transform .5s",
                    "&:hover": {
                      color: "rgb(106, 226, 216)",
                      maxHeight: "2em",
                      textShadow: "-3px -3px 7px rgb(107, 181, 241)",
                      filter: "drop-shadow(3px 3px 3px rgb(107, 181, 241))",
                      transform: "scale(1.35)",
                    },
                  }}
                >
                  Logout
                </Typography>
              </Button>
              <MuiNextLink href="/profile" variant="button">
                <Avatar
                  src={userInfo.userImage}
                  alt="user profile picture"
                  sx={{
                    margin: "1em 0 0 .5em",
                    width: "2.5em",
                    height: "2.5em",
                  }}
                />
              </MuiNextLink>
            </>
          ) : (
            <>
              <Button sx={{ mt: { xs: "2.35em", lg: "1.35em" } }}>
                <MuiNextLink
                  fontSize="1.5em"
                  color="#ffffff"
                  variant="button"
                  href="/login"
                  sx={{
                    zIndex: "999",
                    textDecoration: "none",
                    transition: "transform .5s",
                    "&:hover": {
                      color: "rgb(106, 226, 216)",
                      maxHeight: "2em",
                      textShadow: "-3px -3px 7px rgb(107, 181, 241)",
                      filter: "drop-shadow(3px 3px 3px rgb(107, 181, 241))",
                      transform: "scale(1.35)",
                    },
                  }}
                >
                  Login
                </MuiNextLink>
              </Button>
            </>
          )}
        </Container>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mb: 3, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "flex", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: `rgba(7, 7, 7, 0.726)`,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            overflow: "hidden",
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "rgb(6,24,54)",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
