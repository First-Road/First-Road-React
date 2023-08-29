import "./style.css";


//imagens
import logo from "../../assets/icons/Logo_FirstRoad_aside.svg";



function Aside () {
 

 

  addEventListener("resize", () => {
    const aside: any = document.getElementById("aside") as HTMLElement
    const eventoMenu: any = window.innerWidth 
    if (eventoMenu >= "768"){
        aside.style.left = "0px"
    }
    else{
        aside.style.left = "-140px"

    }
});

function mostrarMenu() {
  const menu: any = document.getElementById("menu") as HTMLElement
  const sombra: any = document.getElementById("sombra") as HTMLElement
  const body: any = document.getElementById("body") as HTMLElement
  const aside: any = document.getElementById("aside") as HTMLElement

  if (window.getComputedStyle(aside).left == "0px") {
      aside.style.left = "-140px"
      sombra.style.right ="110vw"
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
    <main id="aside_colaborador">
    <div id="sombra" />
    <aside id="aside">
      <div className="posicionamento_elementos" id="posicao">
        <div className="posicao_grupo1">
          <div className="imagem_volks">
            <img src={logo} alt="logo da volks" />
          </div>
          <a className="menu_barras" id="menu" href="#" onClick = {mostrarMenu}>
            <img src="assets/icons/icons8-cardápio.svg" alt="menu" />
          </a>
          <div className="posicionamento_elementos2">
            <div className="moldura_config">
              <img
                className="imagemfoto"
                src="./assets/icons/fotopadrao_user_aside.svg"
                alt="foto Perfil"
              />
              <a href="">
                <img
                  className="config"
                  src="../assets/icons/engrenagem_aside.svg"
                  alt="config"
                />
              </a>
            </div>
            <div className="menu_conteudo">
              <ul>
                <li>
                  <a href="../tela_avatar/index.html">
                    <div>
                      <img
                        className="icon"
                        src="./assets/icons/Icone_Caminhão_home.svg"
                        alt="icone avatar"
                      />
                    </div>
                    <span className="texto_link">Avatar</span>
                  </a>
                </li>
                <li className="listameio">
                  <a href="../trilhacolaborador/index.html">
                    <div>
                      <img
                        className="icon_trilha"
                        src="assets/icons/Vector.svg"
                        alt="icone trilha"
                      />
                    </div>
                    <span className="texto_link">Trilha</span>
                  </a>
                </li>
                <li>
                  <a href="../agenda_colaborador_ingressante/index.html">
                    <div>
                      <img
                        className="icon"
                        src="./assets/icons/calendario_home.svg"
                        alt="icone agenda"
                      />
                    </div>
                    <span className="texto_link">Agenda</span>
                  </a>
                </li>
                <li className="suporte">
                  <a href="../suporte_colaborador/index.html">
                    <div>
                      <img
                        className="icon"
                        src="assets/icons/suporte_1.svg"
                        alt="icone suporte"
                      />
                    </div>
                    <span className="texto_link">Suporte</span>
                  </a>
                </li>
                <li className="certi">
                  <a href="">
                    <div>
                      <img
                        className="icon icon_certi"
                        src="./assets/icons/certificadoSVG.svg"
                        alt="icone certificado"
                      />
                    </div>
                    <span className="texto_link">Certificados</span>
                  </a>
                </li>
                <li className="certi">
                  <a href="../pagina_home/index.html">
                    <div>
                      <img
                        className="icon icon_certi"
                        src="./assets/icons/Home_.svg"
                        alt="icone home"
                      />
                    </div>
                    <span className="texto_link">Tela Inicial</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="div_logofirst">
          <a href="">
            <img
              className="saida"
              src="./assets/icons/icon_voltar_aside.svg"
              alt="icone saida"
            />
          </a>
          <div className="logo_first">
            <img src="./assets/icons/Logo_FirstRoad_aside.svg" alt="logo" />
          </div>
        </div>
      </div>
    </aside>
  </main> </>)  
}
export default Aside;









