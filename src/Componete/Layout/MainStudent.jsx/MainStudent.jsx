import React, { useEffect, useState } from 'react'
import { CardStudent } from '../../IU/CardStudent/CardStudent'
import Cookies from 'universal-cookie/es6';
import axios from 'axios';
import jwtDecode from "jwt-decode";
import './MainStudent.css'
import { AiOutlineFileSearch } from "react-icons/ai";

export const MainStudent = () => {

  const cookies = new Cookies();

  const documento = (cookies.get("idStudent"))

  console.log(documento);

  const [record, setRecord] = useState([""]);

  const UrlTokenRecord = "http://localhost:4000/v2/students/" + documento + "/observers";

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
    <div className="studentCard">
      <div className="history">
        <AiOutlineFileSearch className='FileSearch' />
        <h3>Historial</h3>
      </div>
      {record.map((record, index) => (
        <CardStudent key={index} record={record}/>
      ))}
    </div>
  )
}