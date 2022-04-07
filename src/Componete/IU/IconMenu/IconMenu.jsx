import React from "react";
import { IoMdHome } from "react-icons/io";
import { IoMdPersonAdd } from "react-icons/io";
import { Register } from "../Register/Register";
import { IoExitOutline } from "react-icons/io5";
import { MdGroupAdd } from "react-icons/md";
import { NavLink } from "react-router-dom";
import swal from "@sweetalert/with-react";
import { GroupAdd } from "../GroupAdd/GroupAdd";
import "./IconMenu.css";

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
      <NavLink to="/">
        <IoExitOutline className="iconmenu" />
      </NavLink>
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
