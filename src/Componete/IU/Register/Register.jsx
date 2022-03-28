import React from "react";
import "./Register.css";
import { IoMdPersonAdd } from "react-icons/io";

export const Register = () => {
  return (
    <div>
      <p className="Register">Registrar</p>
      <IoMdPersonAdd className='iconregster'/>
      <div className="mainRegister">
        <hr className="line5" />
        <div className="last">
          <input className="userNameRegistre" type="text" placeholder="Nombres" />
          <input className="lastName" type="text" placeholder="Apellidos" />
        </div>

        <div className="number1">
          <input
            className="number"
            type="number"
            placeholder="Documento Identidad"
          />
        </div>
        <select className="desple">
          <option value="1">Seleccione un rol</option>
          <option value="2">Estudiante</option>
          <option value="3">Docente</option>
        </select>
        <div className="despleRol"></div>
        <select className="desple">
          <option value="1">Seleccione un grupo</option>
          <option value="2">7°A</option>
          <option value="3">10°B</option>
        </select>
      </div>
      <div className="btn_Registrar">
        <button className="Registrar">Registrar</button>
      </div>
    </div>
  );
};
