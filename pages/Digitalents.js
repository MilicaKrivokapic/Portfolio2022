import { ReactBadge, CSSBadge } from "../components/Buttons/Badges"
import Coding from "../components/img/coding-ui.png"
import Image from "next/image"
import waves from "../components/img/wavesMoz.jpg"
import CaseWrapper from "../components/CaseWrapper"
import media1 from "../components/img/digitalents/dt1moz.jpg"
import media2 from "../components/img/digitalents/dt2moz.jpg"
import media3 from "../components/img/digitalents/dt3moz.jpg"
const media = [media1, media2, media3]

export default function Digitalents() {
  return (
    <CaseWrapper
      returnId="digitalents"
      h2="Digitalents Helsinki"
      badges={
        <>
          <ReactBadge /> <CSSBadge />
        </>
      }
      media={media}
      carouselAlt="Ruutukaappauksia Digitalents-sivulta"
      gradient={"to-yellow-600"}
      heroImg={<Image src={Coding} layout="responsive" quality={100}></Image>}
      bgImage={waves.src}
      linkSection={
        <div className="flex flex-col justify-center items-center">
          <a
            href="https://digitalentshelsinki.fi"
            className="font-Quick font-semibold text-center hover:text-yellow-400 hover:underline my-3"
          >
            Käy kurkkaamassa kirjoittamiani Digitalentsin sivuja netissä
          </a>
          <div className="flex group flex-row justify-center items-center text-black font-Quick font-bold hover:text-fuchsia-300 mb-4">
            <svg
              width="36px"
              height="36px"
              viewBox="0 -0.5 25 25"
              className="mr-4 group-hover:bg-violet-400 group-hover:rounded-full"
            >
              <path
                fill="#000"
                d="m12.301 0h.093c2.242 0 4.34.613 6.137 1.68l-.055-.031c1.871 1.094 3.386 2.609 4.449 4.422l.031.058c1.04 1.769 1.654 3.896 1.654 6.166 0 5.406-3.483 10-8.327 11.658l-.087.026c-.063.02-.135.031-.209.031-.162 0-.312-.054-.433-.144l.002.001c-.128-.115-.208-.281-.208-.466 0-.005 0-.01 0-.014v.001q0-.048.008-1.226t.008-2.154c.007-.075.011-.161.011-.249 0-.792-.323-1.508-.844-2.025.618-.061 1.176-.163 1.718-.305l-.076.017c.573-.16 1.073-.373 1.537-.642l-.031.017c.508-.28.938-.636 1.292-1.058l.006-.007c.372-.476.663-1.036.84-1.645l.009-.035c.209-.683.329-1.468.329-2.281 0-.045 0-.091-.001-.136v.007c0-.022.001-.047.001-.072 0-1.248-.482-2.383-1.269-3.23l.003.003c.168-.44.265-.948.265-1.479 0-.649-.145-1.263-.404-1.814l.011.026c-.115-.022-.246-.035-.381-.035-.334 0-.649.078-.929.216l.012-.005c-.568.21-1.054.448-1.512.726l.038-.022-.609.384c-.922-.264-1.981-.416-3.075-.416s-2.153.152-3.157.436l.081-.02q-.256-.176-.681-.433c-.373-.214-.814-.421-1.272-.595l-.066-.022c-.293-.154-.64-.244-1.009-.244-.124 0-.246.01-.364.03l.013-.002c-.248.524-.393 1.139-.393 1.788 0 .531.097 1.04.275 1.509l-.01-.029c-.785.844-1.266 1.979-1.266 3.227 0 .025 0 .051.001.076v-.004c-.001.039-.001.084-.001.13 0 .809.12 1.591.344 2.327l-.015-.057c.189.643.476 1.202.85 1.693l-.009-.013c.354.435.782.793 1.267 1.062l.022.011c.432.252.933.465 1.46.614l.046.011c.466.125 1.024.227 1.595.284l.046.004c-.431.428-.718 1-.784 1.638l-.001.012c-.207.101-.448.183-.699.236l-.021.004c-.256.051-.549.08-.85.08-.022 0-.044 0-.066 0h.003c-.394-.008-.756-.136-1.055-.348l.006.004c-.371-.259-.671-.595-.881-.986l-.007-.015c-.198-.336-.459-.614-.768-.827l-.009-.006c-.225-.169-.49-.301-.776-.38l-.016-.004-.32-.048c-.023-.002-.05-.003-.077-.003-.14 0-.273.028-.394.077l.007-.003q-.128.072-.08.184c.039.086.087.16.145.225l-.001-.001c.061.072.13.135.205.19l.003.002.112.08c.283.148.516.354.693.603l.004.006c.191.237.359.505.494.792l.01.024.16.368c.135.402.38.738.7.981l.005.004c.3.234.662.402 1.057.478l.016.002c.33.064.714.104 1.106.112h.007c.045.002.097.002.15.002.261 0 .517-.021.767-.062l-.027.004.368-.064q0 .609.008 1.418t.008.873v.014c0 .185-.08.351-.208.466h-.001c-.119.089-.268.143-.431.143-.075 0-.147-.011-.214-.032l.005.001c-4.929-1.689-8.409-6.283-8.409-11.69 0-2.268.612-4.393 1.681-6.219l-.032.058c1.094-1.871 2.609-3.386 4.422-4.449l.058-.031c1.739-1.034 3.835-1.645 6.073-1.645h.098-.005zm-7.64 17.666q.048-.112-.112-.192-.16-.048-.208.032-.048.112.112.192.144.096.208-.032zm.497.545q.112-.08-.032-.256-.16-.144-.256-.048-.112.08.032.256.159.157.256.047zm.48.72q.144-.112 0-.304-.128-.208-.272-.096-.144.08 0 .288t.272.112zm.672.673q.128-.128-.064-.304-.192-.192-.32-.048-.144.128.064.304.192.192.32.044zm.913.4q.048-.176-.208-.256-.24-.064-.304.112t.208.24q.24.097.304-.096zm1.009.08q0-.208-.272-.176-.256 0-.256.176 0 .208.272.176.256.001.256-.175zm.929-.16q-.032-.176-.288-.144-.256.048-.224.24t.288.128.225-.224z"
              />
            </svg>
            <a href="https://github.com/MilicaKrivokapic/digitalents-clone">
              Github
            </a>
          </div>
        </div>
      }
    >
      <div className="  selection:bg-yellow-500 selection:text-white">
        <p className="mb-2">
          Aloitin urani webdevaajana Helsingin Kaupungilla, Digitalents Helsinki
          -nimisessä hankkeessa. Digitalents oli mielestäni aivan mainio
          ensimmäinen junnudevaajan paikka minulle: sain paljon vapautta mutta
          myös vastuuta ja tasolleni sopivia projekteja. Digitalents Helsingin
          ideana on saattaa työelämään työelämästä pudonneita: esim. koulusta
          valmistuneita työttömiä, äitiyslomalta työelämään takaisin palaavia,
          sekä kaltaisiani alanvaihtajia, joilla kuitenkin on jo työkokemusta,
          koulutustaustaa tai vankkaa harrastuneisuutta liittyen ohjelmointiin
          tai devaamiseen. Ennen varsinaista työsuhdetta olin reilun kuukauden
          työharjoittelussa, jossa sain osoitettua motivaationi ja
          oppimiskykyni.
        </p>

        <p className="mb-2">
          Ensimmäiseksi tehtäväkseni sain päivittää DT:n omia kotisivuja.
          Tehtävä ei ollutkaan aivan helppo, koska alkuperäinen sivusto oli
          kirjoitettu minulle alottaessani täysin tuntemattomalla Alpine.js:llä
          ja Tailwindillä. Sivu käytti Lector-nimistä CMS:ää, joka oli
          mielestäni ehkä hieman hankala käyttää Windowsilla. Sivuston
          päivittäminen kaatui kiukuttelevaan Flask-versioon. Tästä johtuen
          käänsin sivun ensin kokonaan uudelleen html:ksi ja puhtaaksi CSS:ksi.
          Tämän jälkeen kirjoitin koko sivun vielä kerran uudelleen, mutta tällä
          kertaa Reactilla samalla kun tiimitoverini kirjoitteli
          lomakejärjestelmän backendin puolen uusiksi ja vaihdoimme projektin
          pyörimään VM:ään Azureen. Urakka oli melko iso, mutta siitä selvittiin
          kunnialla. :)
        </p>

        <p className="mb-2">
          Lisäksi tein asiakasprojektia (vielä julkaisematon), sekä front
          end-twiikkauksia{" "}
          <a
            href="https://satakolkyt.fi/en/"
            className="font-semibold text-yellow-400 hover:text-yellow-700"
          >
            Satakolkyt-
          </a>
          nimisen hankkeen kartta-ja varaussovellukseen. Opin työsuhteeni aikana
          Reactia, Next.js:ää, Azuren perusteita, Githubin/gitin tehokkaampaa
          käyttöä, Tailwind CSS:ää ja tietenkin JavaScriptiä.
        </p>
        <p className="mb-2">
          Digitalentsilla totuin myös itselleni erittäin sopivaan ketterään
          työtapaan -ja ympäristöön. Työhön kuului päivittäiset dailyt, jossa
          käytiin läpi tiimin jokaisen henkilön päivän tehtävät. Työt tehtiin
          sprinteissä, ja jokaisen sprintin päätteessä tehtiin esimiehen ja
          tiimin kanssa sprint review, jossa yhdessä mietittiin projektien tilaa
          ja tulevia haasteita. Rakkauteni kanban-projektinhallintamenetelmään
          syventyi työsuhteeni aikana entisestään. Kaiken kaikkiaan työsuhde
          opetti minulle paljon, ja olen todella tyytyväinen saamaani
          ohjaukseen, tukeen ja mentorointiin.
        </p>
      </div>
    </CaseWrapper>
  )
}
