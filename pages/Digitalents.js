import { ReactBadge, CSSBadge } from "../components/Buttons/Badges"
import Coding from "../components/img/coding-ui.png"
import Image from "next/image"
import waves from "../components/img/wavesMoz.jpg"
import CaseWrapper from "../components/CaseWrapper"
import media1 from "../components/img/norse_nettiin.png"
import media2 from "../components/img/norsenkoti.png"
import media3 from "../components/img/norsupeli_talkkari.png"
const media = [media1, media2, media3]

export default function Digitalents() {
  return (
    <CaseWrapper
      h2="Digitalents Helsinki"
      badges={
        <>
          <ReactBadge /> <CSSBadge />
        </>
      }
      media={media}
      gradient={"to-yellow-600"}
      heroImg={<Image src={Coding} layout="responsive" quality={100}></Image>}
      bgImage={waves.src}
      linkSection={
        <a
          href="https://digitalentshelsinki.fi"
          className="font-Quick font-bold text-center text-yellow-400 underline shadow-inner	"
        >
          Käy kurkkaamassa kirjoittamiani Digitalentsin sivuja netissä
        </a>
      }
    >
      <div className="xl:text-lg text-base font-Work">
        <p className="mb-2">
          Aloitin urani webdevaajana Helsingin Kaupungilla, Digitalents Helsinki
          -nimisessä hankkeessa. Digitalents oli mielestäni aivan mainio
          ensimmäinen junior devaajan paikka minulle: sain paljon vapautta mutta
          myös vastuuta ja tasolleni sopivia projekteja. Digitalents Helsingin
          ideana on saattaa työelämään työelämästä pudonneita: esim. koulusta
          valmistuneita työttömiä, äitiyslomalta työelämään takaisin palaavia,
          sekä kaltaisiani alanvaihtajia, joilla kuitenkin on jo työkokemusta,
          koulutustaustaa tai vankkaa harrastuneisuutta liittyen ohjelmointiin
          tai devaamiseen. Ennen varsinaista työsuhdetta olin muutaman kuukauden
          työharjoittelussa, jossa sain osoitettua motivaationi ja
          oppimiskykyni.
        </p>

        <p className="mb-2">
          Ensimmäiseksi tehtäväkseni sain päivittää DT:n omia kotisivuja.
          Tehtävä ei ollutkaan aivan helppo, koska alkuperäinen sivusto oli
          kirjoitettu minulle alottaessani täysin tuntemattomalla Alpine.js:llä
          ja Tailwindillä, ja lisäksi sivu käytti Lector-nimistä CMS:ää, joka
          oli mielestäni ehkä hieman hankala käyttää Windowsilla. Käänsin sivun
          ensin kokonaan uudelleen html:ksi ja puhtaaksi CSS:ksi. Tämän jälkeen
          kirjoitin koko sivun vielä kerran uudelleen, mutta tällä kertaa
          Reactilla samalla kun tiimitoverini kirjoitteli lomakejärjestelmän
          backendin puolen uusiksi ja vaihdoimme projektin pyörimään VM:ään
          Azureen. Urakka oli melko iso, mutta käydessäni työn ohessa melko
          hitaaseen tahtiin Helsingin yliopiston Fullstack MOOCia, huomasin että
          käytännön harjoittelu avaa aivan eri tavalla kurssin sisältöä, ja
          nopeuttaa huomattavasti oppimistahtia.
        </p>

        <p className="mb-2">
          Lisäksi tein asiakasprojektia (vielä julkaisematon), sekä front
          end-twiikkauksia{" "}
          <a
            href="https://satakolkyt.fi/en/"
            className="font-semibold text-yellow-400"
          >
            Satakolkyt-
          </a>
          nimisen hankkeen kartta-ja varaussovellukseen. Opin työsuhteeni aikana
          Reactia, Next.js:ää, Azuren perusteita, Githubin/gitin tehokkaampaa
          käyttöä, Tailwind CSS:ää ja tietenkin JavaScriptiä.
        </p>
        <p>
          Digitalentsilla totuin myös itselleni erittäin sopivaan ketterään
          työtapaan -ja ympäristöön. Työhön kuului päivittäiset dailyt, jossa
          käytiin läpi tiimin jokaisen henkilön päivän tehtävät. Työt tehtiin
          sprinteissä, ja jokaisen sprintin päätteessä tehtiin esimiehen ja
          tiimin kanssa sprint review,jossa yhdessä mietittiin projektien tilaa
          ja tulevia haasteita. Rakkauteni kanban-projektinhallintamenetelmään
          syventyi entisestään.
        </p>
      </div>
    </CaseWrapper>
  )
}
