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
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

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
    <div className="modalGroup">
      <GroupAdd />
      <div className="btn_Cancel">
        <button className="cancel" onClick={handleCloseGroup}>Cancelar</button>
      </div>
    </div>
  )

  return (
    <div className="menu">
      <ListItemButton >
        <ListItemIcon>
          <NavLink to="/Administrador">
            <IoMdHome className="iconmenu" />
          </NavLink>
        </ListItemIcon>
        <ListItemText primary="Inicio" />
      </ListItemButton>

      <ListItemButton >
        <ListItemIcon>
          <IoMdPersonAdd onClick={handleOpen} className="iconmenu" />
        </ListItemIcon>
        <ListItemText primary="Registrar usuario" />
      </ListItemButton>

      <ListItemButton >
        <ListItemIcon>
          <MdGroupAdd onClick={handleOpenGroup} className="iconmenu" />
        </ListItemIcon>
        <ListItemText primary="Agregar grupo" />
      </ListItemButton>

      <ListItemButton >
        <ListItemIcon>
          <IoExitOutline onClick={() => signOff()} className="iconmenu" />
        </ListItemIcon>
        <ListItemText primary="Salir" />
      </ListItemButton>
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
  cookies.remove("idAdministrador", { path: "/" });
  localStorage.clear()
  window.location.href = "/";
};