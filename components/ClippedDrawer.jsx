import React, { useContext, useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CollectionsBookmarkOutlinedIcon from "@mui/icons-material/CollectionsBookmarkOutlined";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MuiNextLink from "./MuiNextLink";
import { Store } from "/utils/globalStore.js";
import Cookies from "js-cookie";
import Router from "next/router";
import SideDrawer from "./SideDrawer";

const drawerWidth = 220;

function ResponsiveDrawer({ navLinks }) {
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  const { window } = navLinks;
  const [open, setOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handlePersistentDrawerToggle = () => {
    setOpen(!open);
  };

  const drawer = (
    <div className="sideBar" style={{ marginTop: "1em" }}>
      <Toolbar>
        <IconButton onClick={handlePersistentDrawerToggle}>
          <ChevronRightIcon
            sx={{ 
              color: "white", 
              fontSize: "2em", 
              zIndex: "999", 
              ml:"10px",
              "&:hover":{
                transform: "scale(1.2)",
                color: "red"
              } 
            }}
          />
        </IconButton>
      </Toolbar>
      <List sx={{ mt: "3em" }}>
        {navLinks.map(({ title, path, onClick }, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              {index % 2 === 0 ? (
                <HomeOutlinedIcon
                  fontSize="large"
                  className="evenIcons"
                  color="evenIcons"
                />
              ) : (
                <SearchOutlinedIcon
                  fontSize="large"
                  className="oddIcons"
                  color="oddIcons"
                />
              )}
            </ListItemIcon>
            <ListItemText
              align="center"
              // sx={{
              //   transition:"scale .7s ease-in-out",
              //   "&:hover":{
              //     transform: "scale(1.25)",
              //   }
              // }}
            >
              <MuiNextLink
                fontSize="2em"
                letterSpacing="2px"
                href={path}
                color="#ffffff"
                sx={{
                  textDecoration: "none",
                  transition: "color .5s, text-shadow .5s",
                  "&:hover": {
                    color: "rgb(120, 200, 255)",
                    maxHeight: "2em",
                    textShadow: "-10px -10px 50px  rgb(107, 181, 241)",
                    filter: "drop-shadow(10px 10px 50px rgb(107, 181, 241))",
                  },
                }}
              >
                {title}
              </MuiNextLink>
            </ListItemText>
          </ListItem>
        ))}
        {userInfo && (
          <ListItem>
            <ListItemIcon>
              <CollectionsBookmarkOutlinedIcon
                fontSize="large"
                className="oddIcons"
                color="oddIcons"
              />
            </ListItemIcon>
            <ListItemText>
              <MuiNextLink
                fontSize="2em"
                href="/binder"
                color="#ffffff"
                marginLeft={3}
                letterSpacing="2px"
                sx={{
                  textDecoration: "none",
                  transition: "color .5s, text-shadow .5s",
                  "&:hover": {
                    color: "rgb(120, 200, 255)",
                    maxHeight: "2em",
                    textShadow: "-10px -10px 50px  rgb(107, 181, 241)",
                    filter: "drop-shadow(10px 10px 50px rgb(107, 181, 241))",
                  },
                }}
              >
                Binder
              </MuiNextLink>
            </ListItemText>
          </ListItem>
        )}
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
    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
      <Container
        position="fixed"
        maxWidth="x1"
        display="flex"
        sx={{
          display: `flex`,
          justifyContent: `flex-end`,
          width: "100vw",
          // ml: { sm: `${drawerWidth}px` },
        }}
      >
        {userInfo ? (
          <>
            <Button disableRipple onClick={logoutHandler}>
              <Typography
                className="logoutBtn"
                color="#ffffff"
                variant="button"
                sx={{
                  position: "relative",
                  left: {xs:"2em",md: "unset"},
                  fontSize: { xs: "1.8em", md: "3em" },
                  zIndex: { xs: "999", lg: "0" },
                  textDecoration: "none",
                  transition: "transform .5s",
                  "&:hover": {
                    transform: "scale(1.15)",
                  },
                  "&:after":{
                    content: "''",
                    display: "block",
                    position: "absolute",
                    borderRadius: "4em",
                    left: "0",
                    top:"0",
                    width: "100%",
                    height: "100%",
                    opacity: "0",
                    transition: "all 0.25s",
                    boxShadow: {xs:"1px 1px 10px 40px blue",md:"unset"},
                  },
                  "&:active:after":{
                    boxShadow:{xs: "1px 1px 5px 5px blue",md:"unset"},
                    position: {xs:"absolute",md:"unset"},
                    borderRadius: {xs:"4em",md:"unset"},
                    left: "0",
                    top:"0",
                    opacity: "1",
                    transition: "0s"
                  }
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
                  position: "relative",
                  left: {xs:"3em",md: "unset"},
                  zIndex: { sm: "999", lg: "0" },
                  mt: { xs: ".75em", xl: "1em" },
                  width: "2.5em",
                  height: "2.5em",
                }}
              />
            </MuiNextLink>
          </>
        ) : (
          <>
            <Button disableRipple>
              <MuiNextLink
                color="#ffffff"
                variant="button"
                href="/login"
                sx={{
                  position: "relative",
                  left: {xs:"2em",md: "unset"},
                  zIndex: { xs: "999", lg: "0" },
                  fontSize: { xs: "1.8em", md: "3em" },
                  letterSpacing:"1px",
                  textDecoration: "none",
                  transition: "transform .5s",
                  "&:hover": {
                    maxHeight: "2em",
                    transform: "scale(1.15)",
                  },
                  "&:after":{
                    content: "''",
                    display: "block",
                    position: "absolute",
                    borderRadius: "4em",
                    left: "0",
                    top:"0",
                    width: "100%",
                    height: "100%",
                    opacity: "0",
                    transition: "all 0.25s",
                    boxShadow: {xs:"1px 1px 10px 40px blue",md:"unset"},
                  },
                  "&:active:after":{
                    boxShadow:{xs: "1px 1px 5px 5px blue",md:"unset"},
                    position: {xs:"absolute",md:"unset"},
                    borderRadius: {xs:"4em",md:"unset"},
                    left: "0",
                    top:"0",
                    opacity: "1",
                    transition: "0s"
                  }
                }}
              >
                Login
              </MuiNextLink>
            </Button>
          </>
        )}
        <Toolbar>
          <IconButton
            color="inherit"
            disableRipple
            aria-label="open drawer"
            onClick={handlePersistentDrawerToggle}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "block" }) }}
          >
            <MenuIcon
              sx={{
                fontSize: "1.5em",
                display: { xs: "none", md: "block" },
                ml:{xs:"0",lg:"3em"},
              }}
            />
          </IconButton>
        </Toolbar>
      </Container>
      <Toolbar>
        <SideDrawer navLinks={navLinks} />
      </Toolbar>
      <Drawer
        variant="persistent"
        anchor="right"
        open={open}
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: "rgb(6,24,54)",
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default ResponsiveDrawer;
