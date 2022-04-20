import React, { useEffect, useState } from "react";
import { IoMdPersonAdd } from "react-icons/io";
import "./Register.css";
import axios from "axios";

export const Register = () => {
  // Rol courses

  const urlCurse = "http://localhost:4000/v1/courses";
  const [data, setData] = useState([" "]);

  useEffect(() => {
    axios.get(urlCurse).then((response) => {
      console.log("response", Object.keys(response.data).length);
      let dataArray = [];
      for (let index = 0; index < Object.keys(response.data).length; index++) {
        console.log("response2");
        dataArray.push(response.data[index]);
      }
      setData(dataArray);
    });
  }, []);

  // // Rol usuarios
  
  const [rolUsuarios, setRolUsuarios] = useState("");
  
  
  //Registar estudiante
  let URL; 
  
  const [document, setDocument] = useState("");
  const [studentName, setStudentName] = useState("");
  const [studentLastName, setStudentLastName] = useState("");
  const [dateBirth, setDateBirth] = useState("");
  const [sex, setSex] = useState("");
  const [course, setCourse] = useState("");
  console.log(course);
  
  if (rolUsuarios == 2) {
    console.log("Estudiante");
    URL = "http://localhost:4000/v1/students"
  }
  if (rolUsuarios == 3) {
    console.log("Docente");
    URL = "http://localhost:4000/v1/teachers"
  } 
  else {
    console.log("Es necesario escoger el rol");
  }
  console.log(URL);

  const response = (e) => {
    e.preventDefault()
    axios.post(URL,{
      document: document,
      studentName: studentName,
      studentLastName: studentLastName,
      dateBirth: dateBirth,
      sex: sex,
      course: course
    })
    .then( response => response)
    .then( data => console.log(data) )
  }


  return (
    <div>
      <form action="">
        <p className="Register">Registrar</p>
        <IoMdPersonAdd className="iconregster" />
        <div className="mainRegister">
          <hr className="line5" />
          <div className="last">


            <input
              onChange={e=> setStudentName(e.target.value)}
              className="userNameRegistre"
              type="text"
              placeholder="Nombres"
            />

            <input
              onChange={e=> setStudentLastName(e.target.value)}
              className="lastName"
              type="text"
              placeholder="Apellidos"
            />
          </div>

          <div className="number1">
            <input
              onChange={e=> setDocument(e.target.value)}
              className="number"
              type="number"
              placeholder="Documento Identidad"
            />
          </div>
          <input type="datetime" 
                 placeholder="fecha"
                 onChange={e=> setDateBirth(e.target.value)}
          />
          <select className="desple" onChange={e => setSex(e.target.value)}>
            <option value="null">Genero</option>
            <option value="F">Feminino</option>
            <option value="M">Masculino</option>
          </select>

          <select className="desple" onChange={e => setRolUsuarios(e.target.value)}>
            <option value="1">Seleccione un rol</option>
            <option value="2">Estudiante</option>
            <option value="3">Docente</option>
          </select>
          
          <div className="despleRol"></div>
          <select className="desple" onChange={e=> setCourse(e.target.value)}>
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
          <button className="Registrar" onClick={response}>Registrar</button>
        </div>
      </form>
    </div>
  );
};
