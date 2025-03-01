import Document, { Html, Head, Main, NextScript } from "next/document";
import createEmotionServer from "@emotion/server/create-instance";
import createEmotionCache from "../utils/createEmotionCache";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const originalRenderPage = ctx.renderPage;

    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: any) => (props: any) => (
          <App emotionCache={cache} {...props} />
        ),
      });

    const initialProps = await Document.getInitialProps(ctx);
    const emotionStyles = extractCriticalToChunks(initialProps.html);

    return {
      ...initialProps,
      styles: [
        // ...initialProps.styles,
        ...emotionStyles.styles.map((style) => (
          <style
            key={style.key}
            data-emotion={`${style.key} ${style.ids.join(" ")}`}
            dangerouslySetInnerHTML={{ __html: style.css }}
          />
        )),
      ],
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
            <link rel="manifest" href="/manifest.json" />
          {/* Your meta tags or other head elements */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
