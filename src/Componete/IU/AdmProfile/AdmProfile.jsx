import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie/es6';
import './AdmProfile.css'

export const AdmProfile = ({ user }) => {

  console.log(user);
  const [information, setInformation] = useState([])

  // const aa = () =>{

  //   if (rol === "Teacher"){
  //     const documento = (cookies.get("idTeacher"))
  //     const URL = "http://localhost:4000/v1/teacher/" + documento
  
  //     axios.get(URL)
  //          .then((res) => setUser(res.data))
  //          .catch((error) => console.log(error))
  //   } 
  //   if (rol === "Administrator"){
  //     const documento = (cookies.get("idAdministrador"))
  //     const URL = "http://localhost:4000/v1/administrators/" + documento
  
  //     axios.get(URL)
  //          .then((res) => setUser(res.data))
  //          .catch((error) => console.log(error))
  //   }
  //   if (rol === "Student"){
  //     const documento = (cookies.get("idStudent"))
  //     const URL = "http://localhost:4000/v1/student/" + documento
  
  //     axios.get(URL)
  //          .then((res) => setUser(res.data))
  //          .catch((error) => console.log(error))
  //   }
   
  // }
  
  const UrlToken = "http://localhost:4000/v1/decode/"+ user ;

  console.log(UrlToken);

  useEffect(() => {
    const getToken = () => {
      axios.get(UrlToken)
      .then((res) => userInformation(res.data[0]))
      .catch((error) => console.log(error))

    }
    getToken();
  },[]);

  const userInformation = (data) => {
    setInformation(data);
  }

  console.log(information);
  console.log(information.documento);
  return (
    <div className='Text'>
      <div className='Texto1'>
        <p>Documento: {information.documento}</p>
        <p>Nombre: {information.nombre}</p>
        <p>Apellido: {information.apellido}</p>
        <p>Fecha: {information.fecha}</p>
      </div>
    </div>
  )
}
