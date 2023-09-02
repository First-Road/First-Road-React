import React from 'react'
import ReactDOM from 'react-dom/client'
import PerfilConectado from './pages/PerfilConectadoStatic';
import EditarPerfil from './pages/EditarPerfil';
import CadastrarPerfil from './pages/CadastrarPerfil';
import CadastrarGestor from './pages/CadrastrarGestor';
import GestaoUO from './pages/GestaoUO';

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
        <Route path='/editar'  element={<EditarPerfil/>}/>
        <Route path='/cadastrar'  element={<CadastrarPerfil/>}/>
        <Route path='/gestaoUO'  element={<GestaoUO/>}/>
        <Route path='/cadastroGestor'  element={<CadastrarGestor/>}/>

      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)