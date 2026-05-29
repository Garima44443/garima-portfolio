import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/20 border-b border-cyan-500/10">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

        <h1 className="text-2xl font-bold text-cyan-400">
          GARIMA
        </h1>

        <div className="flex gap-8 text-sm md:text-base">

          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-cyan-400 transition"
          >
            About
          </Link>

          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-cyan-400 transition"
          >
            Skills
          </Link>

          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-cyan-400 transition"
          >
            Projects
          </Link>
          <Link
  to="contact"
  smooth={true}
  duration={500}
  className="cursor-pointer hover:text-cyan-400 transition"
>
  Contact
</Link>

        </div>
      </div>

    </nav>
  );
}