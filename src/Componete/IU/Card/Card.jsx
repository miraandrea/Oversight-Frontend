import React from 'react'
import './Card.css'
import foto from '../ImgProfile/group.webp'

export const Card = ({ course }) => {

  console.log(course);
  return (
    <div className="maincard1">
      <div className="card">
        <img src={course.foto || foto}  alt={course.nombre} />
        <p>{course.nombre}</p>
        <p>{course.directorGrupo}</p>
      </div>
    </div>
  )
};