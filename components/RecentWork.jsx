import WorkCard from "./WorkCard"
import norsenkoti from "./img/norsenkoti.png"
import hexenhammer from "./img/hexenhammer.png"
import norsupeli from "./img/norse_nettiin.png"
import digitalents from "./img/digitalents.png"
import achievely from "./img/achievely.png"

export default function RecentWork() {
  return (
    <section className="flex flex-col items-center">
      <div className="text-gray-800 font-Quick font-bold text-2xl text-center mt-28">
        {" "}
        Viimeaikaisia projektejani
      </div>
      <div className="grid grid-cols-1 w-5/6 2xl:grid-cols-3 md:grid-cols-2 py-8 md:py-20 gap-8">
        <WorkCard
          cardName={"Hexenhammer"}
          cardColor={"bg-red-900/70"}
          bgImage={hexenhammer}
          btnColor={"bg-red-50/70"}
        />
        <WorkCard
          cardName={"Norsupeli"}
          cardColor={" bg-fuchsia-blue/60"}
          bgImage={norsupeli}
          bgSize="contain"
          btnColor={"bg-fuchsia-blue-50/60"}
        />
        <WorkCard
          cardName={"Digitalents"}
          cardColor={"bg-yellow-700/60"}
          bgImage={digitalents}
          btnColor={"bg-yellow-50/60"}
        />
        <WorkCard
          cardName={"Achievely"}
          cardColor={"bg-orange-700/60"}
          btnColor={"bg-orange-50/60"}
          bgImage={achievely}
        >
          {" "}
          <p class=" bg-red-600 text-white p-2 rounded leading-none flex items-center font-Work font-semibold drop-shadow-md mb-9">
            Coming soon!
          </p>
        </WorkCard>
      </div>
    </section>
  )
}
