import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>

        {/* <!-- Primary Meta Tags --> */}

        <meta name="title" content="The Elephangelist" />
        <meta
          name="description"
          content="Poznejte příběh Arthura a pomozte mu ochránit slony před vyhynutím"
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.elephangelist.cz" />
        <meta property="og:title" content="The Elephangelist" />
        <meta
          property="og:description"
          content="Poznejte příběh Arthura a pomozte mu ochránit slony před vyhynutím"
        />
        <meta
          property="og:image"
          content="https://www.elephangelist.cz/assets/og_image.jpg"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.elephangelist.cz" />
        <meta property="twitter:title" content="The Elephangelist" />
        <meta
          property="twitter:description"
          content="Poznejte příběh Arthura a pomozte mu ochránit slony před vyhynutím"
        />
        <meta
          property="twitter:image"
          content="https://www.elephangelist.cz/assets/og_image.jpg"
        ></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
