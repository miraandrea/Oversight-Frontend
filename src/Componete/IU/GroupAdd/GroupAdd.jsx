import React, { useEffect, useState } from "react";
import "./GroupAdd.css";
import { MdGroupAdd } from "react-icons/md";
import axios from "axios";

export const GroupAdd = () => {

  //token teacher

  const UrlTokenTeacher = 'http://localhost:4000/v1/teachers';

  useEffect(() => {
    const getTeacher = () => {
      axios.get(UrlTokenTeacher)
        .then((res) => userTeacher(res.data))
        .catch((error) => console.log(error))
    }
    getTeacher();
  }, []);
  const [data, setData] = useState([" "]);

  const userTeacher = (data) => {
    const urlTeacher = "http://localhost:4000/v1/decode/" + data;
    axios.get(urlTeacher).then((response) => {
<<<<<<< HEAD
      console.log(response.data[0]);
      console.log("response", Object.keys(response.data[0]).length);
=======
      console.log("response", Object.keys(response.data).length);
>>>>>>> 68acad9f889d6a6b67f79204990d23ac0de663aa
      let dataArray = [];
      for (let index = 0; index < Object.keys(response.data[0]).length; index++) {
        console.log("response2");
        dataArray.push(response.data[0][index]);
      }
      setData(dataArray);
    });
  }
<<<<<<< HEAD

  //imagen
  const [archivos, setArchivos] = useState(null)

  const subir = e => {
    console.log(e);
    setArchivos(e)
  }

  const insertar = () => {
    const f = new FormData()

    for (let index = 0; index < archivos.length; index++) {
      console.log(f.append('result', archivos[index]));
      f.append('image', archivos[index])
    }
    axios.post("http://localhost:4000/v2/courses", f)
    .then(res =>{
      console.log(res.data);
    })
    .catch(error => console.log(error))
  }



=======
>>>>>>> 68acad9f889d6a6b67f79204990d23ac0de663aa

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
          <input type="file" name="files" multiple onChange={(e)=>subir(e.target.files)}/>
          <button onClick={()=>insertar()}>Foto</button>
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
