import React from 'react'
import { CardStudent } from '../../IU/CardStudent/CardStudent'
import './MainStudent.css'

export const MainStudent = ({ course2 }) => {

  return (
    <div >
        <CardStudent course2={course2}/>
    </div>
  )
}