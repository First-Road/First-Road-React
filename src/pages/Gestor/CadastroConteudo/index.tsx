import "./style.css";

import { Link } from 'react-router-dom'
import AsideGestor from "../../../components/Aside_gestor";



function CadastroConteudo() {




    return (
        <main id="cadastro_conteudo">
                <AsideGestor/>
            <div className="cadastro_editar_conteudo">
                <div className="titulo_pagina">
                    <h1>Cadastro/ Editar Conteúdo</h1>
                </div>
                <div className="elementos_cadastro">
                    <div className="meio">
                        <label className="caixa" htmlFor="">
                            Nome
                        </label>
                        <input className="input" type="text" />
                    </div>
                    <div className="meio">
                        <label className="caixa" htmlFor="">
                            Tipo
                        </label>
                        <input className="input" type="text" />
                    </div>
                    <div className="meio">
                        <label className="caixa" htmlFor="">
                            Anexo{" "}
                        </label>
                        <input className="input" type="text" />
                    </div>
                    <div className="meio">
                        <label className="caixa" htmlFor="">
                            Release
                        </label>
                        <input className="input" type="text" />
                    </div>
                    <div className="botoes">
                        <button className="editar">Editar</button>
                        <button className="cadastrar">Cadastrar</button>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default CadastroConteudo