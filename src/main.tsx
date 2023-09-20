
//Estilizacao
import './index.css'

//Pacotes Rotas
import React from 'react'
import ReactDOM from 'react-dom/client'
import SuporteColaborador from './pages/SuporteColaborador';
import ConteudoColaborador from './pages/ConteudoColaborador';
import ParabensColaborador from './pages/ParabensColaborador';
import AvatarColaborador from './pages/AvatarColaborador';
import PerfilColaborador from './pages/PerfilColaborador/intex';
import PesquisaSatisfacaoColaborador from './pages/PequisaSatisfacaoColaborador';
import HomeColaborador from './pages/HomeColaborador';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CertificadoColaborador from './pages/CertificadoColaborador';
import TrilhaColaborador from './pages/TrilhaColaborador';
import CadastroColaborador from './pages/Gestor/CadastroColaborador1';
import GestaoDashboard from './pages/Gestor/GestaoDashboard';
import GestaoCadastro from './pages/Gestor/GestaoCadastro';
import PerfilGestor from './pages/Gestor/PerfilGestor';
import SuporteGestor from './pages/Gestor/SuporteGestor';
import TrilhaGestor from './pages/Gestor/TrilhaGestor';
import EditarColaborador from './pages/Gestor/EditarColaborador';
import Dashboard from './pages/Gestor/Dashboard';



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
        <Route path='/PerfilColaborador'  element={<PerfilColaborador/>}/>
        <Route path='/PesquisaSatisfacaoColaborador'  element={<PesquisaSatisfacaoColaborador/>}/>
        <Route path='/HomeColaborador'  element={<HomeColaborador/>}/>  
        <Route path='/perfil/gestor' element={<PerfilGestor/>}/>
        <Route path='/gestao/cadastro' element={<GestaoCadastro/>}/>
        <Route path='/cadastro/colaborador' element={<CadastroColaborador/>}/>
        <Route path='/gestao/dashboard' element={<GestaoDashboard/>}/>
        <Route path='/suporte/gestor' element={<SuporteGestor/>}/>
        <Route path='/trilha/gestor' element={<TrilhaGestor/>}/>
        <Route path='/editar/colaborador' element={<EditarColaborador/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>

      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
) 
