import React from "react";
import { FaGraduationCap, FaSchool } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import HighlightText from "./HighlightText";
import { Meteors } from "./ui/meteors";

const Education = () => {
  return (
    <div id="education" className='max-w-screen-2xl container mx-auto px-6 md:px-20 my-20'>
        <h1 className='text-4xl text-center font-bold mb-2'><HighlightText text="Education" /></h1>
        <div className='border-2 border-[#e77bfa] w-[5%] mx-auto md:mb-20 mb-10'></div>
        <div className="flex flex-col items-center max-w-4xl mx-auto py-12 border-2 border-[#E88DEA] md:pl-16 rounded-xl">
            <div className="relative w-full">
                {/* Timeline */}
                <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 h-64 mt-8 w-[0.25%] bg-[#E88DEA]"></div>

                {/* Item 1 */}
                <div className="flex items-center justify-start gap-4 mb-12">
                    <div className="md:w-1/2 text-left w-11/12 mx-auto md:mx-0">
                        <h3 className="font-bold text-lg">Bachelor of Technology in  Information Technology</h3>
                        <p className="flex gap-2 items-center"><FaSchool className='text-[#e77bfa]' />Techno International New Town, MAKAUT</p>
                        <div className="flex gap-16">
                            <p className="flex gap-2 items-center"><FaGraduationCap className='text-[#E88DEA]' />CGPA - 8.72</p>
                            <p className="flex gap-2 items-center"><SlCalender className='text-[#e77bfa]' />2021-2025</p>
                        </div>
                    </div>
                    <div className="absolute hidden left-1/2 transform -translate-x-1/2 bg-[#E88DEA] h-5 w-5 rounded-full md:flex md:items-center md:justify-center"></div>
                </div>

                {/* Item 2 */}
                <div className="flex items-center justify-end gap-4 mb-12">
                    <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#E88DEA] h-5 w-5 rounded-full hidden md:flex items-center justify-center"></div>
                    <div className="md:w-1/2 text-left w-11/12 mx-auto md:mx-0 md:px-8">
                        <h3 className="font-bold text-lg">Higher Secondary (12th)</h3>
                        <p className="flex gap-2 items-center"><FaSchool className='text-[#e77bfa]' />GR KC Mills High School, WBCHSE</p>
                        <div className="flex gap-16">
                            <p className="flex gap-2 items-center"><FaGraduationCap className='text-[#E88DEA]' />Percentage - 81.40%</p>
                            <p className="flex gap-2 items-center"><SlCalender className='text-[#e77bfa]' />2018-2020</p>
                        </div>
                    </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-center justify-start gap-4 mb-12">
                    <div className="md:w-1/2 text-left w-11/12 mx-auto md:mx-0">
                        <h3 className="font-bold text-lg">Secondary Education (10th)</h3>
                        <p className="flex gap-2 items-center"><FaSchool className='text-[#e77bfa]' />St. Michaels&apos; Academy, WBBSE</p>
                        <div className="flex gap-16">
                            <p className="flex gap-2 items-center"><FaGraduationCap className='text-[#E88DEA]' />Percentage - 73.57%</p>
                            <p className="flex gap-2 items-center"><SlCalender className='text-[#e77bfa]' />2005-2018</p>
                        </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#E88DEA] h-5 w-5 rounded-full hidden md:flex items-center justify-center"></div>
                </div>
                <Meteors number={20}/>
            </div>
        </div>
    </div>
  );
};

export default Education;