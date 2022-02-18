import React, { useContext, useState, useEffect } from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Link,
  Switch,
  Badge,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import Head from "next/head";
import NextLink from "next/link";
import Router from "next/router";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "/styles/theme";
import useStyles from "/styles/styles";

export default function Layout({ title, description, children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>
          {title ? `${title} - Pokemon Card Binder` : "Pokemon Card Binder"}
        </title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar className={classes.navbar} position="static">
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography className={classes.brand}>
                  Pokemon Trading Card Binder
                </Typography>
              </Link>
            </NextLink>
            <div className={classes.grow}></div>
            <div>
              <NextLink href="/login" passHref>
                <Link>Login</Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography>Copyright 20??. All rights reserved.@@.</Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
}
