//Estilização
import "./style.css";

//Componentes
import { Link } from "react-router-dom";
import AsideGestor from "../../../components/Aside_gestor";
import fotopadrao from "../../../assets/icons/fotopadrao_user_aside.svg"

function PerfilGestor() {
  return (
    <main id="perfil_gestor">
      <AsideGestor />
      <section className="gestorPerfil">
        <div className="gestorPerfil_Secao">
          <h1>Perfil Gestor</h1>
          <div className="user_config">
            <img
              className="gestor_FotoPadrao"
              src={fotopadrao}
              alt=""
            />
            {/* <img class="gestor_engrenagem" src="./assets/icons/engrenagem_aside.svg" alt=""> */}
            <svg
              className="gestor_engrenagem"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              {/*! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
              <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
            </svg>
          </div>
          <div className="gestorPerfil_texto_imagem">
            <div className="centralizar">
              <div className="posicao_linha">
                <div className="primeira_linha">
                  <div className="input input1">
                    <label htmlFor="Nome completo">Nome Completo</label>
                    <input
                      className="input_caixa"
                      type="text"
                      placeholder="Digite seu nome completo"
                    />
                  </div>
                </div>
                <div className="segunda_linha">
                  <div className="input input3">
                    <label htmlFor="NIF">NIF</label>
                    <input
                      className="input_caixa"
                      type="number"
                      placeholder="00000000"
                    />
                  </div>
                  <div className="input input4">
                    <label htmlFor="Data de Nascimento">
                      Data de Nascimento
                    </label>
                    <input className="input_caixa" type="date" />
                  </div>
                  <div className="input input5">
                    <label htmlFor="Unidade">Unidade</label>
                    <select
                      className="input_caixa"
                      name="selecionar"
                      id=""
                    >
                      <option value="Selecione">Selecione</option>
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
                    <label htmlFor="Perfil">Perfil</label>
                    <input
                      className="input_caixa"
                      type="text"
                      placeholder="gestor"
                    />
                  </div>
                  <div className="input input7">
                    <label htmlFor="Cargo">Cargo</label>
                    <input
                      className="input_caixa"
                      type="text"
                      placeholder="Digite seu cargo aqui"
                    />
                  </div>
                </div>
                <div className="quarta_linha">
                  <div className="input input8">
                    <label htmlFor="email">E-mail</label>
                    <input
                      className="input_caixa"
                      type="email"
                      placeholder="exemplo@email.com"
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
      </section>
    </main>
  );
}
export default PerfilGestor
