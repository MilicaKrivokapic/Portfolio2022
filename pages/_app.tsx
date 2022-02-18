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

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Parisienne&family=Quicksand:wght@300;400;500;600;700&family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
