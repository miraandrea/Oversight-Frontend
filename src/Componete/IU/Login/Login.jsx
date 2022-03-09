import React from 'react'
import swal from 'sweetalert';
import { Iconos } from '../Iconos/Iconos'
import './Login.css'
import { NavLink } from 'react-router-dom'

export const Login = () => {
return (
    <div className='container'>
            <Iconos />
        <div className='entry'>
            <input  type="text" name="username" required placeholder='Usuario' />
            <input type="password" name='password' required placeholder='Contraseña' />
            <NavLink to='/Administrador'><button className='button1' type="submit" value="Iniciar Sesión">Iniciar Sesión </button></NavLink>
        </div>
            <h4>O</h4>
        <div className='line'>
            <hr className='line1'/> <hr className='line3'/>
        </div> 
        <div className='passwoard' >

        <h3 onClick={()=>MostrarAlerta()}>¿Olvidaste tu Contraseña?</h3>
        </div>
        <div className='copy'>
            <hr className='line2'/>
        </div>
        <div className='Copy2'>
            &copy; 2021 Oversight

        </div>
    </div>
)
}

const MostrarAlerta=()=>{
    swal("Su usuario y contraseña es el documento de identidad")

}