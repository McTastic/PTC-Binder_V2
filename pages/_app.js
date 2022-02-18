import "/styles/globals.css";
import "/styles/pokeBall.css";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import createEmotionCache from "../styles/createEmotionCache";
import Head from "next/head";
import theme from "/styles/theme";
import Header from "@components/Header";
import SideBar from "@components/ClippedDrawer"

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Pokemon Trading Card Binder</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SideBar />
        <Header />
        <Component {...pageProps} />;
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
