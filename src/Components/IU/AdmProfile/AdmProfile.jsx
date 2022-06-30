import React, { useEffect, useState } from 'react'
import './AdmProfile.css'

export const AdmProfile = ({ user }) => {

  return (
    <div className='Text'>
      <div className='Texto1'>
        <p>Documento:        {user.documento}</p>
        <p>Nombre:           {user.nombre}</p>
        <p>Apellido:         {user.apellido}</p>
        <p>Fecha:            {user.fecnac}</p>
      </div>
    </div>
  )
}