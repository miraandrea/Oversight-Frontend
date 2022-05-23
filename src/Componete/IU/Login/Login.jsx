import './Login.css'
import Swal from 'sweetalert2'
import axios from 'axios'
import swal from 'sweetalert';
import React, { useState } from 'react'
import Cookies from 'universal-cookie/es6';
import { TiLockClosed } from "react-icons/ti";
import logo from '../../../Img/Logo.jpg'
import { IoPersonAddOutline } from "react-icons/io5";
import { TextOversight } from '../../IU/TextOversight/TextOversight'

export const Login = () => {

    const URL = "http://localhost:4000/v5/authenticate";

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
            .then(response => {
                userLogged(response.data)
                window.localStorage.setItem('authentication', response.data.authentication)
                window.localStorage.setItem('rol', response.data.rol)
            })
            .catch(error => console.log(error))
    }

    const userLogged = (data) => {
        if (data.rol === "Administrator") {
            var respuesta = data.data[0]
            cookies.set('idAdministrador', respuesta.documento, { path: "/" })
            window.location.href = "/Administrador"
        }
        if (data.rol === "Teacher") {
            var respuesta = data.data[0]
            cookies.set('idTeacher', respuesta.documento, { path: "/" })
            window.location.href = "/Docente"
        }
        if (data.rol === "Student") {
            var respuesta = data.data[0]
            cookies.set('idStudent', respuesta.documento, { path: "/" })
            window.location.href = "/Estudiante"
        }
        else {
            const paragrapg = "El usuario o contraseña son incorretos"
            setMessage(paragrapg)
        }
    }
    //btn bloquiado 
    function nobackbutton(){
        window.location.hash = "no-back-button";
        window.location.hash = "Again-No-back-button";
    
        window.onhashchange = function () {window.location.hash = "no-back-button";}
    }

    return (
        <div>
            {nobackbutton()}
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
                    <div onClick={cargar} className="cargar" >
                        <button onClick={validateLogin} class="btn btn-white btn-				 animate" type="submit" value="Iniciar Sesión">Iniciar Sesión </button>
                    </div>
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

const cargar = () => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Cargando...',
        showConfirmButton: false,
        timer: 5000,
        background: ''
    })
}
