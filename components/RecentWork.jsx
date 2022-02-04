import WorkCard from "./WorkCard"
import norsenkoti from "./img/norsenkoti.png"
import hexenhammer from "./img/hexenhammer.png"
import norsupeli from "./img/norse_nettiin.png"
import digitalents from "./img/digitalents.png"
import achievely from "./img/achievely.png"

export default function RecentWork() {
  return (
    <section className="flex flex-col items-center">
      <div className=" text-center mt-28 flex flex-col justify-center items-center">
        <h2 className="font-Quick font-bold text-2xl">
          Viimeaikaisia projektejani
        </h2>
        <div className="items-center w-5/6 font-Work xl:w-[50rem] pt-4 text-sm md:text-lg">
          Tässä muutamia lähiaikoina toteuttamiani sivustoja.{" "}
          <p>
            Mikäli haluat nähdä media-alan portfolioni, tsekkaa se osoitteessa{" "}
            <a
              className=" text-jazzberry-jam-500 font-bold hover:text-jazzberry-jam-50"
              href="https://www.milica.fi"
            >
              milica.fi
            </a>{" "}
          </p>
          {/* <p>
            Mikäli haluat jutella enemmän projekteistani, tai palkata minut
            esimerkiksi freelanceriksi projektiin, ota yhteyttä.
          </p> */}
        </div>
      </div>
      <div className="grid grid-cols-1 w-5/6 2xl:grid-cols-3 md:grid-cols-2 py-8 md:py-20 gap-8">
        <WorkCard
          cardName={"Hexenhammer"}
          cardColor={"bg-gradient-to-b from-blue-800/80 to-fuchsia-blue-900/80"}
          bgImage={hexenhammer}
          btnColor={"bg-red-700"}
          shadow={"shadow-sm shadow-red-900"}
          link="/Hexenhammer"
        />
        <WorkCard
          cardName={"Norsupeli"}
          cardColor={
            " bg-gradient-to-b from-blue-800/90 to-fuchsia-blue-900/90"
          }
          bgImage={norsupeli}
          bgSize="contain"
          btnColor={"bg-pink-600"}
          shadow={"shadow-sm shadow-pink-900"}
        />
        <WorkCard
          cardName={"Digitalents"}
          cardColor={"bg-gradient-to-b from-blue-900/90 to-fuchsia-blue-900/80"}
          bgImage={digitalents}
          btnColor={"bg-yellow-500"}
          shadow={"shadow-sm shadow-yellow-900"}
        />
        <WorkCard
          cardName={"Achievely"}
          cardColor={"bg-gradient-to-b from-blue-900/80 to-fuchsia-blue-900/90"}
          btnColor={"bg-emerald-500"}
          bgImage={achievely}
          shadow={"shadow-sm shadow-emerald-900"}
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
