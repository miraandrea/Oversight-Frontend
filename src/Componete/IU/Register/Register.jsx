import React, { useEffect, useState } from "react";
import { IoMdPersonAdd } from "react-icons/io";
import "./Register.css";
import axios from "axios";

export const Register = () => {

  //token course
  const UrlTokenCourse = "http://localhost:4000/v3/courses";

  useEffect(() => {
    const getCourses = () => {
      axios.get(UrlTokenCourse)
        .then((res) => user(res.data))
        .catch((error) => console.log(error))

    };
    getCourses();
  }, []);

  // Rol courses
  const [data, setData] = useState([" "]);

  const user = (data) => {
    const urlCourse = "http://localhost:4000/v1/decode/" + data;
    axios.get(urlCourse).then((response) => {

      console.log(response.data[0]);
      console.log("response", Object.keys(response.data[0]).length);
      let dataArray = [];
      for (let index = 0; index < Object.keys(response.data[0]).length; index++) {
        console.log("response2");
        dataArray.push(response.data[0][index]);
      }
      setData(dataArray);
    });
  }

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
  const [studentImage, setStudentImage] = useState(null)

  let formdata = new FormData()

  const response = (e) => {
    if (rolUsuarios == 2) {
      console.log("Estudiante");
      URL = "http://localhost:4000/v3/students";
    }
    if (rolUsuarios == 3) {
      console.log("Docente");
      URL = "http://localhost:4000/v3/teachers";
    }
    if (rolUsuarios == "") {
      const paragrapg = "Es necesario escoger el rol";
      setMessage(paragrapg);
    }
    console.log(URL);
    e.preventDefault();
    formdata.append("document", document)
    formdata.append("name", name)
    formdata.append("lastName", lastName)
    formdata.append("dateOfBirth", dateBirth)
    formdata.append("genre", sex)
    formdata.append("idcourse", course)
    formdata.append("studentImage", studentImage)
    formdata.append("signature", null)

    axios
      .post(URL, formdata)
      .then((response) => userRegister(response.data))
      .catch((error) => console.log(error));
  };

  const userRegister = (data) => {
    if (data) {
      const paragrapg = "se registro";
      setMessageRegister(paragrapg);
    }
  };

  return (
    <div>
      <form onSubmit={response}>
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
              required
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
            <div className="photoGroup">
              <input type="file" onChange={e => setStudentImage(e.target.files[0])} />
            </div>
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
                console.log(data);
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
          <button type="submit" className="Registrar">
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
};