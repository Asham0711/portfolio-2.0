'use client'
import pic from '@/assests/aboutPic.jpg';
import Image from 'next/image';
import { FaFileAlt } from 'react-icons/fa';
import { BackgroundGradient } from './ui/background-gradient';
import HighlightText from './HighlightText';
const resume = '/Md_Asham_Imad_Resume.pdf'

const About = () => {
  const onButtonClick = () => {
    // Directly open the resume link for download
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Md_Asham_Imad_Resume.pdf';
    link.click();
  };

  return (
    <div id="about" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
      <h1 className="text-4xl text-center font-bold mb-2"><HighlightText text='About' /></h1>
      <div className="border-2 border-[#e77bfa] w-[5%] mx-auto md:mb-20"></div>
      <div className="flex flex-col gap-8 md:flex-row justify-between space-x-5 md:px-20">
        <div className="md:w-1/2 w-full px-20">
          <BackgroundGradient className='rounded-3xl'>
            <Image
              src={pic}
              alt="Profile"
              className='rounded-3xl'
            />
          </BackgroundGradient>
        </div>
        <div className="md:w-1/2 flex flex-col justify-center gap-5 items-center">
          <p className="md:text-xl">
            Hello! I am Md Asham Imad, a passionate software engineer with a strong foundation in Information Technology. My
            expertise lies in the MERN stack (MongoDB, Express.js, React.js, Node.js) and NextJs, and I thrive on creating dynamic,
            responsive, and user-friendly web applications. With a keen eye for detail and a commitment to staying updated
            with the latest industry trends, I continuously strive to deliver efficient and innovative solutions. Welcome to
            my portfolio, where you can explore my journey and the projects I have worked on.
          </p>
          <button
            className="bg-gradient-to-r from-[#5F0FFF] via-[#A909FF] to-[#E88DEA] px-5 py-2 rounded-xl flex gap-2 justify-center items-center font-semibold text-white"
            onClick={onButtonClick}
          >
            Resume <FaFileAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
