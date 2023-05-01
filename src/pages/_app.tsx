import "../../faust.config.js";
import React from "react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { FaustProvider } from "@faustwp/core";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import createEmotionCache from "../utility/createEmotionCache.js";
import lightTheme from "../styles/theme/lightTheme.js";
import "../styles/globals.scss";

const clientSideEmotionCache = createEmotionCache();

export type FaustAppProps = AppProps & { emotionCache: EmotionCache };

export default function MyApp(props: FaustAppProps) {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;

  const router = useRouter();

  return (
    <FaustProvider pageProps={pageProps}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <Component {...pageProps} key={router.asPath} />
        </ThemeProvider>
      </CacheProvider>
    </FaustProvider>
  );
}
