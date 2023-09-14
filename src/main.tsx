import React from 'react';
import ReactDOM from 'react-dom';
import SuporteColaborador from './pages/SuporteColaborador';
import ConteudoColaborador from './pages/ConteudoColaborador';
import ParabensColaborador from './pages/ParabensColaborador';
import AvatarColaborador from './pages/AvatarColaborador';
import PerfilColaborador from './pages/PerfilColaborador'; // Corrija o nome do arquivo de 'intex' para 'index'
import PesquisaSatisfacaoColaborador from './pages/PequisaSatisfacaoColaborador';
import HomeColaborador from './pages/HomeColaborador';
import VisualizarCertificadosColaborador from './pages/VisualizarCertificadosColaborador';

import './index.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CertificadoColaborador from './pages/CertificadoColaborador';
import TrilhaColaborador from './pages/TrilhaColaborador'; 

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
       
        
        <Route path='/CertificadoColaborador'  element={<CertificadoColaborador/>}/>
        <Route path='/ParabensColaborador'  element={<ParabensColaborador/>}/>
        <Route path='/SuporteColaborador'  element={<SuporteColaborador/>}/>
        <Route path='/ConteudoColaborador'  element={<ConteudoColaborador/>}/>
        <Route path='/TrilhaColaborador' element={<TrilhaColaborador/>} />
        <Route path='/AvatarColaborador'  element={<AvatarColaborador/>}/>
        <Route path='/PerfilColaborador'  element={<PerfilColaborador/>}/>
        <Route path='/PesquisaSatisfacaoColaborador'  element={<PesquisaSatisfacaoColaborador/>}/>
        <Route path='/HomeColaborador'  element={<HomeColaborador/>}/>
        <Route path='/VisualizarCertificadosColaborador'  element={<VisualizarCertificadosColaborador/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);