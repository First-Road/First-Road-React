import "./cadastroGestor.css";

import { Link } from "react-router-dom";
import AsideGestor from "../../../components/Aside_gestor";

import user from "../../../assets/icons/Group 41.png";
import lapis from "../../../assets/icons/icon_lapis_main.svg";
import fotopadrao from "../../../assets/icons/fotopadrao_user_aside.svg";
import React, { useEffect, useState } from "react";
import AsideAdm from "../../../components/AsideAdm";
import api from "../../../utils/api";

function CadastroGestor() {

  // const [unidades, setUnidades] = useState<string[]>(
  [
    "São Bernardo do Campo",
    "Resende",
    "São José dos Pinhais",
    "Taubaté",
    "São Carlos"
  ]

  //);
  const [selectUnidade, setSelectUnidade] = useState<string>("");
  const [selectCargo, setSelectCargo] = useState<string>("");
  const [foto, setFoto] = useState<any>();
  const [nome, setNome] = useState<string>("");
  const [nif, setNif] = useState<string>("");
  const [dataNascimento, setDataNascimento] = useState<string>("");
  const [cargos, setCargos] = useState<any[]>([]);
  const [senha, setSenha] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [unidades, setUnidades] = useState<any[]>([]);
  const [objGestor, setObjGestor] = useState<any>();


  function listarUnidades() {
    api.get("unidades")
      .then((response: any) => {
        setUnidades(response.data);
       // console.log(response.data)
      })
      .catch((error: any) => {
        console.log("Error ao realizar um requisição", error);
      })
  }

  function listarCargos() {
    api.get("cargos")
      .then((response: any) => {
        setCargos(response.data);
       // console.log(response.data)
      })
      .catch((error: any) => {
        console.log("Error ao realizar um requisição", error);
      })
  }

  function filtroTipoUsuarios() {
    api.get("tiposusuarios")
      .then((response: any) => {
       const Gestor = response.data.find((tipoUsuario: any)=> tipoUsuario.titulo_tipo_usuario == "Gestor");
       setObjGestor(Gestor);
       console.log(objGestor)
      })
      .catch((error: any) => {
        console.log("Error ao realizar um requisição", error);
      })
  }

  function CadastrarDados(event: any) {
    event.preventDefault();

    const formData = new FormData();

    formData.append("nome", nome);
    formData.append("email", email);
    formData.append("senha", senha);
    formData.append("nif", nif);
    formData.append("data_nascimento", dataNascimento);
    formData.append("id_tipo_usuario", objGestor.id);
    formData.append("id_unidade", selectUnidade);
    formData.append("id_cargo", selectCargo);
    formData.append("url_imagem", foto);


    api.post("usuarios", formData)
      .then((response: any) => {
        //console.log(response);
        alert("Usuário cadastrado com sucesso!");
      })
      .catch((error: any) => {
        console.log(error);
        alert("Falha ao cadastrar um novo usuário");
      })

  }

  function verificarFoto(event: any) {
    //console.log(event.target.files[0]);
    setFoto(event.target.files[0]);
  }

  // Efeito para carregar os usuários da API ao montar o componente
  useEffect(() => {
    listarUnidades();
    listarCargos();
    filtroTipoUsuarios();
  }, []);

  return (
    <main id="Cadastrar_Gestor">
      <AsideAdm />
      <section className="gestorPerfil">
        <div className="gestorPerfil_Secao">
          <div className="titulocadastro">
            <h1 className="titulo1">Cadastro Gestor</h1>
          </div>
          <div className="user_configgestor ">
            <input
              type="file"
              name="imagem"
              onChange={verificarFoto}
            />
            {/* <img
              className="gestor_FotoPadrao"
              src={fotopadrao}
              alt=""
              onChange={verificarFoto}
            /> */}
          </div>
          <div className="gestorPerfil_texto_imagem">
            <div className="centralizar">
              <div className="posicao_linha">
                <form className="form_cadastroGestor" action="" method="POST" onSubmit={CadastrarDados}>
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
                        onChange={(e) => setSelectUnidade(e.target.value)}
                        defaultValue={selectUnidade}
                        required
                      >
                        <option disabled value="">Selecione</option>
                        {
                          unidades.map((unidade: any, index: number) => {
                            return <option value={unidade.id} key={index}>{unidade.complemento}</option>
                          })
                        }
                      </select>
                    </div>
                  </div>
                  <div className="terceira_linha">
                    <div className="input input6">
                      <label htmlFor="Perfil">Senha</label>
                      <input
                        className="input_caixa"
                        type="password"
                        placeholder="Digite sua senha"
                        onChange={(e) => {
                          setSenha(e.target.value);
                        }}
                        required
                      />
                    </div>
                    <div className="input input7">
                      <label htmlFor="Cargo">Cargo</label>
                      <select
                        className="input_caixa"
                        name="selecionar"
                        id=""
                        placeholder="Selecione O cargo"
                        onChange={(e) => setSelectCargo(e.target.value)}
                        defaultValue={selectCargo}
                        required
                      >
                        <option disabled value="">Selecione</option>
                        {
                          cargos.map((cargo: any, index: number) => {
                            return <option value={cargo.id} key={index}>{cargo.nome_cargo}</option>
                          })
                        }
                      </select>
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
