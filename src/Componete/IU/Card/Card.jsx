import React from 'react'
import './Card.css'
import photo from '../ImgProfile/ejemplo.jpg'
import swal from "@sweetalert/with-react"
import { ViewProfileAdmi } from '../ViewProfileAdmi/ViewProfileAdmi'

export const Card = ({ character }) => {
  return (
    <div className="maincard">
      <div className="card">
        {/* <img src={character.img} alt='foto' />
        <p>{character.name}</p>
        <p>{character.document}</p>
        <p>{character.rol}</p> */}
        <img src={photo} alt='photo' onClick={() => showAdd()} />
        <p>Paola Andrea Mira Orozco</p>
        <p>1005207265</p>
        <p>Docente</p>
      </div>  
    </div>
  )
}
const showAdd = () => {
  swal({
    buttons: {
      confirm: { text: "Deshabilitar", className: "sweetWarning" },
    },
    content: <ViewProfileAdmi />,
  });
};
