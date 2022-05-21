import './App.css';
import { MaintStart } from './Componete/Pege/MainStart/MainStart';
import { AdmiMainMenu } from './Componete/Pege/AdmiMainMenu/AdmiMainMenu';
import { TeachMainMenu } from './Componete/Pege/TeachMainMenu/TeachMainMenu';
import { AdmiMainStudent } from './Componete/Pege/AdmiMainStudent/AdmiMainStudent';
import { AdmSeeProfile } from './Componete/Pege/AdmSeeProfile/AdmSeeProfile';
import { StudentMainMenu } from './Componete/Pege/StudentMainMenu/StudentMainMenu';

import {
  BrowserRouter,
  Routes,
  Route
  
} from "react-router-dom"
import { PrivaterRoute } from './Componete/IU/PrivaterRoute/PrivaterRoute';
import { useState } from 'react';
import axios from 'axios';
import { CardAdmi } from './Componete/IU/CardAdmi/CardAdmi';
import { ViewProfileAdmi } from './Componete/IU/ViewProfileAdmi/ViewProfileAdmi';

function App() {
  
  let authentication = localStorage.getItem('authentication')
  const [isLogged] = useState(authentication)

  console.log(isLogged);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route>
        <Route path='/' element={<MaintStart/>}/>
        <Route element={<PrivaterRoute isLogged={isLogged} />} >
          <Route path='/Administrador' element={<AdmiMainMenu />} />
          <Route path='/Estudiantes_Administrador/:name' element={<AdmiMainStudent />} />
          <Route path='/Perfil/Administrador' element={<AdmSeeProfile />} />
          <Route path='/Docente' element={<TeachMainMenu />} />
          <Route path='/Estudiante' element={<StudentMainMenu />} />
        </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
