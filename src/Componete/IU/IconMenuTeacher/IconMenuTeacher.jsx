import React from "react";
import { IoMdHome } from "react-icons/io";
import { MdGroups } from "react-icons/md";
import { IoExitOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import Cookies from 'universal-cookie/es6'
import "./IconMenuTeacher.css";

export const IconMenuTeacher = () => {
  return (
    <div className="menuteacher">
      <NavLink to="/Docente">
        <IoMdHome className="iconmenu" />
      </NavLink>
      <p>Inicio</p>
      <MdGroups className="iconmenu" />
      <p>Grupos</p>
      <IoExitOutline onClick={() => cerrarSesion()} className="iconmenu" />
      <p>Salir</p>
    </div>
  );
};

const cookies = new Cookies()

const cerrarSesion = () => {
  
  cookies.remove('idadministrador', {path: "/"})
  cookies.remove('foto', {path: "/"});
  cookies.remove('nombre', {path: "/"})
  cookies.remove('apellido', {path: "/"})
  cookies.remove('fecha', {path: "/"})
  window.location.href = "/"
  
}
