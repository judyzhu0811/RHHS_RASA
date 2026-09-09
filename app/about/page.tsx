import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet Our Team",
};

const executives = Array.from({ length: 25 }, (_, i) => ({
  name: `EXECUTIVE ${String(i + 1).padStart(2, "0")}`,
  position: "EXECUTIVE",
}));

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6">

        <a
          href="/"
          className="text-sm font-semibold tracking-[0.3em] hover:text-gray-400 transition"
        >
          RASA
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm">

          <a href="/" className="hover:text-gray-400 transition">
            HOME
          </a>

          <a href="/materials" className="hover:text-gray-400 transition">
            MATERIALS
          </a>

          <a href="/events" className="hover:text-gray-400 transition">
            EVENTS
          </a>

          <a href="/about" className="hover:text-gray-400 transition">
            MEET OUR TEAM
          </a>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdppXKu00SW1-0oaOlsa8pqxfmwvF9RTlnPABDGXu9dm_2Wbw/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            JOIN
          </a>

        </div>
      </nav>


      {/* Page Header */}
      <section className="px-8 md:px-20 pt-40 pb-20">

        <p className="text-sm tracking-[0.4em] text-gray-500">
          RHHS RASA
        </p>

        <h1 className="mt-6 text-6xl md:text-[8rem] font-bold leading-[0.85] tracking-tight">
          MEET
          <br />
          OUR TEAM.
        </h1>

        <p className="mt-10 max-w-xl text-lg md:text-xl text-gray-400 leading-relaxed">
          The students who lead RASA, organize our activities, and
          help build our astronomy community.
        </p>

      </section>


      {/* President */}
      <section className="px-8 md:px-20 pb-32">

        <p className="text-xs tracking-[0.4em] text-gray-500 mb-6">
          PRESIDENT
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-end">

          {/* President Photo */}
          <div className="aspect-[4/5] bg-gray-900 flex items-center justify-center overflow-hidden">
            <span className="text-gray-600 tracking-widest text-sm">
              PRESIDENT PHOTO
            </span>
          </div>

          {/* President Info */}
          <div className="pb-4">

            <p className="text-sm tracking-[0.3em] text-gray-500 mb-4">
              01
            </p>

            <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
              PRESIDENT NAME
            </h2>

            <p className="mt-6 text-gray-400 text-lg max-w-lg leading-relaxed">
              President of the RHHS Astronomy and Space Association.
              Responsible for leading the club, organizing initiatives,
              and helping shape the direction of RASA.
            </p>

          </div>

        </div>

      </section>


      {/* Executive Team */}
      <section className="px-8 md:px-20 pb-32">

        <div className="flex items-end justify-between mb-12">

          <div>

            <p className="text-xs tracking-[0.4em] text-gray-500">
              EXECUTIVE TEAM
            </p>

            <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight">
              THE EXECUTIVES.
            </h2>

          </div>

          <p className="hidden md:block text-gray-500 text-sm">
            01 — 25
          </p>

        </div>


        {/* 5 × 5 Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-12">

          {executives.map((executive, index) => (

            <div
              key={index}
              className="group"
            >

              {/* Photo */}
              <div className="aspect-[3/4] bg-gray-900 flex items-center justify-center overflow-hidden">

                <span className="text-gray-600 tracking-widest text-xs transition-transform duration-500 group-hover:scale-110">
                  PHOTO
                </span>

              </div>


              {/* Name */}
              <div className="mt-5">

                <p className="text-xs tracking-[0.25em] text-gray-600 mb-2">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="text-lg md:text-xl font-bold tracking-tight group-hover:text-gray-400 transition">
                  {executive.name}
                </h3>

                <p className="mt-2 text-xs tracking-[0.2em] text-gray-500">
                  {executive.position}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}