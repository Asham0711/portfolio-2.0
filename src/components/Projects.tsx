import React from 'react'
import HighlightText from './HighlightText'
import { AnimatedTestimonials } from './ui/animated-testimonials'
import { testimonials } from '@/data'

const Projects = () => {
  return (
    <div id="education" className='max-w-screen-2xl container mx-auto px-6 md:px-20 my-20'>
        <h1 className='text-4xl text-center font-bold mb-2'><HighlightText text="Projects" /></h1>
        <div className='border-2 border-[#e77bfa] w-[5%] mx-auto mb-20'></div>
        <div className='dark:bg-[#131519] bg-[#f4ccf5] rounded-3xl dark:shadow-md'>
            <AnimatedTestimonials testimonials={testimonials} />
        </div>
    </div>
  )
}

export default Projects