import React from 'react'
import './CardStudent.css'

export const CardStudent = ({record}) => {

  return (
    <div>
      <div className="cards">
        <div className="cardInfo">
          <div className="inputsInfo">
          <input type="text" value={record.titulo} readonly onmousedown="return false;" id="inputTitle"/>
            <p>{record.fecha}</p>
          </div>
          <div className="inputsDescription">
            <textarea name="" className='descriptionTeacher' cols="30" rows="10" placeholder='Descripcion docente'></textarea>
            <textarea name="" className='descriptionStudent' cols="30" rows="10" placeholder='Descripcion estudiante'></textarea>
          </div>
          <div className="inputSignature">
            <input type="text" name="" id="signTeacher" placeholder='Firma docente' />
            <input type="text" name="" id="signStudent" placeholder='Firma estudiante' />
          </div>
        </div>
      </div>
    </div>
  )
}