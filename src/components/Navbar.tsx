'use client';
import { useTheme } from '../context/ThemeContext';
import HighlightText from './HighlightText';
import Link from 'next/link';
import { navLink } from '@/data';
import { IoMoonSharp, IoSunny } from 'react-icons/io5';

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="py-2 px-28 flex justify-between items-center shadow-md dark:shadow-gray-500 fixed top-0 right-0 left-0 bg-[#F5EFFF] dark:bg-[#121212] z-50">
            <div>
                <h1 className="text-xl font-bold">Md <HighlightText text='Asham'/> Imad</h1>
                <p>Software Developer</p>
            </div>
            <div>
                <ul className='hidden md:flex space-x-8'>
                    {navLink.map((link) => (
                        <li key={link.title}>
                            <Link
                                href={link.path}
                                className='hover:text-[#E88DEA] transition-all duration-300'
                            >
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        <button
            onClick={toggleTheme}
        >
            {theme === 'light' ? <IoMoonSharp className='text-2xl text-[#E88DEA]' /> : <IoSunny className='text-3xl text-[#E88DEA]'/>}
        </button>
        </div>
    );
}