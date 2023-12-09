
import React, { useState, useEffect } from 'react';

import './style.css'

import AsideAdm from '../../../components/AsideAdm'
import ItemUsuario from '../../../components/ItemUsuario';
import api from '../../../utils/api';

function GestaoUsuario() {

    // Estado para armazenar a lista de usuários
  const [usuarios, setUsuarios] = useState<any[]>([]);

  // Efeito para carregar os usuários da API ao montar o componente
  useEffect(() => {
    listarUsuarios();
  }, [])
    


  function listarUsuarios() {
    api.get("usuarios")
        .then((response: any) => {
            setUsuarios(response.data);
            console.log(response.data)
        })
        .catch((error: any) => {
            console.log("Error ao realizar um requisição", error);
        })

        
    }

    return (
        
        <main id='gestaoUsuario'>
            <AsideAdm />
            <div className="adminGestaoUsuario">
                <div className="adminGestao_By">
                    <h1>Gestão de Usuario</h1>
                    <div className="adminGestao_Ry">
                        <div className="adminGestao_Ray">
                            <div className="posicao_linha">
                                <div className="primeira_linha">
                                    <div className="input input1">
                                        <label htmlFor="mySelect">Perfil</label>
                                        <select name="" id="mySelect">
                                            <option value="#" disabled selected>
                                                Selecione
                                            </option>
                                            <option value="a">opção 1</option>
                                            <option value="b">opção 2</option>
                                            <option value="c">opção 3</option>
                                        </select>
                                    </div>
                                    <div className="input input2">
                                        <label htmlFor="mySelect">Situação</label>
                                        <select name="" id="mySelect">
                                            <option value="#" disabled selected>
                                                Selecione
                                            </option>
                                            <option value="a">opção 1</option>
                                            <option value="b">opção 2</option>
                                            <option value="c">opção 3</option>
                                        </select>
                                    </div>
                                    <div className="input input3">
                                        <label htmlFor="mySelect">Unidade</label>
                                        <select name="" id="mySelect">
                                            <option value="#" disabled selected>
                                                Selecione
                                            </option>
                                            <option value="a">opção 1</option>
                                            <option value="b">opção 2</option>
                                            <option value="c">opção 3</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <table>
                                <thead>
                                    <tr className="tr_one">
                                        <th className="th_table">nome</th>
                                        <th className="th_table">nif</th>
                                        <th className="th_table">perfil</th>
                                        <th className="th_table">unidade</th>
                                        <th className="th_tableimg">
                                            <a className="btn_cadastrar" href="">
                                                Cadastrar
                                            </a>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody id="corpo-tabela-usuario">

                                <tr>
                                    {
                                        usuarios.map((usuario: any, indice: number) => {
                                            return <tr key={indice}>
                                                <ItemUsuario
                                                    nome={usuario.nome}
                                                    nif={usuario.nif}
                                                    perfil={usuario.cargo.nome_cargo}
                                                    unidade={usuario.id_unidade.complemento}
                                                />    
                                            </tr>
                                        })
                                    }
                               
                                </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </main>

    );

}

export default GestaoUsuario