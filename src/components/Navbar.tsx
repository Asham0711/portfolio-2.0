"use client";
import { useTheme } from "../context/ThemeContext";
import Link from "next/link";
import { navLink } from "@/data";
import { IoMoonSharp, IoSunny } from "react-icons/io5";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  return (
    <div className="fixed top-0 right-0 left-0 z-[9999] flex justify-center px-6 pt-4">
      <nav className="w-full max-w-[1100px] flex justify-between items-center px-6 py-3 rounded-2xl border border-brand-300/20 dark:bg-dark/70 bg-light/70 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-[1rem] font-extrabold tracking-tight dark:text-white text-black">
            Md <span className="text-brand-300">Asham</span> Imad
          </span>
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.15em] text-[#888]">
            Software Engineer
          </span>
        </Link>

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLink.map((link) => {
            const isActive = pathname === link.path;
            return (
              <li key={link.title}>
                <Link
                  href={link.path}
                  className={`px-4 py-1.5 rounded-lg text-[0.85rem] font-medium transition-all duration-250 ${
                    isActive
                      ? "text-brand-300 bg-brand-300/10 border border-brand-300/30"
                      : "text-[#888] hover:text-brand-300 hover:bg-brand-300/5"
                  }`}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="h-9 w-9 rounded-xl border border-brand-300/20 dark:bg-white/[0.03] bg-brand-300/[0.06] flex items-center justify-center hover:border-brand-300/50 hover:bg-brand-300/10 transition-all duration-250 cursor-pointer"
        >
          {theme === "light" ? (
            <IoMoonSharp className="text-lg text-brand-300" />
          ) : (
            <IoSunny className="text-xl text-brand-300" />
          )}
        </button>
      </nav>
    </div>
  );
}
