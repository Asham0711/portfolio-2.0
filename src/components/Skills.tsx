"use client";
import { useState } from "react";
import { DiMongodb } from "react-icons/di";
import { FaGithub, FaJava, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { FaBoltLightning, FaCuttlefish } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { IoGitBranch, IoLogoVercel } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress,
  SiJavascript,
  SiSalesforce,
  SiTypescript,
} from "react-icons/si";
import { TbBrandCpp, TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import HighlightText from "./HighlightText";
import SkillCard from "./SkillCard";
import { Category } from "@/types/skills";
import { stats } from "@/data";

const categories: Category[] = [
  {
    id: "languages",
    label: "Languages",
    emoji: "◈",
    skills: [
      {
        name: "JavaScript",
        icon: <SiJavascript />,
        level: 90,
        color: "#F7DF1E",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
        level: 82,
        color: "#3178C6",
      },
      { name: "Python", icon: <FaPython />, level: 50, color: "#FFD44B" },
      { name: "Java", icon: <FaJava />, level: 75, color: "#ED8B00" },
      { name: "C++", icon: <TbBrandCpp />, level: 85, color: "#00599C" },
      { name: "C", icon: <FaCuttlefish />, level: 65, color: "#00A1E0" },
      { name: "SQL", icon: <GrMysql />, level: 75, color: "#00758F" },
      { name: "Apex", icon: <SiSalesforce />, level: 65, color: "#00A1E0" },
      {
        name: "Lightning Web Components",
        icon: <FaBoltLightning />,
        level: 80,
        color: "#7928CA",
      },
    ],
  },
  {
    id: "frameworks",
    label: "Frameworks & Libraries",
    emoji: "◉",
    skills: [
      { name: "React JS", icon: <FaReact />, level: 92, color: "#61DAFB" },
      { name: "Next JS", icon: <TbBrandNextjs />, level: 88, color: "#7928ca" },
      {
        name: "React Native",
        icon: <TbBrandReactNative />,
        level: 72,
        color: "#61DAFB",
      },
      { name: "Node JS", icon: <FaNodeJs />, level: 85, color: "#339933" },
      { name: "Express JS", icon: <SiExpress />, level: 83, color: "#FFB000" },
      {
        name: "Tailwind CSS",
        icon: <RiTailwindCssFill />,
        level: 90,
        color: "#06B6D4",
      },
      { name: "MongoDB", icon: <DiMongodb />, level: 80, color: "#47A248" },
    ],
  },
  {
    id: "platforms",
    label: "Platforms & Tools",
    emoji: "◎",
    skills: [
      {
        name: "Salesforce CRM",
        icon: <SiSalesforce />,
        level: 75,
        color: "#00A1E0",
      },
      { name: "Git", icon: <IoGitBranch />, level: 88, color: "#F05032" },
      { name: "GitHub", icon: <FaGithub />, level: 88, color: "#373e47" },
      { name: "VS Code", icon: <VscVscode />, level: 95, color: "#007ACC" },
      { name: "Vercel", icon: <IoLogoVercel />, level: 82, color: "#0070f3" },
    ],
  },
];

export default function Skills() {
  const [active, setActive] = useState("languages");
  const activeCategory = categories.find((c) => c.id === active)!;

  return (
    <div className="min-h-[100vh] pt-24 px-6 pb-16 relative overflow-hidden">
      <div className="max-w-[1100px] mx-auto relative z-[50]">
        <div className="text-center mb-10">
          <h1 className="md:text-5xl text-4xl font-extrabold">
            <HighlightText text="Skills & Stack" />
          </h1>
          <p className="text-lg text-[#888]">
            Technologies I build with, learn from, and love
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`
                relative flex items-center gap-2 overflow-hidden rounded-md border dark:border-white/10 border-black/60 px-5 py-[10px] text-[0.875rem] font-medium tracking-wide transition-all duration-250 cursor-pointer font-inherit
                before:absolute before:inset-0 before:bg-brand-300/[0.08] before:opacity-0 before:transition-opacity before:content-[''] hover:before:opacity-100
                ${
                  active === cat.id
                    ? "border-brand-300 text-brand-300 bg-brand-300/10 shadow-[0_0_20px_rgba(33,147,176,0.15),inset_0_0_20px_rgba(33,147,176,0.05)] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-transparent after:via-brand-300 after:to-transparent after:content-['']"
                    : "border-brand-300/20 bg-transparent hover:border-brand-300/50 hover:text-brand-300"
                }
              `}
            >
              <span className="relative z-10">{cat.emoji}</span>
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-brand-300/40 dark:bg-brand-300/[0.02] bg-brand-300/[0.2] p-8">
          <div className="mb-6 flex items-center gap-[10px] border-b border-brand-300/40 pb-4">
            <div className="h-[6px] w-[6px] animate-pulse rounded-full bg-brand-300 shadow-[0_0_8px_#2193b0]" />

            <span className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-brand-300">
              {activeCategory.label}
            </span>

            <span className="ml-auto font-mono text-[0.7rem] tracking-widest">
              {String(activeCategory.skills.length).padStart(2, "0")} modules
              loaded
            </span>
          </div>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-3">
            {activeCategory.skills.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-8 border-t border-brand-300/40 pt-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-mono text-[2rem] font-extrabold leading-none text-brand-300">
                {stat.num}
              </div>
              <div className="mt-1 text-[0.75rem] uppercase tracking-[0.12em]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
