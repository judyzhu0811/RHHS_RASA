
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Materials | RASA",
};
export default function MaterialsPage() {
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

          <a
            href="/"
            className="hover:text-gray-400 transition"
          >
            HOME
          </a>

          <a
            href="/about"
            className="hover:text-gray-400 transition"
          >
            MEET OUR TEAM
          </a>

          <a
            href="/materials"
            className="hover:text-gray-400 transition"
          >
            MATERIALS
          </a>

          <a
            href="/events"
            className="hover:text-gray-400 transition"
          >
            EVENTS
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


      {/* Materials */}
      <section className="min-h-screen px-8 md:px-20 pt-40 pb-20">

        <p className="text-sm tracking-[0.4em] text-gray-500">
          RASA ARCHIVE
        </p>

        <h1 className="mt-6 text-6xl md:text-8xl font-bold tracking-tight">
          MATERIALS.
        </h1>

        <p className="mt-8 max-w-2xl text-xl text-gray-400 leading-relaxed">
          Lecture slides and educational materials from RASA.
        </p>


        {/* School Years */}
        <div className="mt-20 max-w-4xl">
        <a
            href="https://drive.google.com/drive/folders/11AzbRbp8ly2tPJAM-7JDDNoGuzUlZkr4?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between border-t border-gray-800 py-8 hover:px-4 transition-all"
          >
            <span className="text-3xl md:text-5xl font-bold">
              2026–2027
            </span>

            <span className="text-gray-500 group-hover:text-white transition">
              →
            </span>
          </a>

          <a
            href="YOUR_2025_2026_GOOGLE_DRIVE_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between border-t border-gray-800 py-8 hover:px-4 transition-all"
          >
            <span className="text-3xl md:text-5xl font-bold">
              2025–2026
            </span>

            <span className="text-gray-500 group-hover:text-white transition">
              →
            </span>
          </a>


          <a
            href="https://drive.google.com/drive/folders/1n2BPh4rXZdhhXlhB8RWD8QBKaRU_zrIA?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between border-t border-gray-800 py-8 hover:px-4 transition-all"
          >
            <span className="text-3xl md:text-5xl font-bold">
              2024–2025
            </span>

            <span className="text-gray-500 group-hover:text-white transition">
              →
            </span>
          </a>


        </div>

      </section>

    </main>
  );
}