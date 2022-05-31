// //Cambiar 
// import React from 'react'
import './CardAdmi.css'
// import { ViewProfileAdmi } from '../ViewProfileAdmi/ViewProfileAdmi'
// import Modal from "@material-ui/core/Modal";
// import foto from '../ImgProfile/student.jpg'

// export const CardAdmi = ({ courseStudent }) => {

//     const [openGroup, setOpenGroup] = React.useState(false);
//     const handleOpenGroup = () => {
//         setOpenGroup(true);
//       };
//     const handleCloseGroup = () => {
//         setOpenGroup(false);
//       };

//       const viewProfile = (
//         <div className="paper1">
//           <ViewProfileAdmi />
//           <div className="btn_Cancel">
//             <p className="cancel1" onClick={handleCloseGroup}>X</p>
//           </div>
//         </div>
//       )
//     return (
//         <div className="maincard">
//             <div className="card">
//                 <img src={courseStudent.fotoEstudiante || foto } alt={courseStudent.nombre} onClick={handleOpenGroup} /> 
//                 <p>{courseStudent.nombre} {courseStudent.apellido}</p>
//                 <p>{courseStudent.estudianteDocumento}</p>
//                 <p>{courseStudent.curso}</p>
//             </div>
//             <Modal open={openGroup} onClose={handleCloseGroup}>
//                 {viewProfile}
//             </Modal>
//         </div>
//     )
// }

import React from 'react';
import Card1 from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import foto from '../ImgProfile/group.webp'

export const CardAdmi = ({ courseStudent }) => {

  return (
    <div className='borde'>
    <Card1 sx={{ maxWidth: 170 }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="120"
          image={courseStudent.foto || foto} 
          alt={courseStudent.nombre}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {courseStudent.nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {courseStudent.curso}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card1>
    {/* <>
            <div className="cardTeacher">
              <img src={teacher.fotoDocente || foto } alt={teacher.nombreDocente} onClick={handleOpenGroup} /> 
              <p>{teacher.nombreDocente} {teacher.apellidoDocente}</p>
              <p>{teacher.documentoDocente}</p>
              <p>{teacher.curso}</p>
            </div>
            <Modal open={openGroup} onClose={handleCloseGroup}>
                {viewProfile}
            </Modal>
          
            </> */}
    </div>
  );
}
