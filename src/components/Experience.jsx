
import { Briefcase, CalendarDays, ArrowUpRight } from "lucide-react";

function Experience() {
  const experiences = [
    {
      role: "Web Development Intern",
      company: "Eduversity EduTech",
      type: "Internship",
      date: "February 2026 – April 2026",
      description:
        "Completed internship training and gained practical experience in frontend and backend web development.",
      skills: ["PHP", "Laravel", "MySQL", "Web Development"],
    },
    {
      role: "MERN Stack Apprentice",
      company: "Hindtech IT Solutions",
      type: "Apprenticeship",
      date: "June 2025 – February 2026",
      description:
        "Completed MERN Stack apprenticeship training with practical exposure to React, HTML, CSS, Tailwind CSS and JavaScript.",
      skills: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    },
  ];

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#111A35] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-5xl">

        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-purple-400">
            My Journey
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Work <span className="text-purple-400">Experience</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            My professional training and development journey.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="flex flex-col gap-7">
          {experiences.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-white/10 bg-[#192542] p-6 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/60 hover:shadow-purple-950/30 sm:p-8"
            >
              {/* Card Header */}
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/15 text-purple-300">
                  <Briefcase size={27} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-bold text-white sm:text-xl">
                      {item.role}
                    </h3>

                    <span className="rounded-full border border-purple-400/30 bg-purple-500/15 px-3 py-1 text-xs font-semibold text-purple-300">
                      {item.type}
                    </span>
                  </div>

                  <p className="mt-2 font-semibold text-purple-400">
                    {item.company}
                  </p>
                </div>

                <ArrowUpRight
                  size={21}
                  className="hidden shrink-0 text-gray-500 transition group-hover:text-purple-400 sm:block"
                />
              </div>

              {/* Date */}
              <div className="mt-6 flex items-center gap-2 text-sm text-gray-400">
                <CalendarDays size={17} className="text-purple-400" />
                <span>{item.date}</span>
              </div>

              {/* Description */}
              <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-300 sm:text-base">
                {item.description}
              </p>

              {/* Skills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-[#0F1930] px-3 py-2 text-xs font-medium text-gray-300 transition hover:border-purple-400/50 hover:text-purple-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;
