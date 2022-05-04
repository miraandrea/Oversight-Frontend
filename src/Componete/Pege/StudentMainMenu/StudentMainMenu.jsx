import React from 'react'
import { BarMenuStudent } from '../../Layout/BarMenuStudent/BarMenuStudent';
import { Header } from "../../Layout/Header/Header";
import { MainStudent } from '../../Layout/MainStudent.jsx/MainStudent';


export const StudentMainMenu = () => {
  return (
    <div>
      <Header/>
      <BarMenuStudent/>
      <MainStudent/>
    </div>
  )
}
