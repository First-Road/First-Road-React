import "./style.css";
import React from "react";

import Aside from "../../components/aside";


function SuporteColaborador() {
  return (

    <main id="aside_colaborador">
      <Aside />
      <section className="cabecalho">
        <div className="texto">
          {/* <h1>Bem vindo ao suporte First Road</h1> */}
          <h2>Como podemos ajudar?</h2>
        </div>
        <section className="conteudo">
          <nav className="navegacao">
            <div className="grupo_pesquisar">
              <img src="assets/icons/icons8-pesquisar 1.png" alt="icone lupa" />
              <input type="text" placeholder="Por favor digite aqui a sua dúvida" />
            </div>
            <h3>Principais respostas :</h3>
            <nav className="navegacao2">
              <nav className="navegacao3">
                <ul>
                  <li>
                    <a href="">
                      <img src="assets/icons/iconeajuda.svg" alt="icone ajuda" />
                      Esqueci a senha
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src="assets/icons/iconeajuda.svg" alt="icone ajuda" />
                      Conteúdo
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src="assets/icons/iconeajuda.svg" alt="icone ajuda" />
                      Tutorial
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src="assets/icons/iconeajuda.svg" alt="icone ajuda" />
                      Perfis de acesso
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src="assets/icons/iconeajuda.svg" alt="icone ajuda" />
                      Certificados
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="navegacao4">
                <nav className="card1">
                  <a href="">
                    Suporte via chat{" "}
                    <img src="assets/icons/chat icon.svg" alt="icone chat" />
                  </a>
                </nav>
                <nav className="card2">
                  <a href="">
                    Suporte via ligação{" "}
                    <img src="assets/icons/phone icon.svg" alt="icone telefone" />
                  </a>
                </nav>
              </div>
            </nav>
          </nav>
        </section>
      </section>
    </main>
  )
}


export default SuporteColaborador;