export const navLink = [
    { title: 'Home', path: '/#home' },
    { title: 'About', path: '/#about' },
    { title: 'Skills', path: '/#skills' },
    { title: 'Projects', path: '/#projects' },
    { title: 'Education', path: '/#education' },
    { title: 'Contact', path: '/#contact' },
];


import project1 from '@/assests/ashcode.jpg'
import project2 from '@/assests/ashchat.jpg'
import project3 from '@/assests/anonymous.png'
import project4 from '@/assests/music.png'
import project5 from '@/assests/slip.png'
export const testimonials = [
    {
      quote: "An innovative MERN-based online learning platform enables students to purchase courses and instructors to create and monetize them, ensuring smooth interactions with secure JWT authentication, OTP validation, Razorpay payments, Cloudinary media storage, Redux state management, and a responsive Tailwind CSS UI.",
      name: "Ash Code",
      designation: "A Full Stack Ed-Tech Platform",
      src: project1,
      liveLink:'https://ash-code.onrender.com',
      github:'https://github.com/Asham0711/Ash-Code'
    },
    {
      quote: "A real-time messaging platform using the MERN stack, featuring secure JWT authentication, instant communication with Socket.IO, and a responsive UI built with Chakra UI. It supports group and one-on-one chats, with data managed efficiently via MongoDB.",
      name: "Ash Chat",
      designation: "A Real Time Chatting Application",
      src: project2,
      liveLink:'https://ash-chat.onrender.com',
      github:'https://github.com/Asham0711/Ash-Chat'
    },
    {
      quote: "A Next.js application enabling users to receive anonymous messages via a unique link. It features AI-powered assistance through Gemini for enhanced interaction and supports both normal and NextAuth authentication for secure access.",
      name: "Anonymous Feedback",
      designation: "Anonymous messaging with AI support.",
      src: project3,
      liveLink:'https://anonymous-message-lyart.vercel.app/',
      github:'https://github.com/Asham0711/anonymous-message-ai'
    },
    {
      quote: "A website showcasing UI/UX design expertise, featuring the frontend of 'Ash Music Academy.' Built with Next.js for performance and Framer Motion for smooth animations, this project highlights a modern, user-friendly interface tailored for a music academy's online presence.",
      name: "Ash Music",
      designation: "A Music Learning Platform",
      src: project4,
      liveLink:'https://ash-music-academy.vercel.app/',
      github:'https://github.com/Asham0711/ash-music'
    },
    {
      quote: "A MERN stack-based website that allows users to input data and generate salary slips, with the added functionality to download the generated slip in PDF format using html2pdf.js, offering a seamless and efficient experience for salary slip creation.",
      name: "Slip Generator",
      designation: "A Website to Download Slips Effortlessly.",
      src: project5,
      liveLink:'https://salary-slip-nexisa.vercel.app/',
      github:'https://github.com/Asham0711/html-to-pdf-generator'
    },
];