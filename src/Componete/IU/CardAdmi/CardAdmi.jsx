//Cambiar 
import React, { useEffect, useState } from 'react'
import './CardAdmi.css'
import photo from '../ImgProfile/ejemplo.jpg'
import swal from "@sweetalert/with-react"
import { ViewProfileAdmi } from '../ViewProfileAdmi/ViewProfileAdmi'

export const CardAdmi = (course) => {
    return (
        <div className="maincard">
            <div className="card">
                <img src={photo} alt={course.nombre} onClick={() => showAdd()} /> 
                <p>nombre</p>
                <p>documento</p>
                <p>{course.nombre}</p>
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
