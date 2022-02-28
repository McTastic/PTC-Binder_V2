import React, { useContext, useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MuiNextLink from "./MuiNextLink";
import PokeBall from "./PokeBall";
import { Store } from "/utils/globalStore.js";
import Cookies from "js-cookie";
import Router from "next/router";
import SideDrawer from "./SideDrawer";

const drawerWidth = 220;

function ResponsiveDrawer({ navLinks }) {
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  const { window } = navLinks;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="sideBar">
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
  // const container =
  //   window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end", }}>
      <AppBar
        position="fixed"
        sx={{
          display:"flex",
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
          sx={{ 
            display: `flex`, 
            justifyContent: `center`
           }}
        >
          {userInfo ? (
            <>
              <Button
                onClick={logoutHandler}
              >
                <Typography
                  className="logoutBtn"

                  color="#ffffff"
                  variant="button"
                  sx={{
                    fontSize:{xs:"1.25em",md:"1.5em"},
                    mt: { xs: "1.35em", xl: "1em" },
                    zIndex: { xs: "999", lg: "0" },
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
                    zIndex: { sm: "999", lg: "0" },
                    mt: {xs: ".75em",xl: "1em"},
                    width: "2.5em",
                    height: "2.5em",
                  }}
                />
              </MuiNextLink>
            </>
          ) : (
            <>
              <Button >
                <MuiNextLink
                  fontSize="1.5em"
                  color="#ffffff"
                  variant="button"
                  href="/login"
                  sx={{
                    mt: { xs: ".75em", xl: "1em" },
                    zIndex: { xs: "999", lg: "0" },
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
        <SideDrawer navLinks={navLinks} />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
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

export default ResponsiveDrawer;
