import React from 'react'
import './ImgProfile.css'
import Logo from './ejemplo.jpg'

export const ImgProfile = () => {
  return (
    <div className='perfile'>
        <img src={Logo} alt="Perfile" className='imgperfile'/>
    </div>
  )
}
