import skull from "../components/img/skull.png"
import Image from "next/image"
import arch from "../public/arch.png"
import { WordpressBadge, UIBadge } from "../components/Buttons/Badges"
import CaseWrapper from "../components/CaseWrapper"

import media1 from "../components/img/carouselMedia/hh_bookshop.png"
import media2 from "../components/img/carouselMedia/hh_bookshop2.png"
import media3 from "../components/img/carouselMedia/hh_bookshop3.png"
const media = [media1, media2, media3]

export default function Hexenhammer() {
  return (
    <CaseWrapper
      h2="Hexenhammer"
      badges={
        <>
          <WordpressBadge />
          <UIBadge />
        </>
      }
      media={media}
      gradient={"to-red-900"}
      heroImg={<Image src={skull} layout="responsive" quality={100}></Image>}
      bgImage={arch.src}
      linkSection={
        <a
          href="https://hexenhammerbooks.com/"
          className="font-Quick font-bold text-center text-red-700 underline"
        >
          Käy kurkkaamassa kirjakauppaa netistä
        </a>
      }
    >
      <p className="mb-2">
        Tämä erikoisia kirjoja myyvä kirjakauppa oli ensimmäinen nykyaikainen
        nettisivuprojektini asiakkaalle. Asiakas toivoi helppokäyttöistä,
        ulkonäöltään rouhean ja vanhanaikaisen tyylistä, mutta kuitenkin
        modernia ja selkeähköä ulkoasua. Päädyin valitsemaan projektiin valmiin
        Wordpress-pohjan käytettävyyden ja nopean pystyttämisen, sekä
        aikaisemman Wordpress-kokemukseni vuoksi.
      </p>
      {/* <div className="h-1/2 w-1/2">
          <Image src={hhbooks1} layout="responsive" />
        </div> */}
      <p className="mb-2">
        Projektin pohjalle viritettiin Wordpress-teema, jota tuunattiin
        asiakkaiden toiveiden mukaisesti (esimerkiksi alun animaatio, elementit,
        tuotekuvien päällä hoverointi, fontit, värit, stickyksi irtoava
        navipalkki yms).
      </p>
      <p className="mb-2">
        Teema toisti hyvin asiakkaan toivetta, vaikka sitä piti muokata jonkun
        verran, se kuitenkin osoittautui parhaaksi vaihtoehdoksi. Teeman kanssa
        tuli joitakin ongelmia, joita oli hieman vaikea selvittää teeman tekijän
        tuen puuttumisen tähden. Kokeilun, hampaidenkiristelyn ja kirottujen
        !important- css käskyjen avulla sivu saatiin kuitenkin toimimaan juuri
        halutulla tavalla.
      </p>
      <p className="mb-2">
        Kauppapaikaksi valikoitui kehuttu ja varsin toimiva online-kauppapohja
        Woocommerce. Woocommercen kanssa kaikki sujui kuin rasvattu, mitään
        ongelmia ei koskaan ollut.
      </p>
      <p className="mb-2">
        Sivuille kytkettiin maksuvaihtoehdoksi Stripe.
        Stripe-maksuliikennevälittäjä oli suhteellisen helppo virittää
        tälläiseen projektiin. Maksuliikennettä ensikertaa virittävälle tuli
        yllätyksenä Stripen hyvät ja tiukat turvavaatimukset: esimerkiksi
        asiakkaalta piti toimittaa Stripelle asuntolainan tosite, tmv melko
        henkilökohtainen dokumentti, koska maksuliikeenteen järjestäjän piti
        varmistua kauppiaan luonnollisen henkilön käyttöoikeudesta kiinteistöön,
        jossa Stripellä laskutettava liiketoiminta tapahtui.
      </p>
      <p className="mb-2 mt-2">
        Wordpressia tuunattiin niin, että asiakkaan oli helppo hallinnoida
        verkkokauppansa tilaa ja lisätä uusia tuotteita. Asiakkaalle
        kirjoitettiin myös kattava, juuri hänelle luotu ohjekirja ja
        tietopaketti Wordpress-pohjaisen nettikaupan hallinnasta.
      </p>
      <p>
        Projektin aikana palveluntarjoajaa piti vaihtaa: Ensin
        hosting-palveluksi valikoitiin Bluehost, mutta palveluehtosopimuksien ja
        hintojen muuttuessa tehtiin migraatio Cloudwaysiin. Migraatio oli helppo
        ja mukava tehdä, vaikka edellisen palvelusopimuksen katkaisu vaati
        hieman keskustelua ja erinäisiä soittoja Intiaan. Lopulta kaikki
        onnistui, asiakas oli tyytyväinen ja projekti saatiin mesnestykseekkästi
        päätökseen.
      </p>
    </CaseWrapper>
  )
}
