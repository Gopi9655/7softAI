import React, { useState } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo1 from '../../assets/logo4 (2).jpg';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const Menu = () => (
    <>
      <p><a href='home'>Home</a></p>
      <div className="dropdown">
            <p><a href='#product' onClick={toggleDropdown}>Product 
            <span style={{ fontSize: '12px', verticalAlign: 'middle' }}>
            {isDropdownOpen ? ' \u25B2' : ' \u25BC'} {/* Triangle icon using HTML entity */}
          </span>
            </a></p>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <p><a href='#p1'>MANAGEMENT SOFTWARE</a></p>
                <p><a href='#p2'>E-COMMERCE SOFTWARE</a></p>
                <p><a href='#p3'>STATIC WEBSITE</a></p>
                <p><a href='#p4'>DYNAMIC WEBSITE</a></p>
                <p><a href='#p5'>OFFLINE WHATSAPP</a></p>
                <p><a href='#p6'>CANVA PRO</a></p>
                <p><a href='#p7'>7WAPI</a></p>
                <p><a href='#p8'>DIGITAL VISITING CARD</a></p>
                <p><a href='#p9'>WESEND</a></p>
                <p><a href='#p10'>7-IT E-COMMERCE SITE</a></p>
                <p><a href='#p11'>MAGIC-AI</a></p>                
              </div>
            )}
          </div>
      <p><a href='about'>About</a></p>
      <p><a href='service'>Service</a></p>
      <p><a href='reseller'>Reseller</a></p>
      <p><a href='contact'>Contact</a></p>
      <p><a href='support'>Support</a></p>
      <p><a href='plan'>Plan</a></p>
    </>
  );

  return (
    <div className='navbar'>
      <div className='navbar__links'>
        <div className='navbar__links-logo'>
          <img src={logo1} alt='logo loading' />
        </div>
        <div className='navbar__links-container'>
          <Menu />
          
        </div>
        <div className='navbar__menu'>
          {toggleMenu?
          <RiCloseLine color='white' size={27} onClick={()=>setToggleMenu(false)}/>
          :<RiMenu3Line color='white' size={27} onClick={()=>setToggleMenu(true)} />}
          {toggleMenu && (
            <div className='navbar__menu-container scale-up-center'>
              <div className='menu__container-links'>
                <Menu />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
