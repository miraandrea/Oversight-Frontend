import './App.css';
import { useState } from 'react';

// Import Components
import { PrivaterRoute } from './Components/IU/PrivaterRoute/PrivaterRoute';
import { AdmSeeProfile } from './Components/Pages/AdmSeeProfile/AdmSeeProfile';
import { TeachMainMenu } from './Components/Pages/TeachMainMenu/TeachMainMenu';
import { StudentMainMenu } from './Components/Pages/StudentMainMenu/StudentMainMenu';
import { Login } from './Components/Pages/Login/Login';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import { HomeAdmin } from './Components/Pages/HomeAdmin/HomeAdmin';
import { ViewUsersAdmin } from './Components/Pages/ViewUsersAdmin/ViewUsersAdmin';

function App() {

  let authentication = localStorage.getItem("authentication")
  const [isLogged] = useState(authentication)

  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<Login />} />
          <Route element={<PrivaterRoute isLogged={isLogged} />} >
            <Route path='/Administrador' element={<HomeAdmin />} />
            <Route path='/Usuario_Administrador/:name' element={<ViewUsersAdmin />} />
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