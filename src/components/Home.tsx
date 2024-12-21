// import React from 'react';
'use client'
import Image from 'next/image';
import pic from '@/assests/Asham_photo.png';
import { SiExpress } from "react-icons/si";
import { ReactTyped } from 'react-typed';
import { Spotlight } from './ui/Spotlight';
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandMongodb, IconBrandNextjs, IconBrandNodejs, IconBrandReact, IconBrandX } from '@tabler/icons-react';
import { FloatingDock } from './ui/floating-dock';


const Home = () => {
    const socialLinks = [
        {
            title: "Twitter",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://x.com/asham0711",
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://github.com/Asham0711",
        },
        {
            title: "LinkedIn",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.linkedin.com/in/md-asham-imad-926316224/",
        },
        {
            title: "Instagram",
            icon: (
                <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.instagram.com/__ash._______?utm_source=qr&igsh=bm81ejQwbHR2cXdv",
        },
    ];
    const techLinks = [
        {
            title: "MongoDB",
            icon: (
                <IconBrandMongodb className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.mongodb.com/",
        },
        {
            title: "Express JS",
            icon: (
                <SiExpress className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://expressjs.com/",
        },
        {
            title: "React JS",
            icon: (
                <IconBrandReact className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://react.dev/",
        },
        {
            title: "Node JS",
            icon: (
                <IconBrandNodejs className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://nodejs.org/en",
        },
        {
            title: "Next JS",
            icon: (
                <IconBrandNextjs className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://nextjs.org/",
        },
    ]
    return (
        <>
        <div id='home' className="max-w-screen-2xl container mx-auto px-4 md:px-20 md:my-28">
            <Spotlight
                className="left-0 md:left-60 md:top-56 top-0 hidden md:block"
                fill='#f136f4'
            />
            <div className='flex flex-col md:flex-row'>
                {/* Left Side  */}
                <div className='md:w-[65%] mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
                    <span className='text-xl font-bold'>Welcome in my feed</span>
                    <div className='flex text-2xl space-x-2 md:text-4xl'>
                        <h1>Hello I am a</h1>
                        <ReactTyped
                            className="text-[#E88DEA] font-bold"
                            strings={["Programmer", "Developer", "Coder"]}
                            typeSpeed={40}
                            backSpeed={50}
                            loop={true}
                        />
                    </div>
                    <p className='text-lg text-justify'>
                        Hello, I am Asham, a passionate Full Stack Web developer with a keen eye for MERN
                        Stack and NextJs. With a background in IT, I strive to create impactful and
                        visually stunning Software solutions that leave a lasting impression.
                    </p>
                    <br />
                    {/* Social Media  */}
                    <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
                    <div className='space-y-2'>
                        <h1 className="font-bold text-center text-lg">Available on</h1>
                        <FloatingDock
                            mobileClassName="translate-y-2"
                            items={socialLinks}
                        />
                    </div>
                    <div className=" space-y-2">
                        <h1 className="font-bold text-center text-lg">Currently working on</h1>
                        <div className="flex space-x-5">
                            <FloatingDock
                                mobileClassName='translate-y-20'
                                items={techLinks}
                            />
                        </div>
                    </div>
                    </div>
                </div>
                {/* Right Side  */}
                <div className="md:w-[35%] flex justify-center md:ml-28 mt-20 order-1 bg-transparent">
                    <Image
                        src={pic}
                        className="md:w-[400px] md:h-[350px] md:hover:scale-125 transition-all duration-1000 cursor-pointer"
                        alt=""
                    />
                </div>
            </div>
        </div>
        </>
    )
}

export default Home