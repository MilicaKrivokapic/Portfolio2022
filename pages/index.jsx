import Head from "next/head"
import Hero from "../components/Hero"
import About from "../components/About"
import RecentWork from "../components/RecentWork"
import More from "../components/More"
import Testimonials from "../components/Testimonials"
import NavBar from "../components/NavBar/Index"

export default function Home() {
  return (
    <>
      <Head></Head>
      <NavBar />
      <main>
        <Hero />
        <About />
        <RecentWork />
        <More />
        <Testimonials />
      </main>

      <footer className=""></footer>
    </>
  )
}
