import React, {useEffect, useState} from 'react'
import './Card.css'
import photo from '../ImgProfile/ejemplo.jpg'
import swal from "@sweetalert/with-react"
import { ViewProfileAdmi } from '../ViewProfileAdmi/ViewProfileAdmi'
import { NavLink } from 'react-router-dom'

export const Card = ({ course }) => {
  return (
    <div className="maincard">
      <div className="card">
      <NavLink to="/Estudiantes_Administrador"><img src={photo} alt={course.nombre}/> </NavLink> {/*onClick={() => showAdd()}*/} 
        <p>{course.nombre}</p>
      </div>  
    </div>
  )
// }
// const showAdd = () => {
//   swal({
//     buttons: {
//       confirm: { text: "Deshabilitar", className: "sweetWarning" },
//     },
//     content: <ViewProfileAdmi />,
//   });
};
