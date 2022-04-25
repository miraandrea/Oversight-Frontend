import React from 'react'
import { Login } from '../../IU/Login/Login'
import { TextOversight } from '../../IU/TextOversight/TextOversight';
import './Session.css'

export const Session = () => {
  return (
    <div>
      <div className='contText'>
      <TextOversight text="textOversight" />

      </div>
      <Login />
    </div>
  )
}