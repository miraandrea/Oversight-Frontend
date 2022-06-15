// import React from 'react'
// import './Profile.css'
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

// export const Profile = ({ user }) => {

//   return (
//     <div>
//         <div className="containerImgProfile">
//             <img src={user.foto} alt={user.nombre} className="imgProfile"/>
//         </div>
//         <div className='ContInfor'>
//     <Box

//     >
//     <div className='ContImput'>
//       <div className='cursor'>
//         <TextField className='TextField'  not-allowed id="demo-helper-text-misaligned-no-helper"   value={user.documento} />
//       </div>
//       <div className='cursor1'>
//         <TextField className='TextField'  id="demo-helper-text-misaligned-no-helper"  value={user.nombre} />

//       </div>
//       <div className='cursor2'>
//         <TextField className='TextField'  id="demo-helper-text-misaligned-no-helper"  value={user.apellido} />

//       </div>
//       <div className='cursor3'>
//         <TextField className='TextField'  id="demo-helper-text-misaligned-no-helper"  value={user.fecnac}/>
//       </div>
      

//       <button className='Actualizar' >Actualizar</button>
//     </div>
//     </Box>
//     <input className='prueba2' type="text" mozactionhint="next"></input>
//         </div>
//     </div>
//   )
// }


// import React from 'react'
import './Profile.css'
 import Box from '@mui/material/Box';
 import TextField from '@mui/material/TextField';

// export const Profile = ({ user }) => {

//   return (
//     <div>
//         <div className="containerImgProfile">
//             <img src={user.foto} alt={user.nombre} className="imgProfile"/>
//         </div>
//         <div className='ContInfor'>
    // <Box

    // >
    // <div className='ContImput'>
    //   <div className='cursor'>
    //     <TextField className='TextField'  not-allowed id="demo-helper-text-misaligned-no-helper"  defaultValue={user.documento} />
    //   </div>
    //   <div className='cursor1'>
    //     <TextField className='TextField'  id="demo-helper-text-misaligned-no-helper"  value={user.nombre} />

    //   </div>
    //   <div className='cursor2'>
    //     <TextField className='TextField'  id="demo-helper-text-misaligned-no-helper"  value={user.apellido} />

    //   </div>
    //   <div >
    //     <TextField className='TextField'  id="demo-helper-text-misaligned-no-helper"  value={user.fecnac}/>
    //   </div>
      

    //   <button className='Actualizar' >Actualizar</button>
    // </div>
    // </Box>
//     <input className='prueba2' type="text" mozactionhint="next"></input>
//         </div>
//     </div>
//   )
// }

import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import swal from '@sweetalert/with-react';

export const Profile = ({ user }) => {

  const UrlStudent = "http://localhost:4000/v1/students/" + user.documento;

  // newDocument, name, lastName, genre, signature,idcourse,dateOfBirth, imagen
  
  const [document, setDocument] = useState("")
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [genre, setGenre] = useState("")
  const [signature, setSignature] = useState("")
  const [idCourse, setIdCourse] = useState(3)
  const [dateOfBirth, setDateOfBirth] = useState("")
  const [image, setImage] = useState(null)

  let formdata = new FormData()

  const format = (e) => {

    formdata.append("newDocument", document)
    formdata.append("name", name)
    formdata.append("lastName", lastName)
    formdata.append("dateOfBirth", dateOfBirth)
    formdata.append("genre", genre)
    formdata.append("signature", signature)
    formdata.append("idcourse", idCourse)
    formdata.append("image", image)

    console.log(e.preventDefault());
    axios.put(UrlStudent, formdata)
    .then((response) => getToken(response.data))
    .catch((error) => console.log(error))
  }

  const getToken = (data) => {
    const urlToken = "http://localhost:4000/v1/decode/" + data;
    axios.get(urlToken).then((response) => {
      getMessage(response.status);
    });
  }
  const getMessage = (data) =>{
    console.log(data);
    if ( data == 200){
      {swal("Exito!", "Se actualizo exitosamente", "success")
      window.location.reload()}
    }else {
      swal("Oops!", "No se pudo actualizar", "error");
    }
  }
  
  const n = name;

  return (
    <div>
      <div className="containerImgProfile">
        <img src={user.foto} alt={user.nombre} className="imgProfile"/>
      </div>
      <input type="text" value={user.curso}  />  
      <form onSubmit={format}>
        <input type="file"  onChange={e => setImage(e.target.files[0])} />
        <input type="number" defaultValue={user.documento} onChange={(e) => setDocument(e.target.value)} />
        <input type="text" defaultValue={user.nombre} onChange={(e) => setName(e.target.value)} />
        <input type="text" defaultValue={user.apellido} onChange={(e) => setLastName(e.target.value)} />
        <input type="text" defaultValue={user.fecnac} onChange={(e) => setDateOfBirth(e.target.value)} />
        <input type="text" defaultValue={user.genero} onChange={(e) => setGenre(e.target.value)} />
        <input type="text" defaultValue={user.firma} onChange={(e) => setSignature(e.target.value)} />

        <button  type="submit" className='Actualizar' >Actualizar</button>
      </form>
    </div>
  )
}

