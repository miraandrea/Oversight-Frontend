import "./ImgProfile.css";
import React from "react";
import Logo from "./ejemplo.jpg";
import { NavLink } from "react-router-dom";

export const ImgProfile = ({ img }) => {
  return (
    <div>
      <NavLink to="/Perfil">
        <img src={Logo} alt="Perfile" className={img} />
      </NavLink>
    </div>
  );
};
