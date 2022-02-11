import { UIBadge } from "../components/Buttons/Badges"
import { CSharpBadge } from "../components/Buttons/Badges"
import Norse from "../components/img/norse_nettiin.png"
import Image from "next/image"
import paint from "../components/img/paintmoz.jpg"
import CaseWrapper from "../components/CaseWrapper"

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
      bgImage={paint.src}
      linkSection={
        <a
          href="https://hexenhammerbooks.com/"
          className="font-Quick font-bold text-center text-red-700 underline"
        >
          Tähän tulee linkki
        </a>
      }
    >
      <p className="mb-2">
        Norsupeli on pienimuotoinen ja keskeneräinen harrasteprojekti, josta
        kuitenkin halusin vähän kirjoitella. Aloitin norsupelin tekemisen oman
        pixel art-harrastuksen vuoksi. Pikseligrafiikan tekeminen on äärimmäisen
        rentouttavaa, kuin digitaalisen ristipistotyön pistelyä. Käytän pixel
        artin tekemiseen mielestäni ihanaa ohjelmaa nimeltään{" "}
        <a
          href="https://www.aseprite.org/"
          className=" text-pink-900 hover:text-pink-400"
        >
          Aseprite
        </a>
        . Aloitin pelin tekemisen tutoriaalisesti ensisijaisesti siksi että
        pääsisin käyttämään luomiani pikselihahmoja jossakin omassa
        projektissani. Nopeasti peli lähti paisumaan toiminnallisemmaksi, kuin
        mitä tutoriaalissa neuvottiin. Opettelin sivussa myös animaatiota ja
        yleisestiottaen Unityn käyttämistä.
      </p>
      <p>
        Olin niin innoissani pelin teosta, että tein jopa{" "}
        <a
          href="https://soundcloud.com/milica-krivokapic-373268271/sets/norsupelin-musiikkia/s-6E5OSxOggWT?si=0b523539c46544558ec5323a4294143f&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
          className="text-pink-900 hover:text-pink-400"
        >
          biisejä
        </a>{" "}
        peliin - ilman <span className="italic">minkäänlaista</span>{" "}
        musiikillista osaamista, joka kyllä kuuluu. 🤣
      </p>
      <p>
        Pelin teko tyssäsi siihen, että minulla ei ollut sen tarkempaa
        suunnitelmaa pelin käsikirjoituksesta tai juonesta, ja aloin
        harjoittelemaan Wordpress-teemojen tekemistä.
      </p>
    </CaseWrapper>
  )
}
