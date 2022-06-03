import './App.css';
import { useState } from 'react';

// Import Components
import { Login } from './Components/Pages/Login/Login';
import { HomeTeac } from './Components/Pages/HomeTeac/HomeTeac';
import { HomeAdmin } from './Components/Pages/HomeAdmin/HomeAdmin';
import { ProfileUsers } from './Components/Pages/ProfileUsers/ProfileUsers';
import { PrivaterRoute } from './Components/IU/PrivaterRoute/PrivaterRoute';
import { ViewUsersAdmin } from './Components/Pages/ViewUsersAdmin/ViewUsersAdmin';
import { StudentMainMenu } from './Components/Pages/StudentMainMenu/StudentMainMenu';
import { ViewUsersDocente } from './Components/Pages/ViewUsersDocente/ViewUsersDocente';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import { HomeStudent } from './Components/Pages/HomeStudent/HomeStudent';

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
            <Route path='/Perfil' element={<ProfileUsers />} />
            <Route path='/Docente' element={<HomeTeac/>} />
            {/* <Route path='/Estudiante' element={<StudentMainMenu />} /> */}
            <Route path='/Estudiante' element={<HomeStudent />} />
            <Route path='/Usuario_Docente/:name' element={<ViewUsersDocente />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;