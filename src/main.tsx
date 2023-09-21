import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";


//Estilizacao
import './index.css'

//Pacotes Rotas

import PerfilConectado from './pages/PerfilConectadoStatic';
import EditarPerfil from './pages/EditarPerfil';
import CadastrarPerfil from './pages/CadastrarPerfil';
import CadastrarGestor from './pages/CadrastrarGestor';
import GestaoUO from './pages/GestaoUO';
import GestaoUsuario from './pages/GestaoUsuario';
import Login from './pages/Login';
import Termos from './pages/Termos';
import ResetaSenha from './pages/ResetaSenha';
import SuporteColaborador from './pages/SuporteColaborador';
import ConteudoColaborador from './pages/ConteudoColaborador';
import ParabensColaborador from './pages/ParabensColaborador';
import AvatarColaborador from './pages/AvatarColaborador';
import PerfilColaborador from './pages/PerfilColaborador/intex';
import PesquisaSatisfacaoColaborador from './pages/PequisaSatisfacaoColaborador';
import HomeColaborador from './pages/HomeColaborador';
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
import VisualizarCertificadosColaborador from './pages/VisializarCertificadosColaborador/Index';
import CadastroUNidade from './pages/CadastroUnidade';
import GestaoUnidade from './pages/GestaoUnidade';
import CadastroUO from './pages/CadastroUO';
 import CadastroConteudo from './pages/CadastroConteudo';
 import CadastroTrilha from './pages/CadastroTrilha';





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
        <Route path='/login' element={<Login />} />
        <Route path='/admTermos' element={<Termos />} />
        <Route path='/resetaSenha' element={<ResetaSenha />} />      
        <Route path='/perfil' element={<PerfilConectado />} />
        <Route path='/editar' element={<EditarPerfil />} />
        <Route path='/cadastrar' element={<CadastrarPerfil />} />
        <Route path='/gestaoUO' element={<GestaoUO />} />
        <Route path='/cadastroGestor' element={<CadastrarGestor />} />
        <Route path='/VisualizarCertificadosColaborador' element={<VisualizarCertificadosColaborador />} />
        <Route path='/gestaoUsuario' element={<GestaoUsuario />} />
        <Route path='/cadastroUnidade' element={<CadastroUNidade/>} />
        <Route path='/gestaoUnidade' element={<GestaoUnidade />} />
        <Route path='/cadastroUO' element={<CadastroUO/>} />
        <Route path='/cadastroConteudo' element={<CadastroConteudo/>} />
        <Route path='/cadastroTrilha' element={<CadastroTrilha/>} />


      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
) 
