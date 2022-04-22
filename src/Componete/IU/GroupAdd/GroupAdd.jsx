import React, { useState } from "react";
import "./GroupAdd.css";
import { MdGroupAdd } from "react-icons/md";

export const GroupAdd = () => {

  const URL = 'http://localhost:8080/api/courses'

  return (
    <div>
      <p className="nameGroup">Agregar grupo</p>
      <MdGroupAdd className='iconGroup'/>
      <div className="mainGroup">
        <br />
        <hr className="line5" />
        <div className="last">
          <input className="userNameGroup" type="text" placeholder="Nombre Grupo" />
        </div>
        <div className="photoGroup">
          <button>Foto</button>
          {/* para la imagenes <input type="file" /> */}
        </div>
        <br />

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
