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







function AsideGestor() {
    
    addEventListener("resize", () => {
        const asideGestor: any = window.innerWidth
        const aside: any = document.getElementById("aside")
        if (asideGestor >= "768"){
            aside.style.left = "0px"
        }
        else{
            aside.style.left = "-190px"
    
        }
    });


    function mostrarMenu() {
        const sombra: any = document.getElementById("sombra")
        const body: any = document.getElementById("body")
        const aside: any = document.getElementById("aside")
        if (window.getComputedStyle(aside).left == "0px") {
            aside.style.left = "-190px"
            sombra.style.right ="110vw"
            body.style.overflow = "auto"
        }
        else {
            aside.style.left = "0px"
            sombra.style.right = "0px"
            body.style.overflow = "hidden"
        }
    }


    return(
        <main id="aside_gestor">
  <div id="sombra" />
  <aside id="aside">
    <div className="posicionamento_elementos" id="posicao">
      <div className="imagem_volks">
        <img src={logovw} alt="logo da volks" />
      </div>
      <a className="menu_barras" id="menu" href="#" onClick={mostrarMenu}>
        <img src= {menubarras} alt="menu" />
      </a>
      <div className="posicionamento_elementos2">
        {/*  <div class="moldura_config">
                  <img class="imagemfoto" src="./assets/icons/fotopadrao_user_aside.svg" alt="foto Perfil">
                  <a href=""><img class="config" src="./assets/icons/engrenagem_aside.svg" alt="config"></a>
              </div> */}
        <div className="menu_conteudo">
          <ul>
            <li>
              <a href="../gestaoDashiboard/index.html">
                <div>
                  <img
                    className="icon"
                    src={usuario}
                    alt="icone de usuario"
                  />
                </div>
                <span>Perfil</span>
              </a>
            </li>
            <li>
              <a href="../editarAgendaColaboradorIngressante/index.html">
                <div>
                  <img
                    className="icon1"
                    src={agenda}
                    alt="icone de agenda"
                  />
                </div>
                <span>Gestão de Agenda</span>
              </a>
            </li>
            <li>
              <a href="../gestaoColaboradorGestor/index.html">
                <div>
                  <img
                    className="icon"
                    src={gestao}
                    alt="icone agenda"
                  />
                </div>
                <span>Gestao Colaborador</span>
              </a>
            </li>
            <li>
              <a href="../_gestaoDeConteudo/index.html">
                <div>
                  <img
                    className="icon"
                    src={livro}
                    alt="icone agenda"
                  />
                </div>
                <span>Gestao de Conteudo</span>
              </a>
            </li>
            <li>
              <a href="../cadastro_colaborador_gestor/index.html">
                <div>
                  <img
                    className="icon"
                    src={cadastro}
                    alt="icone agenda"
                  />
                </div>
                <span>Cadastro Colaborador</span>
              </a>
            </li>
            <li>
              <a href="../cadastroDeConteudos/index.html">
                <div>
                  <img
                    className="icon"
                    src={conteudo}
                    alt="icone agenda"
                  />
                </div>
                <span>Cadastro Conteudo</span>
              </a>
            </li>
            <li>
              <a href="../editarAgendaColaboradorIngressante/index.html">
                <div>
                  <img
                    className="icon"
                    src={agenda}
                    alt="icone agenda"
                  />
                </div>
                <span>Agenda Colaborador</span>
              </a>
            </li>
            <li>
              <a href="../trilhaDeConteudo/index.html">
                <div>
                  <img
                    className="icon"
                    src={check}
                    alt="icone agenda"
                  />
                </div>
                <span>Configuração de Trilha</span>
              </a>
            </li>
            <li>
              <a href="../dashborad/dashboard.html">
                <div>
                  <img
                    className="icon"
                    src={dashboard}
                    alt="icone agenda"
                  />
                </div>
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="../dashborad/dashboard.html">
                <div>
                  <img
                    className="icon"
                    src={iconesuporte}
                    alt="icone suporte"
                  />
                </div>
                <span>Suporte</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="div_logofirst">
        <a href="/login/login.html">
          <img
            className="saida"
            src={saida}
            alt="icone saida"
          />
        </a>
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