import React from 'react'
import ReactDOM from 'react-dom/client'


//Estilizacao
import './index.css'

//


//Pacotes Rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CadastroColaborador from './pages/Gestor/CadastroColaborador';
import Dashboard from './pages/Gestor/Dashboard';
import GestaoCadastro from './pages/Gestor/GestaoCadastro';
import PerfilGestor from './pages/Gestor/PerfilGestor';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      
      <Routes>
        <Route path='/cadastro/colaborador' element={<CadastroColaborador/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/gestao/cadastro' element={<GestaoCadastro/>}/>
        <Route path='/perfil/gestor' element={<PerfilGestor/>}/>

      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)