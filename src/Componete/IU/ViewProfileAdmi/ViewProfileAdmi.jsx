import React, { useEffect, useState } from 'react'
import viewFotophoto from '../ImgProfile/ejemplo.jpg'
import { AiOutlineFileSearch } from "react-icons/ai";
import './ViewProfileAdmi.css'
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useParams } from "react-router";
import { CardStudent } from '../CardStudent/CardStudent';

export const ViewProfileAdmi = () => {

  //historial 

  const { name } = useParams()
  const [record, setRecord] = useState([""]);

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

  console.log(record.descripcion);

  return (
    <div>
      <img src={viewFotophoto} alt="photo" className="photoView" />
      <div className='information'>
        <p>Paola Andrea Mira</p>
        <p>1007603426</p>
        <p>Docente</p>
      </div>
      <div className="iconRecord">
        <AiOutlineFileSearch />
        <p>Historial</p>
      </div>
      <div className='OverFlow'>
      <div className="cards1" >
        <div className="cardInfo1">
          {record.map((record, index) => (
            <CardStudent key={index} record={record}/>
          ))}
        </div>
      </div>
      </div>
      <div className="btn_Cancel">
        <button className="update">Actualizar</button>
        <button className="disable">Deshabilitar</button>
      </div>
    </div>
  )
}