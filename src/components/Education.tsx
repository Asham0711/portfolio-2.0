import { FaGraduationCap, FaSchool } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import HighlightText from "./HighlightText";
import { educationData } from "@/data";

const Education = () => {
  return (
    <div className="min-h-screen pt-24 px-6 pb-16 relative overflow-hidden">
      <div className="pointer-events-none fixed top-[20%] right-[-5%] w-[500px] h-[500px] rounded-full bg-brand-300/5 blur-[80px] z-0" />

      <div className="max-w-[1100px] mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="md:text-5xl text-4xl font-extrabold">
            <HighlightText text="Education" />
          </h1>
          <p className="text-lg text-[#888] mt-2">
            The foundation behind the code
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-300/60 via-brand-300/20 to-transparent md:-translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {educationData.map((edu, i) => {
              const isRight = i % 2 !== 0;
              return (
                <div
                  key={i}
                  className="relative flex items-start md:items-center gap-6 md:gap-0"
                >
                  <div className="flex-shrink-0 md:hidden relative z-10 mt-1">
                    <div className="h-3 w-3 rounded-full bg-brand-300 shadow-[0_0_8px_#2193b0]" />
                  </div>
                  <div
                    className={`w-full md:flex md:items-center md:gap-0 ${isRight ? "md:flex-row-reverse" : "md:flex-row"}`}
                  >
                    <div
                      className={`w-full md:w-[calc(50%-2.5rem)] group relative overflow-hidden rounded-2xl border border-brand-300/20 dark:bg-white/[0.02] bg-brand-300/[0.08] p-5 transition-all duration-300 hover:border-brand-300/50 hover:shadow-[0_8px_32px_rgba(33,147,176,0.12)] hover:-translate-y-0.5 ${isRight ? "md:ml-auto" : ""}`}
                    >
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-300/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div>
                          <span className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-brand-300">
                            {edu.degree}
                          </span>
                          <h3 className="font-bold text-[1rem] dark:text-white text-black leading-snug mt-0.5">
                            {edu.field}
                          </h3>
                        </div>
                        <span className="flex-shrink-0 font-mono text-[0.7rem] font-bold px-2.5 py-1 rounded-lg border border-brand-300/30 text-brand-300 bg-brand-300/10">
                          {edu.tag}
                        </span>
                      </div>
                      <div className="flex flex-col gap-2 mt-3">
                        <div className="flex items-center gap-2 text-[0.85rem] text-[#555] dark:text-[#bbb]">
                          <FaSchool className="text-brand-300 flex-shrink-0" />
                          <span>{edu.institution}</span>
                          <span className="font-mono text-[0.7rem]  ml-auto flex-shrink-0">
                            {edu.board}
                          </span>
                        </div>

                        <div className="flex items-center gap-4 pt-2 border-t border-brand-300/10">
                          <span className="flex items-center gap-1.5 text-[0.82rem] font-semibold dark:text-white text-black">
                            <FaGraduationCap className="text-brand-300" />
                            {edu.score}
                          </span>
                          <span className="flex items-center gap-1.5 text-[0.82rem]  ml-auto font-mono">
                            <SlCalender className="text-brand-300" />
                            {edu.year}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="hidden md:flex items-center justify-center w-20 flex-shrink-0 relative z-10">
                      <div className="h-4 w-4 rounded-full bg-brand-300 shadow-[0_0_10px_#2193b0] ring-4 ring-brand-300/20" />
                    </div>
                    <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 pt-8 border-t border-brand-300/20">
          <div className="text-center">
            <div className="font-mono text-[2rem] font-extrabold leading-none text-brand-300">
              8.62
            </div>
            <div className="mt-1 text-[0.75rem] uppercase tracking-[0.12em] ">
              B.Tech CGPA
            </div>
          </div>
          <div className="text-center">
            <div className="font-mono text-[2rem] font-extrabold leading-none text-brand-300">
              81%
            </div>
            <div className="mt-1 text-[0.75rem] uppercase tracking-[0.12em] ">
              Class XII
            </div>
          </div>
          <div className="text-center">
            <div className="font-mono text-[2rem] font-extrabold leading-none text-brand-300">
              73%
            </div>
            <div className="mt-1 text-[0.75rem] uppercase tracking-[0.12em] ">
              Class X
            </div>
          </div>
          <div className="text-center">
            <div className="font-mono text-[2rem] font-extrabold leading-none text-brand-300">
              17+
            </div>
            <div className="mt-1 text-[0.75rem] uppercase tracking-[0.12em] ">
              Years Studying
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
