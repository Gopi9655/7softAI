import React from 'react'
import { Button, Grid } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './jlcontainer.css';
import expertData from '../../components/ExpertData';
import cardData1 from '../../Card1data';



const JlComponent = () => {
  return (
    <div className='jl__container'>
      <div className='boxes section__margin'>
        
       {cardData1.map((item,index)=>(
        <div className='boxesmain__container' key={index}>
          <div className='box__contents '>
            <h1>{item.head1}</h1>
            <img src={item.image} alt="img" />
            <h3 >{item.desc}</h3>
            
          </div>
        </div>
       )
         
       

      ) } 
        

      </div>
    </div>
   
    )
}

export default JlComponent