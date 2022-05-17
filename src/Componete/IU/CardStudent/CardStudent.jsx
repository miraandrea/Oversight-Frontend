import React from 'react'
import './CardStudent.css'
import { AiOutlineFileSearch } from "react-icons/ai";

export const CardStudent = () => {

  return (
    <div className="studentCard">
      <div className="history">
        <AiOutlineFileSearch className='FileSearch' />
        <h3>Historial</h3>
      </div>
      <div className="cards">
        <div className="cardInfo">
          <div className="inputsInfo">
            <input type="text" name="" id="inputTitle" placeholder='Titulo' />
            <input type="datetime-local" name="" id="inputDatetime" />
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