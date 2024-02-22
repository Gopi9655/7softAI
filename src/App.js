import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Slogan from './components/slogan/Slogan'
import CmpMotto from './components/cmpmotto/CmpMotto'
import JlComponent from './container/jlcomponent/JlComponent'
import CustSupp from './components/custsupp/CustSupp'
import Expert from './components/expert/Expert'
const App = () => {
  return (
    <div className='App' >
        <div className='gradient__bg'>
            <Navbar />
            <Slogan />
            <CmpMotto />
            <JlComponent />
            <CustSupp />
            <Expert />
        </div>
       
    </div>
  )
}

export default App