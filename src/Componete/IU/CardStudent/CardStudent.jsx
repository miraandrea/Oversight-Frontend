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
            <textarea name="" className='descriptionTeacher' cols="30" rows="10" value={record.descripcionDocente} readonly onmousedown="return false;"></textarea>
            <textarea name="" className='descriptionStudent' cols="30" rows="10" value={record.descripcionEstudiante} readonly onmousedown="return false;"></textarea>
          </div>
          <div className="inputSignature">
            <input type="text" name="" id="signTeacher" value={record.firmaDocente} readonly onmousedown="return false;" />
            <input type="text" name="" id="signStudent" value={record.firmaEstudiante} readonly onmousedown="return false;" />
          </div>
        </div>
      </div>
    </div>
  )
}