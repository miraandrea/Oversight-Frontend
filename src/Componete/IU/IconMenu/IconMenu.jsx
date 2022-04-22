import React, { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { IoMdPersonAdd } from "react-icons/io";
import { Register } from "../Register/Register";
import { IoExitOutline } from "react-icons/io5";
import { MdGroupAdd } from "react-icons/md";
import { NavLink } from "react-router-dom";
import swal from "@sweetalert/with-react";
import { GroupAdd } from "../GroupAdd/GroupAdd";
import Cookies from "universal-cookie/es6";
import Modal from "@material-ui/core/Modal";
import "./IconMenu.css";

export const IconMenu = () => {

  //modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const body = (
    <div className="paper">
      <Register />
      <button onClick={handleClose}>Cancelar</button>
    </div>
  );

  return (
    <div className="menu">
      <NavLink to="/Administrador">
        <IoMdHome className="iconmenu" />
      </NavLink>
      <p>Inicio</p>
      <IoMdPersonAdd onClick={handleOpen} className="iconmenu" />
      <p>Registrar</p>
      <MdGroupAdd onClick={() => showGroup()} className="iconmenu" />
      <p className="group">Agregar grupo</p>
      <IoExitOutline onClick={() => cerrarSesion()} className="iconmenu" />
      <p>Salir</p>
      <NavLink to="/prueba1">
        <button>grupo</button>
      </NavLink>
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
    </div>
  );
};

const showGroup = (btn) => {
  swal({
    buttons: {
      confirm: { text: "Cancelar", className: "sweet-warning" },
    },
    content: <GroupAdd></GroupAdd>,
  });
};

const cookies = new Cookies();

const cerrarSesion = () => {
  cookies.remove("idadministrador", { path: "/" });
  cookies.remove("foto", { path: "/" });
  cookies.remove("nombre", { path: "/" });
  cookies.remove("apellido", { path: "/" });
  cookies.remove("fecha", { path: "/" });
  window.location.href = "/";
};
