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
            <div className='container7' style={{padding:'4rem 10rem', color:'whitesmoke',}} >
                                <div className='cont7head'> <div className='con7_head'>
                                        <h1>Who is 7soft AI development for? (and whom not)</h1>
                                    </div>
                                </div>

                                    <div className='con7'>
                                            <div className='con7-left'>
                                                <div className='con7_lefthead'><h1>7SOFT is a good fit if:</h1></div>
                                                <div className='con7-box'><img src="https://assets-global.website-files.com/610b9deed4bf4a3c6b34ab5c/617ad73f68b09a7ed5fc05f8_flowout-check.svg" alt="" className='con7-img'/><div className='con7-cont'><h3 style={{fontWeight:'100'}}>You have too little time or lack experience in turning designs into web-ready HTML.</h3></div></div>
                                                <div className='con7-nor'><img src="https://assets-global.website-files.com/610b9deed4bf4a3c6b34ab5c/617ad73f68b09a7ed5fc05f8_flowout-check.svg" alt="" className='con7-img1'/><div className='con7-cont1'><h3 style={{fontWeight:'100'}}>Your design source files (Sketch or Adobe XD) or Figma links are ready to be converted.</h3></div></div>
                                                <div className='con7-box'><img src="https://assets-global.website-files.com/610b9deed4bf4a3c6b34ab5c/617ad73f68b09a7ed5fc05f8_flowout-check.svg" alt="" className='con7-img'/><div className='con7-cont'><h3 style={{fontWeight:'100'}}>You have too little time or lack experience in turning designs into web-ready HTML.</h3></div></div>
                                                <div className='con7-nor'><img src="https://assets-global.website-files.com/610b9deed4bf4a3c6b34ab5c/617ad73f68b09a7ed5fc05f8_flowout-check.svg" alt="" className='con7-img1'/><div className='con7-cont1'><h3 style={{fontWeight:'100'}}>Your design source files (Sketch or Adobe XD) or Figma links are ready to be converted.</h3></div></div>
                                                <div className='con7-box'><img src="https://assets-global.website-files.com/610b9deed4bf4a3c6b34ab5c/617ad73f68b09a7ed5fc05f8_flowout-check.svg" alt="" className='con7-img'/><div className='con7-cont'><h3 style={{fontWeight:'100'}}>You have too little time or lack experience in turning designs into web-ready HTML.</h3></div></div>
                                            </div>

                                            <div className='con7-left'>
                                                <div className='con7_lefthead'><h1>7SOFT    is a good fit if:</h1></div>
                                                <div className='con7-box'><img src="https://assets-global.website-files.com/610b9deed4bf4a3c6b34ab5c/617ad7c872db2c0af70527b4_e-remove%206.svg" alt="" className='con7-img'/><div className='con7-cont'><h3 style={{fontWeight:'100'}}>You prefer working on your own without external help.</h3></div></div>
                                                <div className='con7-nor'><img src="https://assets-global.website-files.com/610b9deed4bf4a3c6b34ab5c/617ad7c872db2c0af70527b4_e-remove%206.svg" alt="" className='con7-img1'/><div className='con7-cont1'><h3 style={{fontWeight:'100'}}>Your design is not ready to be converted into a pixel-perfect website yet.</h3></div></div>
                                                <div className='con7-box'><img src="https://assets-global.website-files.com/610b9deed4bf4a3c6b34ab5c/617ad7c872db2c0af70527b4_e-remove%206.svg" alt="" className='con7-img'/><div className='con7-cont'><h3 style={{fontWeight:'100'}}>You prefer working on your own without external help.</h3></div></div>
                                                <div className='con7-nor'><img src="https://assets-global.website-files.com/610b9deed4bf4a3c6b34ab5c/617ad7c872db2c0af70527b4_e-remove%206.svg" alt="" className='con7-img1'/><div className='con7-cont1'><h3 style={{fontWeight:'100'}}>Your design is not ready to be converted into a pixel-perfect website yet.</h3></div></div>
                                                <div className='con7-box'><img src="https://assets-global.website-files.com/610b9deed4bf4a3c6b34ab5c/617ad7c872db2c0af70527b4_e-remove%206.svg" alt="" className='con7-img'/><div className='con7-cont'><h3 style={{fontWeight:'100'}}>You prefer working on your own without external help.</h3></div></div>
                                            </div>
                                     </div>
                            </div>


                            <div className='container8' >
                                <div  style={{display:'flex',flexDirection:'column',gap:'1.5rem'}}>
                                    <div className='con8-top' style={{display:'flex',flexDirection:'column',gap:'2rem'}}>
                                    <div className='con8-img'style={{display:'flex',justifyContent:'center',alignItems:'center',}} > <img src="https://assets-global.website-files.com/610b9deed4bf4a3c6b34ab5c/651fd6d07bc41545fcb40bb9_client%20avatars.png" style={{width:'300px'}} alt="" />
                                    </div>

                                    <div className='con8-1'>
                                        <h3>Trusted By 100+ FAST-GROWING COMPANIES</h3>
                                    </div>
                                    </div>

                                    <div className='con8-2'>
                                        <h1>Grow rapidly with unlimited 7soft AI design & development</h1>
                                    </div>

                                    <div className='con8-3'>
                                        <h3 style={{fontWeight:'100'}}>Power of a full 7soft AI team at the cost of one employee. Fast turnaround. No contracts or surprises. Cancel anytime.</h3>
                                    </div>

                                    <div className='con8-footer'>
                                        <div className='con1_btn con8_but' style={{cursor:'pointer'}}>Get a demo<div className='btn-img'><img src="https://assets-global.website-files.com/610b9deed4bf4a3c6b34ab5c/610d58d47acd8a376deebf60_arrow-sm-right%201.svg" /></div></div>

                                        <div className='con7_btn' style={{cursor:'pointer'}}>See Pricing<div className='btn-img'><img src="https://assets-global.website-files.com/610b9deed4bf4a3c6b34ab5c/610d58d47acd8a376deebf60_arrow-sm-right%201.svg" /></div></div>
                                        
                                    </div>
                                </div>

                            </div>
        </div>

    </div>
  )
}

export default About