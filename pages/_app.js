import "/styles/globals.css";
import "/styles/pokeBall.css";
import "/styles/pokeLoader.css";
import "/styles/carousel.css";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import createEmotionCache from "../styles/createEmotionCache";
import Head from "next/head";
import theme from "/styles/theme";
import ClippedDrawer from "/components/ClippedDrawer";
import { StoreProvider } from "/utils/globalStore";

const clientSideEmotionCache = createEmotionCache();

export const navLinks = [
  { title: `Home`, path: `/` },
  { title: "Search", path: "/search" },
  { title: "About", path: "/about" },
];

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <StoreProvider>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>Pokemon Trading Card Binder</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ClippedDrawer navLinks={navLinks} />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </StoreProvider>
  );
}

export default MyApp;
