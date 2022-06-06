// import React from 'react'

// export const CardTeachUsers = () => {
//   return (
//     <div>

//     </div>
//   )
// }


import React from 'react';
import Card1 from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Modal from "@material-ui/core/Modal";
import foto from '../ImgProfile/group.webp'
import { ViewProfileAdmi } from '../ViewProfileAdmi/ViewProfileAdmi';
import { ViewProfileTeacher } from '../ViewProfileTeacher/ViewProfileTeacher';
import './CardTeachUsers.css'

export const CardTeachUsers = ({ courseStudent }) => {

  const [openGroup, setOpenGroup] = React.useState(false);

  const handleOpenGroup = () => {
      setOpenGroup(true);
    };
  const handleCloseGroup = () => {
      setOpenGroup(false);
    };

    const viewProfile = (
      <div className="modalTeacher">
        <ViewProfileTeacher/>
        <div className="btn_Cancel">
          <p className="cancelTeacher" onClick={handleCloseGroup}>X</p>
        </div>
      </div>
    )

  return (
    <div className='borde'>
    <Card1 sx={{ maxWidth: 170 }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="120"
          image={courseStudent.foto || foto} 
          alt={courseStudent.nombre}
          onClick={handleOpenGroup}
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
        <Modal open={openGroup} onClose={handleCloseGroup}>
          {viewProfile}
        </Modal>
    </div>
  );
}
