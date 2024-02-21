import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Slogan from './components/slogan/Slogan'
import CmpMotto from './components/cmpmotto/CmpMotto'
import JustLaunched from './components/justlaunched/JustLaunched'
import JlComponent from './container/jlcomponent/JlComponent'
const App = () => {
  return (
    <div className='App' >
        <div className='gradient__bg'>
            <Navbar />
            <Slogan />
            <CmpMotto />
            <JlComponent />
            <JustLaunched />
        </div>
       
    </div>
  )
}

export default App