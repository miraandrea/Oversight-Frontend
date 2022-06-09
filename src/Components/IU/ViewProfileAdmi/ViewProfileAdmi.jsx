import React, { useEffect, useState } from 'react'
import viewFotophoto from '../ImgProfile/ejemplo.jpg'
import { AiOutlineFileSearch } from "react-icons/ai";
import './ViewProfileAdmi.css'
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useParams } from "react-router";
import { CardStudent } from '../CardStudent/CardStudent';
import foto from '../ImgProfile/group.webp'

export const ViewProfileAdmi = ({ courseStudent }) => {

  //historial 

  const { name } = useParams()
  const [record, setRecord] = useState([]);

  const UrlTokenRecord = "http://localhost:4000/v2/students/" + name + "/observers";

  useEffect(() => {
    const getRecord = () => {
      axios.get(UrlTokenRecord)
        .then((res) => {
          const token = jwtDecode(res.data)
          setRecord(token.results)
        })
        .catch((error) => console.log(error))
    };
    getRecord();
  }, []);

  return (
    <div>
      <img src={courseStudent.fotoEstudiante || foto} alt="photo" className="photoView" />
      <div className="centerInfor">
        <div className='information'>
          <p>{courseStudent.estudianteNombre} {courseStudent.estudianteApellido}</p>
          <p>{courseStudent.estudianteDocumento }</p>
          <p>Estudiante</p>
        </div>
      </div>
      <div className="iconRecord">
        <AiOutlineFileSearch />
        <p>Historial</p>
      </div>
      <div className="centerOver">
        <div className='OverFlow'>
        <div className="cards1" >
          <div className="cardInfo1">
            {record.length > 0 ? (
              record.map((course2, index) => (
                <CardStudent key={index} course2={course2}/>
              ))
            ): (
              <p>No tiene anotaciones</p>
            )}
          </div>
        </div>
        </div>
      </div>
      <div className="prueba">
        <div className="centerBtn">
          <div className="btn_Cancel1">
            <button className="update">Actualizar</button>
            <button className="disable">Deshabilitar</button>
          </div>
        </div>
      </div>
    </div>
  )
}