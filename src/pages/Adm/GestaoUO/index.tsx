import './style.css'

import AsideAdm from '../../../components/AsideAdm'
import { useEffect, useState } from 'react';
import api from '../../../utils/api';
import ItemUO from '../../../components/ItemUO';


function GestaoUO() {



    // Estado para armazenar a lista de usuários
    const [usuarios, setUsuarios] = useState<any[]>([]);

    // Efeito para carregar os usuários da API ao montar o componente
    useEffect(() => {
        ListarUos();
    }, [])

    function ListarUos() {
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
        <main id='gestaoUO'>
            <AsideAdm />
            <div className="adminGestaoUO">
                <div className="adminGestaoUO_Secao">
                    <h1>Gestão U.O.</h1>
                    <div className="adminGestaoUO_texto_imagem">
                        <div className="GestaoUO_Centralizar">
                            <div className="posicao_linha">
                                <div className="primeira_linha">
                                    <div className="input input1">
                                        <label htmlFor="Unidade Organizacional">
                                            Unidade Organizacional
                                        </label>
                                        <input
                                            className="input_caixa"
                                            type="text"
                                            placeholder="Nome da Unidade"
                                        />
                                    </div>
                                    <div className="input input2">
                                        <label htmlFor=" ID Organizacional">ID Organizacional</label>
                                        <input
                                            className="input_caixa"
                                            type="text"
                                            placeholder="0000000"
                                        />
                                    </div>
                                </div>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th className="th_table">Departamento</th>
                                        <th className="th_table">Gestor</th>
                                        <th />
                                    </tr>
                                </thead>
                                <tbody id="corpo-tabela">
                                    
                                        {
                                            usuarios.map((uo: any, indice: number) => {
                                                return <tr key={indice}>
                                                    <ItemUO
                                                        departamento={uo.id_cargo.nome_cargo}
                                                        gestor={uo.nome}

                                                    />
                                                </tr>
                                            })
                                        }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </main>


    );

}

export default GestaoUO