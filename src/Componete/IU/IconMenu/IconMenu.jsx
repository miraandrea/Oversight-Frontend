import React from "react";
import { IoMdHome } from "react-icons/io";
import { IoMdPersonAdd } from "react-icons/io";
import { Register } from "../Register/Register";
import { IoExitOutline } from "react-icons/io5";
import { MdGroupAdd } from "react-icons/md";
import { NavLink } from "react-router-dom";
import swal from "@sweetalert/with-react";
import { GroupAdd } from "../GroupAdd/GroupAdd";
import Cookies from 'universal-cookie/es6'
import "./IconMenu.css";

const cookies = new Cookies()

const cerrarSesion = () => {
  
  console.log('idadministrador', {path: "/"})
  console.log('foto', {path: "/"});
  console.log('nombre', {path: "/"})
  console.log('apellido', {path: "/"})
  console.log('fecha', {path: "/"})
  window.location.href = "/"
  
}

export const IconMenu = () => {
  
  return (
    <div className="menu">
      <NavLink to="/Administrador">
        <IoMdHome className="iconmenu" />
      </NavLink>
      <p>Inicio</p>
      <IoMdPersonAdd onClick={() => showRegister()} className="iconmenu" />
      <p>Registrar</p>
      <MdGroupAdd onClick={() => showGroup()} className="iconmenu" />
      <p className="group">Agregar grupo</p>
      <IoExitOutline onClick={() => cerrarSesion()} className="iconmenu" />
      <p>Salir</p>
    </div>
  );
};

const showRegister = () => {
  swal({
    buttons: {
      confirm: { text: "Cancelar", className: "sweet-warning" },
    },
    content: <Register />,
  });
};

const showGroup = (btn) => {
  swal({
    buttons: {
      confirm: { text: "Cancelar", className: "sweet-warning" },
    },
    content: <GroupAdd></GroupAdd>,
  });
};
