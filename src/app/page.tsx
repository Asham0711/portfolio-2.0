import About from '@/components/About'
import Contact from '@/components/Contact'
import Education from '@/components/Education'
import Footer from '@/components/Footer'
import Home from '@/components/Home'
import MobileNavbar from '@/components/MobileNavbar'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className='hidden md:block'>
        <Navbar />
      </div>
      <div className='block md:hidden'>
        <MobileNavbar />
      </div>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}

export default page

// project - animated testimonials
// cardspotlight thinking
