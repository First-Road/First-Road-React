import './cadastroUnidade.css';
import AsideAdm from '../../../components/AsideAdm';


function CadastroUNidade() {

    return (
        <main id='cadastroUnidadeAdm'>
            <AsideAdm/>
            <div className="adminCadastroUnidade">
                <div className="CadastroUnidade_Secao">
                    <h1>Cadastro Unidade</h1>
                    <div className="div_unidade">

                    <svg 
                    className="adminFotoPadraoUnidade"
                    xmlns="http://www.w3.org/2000/svg" 
                    height="1em" 
                    viewBox="0 0 576 512">
                        {/*<!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->*/}
                        <path d="M64 32C46.3 32 32 46.3 32 64V304v48 80c0 26.5 21.5 48 48 48H496c26.5 0 48-21.5 48-48V304 152.2c0-18.2-19.4-29.7-35.4-21.1L352 215.4V152.2c0-18.2-19.4-29.7-35.4-21.1L160 215.4V64c0-17.7-14.3-32-32-32H64z"/></svg>
                        
                        {/* <img class="admin_engrenagem" src="./assets/icons/engrenagem_aside.svg" alt=""> */}
                    </div>
                    <div className="adminPerfil_texto_imagem">
                        <div className="cadastroUnidade_Centralizar">
                            <div className="posicao_linha">
                                <div className="primeira_linha">
                                    <div className="input input1">
                                        <label htmlFor="Razao Social">Razâo Social</label>
                                        <input
                                            className="input_caixa"
                                            type="text"
                                            placeholder="Insira a razão social aqui"
                                        />
                                    </div>
                                    <div className="input input2">
                                        <label htmlFor="CNPJ">CNPJ</label>
                                        <input
                                            className="input_caixa"
                                            type="text"
                                            placeholder="000.000.000/0000-00"
                                        />
                                    </div>
                                </div>
                                <div className="segunda_linha">
                                    <div className="input input3">
                                        <label htmlFor="CEP">CEP</label>
                                        <input
                                            className="input_caixa"
                                            type="number"
                                            placeholder="00000-000"
                                        />
                                    </div>
                                    <div className="input input4">
                                        <label htmlFor="Estado">UF</label>
                                        <input className="input_caixa" type="text" placeholder="Estado" />
                                    </div>
                                    <div className="input input5">
                                        <label htmlFor="Unidade">Unidade</label>
                                        <select
                                            className="input_caixa"
                                            name="selecionar"
                                            id=""
                                            placeholder="Selecione"
                                        >
                                            <option value="">Selecione</option>
                                            <option value="" aria-placeholder="Gol">
                                                Gol
                                            </option>
                                            <option value="" aria-placeholder="Fusca">
                                                Fusca
                                            </option>
                                            <option value="" aria-placeholder="Paraty">
                                                ParaTy
                                            </option>
                                            <option value="" aria-placeholder="Polo">
                                                Polo
                                            </option>
                                            <option value="" aria-placeholder="Voyage">
                                                Voyage
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="terceira_linha">
                                    <div className="input input6">
                                        <label htmlFor="Cidade">Cidade</label>
                                        <input className="input_caixa" type="text" placeholder="Cidade" />
                                    </div>
                                    <div className="input input7">
                                        <label htmlFor="Bairro">Bairro</label>
                                        <input className="input_caixa" type="text" placeholder="Bairro" />
                                    </div>
                                </div>
                                <div className="quarta_linha">
                                    <div className="input input8">
                                        <label htmlFor="Logradouro">Logradouro</label>
                                        <input
                                            className="input_caixa"
                                            type="text"
                                            placeholder="Endereço"
                                        />
                                    </div>
                                    <div className="input input9">
                                        <label htmlFor="Numero">Nº</label>
                                        <input className="input_caixa" type="text" placeholder="000" />
                                    </div>
                                </div>
                                <div className="quinta_linha">
                                    <div className="input input10">
                                        <label htmlFor="">Complemento</label>
                                        <input
                                            className="input_caixa"
                                            type="text"
                                            placeholder="Endereço"
                                        />
                                    </div>
                                    <div className="button_salvar">
                                        <button>Salvar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>


    )

}

export default CadastroUNidade