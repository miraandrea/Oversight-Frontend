import React from 'react'
import './CardTeacher.css'
import photo from '../ImgProfile/ejemplo.jpg'
import swal from "@sweetalert/with-react"
import { ViewProfileAdmi } from '../ViewProfileAdmi/ViewProfileAdmi'

export const CardTeacher = () => {
  return (
    <div className="teachercard">
    <div className="card">
      {/* <img src={character.img} alt='foto' />
      <p>{character.name}</p>
      <p>{character.document}</p>
      <p>{character.rol}</p> */}
      <img src={photo} alt='photo' onClick={() => showAdd()} />
      <p>Elian Jaramillo</p>
      <p>100524969</p>
      <p>11°B</p>
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
