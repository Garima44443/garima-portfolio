const projects = [
  {
    title: "AI Resume Screening System",
    desc: "AI-powered resume ranking system using NLP and Machine Learning.",
  },

  {
    title: "COVID-19 Data Analysis",
    desc: "Data analytics project using Python, Pandas, Matplotlib, and Power BI.",
  },

  {
    title: "Sales Dashboard",
    desc: "Interactive Power BI dashboard for business analytics and KPI tracking.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 px-6 max-w-6xl mx-auto"
    >

      <h2 className="text-5xl font-bold text-center mb-20">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-10">

        {projects.map((project, index) => (

          <div
            key={index}
            className="bg-white/5 border border-cyan-500/20
            p-8 rounded-3xl backdrop-blur-lg
            hover:scale-105 hover:-translate-y-4
            transition duration-500
            hover:shadow-[0_0_40px_cyan]
            cursor-pointer"
          >

            <h3 className="text-2xl font-bold text-cyan-400 mb-5">
              {project.title}
            </h3>

            <p className="text-gray-300 leading-8">
              {project.desc}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}