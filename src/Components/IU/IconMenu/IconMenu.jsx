import "./IconMenu.css";
import React from "react";
import { IoMdHome } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Cookies from "universal-cookie/es6";
import Modal from "@material-ui/core/Modal";
import { MdGroupAdd } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import { Register } from "../Register/Register";
import { IoExitOutline } from "react-icons/io5";
import { GroupAdd } from "../GroupAdd/GroupAdd";

export const IconMenu = () => {

  //modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const bodyRegister = (
    <div className="modal">
      <Register />
      <div className="btn_Cancel">
        <button className="cancel" onClick={handleClose}>Cancelar</button>
      </div>
    </div>
  );
  const [openGroup, setOpenGroup] = React.useState(false);
  const handleOpenGroup = () => {
    setOpenGroup(true);
  };
  const handleCloseGroup = () => {
    setOpenGroup(false);
  };
  const bodyGroup = (
    <div className="modal">
      <GroupAdd />
      <div className="btn_Cancel">
        <button className="cancel" onClick={handleCloseGroup}>Cancelar</button>
      </div>
    </div>
  )

  return (
    <div className="menu">
      <NavLink to="/Administrador">
        <IoMdHome className="iconmenu" />
      </NavLink>
      <p>Inicio</p>
      <IoMdPersonAdd onClick={handleOpen} className="iconmenu" />
      <p>Registrar</p>
      <MdGroupAdd onClick={handleOpenGroup} className="iconmenu" />
      <p className="group">Agregar grupo</p>
      <IoExitOutline onClick={() => signOff()} className="iconmenu" />
      <p>Salir</p>
      <Modal open={open} onClose={handleClose}>
        {bodyRegister}
      </Modal>
      <Modal open={openGroup} onClose={handleCloseGroup}>
        {bodyGroup}
      </Modal>
    </div>
  );
};

const cookies = new Cookies();

const signOff = () => {
  cookies.remove("idadministrador", { path: "/" });
  cookies.remove("foto", { path: "/" });
  cookies.remove("nombre", { path: "/" });
  cookies.remove("apellido", { path: "/" });
  cookies.remove("fecha", { path: "/" });
  localStorage.clear()
  window.location.href = "/";
};