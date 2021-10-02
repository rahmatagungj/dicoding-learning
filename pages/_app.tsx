import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>Dicoding Learning</title>
      <link rel="stylesheet" href="css/bootstrap.min.css" />
    </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
