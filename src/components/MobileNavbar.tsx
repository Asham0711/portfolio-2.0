'use client';
import { useState } from 'react';
import Link from 'next/link';
import { navLink } from '@/data';
import { IoMoonSharp, IoSunny } from 'react-icons/io5';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';

export default function MobileNavbar() {
    const { theme, toggleTheme } = useTheme();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            {/* Mobile Navbar */}
            <div className="py-2 px-6 flex justify-between items-center shadow-md dark:shadow-gray-500 fixed top-0 right-0 left-0 bg-[#F5EFFF] dark:bg-[#121212] z-50">
                {/* Logo */}
                <div>
                    <h1 className="text-lg font-bold">
                        Md <span className="text-[#E88DEA]">Asham</span> Imad
                    </h1>
                </div>

               <div className='flex gap-3'>
                     {/* Toggle Theme Button */}
                    <button onClick={toggleTheme} className="flex items-center">
                        {theme === 'light' ? (
                            <IoMoonSharp className="text-xl text-[#E88DEA]" />
                        ) : (
                            <IoSunny className="text-xl text-[#E88DEA]" />
                        )}
                    </button>

                    {/* Hamburger Menu */}
                    <button onClick={toggleSidebar} className="flex items-center">
                        {isSidebarOpen ? (
                            <HiX className="text-2xl text-[#E88DEA]" />
                        ) : (
                            <HiMenuAlt3 className="text-2xl text-[#E88DEA]" />
                        )}
                    </button>
               </div>
            </div>

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-[#F5EFFF] dark:bg-[#121212] shadow-md transition-transform duration-300 z-[1000] ${
                    isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="flex flex-col items-start p-6 space-y-6">
                    {navLink.map((link) => (
                        <Link
                            key={link.title}
                            href={link.path}
                            className="text-lg text-gray-700 dark:text-gray-300 hover:text-[#E88DEA] transition-all duration-300"
                            onClick={toggleSidebar}
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Overlay (optional, for UX improvement) */}
            {isSidebarOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
                    onClick={toggleSidebar}
                />
            )}
        </>
    );
}