import { UIBadge } from "../components/Buttons/Badges"
import { CSharpBadge } from "../components/Buttons/Badges"
import Norse from "../components/img/norse_nettiin.png"
import Image from "next/image"
import cardboard from "../components/img/cardboard.png"
import CaseWrapper from "../components/CaseWrapper"
import { WordpressBadge } from "../components/Buttons/Badges"

import media1 from "../components/img/norse_nettiin.png"
import media2 from "../components/img/norsenkoti.png"
import media3 from "../components/img/norsupeli_talkkari.png"
const media = [media1, media2, media3]

export default function Norsupeli() {
  return (
    <CaseWrapper
      h2="Norsupeli"
      badges={
        <>
          <UIBadge /> <CSharpBadge />
        </>
      }
      media={media}
      gradient={"to-pink-700"}
      heroImg={<Image src={Norse} layout="responsive" quality={100}></Image>}
      bgImage={cardboard.src}
      linkSection={
        <a
          href="https://hexenhammerbooks.com/"
          className="font-Quick font-bold text-center text-red-700 underline"
        >
          Tähän tulee linkki
        </a>
      }
    >
      <p>tekstiä juuh</p>
    </CaseWrapper>
  )
}
