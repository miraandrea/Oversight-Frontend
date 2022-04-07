import React, { useState } from 'react'
import swal from 'sweetalert';
import logo from '../../../Img/logoOverSight.jpg'
import { TiLockClosed } from "react-icons/ti";
import { IoPersonAddOutline } from "react-icons/io5";
import axios from 'axios'
import './Login.css'

const parrafo = "El usuario o contraseña son incorrectos"

export const Login = (parrafo) => {

    const URL = "http://localhost:4000/v1/authenticate";

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

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
        console.log(data.authentication)
        if (data.authentication) {
            window.location.href = "/Administrador"
        }
        else {
            console.log("el usuario es incorrecto")
        }
    }

    return (
        <div>
            <div className='container'>
                <div className='entry'>
                    <div className='contPadre'>
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
        )}

const MostrarAlerta = () => {
    swal({
        buttons: {
            confirm: { text: "Entendido", className: "swal-button1" },
        },
        title: "Querido Usuario",
        text: "Su usuario y contraseña es el documento de identidad"
    })
}