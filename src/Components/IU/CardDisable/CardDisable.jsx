import React from 'react';
import Card1 from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Modal from "@material-ui/core/Modal";
import foto from '../ImgProfile/group.webp'
import { ViewProfileAdmi } from '../ViewProfileAdmi/ViewProfileAdmi';
import './CardDisable.css'

export const CardDisable = ({ course2 }) => {

  return (
    <div className='borde1'>
    <Card1 sx={{ maxWidth: 170 }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="120"
          image={course2.fotoEstudiante || foto} 
          alt={course2.nombreEstudiante}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {course2.nombreEstudiante}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {course2.cursoEstudiante}
          </Typography>
          <button className='habilitar'>Habilitar</button>
        </CardContent>
      </CardActionArea>
    </Card1>
    </div>
  )
}