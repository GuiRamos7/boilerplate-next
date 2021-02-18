import { AppProps } from "next/dist/next-server/lib/router/router";
import Head from "next/head";
import GlobalStyled from "styles/global";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - Borlerplate</title>
        <link rel="shortchut icon" href="/img/icon-512.png" />
        <link rel="shortchut icon" href="/img/icon-192.png" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyled />
      <Component {...pageProps} />
    </>
  );
}

export default App;
