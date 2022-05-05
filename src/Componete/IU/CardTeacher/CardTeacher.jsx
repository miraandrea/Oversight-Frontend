import React from 'react'
import './CardTeacher.css'
import photo from '../ImgProfile/ejemplo.jpg'
import { ViewProfileTeacher } from '../ViewProfileTeacher/ViewProfileTeacher'
import Modal from "@material-ui/core/Modal";


export const CardTeacher = () => {
  const [openGroup, setOpenGroup] = React.useState(false);
  const handleOpenGroup = () => {
      setOpenGroup(true);
    };
  const handleCloseGroup = () => {
      setOpenGroup(false);
    };

    const viewProfile = (
      <div className="paper1">
        <ViewProfileTeacher />
        <div className="btn_Cancel">
          <button className="cancel" onClick={handleCloseGroup}>Cancelar</button>
        </div>
      </div>
    )
  return (
    <div className="teachercard">
    <div className="card">
      {/* <img src={character.img} alt='foto' />
      <p>{character.name}</p>
      <p>{character.document}</p>
      <p>{character.rol}</p> */}
      <img src={photo} alt='photo' onClick={handleOpenGroup} />
      <p>Elian Jaramillo</p>
      <p>100524969</p>
      <p>11°B</p>
    </div>  
    <Modal open={openGroup} onClose={handleCloseGroup}>
                {viewProfile}
            </Modal>
  </div>
)
}
