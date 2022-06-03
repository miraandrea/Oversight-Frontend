import React from 'react'
import './Profile.css'

export const Profile = ({ user }) => {
  return (
    <div>
        <div className="containerImgProfile">
            <img src={user.foto} alt={user.nombre} className="imgProfile"/>
        </div>
        <h1>Documento: </h1> <p>{user.documento}</p>
        <h1>Nombre: </h1> <p>{user.nombre}</p>
        <h1>Apellido: </h1> <p>{user.apellido}</p>
        <h1>Fecha: </h1> <p>{user.fecnac}</p>
    </div>
  )
}
