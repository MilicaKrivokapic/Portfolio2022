import Image from "next/image"
import Milica from "../components/img/circle_portfolio.png"
import RabbitHole from "../components/img/rabbithole.gif"
const Hero = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-1 items-center justify-items-center overflow-hidden h-screen xl:h-screen">
      <div className=" col-start-1 col-span-1 row-span-1 row-start-1 xl:-mt-[27rem] xl:-mb-[17rem] font-Work font-semibold text-[120vw] lg:text-[70vw] xl:text-[60vw] z-20 text-jazzberry-jam-200/20 mix-blend-color max-w-screen translate-x-2">
        M
      </div>
      <div className=" col-start-1 col-span-1 row-span-1 row-start-1 xl:-mt-[27rem] xl:-mb-[17rem] font-Work font-semibold text-[120vw] lg:text-[70vw] xl:text-[60vw] z-10 text-jazzberry-jam-700/50 mix-blend-overlay translate-x-4">
        M
      </div>
      <div className=" col-start-1 col-span-1 row-span-1 row-start-1 xl:-mt-[27rem] xl:-mb-[17rem] font-Work font-semibold text-[120vw] lg:text-[70vw] xl:text-[60vw] translate-x-1 mix-blend-hue  text-fuchsia-blue-600/20">
        M
      </div>
      <div
        className="col-start-1 col-span-1 row-span-1 row-start-1"
        style={{
          backgroundImage: "url(astro.gif)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" col-start-1 col-span-1 row-span-1 row-start-1 xl:-mt-[27rem] xl:-mb-[17rem] font-Work font-semibold text-black mix-blend-screen bg-white text-[120vw] lg:text-[70vw] xl:text-[60vw] ">
          M
        </div>
      </div>
      {/* <div className=" col-start-1 col-span-1 row-span-1 row-start-1 w-1/2">
        <Image src={Milica} width={700} height={700} className="" />
      </div> */}
    </div>
  )
}

export default Hero
