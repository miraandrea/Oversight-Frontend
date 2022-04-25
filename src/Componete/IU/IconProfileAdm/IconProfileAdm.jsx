import React from "react";
import { IoExitOutline } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import Cookies from "universal-cookie/es6";
import { NavLink } from "react-router-dom";
import '../../Layout/AdmProfileFooter/AdmProfileFooter.css'
import axios from "axios";

export const IconProfileAdm = () => {

  const cookies = new Cookies();

  const cerrarSesion = () => {
    cookies.remove("idadministrador", { path: "/" });
    cookies.remove("foto", { path: "/" });
    cookies.remove("nombre", { path: "/" });
    cookies.remove("apellido", { path: "/" });
    cookies.remove("fecha", { path: "/" });
    localStorage.clear()
    window.location.href = "/";
  };

  return (
    <div className="hr" >
      <p className="aviso">Salir</p>
      <IoExitOutline onClick={() => cerrarSesion()} className="admi" />
      <p className="aviso">Inicio </p>
      <NavLink to="/Administrador">
        <IoMdHome className="admi" />
      </NavLink>
    </div>
  );
};
