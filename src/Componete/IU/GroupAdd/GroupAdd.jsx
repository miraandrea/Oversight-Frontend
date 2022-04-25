import React, { useEffect, useState } from "react";
import "./GroupAdd.css";
import { MdGroupAdd } from "react-icons/md";
import axios from "axios";

export const GroupAdd = () => {

  const [data, setData] = useState([" "]);

  let llamarToken = localStorage.getItem('tokenTeachers');
  const urlTeachers = "http://localhost:4000/v1/decode/" + llamarToken;

  useEffect(() => {
    axios.get(urlTeachers).then((response) => {
      console.log("response", Object.keys(response.data).length);
      let dataArray = [];
      for (let index = 0; index < Object.keys(response.data).length; index++) {
        console.log("response2");
        dataArray.push(response.data[index]);
      }
      setData(dataArray);
    });
  }, []);

  return (
    <div>
      <p className="nameGroup">Agregar grupo</p>
      <MdGroupAdd className='iconGroup' />
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
        <select
          className="desple">
          <option>Seleccione un director de grupo</option>
          {data.map((el, index) => {
            return (
              <option key={index} > 
              {/* value={el.idcurso} */}
                {el.nombre}
              </option>
            );
          })}
        </select>
      </div>
      <div className="btn_Registrar">
        <button className="Registrar">Registrar</button>
      </div>
    </div>
  );
};
