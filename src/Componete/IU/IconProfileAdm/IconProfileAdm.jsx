import React from "react";
import { IoExitOutline } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import Cookies from "universal-cookie/es6";
import { NavLink } from "react-router-dom";

export const IconProfileAdm = () => {
  const cookies = new Cookies();

  const cerrarSesion = () => {
    cookies.remove("idadministrador", { path: "/" });
    cookies.remove("foto", { path: "/" });
    cookies.remove("nombre", { path: "/" });
    cookies.remove("apellido", { path: "/" });
    cookies.remove("fecha", { path: "/" });
    window.location.href = "/";
  };

  return (
    <div>
      <NavLink to="/Administrador">
        <IoMdHome className="iconmenu" />
      </NavLink>
      <p>Inicio</p>
      <IoExitOutline onClick={() => cerrarSesion()} className="iconmenu" />
      <p>Salir</p>
    </div>
  );
};
