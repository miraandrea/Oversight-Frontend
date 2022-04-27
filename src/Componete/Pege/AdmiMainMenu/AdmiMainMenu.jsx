import React from 'react'
import { BarMenu } from '../../Layout/BarMenu/BarMenu'
import { Header } from '../../Layout/Header/Header'
import { Main } from '../../Layout/Main/Main'
import '../AdmiMainMenu/AdmiMainMenu.css'

  export const AdmiMainMenu = () => {

  return (
    <div className='conter'>
    <Header ></Header>
      <BarMenu ></BarMenu>
      <Main ></Main>
  
    </div>
  )
}
