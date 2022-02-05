import skull from "../components/img/skull.png"
import Image from "next/image"
import arch from "../public/arch.png"
import { WordpressBadge } from "../components/Buttons/Badges"
import { UIBadge } from "../components/Buttons/Badges"

import EmblaCarousel from "../components/EmblaCarousel"

import media1 from "../components/img/carouselMedia/hh_bookshop.png"
import media2 from "../components/img/carouselMedia/hh_bookshop2.png"
import media3 from "../components/img/carouselMedia/hh_bookshop3.png"
const media = [media1, media2, media3]

export default function Hexenhammer() {
  return (
    <section className="flex flex-col justify-center items-center relative">
      <div className="flex flex-row relative justify-between px-4 sm:px-8 md:px-28 xl:px-64 2xl:px-96 items-center  w-full h-[70vh] overflow-hidden bg-gradient-to-b from-blue-900 to-red-900 text-center">
        <div className="absolute left-0 w-full h-full ">
          <div
            style={{
              backgroundImage: `url(${arch.src})`,
              backgroundPosition: "center",
              backgroundSize: "initial",
              backgroundRepeat: "repeat",
            }}
            className="w-full h-full opacity-40 mix-blend-color-burn"
          />
        </div>
        <div className="fixed left-2 top-10 w-10 h-10 z-20 ">
          <a className="" href="./">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className=""
            >
              <path
                fill="none"
                stroke="#d4d4d8"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="48"
                d="M244 400L100 256l144-144M120 256h292"
              />
            </svg>
          </a>
        </div>
        <div className="flex flex-col justify-around items-start z-50">
          <h2 className=" text-[12.7vw] sm:text-6xl lg:text-[5.54rem] font-Work mb-4 font-semibold text-white">
            Hexenhammer
          </h2>
          <div className="flex flex-row ">
            <WordpressBadge /> <UIBadge />
          </div>
        </div>
        <div className=" h-16 w-16 sm:h-32 sm:w-32 hidden sm:block">
          <Image src={skull} layout="responsive" quality={100}></Image>
        </div>
        {/* <div className=" col-start-1 col-end-9 row-start-1 row-end-2 border-b w-full mt-5"></div> */}
      </div>

      <div className="mt-20 px-4 sm:px-8 md:px-28 xl:px-64 2xl:px-96 text-center ">
        <div className="font-Work text-base text-left bg-white border-[1px] border-gray-100/10 py-10 px-16 rounded-3xl backdrop-blur-sm -mt-48 shadow-xl shadow-stone-600/20 z-50 relative">
          <p className="mb-2">
            Tämä erikoisia kirjoja myyvä kirjakauppa oli ensimmäinen
            nykyaikainen nettisivuprojektini asiakkaalle. Asiakas toivoi
            helppokäyttöistä, ulkonäöltään rouhean ja vanhanaikaisen tyylistä,
            mutta kuitenkin modernia ja selkeähköä ulkoasua. Päädyin valitsemaan
            projektiin valmiin Wordpress-pohjan käytettävyyden ja nopean
            pystyttämisen, sekä aikaisemman Wordpress-kokemukseni vuoksi.
          </p>
          {/* <div className="h-1/2 w-1/2">
            <Image src={hhbooks1} layout="responsive" />
          </div> */}
          <p className="mb-2">
            Projektin pohjalle viritettiin Wordpress-teema, jota tuunattiin
            asiakkaiden toiveiden mukaisesti (esimerkiksi alun animaatio,
            elementit, tuotekuvien päällä hoverointi, fontit, värit, stickyksi
            irtoava navipalkki yms).
          </p>
          <p className="mb-2">
            Teema toisti hyvin asiakkaan toivetta, vaikka sitä piti muokata
            jonkun verran, se kuitenkin osoittautui parhaaksi vaihtoehdoksi.
            Teeman kanssa tuli joitakin ongelmia, joita oli hieman vaikea
            selvittää teeman tekijän tuen puuttumisen tähden. Kokeilun,
            hampaidenkiristelyn ja kirottujen !important- css käskyjen avulla
            sivu saatiin kuitenkin toimimaan juuri halutulla tavalla.
          </p>
          <p className="mb-2">
            Kauppapaikaksi valikoitui kehuttu ja varsin toimiva
            online-kauppapohja Woocommerce. Woocommercen kanssa kaikki sujui
            kuin rasvattu, mitään ongelmia ei koskaan ollut.
          </p>
          <p className="mb-2">
            Sivuille kytkettiin maksuvaihtoehdoksi Stripe.
            Stripe-maksuliikennevälittäjä oli suhteellisen helppo virittää
            tälläiseen projektiin. Maksuliikennettä ensikertaa virittävälle tuli
            yllätyksenä Stripen hyvät ja tiukat turvavaatimukset: esimerkiksi
            asiakkaalta piti toimittaa Stripelle asuntolainan tosite, tmv melko
            henkilökohtainen dokumentti, koska maksuliikeenteen järjestäjän piti
            varmistua kauppiaan luonnollisen henkilön käyttöoikeudesta
            kiinteistöön, jossa Stripellä laskutettava liiketoiminta tapahtui.
          </p>
          <p className="mb-2 mt-2">
            Wordpressia tuunattiin niin, että asiakkaan oli helppo hallinnoida
            verkkokauppansa tilaa ja lisätä uusia tuotteita. Asiakkaalle
            kirjoitettiin myös kattava, juuri hänelle luotu ohjekirja ja
            tietopaketti Wordpress-pohjaisen nettikaupan hallinnasta.
          </p>
          <p>
            Projektin aikana palveluntarjoajaa piti vaihtaa: Ensin
            hosting-palveluksi valikoitiin Bluehost, mutta
            palveluehtosopimuksien ja hintojen muuttuessa tehtiin migraatio
            Cloudwaysiin. Migraatio oli helppo ja mukava tehdä, vaikka edellisen
            palvelusopimuksen katkaisu vaati hieman keskustelua ja erinäisiä
            soittoja Intiaan. Lopulta kaikki onnistui, asiakas oli tyytyväinen
            ja projekti saatiin mesnestykseekkästi päätökseen.
          </p>
          <div className="text-lg font-bold text-center mt-10">
            Snapshotteja kaupasta
            <EmblaCarousel media={media} color="bg-red-500" />
          </div>
          <div className="flex mt-8 items-center justify-center w-full">
            <a
              href="https://hexenhammerbooks.com/"
              className="font-Quick font-bold text-center text-red-700 underline"
            >
              Käy kurkkaamassa kirjakauppaa netistä
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
