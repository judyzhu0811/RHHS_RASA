export default function Navbar() {
  return (
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
  );
}