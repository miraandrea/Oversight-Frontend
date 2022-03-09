import React from 'react'
import viewFotophoto from '../ImgProfile/ejemplo.jpg'
import { AiOutlineFileSearch } from "react-icons/ai";
import './ViewProfileAdmi.css'

export const ViewProfileAdmi = () => {
  return (
    <div>
       <img src={viewFotophoto} alt="photo" className="photoView" /> 
       <p>Kleverman Salazar Florez </p>
       <p>11°B</p>
       <hr />
       <AiOutlineFileSearch />
       <p>Historial</p>
    </div>
  )
}
