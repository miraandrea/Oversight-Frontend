import './Card.css'
import React from 'react'
import foto from '../ImgProfile/group.webp'

export const Card = ({ course }) => {

  return (
    <div>
      <div className="card">
        <img src={course.foto || foto} alt={course.nombre} />
        <p>{course.nombre}</p>
        <p>{course.directorGrupo}</p>
      </div>
    </div>
  )
};