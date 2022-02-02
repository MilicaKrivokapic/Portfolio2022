import Carousel from "./Carousel"
import Image from "next/image"

export default function Testimonials() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="font-bold text-2xl font-Quick mb-4 ">Suosituksia</h2>
      <p className="font-Work text-center">
        Tyypit joiden kanssa olen työskennelleet haluavat sanoa sanasen minusta:
      </p>
      <Carousel />
    </div>
  )
}
