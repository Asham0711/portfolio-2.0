"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaGraduationCap, FaHome } from "react-icons/fa";
import { BsInfoCircleFill } from "react-icons/bs";
import { GoProject } from "react-icons/go";
import { IoCall, IoClose, IoMenu, IoMoonSharp, IoSunny } from "react-icons/io5";
import { SiHyperskill } from "react-icons/si";
import { useTheme } from "@/context/ThemeContext";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home", icon: <FaHome size={13} /> },
  { href: "/about", label: "About", icon: <BsInfoCircleFill size={13} /> },
  { href: "/skills", label: "Skills", icon: <SiHyperskill size={13} /> },
  { href: "/projects", label: "Projects", icon: <GoProject size={13} /> },
  {
    href: "/education",
    label: "Education",
    icon: <FaGraduationCap size={13} />,
  },
  { href: "/contact", label: "Contact", icon: <IoCall size={13} /> },
];

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const toggle = () => setIsOpen((p) => !p);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[9999] flex justify-center px-4 pt-3">
        <div className="w-full flex justify-between items-center px-5 py-2.5 rounded-2xl border border-brand-300/20 dark:bg-dark/70 bg-light/70 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
          <Link href="/" className="flex flex-col leading-tight">
            <span className="text-[0.95rem] font-extrabold dark:text-white text-black">
              Md <span className="text-brand-300">Asham</span> Imad
            </span>
            <span className="font-mono text-[0.55rem] uppercase tracking-widest text-[#888]">
              Software Engineer
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="h-8 w-8 rounded-xl border border-brand-300/20 dark:bg-white/[0.03] bg-brand-300/[0.06] flex items-center justify-center hover:border-brand-300/50 transition-all duration-250"
            >
              {theme === "light" ? (
                <IoMoonSharp className="text-base text-brand-300" />
              ) : (
                <IoSunny className="text-base text-brand-300" />
              )}
            </button>
            <button
              onClick={toggle}
              className="h-8 w-8 rounded-xl border border-brand-300/20 dark:bg-white/[0.03] bg-brand-300/[0.06] flex items-center justify-center hover:border-brand-300/50 transition-all duration-250"
            >
              {isOpen ? (
                <IoClose className="text-base text-brand-300" />
              ) : (
                <IoMenu className="text-base text-brand-300" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998]"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-[72%] max-w-xs z-[9999] dark:bg-dark/90 bg-light/90 backdrop-blur-xl border-l border-brand-300/20 shadow-[-8px_0_40px_rgba(0,0,0,0.15)] transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-300/10">
          <div>
            <p className="font-extrabold dark:text-white text-black text-[0.95rem]">
              Md <span className="text-brand-300">Asham</span> Imad
            </p>
            <p className="font-mono text-[0.58rem] uppercase tracking-widest text-[#888]">
              Software Engineer
            </p>
          </div>
          <button
            onClick={toggle}
            className="h-8 w-8 rounded-xl border border-brand-300/20 flex items-center justify-center hover:border-brand-300/50 hover:bg-brand-300/10 transition-all"
          >
            <IoClose className="text-brand-300 text-base" />
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex flex-col gap-1 px-4 pt-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={toggle}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-[0.875rem] font-medium transition-all duration-250 ${
                  isActive
                    ? "text-brand-300 bg-brand-300/10 border border-brand-300/25"
                    : "text-[#666] dark:text-[#aaa] hover:text-brand-300 hover:bg-brand-300/5"
                }`}
              >
                <span className={isActive ? "text-brand-300" : ""}>
                  {item.icon}
                </span>
                {item.label}
                {isActive && (
                  <span className="ml-auto h-1.5 w-1.5 rounded-full bg-brand-300 shadow-[0_0_6px_#2193b0]" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default MobileNavbar;
