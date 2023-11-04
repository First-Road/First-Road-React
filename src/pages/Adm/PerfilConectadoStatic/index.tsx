import './style.css'

import fotoPadrao from '../../../assets/icons/fotopadrao_user_aside.svg'
import AsideAdm from '../../../components/AsideAdm'
import { Link } from 'react-router-dom';

function PerfilConectado() {
    return (
        <main id='perfilConectado'>
            <AsideAdm />
            <div className="adminPerfil">
                <div className="adminPerfil_Secao">
                    <h1>Perfil Conectado</h1>
                    <div className="user_config">
                        <img
                            className="admin_FotoPadrao"
                            src={fotoPadrao}
                            alt=""
                        />
                    </div>
                    <div className="texto_perfil">
                        <p>
                            <span>Thomas Schäfer</span>
                        </p>
                    </div>
                    <div className="adminPerfil_texto_imagem">
                        <div className="centralizar">
                            <div className="posicao_linha">
                                <div className="primeira_linha">
                                    <div className="input input1">
                                        <label htmlFor="Nome completo">Perfil</label>
                                        <p>
                                            <span>Administrador Master</span>
                                        </p>
                                    </div>
                                    <div className="input input2">
                                        <label htmlFor="unidade">Unidade</label>
                                        <p>
                                            <span>Sâo Carlos</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="segunda_linha">
                                    <div className="input input7">
                                        <label htmlFor="Cargo">Cargo</label>
                                        <p>
                                            <span>Gerente de Operações II</span>
                                        </p>
                                    </div>
                                    <div className="input input3">
                                        <label htmlFor="NIF">NIF</label>
                                        <p>
                                            <span>000000000</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="terceira_linha">
                                    <div className="input input6">
                                        <label htmlFor="Email">E-mail</label>
                                        <p>
                                            <span>email@email.vw.com.br</span>
                                        </p>
                                        
                                    </div>
                                </div>
                                <div className="quarta_linha">
                                    <div className="button_entrar">
                                        <Link to={"/editar"}
                                        >Editar Perfil</Link>


                                        {/* <button>Editar Perfil</button> */}
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

        </main>

    );

}

export default PerfilConectado