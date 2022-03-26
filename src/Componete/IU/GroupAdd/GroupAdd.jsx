import React from "react";
import "./GroupAdd.css";
import { MdGroupAdd } from "react-icons/md";

export const GroupAdd = () => {
  return (
    <div>
      <p className="Register">Agregar grupo</p>
      <MdGroupAdd className='iconregster'/>
      <div className="mainRegister">
        <hr className="line5" />
        <div className="last">
          <input className="userNameRegistre" type="text" placeholder="Nombre Grupo" />
          <button>Foto</button>
        </div>

        <select className="desple">
          <option value="1">Seleccione un director de grupo</option>
          <option value="2">Paola Andrea Mira</option>
          <option value="3">Elian Jaramillo</option>
        </select>
      </div>
      <div className="btn_Registrar">
        <button className="Registrar">Registrar</button>
      </div>
    </div>
  );
};
