import React from 'react';
import './custsupp.css';
import marketingData from '../MarketingData';
import { Button, Grid } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



const CustSupp = () => {
  return (
    <div className='custapp' >
    <div className='custsupp_container section__margin' style={{marginBlockEnd:'2rem'}}>
        <div className='head1'style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
            <h1 className='gradient__text text1' >Enhance Your Customers' Journey and Deliver a Superlative CX
            </h1>
            <h3 className='text2' >Engage in meaningful & frictionless conversations using channels of their choice with hyper personalisation, custom alerts/notifications, seamless authentication and much more...
              
              
            </h3>
          </div>
      <div className='card2__container '  >

        { marketingData.map((item,index)=> (
                    <div className='main__container ' >
                    <Card key={index} className='cardmain__container ' style={{display:'flex',justifyContent:'center',alignItems:'center' , }} >
                      <CardMedia component="img" alt="green iguana" height="200" image={item.image} style={{width:'300px',
                      display:'flex',justifyContent:'center',alignItems:'center',marginBottom:'3rem'}} />
                      <CardContent style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}} className='card__content'>
                        <Typography variant="h5" component="div" style={{marginBottom:'1rem',fontWeight:500,display:'flex',justifyContent:'center'
                      
                      }}>{item.title}</Typography>
                        <Typography variant="body2" component="div"  className='text10' style={{fontWeight:20,display:'flex',
                        justifyContent:'center',alignItems:'center', color: 'rgb(0, 0, 0)' }}>{item.description}</Typography>
                      </CardContent>
                    </Card>
                    </div>
                      ))               
                }

      </div>
    </div>
    </div>
  )
}

export default CustSupp