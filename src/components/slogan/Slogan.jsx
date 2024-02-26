// Slogan.js
import React from 'react';
import './slogan.css';

const Slogan = () => {
  const salesTeamNumber = '+917207114472'; // Replace with your sales team's WhatsApp number
  const message = encodeURIComponent('Hello, I have a question about your products/services.'); // Pre-filled message

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${salesTeamNumber}?text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <div className='slogan_container'>
      <h1 className='slogan_text gradient__text '> We Support Your Business</h1>
      <div className='button1'>
        <button onClick={handleWhatsAppClick}>Talk To Our Experts</button>
      </div>
    </div>
  );
};

export default Slogan;
