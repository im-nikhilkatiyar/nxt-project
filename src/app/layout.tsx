import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.scss";
import createEmotionCache from "../utils/createEmotionCache";
import createEmotionServer from "@emotion/server/create-instance";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Setup Emotion for SSR
const cache = createEmotionCache();
const { extractCriticalToChunks } = createEmotionServer(cache);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const emotionStyles = extractCriticalToChunks("");

  return (
    <html lang="en">
      <head>
        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <script src="https://cdn.lordicon.com/pzdvqjsp.js" defer></script>
        
        {/* Meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        
        {/* Inject Emotion Critical CSS */}
        {emotionStyles.styles.map((style) => (
          <style
            key={style.key}
            data-emotion={`${style.key} ${style.ids.join(" ")}`}
            dangerouslySetInnerHTML={{ __html: style.css }}
          />
        ))}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
