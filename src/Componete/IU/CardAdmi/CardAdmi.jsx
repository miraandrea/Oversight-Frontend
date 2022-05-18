//Cambiar 
import React from 'react'
import './CardAdmi.css'
import { ViewProfileAdmi } from '../ViewProfileAdmi/ViewProfileAdmi'
import Modal from "@material-ui/core/Modal";
import foto from '../ImgProfile/student.jpg'

export const CardAdmi = ({ courseStudent }) => {

    const [openGroup, setOpenGroup] = React.useState(false);
    const handleOpenGroup = () => {
        setOpenGroup(true);
      };
    const handleCloseGroup = () => {
        setOpenGroup(false);
      };

      const viewProfile = (
        <div className="paper1">
          <ViewProfileAdmi />
          <div className="btn_Cancel">
            <button className="cancel1" onClick={handleCloseGroup}>Cancelar</button>
          </div>
        </div>
      )

    return (
        <div className="maincard">
            <div className="card">
                <img src={courseStudent.foto || foto } alt={courseStudent.nombre} onClick={handleOpenGroup} /> 
                <p>{courseStudent.nombre} {courseStudent.apellido}</p>
                <p>{courseStudent.documento}</p>
            </div>
            <Modal open={openGroup} onClose={handleCloseGroup}>
                {viewProfile}
            </Modal>
        </div>
    )
}