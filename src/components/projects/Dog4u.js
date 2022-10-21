import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Dog4u() {
    return (
      <Card sx={{ maxWidth: 345, borderRadius: 2}}>

        <CardMedia
          component="img"
          alt="dog search application"

          height="140"
          image="https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=iQEwihUn"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Dog4u
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Dog4u is a application that allows individuals to search for the perfect dog. It is made with a combination of HTML CSS and JS. Styling was done with Materialize.
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" href="https://github.com/thegabe101/Project-1-Rainer-Matt-Ming-Gabe">Github</Button>
        <Button size="small" href="https://thegabe101.github.io/Project-1-Rainer-Matt-Ming-Gabe/">Deployed Applicaiton</Button>
      </CardActions>
      </Card>
      
    );
  }