import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

const socials = [
  {
    icon: <FaGithub size={16} />,
    href: "https://github.com/Asham0711",
    label: "GitHub",
  },
  {
    icon: <FaLinkedinIn size={16} />,
    href: "https://www.linkedin.com/in/md-asham-imad-926316224/",
    label: "LinkedIn",
  },
  {
    icon: <FaXTwitter size={16} />,
    href: "https://x.com/asham0711",
    label: "Twitter",
  },
  {
    icon: <FaInstagram size={16} />,
    href: "https://www.instagram.com/__ash._______?utm_source=qr&igsh=bm81ejQwbHR2cXdv",
    label: "Instagram",
  },
];

function Footer() {
  return (
    <footer className="border-t border-brand-300/15 py-6 px-6">
      <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left — brand */}
        <p className="font-mono text-[0.7rem] uppercase tracking-widest text-[#888]">
          © 2026 <span className="text-brand-300">Md Asham Imad</span>
        </p>

        {/* Right — socials */}
        <div className="flex items-center gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="h-8 w-8 rounded-lg border border-brand-300/15 dark:bg-white/[0.02] bg-brand-300/[0.05] flex items-center justify-center text-[#888] hover:text-brand-300 hover:border-brand-300/50 hover:shadow-[0_0_8px_rgba(33,147,176,0.15)] transition-all duration-250 hover:-translate-y-0.5"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
