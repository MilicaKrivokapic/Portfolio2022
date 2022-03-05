import skull from "../components/img/skull.png"
import Image from "next/image"
import bg from "../components/img/bg-9moz.jpg"
import { WordpressBadge, UIBadge } from "../components/Buttons/Badges"
import CaseWrapper from "../components/CaseWrapper"

import media1 from "../components/img/hexenhammer/hh_bookshop.jpg"
import media2 from "../components/img/hexenhammer/hh_bookshop2.jpg"
import media3 from "../components/img/hexenhammer/hh_bookshop3.jpg"
const media = [media1, media2, media3]

export default function Hexenhammer() {
  return (
    <CaseWrapper
      h2="Hexenhammer"
      returnId="hexenhammer"
      badges={
        <>
          <WordpressBadge />
          <UIBadge />
        </>
      }
      media={media}
      carouselAlt="Ruutukaappauksia Hexenhammer-nettikirjakaupasta"
      gradient={"to-red-900"}
      heroImg={<Image src={skull} layout="responsive" quality={100}></Image>}
      bgImage={bg.src}
      linkSection={
        <a
          href="https://hexenhammerbooks.com/"
          className="font-Quick font-semibold text-center  hover:text-red-700 hover:underline"
        >
          Käy kurkkaamassa kirjakauppaa netistä
        </a>
      }
    >
      <div className="selection:bg-red-800 selection:text-white">
        <p className="mb-2">
          Tämä erikoisia kirjoja myyvä kirjakauppa oli ensimmäinen nykyaikainen
          nettisivuprojektini asiakkaalle. Asiakas toivoi helppokäyttöistä,
          ulkonäöltään rouhean ja vanhanaikaisen tyylistä, mutta kuitenkin
          modernia ja selkeähköä ulkoasua. Päädyin valitsemaan projektiin
          valmiin Wordpress-pohjan käytettävyyden ja nopean pystyttämisen, sekä
          aikaisemman Wordpress-kokemukseni vuoksi.
        </p>
        <p className="mb-2">
          Projektin pohjalle viritettiin Wordpress-teema, jota tuunattiin
          asiakkaiden toiveiden mukaisesti (esimerkiksi alun animaatio,
          elementit, tuotekuvien päällä hoverointi, fontit, värit, stickyksi
          irtoava navipalkki yms).
        </p>
        <p className="mb-2">
          Teema vastasi hyvin asiakkaan toivetta pienten muutosten jälkeen.
          Näiden muutosten kanssa tuli joitakin ongelmia, joita oli hieman
          vaikea selvittää teeman tekijän tuen puuttumisen tähden. Kokeilun,
          hampaidenkiristelyn ja kirottujen !important- css käskyjen avulla sivu
          saatiin kuitenkin toimimaan juuri halutulla tavalla.
        </p>
        <p className="mb-2">
          Kauppapaikaksi valikoitui kehuttu ja varsin toimiva online-kauppapohja
          Woocommerce. Woocommercen kanssa kaikki sujui kuin rasvattu, mitään
          ongelmia ei ilmaantunut.
        </p>
        <p className="mb-2">
          Sivuille kytkettiin maksuvaihtoehdoksi Stripe.
          Stripe-maksuliikennevälittäjä oli suhteellisen helppo virittää
          tälläiseen projektiin. Maksuliikennettä ensikertaa virittävälle tuli
          yllätyksenä Stripen hyvät ja tiukat turvavaatimukset: esimerkiksi
          asiakkaalta piti toimittaa Stripelle asuntolainan tosite, tmv melko
          henkilökohtainen dokumentti, koska maksuliikenteen järjestäjän piti
          varmistua kauppiaan luonnollisen henkilön käyttöoikeudesta
          kiinteistöön, jossa Stripellä laskutettava liiketoiminta tapahtui.
        </p>
        <p className="mb-2 mt-2">
          Wordpress-teemaa tuunattiin niin, että asiakkaan oli helppo
          hallinnoida verkkokauppansa tilaa ja lisätä uusia tuotteita.
          Asiakkaalle kirjoitettiin myös kattava, juuri hänelle luotu ohjekirja
          ja tietopaketti Wordpress-pohjaisen nettikaupan hallinnasta.
        </p>
        <p>
          Projektin aikana palveluntarjoajaa piti vaihtaa: Ensin
          hosting-palveluksi valikoitiin Bluehost, mutta palveluehtosopimuksien
          ja hintojen muuttuessa tehtiin migraatio Cloudwaysiin. Migraatio oli
          helppo ja mukava tehdä, vaikka edellisen palvelusopimuksen katkaisu
          vaati hieman keskustelua ja erinäisiä soittoja vahvasti murtaen
          englantia puhuvaan asiakaspalveluun. Lopulta kaikki onnistui, asiakas
          oli tyytyväinen ja projekti saatiin menestyksekkäästi päätökseen.
        </p>
      </div>
    </CaseWrapper>
  )
}
