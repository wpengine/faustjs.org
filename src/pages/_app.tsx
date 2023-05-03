import "../../faust.config";
import React from "react";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import createEmotionCache from "../utility/createEmotionCache";
import lightTheme from "../styles/theme/lightTheme";
import { useRouter } from "next/router";
import { FaustProvider } from "@faustwp/core";
import "../styles/globals.css";
import { AppProps } from "next/app";
const clientSideEmotionCache = createEmotionCache();

export type FaustAppProps = AppProps & { emotionCache: EmotionCache };

export default function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: FaustAppProps) {
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
