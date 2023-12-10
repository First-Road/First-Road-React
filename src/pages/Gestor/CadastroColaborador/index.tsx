import "./cadastroColaborador.css";

import { Link } from "react-router-dom";
import AsideGestor from "../../../components/Aside_gestor";

import user from "../../../assets/icons/Group 41.png";
import lapis from "../../../assets/icons/icon_lapis_main.svg";
import fotopadrao from "../../../assets/icons/fotopadrao_user_aside.svg";
import React, { useState } from "react";

function CadastroColaborador() {
  const [foto, setFoto] = useState<any>("");
  const [nome, setNome] = useState<string>("");
  const [nif, setNif] = useState<string>("");
  const [dataNascimento, setDataNascimento] = useState<string>("");
  const [unidade, setUnidade] = useState<string>("");
  const [perfil, setPerfil] = useState<string>("Selecione");
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
  }

  function verificarFoto(event: any) {
    console.log(event.target.files[0]);
    //setFoto atualiza o state foto com o valor da foto
    setFoto(event.target.files[0]);
  }

  return (
    <main id="Cadastro_colaboradorGestor">
      <AsideGestor />
      <section className="gestorPerfil">
        <div className="gestorPerfil_Secao">
          <div className="titulocadastro">
            <h1 className="titulo1">Cadastro Colaborador</h1>
          </div>
          <div className="user_configgestor ">
            <img className="gestor_FotoPadrao" src={fotopadrao} alt="" />
          </div>
          <div className="gestorPerfil_texto_imagem">
            <div className="centralizar">
              <div className="posicao_linha">
                <form className="form_cadastroColaborador" action="" method="POST" onSubmit={CadastrarColaborador}>
                  <div className="primeira_linha">
                    <div className="input input1">
                      <label htmlFor="Nome completo">Nome Completo</label>
                      <input
                        className="input_caixa"
                        type="text"
                        placeholder="Digite o nome completo do colaborador"
                        onChange={(e) => {
                          setNome(e.target.value);
                        }}
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
                        placeholder={"000000000"}
                        onChange={(e) => {
                          setNif(e.target.value);
                        }}
                        required
                      />
                    </div>
                    <div className="input input4">
                      <label htmlFor="Data de Nascimento">
                        Data de Nascimento
                      </label>
                      <input
                        className="input_caixa"
                        type="date"
                        placeholder="00/00/0000"
                        onChange={(e) => {
                          setDataNascimento(e.target.value);
                        }}
                        required
                      />
                    </div>
                    <div className="input input5">
                      <label htmlFor="Unidade">Unidade</label>
                      <select
                        className="input_caixa"
                        name="selecionar"
                        id=""
                        placeholder="Selecione"
                        onChange={(e) => {
                          setUnidade(e.target.value);
                        }}
                        required
                      >
                        <option selected disabled value="Selecione">Selecione</option>
                        <option
                          value="São Bernardo do Campo"
                          aria-placeholder="São Bernardo do Campo"
                        >
                          São Bernardo do Campo
                        </option>
                        <option value="Resende" aria-placeholder="Resende">
                          Resende
                        </option>
                        <option
                          value="São José dos Pinhais"
                          aria-placeholder="São José dos Pinhais"
                        >
                          São José dos Pinhais
                        </option>
                        <option value="Taubaté" aria-placeholder="Taubaté">
                          Taubaté
                        </option>
                        <option
                          value="São Carlos"
                          aria-placeholder="São Carlos"
                        >
                          São Carlos
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="terceira_linha">
                    <div className="input input6">
                      <label htmlFor="Perfil">Perfil</label>
                      <select className="select_perfil" name="Perfil" id="">
                        <option selected  className="Colaborador_selecao" disabled value="Colaborador">Colaborador</option>
                      </select>
                  </div>    
                    <div className="input input7">
                      <label htmlFor="Cargo">Cargo</label>
                      <input
                        className="input_caixa"
                        type="text"
                        placeholder="Digite o cargo"
                        onChange={(e) => {
                          setCargo(e.target.value);
                        }}
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
                        placeholder="email@email.vw.com.br"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        required
                      />
                    </div>
                    <div className="button_salvar">
                      <button type="submit">Salvar</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default CadastroColaborador;
