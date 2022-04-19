import React, { useEffect, useState } from "react";
import { IoMdPersonAdd } from "react-icons/io";
import "./Register.css";
import axios from "axios";


export const Register = () => {

  // Rol courses

  const URL = "http://localhost:4000/v1/courses";
  const [data, setData] = useState([" "]);

  useEffect(() => {
    axios.get(URL).then((response) => {
      console.log("response", Object.keys(response.data).length);
      let dataArray = [];
      for (let index = 0; index < Object.keys(response.data).length; index++) {
        console.log("response2");
        dataArray.push(response.data[index]);
      }
      setData(dataArray);
    });
  }, []);

  console.log(data);

  
  // Rol usuarios 
  
  const [rolUsuarios, setRolUsuarios] = useState("")
  
  
  const estudiante1 = (event) =>{
    const usuario = event.target.value
    setRolUsuarios(usuario)
  }

  //Registar estudiante 
  const UrlEstudiante = "http://localhost:4000/v1/students";
  const [document, setDocument] = useState("");
  const [studentName, setStudentName] = useState("");
  const [studentLastName, setStudentLastName] = useState("");
  
  useEffect(() => {
    const getCourses = () => {
        axios
          .post(UrlEstudiante, {
  
            document : document,
            studentName: studentName,
            studentLastName: studentLastName
  
          })
          .then((response) => console.log(response))
          .catch((error) => console.log(error));
      };
    
    if ( rolUsuarios == 2 ){
      console.log("Estudiante");
    }
    if ( rolUsuarios == 3) {
      console.log("Docente");
    }
    else{
      console.log("Es necesario escoger el rol");
    }
  });

  return (
    <div>
      <p className="Register">Registrar</p>
      <IoMdPersonAdd className="iconregster" />
      <div className="mainRegister">
        <hr className="line5" />
        <div className="last">
          <input
            name={setStudentName}
            className="userNameRegistre"
            type="text"
            placeholder="Nombres"
          />
          <input
          name={setStudentLastName}
          className="lastName" 
          type="text" 
          placeholder="Apellidos" />
        </div>

        <div className="number1">
          <input
            name={setDocument}
            className="number"
            type="number"
            placeholder="Documento Identidad"
          />
        </div>
        <select className="desple" onChange={(event) => estudiante1(event)}>
                <option value="1">Seleccione un rol</option>
                <option value="2">Estudiante</option>
                <option value="3">Docente</option>
            </select>
        <div className="despleRol"></div>
        <select className="desple">
          <option>Seleccione un grupo</option>
          {data.map((el, index) => {
            return (
              <option key={index} value={el.idcurso}>
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
