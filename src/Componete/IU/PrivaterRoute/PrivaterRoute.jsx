import React from 'react'
import axios from 'axios'
import { Navigate, Outlet } from 'react-router'

export const PrivaterRoute = ({ isLogged }) => {
  return isLogged ? <Outlet /> : <Navigate to='/' />
}
