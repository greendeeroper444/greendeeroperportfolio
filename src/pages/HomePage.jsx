import React from 'react'
import { About, Achievement, Contact, Home, TechTools } from '../components';
import Project from '../components/Projects/Project';

function HomePage() {
   

  return (
    <>

        {/* for home */}
        <div id='home-main-container'>
            <Home />
        </div>


        {/* for about */}
        <div id='about-main-container'>
            <About />
        </div>

        <div id='project-main-container'>
            <Project />
        </div>

        <div id='achievement-main-container'>
            <Achievement />
        </div>

        <div id='techtools-main-container'>
            <TechTools />
        </div>


        <div id='contact-main-container'>
            <Contact />
        </div>
    </>
  )
}

export default HomePage
