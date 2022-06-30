import React from 'react';
import Card1 from '@mui/material/Card';
import foto from '../ImgProfile/group.webp'
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

export const CardTeacher = ({ course1 }) => {
  
  return (
    <div className='containerTeacherCard'>
      <Card1 sx={{ maxWidth: 170 }} >
        <CardActionArea>
          <CardMedia
            component="img"
            height="120"
            image={course1.foto || foto}
            // onClick={handleOpenGroup} 
            alt={course1.nombre}/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {course1.curso}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {course1.directorGrupo}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card1>
    </div>
  );
}

