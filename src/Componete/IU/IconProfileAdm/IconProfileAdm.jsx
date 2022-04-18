import React from 'react'
import { IoExitOutline } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { NavLink } from 'react-router-dom';

export const IconProfileAdm = () => {

    const cerrarSesion = () => {
  
        console.log('idadministrador', {path: "/"})
        console.log('foto', {path: "/"});
        console.log('nombre', {path: "/"})
        console.log('apellido', {path: "/"})
        console.log('fecha', {path: "/"})
        window.location.href = "/"
        
      }
      
    return (
        <div>
            <NavLink to="/Administrador">
                <IoMdHome className="iconmenu" />
            </NavLink>
            <p>Inicio</p>

            <IoExitOutline onClick={() => cerrarSesion()} className="iconmenu" />
            <p>Salir</p>
        </div>
    )
}
