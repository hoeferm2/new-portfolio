import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Liftr() {
    return (
      <Card sx={{ maxWidth: 345 }}>

        <CardMedia
          component="img"
          alt="dog search application"
          height="140"
          image="https://github.com/thegabe101/liftr/raw/dev/screenshots/screenshot3.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Liftr
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Liftr is a application that allows individuals to search for the perfect dog. It is made with a combination of HTML CSS and JS. Styling was done with Materialize.
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" href="https://github.com/thegabe101/liftr">Github</Button>
        <Button size="small">Deployed Application</Button>
      </CardActions>
      </Card>
      
    );
  }