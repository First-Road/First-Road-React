//Estilizaçao
import "./style.css";

import Aside from "../../components/aside";

//icons/images
import icone_Intranet from "../../assets/icons/Intranet.png"
import icone_PortalRH from "../../assets/icons/portalRH.png"
import icone_Chamado from "../../assets/icons/chamado.png"
import icone_Suporte from "../../assets/icons/suporte-tecnico 1.png"


function ConteudoColaborador (){

    return(


        <main id="aside_colaborador">
      <Aside />
        <section id="ConteudoColaborador">
  <header>
    <div className="header_titulo">
      <img src="assets/icons/iconeFistRoadHeader.png" alt="" />
      <h1>Módulo 1 - Instruções de Acesso </h1>
    </div>
  </header>
  <div className="conteudos grid">
    <p>
      Neste módulo você irá conhecer os sistemas que deverá acessar e como
      conseguir solicitar o permissionamento deles, clique no ícone do sistema
      para maiores informações:
    </p>
    <div className="icones_modulo">
      <a href="">
        <img src={icone_Intranet} alt="" />
        <span>Material do Módulo</span>
      </a>
      <a href="">
        <img src={icone_PortalRH} alt="" />
        <span>Informativos</span>
      </a>
      <div className="iconeChamado">
        <a href="">
          <img className="icone" src={icone_Chamado} alt="" />
          <span>Quiz</span>
        </a>
      </div>
      <a href="">
        <img src={icone_Suporte} alt="" />
        <span>Suporte</span>
      </a>
    </div>
    <div className="instrucoes">
      <h2>Intranet</h2>
      <p>
        Onde todos os funcionários encontram documentos, procedimentos, links
        para portais importantes como o PORTAL RH, Central de TI e Chamados.
      </p>
      <div className="botao">
        <a className="botao_acessar" href="">
          Acessar
        </a>
        <a className="botao_acessar" href="../telaParabens/Tela_Parabéns.html">
          Finalizar
        </a>
      </div>
    </div>
  </div>
</section>
</main>

    )
}

export default ConteudoColaborador