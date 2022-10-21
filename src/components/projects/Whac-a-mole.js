import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function WhacAMole() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image='https://www.railwayage.com/wp-content/uploads/2019/11/whackamole.jpg'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Whac-A-Mole
        </Typography>
        <Typography variant="body2" color="text.secondary">
          The Carnival classic returns but as a computer game. Made with a combination of Js native, HTML, and CSS.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href='https://github.com/hoeferm2/whac-a-mole'>Github</Button>
        <Button size="small" href='https://hoeferm2.github.io/whac-a-mole/'>Deployed Applicaiton</Button>
      </CardActions>
    </Card>
  );
}