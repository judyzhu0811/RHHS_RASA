import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      {/* Hero */}

    


      {/* Hero */}
      <section className="min-h-screen flex items-center px-8 md:px-20">

        <div className="grid md:grid-cols-2 gap-12 items-center w-full">

          {/* Left side */}
          <div>

            <p className="text-sm tracking-[0.4em] text-gray-400">
              RHHS RASA
            </p>

            <h1 className="mt-6 text-7xl md:text-[9rem] font-bold leading-[0.8] tracking-tight">
              RHHS
              <br />
              RASA
            </h1>

            <p className="mt-12 max-w-2xl text-lg md:text-xl text-gray-400 leading-relaxed">
              We strive to learn about the fundamentals of the Universe,
              the Milky Way, and the Solar System and the processes within
              them by combining astronomy with physics and staying up to
              speed with current research in these fields. We also share
              our love and passion for astronomy and physics through
              hands-on projects and nights of stargazing, making new
              friends who share that passion along the way.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <a
                href="https://discord.gg/4xEWc5wg8"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white px-10 py-5 text-base font-semibold tracking-widest hover:bg-white hover:text-black hover:scale-105 transition-all duration-300"
              >
                JOIN DISCORD →
              </a>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdppXKu00SW1-0oaOlsa8pqxfmwvF9RTlnPABDGXu9dm_2Wbw/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white px-10 py-5 text-base font-semibold tracking-widest hover:bg-white hover:text-black hover:scale-105 transition-all duration-300"
              >
                REGISTER →
              </a>

            </div>

          </div>


          {/* Right side — RASA logo */}
          <div className="flex justify-center md:justify-end items-center">

            <img
              src="/rasa-logo.png"
              alt="RHHS RASA logo"
              className="w-72 md:w-[420px] lg:w-[500px] h-auto object-contain"
            />

          </div>

        </div>

      </section>

    </main>
  );
}