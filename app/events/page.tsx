import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Events | RASA",
};
export default function EventsPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6">
        <div className="text-sm font-semibold tracking-[0.3em]">
          ASTRONOMY CLUB
        </div>

        <div className="hidden md:flex gap-8 text-sm">

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
            href="/events"
            className="hover:text-gray-400 transition"
          >
            EVENTS
          </a>

 <a
  href="/materials"
  className="hover:text-gray-400 transition"
>
  MATERIALS
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

      {/* Coming Soon */}
      <section className="min-h-screen flex items-center justify-center px-8">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          COMING SOON
        </h1>
      </section>

    </main>
  );
}