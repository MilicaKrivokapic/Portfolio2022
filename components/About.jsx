const About = () => {
  return (
    <section>
      <div className=" font-Work text-white bg-gradient-to-b from-[#061129] via-[#010141] to-[#020227] w-full pb-[22rem] md:text-xl text-base p-14 lg:text-center ">
        <p className="xl:mb-2 mb-1">
          ...niin kuin mukava tai merkillinen. Tai sitten vaikka{" "}
          <span className=" text-fuchsia-300 font-semibold"> Milica </span>,
          joka on nimeni.
        </p>
        <p className="mb-1 xl:mb-2 font-semibold text-violet-300 ">
          Hauska tavata!👋
        </p>
        <p className="mb-1 xl:mb-2">
          Rakentelen sivuja nettiin, ja tällä hetkellä etsin työtä
          webkehittäjänä.
        </p>
        <p>
          Intohimoni on tuottaa mieleenjääviä ja saavutettavia nettisivuja
          uusilla teknologioilla.
        </p>
      </div>
      <div className="w-full flex flex-col items-center ">
        <div className=" bg-white font-Work rounded-lg w-5/6 shadow-md grid grid-flow-row divide-y-2 md:grid-cols-2 md:divide-x-2 md:divide-y-0 divide-jazzberry-jam-700/10 text-center xl:text-xl overflow-hidden -mt-72 ">
          <div className="flex flex-col items-center py-8 px-5">
            <div className="w-14 text-white bg-gradient-to-br from-blue-700 to-black rounded-2xl p-2 mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon hover:animate-ping"
                viewBox="0 0 512 512"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                  d="M160 368L32 256l128-112M352 368l128-112-128-112M304 96l-96 320"
                />
              </svg>
            </div>
            <p className="mb-6 font-bold text-2xl font-Quick">
              Front-end koodaus
            </p>
            <p className="text-sm mb-6 xl:px-20 text-center">
              Haluan ylittää itseni jokaisessa projektissa. Käytettävyys ja
              saavutettavuus ovat minulle tärkeitä, unohtamatta tietenkään
              kaikenlaisia uusia CSS-seikkailuja, joihon hyppään innolla mukaan.
            </p>
            <p className="font-bold font-Quick text-lg mb-6">
              Käyttämiäni teknologioita:
            </p>
            <ul className="list-inside font-light">
              <li> React</li>
              <li> Next.js</li>
              <li> CSS</li>
              <li> HTML5</li>
              <li> Tailwind CSS</li>
              <li> Wordpress</li>
              <li> C#</li>
            </ul>
          </div>
          <div className="flex flex-col items-center py-8 px-5">
            <div className="w-14 text-white bg-gradient-to-br from-blue-700 to-black  rounded-2xl  p-2 mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon hover:animate-ping"
                viewBox="0 0 512 512"
              >
                <path
                  d="M259.92 262.91L216.4 149.77a9 9 0 00-16.8 0l-43.52 113.14a9 9 0 01-5.17 5.17L37.77 311.6a9 9 0 000 16.8l113.14 43.52a9 9 0 015.17 5.17l43.52 113.14a9 9 0 0016.8 0l43.52-113.14a9 9 0 015.17-5.17l113.14-43.52a9 9 0 000-16.8l-113.14-43.52a9 9 0 01-5.17-5.17zM108 68L88 16 68 68 16 88l52 20 20 52 20-52 52-20-52-20zM426.67 117.33L400 48l-26.67 69.33L304 144l69.33 26.67L400 240l26.67-69.33L496 144l-69.33-26.67z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                />
              </svg>
            </div>
            <p className="mb-6 font-bold text-2xl font-Quick">
              Graafinen osaaminen
            </p>

            <p className="text-sm mb-6 text-center xl:px-20">
              Graafisesti pidän minimalistisesta mutta myös yllättävästä,
              miedosti psykedeelisestä tyylistä. Minulle grafiikassa tärkeää on
              käytettävyyden korostaminen ja pienten, mutta tyydyttävien
              graafisten jippojen kehittely.
            </p>
            <p className="font-bold text-lg font-Quick mb-6">
              Käyttämiäni graffaohjelmia:
            </p>
            <ul className="list-inside font-light">
              <li> Figma</li>
              <li> Affinity Photo</li>
              <li> Adobe Photoshop</li>
              <li> Blender</li>
              <li> Aseprite</li>
              <li> Autodesk Maya</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
