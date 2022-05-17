import React from 'react'
import viewFotophoto from '../ImgProfile/ejemplo.jpg'
import { AiOutlineFileSearch } from "react-icons/ai";
import './ViewProfileAdmi.css'

export const ViewProfileAdmi = () => {

  return (
    <div>
      <img src={viewFotophoto} alt="photo" className="photoView" />
      <div className='information'>
        <p>Paola Andrea Mira</p>
        <p>1007603426</p>
        <p>Docente</p>
      </div>
      <div className="iconRecord">
        <AiOutlineFileSearch />
        <p>Historial</p>
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