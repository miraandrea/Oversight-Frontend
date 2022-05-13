import React from 'react'
import { BarMenuStudent } from '../../Layout/BarMenuStudent/BarMenuStudent';
import { Header } from "../../Layout/Header/Header";
import { MainStudent } from '../../Layout/MainStudent.jsx/MainStudent';
import { TextOversight } from '../../IU/TextOversight/TextOversight'
import { ImgProfile } from '../../IU/ImgProfile/ImgProfile'

export const StudentMainMenu = () => {
  return (
    <div>
      <Header/>
      {/* <div className="headerStudent">
        <div className="contTitleStudent">
          <TextOversight text='textStudent'/>
        </div>
        <div className="contImageStudent">
          <ImgProfile img='imgStudent'/>
        </div>
      </div> */}
      <BarMenuStudent/>
      <MainStudent/>
    </div>
  )
}
