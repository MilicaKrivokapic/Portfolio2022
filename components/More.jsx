import circle from "./img/circle_portfolio.png"
import Image from "next/image"

export default function More() {
  return (
    <section>
      <div className="w-full flex justify-center">
        <div className="flex lg:flex-row-reverse flex-col justify-around mb-32 bg-gradient-to-b lg:bg-gradient-to-l from-[#010307] to-[#00003A] text-white py-20 w-full px-7 xl:px-20 lg:w-5/6 lg:rounded-2xl mt-40">
          <div className="grid grid-cols-1 grid-rows-1 h-full items-center justify-items-center xl:justify-items-start xl:items-center ml-10 -mt-36 sm:-mt-44 lg:-mt-0">
            <div
              className="col-start-1 col-span-1 row-span-1 row-start-1 -translate-x-12 w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
              style={{
                backgroundImage: "url(stars.gif)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                clipPath: "circle(50%)",
                shapeOutside: "circle(50%)",
              }}
            ></div>
            <div className=" col-start-1 col-span-1 row-span-1 row-start-1  mix-blend-normal w-[150px] h-[150px] md:w-[200px] md:h-[200px]">
              <Image src={circle} />
            </div>
            <div
              className="col-start-1 col-span-1 row-span-1 row-start-1 -translate-x-12 mix-blend-screen w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
              style={{
                backgroundImage: "url(stars.gif)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                clipPath: "circle(50%)",
              }}
            ></div>
          </div>

          <div className="font-Work flex flex-col justify-center items-center text-left">
            <h2 className="text-center text-3xl font-Quick font-semibold pb-7 py-14 ">
              Lisää minusta
            </h2>
            <div className="lg:px-10 lg:pr-24 md:text-lg lg:text-xl lg:leading-8">
              <p className="mb-2">Webdevaaminen on kivaa!</p>
              <p className="mb-4">
                Jos saisin valita yhden asian, jonka pelastaisin (puolisoni ja
                koiranpennun lisäksi, tietenkin) palavasta talosta, valitsisin
                tietokoneen. Pelaaminen, kirjoittaminen ja tietokoneella
                puuhailu ovat olleet minulle lapsesta saakka tärkeitä asioita.
              </p>
              <p className="mb-4">
                Työhistoriani on ollut yksi haarautuvien polkujen puutarha -
                olen kokeillut nuoruudessani harjoittelujaksojen avulla mm.
                vanhustyötä, aakkostanut opuksia kirjastotätinä, huhkinut
                teollisuustiskikoneen ääressä suurkeittiössä, työskennellyt vain
                valkoisia esineitä myyvässä sisustuskaupassa... You name it.
                Minusta tuntui, etten koskaan oikein sopinut joukkoon, koska
                juutuin aina tietokoneen äärelle - myyntityössä minua kiinnosti
                enemmän tavaroiden järjestely ja arviointi, kuin varsinainen
                markkinoiva myyntityö.
              </p>
              <p className="mb-4">
                Ystävieni tuella ja kannustuksella uskalsin lopulta hakea
                media-alan peruskoulutukseen. Tämä muutti elämäni, sillä
                koulussa löysin ensimmäisen oikean intohimoni: valokuvauksen.
                Rakastin aivan erityisesti valokuvien muokkaamista Photoshopilla
                sekä videoiden jälkikäsittelyä After Effectsillä. Koulussa opin
                myös webdevaamisen varhaiset alkeet.
              </p>
              <p className="mb-4">
                Liityin media-alan osuuskuntaan, ja aloin tehdä erinäisiä
                keikkatöitä; olen mm. ollut kuvaamassa vanhoille
                punk-legendoille musiikkivideoita, kuvannut tapahtumia (kuten
                häitä ja messuja) sekä ääninäytellyt peleissä. Innostuin kovasti
                myös 3D-mallintamisesta, josta olisin halunnut saada itselleni
                joskus työpaikan, mutta alan realititeetit ensimmäisen pidemmän
                työharjoittelurupeaman ja verkostointitapahtumissa tapaamieni
                ihmisten kertomusten jälkeen intoni pelia-alalla työskentelyä
                kohtaan alkoi laimentua. Media-alan osuuskuntamme ajautui
                konkurssiin ensimmäisenä koronavuonna. Päätin kokeilla jotain
                uutta ja aivonystyröitä haastavaa: webdevaamista. Devaamisen
                kanssa kävin samoin kuin valokuvauksen, jäin heti ensimmäisestä
                keikasta koukkuun. Pidän silti yhä 3D-maailmasta, ja toivon
                voivani vielä yhdistää mallintamisen ja devaamisen -
                Three.js-kirjasto kiinnostaa erityisesti.
              </p>
              <p className="mb-4">
                Tavoitteenani on oppia ihan joka päivä jotain uutta, ja ymmärtää
                holistisesti verkkosivujen toimintaa ja rakentamista. Front-end
                on minun heiniäni, mutta haaveilen ajan kanssa kasvavani
                kiitettäväksi Fullstack-osaajaksi. Olen valmiina kaikenlaisiin
                uusiin haasteisiin!
              </p>

              <div className=" font-Quick don text-center mt-10">
                <p className="font-Parisienne font-light text-4xl">
                  Milica Krivokapic
                </p>
                <p>Haluatko jatkaa tutustumista ja jutella lisää? </p>
                <a
                  className="font-Quick font-black text-fuchsia-300 hover:text-violet-400"
                  href="https://www.linkedin.com/in/milica-krivokapic/"
                >
                  Laita minulle linkkarissa viesti
                </a>{" "}
                tai{" "}
                <a
                  className="font-black text-fuchsia-300 hover:text-violet-400"
                  href="mailto:milica1krivokapic@gmail.com"
                >
                  {" "}
                  laita minulle sähköpostiviesti{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
