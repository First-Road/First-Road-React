import './style.css'
import AsideAdm from '../../../components/AsideAdm';
import api from '../../../utils/api';
import { useEffect, useState } from 'react';
import ItemUnidade from '../../../components/ItemUnidade';

function GestaoUnidade() {

    // Estado para armazenar a lista de usuários
    const [unidades, setUnidades] = useState<any[]>([]);

    // Efeito para carregar os usuários da API ao montar o componente
    useEffect(() => {
        listarUnidades();
    }, [])



    function listarUnidades() {
        api.get("usuarios")
            .then((response: any) => {
                setUnidades(response.data);
                console.log(response.data)
            })
            .catch((error: any) => {
                console.log("Error ao realizar um requisição", error);
            })
    }
    return (
        <main id='gestaoUnidade'>
            <AsideAdm />
            <div className="adminGestaoUnidade">
                <div className="adminGestao_By">
                    <h1>Gestão Unidade</h1>
                    <div className="adminGestao_Ry">
                        <div className="adminGestao_Ray">
                            <div className="posicao_linha">
                                <div className="primeira_linha">
                                    <div className="input input1">
                                        <label htmlFor="mySelect">Empresa ou CNPJ</label>
                                        <select name="" id="mySelect">
                                            <option value="" disabled selected>
                                                Selecione
                                            </option>
                                            <option value="">opção 1</option>
                                            <option value="">opção 2</option>
                                            <option value="">opção 3</option>
                                            <option value="">opção 4</option>
                                            <option value="">opção 5</option>
                                        </select>
                                    </div>
                                    <div className="input input2">
                                        <label htmlFor="mySelect">Situação</label>
                                        <select name="" id="mySelect">
                                            <option value="" disabled selected>
                                                Selecione
                                            </option>
                                            <option value="">opção 1</option>
                                            <option value="">opção 2</option>
                                            <option value="">opção 3</option>
                                            <option value="">opção 4</option>
                                            <option value="">opção 5</option>
                                        </select>
                                    </div>
                                    <div className="input input3">
                                        <label htmlFor="mySelect">Unidade</label>
                                        <select name="" id="mySelect">
                                            <option value="" disabled selected>
                                                Selecione
                                            </option>
                                            <option value="">opção 1</option>
                                            <option value="">opção 2</option>
                                            <option value="">opção 3</option>
                                            <option value="">opção 4</option>
                                            <option value="">opção 5</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <table>
                                <thead>

                                    <th className="th_table">CNPJ</th>
                                    <th className="th_table">Razão Social</th>
                                    <th className="th_table">unidade</th>
                                    <th className="th_tableimg">  </th>

                                </thead>
                                <tbody id="corpo-tabela-unidade">


                                    {
                                        unidades.map((unidade: any, indice: number) => {
                                            return <tr key={indice}>
                                                <ItemUnidade
                                                    cnpj={unidade.id_unidade.cnpj}
                                                    razaoSocial={unidade.id_unidade.razao_social}
                                                    unidade={unidade.id_unidade.complemento}

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
    )

}

export default GestaoUnidade