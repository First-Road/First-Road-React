import React from 'react'
import ReactDOM from 'react-dom/client'
import SuporteColaborador from './pages/SuporteColaborador';
import ConteudoColaborador from './pages/ConteudoColaborador';
import ParabensColaborador from './pages/ParabensColaborador';

//Estilizacao
import './index.css'





//Pacotes Rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CertificadoColaborador from './pages/CertificadoColaborador';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      
      <Routes>
      <Route path='/CertificadoColaborador'  element={<CertificadoColaborador/>}/>
        <Route path='/ParabensColaborador'  element={<ParabensColaborador/>}/>
        <Route path='/SuporteColaborador'  element={<SuporteColaborador/>}/>
        <Route path='/ConteudoColaborador'  element={<ConteudoColaborador/>}/>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>)