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
      <div className='contTitle'>

<input type="text" name="title" id="" placeholder='Titulo' className='title' />
</div>
<div className='DataCont'>

<input className='Data' type="date"
  value="2018-07-22"
  min="2018-01-01" max="2050-12-31"></input>
</div>
<div className='ContDeTeacher'>

<p>Descripcion Docente</p>
<textarea name="docente" id="" cols="30" rows="10" placeholder='Ingrese la descripcion del docente'></textarea>
</div>




<div className='ContDescripstudent'>
<p>Descripcion Estudiante</p>
<textarea name="docente" id="" cols="30" rows="10" placeholder='Ingrese la descripcion del estudiante'></textarea>

</div>
<div className='contTeacher'>
<input type="text" name="title" id="" placeholder='Firma Docente' className='teacher' />

</div>
<div className='contStudent'>
<input type="text" name="title" id="" placeholder='Firma Estudiante' className='studet' />

</div>


    </div>
  )
}
