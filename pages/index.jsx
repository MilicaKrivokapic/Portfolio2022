import Head from "next/head"
import Hero from "../components/Hero"
import About from "../components/About"
import NavBar from "../components/NavBar/Index"

export default function Home() {
  return (
    <>
      <Head>
        <title className=" text-fuchsia-blue">Milican portfolio ✨</title>
        <link rel="icon" href="darkbunny.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <NavBar />
      <main>
        <Hero />
        <About />
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t"></footer>
    </>
  )
}
