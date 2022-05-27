import React from 'react'
import viewFotophoto from '../ImgProfile/ejemplo.jpg'
import { AiOutlineFileSearch } from "react-icons/ai";
import './ViewProfileTeacher.css'

export const ViewProfileTeacher = () => {

  return (
    <div>
      <img src={viewFotophoto} alt="photo" className="photoView1" />
      <div className='information1'>
        <p className="letra"> <b> Paola Andrea Mira </b></p>
        <p className="letra" > <b> 1007603426 </b> </p>
        <p className="letra" > <b>Docente </b> </p>
      </div>
      <div className="iconRecord1">
        <AiOutlineFileSearch />
        <p>Historial</p>
      </div>
      <div className='contTitle1'>
        <div className='Cont'>
          <div>
            <input type="text" name="title1" id="" placeholder='Titulo' className='title1' />
          </div>
          <div className='DataCont1'>
            <input className='Data1' type="datetime-local" name="" id="inputDatetime" />
          </div>
          <div className='ContDeTeacher1'>
            <p>Descripcion Docente</p>
            <textarea className='Stident2' name="docente" id="" cols="30" rows="10" placeholder='Ingrese la descripcion del docente'></textarea>
          </div>
          <div className='ContDescripstudent1'>
            <p>Descripcion Estudiante</p>
            <textarea className='docent' name="docente" id="" cols="30" rows="10" placeholder='Ingrese la descripcion del estudiante'></textarea>
          </div>
          <div className='FirmaDocent'>
            <input type="text" name="title" id="" placeholder='Firma Docente' className='teacher' />
          </div>
          <div className='FirmaStudent'>
            <input type="text" name="title" id="" placeholder='Firma Estudiante' className='studet' />
          </div>
        </div>
      </div>
    </div>
  )
}