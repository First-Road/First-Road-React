//Estilização
import "./perfilGestor.css";

//Componentes
import { Link } from "react-router-dom";
import AsideGestor from "../../../components/Aside_gestor";
import fotopadrao from "../../../assets/icons/fotopadrao_user_aside.svg"
import React, { useEffect,useState } from 'react';
/* import api from "../../../Utils/Api"; */

function PerfilGestor() {

  

  // Defina estados para cada campo de entrada
  const [nomeCompleto, setNomeCompleto] = useState<string>("");
  const [nif, setNif] = useState<string>("");
  const [dataNascimento, setDataNascimento] = useState<string>("");
  const [unidade, setUnidade] = useState<string>("");
  const [perfil, setPerfil] = useState<string>("");
  const [cargo, setCargo] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  // Funções de manipulação de eventos para atualizar os estados

  function CadastrarGestor(event: React.FormEvent) {

    event.preventDefault();

    const dadosGestor = {

      Nome: nomeCompleto,
      Nif: nif,
      DataNascimento: dataNascimento,
      Unidade: unidade,
      Perfil: perfil,
      Cargo: cargo,
      Email: email

    }

    /* api.post("dadosColaborador",dadosColaborador)
        .then((response: any) => {
            console.log(response);
            alert("Colaborador cadastrado com sucesso!!!!");
        })
        .catch((error: any) => {
            console.log(error);
            alert("Falha ao cadastrar o calaborador");
        }) */


  }

  // Aqui, você pode fazer algo com os dados, como enviá-los para o servidor

  // Apenas exibindo os valores no console
  console.log({
    nomeCompleto,
    nif,
    dataNascimento,
    unidade,
    perfil,
    cargo,
    email,
  });

  useEffect(() => {
    //executa uma ação apos o componente ser recarregado 
    CadastrarGestor;
}, [])


return (
  <main id="perfil_gestor">
    <AsideGestor />
    <section className="gestorPerfil">
      <div className="gestorPerfil_Secao">
        <div className="titulocadastro">
          <h1 className="titulo1">Editar Perfil</h1>
        </div>
        <div className="user_configgestor ">
          <img className="gestor_FotoPadrao" src={fotopadrao} alt="" />
        </div>
        <div className="gestorPerfil_texto_imagem">
          <div className="centralizar">
            <div className="posicao_linha">
              <form  className="form_perfil" action="" method="POST" onSubmit={PerfilGestor}>
                <div className="primeira_linha">
                  <div className="input input1">
                    <label htmlFor="Nome completo">Nome Completo</label>
                    <input
                      className="input_caixa"
                      type="text"
                      placeholder="Digite o nome completo do colaborador"
                      onChange={(e) => {
                        setNomeCompleto(e.target.value);
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
                      <option selected  className="Colaborador_selecao" disabled value="Colaborador">Gestor</option>
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
export default PerfilGestor;


