import React from "react";
import "./ImgProfile.css";
import Logo from "./ejemplo.jpg";
import { NavLink } from "react-router-dom";

export const ImgProfile = () => {
  return (
    <div className="perfile">
      <NavLink to="/Perfil/Administrador">
        <img src={Logo} alt="Perfile" className="imgperfile" />
      </NavLink>
    </div>
  );
};
