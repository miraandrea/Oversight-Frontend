import './App.css';
import { useState } from 'react';

// Import Components
import { AdmiMainMenu } from './Componete/Pages/AdmiMainMenu/AdmiMainMenu';
import { PrivaterRoute } from './Componete/IU/PrivaterRoute/PrivaterRoute';
import { AdmSeeProfile } from './Componete/Pages/AdmSeeProfile/AdmSeeProfile';
import { TeachMainMenu } from './Componete/Pages/TeachMainMenu/TeachMainMenu';
import { AdmiMainStudent } from './Componete/Pages/AdmiMainStudent/AdmiMainStudent';
import { StudentMainMenu } from './Componete/Pages/StudentMainMenu/StudentMainMenu';
import { Login } from './Componete/Pages/Login/Login';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

function App() {

  let authentication = localStorage.getItem("authentication")
  const [isLogged] = useState(authentication)

  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<Login />} />
          <Route element={<PrivaterRoute isLogged={isLogged} />} >
            <Route path='/Administrador' element={<AdmiMainMenu />} />
            <Route path='/Estudiantes_Administrador/:name' element={<AdmiMainStudent />} />
            <Route path='/Perfil' element={<AdmSeeProfile />} />
            <Route path='/Docente' element={<TeachMainMenu />} />
            <Route path='/Estudiante' element={<StudentMainMenu />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;