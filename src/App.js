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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MaintStart/>} />
        <Route path='/Administrador' element={<AdmiMainMenu />} />
        <Route path='/Docente' element={<TeachMainMenu />} />
        <Route path='/Estudiante' element={<StudentMainMenu />} />
        <Route path='/Estudiantes_Administrador/:name' element={<AdmiMainStudent />} />
        <Route path='/Perfil/Administrador' element={<AdmSeeProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
