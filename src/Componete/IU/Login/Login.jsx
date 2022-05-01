import './Login.css'
import axios from 'axios'
import swal from 'sweetalert';
import React, { useState } from 'react'
import Cookies from 'universal-cookie/es6';
import { TiLockClosed } from "react-icons/ti";
import logo from '../../../Img/Logo.jpg'
import { IoPersonAddOutline } from "react-icons/io5";
import { TextOversight } from '../../IU/TextOversight/TextOversight'

export const Login = () => {



    const URL = "http://localhost:4000/v4/authenticate";

    const cookies = new Cookies();

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    const validateLogin = (e) => {
        e.preventDefault()
        axios.post(URL, {
            username: username,
            password: password
        })
            .then(response => userLogged(response.data))
            .catch(error => console.log(error))
    }

    const userLogged = (data) => {
        if (data.rol === "Administrator") {
            var respuesta = data.data[0]
            cookies.set('idadministrador', respuesta.idadministrador, { path: "/" })
            cookies.set('foto', respuesta.foto, { path: "/" })
            cookies.set('nombre', respuesta.nombre, { path: "/" })
            cookies.set('apellido', respuesta.apellido, { path: "/" })
            cookies.set('fecha', respuesta.fecnac, { path: "/" })
            window.location.href = "/Administrador"
        }
        if (data.rol === "Teacher") {
            var respuesta = data.data[0]
            cookies.set('idadministrador', respuesta.idadministrador, { path: "/" })
            cookies.set('foto', respuesta.foto, { path: "/" })
            cookies.set('nombre', respuesta.nombre, { path: "/" })
            cookies.set('apellido', respuesta.apellido, { path: "/" })
            cookies.set('fecha', respuesta.fecnac, { path: "/" })
            cookies.set('sexo', respuesta.sexo, { path: "/" })
            cookies.set('firma', respuesta.firma, { path: "/" })
            window.location.href = "/Docente"
        }
        if (data.rol === "Student") {
            var respuesta = data.data[0]
            cookies.set('idadministrador', respuesta.idadministrador, { path: "/" })
            cookies.set('foto', respuesta.foto, { path: "/" })
            cookies.set('nombre', respuesta.nombre, { path: "/" })
            cookies.set('apellido', respuesta.apellido, { path: "/" })
            cookies.set('fecha', respuesta.fecnac, { path: "/" })
            cookies.set('sexo', respuesta.sexo, { path: "/" })
            cookies.set('firma', respuesta.firma, { path: "/" })
            // window.location.href = "/Estudiante"
        }
        else {
            const paragrapg = "El usuario o contraseña son incorretos"
            setMessage(paragrapg)
        }
    }
    return (
        <div>
            <div className='container'>
                <div className='entry'>
                    <div className='contPadre'>
                    <TextOversight text="textOversight" />
                        <div className='user'>
                            <IoPersonAddOutline className='username' />
                            <input id="input1" onChange={e => setUsername(e.target.value)} type="text" name="username" required placeholder='Usuario' />
                        </div>
                        <div className='candado'>
                            <TiLockClosed className='padlock' />
                            <input id="input2" onChange={e => setPassword(e.target.value)} type="password" name='password' required placeholder='Contraseña' />
                        </div>
                    </div>
                    <button onClick={validateLogin} className='button1' type="submit" value="Iniciar Sesión">Iniciar Sesión </button>
                </div>
                <p className='paragrapg'>{message}</p>
                <div className='containerline'>
                    <div className='cero'>
                        <h4>O</h4>
                    </div>
                    <div className='line'>
                        <hr className='line1' />
                        <hr className='line3' />
                    </div>
                </div>
                <div className='passwoard' >
                    <h3 onClick={() => MostrarAlerta()}>¿Olvidaste tu Contraseña?</h3>
                </div>
                <div className='copy'>
                    <hr className='line2' />
                </div>
                <div className='Copy2'>
                    &copy; 2021 Oversight
                </div>
            </div>
            <div className='conteinerLogo'>
                <div className='logoCon'>
                    <img className='logo' src={logo}></img>
                </div>
            </div>
        </div>
    )
}

const MostrarAlerta = () => {
    swal({
        buttons: {
            confirm: { text: "Entendido", className: "swal-button1" },
        },
        title: "Querido Usuario",
        text: "Su usuario y contraseña es el documento de identidad"
    })
}