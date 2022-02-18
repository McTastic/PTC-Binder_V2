import "/styles/globals.css";
import "/styles/pokeBall.css";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "/styles/createEmotionCache";

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return <Component {...pageProps} />;
}

export default MyApp;
