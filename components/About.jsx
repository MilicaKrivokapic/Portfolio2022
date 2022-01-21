const About = () => {
  return (
    <section className="relative ">
      <div className=" font-Work bg-jazzberry-jam-700 w-full -mt:[1rem] text-white p-10 pb-48 text-xl lg:text-center">
        <p className="mb-2">
          ...niin kuin mukava tai merkillinen. Tai sitten vaikka{" "}
          <span className=" text-rose-400 font-semibold"> Milica </span>, joka
          on nimeni.{" "}
          <span className="font-semibold text-fuchsia-blue-200">
            Hauska tavata! 👋{" "}
          </span>
        </p>
        <p className="mb-2">Minä rakennan sivuja nettiin.</p>
        <p className="mb-2">
          Tällä hetkellä työskentelen Digitalents Helsingillä webkehittäjänä.
        </p>
        <p>
          Intohimoni on tuottaa mieleenjääviä ja saavutettavia nettisivuja
          uusilla teknologioilla.
        </p>
      </div>
      <div className="w-full flex flex-col items-center -mt-20">
        <div className=" bg-white font-Work rounded-lg h-[20rem] w-5/6 shadow-md grid grid-flow-row divide-y-2 md:grid-cols-2 md:divide-x-2 divide-jazzberry-jam-700/60 text-center xl:text-xl">
          <div className="flex flex-col items-center p-4">
            <div className="w-14 text-white bg-jazzberry-jam-700 rounded-3xl shadow-sm shadow-black/20 p-1 mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon"
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
            <p className=" text-s font-medium">Käyttämiäni teknologioita:</p>
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
          <div className="flex flex-col items-center p-4">
            <div className="w-14 text-white bg-jazzberry-jam-700 rounded-3xl shadow-sm shadow-black/20 p-2 mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon"
                viewBox="0 0 512 512"
              >
                <title>Sparkles</title>
                <path
                  d="M259.92 262.91L216.4 149.77a9 9 0 00-16.8 0l-43.52 113.14a9 9 0 01-5.17 5.17L37.77 311.6a9 9 0 000 16.8l113.14 43.52a9 9 0 015.17 5.17l43.52 113.14a9 9 0 0016.8 0l43.52-113.14a9 9 0 015.17-5.17l113.14-43.52a9 9 0 000-16.8l-113.14-43.52a9 9 0 01-5.17-5.17zM108 68L88 16 68 68 16 88l52 20 20 52 20-52 52-20-52-20zM426.67 117.33L400 48l-26.67 69.33L304 144l69.33 26.67L400 240l26.67-69.33L496 144l-69.33-26.67z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
              </svg>
            </div>
            Blöö blaa
            <p>Osaan sitä ja tätä kieltä</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
