import React from 'react'
import './feature.css'
import { Card, CardContent, CardMedia, Typography } from '@mui/material';


const Features = () => {
  return (
    <div className='feature'>
        <div className='feature__container section__margin'>
            <div className='header' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <h1>Features & Benefits of WhatsApp Business API Solution</h1>
            </div>
                <div className='body__container' style={{display:'flex', flexDirection:'row'}}>
                    <div className='card4__container' style={{display:'flex',flexDirection:'column',width:'400px',gap:'2rem'}}>
                    <Card style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',gap:'1rem'}}>
                        <CardMedia component="img" image="https://routemobile.b-cdn.net/wp-content/uploads/2…3/07/Catalog-creation-for-displaying-products.png" alt="green iguana" />
                        <CardContent><Typography>Catalog creation for displaying products</Typography></CardContent>
                    </Card>
                    <Card>
                        <CardMedia component="img" image="https://routemobile.b-cdn.net/wp-content/uploads/2023/07/Contact-Groups-for-campaign-targeting.png"></CardMedia>
                        <CardContent>
                            <Typography>Contact Groups for campaign targeting</Typography>
                        </CardContent>
                        </Card>
                    <Card>
                    <CardMedia component="img" image="https://routemobile.b-cdn.net/wp-content/uploads/2…hatsApp-Business-Solution-_AI-Powered-Chatbot.svg"></CardMedia>
                        <CardContent>
                            <Typography>AI-Powered Chatbot</Typography>
                        </CardContent>
                    </Card>
                    <Card> 
                        <CardMedia component="img" image="https://routemobile.b-cdn.net/wp-content/uploads/2023/07/Embedded-Signup-.pngEmbedded Sign Up"></CardMedia>
                        <CardContent>
                            <Typography>Embedded Sign Up</Typography>
                        </CardContent></Card>


                    </div>
                    <div className='middle__image'>
                        <img src='https://routemobile.b-cdn.net/wp-content/uploads/2021/06/Whatsapp-Business-Solutions.svg' />

                    </div>
                    <div className='card5__container'>

                    </div>
                

                </div >


                <div className='final__container'>

                </div>
        </div>

    </div>
  )
}

export default Features