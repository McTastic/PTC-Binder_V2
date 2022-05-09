import React, { useContext, useState } from "react";
import {
  Avatar,
  Box,
  Container,
  Drawer,
  IconButton,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CollectionsBookmarkOutlinedIcon from "@mui/icons-material/CollectionsBookmarkOutlined";
import MuiNextLink from "./MuiNextLink";
import { Store } from "/utils/globalStore.js";
import Cookies from "js-cookie";
import Router from "next/router";
import SideDrawer from "./SideDrawer";
import ClickAwayListener from '@mui/base/ClickAwayListener';

const drawerWidth = 220;

function ClippedDrawer({ navLinks }) {
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  const [open, setOpen] = useState(false);

  const handlePersistentDrawerToggle = () => {
    setOpen(!open);
  };
  const handleClose =() =>{
    setOpen(false)
  }

  const drawer = (
    <div className="sideBar">
      <Toolbar>
        <IconButton onClick={handlePersistentDrawerToggle}>
          <ChevronRightIcon
            sx={{
              color: "white",
              fontSize: "2em",
              zIndex: "999",
              ml: "10px",
              "&:hover": {
                transform: "scale(1.2)",
                color: "red",
              },
            }}
          />
        </IconButton>
      </Toolbar>
      <List
        onClick={handlePersistentDrawerToggle} //<--closes drawer when link clicked
        sx={{ mt: "3em" }}
      >
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
                  transition: "color .25s",
                  "&:hover": {
                    color: "yellow",
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
                    color: "yellow",
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

  return (
    <ClickAwayListener onClickAway={handleClose}>
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
                  left: { xs: "2em", md: "unset" },
                  fontSize: { xs: "1.8em", md: "3em" },
                  zIndex: { xs: "999", lg: "0" },
                  textDecoration: "none",
                  transition: "transform .5s",
                  "&:hover": {
                    transform: "scale(1.15)",
                  },
                  "&:after": {
                    content: "''",
                    display: "block",
                    position: "absolute",
                    borderRadius: "4em",
                    left: "0",
                    top: "0",
                    width: "100%",
                    height: "100%",
                    opacity: "0",
                    transition: "all 0.25s",
                    boxShadow: { xs: "1px 1px 10px 40px blue", md: "unset" },
                  },
                  "&:active:after": {
                    boxShadow: { xs: "1px 1px 5px 5px blue", md: "unset" },
                    position: { xs: "absolute", md: "unset" },
                    borderRadius: { xs: "4em", md: "unset" },
                    left: "0",
                    top: "0",
                    opacity: "1",
                    transition: "0s",
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
                  position: "relative",
                  left: { xs: "3em", md: "unset" },
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
              <MuiNextLink
                color="#ffffff"
                variant="button"
                href="/login"
                sx={{
                  position: "relative",
                  left: { xs: "2em", md: "unset" },
                  zIndex: { xs: "999", lg: "0" },
                  fontSize: { xs: "1.8em", md: "2em" },
                  letterSpacing: "1px",
                  mt: "3px",
                  textDecoration: "none",
                  transition: "transform .5s",
                  "&:after": {
                    content: "''",
                    display: "block",
                    position: "absolute",
                    borderRadius: "4em",
                    left: {xs:"0",md:"unset"},
                    top: {xs:"0",md:"unset"},
                    width: {xs:"100%",md:"unset"},
                    height: {xs:"100%",md:"unset"},
                    opacity: {xs:"0",md:"unset"},
                    transition: "all 0.25s",
                    boxShadow: { xs: "1px 1px 10px 40px blue", md: "unset" },
                  },
                  "&:active:after": {
                    boxShadow: { xs: "1px 1px 5px 5px blue", md: "unset" },
                    position: { xs: "absolute", md: "unset" },
                    borderRadius: { xs: "4em", md: "unset" },
                    left: {xs:"0",md:"unset"},
                    top: {xs:"0",md:"unset"},
                    opacity: {xs:"1",md:"unset"},
                    transition: {xs:"0s",md:"unset"},
                  },
                  "&::after":{
                    content: {md:"''"},
                    position: {md:"absolute"},
                    bottom: {md:"0"},
                    left: {md:"0"},
                    width: {md:"100%"},
                    height: {md:".1em"},
                    transform: {md:"scale(0)"},
                    transformOrigin: {md:"center"},
                    backgroundColor:{md:"yellow"},
                    opacity: {md:"0"},
                    transition:{md:"opacity 1000ms, transform 400ms"},
                  },
                  "&:hover::after":{
                    opacity: {md:"1"},
                    transform:{md:"scale(1)"},
                  },
                }}
              >
                Login
              </MuiNextLink>
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
                ml: { xs: "0", lg: "2em" },
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
    </ClickAwayListener>
  );
}

export default ClippedDrawer;
