import React from 'react'
import './Profile.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const Profile = ({ user }) => {
  return (
    <div>
        <div className="containerImgProfile">
            <img src={user.foto} alt={user.nombre} className="imgProfile"/>
        </div>
        <div className='ContInfor'>





    <Box

    >
    <div className='ContImput'>
      <div className='cursor'>
        <TextField className='TextField'  not-allowed id="demo-helper-text-misaligned-no-helper"   value={user.documento} />
      </div>
      <div className='cursor1'>
        <TextField className='TextField'  id="demo-helper-text-misaligned-no-helper"  value={user.nombre} />

      </div>
      <div className='cursor2'>
        <TextField className='TextField'  id="demo-helper-text-misaligned-no-helper"  value={user.apellido} />

      </div>
      <div className='cursor3'>
        <TextField className='TextField'  id="demo-helper-text-misaligned-no-helper"  value={user.fecnac}/>

      </div>
      

      <button className='Actualizar' >Actualizar</button>
    </div>
    </Box>
    <input className='prueba2' type="text" mozactionhint="next"></input>
        </div>
    </div>
  )
}
