import React, { useState } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo1 from '../../assets/logo4 (1).jpg';
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
                <li><NavLink to="/products/p1">META VERIFIED HUB</NavLink></li>
                <li><NavLink to="https://payupi.in/landingpage/index.html">PAY UPI</NavLink></li>
                <li><NavLink to="https://digiatme.com/">DIGIT AT ME</NavLink></li>
                <li><NavLink to="/products/p4">SCHOOL MANAGEMENT</NavLink></li>
                <li><NavLink to="/products/p5">PG MANAGEMENT</NavLink></li>
                <li><NavLink to="/products/p6">CRM</NavLink></li>
                </div>
                <div className='dropdown__Content2'>
                <li><NavLink to="/products/p7">ICREATE BRAND</NavLink></li>
                <li><NavLink to="/products/p8">INOVA BILL</NavLink></li>
                <li><NavLink to="https://freeleads.in/admin/plugins.php">FREE LEADS</NavLink></li>
                <li><NavLink to="/products/p10">EXTRA PRODUCT CONTAINER</NavLink></li>
                <li><NavLink to="/products/p11">EXTRA PRODUCT CONTAINER</NavLink></li>
 
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
