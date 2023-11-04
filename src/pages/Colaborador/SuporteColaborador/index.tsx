import "./style.css";
import React from "react";
import { Link } from "react-router-dom";
import Aside from "../../../components/aside";



//icones/images
import iconeajuda from "../../../assets/icons/iconeajuda.svg"
import IconeTelefone from "../../../assets/icons/phone icon.svg"
import IconeChat from "../../../assets/icons/chat icon.svg"
import IconePesquisar from "../../../assets/icons/icons8-pesquisar 1.png"

function SuporteColaborador() {
  return (

    <main id="aside_colaborador">
      <Aside />
      <div className="cabecalho">
        <div className="texto">
          {/* <h1>Bem vindo ao suporte First Road</h1> */}
          <h2>Como podemos ajudar?</h2>
        </div>
        <section className="conteudo">
          <nav className="navegacao">
            <div className="grupo_pesquisar">
              <img src={IconePesquisar} alt="icone lupa" />
              <input type="text" placeholder="Por favor digite aqui a sua dúvida" />
            </div>
            <h3 id="titulo_principaisRespostas">Principais respostas :</h3>
            <nav className="navegacao2">
              <nav className="navegacao3">
                <ul>
                  <li>
                    <a href="">
                      <img src={iconeajuda} alt="icone ajuda" />
                      Esqueci a senha
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src={iconeajuda}alt="icone ajuda" />
                      Conteúdo
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src={iconeajuda} alt="icone ajuda" />
                      Tutorial
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src={iconeajuda} alt="icone ajuda" />
                      Perfis de acesso
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src={iconeajuda} alt="icone ajuda" />
                      Certificados
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="navegacao4">
                <nav className="card1">
                  <a href="">
                    Suporte via chat{" "}
                    <img src={IconeChat} alt="icone chat" />
                  </a>
                </nav>
                <nav className="card2">
                  <a href="">
                    Suporte via ligação{" "}
                    <img src={IconeTelefone} alt="icone telefone" />
                  </a>
                </nav>
              </div>
            </nav>
          </nav>
        </section>
      </div>
    </main>
  )
}


export default SuporteColaborador;