import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function CommandLine() {
    return (
      <Card sx={{ maxWidth: 345 }}>
        

        <CardMedia
          component="img"
          alt="dog search application"
          height="140"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Linux_command-line._Bash._GNOME_Terminal._screenshot.png/600px-Linux_command-line._Bash._GNOME_Terminal._screenshot.png"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Command line application.
          </Typography>
          <Typography variant="body2" color="text.secondary">
           This command line applicaiton allow the user to create an employee database. 
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small">Github</Button>
        <Button size="small">Deployed Application</Button>
      </CardActions>
      </Card>
      
    );
  }