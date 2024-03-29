import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Slogan from './components/slogan/Slogan';
import JlComponent from './container/jlcomponent/JlComponent';
import CustSupp from './components/custsupp/CustSupp';
import Channels from './components/channels/Channels';
import ExpertContainer from './components/expert/ExpertContainer';
import CommunicateComponent from './components/communicate Comp/CommunicateComponent';
import Footer from './Footer';
import About from './components/about/About';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Flowout from './components/flowout/Flowout';
import Product from './components/Product.jsx/Product';
import Contact from './components/contacts/Contact';
const App = () => {
  return (
    
      <div className='App'>
        <div className='gradient__bg'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Flowout />} />
            <Route path='/contact' element={<Contact />} />

            {/* Add routes for other components */}
          </Routes>
         
          <Footer />
        </div>
      </div>
    
  );
}

export default App;
