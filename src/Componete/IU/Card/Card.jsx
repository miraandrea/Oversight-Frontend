import React from 'react'
import './Card.css'

export const Card = ({ course }) => {

  return (
    <div className="maincard1">
      <div className="card">
        <img src={course.foto} alt={course.nombre} /> 
        <p>{course.nombre}</p>
        <p>{course.directorGrupo}</p>
      </div>
    </div>
  )
};
