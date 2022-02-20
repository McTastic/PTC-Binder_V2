import * as React from "react";
import Avatar from '@mui/material/Avatar';
import Container from "@mui/material/Container";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
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
import MuiNextLink from "./MuiNextLink";
import PokeBall from "./PokeBall";
import useStyles from "styles/styles";
import "../styles/navbar.module.css";
import { set } from "react-hook-form";

const drawerWidth = 240;

function ResponsiveDrawer({ navLinks }) {
  const { window } = navLinks;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <PokeBall />
      <List
      onClick={handleDrawerToggle}  //<--closes drawer when link clicked
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

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const classes = useStyles();
  return (
    <Box sx={{ display: "flex", justifyContent:"flex-end" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: `rgba(7, 7, 7, 0.726)`,
          backdropFilter: `blur(5px)`,
          height: "5em",
          "& .MuiContainer-root":{
            justifyContent:"flex-end"
          }
        }}
      >
        <Container
          maxWidth="xl"
          sx={{ display: `flex`, justifyContent: `center` }}
        >
          <MuiNextLink
            key="login"
            fontSize="1.5em"
            color="#ffffff"
            variant="button"
            href="/login"
            sx={{
              marginTop:"1em",
              zIndex:"999"
            }}
          >
            Login
          </MuiNextLink>
          <Avatar 
          sx={{
            margin:"1em 0 0 .5em"
          }}
          />
        </Container>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, }}
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
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: `rgba(7, 7, 7, 0.726)`
            },
          }}
        >
          {drawer}
        </Drawer>
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

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
