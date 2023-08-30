import React from 'react'
import ReactDOM from 'react-dom/client'

//Estilizacao
import './index.css'

//
import SuporteColaborador from './pages/SuporteColaborador'
import CertificadoColaborador from './pages/CertificadoColaborador'

//Pacotes Rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      
      <Routes>
        <Route path='/'  element={<SuporteColaborador/>}/>
        <Route path='/certificado/colaborador'  element={<CertificadoColaborador/>}/>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
