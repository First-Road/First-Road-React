import React from 'react'
import ReactDOM from 'react-dom/client'


//Estilizacao
import './index.css'

//


//Pacotes Rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";
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