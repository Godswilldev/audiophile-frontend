import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="google-site-verification"
          content="JjLqoWLNSM8dEE81UmadtzdyF1xPk4tzG4bLg50cwt4"
        />
        <meta
          name="description"
          content="Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
        />
        <link rel="icon" href="assets/shared/desktop/logo.svg" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
