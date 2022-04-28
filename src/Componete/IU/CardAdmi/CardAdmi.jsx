//Cambiar 
import React from 'react'
import './CardAdmi.css'
import photo from '../ImgProfile/ejemplo.jpg'
import swal from "@sweetalert/with-react"
import { ViewProfileAdmi } from '../ViewProfileAdmi/ViewProfileAdmi'
import { useParams } from "react-router";

export const CardAdmi = ({ courseStudent }) => {

    
  const { name } = useParams()

    return (
        <div className="maincard">
            <div className="card">
                <img src={courseStudent.foto} alt={courseStudent.nombre} onClick={() => showAdd()} /> 
                <p>{courseStudent.nombre} {courseStudent.apellido}</p>
                <p>{courseStudent.documento}</p>
                <p>{name}</p>
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
