import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function ECommerce() {
    return (
      <Card sx={{ maxWidth: 345 }}>
    
        <CardMedia
          component="img"
          alt="dog search application"
          height="140"
          image="https://www.ringcentral.com/gb/en/blog/wp-content/uploads/2021/05/happy-manager-leads-a-meeting-in-the-office-640x427.jpg.webp"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            E-commerce site
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Dog4u is a application that allows individuals to search for the perfect dog. It is made with a combination of HTML CSS and JS. Styling was done with Materialize.
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small">Github</Button>
        <Button size="small">Deployed Application</Button>
      </CardActions>
      </Card>
      
    );
  }