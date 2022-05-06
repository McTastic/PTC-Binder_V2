import React, { useContext, useState } from "react";
import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/icons-material/Menu";
import MuiNextLink from "./MuiNextLink";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Store } from "/utils/globalStore.js";

const SideDrawer = ({ navLinks }) => {
  const { state } = useContext(Store);
  const { userInfo } = state;
  const [drawerState, setDrawerState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerState({ ...drawerState, [anchor]: open });
  };

  const list = (anchor) => (
    <List
      sx={{ width: 175, marginTop: `auto`, marginBottom: `auto` }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {navLinks.map(({ title, path }, i) => (
        <ListItem key={i}>
          <ListItemIcon>
            {i % 2 === 0 ? (
              <InboxIcon className="evenIcons" color="evenIcons" />
            ) : (
              <MailIcon className="oddIcons" color="oddIcons" />
            )}
          </ListItemIcon>
          <ListItemText>
            <MuiNextLink 
            fontSize="2em" 
            href={path} 
            color="#ffffff"
            sx={{
              textDecoration:"none",
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
                boxShadow: "1px 1px 10px 40px blue"
              },
              "&:active:after":{
                boxShadow: "1px 1px 5px 5px blue",
                position: "absolute",
                borderRadius: "4em",
                left: "0",
                top:"0",
                opacity: "1",
                transition: "0s"
              }
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
            <HomeOutlinedIcon className="oddIcons" color="oddIcons" />
          </ListItemIcon>
          <ListItemText>
            <MuiNextLink 
            href="/binder" 
            color="#ffffff"
            letterSpacing="2px"
            fontSize="2em"
            sx={{
              textDecoration:"none",
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
                boxShadow: "1px 1px 10px 40px blue"
              },
              "&:active:after":{
                boxShadow: "1px 1px 5px 5px blue",
                position: "absolute",
                borderRadius: "4em",
                left: "0",
                top:"0",
                opacity: "1",
                transition: "0s"
              }
            }}
            >
              Binder
            </MuiNextLink>
          </ListItemText>
        </ListItem>
      )}
    </List>
  );

  return (
    <>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={toggleDrawer("right", true)}
        sx={{
          marginTop:"21px",
          color: `common.white`,
          display: { xs: `inline`, md: `none` },
        }}
      >
        <Menu fontSize="large" />
      </IconButton>
      <Drawer
        anchor="left"
        open={drawerState.right}
        onClose={toggleDrawer("right", false)}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            backgroundColor: `rgba(7, 7, 7, 0.726)`,
          },
        }}
      >
        {list("right")}
      </Drawer>
    </>
  );
};

export default SideDrawer;
