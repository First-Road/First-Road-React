import './style.css';
import AsideAdm from '../../../components/AsideAdm';


function CadastroUNidade() {

    return (
        <main id='cadastroUnidade'>
            <AsideAdm/>
            <div className="adminCadastroUnidade">
                <div className="adminCadastroUnidade_Secao">
                    <h1>Cadastro Unidade</h1>
                    <div className="user_config">

                    <svg 
                    className="adminFotoPadraoUnidade"
                    xmlns="http://www.w3.org/2000/svg" 
                    height="1em" 
                    viewBox="0 0 576 512">
                        {/*<!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->*/}
                        <path d="M64 32C46.3 32 32 46.3 32 64V304v48 80c0 26.5 21.5 48 48 48H496c26.5 0 48-21.5 48-48V304 152.2c0-18.2-19.4-29.7-35.4-21.1L352 215.4V152.2c0-18.2-19.4-29.7-35.4-21.1L160 215.4V64c0-17.7-14.3-32-32-32H64z"/></svg>
                        
                        {/* <img class="admin_engrenagem" src="./assets/icons/engrenagem_aside.svg" alt=""> */}
                        <svg
                            className="admin_engrenagem"
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 512 512"
                        >
                            {/*! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                            <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
                        </svg>
                    </div>
                    <div className="texto_perfil">
                        <p>
                            O tamanho da imagem deve ter pelo menos 500px de tamanho e menos de
                            300kb. Arquivos permitidos são .png e .jpg
                        </p>
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