import React from 'react';
import './expert.css';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import expertData from '../ExpertData';

const ExpertContainer = () => {
  return (
    <div className='expert__component section__margin' >
      <h1 style={{ display: 'flex', justifyContent: 'center', color:'rgb(7, 25, 118)',marginBottom:'2.5rem' }}>Expert Opinion and Blogs</h1>
      <div className='expertCard__Container'>
        {expertData.map((item, index) => (
          <Card key={index} className='card__cont' >
            <CardMedia component="img" image={item.image} alt='loading' height={180} className='images' style={{marginBottom:'1rem'}} />
            <CardContent className='exp__Cont'>
              <Typography variant="body2" className='exp__text11' style={{fontWeight:500,marginBottom:'2rem'}} >{item.body1}</Typography>
              <Typography className='exp__text2' style={{fontWeight:'200',fontSize:'15px',marginBottom:'0.7rem'}} >Thought Leadership Blog</Typography>
              <a style={{textShadow: '#386d8d 0.5px 0.6px 0.8px',color:'chocolate'}}>Read More</a>
            </CardContent>
          </Card>
        ))}
      </div>
      </div>
  );
};

export default ExpertContainer;
