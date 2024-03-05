import React from 'react'
import Slogan from '../slogan/Slogan'
import CustSupp from '../custsupp/CustSupp'
import Channels from '../channels/Channels'
import JlComponent from '../../container/jlcomponent/JlComponent'
import ExpertContainer from '../expert/ExpertContainer'
import CommunicateComponent from '../communicate Comp/CommunicateComponent'
import Product from '../Product.jsx/Product'
const Home = () => {
  return (
    <div>
         <Slogan />
          <CustSupp />
          <Channels />
          <JlComponent />
          <ExpertContainer />
          <Product />

    </div>
  )
}

export default Home