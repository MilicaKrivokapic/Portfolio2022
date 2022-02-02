import woman from "./img/woman.jpg"
import man from "./img/man.jpg"
import lady from "./img/lady.jpg"
import React from "react"
import ChevronLeft from "./ChevronLeft"
import ChevronRight from "./ChevronRight"

const images = [woman, man, lady]

const comments = [
  { img: woman, txt: "Tosi kiva!" },
  { img: man, txt: "Erittäin jees! <3" },
  { img: lady, txt: "5/5" },
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
      className={`absolute text-white text-2xl z-10  h-10 w-10 flex items-center justify-center top-[40%] ${
        isLeft ? "left-2" : "right-2"
      }`}
    >
      <span role="img" aria-label={`Arrow ${isLeft ? "left" : "right"}`}>
        {isLeft ? <ChevronLeft /> : <ChevronRight />}
      </span>
    </button>
  )

  return (
    <div className="p-12 flex justify-center w-screen items-center">
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
                className="w-full flex-shrink-0 rounded-full flex flex-col items-center justify-center"
              >
                <div className="lg:w-[18%] w-[50%] sm:w-[38%] p-3 bg-gradient-to-tl from-indigo-900 to-sky-600 rounded-full">
                  <img className="rounded-full " src={comment.img.src} />
                </div>
                <span className="font-Work text-lg mt-4">{comment.txt}</span>
              </div>
            )
          })}
          {sliderControl()}
        </div>
      </div>
    </div>
  )
}
