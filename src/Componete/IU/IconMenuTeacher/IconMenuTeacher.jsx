import React from "react";
import { IoMdHome } from "react-icons/io";
import { MdGroups } from "react-icons/md";
import { IoExitOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
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
      <NavLink to="/">
        <IoExitOutline className="iconmenu" />
      </NavLink>
      <p>Salir</p>
    </div>
  );
};
