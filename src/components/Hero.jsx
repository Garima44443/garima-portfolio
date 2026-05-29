export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-5">

      <h1 className="text-6xl font-bold text-cyan-400">
        GARIMA SOLAKHIYA
      </h1>

      <p className="text-2xl mt-6 text-white">
        Data Analyst | AI Enthusiast | ML Developer
      </p>

      <a
        href="/resume.pdf"
        download
        className="mt-10 px-8 py-4 bg-cyan-500 rounded-full"
      >
        Download Resume
      </a>

    </section>
  );
}