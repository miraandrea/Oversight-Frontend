import React, { useEffect, useState } from 'react'
import viewFotophoto from '../ImgProfile/ejemplo.jpg'
import { AiOutlineFileSearch } from "react-icons/ai";
import './ViewProfileTeacher.css'
import { useParams } from "react-router";
import axios from 'axios';
import Cookies from 'universal-cookie';

export const ViewProfileTeacher = ({ courseStudent }) => {

  console.log(courseStudent);

  const { name } = useParams()
  const [errorMessage, setErrorMessage] = useState(false);
  const [messageRegister, setMessageRegister] = useState("");

  const cookies = new Cookies();
  const documentTeacher = (cookies.get("idDocente"))

  const UrlHistory = "http://localhost:4000/v1/students/" + name + "/observers"

  const [title, setTitle] = useState("")
  const [data, setData] = useState("2022-04-11")
  const [descripTeacher, setDescripTeacher] = useState("")
  const [descripStudent, setDescripStudent] = useState("")
  const [signaTeacher, setSignaTeacher] = useState("")
  const [signaStudent, setSignaStudent] = useState("")


  const getHistory = () => {
      axios.post(UrlHistory, {
        documentTeacher: documentTeacher,
        title: title,
        date: data,
        descriptionTeacher: descripTeacher,
        descriptionStudent: descripStudent,
        signatureStudent: signaStudent,
        signatureTeacher: signaTeacher
      })
      .then((response) => token(response.data))
      .catch((error) => console.log(error))
    }

  const token = ( data ) =>{
    console.log(data);
    axios.get(`http://localhost:4000/v1/decode/${data}`)
    .then((res) => userHistory(res.data))
  }

  const userHistory = (data) => {
    const { message } = data;
    message ? showMessageHistoryError() : validateHistory();
  }

  const validateHistory = () =>{
    setErrorMessage(true)
    setMessageRegister("No se pudo agregar la anotacion");
  }

  const showMessageHistoryError = () =>{
    setMessageRegister("Se agrego la anotacion exitosamente");
  }

  return (
    <div>
      <img src={viewFotophoto} alt="photo" className="photoView1" />
      <div className='information1'>
        <p className="letra"> <b>{courseStudent.estudianteNombre} {courseStudent.estudianteApellido}</b></p>
        <p className="letra" > <b> {courseStudent.estudianteDocumento} </b> </p>
        <p className="letra" > <b>Estudiante</b> </p>
      </div>
      <div className="iconRecord1">
        <AiOutlineFileSearch />
        <p>Historial</p>
      </div>
      <div className='contTitle1'>
        <div className='Cont'>
          <div>
            <input 
              type="text" 
              name="title1"  
              placeholder='Titulo' 
              className='title1' 
              onChange={(e) => setTitle(e.target.value)}
              />
          </div>
          <div className='DataCont1'>
            <input 
              className='Data1' 
              type="datetime-local" 
              id="inputDatetime" 
              pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
              onChange={(e) => setData(e.target.value)}
              />
          </div>
          <div className='ContDeTeacher1'>
            <p>Descripcion Docente</p>
            <textarea 
              className='Stident2' 
              name="docente" 
              cols="30" 
              rows="10" 
              placeholder='Ingrese la descripcion del docente'
              onChange={(e) => setDescripTeacher(e.target.value)}
              ></textarea>
          </div>
          <div className='ContDescripstudent1'>
            <p>Descripcion Estudiante</p>
            <textarea 
              className='docent' 
              name="docente" 
              cols="30" 
              rows="10" 
              placeholder='Ingrese la descripcion del estudiante'
              onChange={(e) => setDescripStudent(e.target.value)}
              ></textarea>
          </div>
          <div className='FirmaDocent'>
            <input 
              type="text" 
              name="title" 
              placeholder='Firma Docente' 
              className='teacher' 
              onChange={(e) => setSignaTeacher(e.target.value)}
              />
          </div>
          <div className='FirmaStudent'>
            <input 
              type="text" 
              name="title" 
              placeholder='Firma Estudiante' 
              className='studet' 
              onChange={(e) => setSignaStudent(e.target.value)}
              />
          </div>
        </div>
        <p>{messageRegister}</p>
      </div>
      <button className='btnRegister' onClick={() => getHistory()}>Registrar</button>
    </div>
  )
}