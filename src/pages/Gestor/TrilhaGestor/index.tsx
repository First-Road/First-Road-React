import "../TrilhaGestor/trilhaGestor.css";

import { Link } from "react-router-dom";
import AsideGestor from "../../../components/Aside_gestor";
import iconeImagem from "../../../assets/icons/novoingressante 1 (1).svg";
import user from "../../../assets/icons/Group 41.png";

function TrilhaGestor() {
  return (
    <main id="trilha_gestor">
      <AsideGestor />
      <div className="trilha_de_conteudo" id="teste">
        <div className="titulo_trilha">
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
              <input type="text" placeholder=" Título" required/>
              <select name="Situação Atual" >
                <option selected disabled>Situação Atual</option>
                <option value="Concluido">Concluido</option>
                <option value="Em Andamento">Em Andamento</option>
                <option value="Atrasado">Atrasado</option>
              </select>
              <input className="input_tempo" type="text" placeholder=" Tempo para conclusão" required/>
            </ul>
            <ul className="trilha_cadastrada">
              <input type="text" placeholder=" Título" required/>
              <select name="Situação Atual">
                 <option selected disabled>Situação Atual</option>
                <option value="Concluido">Concluido</option>
                <option value="Em Andamento">Em Andamento</option>
                <option value="Atrasado">Atrasado</option>
              </select>
              <input className="input_tempo" type="text" placeholder=" Tempo para conclusão" required/>
            </ul>
            <ul className="trilha_cadastrada">
              <input type="text" placeholder=" Título"required />
              <select name="Situação Atual">
                <option selected disabled>Situação Atual</option>
                <option value="Concluido">Concluido</option>
                <option value="Em Andamento">Em Andamento</option>
                <option value="Atrasado">Atrasado</option>
              </select>
              <input className="input_tempo" type="text" placeholder=" Tempo para conclusão" required/>
            </ul>
            <ul className="trilha_cadastrada">
              <input className="input_adi" type="text" placeholder=" Título" required/>
              <select name="Situação Atual">
                <option selected disabled>Situação Atual</option>
                <option value="Concluido">Concluido</option>
                <option value="Em Andamento">Em Andamento</option>
                <option value="Atrasado">Atrasado</option>
              </select>
              <input className="input_tempo" type="text" placeholder=" Tempo para conclusão" required/>
            </ul>
          </div>
          <div className="adicionar">
            <div className="posicao_select">
              <label htmlFor="">Adicionar Trilhas:</label>
              <input id="input_adi" type="text" placeholder="Digite a trilha que deseja buscar" required/>
            </div>
            <ul className="add_trilha">
              <input type="text" placeholder=" Título" disabled/>
            </ul>
            <ul className="add_trilha">
              <input type="text" placeholder=" Título" disabled/>
            </ul>
            <ul className="add_trilha">
              <input type="text" placeholder=" Título" disabled/>
            </ul>
            <ul className="add_trilha">
              <input type="text" placeholder=" Título" disabled/>
            </ul>
          </div>
          <div className="posicao_button">
            <button>Adicionar</button>
          </div>
        </div>
      </div>
    </main>
  );
}
export default TrilhaGestor;
