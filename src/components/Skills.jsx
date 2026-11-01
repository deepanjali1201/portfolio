
import {
  Code2,
  Server,
  Database,
  BrainCircuit,
  Wrench
} from 'lucide-react'

function Skills() {

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code2,
      description: 'Creating responsive and interactive interfaces.',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS']
    },
    {
      title: 'Backend Development',
      icon: Server,
      description: 'Building functional server-side applications.',
      skills: ['PHP', 'Laravel', 'FastAPI', 'REST APIs']
    },
    {
      title: 'Database Management',
      icon: Database,
      description: 'Managing and organising application data.',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB']
    },
    {
      title: 'Data Science & AI',
      icon: BrainCircuit,
      description: 'Working with data and machine learning.',
      skills: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'PyTorch', 'TensorFlow']
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      description: 'Development tools and workflow.',
      skills: ['Git', 'GitHub', 'Docker', 'Linux', 'Power BI', 'Tableau']
    }
  ]

  return (
    <section id="skills" className="py-24 px-6 bg-[#080b16]">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
       
<div className="flex flex-col items-center justify-center text-center w-full mb-14">

  <p className="text-purple-400 uppercase tracking-widest text-sm font-semibold mb-4">
    My Expertise
  </p>

  <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
    Technical <span className="text-purple-400">Skills</span>
  </h2>

  <p className="text-gray-400 text-center w-full max-w-2xl mx-auto leading-7">
    Technologies and tools I use to develop applications, build websites and solve technical problems.
  </p>

</div>


        {/* Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon

            return (
              <div
                key={index}
                className="group lg:col-span-2 min-h-[180px] bg-[#111827] border border-white/10 rounded-2xl p-7 hover:border-purple-500/60 hover:-translate-y-2 transition-all duration-300"
              >

                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 mb-6 group-hover:bg-purple-600 group-hover:text-white transition">
                  <Icon size={27} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {category.title}
                </h3>

                <p className="text-gray-400 text-sm leading-6 mb-6">
                  {category.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-2 text-xs rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:border-purple-500/50 hover:text-purple-300 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}

export default Skills
