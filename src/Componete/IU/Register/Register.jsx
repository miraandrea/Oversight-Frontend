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
      setData(response.data[0]);
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
  const [image, setImage] = useState(null)

  let formdata = new FormData()

  const response = (e) => {
    if (rolUsuarios == 2) {
      URL = "http://localhost:4000/v4/students";
    }
    if (rolUsuarios == 3) {
      URL = "http://localhost:4000/v4/teachers";
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
    formdata.append("image", image)
    formdata.append("signature", null)

    axios
      .post(URL, formdata)
      .then((response) => userRegister(response.data))
      .catch((error) => console.log(error));
  };

  const userRegister = (data) => {
    if (data) {
      const paragrapg = "Se registro";
      setMessageRegister(paragrapg);
    }
    else {
      const paragrapg = "No se pudo registrar";
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
            <div className="photoRegister">
              <input type="file" className="inputfile" onChange={e => setImage(e.target.files[0])} />
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
                return (
                  <option key={index} value={index}>
                    {el.nombre}
                  </option>
                );
              })}
            </select>
            <p className="message">{messageRegister}</p>
          </div>
        </div>
        <div className="btn_Registrar">
          <button type="submit" className="Registrar">
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
};