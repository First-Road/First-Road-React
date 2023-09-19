import "./style.css";

import { Link } from 'react-router-dom'
import AsideGestor from "../../../components/Aside_gestor";

import user from "../../../assets/icons/Group 41.png"
import lapis from "../../../assets/icons/icon_lapis_main.svg"
import React, { useState } from 'react';





function CadastroColaborador() {

  const [foto, setFoto] = useState<any>("");
  const [nome, setNome] = useState<string>("");
  const [nif, setNif] = useState<string>("");
  const [dataNascimento, setDataNascimento] = useState<string>("");
  const [unidade, setUnidade] = useState<string>("");
  const [perfil, setPerfil] = useState<string>('Selecione');
  const [cargo, setCargo] = useState<string>("");
  const [email, setEmail] = useState<string>("");


  function CadastrarColaborador(event: any) {


    event.preventDefault();


    const formData = new FormData();

    formData.append("Foto", foto);
    formData.append("Nome", nome);
    formData.append("Nif", nif);
    formData.append("DataNascimento", dataNascimento);
    formData.append("Unidade", unidade);
    formData.append("Perfil", perfil);
    formData.append("Cargo", cargo);
    formData.append("Email", email);


    console.log({
      nome,
      nif,
      dataNascimento,
      unidade,
      perfil,
      cargo,
      email,
    });

  };

  function verificarFoto(event: any) {
    console.log(event.target.files[0]);
    //setFoto atualiza o state foto com o valor da foto
    setFoto(event.target.files[0]);

}

  return (
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

          <form className="centralizar" onSubmit={CadastrarColaborador}>

            <div className="texto_perfil">
              <h1>CADASTRO NOVO COLABORADOR</h1>
            </div>
            <div className="posicao_linha">
              <div className="primeira_linha">

                <div className="input input1">
                  <label htmlFor="Nome completo">Nome Completo</label>
                  <input
                    className="input_caixa"
                    type="text"
                    placeholder="Digite o nome do colaborador"
                    value={nome}
                    onChange={(e) => { setNome(e.target.value) }}
                    required
                  />
                </div>

              </div>
              <div className="segunda_linha">
                <div className="input input3">

                  <label htmlFor="NIF">NIF</label>
                  <input
                    className="input_caixa"
                    type="number"
                    placeholder="********"
                    value={nif}
                    onChange={(e) => { setNif(e.target.value) }}
                    required
                  />

                </div>
                <div className="input input4">

                  <label className="data" htmlFor="Data de Nascimento">Data de Nascimento</label>
                  <input
                    className="input_caixa"
                    type="date"
                    placeholder="dd/mm/aaaa"
                    value={dataNascimento}
                    onChange={(e) => { setDataNascimento(e.target.value) }}
                    required
                  />

                </div>
                <div className="input input5">

                  <label htmlFor="Unidade">Unidade</label>
                  <select
                    className="input_caixa"
                    name="selecionar"
                    id=""
                    value={unidade}
                    onChange={(e) => { setUnidade(e.target.value) }}
                    required
                  >
                    <option value="">Selecione</option>
                    <option value="São Bernardo do Campo" aria-placeholder="São Bernardo do Campo">
                      São Bernardo do Campo
                    </option>
                    <option value="Resende" aria-placeholder="Resende">
                      Resende
                    </option>
                    <option value="São José dos Pinhais" aria-placeholder="São José dos Pinhais">
                      São José dos Pinhais
                    </option>
                    <option value="Taubaté" aria-placeholder="Taubaté">
                      Taubaté
                    </option>
                    <option value="São Carlos" aria-placeholder="São Carlos">
                      São Carlos
                    </option>

                  </select>
                </div>
              </div>
              <div className="terceira_linha">
                <div className="input input6">

                  <label htmlFor="Perfil">Perfil</label>
                  <select
                    className="input_caixa"
                    name="selecionar"
                    id=""
                    placeholder="Selecione o Perfil"
                    value={perfil}
                    onChange={(e) => { setPerfil(e.target.value) }}
                    required
                  >
                    <option value="Adm. Master">Adm. Master</option>
                    <option value="Gestor">Gestor</option>
                    <option value="Colaborador">Colaborador</option>
                  </select>

                </div>
                <div className="input input7">

                  <label htmlFor="Cargo">Cargo</label>
                  <input 
                  className="input_caixa" 
                  type="text"                   
                  placeholder="Digite o cargo do colaborador" 
                  value={cargo}
                  onChange={(e) => { setCargo(e.target.value) }}
                  required 
                  />

                </div>
              </div>
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
            </div>
          </form>
        </div>
      </section>
    </main>)
}
export default CadastroColaborador


