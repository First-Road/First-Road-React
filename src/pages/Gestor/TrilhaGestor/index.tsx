import "../TrilhaGestor/trilhaGestor.css";

import { Link } from "react-router-dom";
import AsideGestor from "../../../components/Aside_gestor";
import iconeImagem from "../../../assets/icons/novoingressante 1 (1).svg";
import user from "../../../assets/icons/Group 41.png";

function TrilhaGestor() {
  return (
    <main id="trilha_gestor">
      <AsideGestor />
      <section className="conteudo">
        <div className="posicao">
          <h1>Trilha de Conteúdo do Colaborador</h1>
          <div className="id">
            <input type="text" placeholder="Colaborador" />
            <img src={iconeImagem} alt="" />
          </div>
        </div>
        <form className="formulario">
          <div className="lista_cadastrada">
            <span>Trilhas Cadastradas</span>
            <ul className="trilha_cadastrada">
              <input type="text" placeholder=" Conteudo" />
              <select name="Situação Atual">
                <option selected disabled>
                  Situação Atual
                </option>
                <option value="Concluido">Concluido</option>
                <option value="Em Andamento">Em Andamento</option>
                <option value="Atrasado">Atrasado</option>
              </select>
              <input type="text" placeholder="Tempo para conclusão" />
            </ul>
            <ul className="trilha_cadastrada">
              <input type="text" placeholder=" Conteudo" />
              <select name="Situação Atual">
                <option selected disabled>
                  Situação Atual
                </option>
                <option value="Concluido">Concluido</option>
                <option value="Em Andamento">Em Andamento</option>
                <option value="Atrasado">Atrasado</option>
              </select>
              <input type="text" placeholder="Tempo para conclusão" />
            </ul>
            <ul className="trilha_cadastrada">
              <input type="text" placeholder=" Conteudo" />
              <select name="Situação Atual">
                <option selected disabled>
                  Situação Atual
                </option>
                <option value="Concluido">Concluido</option>
                <option value="Em Andamento">Em Andamento</option>
                <option value="Atrasado">Atrasado</option>
              </select>
              <input type="text" placeholder="Tempo para conclusão" />
            </ul>
            <ul className="trilha_cadastrada">
              <input type="text" placeholder=" Conteudo" />
              <select name="Situação Atual">
                <option selected disabled>
                  Situação Atual
                </option>
                <option value="Concluido">Concluido</option>
                <option value="Em Andamento">Em Andamento</option>
                <option value="Atrasado">Atrasado</option>
              </select>
              <input type="text" placeholder="Tempo para conclusão" />
            </ul>
          </div>
          <div className="adicionar_trilhas">
            <div className="posicao_buscar">
              <span>Adicionar Trilhas</span>
              <input type="text" placeholder="Digite a trilha que deseja" />
            </div>
            <div className="posicao_trilha">
              <ul className="add_trilha">
                <input type="text" placeholder="Título" />
              </ul>
              <ul className="add_trilha">
                <input type="text" placeholder="Título" />
              </ul>
              <ul className="add_trilha">
                <input type="text" placeholder="Título" />
              </ul>
              <ul className="add_trilha">
                <input type="text" placeholder="Título" />
              </ul>
            </div>
            <div className="posicao_button">
              <button className="btn">Adicionar</button>
            </div>
          </div>
        </form>
      </section>

    </main>
  );
}
export default TrilhaGestor;
