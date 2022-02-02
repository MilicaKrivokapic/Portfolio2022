import circle from "./img/circle_portfolio.png"
import Image from "next/image"

export default function More() {
  return (
    <section>
      {/* <div className="flex items-center justify-center mt-12">
        <div className="flex items-center justify-center w-5/6 h-24 border-t"></div>
      </div> */}
      <div className="w-full flex justify-center">
        <div className="flex lg:flex-row-reverse flex-col justify-around mb-32 bg-gradient-to-b md:bg-gradient-to-l from-[#010307] to-[#00003A] text-white py-20 w-full px-7 xl:px-20 lg:w-5/6 lg:rounded-2xl mt-40">
          <div className="grid grid-cols-1 grid-rows-1 h-full items-center justify-items-center xl:justify-items-start xl:items-center ml-10 -mt-36 sm:-mt-44 lg:-mt-0">
            <div
              className="col-start-1 col-span-1 row-span-1 row-start-1 -translate-x-12 w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
              style={{
                backgroundImage: "url(stars.gif)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                clipPath: "circle(50%)",
                shapeOutside: "circle(50%)",
              }}
            ></div>
            <div className=" col-start-1 col-span-1 row-span-1 row-start-1  mix-blend-normal w-[150px] h-[150px] md:w-[200px] md:h-[200px]">
              <Image src={circle} />
            </div>
            <div
              className="col-start-1 col-span-1 row-span-1 row-start-1 -translate-x-12 mix-blend-screen w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
              style={{
                backgroundImage: "url(stars.gif)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                clipPath: "circle(50%)",
              }}
            ></div>
          </div>

          <div className="font-Work flex flex-col justify-center items-center text-left">
            <h2 className="text-center text-3xl font-Quick font-semibold pb-7 py-14 ">
              Lisää minusta
            </h2>
            <div
              className="lg:px-10 lg:pr-24 "
              // className="[clip-path:circle(50%_at_20%_30%)]
              //   [shape-outside:circle(50%_at_20%_30%)]"
            >
              <p>
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring which I enjoy with my whole
                heart. I am alone, and feel the charm of existence in this spot,
                which was created for the bliss of souls like mine. I am so
                happy, my dear friend, so absorbed in the exquisite sense of
                mere tranquil existence, that I neglect my talents.
              </p>

              <p>
                I should be incapable of drawing a single stroke at the present
                moment; and yet I feel that I never was a greater artist than
                now.
              </p>

              <p>When, while the lovely valley teems with</p>

              <div className="">
                <p>
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy with my
                  whole heart.
                </p>

                <p>
                  I am alone, and feel the charm of existence in this spot,
                  which was created for the bliss of souls like mine.
                </p>

                <p>
                  I am so happy, my dear friend, so absorbed in the exquisite
                  sense of mere tranquil existence, that I neglect my talents.
                </p>

                <p>
                  I should be incapable of drawing a single stroke at the
                  present moment; and yet I feel that I never was a greater
                  artist than now.
                </p>

                <p>When, while the lovely valley teems with</p>

                <div className=" font-Quick font-semibold text-center mt-10">
                  Haluatko jatkaa tutustumista ja jutella lisää? Ota yhteyttä
                  <p>yhteyslinkki</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
