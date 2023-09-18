import "./style.css";
import cardapio from "../../assets/icons/icons8-cardápio.svg";
import logoVW from "../../assets/icons/logo_vw_aside.svg";
import perfil from "../../assets/icons/user-regular.svg";
import cadastroGestor from "../../assets/icons/icon_3users_seting.svg";
import gestaoUsuario from "../../assets/icons/icon_3users.svg";
import cadastroUnidade from "../../assets/icons/icon_gt_unidade.svg";
import gestaoUnidade from "../../assets/icons/icon_gt_unidade.svg";
import cadastroUO from "../../assets/icons/icon_carrinho-aside.svg";
import gestaoUO from "../../assets/icons/icon_carrinho-aside.svg";
import cadastroConteudo from "../../assets/icons/icon_carrinho-aside.svg";
import casdastroTrilha from "../../assets/icons/list_check_aside.svg";
import voltar from "../../assets/icons/icon_voltar_aside.svg";
import logoFirst from "../../assets/icons/Logo_FirstRoad_aside.svg";

import { Link } from "react-router-dom";

function AsideAdm() {
  addEventListener("resize", () => {
    const aside: any = document.getElementById("asideAdm");
    const eventoMenu: any = window.innerWidth;
    if (eventoMenu >= "768") {
      aside.style.left = "0px";
    } else {
      aside.style.left = "-247px";
    }
  });

  function mostrarMenu(e: any) {
    e.preventDefault();
    const sombra: any = document.getElementById("sombra");
    const body: any = document.getElementById("body");
    const aside: any = document.getElementById("asideAdm");

    if (window.getComputedStyle(aside).left == "0px") {
      aside.style.left = "-247px";
      sombra.style.right = "110vw";
      body.style.overflow = "auto";
    } else {
      aside.style.left = "0px";
      sombra.style.right = "0px";
      body.style.overflow = "hidden";
    }
  }

  return (
    <>
    
    <div id="sombra" />
    <aside id="asideAdm">
      <div className="posicionamento_elementos" id="posicao">
        <div className="imagem_volks">
          <img src={logoVW} alt="logo da volks" />
        </div>

        <Link className="menu_barras" id="menu" to={"#"} onClick={mostrarMenu}>
          <img src={cardapio} alt="menu" />
        </Link>

        <div className="posicionamento_elementos2">
          <div className="menu_conteudo">
            <ul>
              <li>
                <Link to={"/perfil"}>
                  <div>
                    <img src={perfil} alt="" />
                  </div>
                  <span>Perfil</span>
                </Link>
              </li>

              <li>
                <Link to={"/cadastroGestor"}>
                  <div>
                    <img
                      className="icon"
                      src={cadastroGestor}
                      alt="icone 3users seting"
                    />
                  </div>
                  <span>Cadastro Gestor</span>
                </Link>
              </li>
              <li>
                <Link to={"/gestaoUsuario"}>
                  <div>
                    <img
                      className="icon"
                      src={gestaoUsuario}
                      alt="icone user3"
                    />
                  </div>
                  <span>Gestão Usuario</span>
                </Link>
              </li>

              <li>
                <Link to={"#"}>
                  <div>
                    <img
                      className="icon"
                      src={cadastroUnidade}
                      alt="icone user3_seting"
                    />
                  </div>
                  <span>Cadastro Unidade</span>
                </Link>
                <a href=""></a>
              </li>

              <li>
                <Link to={"#"}>
                  <div>
                    <img
                      className="icon"
                      src={gestaoUnidade}
                      alt="icone user3_seting"
                    />
                  </div>
                  <span>Gestão Unidade</span>
                </Link>
              </li>

              <li>
                <Link to={"#"}>
                  <div>
                    <img className="icon" src={cadastroUO} alt="icone carro" />
                  </div>
                  <span>Cadastro U.O.</span>
                </Link>
              </li>

              <li>
                <Link to={"/gestaoUO"}>
                  <div>
                    <img
                      className="icon"
                      src={gestaoUO}
                      alt="icone user3_seting"
                    />
                  </div>
                  <span>Gestão U.O.</span>
                </Link>
                <a href=""></a>
              </li>
              <li>
                <Link to={"/cadastroConteudo"}>
                  <div>
                    <img
                      className="icon"
                      src={cadastroConteudo}
                      alt="icone lista_conteudo"
                    />
                  </div>
                  <span>Cadastro Conteúdo</span>
                </Link>
              </li>
              <li>
                <Link to={"#"}>
                  <div>
                    <img
                      className="icon"
                      src={casdastroTrilha}
                      alt="icone user3_seting"
                    />
                  </div>
                  <span>Cadastro Trilha</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="div_logofirst">
          <Link to={"#"}>
            <img className="saida" src={voltar} alt="icone saida" />
          </Link>

          <Link to={"#"}>
            <div className="logo_first">
              <img src={logoFirst} alt="logo" />
            </div>
          </Link>
        </div>
      </div>
    </aside>
    </>
  );
}

export default AsideAdm;
