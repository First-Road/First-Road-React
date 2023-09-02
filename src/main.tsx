import React from 'react'
import ReactDOM from 'react-dom/client'
import SuporteColaborador from './pages/SuporteColaborador';
import ConteudoColaborador from './pages/ConteudoColaborador';
import ParabensColaborador from './pages/ParabensColaborador';
import AvatarColaborador from './pages/AvatarColaborador';

//Estilizacao
import './index.css'





//Pacotes Rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CertificadoColaborador from './pages/CertificadoColaborador';
import TrilhaColaborador from './pages/TrilhaColaborador';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      
      <Routes>
      <Route path='/CertificadoColaborador'  element={<CertificadoColaborador/>}/>
        <Route path='/ParabensColaborador'  element={<ParabensColaborador/>}/>
        <Route path='/SuporteColaborador'  element={<SuporteColaborador/>}/>
        <Route path='/ConteudoColaborador'  element={<ConteudoColaborador/>}/>
        <Route path='/TrilhaColaborador'  element={<TrilhaColaborador/>}/>
        <Route path='/AvatarColaborador'  element={<AvatarColaborador/>}/>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>)