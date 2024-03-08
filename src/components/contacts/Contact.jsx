import react from 'react';
import './contact.css'
import ContactForm from '../contactform/ContactForm';
import logo from '../../assets/logo5.jpg'
const Contact = () => {
    return (
        <div>
            <div className="bg">
                <div className='h1'>
               
                    <h1><u><b>Contact Us</b></u></h1>
                    <h3>We would love to hear from you</h3>    
                    <div className='logo'>
                        <img src={logo}/>
                    </div>
                </div>
            </div>
            {/* // */}
            <ContactForm/>
            
        </div>
    )
}

export default Contact ;