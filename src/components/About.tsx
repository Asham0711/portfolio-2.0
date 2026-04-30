"use client";
import pic from "@/assests/aboutPic.jpg";
import Image from "next/image";
import { FaFileAlt, FaLinkedin, FaReact } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa6";
import { SiSalesforce } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { BackgroundGradient } from "./ui/background-gradient";
import HighlightText from "./HighlightText";

const resume = "/Md_Asham_Imad_Resume.pdf";

const highlights = [
  {
    icon: <FaBriefcase className="text-brand-300" />,
    label: "Current Role",
    value: "Software Engineer @ Cloudkaptan",
  },
  {
    icon: <SiSalesforce className="text-brand-300" />,
    label: "Salesforce",
    value: "Admin · Apex · LWC · Flows",
  },
  {
    icon: <FaReact className="text-brand-300" />,
    label: "Web & Mobile",
    value: "React · Next.js · React Native",
  },
  {
    icon: <DiMongodb className="text-brand-300" />,
    label: "Backend",
    value: "Node.js · Express · MongoDB",
  },
];

const About = () => {
  const onButtonClick = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Md_Asham_Imad_Resume.pdf";
    link.click();
  };

  return (
    <div className="min-h-screen pt-24 px-6 pb-16 relative overflow-hidden">
      {/* Ambient glow blob */}
      <div className="pointer-events-none fixed top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-brand-300/5 blur-[80px] z-0" />

      <div className="max-w-[1100px] mx-auto relative z-10">
        {/* ── Header ── */}
        <div className="text-center mb-14">
          <h1 className="md:text-5xl text-4xl font-extrabold">
            <HighlightText text="About Me" />
          </h1>
          <p className="text-lg text-[#888] mt-2">
            Engineer by profession, builder by passion
          </p>
        </div>

        {/* ── Main layout ── */}
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left — Image */}
          <div className="md:w-[42%] w-full flex justify-center">
            <BackgroundGradient className="rounded-3xl w-full max-w-sm">
              <Image
                src={pic}
                alt="Md Asham Imad"
                className="rounded-3xl w-full"
              />
            </BackgroundGradient>
          </div>

          {/* Right — Content */}
          <div className="md:w-[58%] flex flex-col gap-6">
            {/* Bio card */}
            <div className="relative overflow-hidden rounded-2xl border border-brand-300/20 dark:bg-white/[0.02] bg-brand-300/[0.2] p-6">
              {/* top shimmer line */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-300/50 to-transparent" />

              <div className="flex items-center gap-2 mb-4">
                <div className="h-1.5 w-1.5 rounded-full bg-brand-300 shadow-[0_0_8px_#2193b0] animate-pulse" />
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-brand-300">
                  bio.txt
                </span>
              </div>

              <p className="text-[0.97rem] leading-7 text-[#555] dark:text-[#bbb]">
                Hey there! I&apos;m{" "}
                <span className="font-semibold text-brand-300">
                  Md Asham Imad
                </span>
                , a Software Engineer currently at{" "}
                <span className="font-semibold dark:text-white text-black">
                  Cloudkaptan Consultancy Service
                </span>
                . I work across the full stack — building{" "}
                <span className="font-semibold dark:text-white text-black">
                  Salesforce solutions
                </span>{" "}
                (Admin, Apex, Flows & LWC components) and shipping{" "}
                <span className="font-semibold dark:text-white text-black">
                  React Native mobile apps
                </span>{" "}
                alongside modern web apps with the MERN stack and Next.js.
              </p>

              <p className="text-[0.97rem] leading-7 text-[#555] dark:text-[#bbb] mt-3">
                With a B.Tech in Information Technology and a drive to stay
                ahead of the curve, I thrive on turning complex problems into
                clean, scalable software — whether that&apos;s a Salesforce
                automation flow, a cross-platform mobile feature, or a slick web
                interface.
              </p>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-3 rounded-xl border border-brand-300/15 dark:bg-white/[0.02] bg-brand-300/[0.2] px-4 py-3 transition-all duration-250 hover:border-brand-300/40 hover:shadow-[0_4px_20px_rgba(33,147,176,0.1)] hover:-translate-y-0.5"
                >
                  <span className="text-lg flex-shrink-0">{h.icon}</span>
                  <div>
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-[#888] leading-none mb-0.5">
                      {h.label}
                    </p>
                    <p className="text-[0.85rem] font-semibold dark:text-white text-black leading-tight">
                      {h.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-1">
              <button
                onClick={onButtonClick}
                className="flex items-center gap-2 bg-gradient-to-r from-brand-300 via-brand-200 to-brand-100 px-6 py-2.5 rounded-xl font-semibold text-black text-[0.9rem] transition-all duration-250 hover:shadow-[0_0_24px_rgba(33,147,176,0.35)] hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer"
              >
                Download Resume <FaFileAlt />
              </button>

              <a
                href="https://www.linkedin.com/in/md-asham-imad-926316224/"
                target="_blank"
                rel="noreferrer"
                className="flex justify-center items-center gap-2 font-mono text-[0.75rem] uppercase tracking-widest text-brand-300 border border-brand-300/30 px-5 py-2.5 rounded-xl hover:bg-brand-300/10 transition-all duration-250 hover:-translate-y-0.5"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
