const Hero = () => {
  return (
    <>
      <h1 aria-label="Milica's portfolio"></h1>
      <div
        className="grid grid-cols-1 grid-rows-1 items-center justify-items-center overflow-hidden h-screen xl:h-screen xl:mt-12"
        aria-hidden
      >
        <div className=" col-start-1 col-span-1 row-span-1 row-start-1 xl:-mt-[27rem] xl:-mb-[17rem] font-Work font-semibold text-[120vw] lg:text-[70vw] xl:text-[60vw]  mix-blend-overlay  text-fuchsia-blue-600/20 z-30">
          M
        </div>
        <div className=" col-start-1 col-span-1 row-span-1 row-start-1 xl:-mt-[27rem] xl:-mb-[17rem] font-Work font-semibold text-[120vw] lg:text-[70vw] xl:text-[60vw] z-10 text-jazzberry-jam-100/30 mix-blend-darken bg-blend-overlay max-w-screen translate-x-2">
          M
        </div>
        <div
          className="col-start-1 col-span-1 row-span-1 row-start-1"
          style={{
            backgroundImage: "url(astro.gif)",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
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
    </>
  )
}

export default Hero
