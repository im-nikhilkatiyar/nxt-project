import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../utils/createEmotionCache";
import { CssBaseline } from "@mui/material";
import type { AppProps } from "next/app";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: MyAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <CssBaseline />
      <Component {...pageProps} />
    </CacheProvider>
  );
}
