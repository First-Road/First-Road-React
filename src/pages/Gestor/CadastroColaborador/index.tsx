import "./style.css";

import { Link } from 'react-router-dom'
import AsideGestor from "../../../components/Aside_gestor";

import user from "../../../assets/icons/Group 41.png"
import lapis from "../../../assets/icons/icon_lapis_main.svg"






function CadastroColaborador() {
    


    return(
    


    <main id="cadastro_colaborador">
            <AsideGestor/>
        <section className="secao_perfil">
          <div className="elementos_texto_imagem">
            <div className="user_config">
              <img
                className="foto_padrao"
                src={user}
                alt=""
              />
              <img
                className="config config1"
                src={lapis}
                alt=""
              />
            </div>
            <form className="centralizar">
              <div className="texto_perfil">
                <h1>CADASTRO DE COLABORADOR INGRESSANTE</h1>
              </div>
              <div className="posicao_linha">
                <div className="primeira_linha">
                  <div className="input input1">
                    <label htmlFor="Nome completo">Nome Completo</label>
                    <input className="input_caixa" type="text" />
                  </div>
                </div>
                <div className="segunda_linha">
                  <div className="input input3">
                    <label htmlFor="NIF">NIF</label>
                    <input className="input_caixa" type="number" />
                  </div>
                  <div className="input input4">
                    <label className="data" htmlFor="Data de Nascimento">
                      Data de Nascimento
                    </label>
                    <input className="input_caixa" type="date" />
                  </div>
                  <div className="input input5">
                    <label htmlFor="Unidade">Unidade</label>
                    <select className="input_caixa" name="selecionar" id="">
                      selecionar
                    </select>
                  </div>
                </div>
                <div className="terceira_linha">
                  <div className="input input6">
                    <label htmlFor="Perfil">Perfil</label>
                    <input className="input_caixa" type="text" />
                  </div>
                  <div className="input input7">
                    <label htmlFor="Cargo">Cargo</label>
                    <input className="input_caixa" type="text" />
                  </div>
                </div>
                <div className="quarta_linha">
                  <div className="input input8">
                    <label htmlFor="email">E-mail</label>
                    <input className="input_caixa" type="email" />
                  </div>
                  <div className="button_salvar">
                    <button>Salvar</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>)
}
export default CadastroColaborador