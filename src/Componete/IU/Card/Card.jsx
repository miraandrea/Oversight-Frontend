import React from 'react'
import './Card.css'
import { NavLink } from 'react-router-dom'
import foto  from '../ImgProfile/ejemplo.jpg'

export const Card = ({ course }) => {
  return (
    <div className="maincard">
      <div className="card">
      <NavLink to="/Estudiantes_Administrador"><img src={foto} alt={course.nombre}/> </NavLink>
        <p>{course.nombre}</p>
      </div> 
    </div>
  )
  
};
