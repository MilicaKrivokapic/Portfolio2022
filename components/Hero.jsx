import Image from "next/image"
import astro from "./img/astropic.png"
const Hero = () => {
  return (
    <>
      <h1 aria-label="Milica's portfolio"></h1>
      <div
        className="grid grid-cols-1 grid-rows-1 items-center justify-items-center overflow-hidden h-screen xl:h-screen xl:mt-12"
        aria-hidden
      >
        <div className=" col-start-1 col-span-1 row-span-1 row-start-1 xl:-mt-[27rem] xl:-mb-[17rem] font-Work font-semibold text-[120vw] lg:text-[70vw] xl:text-[60vw]  mix-blend-overlay  text-fuchsia-blue-600/20 z-50">
          M
        </div>
        <div className=" col-start-1 col-span-1 row-span-1 row-start-1 xl:-mt-[27rem] xl:-mb-[17rem] font-Work font-semibold text-[120vw] lg:text-[70vw] xl:text-[60vw] z-40 text-jazzberry-jam-100/30 mix-blend-darken bg-blend-overlay max-w-screen translate-x-2">
          M
        </div>
        <div
          className="col-start-1 col-span-1 row-span-1 row-start-1 grid grid-cols-1 grid-rows-1 items-center"
          // style={{
          //   backgroundImage: "url(astro.gif)",
          //   backgroundSize: "contain",
          //   backgroundPosition: "center",
          //   backgroundRepeat: "no-repeat",
          // }}
        >
          <video
            autoPlay="autoplay"
            loop
            muted
            className="col-start-1 row-start-1 w-full z-10 motion-reduce:hidden"
          >
            <source src="/astroweb.webp" type="video/webp" />
            <source src="/astrovideo.mp4" type="video/mp4" />
          </video>
          <div className="col-start-1 row-start-1 w-full">
            <Image src={astro} layout="responsive" className="z-0" />
          </div>
          <div className="col-start-1 col-span-1 row-span-1 row-start-1 xl:-mt-[27rem] xl:-mb-[17rem] font-Work font-semibold text-black mix-blend-screen bg-white text-[120vw] lg:text-[70vw] xl:text-[60vw] -ml-[3vw] xl:-ml-[1vw] z-20">
            M
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
