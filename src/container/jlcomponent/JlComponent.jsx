import React from 'react'
import { Button, Grid } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './jlcontainer.css'



const JlComponent = () => {
  return (
       <div style={{ display: 'flex', gap:'4rem' }} className='section__margin main__Card'>

      <Card style={{margin:'10px',padding:'10px',width:'50%'}} className='card1' >
      <CardContent style={{justifyContent:'center',display:'flex', alignItems:'center',flexDirection:'column'}}>
        <Typography variant='h6' style={{fontSize:'20px', marginBlockEnd:'20px',fontWeight:'800'}}>Just Launched</Typography>
        <img src='	https://routemobile.b-cdn.net/wp-content/uploads/2023/08/ocean-logo.png'
         alt='loading' style={{minWidth:'120px',  marginBlockEnd:'20px'}} />
         <Typography variant='body2' style={{marginBlockEnd:'10px',justifyContent:'center', alignItems:'center',fontSize:'15px',lineHeight:'27px'}}>A Personalized Omnichannel CX Platform</Typography>
         <Button variant='contained' color='primary' style={{display:'flex' ,justifyContent:'center', alignItems:'center'}}>Know More
          </Button >
        </CardContent>

      </Card >
      <Card style={{margin:'10px',padding:'10px',width:'50%'}} className='card1'>
      <CardContent style={{justifyContent:'center',display:'flex', alignItems:'center',flexDirection:'column'}}>
        <Typography variant='h6' style={{fontSize:'20px', marginBlockEnd:'20px',fontWeight:'800'}}>Introducing</Typography>
        <img src='https://routemobile.b-cdn.net/wp-content/uploads/2023/08/tru-sense.png	'
         alt='loading' style={{minWidth:'120px',  marginBlockEnd:'20px'}} />
         <Typography variant='body2' style={{marginBlockEnd:'10px',justifyContent:'center', alignItems:'center',fontSize:'15px',lineHeight:'27px'}}>TruScore | TruAuth | TruFA</Typography>
         <Button variant='contained' color='primary' style={{display:'flex' ,justifyContent:'center', alignItems:'center'}}>Know More
          </Button >
        </CardContent>

      </Card>
  
      {/* Add more cards as needed */}
     
      

      </div>
    )
}

export default JlComponent