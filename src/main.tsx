import React from 'react'
import ReactDOM from 'react-dom/client'
import PerfilConectado from './pages/PerfilConectadoStatic';
//Estilizacao
import './index.css'

//


//Pacotes Rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      
      <Routes>
        <Route path='/perfil'  element={<PerfilConectado/>}/>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)