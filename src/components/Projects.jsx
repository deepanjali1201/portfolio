
import {
  BrainCircuit,
  BriefcaseBusiness,
  FolderLock,
  Code2,
  Layers3,
  ArrowUpRight,
} from "lucide-react";

function Projects() {
  const projects = [
    {
      number: "01",
      category: "AI & MACHINE LEARNING",
      title: "AI Business Intelligence Copilot",
      description:
        "An AI-powered business intelligence solution featuring automated data cleaning, revenue prediction, business analytics and RAG-based question answering.",
      features: [
        "Automated Data Cleaning",
        "Revenue Prediction",
        "RAG-based AI Q&A",
        "Business Analytics",
      ],
      technologies: [
        "Python",
        "Pandas",
        "Scikit-learn",
        "XGBoost",
        "FAISS",
        "FastAPI",
        "Docker",
      ],
      icon: BrainCircuit,
      status: "Completed Project",
    },
    {
      number: "02",
      category: "FRONTEND DEVELOPMENT",
      title: "Job Portal UI",
      description:
        "A responsive job portal frontend designed to provide a smooth job-search experience with organized job listings and intuitive navigation.",
      features: [
        "Responsive Homepage",
        "Job Listings",
        "Search Jobs",
        "Job Details UI",
      ],
      technologies: [
        "React.js",
        "JavaScript",
        "Tailwind CSS",
        "React Router",
      ],
      icon: BriefcaseBusiness,
      status: "Frontend Project",
    },
    {
      number: "03",
      category: "WEB DEVELOPMENT",
      title: "File Sharing Management System",
      description:
        "A file-sharing management system currently in development, focused on organizing and managing file-sharing functionality.",
      features: [
        "File Management",
        "Sharing Workflow",
        "Web-based Interface",
      ],
      technologies: [],
      icon: FolderLock,
      status: "In Development",
    },
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#0B1020] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[4px] text-purple-400 sm:text-sm">
            Selected Work · 2026
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Featured <span className="text-purple-400">Projects</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            Ideas transformed into digital experiences through
            creativity, technology and continuous learning.
          </p>
        </div>

        {/* Project List */}
        <div className="flex flex-col gap-7">

          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                key={project.number}
                className="group relative overflow-hidden rounded-2xl border border-[#34304D] bg-gradient-to-br from-[#171F38] via-[#141B31] to-[#11182B] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:shadow-xl hover:shadow-purple-950/20 sm:p-8 md:p-10"
              >

                {/* Decorative Glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-purple-500/10 blur-3xl transition group-hover:bg-purple-500/15" />

                <div className="relative grid grid-cols-1 gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-12">

                  {/* Left Side */}
                  <div className="flex flex-col">

                    <div className="mb-7 flex items-center gap-3">
                      <span className="text-sm font-bold tracking-widest text-purple-400">
                        {project.number}
                      </span>

                      <span className="h-px w-9 bg-purple-400/50" />

                      <span className="text-xs font-semibold tracking-wider text-purple-300">
                        {project.category}
                      </span>
                    </div>

                    <div className="mb-5 flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/10 text-purple-300">
                        <Icon size={27} />
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-xl font-bold leading-snug text-white sm:text-2xl">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <p className="max-w-xl text-sm leading-8 text-gray-400 sm:text-base">
                      {project.description}
                    </p>

                    <div className="mt-7">
                      <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-xs font-medium text-purple-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                        {project.status}
                      </span>
                    </div>

                  </div>

                  {/* Right Side */}
                  <div className="flex flex-col gap-7 border-t border-white/10 pt-7 md:border-l md:border-t-0 md:pl-9 md:pt-0">

                    {/* Features */}
                    <div>
                      <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold text-gray-200">
                        <Layers3 size={17} className="text-purple-400" />
                        Key Features
                      </h4>

                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature) => (
                          <span
                            key={feature}
                            className="rounded-lg border border-white/10 bg-[#0D1529]/80 px-3 py-2 text-xs text-gray-300 transition hover:border-purple-400/40 hover:text-purple-200"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold text-gray-200">
                        <Code2 size={17} className="text-purple-400" />
                        Technologies Used
                      </h4>

                      {project.technologies.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-md bg-purple-500/10 px-3 py-2 text-xs font-medium text-purple-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <p className="text-sm leading-6 text-gray-500">
                          Technology stack is currently being finalized.
                        </p>
                      )}
                    </div>

                    {/* Decorative Footer */}
                    <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-5">
                      <span className="text-xs font-medium tracking-wide text-gray-500">
                        PROJECT OVERVIEW
                      </span>

                      <ArrowUpRight
                        size={19}
                        className="text-purple-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </div>

                  </div>
                </div>
              </article>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default Projects;
