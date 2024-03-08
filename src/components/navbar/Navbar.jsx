import React, { useState } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo1 from '../../assets/WhatsApp Image 2024-03-04 at 07.19.03 (1).jpeg'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <navbar>
      <NavLink to="/">
        <img src={logo1} alt="logo" />
      </NavLink>
      <ul className="nav__links">
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <NavLink to="/products">
              PRODUCTS
              <span>
                <i className="dropdown-icon">&#9662;</i>
              </span>
            </NavLink>
            {isDropdownOpen && (
              <div className='dropdown__menu'>
                <div className="dropdown-content">
                <li><NavLink to="/">GREEN TICK AI</NavLink></li>
                <li><NavLink to="https://payupi.in/">PAY UPI</NavLink></li>
                <li><NavLink to="https://digiatme.com/">DIGIT AT ME</NavLink></li>
                <li><NavLink to="https://schoolpro.in/">SCHOOL MANAGEMENT</NavLink></li>
               
                </div>
                <div className='dropdown__Content2'>
                <li><NavLink to="https://icreatbrand.in/public/landing_page.php">ICREATE BRAND</NavLink></li>
                <li><NavLink to="https://inovabill.com/">INOVA BILL</NavLink></li>
                <li><NavLink to="https://freeleads.in/">FREE LEADS</NavLink></li>
                <li><NavLink to="https://aipoz.in">POZ AI</NavLink></li>
 
                </div>  



              </div>
            )}
          </div>
        </li>
        <li>
          <NavLink to="/services">SERVICES</NavLink>
        </li>
        <li>
          <NavLink to="/reseller">RESELLER</NavLink>
        </li>
        <li>
          <NavLink to="/about">ABOUT</NavLink>
        </li>
        <li>
          <NavLink to="/contact">CONTACT</NavLink>
        </li>
      </ul>
    </navbar>
  );
};

export default Navbar;
