import React from 'react'
import { Button } from '@mui/material'
import './channels.css'

const Channels = () => {
  return (
    <div className='channels  '>
    <div className='channels__container  section__margin'>
        <div className='leftpart'>
            <h1 style={{color:'#00717e'}}className='t1'>Channels of Choice on a Single Platform</h1>
            <p className='t2'>Give your customers a seamless experience with all their preferred channels a on single platform. Enrich the quality 
                of interactions on your existing channels like SMS, Voice, Email or connect with Enhanced Business Messaging 
                Solutions like <span><a href='#metahub' >Meta Verified Hub,</a></span>  <span><a href='#7wapi'>7WAPI,</a></span>   <span><a href='#metahub'>Meta Verified Hub,</a></span>  <span><a href='#IcreatBrand'>IcreatBrand</a></span>   and Maps. We can help you unlock & simplify your 
                communication needs.</p>
                <Button className='explore__bt' style={{background:'#ca786d',padding:'0.5rem 1.5rem',color:'#ffff'}}>Explore Now</Button>
        </div>
        <div className='video__container '>
            <video src="https://routemobile.b-cdn.net/wp-content/uploads/2021/05/channel-of-choice-illustration_Loopable.mp4 " preload='auto' autoPlay muted loop playsInline alt="" />
        </div>
    </div>
    </div>
  )
}

export default Channels