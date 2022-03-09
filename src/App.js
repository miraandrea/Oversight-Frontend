import './App.css';
import { MaintStart } from './Componete/Pege/MainStart/MainStart';
import { AdmiMainMenu } from './Componete/Pege/AdmiMainMenu/AdmiMainMenu';


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
      </Routes>
    </BrowserRouter>

  );
}

export default App;
