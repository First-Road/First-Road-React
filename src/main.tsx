import React from 'react'
import ReactDOM from 'react-dom/client'
import PerfilConectado from './pages/PerfilConectadoStatic';
import EditarPerfil from './pages/EditarPerfil';
import CadastrarPerfil from './pages/CadastrarPerfil';
import CadastrarGestor from './pages/CadrastrarGestor';
import GestaoUO from './pages/GestaoUO';
import GestaoUsuario from './pages/GestaoUsuario';
import Login from './pages/Login';
import Termos from './pages/Termos';
import ResetaSenha from './pages/ResetaSenha';
import CadastroConteudo from './pages/CadastroConteudo';
import CadastroUNidade from './pages/CadastroUnidade';





//Estilizacao
import './index.css'

//


//Pacotes Rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";





ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>

      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/admTermos' element={<Termos />} />
        <Route path='/resetaSenha' element={<ResetaSenha />} />      
        <Route path='/perfil' element={<PerfilConectado />} />
        <Route path='/editar' element={<EditarPerfil />} />
        <Route path='/cadastrar' element={<CadastrarPerfil />} />
        <Route path='/gestaoUO' element={<GestaoUO />} />
        <Route path='/gestaoUsuario' element={<GestaoUsuario />} />
        <Route path='/cadastroGestor' element={<CadastrarGestor />} />
        <Route path='/cadastroConteudo' element={<CadastroConteudo/>} />
        <Route path='/cadastroUnidade' element={<CadastroUNidade/>} />

      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)