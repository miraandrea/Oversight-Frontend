import React from "react";
import { IoMdHome } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Cookies from "universal-cookie/es6";
import { IoExitOutline } from "react-icons/io5";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

export const IconMenuStudent = () => {

  return (
    <div className="menu">
      <ListItemButton >
        <ListItemIcon>
          <NavLink to="/Estudiante">
            <IoMdHome className="iconmenu" />
          </NavLink>
        </ListItemIcon>
        <ListItemText primary="Inicio" />
      </ListItemButton>

      <ListItemButton >
        <ListItemIcon>
          <IoExitOutline onClick={() => signOff()} className="iconmenu" />
        </ListItemIcon>
        <ListItemText primary="Salir" />
      </ListItemButton>
    </div>
  );
};

const cookies = new Cookies();

const signOff = () => {
  cookies.remove("idAdministrador", { path: "/" });
  localStorage.clear()
  window.location.href = "/";
};