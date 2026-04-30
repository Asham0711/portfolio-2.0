import { useState } from "react";
import AnimatedBar from "./AnimatedBar";
import { SkillCardProps } from "@/types/skills";

const SkillCard = ({ skill, index }: SkillCardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ animationDelay: `${index * 60}ms` }}
      className={`
          /* Base Layout & Animation */
          relative overflow-hidden rounded-[10px] px-5 py-4 transition-all duration-300 animate-[cardIn_0.5s_ease_both] backdrop-blur-[4px]
          
          /* The Glow Line (::before) */
          before:absolute before:inset-x-0 before:top-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-[#2193b066] before:to-transparent before:opacity-0 before:transition-opacity before:duration-300
          
          /* Dark/Light Theming */
          bg-light border border-black/[0.07]
          dark:bg-white/[0.02] dark:border-white/[0.06]
          
          /* Hover Effects */
          ${hovered ? " -translate-y-0.5 border-[#2193b04d] shadow-[0_8px_32px_rgba(33,147,176,0.12)] before:opacity-100" : ""}
        `}
    >
      <div className="flex items-center gap-[10px] mb-3">
        <span
          className="flex items-center text-[1.4rem] transition-all duration-300"
          style={{
            color: skill.color,
            filter: hovered ? `drop-shadow(0 0 6px ${skill.color})` : "none",
            transform: hovered ? "scale(1.15)" : "scale(1)",
          }}
        >
          {skill.icon}
        </span>

        <span className="flex-1 text-[0.9rem] font-semibold tracking-wide">
          {skill.name}
        </span>

        <span
          className="font-mono text-[0.78rem] font-bold tracking-widest uppercase"
          style={{ color: skill.color }}
        >
          {skill.level}%
        </span>
      </div>

      <AnimatedBar
        level={skill.level}
        color={skill.color}
        delay={index * 60 + 200}
      />
    </div>
  );
};

export default SkillCard;
