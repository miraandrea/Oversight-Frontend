import axios from 'axios';
import React, { useState } from 'react'
import Cookies from 'universal-cookie/es6';
import { AdmProfile } from '../../IU/AdmProfile/AdmProfile'
import { AvatarProfile } from '../../IU/AvatarProfile/AvatarProfile';
import { IconProfileAdm } from '../../IU/IconProfileAdm/IconProfileAdm'
import { TextOversight } from '../../IU/TextOversight/TextOversight'
import './AdmProfileFooter.css'

export const AdmProfileFooter = () => {

  const [user, setUser] = useState("")
  const [photos, setPhotos] = useState([]);

  let rol = localStorage.getItem("rol")
  const cookies = new Cookies();

  

    if (rol === "Teacher"){
      const documento = (cookies.get("idTeacher"))
      const URL = "https://oversigthapi.azurewebsites.net/v1/teacher/" + documento
  
      axios.get(URL)
           .then((res) => setUser(res.data))
           .catch((error) => console.log(error))
    } 
    if (rol === "Administrator"){

      const cookies = new Cookies();
      const idUser = cookies.get("idAdministrador");
      axios
        .get(`https://oversigthapi.azurewebsites.net/v1/administrators/${idUser}`)
        .then((response) => getAllPhotos(response.data))
        .catch((error) => console.log(error));
    
    
      const getAllPhotos = (data) => {
        axios
          .get(`https://oversigthapi.azurewebsites.net/v1/decode/${data}`)
          .then((response) => {
            setPhotos(response.data)
            setUser(response.data)
          })
          .catch((error) => console.log(error));
      };
    }
    if (rol === "Student"){
      const documento = (cookies.get("idStudent"))
      const URL = "https://oversigthapi.azurewebsites.net/v2/students/" + documento
  
      axios.get(URL)
           .then((res) => setUser(res.data))
           .catch((error) => console.log(error))
    }
   
    console.log(photos);

  return (
    <div>

    <div className='contTextoOver'>
    <div className="iAdm">
      {/* <ImgProfile  img="ImgAdm"  /> */}
      {photos.length > 0 ? (
          photos.map((photo, index) => {
            return <AvatarProfile key={index} name={photo.nombre} photo={photo.foto} />;
          })
        ) : (
          <AvatarProfile />
        )}
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
