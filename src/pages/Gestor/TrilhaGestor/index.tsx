import "./style.css";

import { Link } from "react-router-dom";
import AsideGestor from "../../../components/Aside_gestor";
import iconeImagem from "../../../assets/icons/novoingressante 1 (1).svg"

function TrilhaGestor() {
  return (
    <main id="trilha_gestor">
      <AsideGestor/>
      <div className="trilha_de_conteudo" id="teste">
        <div className="titulo">
          <h1>Trilha de Conteúdo do Colaborador</h1>
          <div className="dados_usuario">
            <input className="id" type="text" placeholder="Colaborador" />
            <img src={iconeImagem} alt="" />
          </div>
        </div>
        <div className="modulo_1">
          <div className="cadastrada">
            <h2>Trilhas cadastradas:</h2>
            <ul className="trilha_cadastrada">
              <input type="text" placeholder=" Título" />
              <input type="text" placeholder=" Situação atual" />
              <input type="text" placeholder=" Tempo para conclusão" />
            </ul>
            <ul className="trilha_cadastrada">
              <input type="text" placeholder=" Título" />
              <input type="text" placeholder=" Situação atual" />
              <input type="text" placeholder=" Tempo para conclusão" />
            </ul>
            <ul className="trilha_cadastrada">
              <input type="text" placeholder=" Título" />
              <input type="text" placeholder=" Situação atual" />
              <input type="text" placeholder=" Tempo para conclusão" />
            </ul>
            <ul className="trilha_cadastrada">
              <input type="text" placeholder=" Título" />
              <input type="text" placeholder=" Situação atual" />
              <input type="text" placeholder=" Tempo para conclusão" />
            </ul>
          </div>
          <div className="adicionar">
            <div className="posicao_select">
              <label htmlFor="">Adicionar Trilhas:</label>
              <select name="escolher_trilhas" id="escolher_trilhas">
                <option value="">título 1</option>
                <option value="">título 2</option>
                <option value="">título 3</option>
                <option value="">título 4</option>
              </select>
            </div>
            <ul className="add_trilha">
              <input type="text" placeholder=" Título" />
            </ul>
            <ul className="add_trilha">
              <input type="text" placeholder=" Título" />
            </ul>
            <ul className="add_trilha">
              <input type="text" placeholder=" Título" />
            </ul>
            <ul className="add_trilha">
              <input type="text" placeholder=" Título" />
            </ul>
          </div>
          <button>Adicionar</button>
        </div>
      </div>
    </main>
  );
}
export default TrilhaGestor
