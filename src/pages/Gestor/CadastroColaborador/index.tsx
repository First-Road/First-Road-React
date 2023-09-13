import "./style.css";

import { Link } from 'react-router-dom'
import AsideGestor from "../../../components/Aside_gestor";

import user from "../../../assets/icons/Group 41.png"
import lapis from "../../../assets/icons/icon_lapis_main.svg"
import React, { useState } from 'react';





function CadastroColaborador() {

  const [nome, setNome] = useState<string>("");
  const [nif, setNif] = useState<string>("");
  const [dataNascimento, setDataNascimento] = useState<string>("");
  const [unidade, setUnidade] = useState<string>("");
  const [perfil, setPerfil] = useState<string>('Selecione');
  const [cargo, setCargo] = useState<string>("");
  const [email, setEmail] = useState<string>("");


  function CadastrarColaborador(event : any) {
    
   
      event.preventDefault();

      
      const dadosGestor = {
        Nome : nome,
        Nif : nif,
        DataNascimento : dataNascimento,
        Unidade : unidade,
        Perfil : perfil,
        Cargo : cargo,
        Email : email,
      };

      console.log(dadosGestor); // Exemplo: Mostra os dados no console

      // Reinicialize os estados após o envio do formulário, se necessário
      setNome('');
      setNif('');
      setDataNascimento('');
      setUnidade('');
      setPerfil('Selecione');
      setCargo('');
      setEmail('');
    };

    return (
      <main id="cadastro_colaborador">
        {/* ... (restante do seu código) */}
        <form className="centralizar" onSubmit={CadastrarColaborador}>
          {/* ... (outros campos do formulário) */}
          <div className="quarta_linha">
            <div className="input input8">
              <label htmlFor="email">E-mail</label>
              <input
                className="input_caixa"
                type="email"
                required
                placeholder="exemplo@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="button_salvar">
              <button type="submit">Salvar</button>
            </div>
          </div>
        </form>
      </main>
    );
  }

  export default CadastroColaborador;












  <main id="cadastro_colaborador">
    <AsideGestor />
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
            <h1>CADASTRO NOVO COLABORADOR</h1>
          </div>
          <div className="posicao_linha">
            <div className="primeira_linha">
              <div className="input input1">
                <label htmlFor="Nome completo">Nome Completo</label>
                <input className="input_caixa" type="text" required placeholder="Digite o nome do colaborador aqui" />
              </div>
            </div>
            <div className="segunda_linha">
              <div className="input input3">
                <label htmlFor="NIF">NIF</label>
                <input className="input_caixa" type="number" required placeholder="********" />
              </div>
              <div className="input input4">
                <label className="data" htmlFor="Data de Nascimento">
                  Data de Nascimento
                </label>
                <input className="input_caixa" type="date" required placeholder="dd/mm/aaaa" />
              </div>
              <div className="input input5">
                <label htmlFor="Unidade">Unidade</label>
                <select className="input_caixa" name="selecionar" id="" required>
                  selecionar
                </select>
              </div>
            </div>
            <div className="terceira_linha">
              <div className="input input6">
                <label htmlFor="Perfil">Perfil</label>
                <select className="input_caixa" name="selecionar" id="" required>
                  <option value="Selecione">Selecione</option>
                  <option value="Funcionário Interno">Funcionário Interno</option>
                  <option value="Funcionário Tercerizado">Funcionário Tercerizado</option>
                </select>
              </div>
              <div className="input input7">
                <label htmlFor="Cargo">Cargo</label>
                <input className="input_caixa" type="text" required placeholder="Digite o cargo do colaborador aqui" />
              </div>
            </div>
            <div className="quarta_linha">
              <div className="input input8">
                <label htmlFor="email">E-mail</label>
                <input className="input_caixa" type="email" required placeholder="exemplo@email.com" />
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