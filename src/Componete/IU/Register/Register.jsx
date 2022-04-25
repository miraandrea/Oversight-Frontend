import React, { useEffect, useState } from "react";
import { IoMdPersonAdd } from "react-icons/io";
import "./Register.css";
import axios from "axios";

export const Register = () => {
  
  // Rol courses
  let llamarToken = localStorage.getItem('tokenCurse');
  const urlCurse = "http://localhost:4000/v1/decode/" + llamarToken;
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

  // Rol usuarios
  const [rolUsuarios, setRolUsuarios] = useState("");
  let URL;

  //mensages
  const [message, setMessage] = useState("");
  const [messageRegister, setMessageRegister] = useState("");

  //Registar
  const [document, setDocument] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateBirth, setDateBirth] = useState("");
  const [sex, setSex] = useState("");
  const [course, setCourse] = useState("");

  const response = (e) => {
    if (rolUsuarios == 2) {
      console.log("Estudiante");
      URL = "http://localhost:4000/v2/students";
    }
    if (rolUsuarios == 3) {
      console.log("Docente");
      URL = "http://localhost:4000/v2/teachers";
    }
    if (rolUsuarios == "") {
      const paragrapg = "Es necesario escoger el rol";
      setMessage(paragrapg);
    }
    console.log(URL);
    e.preventDefault();
    axios
      .post(URL, {
        document: document,
        name: name,
        lastName: lastName,
        dateBirth: dateBirth,
        sex: sex,
        course: course,
      })
      .then((response) => userRegister(response.data))
      .catch((error) => console.log(error));
  };

  const userRegister = (data) => {
    if (data) {
      const paragrapg = "se registro";
      setMessageRegister(paragrapg);
    }
    //falta que no deje registrar si esta null
    // if (data == null){
    //   const paragrapg = "no se pudo registro"
    //   setMessage1(paragrapg)
    //   console.log(data);
    // }
  };

  return (
    <div>
      <form action="">
        <p className="Register">Registrar</p>
        <IoMdPersonAdd className="iconregster" />
        <div className="mainRegister">
          <hr className="lineRegister" />
          <div className="last">
            <input
              onChange={(e) => setName(e.target.value)}
              className="userNameRegistre"
              type="text"
              placeholder="Nombres"
              required
            />
            <input
              onChange={(e) => setLastName(e.target.value)}
              className="lastName"
              type="text"
              placeholder="Apellidos"
              required
            />
          </div>

          <div className="number1">
            <input
              onChange={(e) => setDocument(e.target.value)}
              className="number"
              type="number"
              placeholder="Documento Identidad"
            />
          </div>
          
          <div className="containerData">

          <input
            className="date"
            type="date"
            placeholder="fecha"
            onChange={(e) => setDateBirth(e.target.value)}
          />
          </div>
          <div className="containerSelect">

          <select className="desple" onChange={(e) => setSex(e.target.value)}>
            <option value="null">Genero</option>
            <option value="F">Feminino</option>
            <option value="M">Masculino</option>
          </select>
          <select
            className="desple"
            onChange={(e) => setRolUsuarios(e.target.value)}
            >
            <option value="1">Seleccione un rol</option>
            <option value="2">Estudiante</option>
            <option value="3">Docente</option>
          </select>
          <p className="message">{message}</p>
          <select
            className="desple"
            onChange={(e) => setCourse(e.target.value)}
          >
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
          
        </div>
        <p>{messageRegister}</p>
        <div className="btn_Registrar">
          <button className="Registrar" onClick={response}>
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
};