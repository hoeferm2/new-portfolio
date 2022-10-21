import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Typing() {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="Shakespeare typing game"
          height="140"
          image="https://www.jpandadyson.com/firstwriter/news/images/2016/03-Mar/1457639827.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Typing
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Monkeys vs. Shakespeare is a typing game that utilizes RPG elements. A SERN application that uses the handlebars engine. 
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" href="https://github.com/AdmiralCrunchy/Monkeys_VS_Shakespeare">Github</Button>
        <Button size="small" href="https://monkeys-vs-shakespeare.herokuapp.com/">Deployed Application</Button>
      </CardActions>

      </Card>
      
    );
  }