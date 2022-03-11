import "/styles/globals.css";
import "/styles/pokeBall.css";
import "/styles/pokeLoader.css";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import createEmotionCache from "../styles/createEmotionCache";
import Head from "next/head";
import theme from "/styles/theme";
import SideBar from "/components/ClippedDrawer";
import { StoreProvider } from "/utils/globalStore";
// import { SnackbarProvider } from "notistack";

const clientSideEmotionCache = createEmotionCache();

export const navLinks = [
  { title: `Home`, path: `/` },
  // { title: "Binder", path: "/binder" },
  { title: "Search", path: "/search" },
  { title: "About", path: "/about" },
];

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <StoreProvider>
      <CacheProvider value={emotionCache}>
        {/* <SnackbarProvider
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        > */}
        <Head>
          <title>Pokemon Trading Card Binder</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <SideBar navLinks={navLinks} />
          <Component {...pageProps} />
        </ThemeProvider>
        {/* </SnackbarProvider> */}
      </CacheProvider>
    </StoreProvider>
  );
}

export default MyApp;
