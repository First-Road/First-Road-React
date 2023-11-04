//Estilizaçao
import "./style.css";

import Aside from "../../../components/aside";
import win from "../../../assets/icons/win.gif"
import certificado2 from "../../../assets/icons/certificado_2.png"
import Iconesatisfacao from "../../../assets/icons/satisfacao.png"
import IconeTrilha from "../../../assets/icons/trilha.png"
import confetti from "../../../assets/icons/confetti.gif"
import fusca1 from "../../../assets/icons/fusca1.png"
import { Link } from "react-router-dom";


function ParabensColaborador() {

  function botaoConfetti() {
    let popup: any = document.getElementById("popup");
    popup.classList.add('active');
    

  }
  function botaoFechar() {
    let popup: any = document.getElementById("popup");
    popup.classList.remove('active');
    


  }


  return (
    <main id="aside_colaborador">
      <Aside />
      <div id="ParabensColaborador">
        <header>
          <div className="cabecalho_parabens ">
            <img className="ganhador" src={win} alt="" />
            <h1 id="tituloParabens">PARABÉNS</h1>
            <img className="ganhador2" src={win} alt="" />
          </div>
        </header>
        <div className="posicao_h2">
          <h4 id="textoInformativo">
            Agora você já sabe onde consultar as principais informações sobre a
            empresa, e abrir seus chamados. Não esqueça de solicitar os acessos que
            foram apontados no módulo. Boa Noticia, pneus calibrados, carro revisado,
            parabéns por chegar até aqui! Consulte e compartilhe seu certificado e não
            esqueça de realizar a pesquisa de satisfação para liberar o próximo
            módulo!
          </h4>
          <button id="botaoComemore" onClick={botaoConfetti}>Comemore!</button>
          <div id="popup">
            <b className="close" onClick={botaoFechar}>x</b>
            <div className="caixaParabens">
              <h3>Parabéns pela sua conquista!</h3>
              <img
                className="confetiFundo"
                src={confetti}
                alt=""
              />
              <img src={fusca1} alt="" />
              <h3>Você finalizou todos os Módulos!</h3>
            </div>
          </div>
        </div>
      
        <div id="botoes_footer">
          <div id="botao">
            <a className="botao_certificado"><Link to ={"../VisualizarCertificadosColaborador"}>
              <img
                className="icone_certificado"
                src={certificado2}
                alt=""
              />
              certificado</Link>
            </a>
          </div>
          <div id="botao">
            <a className="botao_satisfacao"><Link to ={"../PesquisaSatisfacaoColaborador"}>
              <img
                className="icone_satisfacao"
                src={Iconesatisfacao}
                alt=""
              />
              pesquisa de satisfacao</Link>
            </a>
          </div>
          <div id="botao">
            <a className="botao_trilha"><Link to ={"../TrilhaColaborador"}>
              <img className="icone_trilha" src={IconeTrilha} alt="" />
              trilha</Link>
            </a>
          </div>
        </div>
      </div>
    </main>


  )
}

export default ParabensColaborador;