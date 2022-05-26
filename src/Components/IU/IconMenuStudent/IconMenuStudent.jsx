import React from 'react'
import { IoMdHome } from "react-icons/io";
import { IoExitOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import Cookies from 'universal-cookie/es6'
import "./IconMenuStudent.css";

export const IconMenuStudent = () => {

  return (
    <div className='menuStudent'>
      <NavLink to="/Estudiante">
        <IoMdHome className="iconmenu" />
      </NavLink>
      <p>Inicio</p>
      <IoExitOutline onClick={() => cerrarSesion()} className="iconmenu" />
      <p>Salir</p>
    </div>
  )
}

const cookies = new Cookies()

const cerrarSesion = () => {

  cookies.remove('documento', { path: "/" })
  cookies.remove('foto', { path: "/" });
  cookies.remove('nombre', { path: "/" })
  cookies.remove('apellido', { path: "/" })
  cookies.remove('fecha', { path: "/" })
  cookies.remove('genero', { path: "/" })
  cookies.remove('firma', { path: "/" })
  window.location.href = "/"
}