import Link from "next/link"
import EmblaCarousel from "../components/EmblaCarousel"

export default function CaseWrapper({
  returnId,
  h2,
  bgImage,
  badges,
  heroImg,
  gradient,
  children,
  linkSection,
  media,
  carouselAlt,
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

        <div className="fixed left-2 top-10 w-10 h-10 mix-blend-difference grid grid-cols-1 grid-rows-1 items-center z-30">
          <div className="col-start-1 col-span-1 row-span-1 row-start-1">
            <Link href={`/#${returnId}`}>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className=""
                >
                  <path
                    className=""
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="48"
                    d="M244 400L100 256l144-144M120 256h292"
                  />
                </svg>
              </a>
            </Link>
          </div>
          <div className="col-start-1 col-span-1 row-span-1 row-start-1">
            <Link href={`/#${returnId}`}>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="hover:animate-ping"
                >
                  <path
                    className=""
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="48"
                    d="M244 400L100 256l144-144M120 256h292"
                  />
                </svg>
              </a>
            </Link>
          </div>
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
      </div>

      <div className=" sm:px-8 md:px-28 xl:px-64 2xl:px-96 text-center bg-white">
        <div className="font-Work text-base text-left bg-white border-[1px] border-gray-100/10 py-10 px-10 rounded-3xl backdrop-blur-sm -mt-[6rem] shadow-xl shadow-stone-600/20 relative lg:px-16 md:text-lg lg:text-xl lg:leading-8 z-0">
          {children}

          {media.length > 0 && (
            <div className="text-lg font-bold text-center">
              <EmblaCarousel media={media} alt={carouselAlt} />
            </div>
          )}
          {/* This comparison ensures that if there are no pictures in the media array, it will not be rendered. */}

          <div className="flex mt-8 items-center justify-center w-full">
            {linkSection}
          </div>
        </div>
      </div>
    </section>
  )
}
