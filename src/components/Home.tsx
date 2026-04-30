"use client";
import { ReactTyped } from "react-typed";
import { Spotlight } from "./ui/Spotlight";
import InteractiveImage from "./InteractiveImage";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaFileAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiExpress, SiMongodb, SiSalesforce } from "react-icons/si";
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";
import { FaReact, FaNodeJs } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, href: "https://github.com/Asham0711", label: "GitHub" },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/md-asham-imad-926316224/",
    label: "LinkedIn",
  },
  { icon: <FaXTwitter />, href: "https://x.com/asham0711", label: "Twitter" },
  {
    icon: <FaInstagram />,
    href: "https://www.instagram.com/__ash._______?utm_source=qr&igsh=bm81ejQwbHR2cXdv",
    label: "Instagram",
  },
];

const techStack = [
  { icon: <SiSalesforce className="text-[#00A1E0]" />, label: "Salesforce" },
  { icon: <FaReact className="text-[#61DAFB]" />, label: "React.js" },
  {
    icon: <TbBrandNextjs className="dark:text-white text-black" />,
    label: "Next.js",
  },
  { icon: <FaNodeJs className="text-[#339933]" />, label: "Node.js" },
  {
    icon: <SiExpress className="dark:text-white text-black" />,
    label: "Express",
  },
  { icon: <SiMongodb className="text-[#47A248]" />, label: "MongoDB" },
  {
    icon: <TbBrandReactNative className="text-[#61DAFB]" />,
    label: "React Native",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen pt-20 px-6 pb-16 relative overflow-hidden flex items-center">
      <Spotlight
        className="left-0 md:left-60 md:top-56 top-0 hidden md:block"
        fill="#2193b0"
      />

      <div className="pointer-events-none fixed top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-brand-300/5 blur-[80px] z-0" />

      <div className="max-w-[1100px] mx-auto relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="md:w-[58%] flex flex-col gap-6 order-2 md:order-1">
            <div className="space-y-2">
              <p className="text-[#888] font-mono text-[0.85rem] tracking-widest uppercase">
                Hey there, I&apos;m Asham 👋
              </p>
              <div className="flex text-2xl space-x-2 md:text-4xl">
                <h1>Hello I am a</h1>
                <ReactTyped
                  className="text-brand-300 font-bold"
                  strings={["Programmer", "Developer", "Coder"]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop={true}
                />
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-brand-300/20 dark:bg-white/[0.02] bg-brand-300/[0.08] p-5">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-300/50 to-transparent" />
              <p className="text-[0.92rem] leading-7 text-[#555] dark:text-[#bbb]">
                Full-stack engineer specialising in{" "}
                <span className="font-semibold dark:text-white text-black">
                  MERN · Next.js · React Native
                </span>{" "}
                and{" "}
                <span className="font-semibold dark:text-white text-black">
                  Salesforce (Apex · LWC · Flows)
                </span>
                . I turn complex problems into clean, scalable software that
                people actually enjoy using.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-[#888]">
                Current Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {techStack.map((t) => (
                  <div
                    key={t.label}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-brand-300/15 dark:bg-white/[0.02] bg-brand-300/[0.06] text-[0.8rem] font-medium dark:text-white text-black transition-all duration-250 hover:border-brand-300/40 hover:shadow-[0_0_10px_rgba(33,147,176,0.1)] hover:-translate-y-0.5"
                  >
                    <span className="text-base">{t.icon}</span>
                    {t.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <Link
                href="/projects"
                className="flex items-center gap-2 bg-gradient-to-r from-brand-300 via-brand-200 to-brand-100 px-6 py-2.5 rounded-xl font-semibold text-black text-[0.9rem] transition-all duration-250 hover:shadow-[0_0_24px_rgba(33,147,176,0.35)] hover:-translate-y-0.5 active:scale-[0.98]"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="font-mono text-[0.75rem] uppercase tracking-widest text-brand-300 border border-brand-300/30 px-5 py-2.5 rounded-xl hover:bg-brand-300/10 transition-all duration-250 hover:-translate-y-0.5"
              >
                Contact Me
              </Link>
            </div>

            <div className="flex items-center gap-3 pt-1">
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-[#888]">
                Find me on
              </span>
              <div className="w-8 h-px bg-brand-300/30" />
              <div className="flex items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="h-9 w-9 rounded-xl border border-brand-300/15 dark:bg-white/[0.02] bg-brand-300/[0.06] flex items-center justify-center text-[#888] hover:text-brand-300 hover:border-brand-300/50 hover:shadow-[0_0_10px_rgba(33,147,176,0.15)] transition-all duration-250 hover:-translate-y-0.5 text-base"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="md:w-[42%] md:mt-0 mt-8 flex justify-center items-center order-1 md:order-2">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-brand-300/10 blur-2xl scale-110 z-0" />
              <div className="relative z-10">
                <InteractiveImage className="md:w-[380px] md:h-[340px] w-[260px] h-[230px]" />
              </div>
              <div className="absolute -bottom-4 -left-4 z-20 flex items-center gap-2 px-4 py-2.5 rounded-xl border border-brand-300/30 dark:bg-[#0e0e0e] bg-white shadow-lg">
                <FaFileAlt className="text-brand-300 text-sm" />
                <div>
                  <p className="font-mono text-[0.6rem] uppercase tracking-widest text-[#888] leading-none">
                    Experience
                  </p>
                  <p className="text-[0.8rem] font-bold dark:text-white text-black leading-tight">
                    1+ Year
                  </p>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 z-20 flex items-center gap-2 px-4 py-2.5 rounded-xl border border-brand-300/30 dark:bg-[#0e0e0e] bg-white shadow-lg">
                <span className="h-2 w-2 rounded-full bg-brand-300 shadow-[0_0_6px_#2193b0] animate-pulse" />
                <p className="font-mono text-[0.65rem] uppercase tracking-widest text-brand-300">
                  Full Stack
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
