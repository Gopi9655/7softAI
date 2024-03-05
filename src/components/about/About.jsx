import React from 'react'
import './about.css'

const About = () => {
  const backgroundUrl = "https://www.nexevo.in/images/about_banner.png"
  return (
    <div className='about' >
        <div className='about__container' >
            <div className='who__container' style={{backgroundImage:`url(${backgroundUrl})`, width:'100%',lineHeight:'110px'}} >
              <div className='who__content'  > <h1 className='who__text1' style={{fontWeight:'2000',}} >Who We Are</h1>
                <h1 className='who__text2' >
                About 7SOFT Technologies

                </h1>
                <h2 className='who__text3'>Passion. Dedication. Lots of Creatives</h2>
                </div>
               
            </div>
            <div className='vm__container'>
              <div className='vmleft__part'>
                  <h2>OUR</h2>
                  <h1>Vision</h1>
                  <p>Our Vision is to make our self as India’s most valuable corporation through ultimate performance and uniqueness in every single project that we do!</p>

              </div>
              
              <div className='vmright__part'>
              <h2>OUR </h2>
                  <h1>Mission</h1>
                  <p>Our Vision is to make our self as India’s most valuable corporation through ultimate performance and uniqueness in every single project that we do!</p>


              </div>
            </div>
            <div className='about__blog'>
              <div className='about__blog-container' style={{display:'flex',flexDirection:'row',padding:'4rem 10rem',gap:'3rem'}}>
                <div className='image'>
                  <img src='https://www.nexevo.in/images/intro.png' style={{width:'700px'}} />
'
                </div>
                <div className='blog__text'>
                  <h1>About Us</h1>
                  <p> <span>7SOFTAI</span> Technologies is a Professional<span> Web Designing and Web Development Company in Bangalore</span>, which is offers a full facility for designing a website at a reasonable price. We are award-winning company working since 2012, completing years in the Web designing industry providing flawless services. we are the company where style with Innovative design and development is dis- played with smart work and trusted by many leading brands.</p>
                </div>
              </div>

            </div>
        </div>

    </div>
  )
}

export default About