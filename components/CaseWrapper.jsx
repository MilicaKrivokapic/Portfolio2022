import EmblaCarousel from "../components/EmblaCarousel"

export default function CaseWrapper({
  h2,
  bgImage,
  badges,
  heroImg,
  gradient,
  children,
  linkSection,
  media,
}) {
  return (
    <section className="flex flex-col justify-center items-center relative">
      <div
        className={`flex flex-row relative justify-between px-4 sm:px-8 md:px-28 xl:px-64 2xl:px-96 items-center  w-full h-[70vh] overflow-hidden bg-gradient-to-b from-blue-900 ${gradient} text-center`}
      >
        <div className="absolute left-0 w-full h-full ">
          <div
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundPosition: "center",
              backgroundSize: "initial",
              backgroundRepeat: "repeat",
            }}
            className="w-full h-full opacity-40 mix-blend-color-burn"
          />
        </div>
        <div className="fixed left-2 top-10 w-10 h-10 z-50">
          <a className="" href="./">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className=""
            >
              <path
                fill="none"
                stroke="#7f1d1d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="48"
                d="M244 400L100 256l144-144M120 256h292"
              />
            </svg>
          </a>
        </div>
        <div className="flex flex-col justify-around items-start z-40">
          <h2 className=" text-[12.7vw] sm:text-6xl lg:text-[5.54rem] font-Work mb-4 font-semibold text-white">
            {h2}
          </h2>
          <div className="flex flex-row ">{badges}</div>
        </div>
        <div className=" h-16 w-16 sm:h-32 sm:w-32 hidden sm:block">
          {heroImg}
        </div>
        {/* <div className=" col-start-1 col-end-9 row-start-1 row-end-2 border-b w-full mt-5"></div> */}
      </div>

      <div className="mt-20 sm:px-8 md:px-28 xl:px-64 2xl:px-96 text-center ">
        <div className="font-Work text-base text-left bg-white border-[1px] border-gray-100/10 py-10 px-16 rounded-3xl backdrop-blur-sm -mt-48 shadow-xl shadow-stone-600/20 z-50 relative">
          {children}
          <div className="text-lg font-bold text-center mt-10">
            Snapshotteja kaupasta
            <EmblaCarousel media={media} />
          </div>
          <div className="flex mt-8 items-center justify-center w-full">
            {linkSection}
          </div>
        </div>
      </div>
    </section>
  )
}
