import React from 'react'
import ReactDOM from 'react-dom/client'


//Estilizacao
import './index.css'

//


//Pacotes Rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GestaoConteudo from './pages/Gestor/GestaoConteudo';
import CadastroColaborador from './pages/Gestor/CadastroColaborador';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      
      <Routes>
        <Route path='/gestao/conteudo' element={<GestaoConteudo/>}/>
        <Route path='/cadastro/colaborador' element={<CadastroColaborador/>}/>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)