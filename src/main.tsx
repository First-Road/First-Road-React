import React from 'react'
import ReactDOM from 'react-dom/client'

//Estilizacao
import './index.css'

//


//Pacotes Rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      
      <Routes>
        {/* <Route path='/'  element={<SuporteColaborador/>}/> */}
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)