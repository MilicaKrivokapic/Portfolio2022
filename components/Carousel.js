import joonas from "./img/joonas.png"
import mikko from "./img/mikko.png"
import vaapu from "./img/vaapu.png"
import React from "react"
import ChevronLeft from "./ChevronLeft"
import ChevronRight from "./ChevronRight"

const images = [joonas, mikko, vaapu]

const comments = [
  {
    img: joonas,
    name: "Joonas Pitkonen",
    title: "Tiimivastaava, DT Helsinki",
    txt: ' "Teknisen osaamisensa lisäksi Milican vahvuuksia ovat huolellisuus, sinnikkyys, loistavat sosiaaliset taidot sekä aito halu oppia uutta. Suosittelen lämpimästi Milica Krivokapicia ohjelmistokehittäjän tehtäviin." ',
  },
  {
    img: mikko,
    name: "Mikko Karjanmaa",
    title: "Työkaveri/Vuohi Media",
    txt: ' "Milica on asioita monesta näkökulmasta tutkiva työkaveri jonka kanssa on helppo puhua" ',
  },
  {
    img: vaapu,
    name: "Vaapukka Postimerkki",
    title: "Pentu, kotitoimistokoira",
    txt: ' "Milica on hyvä kotityökaveri, vaikka joskus minä kovasti puren ja suutun, kun hän ei anna minun tehdä tuhotöi... grrhöm, tarkoitan kotitöitäni." ',
  },
]

export default function Carousel() {
  const [currentImage, setCurrentImage] = React.useState(0)

  const refs = images.map((img) => React.createRef())

  const scrollToImage = (i) => {
    setCurrentImage(i)
    refs[i].current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    })
  }
  const totalImages = images.length

  const nextImage = () => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0)
    } else {
      scrollToImage(currentImage + 1)
    }
  }

  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(totalImages - 1)
    } else {
      scrollToImage(currentImage - 1)
    }
  }

  const sliderControl = (isLeft) => (
    <button
      type="button"
      onClick={isLeft ? previousImage : nextImage}
      className={`absolute text-white text-2xl z-10  h-10 w-10 flex items-center justify-center top-[12.5vw] md:top-[16vw] lg:top-[8vw] ${
        isLeft ? "xl:left-80 left-2 " : "xl:right-80 right-2"
      }`}
    >
      <span role="img" aria-label={`Arrow ${isLeft ? "left" : "right"}`}>
        {isLeft ? <ChevronLeft /> : <ChevronRight />}
      </span>
    </button>
  )

  return (
    <div className="p-12 flex justify-center w-full items-center">
      <div className="relative w-full">
        <div
          className="w-full"
          style={{
            display: "inline-flex",
            overflowX: "hidden",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {sliderControl(true)}
          {comments.map((comment, i) => {
            return (
              <div
                key={i}
                ref={refs[i]}
                className="w-full flex-shrink-0 rounded-full flex flex-col items-center justify-start"
              >
                <div className="lg:w-[18%] w-[50%] sm:w-[38%] rounded-full bg-transparent drop-shadow-md ">
                  <img className="rounded-full" src={comment.img.src} />
                </div>
                <span className="font-Work text-sm md:text-lg font-bold text-blue-800 mt-4">
                  {comment.name}
                </span>
                <span className="font-Work text-sm md:text-lg font-bold text-blue-800">
                  {comment.title}
                </span>
                <div className="text-center font-Work xl:text-lg mt-4 w-[35rem] max-w-full px-2 leading-5">
                  {comment.txt}
                </div>
              </div>
            )
          })}
          {sliderControl()}
        </div>
      </div>
    </div>
  )
}
