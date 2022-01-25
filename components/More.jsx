import circle from "./img/circle_portfolio.png"
import Image from "next/image"

export default function More() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center w-5/6 h-24 border-t"></div>
      </div>
      <div className="w-full flex justify-center">
        <div className="flex flex-row-reverse justify-around mb-64 bg-gradient-to-l from-[#010307] to-[#00003A] text-white py-20 w-5/6 rounded-2xl">
          <div className="grid grid-cols-1 grid-rows-1">
            <div
              className="col-start-1 col-span-1 row-span-1 row-start-1 -translate-x-12 w-[200px] h-[200px]"
              style={{
                backgroundImage: "url(stars.gif)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                clipPath: "circle(50%)",
              }}
            ></div>
            <div className="  col-start-1 col-span-1 row-span-1 row-start-1 w-[200px] h-[200px] mix-blend-normal">
              <Image src={circle} width={200} height={200} />
            </div>
            <div
              className="col-start-1 col-span-1 row-span-1 row-start-1 -translate-x-12 w-[200px] h-[200px] mix-blend-screen "
              style={{
                backgroundImage: "url(stars.gif)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                clipPath: "circle(50%)",
              }}
            ></div>
          </div>

          <div className="font-Work flex flex-col justify-center items-center text-left">
            <h2 className="text-center text-3xl font-Quick font-semibold pb-6 ">
              Lisää minusta
            </h2>
            <div className="">
              <p>
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring which I enjoy with my whole
                heart.
              </p>

              <p>
                I am alone, and feel the charm of existence in this spot, which
                was created for the bliss of souls like mine.
              </p>

              <p>
                I am so happy, my dear friend, so absorbed in the exquisite
                sense of mere tranquil existence, that I neglect my talents.
              </p>

              <p>
                I should be incapable of drawing a single stroke at the present
                moment; and yet I feel that I never was a greater artist than
                now.
              </p>

              <p>When, while the lovely valley teems with</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
