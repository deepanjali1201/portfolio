
import { ArrowUpRight, Mail, Code2, Sparkles } from 'lucide-react'

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-28 pb-16 px-6 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-purple-700/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-14 items-center relative z-10">

        {/* Left content */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm mb-7">
            <Sparkles size={15} />
            Available for freelance projects
          </div>

          <p className="text-purple-400 font-medium tracking-widest uppercase text-sm mb-4">
            Hello, I'm Deepanjali Pal
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
            I Build
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Digital Experiences
            </span>
            That Matter.
          </h1>

          <p className="text-gray-400 text-base sm:text-lg leading-8 max-w-xl mb-8">
            I'm a Full-Stack Web Developer specializing in
            React.js, Laravel, PHP and MySQL. I build
            responsive websites and functional web applications
            that help businesses grow.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-7 py-3.5 rounded-full font-medium transition"
            >
              View My Work
              <ArrowUpRight size={18} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-purple-500 text-white px-7 py-3.5 rounded-full transition"
            >
              Contact Me
              <Mail size={18} />
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5 text-gray-400">
            <span className="text-sm">Connect with me:</span>

            {/* GitHub */}
            <a
              href="https://github.com/deepanjali1201"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-purple-400 transition"
            >
              <svg width="23" height="23" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.81 1.3 3.5.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.62-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/deepanjali-pal-75a3a2321/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-purple-400 transition"
            >
              <svg width="23" height="23" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.35 18.5H4.4V9h2.95v9.5ZM5.87 7.7a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42ZM19.5 18.5h-2.95v-4.62c0-1.1-.02-2.51-1.53-2.51-1.54 0-1.78 1.2-1.78 2.43v4.7h-2.95V9h2.83v1.3h.04c.39-.74 1.36-1.52 2.8-1.52 2.99 0 3.54 1.97 3.54 4.53v5.19Z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:deepanjalipal07@gmail.com"
              aria-label="Email"
              className="hover:text-purple-400 transition"
            >
              <Mail size={23} />
            </a>
          </div>
        </div>

        {/* Right developer card */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 bg-purple-600/20 blur-3xl rounded-full" />

            <div className="relative bg-[#111827] border border-purple-500/20 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-purple-900/20">

              <div className="flex items-center gap-2 border-b border-white/10 pb-5 mb-6">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
                <span className="text-gray-500 text-xs ml-3">
                  developer.jsx
                </span>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                  <Code2 size={28} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">
                    Full-Stack Developer
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Building for the web
                  </p>
                </div>
              </div>

              <div className="font-mono text-sm leading-8 overflow-x-auto">
                <p className="text-purple-400">const developer = {'{'}</p>
                <p className="pl-5 text-gray-300">
                  name: <span className="text-green-400">'Deepanjali'</span>,
                </p>
                <p className="pl-5 text-gray-300">
                  frontend: <span className="text-green-400">'React.js'</span>,
                </p>
                <p className="pl-5 text-gray-300">
                  backend: <span className="text-green-400">'Laravel'</span>,
                </p>
                <p className="pl-5 text-gray-300">
                  language: <span className="text-green-400">'PHP'</span>,
                </p>
                <p className="pl-5 text-gray-300">
                  database: <span className="text-green-400">'MySQL'</span>
                </p>
                <p className="text-purple-400">{'}'}</p>
              </div>

              <div className="mt-7 pt-5 border-t border-white/10 flex justify-between items-center">
                <span className="text-gray-400 text-xs">
                  Turning ideas into reality
                </span>
                <span className="text-purple-400 text-sm">&lt;/&gt;</span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
