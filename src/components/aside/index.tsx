import "./style.css";


//imagens
import logovw from "../../assets/icons/logo_vw_aside.svg";
import menubarras from "../../assets/icons/icons8-cardápio.svg"
import user from "../../assets/icons/fotopadrao_user_aside.svg"
import engrenagem from "../../assets/icons/engrenagem_aside.svg"
import home from "../../assets/icons/Home_.svg"
import caminhao from "../../assets/icons/Icone_Caminhão_home.svg"
import vector from "../../assets/icons/Vector.svg"
import calendario from "../../assets/icons/calendario_home.svg"
import suporte from "../../assets/icons/suporte_1.svg"
import certificado from "../../assets/icons/certificadoSVG.svg"
import saida from "../../assets/icons/icon_voltar_aside.svg"
import logo from "../../assets/icons/Logo_FirstRoad_aside.svg"


//hooks
import { Link } from 'react-router-dom'




function Aside () {
 
  addEventListener("resize", () => {
    const aside: any = document.getElementById("aside")
    const eventoMenu: any = window.innerWidth
    if (eventoMenu >= "768") {
      aside.style.left = "0px"
    }
    else {
      aside.style.left = "-140px"

    }
  });

  function mostrarMenu() {

    const sombra: any = document.getElementById("sombra")
    const body: any = document.getElementById("body")
    const aside: any = document.getElementById("aside")

    if (window.getComputedStyle(aside).left == "0px") {
      aside.style.left = "-140px"
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

    <>

      <div id="sombra" />
      <aside id="aside">
        <div className="posicionamento_elementos" id="posicao">
          <div className="posicao_grupo1">
            <div className="imagem_volks">
              <img src={logovw} alt="logo da volks" />
            </div>
            <a className="menu_barras" id="menu" href="#" onClick={mostrarMenu}>
              <img src={menubarras} alt="menu" />
            </a>
            <div className="posicionamento_elementos2">
              <div className="moldura_config">
                <img
                  className="imagemfoto"
                  src={user}
                  alt="foto Perfil"
                />
                <a href="">
                  <img
                    className="config"
                    src={engrenagem}
                    alt="config"
                  />
                </a>
              </div>
              <div className="menu_conteudo">
                <ul>

                  <li >
                    <a><Link to={"../HomeColaborador"}>
                      <div className="home2">
                        <img
                          className="icon icon_home"
                          src={home}
                          alt="icone home"
                        />
                      </div>
                      <span className="texto_link">Tela Inicial</span></Link>
                    </a>
                  </li>

                  <li>
                    <a><Link to={"../AvatarColaborador"}>
                      <div>
                        <img
                          className="icon"
                          src={caminhao}
                          alt="icone avatar"
                        />
                      </div>
                      <span className="texto_link">Avatar</span></Link>
                    </a>
                  </li>
                  <li className="listameio">
                    <a><Link to={"/TrilhaColaborador"}>
                      <div>
                        <img
                          className="icon_trilha"
                          src={vector}
                          alt="icone trilha"
                        />
                      </div>
                      <span className="texto_link">Trilha</span></Link>
                    </a>
                  </li>
                  <li>
                    <a href="../agenda_colaborador_ingressante/index.html">
                      <div>
                        <img
                          className="icon"
                          src={calendario}
                          alt="icone agenda"
                        />
                      </div>
                      <span className="texto_link">Agenda</span>
                    </a>
                  </li>
                  <li className="suporte">
                    <Link to={"/SuporteColaborador"}>
                      <div>
                        <img
                          className="icon"
                          src={suporte}
                          alt="icone suporte"
                        />
                      </div>
                      <span className="texto_link">Suporte</span>
                    </Link>

                  </li>
                  <li className="certi">
                  <Link to={'/VisualizarCertificadosColaborador'}>
                      <div>
                        <img
                          className="icon icon_certi"
                          src={certificado}
                          alt="icone certificado"
                        />
                      </div>
                      <span className="texto_link">Certificados</span>
                    </Link>
                  </li>

                </ul>
              </div>
            </div>
          </div>
          <div className="div_logofirst">
            <a href="">
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
    </>)
}
export default Aside;









