import React, { useState } from 'react'
import swal from 'sweetalert';
import { Iconos } from '../Iconos/Iconos'
import './Login.css'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const parrafo = "El usuario o contraseña son incorrectos"
export const Login = (parrafo) => {

    const URL = 'http://localhost:8080/api/authenticate'

    const[username, setUsername] = useState()
    const[password, setPassword] = useState()

    const response = (e) => {
        e.preventDefault()
        axios.post(URL,{
            username: username,
            password: password
        })
        .then( response => response)
        .then( data => console.log(data) )
    }
    
return (
    <div className='container'>
            <Iconos />
        <div className='entry'>
            <input onChange={e=> setUsername(e.target.value)}  type="text" name="username" required placeholder='Usuario' />
            <input onChange={e=> setPassword(e.target.value)} type="password" name='password' required placeholder='Contraseña' />
            <button onClick={response} className='button1' type="submit" value="Iniciar Sesión">Iniciar Sesión </button>
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
    swal({
        buttons: {
            confirm: { text: "Entendido", className: "swal-button1" },
        },
        title: "Querido Usuario",
        text: "Su usuario y contraseña es el documento de identidad"
    })
    

}