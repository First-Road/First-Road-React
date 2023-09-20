import "./style.css";

import { Link } from "react-router-dom";
import AsideGestor from "../../../components/Aside_gestor";
import iconelupa from "../../../assets/icons/lupa_pesquisa.svg"
import iconeajuda from "../../../assets/icons/iconeajuda.svg"
import iconechat from "../../../assets/icons/chat icon.svg"
import iconeligacao from "../../../assets/icons/phone icon.svg"

function SuporteGestor() {
  return (
    <main id="suporte">
         <AsideGestor/>
      <section className="cabecalho">
        <div className="texto">
          {/* <h1>Bem vindo ao suporte First Road</h1> */}
          <h2>Como podemos ajudar?</h2>
        </div>
        <section className="conteudo">
          <nav className="navegacao">
            <div className="grupo_pesquisar">
              <img src={iconelupa} alt="icone lupa" />
              <input
                type="text"
                placeholder="Por favor digite aqui a sua dúvida"
              />
            </div>
            <h3>Principais respostas :</h3>
            <nav className="navegacao2">
              <nav className="navegacao3">
                <ul>
                  <li>
                    <a href="">
                      <img
                        src={iconeajuda}
                        alt="icone ajuda"
                      />
                      Esqueci a senha
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        src={iconeajuda}
                        alt="icone ajuda"
                      />
                      Conteúdo
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        src={iconeajuda}
                        alt="icone ajuda"
                      />
                      Tutorial
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        src={iconeajuda}
                        alt="icone ajuda"
                      />
                      Perfis de acesso
                    </a>
                  </li>
                 {/*  <li>
                    <a href="">
                      <img
                        src={iconeajuda}
                        alt="icone ajuda"
                      />
                      Certificados
                    </a>
                  </li> */}
                </ul>
              </nav>
              <div className="navegacao4">
                <nav className="card1">
                  <a href="">
                    Suporte via chat{" "}
                    <img src={iconechat} alt="icone chat" />
                  </a>
                </nav>
                <nav className="card2">
                  <a href="">
                    Suporte via ligação{" "}
                    <img
                      src={iconeligacao}
                      alt="icone telefone"
                    />
                  </a>
                </nav>
              </div>
            </nav>
          </nav>
        </section>
      </section>
    </main>
  );
}
export default SuporteGestor
