import React from 'react'
import './navbar.css';
import {RiMenu3line,RiCloseLine} from 'react-icons/ri'
import logo1 from '../../assets/logo4 (2).jpg'


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar__links'>
            <div className='navbar__links-logo'>
                <img src={logo1} alt='logo loading'/>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar