import Hero from "../components/Hero"
import About from "../components/About"
import RecentWork from "../components/RecentWork"
import More from "../components/More"
import Testimonials from "../components/Testimonials"

export default function Home() {
  return (
    <>
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
