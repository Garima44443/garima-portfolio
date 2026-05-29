const skills = [
  "Python",
  "SQL",
  "Power BI",
  "Tableau",
  "Machine Learning",
  "Streamlit",
  "XGBoost",
  "NLP",
  "GitHub",
  "Docker",
];

export default function Skills() {
  return (
    <section
  id="skills"
  className="py-28 px-6">

      <h2 className="text-5xl font-bold text-center mb-20">
        Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="px-8 py-4 rounded-2xl bg-white/5 border border-cyan-500/20 hover:scale-110 transition duration-300 backdrop-blur-lg shadow-[0_0_25px_rgba(0,255,255,0.15)]"
          >
            {skill}
          </div>
        ))}

      </div>

    </section>
  );
}