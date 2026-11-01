
import {
  Mail,
  ArrowUp,
  Heart,
  Code2,
} from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#0B1020] px-3 pb-6 pt-14 text-white sm:px-4 md:px-5 text-white">
      <div className="mx-auto w-full max-w-[1400px]">

        <div className="grid w-full grid-cols-1 gap-10 border-b border-white/10 pb-10 md:grid-cols-3 md:gap-12">

          {/* Branding */}
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-2 text-2xl font-bold"
            >
              <Code2 size={27} className="text-purple-400" />
              Deepanjali<span className="text-purple-400"></span>
            </a>

            <p className="mt-5 max-w-xs text-sm leading-7 text-gray-400">
              Aspiring Web Developer passionate about creating
              meaningful digital experiences through technology
              and creativity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-purple-300">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-x-5 gap-y-4">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="w-fit text-sm text-gray-400 transition hover:text-purple-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-purple-300">
              Let's Connect
            </h3>

            <a
              href="mailto:deepanjalipal07@gmail.com"
              className="flex items-center gap-3 break-all text-sm text-gray-400 transition hover:text-purple-300"
            >
              <Mail size={18} className="shrink-0" />
              deepanjalipal07@gmail.com
            </a>

            <div className="mt-6 flex gap-3">
              <a
                href="https://github.com/deepanjali1201"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/10 bg-[#151F38] px-4 py-2 text-sm text-gray-300 transition hover:border-purple-400 hover:text-purple-300"
              >
                GitHub ↗
              </a>

              <a
                href="https://linkedin.com/in/deepanjali-pal-75a3a2321"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/10 bg-[#151F38] px-4 py-2 text-sm text-gray-300 transition hover:border-purple-400 hover:text-purple-300"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-5 pt-7 text-center sm:flex-row sm:text-left">

          <p className="text-xs text-gray-500">
            © {currentYear} Deepanjali Pal. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-xs text-gray-500">
            Made with
            <Heart
              size={13}
              className="fill-purple-400 text-purple-400"
            />
            and creativity
          </p>

          <a
            href="#home"
            className="flex items-center gap-2 text-xs font-medium text-purple-300 transition hover:text-purple-200"
          >
            Back to Top
            <ArrowUp size={16} />
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
