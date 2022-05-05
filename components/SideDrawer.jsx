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
            <MuiNextLink href={path} color="#ffffff">
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
            <MuiNextLink href="/binder" color="#ffffff">
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
          marginBottom: "4em",
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
