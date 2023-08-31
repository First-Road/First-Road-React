import React from 'react'
import ReactDOM from 'react-dom/client'


//Estilizacao
import './index.css'

//


//Pacotes Rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GestaoConteudo from './pages/Gestor/GestaoConteudo';
import CadastroColaborador from './pages/Gestor/CadastroColaborador';
import CadastroConteudo from './pages/Gestor/CadastroConteudo';
import Dashboard from './pages/Gestor/Dashboard';
import EditarAgenda from './pages/Gestor/EditarAgenda';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      
      <Routes>
        <Route path='/gestao/conteudo' element={<GestaoConteudo/>}/>
        <Route path='/cadastro/colaborador' element={<CadastroColaborador/>}/>
        <Route path='/cadastro/conteudo' element={<CadastroConteudo/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/editar/agenda' element={<EditarAgenda/>}/>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)