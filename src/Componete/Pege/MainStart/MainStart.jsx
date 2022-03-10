import React from 'react'
import { Session } from '../../Layout/Session/Session'
import { NavLink } from 'react-router-dom'

export const MaintStart = () => {
  return (
    <div>
    <Session/>
    <NavLink to='/Docente'><p>docente</p></NavLink>
    </div>
  )
}