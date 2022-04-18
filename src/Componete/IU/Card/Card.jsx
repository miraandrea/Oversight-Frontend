import * as React from 'react';
import Card1 from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import foto  from '../ImgProfile/ejemplo.jpg'
import { NavLink } from 'react-router-dom'
import './Card.css'

export const Card = ({ course }) => {
  const nombre = "paola mira "
  return (
    <div className="maincard1">
        <div className="borde">
        <Card1 sx={{ maxWidth: 350 }}>
          <CardActionArea >
            <NavLink to="/Estudiantes_Administrador" >
              <CardMedia
                component="img"
                height="60"
                image={foto}
                alt="green iguana"/>
            </NavLink>
            <CardContent>
              <Typography gutterBottom variant='h6' component="div">
                {course.nombre}
              </Typography>
              <Typography sx={{ fontSize: 15 }} color="black" gutterBottom>
                {nombre}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card1>
          </div>
    </div>
  );
}


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

// const card = (
//   <React.Fragment>
//     <CardContent>
//       <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//         Word of the Day
//       </Typography>
//       <Typography variant="h5" component="div">
//         be{bull}nev{bull}o{bull}lent
//       </Typography>
//       <Typography sx={{ mb: 1.5 }} color="text.secondary">
//         adjective
//       </Typography>
//       <Typography variant="body2">
//         well meaning and kindly.
//         <br />
//         {'"a benevolent smile"'}
//       </Typography>
//     </CardContent>
//     <CardActions>
//       <Button size="small">Learn More</Button>
//     </CardActions>
//   </React.Fragment>
// );

// export default function OutlinedCard() {
//   return (
//     <Box sx={{ minWidth: 275 }}>
//       <Card variant="outlined">{card}</Card>
//     </Box>
//   );
// }




// import React from 'react'
// import './Card.css'
// import { NavLink } from 'react-router-dom'
// import foto  from '../ImgProfile/ejemplo.jpg'

// export const Card = ({ course }) => {
//   return (
//     <div className="maincard">
//       <div className="card">
//       <NavLink to="/Estudiantes_Administrador"><img src={foto} alt={course.nombre}/> </NavLink>
//         <p>{course.nombre}</p>
//       </div> 
//     </div>
//   )
  
// };
