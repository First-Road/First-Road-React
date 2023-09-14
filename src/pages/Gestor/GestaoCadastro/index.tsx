import "./style.css";

import { Link } from 'react-router-dom'
import AsideGestor from "../../../components/Aside_gestor";
import semaforoverde from "../../../assets/icons/icon_semaforo_verde.svg"
import React from 'react';

function GestaoCadastro() {

  return(
    <main id="gestao_cadastro">
        <AsideGestor/>
<section className="adminGestao_Yo">
<div className="adminGestao_By">
  <div className="adminGestao_Ry">
    <div className="adminGestao_Ray">
      <div className="adminGestao_Perfil">
        <label htmlFor="mySelect">Cargo</label>
        <select name="" id="mySelect">
          <option value="" disabled={true} selected={true}>
            Selecione
          </option>
          <option value="">opção 1</option>
          <option value="">opção 2</option>
          <option value="">opção 3</option>
          <option value="">opção 4</option>
          <option value="">opção 5</option>
        </select>
      </div>
      <div className="adminGestao_Situacao">
        <label htmlFor="mySelect">Situação</label>
        <select name="" id="mySelect">
          <option value=""disabled={true} selected={true}>
            Selecione
          </option>
          <option value="">opção 1</option>
          <option value="">opção 2</option>
          <option value="">opção 3</option>
          <option value="">opção 4</option>
          <option value="">opção 5</option>
        </select>
      </div>
      <div className="adminGestao_Unidade">
        <label htmlFor="mySelect">Unidade</label>
        <select name="" id="mySelect">
          <option value=""disabled={true} selected={true}>
            Selecione
          </option>
          <option value="">opção 1</option>
          <option value="">opção 2</option>
          <option value="">opção 3</option>
          <option value="">opção 4</option>
          <option value="">opção 5</option>
        </select>
      </div>
      {/*   <a class="delete_table" href="">
                  <img src="./assets/icons/lixeira.svg" alt="">

              </a> */}
    </div>
  </div>
</div>
<table>
  <thead>
    <tr className="tr_one">
      <th className="th_table" />
      <th className="th_table">NIF</th>
      <th className="th_table">nome</th>
      <th className="th_table">Departamento</th>
      <th className="th_table">Cargo</th>
      <th className="th_table">unidade</th>
      <th className="th_tableimg">
        <a
          className="btn_cadastrar"
          href="../cadastro_colaborador_gestor/index.html"
        >
          Cadastrar
        </a>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="semafaro_td">
        <img
          className="semafaro"
          src={semaforoverde}
          alt=""
        />
      </td>
      <td className="cpf_td" aria-placeholder="000.000.000-00" >
        000.000.000-00
      </td>
      <td className="nome_td" aria-placeholder="">
        Roberto Nascimento
      </td>
      <td className="nif_td" aria-placeholder="" >
        000000000
      </td>
      <td className="perfil_td" aria-placeholder="" >
        Gestor
      </td>
      <td className="unidade_td" aria-placeholder="" >
        São Bernardo do Campo
      </td>
      <td className="td_tableimg">
        <a href="">
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            {/*! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
            <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
          </svg>
        </a>
        <a href="">
          
        </a>
        <a href="">
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            {/*! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
            <path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z" />
          </svg>
        </a>
        <a href="">
          
        </a>
        <a href="">
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            {/*! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
            <path d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
          </svg>
        </a>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td className="semafaro_td">
        <img
          className="semafaro"
          src={semaforoverde}
          alt=""
        />
      </td>
      <td className="cpf_td" aria-placeholder="000.000.000-00" >
        000.000.000-00
      </td>
      <td className="nome_td" aria-placeholder="">
        Roberto Nascimento
      </td>
      <td className="nif_td" aria-placeholder="" >
        000000000
      </td>
      <td className="perfil_td" aria-placeholder="" >
        Gestor
      </td>
      <td className="unidade_td" aria-placeholder="" >
        São Bernardo do Campo
      </td>
      <td className="td_tableimg">
        <a href="">
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            {/*! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
            <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
          </svg>
        </a>
        <a href="">
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            {/*! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
            <path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z" />
          </svg>
        </a>
        <a href="">
          
        </a>
        <a href="">
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            {/*! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
            <path d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
          </svg>
        </a>
      </td>
    </tr>
  </tbody>
  
</table>
</section>
</main>
)
}
export default GestaoCadastro


   

