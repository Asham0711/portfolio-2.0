import { AnimatedBarProps } from "@/types/skills";
import React, { useEffect, useRef, useState } from "react";

const AnimatedBar = ({ level, color, delay }: AnimatedBarProps) => {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), delay);
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div
      ref={ref}
      className="h-1 w-full overflow-hidden rounded-sm bg-black/[0.07] dark:bg-white/[0.06]"
    >
      <div
        className="h-full rounded-sm transition-all"
        style={{
          width: `${width}%`,
          background: `linear-gradient(90deg, ${color}88, ${color})`,
          boxShadow: `0 0 8px ${color}66`,
          transitionProperty: "width",
          transitionDuration: "1000ms",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          transitionDelay: `${delay}ms`,
        }}
      />
    </div>
  );
};

export default AnimatedBar;
