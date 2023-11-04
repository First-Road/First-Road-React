import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route,} from "react-router-dom";



//Estilizacao
import './index.css'

//Pacotes Rotas
//import telas de login
import Login from './pages/Login';
import Termos from './pages/Termos';
import ResetaSenha from './pages/ResetaSenha';

//import telas Adm
import CadastroUNidade from './pages/Adm/CadastroUnidade';
import ConteudoColaborador from './pages/Adm/ConteudoColaborador';
import GestaoUnidade from './pages/Adm/GestaoUnidade';
import CadastroUO from './pages/Adm/CadastroUO';
import CadastroConteudo from './pages/Adm/CadastroConteudo';
import CadastroTrilha from './pages/Adm/CadastroTrilha';
import PerfilConectado from './pages/Adm/PerfilConectadoStatic';
import EditarPerfil from './pages/Adm/EditarPerfil';
import CadastrarPerfil from './pages/Adm/CadastrarPerfil';
import CadastrarGestor from './pages/Adm/CadrastrarGestor';
import GestaoUO from './pages/Adm/GestaoUO';
import GestaoUsuario from './pages/Adm/GestaoUsuario';

//import telas Colaborador
import SuporteColaborador from './pages/Colaborador/SuporteColaborador';
import ParabensColaborador from './pages/Colaborador/ParabensColaborador';
import AvatarColaborador from './pages/Colaborador/AvatarColaborador';
import PerfilColaborador from './pages/Colaborador/PerfilColaborador/intex';
import PesquisaSatisfacaoColaborador from './pages/Colaborador/PequisaSatisfacaoColaborador';
import HomeColaborador from './pages/Colaborador/HomeColaborador';
import CertificadoColaborador from './pages/Colaborador/CertificadoColaborador';
import VisualizarCertificadosColaborador from './pages/Colaborador/VisualizarCertificadosColaborador/Index';
import TrilhaColaborador from './pages/Colaborador/TrilhaColaborador';

//import telas Gestor
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

        <Route path='/login' element={<Login />} />
        <Route path='/admTermos' element={<Termos />} />
        <Route path='/resetaSenha' element={<ResetaSenha />} /> 


        <Route path='/gestaoUsuario' element={<GestaoUsuario />} />
        <Route path='/cadastroUnidade' element={<CadastroUNidade/>} />
        <Route path='/gestaoUnidade' element={<GestaoUnidade />} />
        <Route path='/cadastroUO' element={<CadastroUO/>} />
        <Route path='/cadastroConteudo' element={<CadastroConteudo/>} />
        <Route path='/cadastroTrilha' element={<CadastroTrilha/>} />
        <Route path='/perfil' element={<PerfilConectado />} />
        <Route path='/editar' element={<EditarPerfil />} />
        <Route path='/cadastrar' element={<CadastrarPerfil />} />
        <Route path='/gestaoUO' element={<GestaoUO />} />
        <Route path='/cadastroGestor' element={<CadastrarGestor />} />


        <Route path='/CertificadoColaborador'  element={<CertificadoColaborador/>}/>
        <Route path='/ParabensColaborador'  element={<ParabensColaborador/>}/>
        <Route path='/SuporteColaborador'  element={<SuporteColaborador/>}/>
        <Route path='/ConteudoColaborador'  element={<ConteudoColaborador/>}/>
        <Route path='/TrilhaColaborador'  element={<TrilhaColaborador/>}/>
        <Route path='/AvatarColaborador'  element={<AvatarColaborador/>}/>
        <Route path='/PerfilColaborador'  element={<PerfilColaborador/>}/>
        <Route path='/PesquisaSatisfacaoColaborador'  element={<PesquisaSatisfacaoColaborador/>}/>
        <Route path='/HomeColaborador'  element={<HomeColaborador/>}/>
        <Route path='/VisualizarCertificadosColaborador' element={<VisualizarCertificadosColaborador />} />
        
          
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
