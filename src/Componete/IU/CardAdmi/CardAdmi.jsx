//Cambiar 
import React from 'react'
import './CardAdmi.css'
import { ViewProfileAdmi } from '../ViewProfileAdmi/ViewProfileAdmi'
import { useParams } from "react-router";
import Modal from "@material-ui/core/Modal";

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
        <button className="cancel" onClick={handleCloseGroup}>Cancelar</button>
      </div>
    </div>
  )

  const { name } = useParams()

  return (
    <div className="maincard">
      <div className="card">
        <img src={courseStudent.foto} alt={courseStudent.nombre} onClick={handleOpenGroup} />
        <p>{courseStudent.nombre} {courseStudent.apellido}</p>
        <p>{courseStudent.documento}</p>
        <p>{name}</p>
      </div>
      <Modal open={openGroup} onClose={handleCloseGroup}>
        {viewProfile}
      </Modal>
    </div>
  )
}