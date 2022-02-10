export default function WorkCard({
  bgImage,
  cardName,
  link,
  cardColor,
  bgSize = "cover",
  shadow,
  btnColor,
  children,
}) {
  return (
    <>
      <div
        className={`grid grid-cols-1 grid-rows-1 aspect-[3/2] rounded-2xl overflow-hidden`}
      >
        <div
          className=" row-start-1 row-span-1 col-start-1 col-span-1 "
          style={{
            backgroundImage: `url(${bgImage.src})`,
            backgroundPosition: "center",
            backgroundSize: bgSize,
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className={` ${cardColor} w-full h-full  `} />
        </div>
        {/* the class "blurred" is defined in globals.css, therefore it is not a Tailwind class, but my own fallback for Firefox. Surprisingly Firefox doesn't support background filter rule, as the other browsers do" */}
        <div className="opacity-0 hover:opacity-100 bg-transparent h-full w-full flex flex-col items-center justify-center row-start-1 row-span-1 col-start-1 col-span-1 p-6 blurred transition duration-500 ease-out">
          {children}
          <h3 className="text-white text-center font-Work font-bold mb-6 text-2xl drop-shadow-2xl xl:mb-13 ">
            {cardName}
          </h3>
          <button
            className={`font-Work ${btnColor} font-semibold text-white rounded-xl py-2 px-4  ${shadow} `}
          >
            <a className="" href={link}>
              Katso lisätietoja
            </a>
          </button>
        </div>
      </div>
    </>
  )
}
