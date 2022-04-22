//Cambiar 
import React from 'react'
import './CardAdmi.css'
import photo from '../ImgProfile/ejemplo.jpg'
import swal from "@sweetalert/with-react"
import { ViewProfileAdmi } from '../ViewProfileAdmi/ViewProfileAdmi'

export const CardAdmi = ({ courseStudent }) => {
    return (
        <div className="maincard">
            <div className="card">
                <img src={photo} alt={courseStudent.nombre} onClick={() => showAdd()} /> 
                <p>{courseStudent.nombre}</p>
                <p>{courseStudent.apellido}</p>
                <p>{courseStudent.idestudiante}</p>
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
