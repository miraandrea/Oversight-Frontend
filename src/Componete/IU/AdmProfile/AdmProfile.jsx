import React from 'react'
import Cookies from 'universal-cookie/es6';

export const AdmProfile = () => {

  const cookies = new Cookies();

  const documento = ('Documento: ' + cookies.get("idadministrador"))
  const foto =('Foto: '+ cookies.get("foto"));
  const nombre = ('Nombre: '+ cookies.get("nombre"))
  const apellido =('Apellido: '+ cookies.get("apellido"))
  const fecha =('Fecha: '+ cookies.get("fecnac"))

  return (
    <div>
      <p>{documento}</p>
      <p>{nombre}</p>
      <p>{apellido}</p>
      <p>{fecha}</p>
    </div>
  )
}