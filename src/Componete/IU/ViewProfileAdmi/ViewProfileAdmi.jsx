import React from 'react'
import viewFotophoto from '../ImgProfile/ejemplo.jpg'
import { AiOutlineFileSearch } from "react-icons/ai";
import './ViewProfileAdmi.css'

export const ViewProfileAdmi = () => {
  return (
    <div>
       <img src={viewFotophoto} alt="photo" className="photoView" /> 
       <p>Paola Andrea Mira</p>
       <p>1007603426</p>
       <p>11°B</p>
       <hr />
       <AiOutlineFileSearch />
       <p className='Historial'>Historial</p>

    <div className='cont'>
      <div className='contTitle'>

       <p className='title'>Titulo</p>
      </div>      
      <hr className='line6'/>
      <div className='DataCont'>

       <input className='Data' type="date" 
       value="2018-07-22"
       min="2018-01-01" max="2050-12-31"></input>
      </div>
    </div>
       
    </div>
  )
}
