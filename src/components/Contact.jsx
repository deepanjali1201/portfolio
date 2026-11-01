
import {
  Mail,
  MapPin,
  Send,
  ArrowUpRight,
  Sparkles,
  Globe,
} from "lucide-react";

function Contact() {
  const email = "deepanjalipal07@gmail.com";

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#111A35] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[4px] text-purple-400">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Let's Work <span className="text-purple-400">Together</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            Have a project in mind or looking for a developer?
            I'd love to hear from you and explore how we can
            create something amazing together.
          </p>
        </div>

        {/* Main Contact Card */}
        <div className="relative overflow-hidden rounded-3xl border border-purple-400/20 bg-gradient-to-br from-[#192542] via-[#151F38] to-[#11182B] p-7 shadow-xl shadow-purple-950/20 sm:p-10 md:p-14">

          {/* Decorative Glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

          <div className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">

            {/* Left Content */}
            <div>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/10 text-purple-300">
                <Sparkles size={27} />
              </div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-purple-400">
                Have an idea?
              </p>

              <h3 className="mb-5 text-2xl font-bold leading-snug sm:text-3xl">
                Let's turn your ideas into something meaningful.
              </h3>

              <p className="text-sm leading-8 text-gray-400">
                I'm interested in freelance opportunities,
                collaborations and exciting web development projects.
                Let's connect and discuss your next idea.
              </p>

              <a
                href={`mailto:${email}?subject=Project%20Inquiry`}
                className="mt-8 inline-flex items-center gap-3 rounded-xl bg-purple-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-950/30 transition-all duration-300 hover:-translate-y-1 hover:bg-purple-400"
              >
                <Send size={17} />
                Let's Talk
                <ArrowUpRight size={17} />
              </a>
            </div>

            {/* Right Contact Details */}
            <div className="flex flex-col gap-5">

              {/* Email */}
              <a
                href={`mailto:${email}`}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0D162A]/70 p-5 transition hover:border-purple-400/40 hover:bg-purple-500/5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-300">
                  <Mail size={22} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="mb-1 text-xs text-gray-500">
                    Email Me
                  </p>
                  <p className="break-all text-sm font-medium text-gray-200">
                    {email}
                  </p>
                </div>

                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-gray-500 transition group-hover:text-purple-300"
                />
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0D162A]/70 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-300">
                  <MapPin size={22} />
                </div>

                <div>
                  <p className="mb-1 text-xs text-gray-500">
                    Location
                  </p>
                  <p className="text-sm font-medium text-gray-200">
                    India
                  </p>
                </div>
              </div>

              {/* Work Availability */}
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0D162A]/70 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-300">
                  <Globe size={22} />
                </div>

                <div>
                  <p className="mb-1 text-xs text-gray-500">
                    Opportunities
                  </p>
                  <p className="text-sm font-medium text-gray-200">
                    Open to Global Collaboration
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <p className="mt-10 text-center text-sm text-gray-500">
          Have a great idea? Let's make it happen.
          <span className="ml-2 text-purple-400">✦</span>
        </p>

      </div>
    </section>
  );
}

export default Contact;
