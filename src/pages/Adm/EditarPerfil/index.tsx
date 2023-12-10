//Estilização
import "./perfilAdm.css";

//Componentes
import { Link, useNavigate, useParams } from "react-router-dom";
import AsideAdm from "../../../components/AsideAdm";
import fotopadrao from "../../../assets/icons/fotopadrao_user_aside.svg"
import React, { useEffect,useState } from 'react';
import api from "../../../utils/api";

/* import api from "../../../Utils/Api"; */

function PerfilGestor() {

  const { idUsuario } = useParams();
  const navigate = useNavigate();

  // Defina estados para cada campo de entrada
  const [nomeCompleto, setNomeCompleto] = useState<string>("");
  const [nif, setNif] = useState<string>("");
  const [foto, setFoto] = useState<string>("");
  const [dataNascimento, setDataNascimento] = useState<string>("");
  const [unidade, setUnidade] = useState<string>("");
  const [perfil, setPerfil] = useState<string>("");
  const [cargo, setCargo] = useState<string>("");
  const [email, setEmail] = useState<string>("");

 


    function buscarUsuarioPorID() {
        //estrutura basica para consumir API
        api.get("usuarios/" + idUsuario)
            .then((response: any) => {
                console.log(response);

                //seta os valores referente as informações do usuario
                setNomeCompleto(response.data.nome);
                setNif(response.data.nif)
                setFoto(response.data.user_img);
                setEmail(response.data.email);
                setDataNascimento(response.data.data_nascimento);
                setUnidade(response.data.id_unidade.complemento);
                setPerfil(response.data.perfil);
                setCargo(response.data.cargo);

            })
            .catch((error: any) => console.log(error))

    }
  


    return (
    <main id="perfil_gestor">
      <AsideAdm />
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
                <form className="form_adm" action="" method="POST" onSubmit={PerfilGestor}>
                  <div className="primeira_linha">
                    <div className="input input1">
                      <label htmlFor="Nome completo">Nome Completo</label>
                      <input
                        className="input_caixa"
                        type="text"
                        placeholder="Digite o nome completo do colaborador"
                        onChange={(e) => setNomeCompleto(e.target.value)}
                        
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
                        <option selected  className="Colaborador_selecao" disabled value="Adm">Adm</option>
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


