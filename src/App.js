import './App.css';
import { useState } from 'react';

// Import Components
import { AdmiMainMenu } from './Components/Pages/AdmiMainMenu/AdmiMainMenu';
import { PrivaterRoute } from './Components/IU/PrivaterRoute/PrivaterRoute';
import { AdmSeeProfile } from './Components/Pages/AdmSeeProfile/AdmSeeProfile';
import { TeachMainMenu } from './Components/Pages/TeachMainMenu/TeachMainMenu';
import { AdmiMainStudent } from './Components/Pages/AdmiMainStudent/AdmiMainStudent';
import { StudentMainMenu } from './Components/Pages/StudentMainMenu/StudentMainMenu';
import { Login } from './Components/Pages/Login/Login';

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