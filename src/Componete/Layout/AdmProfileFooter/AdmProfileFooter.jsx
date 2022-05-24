import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie/es6';
import { AdmProfile } from '../../IU/AdmProfile/AdmProfile'
import { IconProfileAdm } from '../../IU/IconProfileAdm/IconProfileAdm'
import { ImgProfile } from '../../IU/ImgProfile/ImgProfile'
import { TextOversight } from '../../IU/TextOversight/TextOversight'
import './AdmProfileFooter.css'

export const AdmProfileFooter = () => {

  const [user, setUser] = useState("")

  let rol = localStorage.getItem("rol")
  const cookies = new Cookies();

  

    if (rol === "Teacher"){
      const documento = (cookies.get("idTeacher"))
      const URL = "http://localhost:4000/v1/teacher/" + documento
  
      axios.get(URL)
           .then((res) => setUser(res.data))
           .catch((error) => console.log(error))
    } 
    if (rol === "Administrator"){
      const documento = (cookies.get("idAdministrador"))
      const URL = "http://localhost:4000/v1/administrators/" + documento
  
      axios.get(URL)
           .then((res) => setUser(res.data))
           .catch((error) => console.log(error))
    }
    if (rol === "Student"){
      const documento = (cookies.get("idStudent"))
      const URL = "http://localhost:4000/v2/students/" + documento
  
      axios.get(URL)
           .then((res) => setUser(res.data))
           .catch((error) => console.log(error))
    }
   
  

  return (
    <div>

    <div className='contTextoOver'>
    <div className="iAdm">
      <ImgProfile  img="ImgAdm"  />
    </div>
    <div className='TextOver-Profile'>
    <TextOversight text="oversight-profile" />

    </div>

    </div>
    <div className="hrtop">
      <AdmProfile user={user}/>
      </div>
      <IconProfileAdm  />

    </div>
  )
}
