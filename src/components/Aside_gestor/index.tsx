import "../Aside_gestor/style.css"



//imagens
import logovw from "../../assets/icons/logo_vw_aside.svg";
import menubarras from "../../assets/icons/icons8-cardápio.svg"
import saida from "../../assets/icons/icon_voltar_aside.svg"
import logo from "../../assets/icons/Logo_FirstRoad_aside.svg"
import usuario from "../../assets/icons/user-regular (3) 8.svg"
import agenda from "../../assets/icons/agenda_aside.svg"
import gestao from "../../assets/icons/icon_3users.svg"
import livro from "../../assets/icons/livro_aside.svg"
import cadastro from "../../assets/icons/icon_3users_seting.svg"
import conteudo from "../../assets/icons/cadastro_conteudo_aside.svg"
import check from "../../assets/icons/list_check_aside.svg"
import dashboard from "../../assets/icons/dashboard_aside.svg"
import iconesuporte from "../../assets/icons/suporte_1.svg"
import PerfilGestor from "../../pages/Gestor/PerfilGestor";
import GestaoCadastro from "../../pages/Gestor/GestaoCadastro";
import CadastroColaborador from "../../pages/Gestor/CadastroColaborador1";
import TrilhaGestor from "../../pages/Gestor/TrilhaGestor";
import SuporteGestor from "../../pages/Gestor/SuporteGestor";
import { Link } from "react-router-dom";







function AsideGestor() {

  addEventListener("resize", () => {
    const asideGestor: any = window.innerWidth
    const aside: any = document.getElementById("aside")
    if (asideGestor >= "768") {
      aside.style.left = "0px"
    }
    else {
      aside.style.left = "-190px"

    }
  });


  function mostrarMenu() {
    const sombra: any = document.getElementById("sombra")
    const body: any = document.getElementById("body")
    const aside: any = document.getElementById("aside")
    if (window.getComputedStyle(aside).left == "0px") {
      aside.style.left = "-190px"
      sombra.style.right = "110vw"
      body.style.overflow = "auto"
    }
    else {
      aside.style.left = "0px"
      sombra.style.right = "0px"
      body.style.overflow = "hidden"
    }
  }


  return (
    <main id="aside_gestor">
      <div id="sombra" />
      <aside id="aside">
        <div className="posicionamento_elementos" id="posicao">
          <div className="imagem_volks">
            <img src={logovw} alt="logo da volks" />
          </div>
          <a className="menu_barras" id="menu" href="#" onClick={mostrarMenu}>
            <img src={menubarras} alt="menu" />
          </a>
          <div className="posicionamento_elementos2">
            {/*  <div class="moldura_config">
                  <img class="imagemfoto" src="./assets/icons/fotopadrao_user_aside.svg" alt="foto Perfil">
                  <a href=""><img class="config" src="./assets/icons/engrenagem_aside.svg" alt="config"></a>
              </div> */}
            <div className="menu_conteudo">
              <ul>
                <li>
                  <a><Link to={"../Perfil/Gestor"}>
                    <div>
                      <img
                        className="icon"
                        src={usuario}
                        alt="icone de usuario"

                      />
                    </div>
                    <span>Perfil</span></Link>
                  </a>
                </li>

                <li>
                  <a> <Link to={"../gestao/cadastro"}>
                    <div>
                      <img
                        className="icon"
                        src={gestao}
                        alt="icone agenda"
                      />
                    </div>
                    <span>Gestao Colaborador</span></Link>
                  </a>
                </li>

                <li>
                  <a> <Link to={"../cadastro/colaborador"}>
                    <div>
                      <img
                        className="icon"
                        src={cadastro}
                        alt="icone agenda"
                      />
                    </div>
                    <span>Cadastro Colaborador</span></Link>
                  </a>
                </li>
                <li>
                  <a> <Link to={"../trilha/gestor"}>
                    <div>
                      <img
                        className="icon"
                        src={check}
                        alt="icone agenda"
                      />
                    </div>
                    <span>Trilha de Conteúdo</span></Link>
                  </a>
                </li>
                <li>
                  <a> <Link to={"../dashboard"} >
                    <div>
                      <img
                        className="icon"
                        src={dashboard}
                        alt="icone agenda"
                      />
                    </div>
                    <span>Dashboard</span></Link>
                  </a>
                </li>
                <li>
                  <a><Link to={"../suporte/gestor"}>
                    <div>
                      <img
                        className="icon"
                        src={iconesuporte}
                        alt="icone suporte"
                      />
                    </div>
                    <span>Suporte</span></Link>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="div_logofirst">
            <Link to={'/login'}>
              <img
                className="saida"
                src={saida}
                alt="icone saida"
              />
            </Link>
            <div className="logo_first">
              <img src={logo} alt="logo" />
            </div>
          </div>
        </div>
      </aside>
    </main>
  )
}
export default AsideGestor