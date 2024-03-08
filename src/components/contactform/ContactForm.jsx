import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './contactform.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    Firstname: ' your default name',
    Firstname: 'your default name',
    Contact: 'your default name',
    email: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // Handle form submission logic here (you can add validation if needed)

    // check if requried fields are filled
    if (!formData.Firstname || !formData.Lastname || !formData.Contact || !formData.Email || !formData.CommentBox) {
        alert('Please fill in all required fields.');
        return; // Stop further execution
      }
    // Show success popup
    setShowSuccess(true);

   // Reset form data
   setFormData({
    Firstname: ' your default name',
    Firstname: 'your default name',
    Contact: 'your default name',
    email: '',
    message: '',
  });
};

const handleAddressClick = () => {
    // redirect to gogglr maps
    window.location.href="https://www.google.com/maps/search/Cessna+Business+Park,+Level+8.+Tower+1,+Umiya+Business+Bay,+Embassy+Tech+Square+Main+Road,+Outer+Ring+Rd,+Marathahalli,+Bengaluru,+Karnataka%C2%A0560103/@12.9344267,77.6917287,17z/data=!3m1!4b1?entry=ttu";
}

return (
    <div>
        <div style={{display:'flex',flexDirection:'column',gap:'2rem',justifyContent:'center',alignItems:'center'}}>
        <h1 style={{fontFamily:'sans-serif', color:'#000'}}>Connect with us</h1>
        <h6 style={{fontFamily:'sans-serif', color:'#000'}}>Kindly fill in the form and we shall get back to you.</h6>
        </div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center' }}>
            <div className="contact-form">
                <label>Firstname:</label>
                <input type="text" name="firstname" value={formData.name} onChange={handleChange} placeholder='Ex: sai'/>

                <label>Lastname:</label>
                <input type="text" name="Lastname" value={formData.name} onChange={handleChange} placeholder='Ex: kumar'/>

                <label>Contact:</label>
                <input type="text" name="Contact" value={formData.name} onChange={handleChange} placeholder='Ex: +91 99******10'/>

                <label>Email:</label>
                <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder='Ex: saikumar@gmail.com'/>

                <label>Comment Box:</label>
                <textarea name="Suggestion" value={formData.message} onChange={handleChange} placeholder='Ex: Tell about your interests'/>

                    <button onClick={handleSubmit}>Submit</button>

                 {showSuccess && (
                    <div className="success-popup">
                        <p>Your form has been submitted successfully!</p>
                    </div>
                 )}

                    <div className="social-links">
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram}/></a><br/>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a><br/>
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /></a><br/>
                        <a href="https://wa.me/your-whatsapp-number" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} /></a><br/>
                        <a href="mailto:your-email@example.com"><FontAwesomeIcon icon={faEnvelope} /></a><br/>
                        <span onClick={handleAddressClick} style={{ cursor: 'pointer', color: '#333' }}>
                        <FontAwesomeIcon icon={faMapMarkerAlt} /> Address
                        </span>
                    </div>
        </div>
        <div>
            <h1>Customer Support</h1>
            <p>Our support team is happy to assist you regarding any technical query </p>
            <p><a href='mailto:ho@7soft.in'>ho@7soft.in</a></p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;