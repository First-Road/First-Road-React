import "./cadastroGestor.css";

import { Link } from "react-router-dom";
import AsideGestor from "../../../components/Aside_gestor";

import user from "../../../assets/icons/Group 41.png";
import lapis from "../../../assets/icons/icon_lapis_main.svg";
import fotopadrao from "../../../assets/icons/fotopadrao_user_aside.svg";
import React, { useState } from "react";
import AsideAdm from "../../../components/AsideAdm";
import api from "../../../utils/api";

function CadastroGestor() {

  const [unidades, setUnidades] = useState<string[]>(
    [
        "São Bernardo do Campo",
        "Resende",
        "São José dos Pinhais",
        "Taubaté",
        "São Carlos"
    ]

  );
  const [select, setSelect] = useState<string>("");
  const [foto, setFoto] = useState<any>("");
  const [nome, setNome] = useState<string>("");
  const [nif, setNif] = useState<string>("");
  const [dataNascimento, setDataNascimento] = useState<string>("");
  const [perfil, setPerfil] = useState<string>("Gestor");
  const [cargo, setCargo] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  function CadastrarDados(event: any) {
    event.preventDefault();

    const formData = new FormData();

    formData.append("Foto", foto);
    formData.append("Nome", nome);
    formData.append("Nif", nif);
    formData.append("DataNascimento", dataNascimento);
    formData.append("Unidade", select);
    formData.append("Perfil", perfil);
    formData.append("Cargo", cargo);
    formData.append("Email", email);

    api.post("users", formData)
    .then((response: any) => {
        console.log(response);
        alert("Usuário cadastrado com sucesso!");
    })
    .catch((error: any) => {
        console.log(error);
        alert("Falha ao cadastrar um novo usuário");
    })

  }

  function verificarFoto(event: any) {
    console.log(event.target.files[0]);
    setFoto(event.target.files[0]);
  }

  return (
    <main id="Cadastrar_Gestor">
      <AsideAdm />
      <section className="gestorPerfil">
        <div className="gestorPerfil_Secao">
          <div className="titulocadastro">
            <h1 className="titulo1">Cadastro Gestor</h1>
          </div>
          <div className="user_configgestor ">
            <img className="gestor_FotoPadrao" src={fotopadrao} alt=""  onChange={verificarFoto} />
          </div>
          <div className="gestorPerfil_texto_imagem">
            <div className="centralizar">
              <div className="posicao_linha">
                <form action="" method="POST" onSubmit={CadastrarDados}>
                  <div className="primeira_linha">
                    <div className="input input1">
                      <label htmlFor="Nome completo">Nome Completo</label>
                      <input
                        className="input_caixa"
                        type="text"
                        placeholder="Digite o nome completo do colaborador"
                        onChange={(e) => setNome(e.target.value)}
                        
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
                        onChange={(e) => setSelect(e.target.value)}
                         defaultValue={select}
                        
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
                      <select className="select_perfil" name="Perfil" id=""  onChange={(e) => setPerfil(e.target.value)} >
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
export default CadastroGestor;
