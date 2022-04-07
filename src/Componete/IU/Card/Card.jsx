import React from 'react'
import './Card.css'
import { NavLink } from 'react-router-dom'

export const Card = ({ course }) => {
  return (
    <div className="maincard">
      <div className="card">
      <NavLink to="/Estudiantes_Administrador"><img src={course.photo} alt={course.nombre}/> </NavLink>
        <p>{course.nombre}</p>
      </div> 
    </div>
  )
};
