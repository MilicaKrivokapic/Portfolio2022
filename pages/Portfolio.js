import { UIBadge, NextBadge, TailwindBadge } from "../components/Buttons/Badges"
import AstroDoggo from "../components/img/AstroDog.png"
import Image from "next/image"
import bg from "../components/img/bg-2moz.jpg"
import CaseWrapper from "../components/CaseWrapper"

import media1 from "../components/img/norse_nettiin.png"
import media2 from "../components/img/norsenkoti.png"
import media3 from "../components/img/norsupeli_talkkari.png"
const media = [media1, media2, media3]

export default function Portfolio() {
  return (
    <CaseWrapper
      h2="Portfolio"
      badges={
        <>
          <UIBadge /> <NextBadge /> <TailwindBadge />
        </>
      }
      media={media}
      gradient={"to-cyan-600"}
      heroImg={
        <Image src={AstroDoggo} layout="responsive" quality={100}></Image>
      }
      bgImage={bg.src}
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
        Halusin tehdä mukavan portfolion, josta ehkä voisi hieman rivien
        väleistä nähdä minkälainen tyyppi olen. Halusin näyttää osaavani
        rakentaa suht omaperäisen näköisiä sivuja, joita ei olisi voitu
        toteuttaa pelkästään esimerkiksi Bootstrap-komponenttikirjaston tai muun
        vastaavan valmiskirjaston avulla, jotta se toimisi myös itsessään
        teknisenä/desing-näyttönä.
      </p>
      <p>
        {" "}
        Idea portfolion sielulle, eli Hero-kuvan suunnattomalle M-kirjaimelle
        lähti Digitalentsin asiakasprojektista. Töissä suunnittelin asiakkaalle
        layoutin, jossa pääosassa kellui etusivulla valtava kirjain.
        Suunnittelin animoivani sen siten, että taustalla liikkuu CSS:llä
        liikuteltava gradienttiliuku. Tätä ideaa ei lopullisessa työssä
        tultukaan käyttämään koska layout-suunnitelmaksi valittiin toinen
        ehdotelmani. Erikoinen jättikirjain jäi kuitenkin kummittelemaan mieleni
        perukoille siinä määrin, että minun oli pakko siirtää idea
        olemassaolevaksi, tosin muokaten ideaa niin, ettei se liikaa
        muistuttaisi alkuperäistä suunnitelmaa asiakkaalle. Jättimäinen
        M-kirjain onkin ollut varmasti koko portfolion työläin osio valmistaa.
        Se, kuten kaikki muutkin päällekkäin olevat elementit on toteutettu
        gridillä, jonka ensimmäiseen soluun elementit on pakotettu päällekkäin,
        ja sitten käytetty CSS:n sekoitustiloja toivotun efektin saamiseksi.
      </p>
      <p></p>
      <p>
        Pelin teko tyssäsi siihen, että minulla ei ollut sen tarkempaa
        suunnitelmaa pelin käsikirjoituksesta tai juonesta, ja aloin
        harjoittelemaan Wordpress-teemojen tekemistä.
      </p>
    </CaseWrapper>
  )
}
