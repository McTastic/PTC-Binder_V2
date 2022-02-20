import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MuiNextLink from "./MuiNextLink";
import useStyles from "styles/styles";
import "../styles/navbar.module.css";

const drawerWidth = 240;

const ClippedDrawer = ({ navLinks }) => {
  const classes = useStyles();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      ></AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "rgb(6,24,54)",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
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
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
};

export default ClippedDrawer;
