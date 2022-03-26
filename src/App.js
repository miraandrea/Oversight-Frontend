import './App.css';
import { MaintStart } from './Componete/Pege/MainStart/MainStart';
import { AdmiMainMenu } from './Componete/Pege/AdmiMainMenu/AdmiMainMenu';
import { TeachMainMenu } from './Componete/Pege/TeachMainMenu/TeachMainMenu';
import { AdmiMainStudent } from './Componete/Pege/AdmiMainStudent/AdmiMainStudent';

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
        <Route path='//Estudiantes_Administrador' element={<AdmiMainStudent />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
