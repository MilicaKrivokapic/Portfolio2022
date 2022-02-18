import WorkCard from "./WorkCard"
import portfolio from "./img/portfoliomoz.jpg"
import hexenhammer from "./img/hexenhammer.png"
import norsupeli from "./img/norse_nettiin.png"
import digitalents from "./img/digitalents.png"
import achievely from "./img/achievely.png"

export default function RecentWork() {
  return (
    <section className="flex flex-col items-center bg-[#f6f8fb] bg-gradient-to-b from-[#f6f8fb] to-[#ffff]">
      <div className=" text-center mt-28 flex flex-col justify-center items-center">
        <h2 className="font-Quick font-bold text-3xl">
          Viimeaikaisia projektejani
        </h2>
        <div className="items-center w-5/6 font-Work xl:w-[50rem] pt-4 text-sm md:text-xl">
          Tässä muutamia viime aikoina toteuttamiani sivustoja.{" "}
          <p>
            Tsekkaa{" "}
            <a
              className=" text-blue-900 font-semibold hover:text-blue-600"
              href="https://www.milica.fi"
            >
              media-alan portfolioni
            </a>
            .
          </p>
          <p>
            Täältä voit kurkata{" "}
            <a
              className="text-blue-900 font-semibold hover:text-blue-600"
              href="/MilicaKrivokapic_CV2022.pdf"
            >
              CV:ni
            </a>
            .
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 w-5/6 2xl:grid-cols-3 md:grid-cols-2 py-8 md:py-20 gap-8">
        <WorkCard
          cardName={"Hexenhammer"}
          cardColor={"bg-gradient-to-b from-blue-800/80 to-fuchsia-blue-900/80"}
          bgImage={hexenhammer}
          btnColor={"bg-red-700 hover:bg-rose-500"}
          shadow={"shadow-xl hover:shadow-rose-800"}
          link="/Hexenhammer"
          id="hexenhammer"
        />
        <WorkCard
          cardName={"Digitalents"}
          cardColor={"bg-gradient-to-b from-blue-900/90 to-fuchsia-blue-900/80"}
          bgImage={digitalents}
          btnColor={"bg-emerald-700 hover:bg-emerald-500"}
          shadow={"shadow-xl hover:shadow-green-800"}
          link="/Digitalents"
          id="digitalents"
        />

        <WorkCard
          cardName={"Portfolio"}
          cardColor={
            " bg-gradient-to-b from-blue-800/90 to-fuchsia-blue-900/90"
          }
          bgImage={portfolio}
          bgSize="contain"
          btnColor={"bg-cyan-700 hover:bg-cyan-500"}
          shadow={"shadow-xl hover:shadow-blue-800"}
          link="/Portfolio"
          id="portfolio"
        />
        <WorkCard
          cardName={"Norsupeli"}
          cardColor={
            " bg-gradient-to-b from-blue-800/90 to-fuchsia-blue-900/90"
          }
          bgImage={norsupeli}
          bgSize="contain"
          btnColor={
            "bg-pink-700 hover:bg-pink-500 transition duration-150 ease-in-out"
          }
          shadow={"shadow-xl hover:shadow-pink-800 "}
          link="/Norsupeli"
          id="norsu"
        />

        <WorkCard
          cardName={"Achievely"}
          cardColor={"bg-gradient-to-b from-blue-900/80 to-fuchsia-blue-900/90"}
          btnColor={"bg-emerald-500"}
          bgImage={achievely}
          shadow={"shadow-sm shadow-emerald-900"}
          link="/#achievely"
          id="achievely"
          disableButton
        >
          {" "}
          <p className=" bg-red-600 text-white p-2 rounded leading-none flex items-center font-Work font-semibold drop-shadow-md mb-9">
            Coming soon!
          </p>
        </WorkCard>
      </div>
    </section>
  )
}
