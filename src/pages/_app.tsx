import 'faust.config';
import React, { useEffect } from 'react';
import { FaustProvider } from '@faustwp/core';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import createEmotionCache from 'utility/createEmotionCache';
import * as gtag from 'utility/gtag';
import lightTheme from 'styles/theme/lightTheme';
import 'WordPressGlobalStylesheet';
import '@faustwp/core/dist/css/toolbar.css';
import 'styles/global.scss';
import FeedbackWrapper from 'components/FeedbackWrapper';

const clientSideEmotionCache = createEmotionCache();

export type FaustAppProps = AppProps & { emotionCache: EmotionCache };

export default function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: FaustAppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <FeedbackWrapper>
      <FaustProvider pageProps={pageProps}>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <Component {...pageProps} key={router.asPath} />
          </ThemeProvider>
        </CacheProvider>
      </FaustProvider>
    </FeedbackWrapper>
  );
}
