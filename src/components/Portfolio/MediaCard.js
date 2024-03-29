import * as React from 'react';
import './MediaCard.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';


export default function MediaCard(props) {
  const { img,link1,link2 }=props.project
  return (
    <div className='box'>
    <Card sx={{ maxWidth: 370 }}>
      <CardMedia
        component="img"
        data-aos="zoom-in-down"
        alt="green iguana"
        height="200"
        image={img}
        className='media'
      />
      <CardActions className='design'>
      <a href={link1}>
          <button className="button">Source</button>
        </a>
      <a href={link2}>
          <button className="button ">View</button>
        </a>
        {/* <Button size="small">Share</Button>
        <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
    </div>
  );
}
