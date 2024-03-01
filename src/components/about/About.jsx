import React from 'react'
import './about.css'

const About = () => {
  const backgroundUrl = "https://www.nexevo.in/images/about_banner.png"
  return (
    <div className='about' >
        <div className='about__container' style={{backgroundImage:`url(${backgroundUrl})`}}>
            <div className='who__container ' >
                <h1 className='who__text1' style={{fontWeight:'2000'}}>Who We Are</h1>
                <h1 className='who__text2'>
                About 7SOFT Technologies

                </h1>
                <h2 className='who__text3'>Passion. Dedication. Lots of Creatives</h2>
            </div>
            <div className='vm__container'>
              <div className='vmleft__part'>
                  <h2>our vision</h2>
                  <h1>Vision</h1>
                  <p>Our Vision is to make our self as India’s most valuable corporation through ultimate performance and uniqueness in every single project that we do!</p>

              </div>
              
              <div className='vmright__part'>
              <h2>our </h2>
                  <h1>Mission</h1>
                  <p>Our Vision is to make our self as India’s most valuable corporation through ultimate performance and uniqueness in every single project that we do!</p>


              </div>
            </div>
        </div>

    </div>
  )
}

export default About