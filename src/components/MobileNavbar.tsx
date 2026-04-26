"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import { FaGraduationCap, FaHome } from "react-icons/fa";
import { BsInfoCircleFill } from "react-icons/bs";
import { GoProject } from "react-icons/go";
import { IoCall, IoMenu, IoMoonSharp, IoSunny } from "react-icons/io5";
import { useTheme } from "@/context/ThemeContext";
import { SiHyperskill } from "react-icons/si";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();
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

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-[9999] backdrop-blur-sm bg-transparent flex justify-between items-center py-2 px-4">
        <div className="py-2 px-6 flex justify-between items-center shadow-md dark:shadow-gray-500 fixed top-0 right-0 left-0 bg-[#F5EFFF] dark:bg-[#121212] z-50">
          {/* Logo */}
          <div>
            <h1 className="text-lg font-bold">
              Md <span className="text-brand-300">Asham</span> Imad
            </h1>
          </div>

          <div className="flex gap-3">
            {/* Toggle Theme Button */}
            <button onClick={toggleTheme} className="flex items-center">
              {theme === "light" ? (
                <IoMoonSharp className="text-xl text-brand-300" />
              ) : (
                <IoSunny className="text-xl text-brand-300" />
              )}
            </button>

            {/* Hamburger Menu */}
            <button onClick={toggleSidebar} className="flex items-center">
              <IoMenu className="text-2xl text-brand-300" />
            </button>
          </div>
        </div>
        <button className="text-primary-brand text-4xl" onClick={toggleSidebar}>
          <BiMenu className="text-xl text-brand-300" />
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-120"></div>
      )}

      <div
        ref={sidebarRef}
        className={`fixed z-[9999] top-0 right-0 w-3/5 rounded-lg bg-black/40 backdrop-blur-sm border border-white/20 p-4 shadow-lg z-150 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-2">
          <div className="bg-transparent border border-white/20 rounded-lg py-1 space-y-4">
            <li>
              <Link
                href="/#home"
                onClick={toggleSidebar}
                className="hover:bg-black/30 px-4 py-1 rounded-sm hover:text-primary-brand w-full flex gap-1 items-center"
              >
                <FaHome size={14} />
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/#about"
                onClick={toggleSidebar}
                className="flex gap-1 items-center hover:bg-black/30 px-4 py-1 rounded-sm hover:text-primary-brand w-full"
              >
                <BsInfoCircleFill size={14} />
                About
              </Link>
            </li>

            <li>
              <Link
                href="/#skills"
                onClick={toggleSidebar}
                className="flex gap-1 items-center hover:bg-black/30 px-4 py-1 rounded-sm hover:text-primary-brand w-full"
              >
                <SiHyperskill size={14} />
                Skills
              </Link>
            </li>

            <li>
              <Link
                href="/#projects"
                onClick={toggleSidebar}
                className="flex gap-1 items-center hover:bg-black/30 px-4 py-1 rounded-sm hover:text-primary-brand w-full"
              >
                <GoProject size={14} />
                Projects
              </Link>
            </li>

            <li>
              <Link
                href="/#education"
                onClick={toggleSidebar}
                className="flex gap-1 items-center hover:bg-black/30 px-4 py-1 rounded-sm hover:text-primary-brand w-full"
              >
                <FaGraduationCap size={14} />
                Education
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                onClick={toggleSidebar}
                className="flex gap-1 items-center hover:bg-black/30 px-4 py-1 rounded-sm hover:text-primary-brand w-full"
              >
                <IoCall size={14} />
                Contact
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
};

export default MobileNavbar;
