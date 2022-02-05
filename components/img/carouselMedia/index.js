import media1 from "./hh_bookshop.png"
import media2 from "./hh_bookshop2.png"
import media3 from "./hh_bookshop3.png"

export const media = [media1, media2, media3]
export const mediaByIndex = (index) => media[index % media.length]
