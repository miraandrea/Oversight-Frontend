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
      <hr className='lineIn' />
      <div className="iconRecord">
      
      <AiOutlineFileSearch />
      <p>Historial</p>
      </div>

      <div className='cont'>
        <div className='contTitle'>

          <input type="text" name="title" id="" placeholder='Titulo' />
        </div>
        <hr className='line6' />
        <div className='DataCont'>

          <input className='Data' type="date"
            value="2018-07-22"
            min="2018-01-01" max="2050-12-31"></input>
        </div>
        <p>Descripcion Docente</p>
        <textarea name="docente" id="" cols="30" rows="10" placeholder='Ingrese la descripcion del docente'></textarea>
      
        <p>Descripcion Estudiante</p>
        <textarea name="docente" id="" cols="30" rows="10" placeholder='Ingrese la descripcion del estudiante'></textarea>

        <input type="text" name="title" id="" placeholder='Firma Docente' />
        <hr />

        <input type="text" name="title" id="" placeholder='Firma Estudiante' />
        <hr />
      </div>
    </div>
  )
}
