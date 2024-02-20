import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Slogan from './components/slogan/Slogan'
import CmpMotto from './components/cmpmotto/CmpMotto'
const App = () => {
  return (
    <div className='App' >
        <div className='gradient__bg'>
            <Navbar />
            <Slogan />
            <CmpMotto />
        </div>
       
    </div>
  )
}

export default App