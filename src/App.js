import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Slogan from './components/slogan/Slogan'
import CmpMotto from './components/cmpmotto/CmpMotto'
import JlComponent from './container/jlcomponent/JlComponent'
import CustSupp from './components/custsupp/CustSupp'
import Channels from './components/channels/Channels'
import ExpertContainer from './components/expert/ExpertContainer'
const App = () => {
  return (
    <div className='App ' >
        <div className='gradient__bg '>
            <Navbar> </Navbar>
            <Slogan />


            <CustSupp />



            <Channels />  
            <JlComponent />

            <ExpertContainer />
        </div>
       
    </div>
  )
}

export default App