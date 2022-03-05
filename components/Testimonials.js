import Carousel from "./Carousel"
import Image from "next/image"

export default function Testimonials() {
  return (
    <div
      aria-labelledby="testimonials-title"
      className="flex flex-col justify-center items-center"
    >
      <h2
        id="testimonials-title"
        className="font-bold text-4xl font-Quick mb-4 "
      >
        Suosituksia
      </h2>
      <p className="font-Work text-center text-xl">
        Tyypit joiden kanssa olen työskennellyt haluavat sanoa sanasen minusta:
      </p>
      <Carousel />
    </div>
  )
}
