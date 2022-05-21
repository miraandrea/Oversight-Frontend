import React from 'react'
import { BarMenuStudent } from '../../Layout/BarMenuStudent/BarMenuStudent';
import { Header } from "../../Layout/Header/Header";
import { MainStudent } from '../../Layout/MainStudent.jsx/MainStudent';
import { Noback } from '../../IU/PrivaterRoute/Noback';

export const StudentMainMenu = () => {
  return (
    <div>
      <Header/>
      <BarMenuStudent/>
      <MainStudent/>
      <script src={<Noback />}/>
    </div>
  )
}
