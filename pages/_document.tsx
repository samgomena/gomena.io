import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/doge.ico" />
          <meta name="description" content="Sam Gomena" />
          <link
            rel="preload"
            href="/CircularStd-Black.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/CircularStd-Black.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <script async defer data-website-id="d7f96a67-3894-467d-b9f2-cce03afc640b" src="https://umami-alpha-ebon.vercel.app/umami.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
