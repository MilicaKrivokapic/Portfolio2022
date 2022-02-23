import "../styles/globals.css"
import type { AppProps } from "next/app"
import Head from "next/head"
import Footer from "../components/Footer"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Milica's portfolio</title>

        <meta name="description" content="Milica's portfolio" />
        <meta name="author" content="Milica Krivokapic" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="darkbunny.png" />
        <meta
          property="og:image"
          content="../components/img/portfoliomoz.jpg"
        />
        <meta
          property="og:description"
          content="Frontend-kehittäjä tarjolla! Tsekkaa portfolioni ->"
        />
        <meta property="og:title" content="Milican Frontend-portfolio" />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
