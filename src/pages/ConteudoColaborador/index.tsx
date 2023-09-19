//Estilizaçao
import "./style.css";

import Aside from "../../components/aside";
import React, { useEffect, useState } from "react";

//icons/images
import icone_Intranet from "../../assets/icons/Intranet.png"
import icone_PortalRH from "../../assets/icons/portalRH.png"
import icone_Chamado from "../../assets/icons/chamado.png"
import icone_Suporte from "../../assets/icons/suporte-tecnico 1.png"
import { Link } from "react-router-dom";


function ConteudoColaborador (){

  const [totalTimeInseconds, setTotalTimeInSecons] = useState(60*60)

  const minutos = Math.round(totalTimeInseconds / 60);
  const segundos = totalTimeInseconds % 60;

  useEffect(() => {
      if(totalTimeInseconds === 0){
          alert("O tempo acabou!")
          return
      }else{
      setTimeout(() =>{
          setTotalTimeInSecons(totalTimeInseconds -1)
      }, 1000)
  }
      
  }, [totalTimeInseconds])



    return(


        <main id="aside_colaborador">
      <Aside />
        <div id="ConteudoColaborador">
  <header>
    <div className="header_titulo">
      
      <h1>Módulo 1 - Instruções de Acesso </h1>
      <div className="cronometroColaborador">
                        <span>{minutos.toString().padStart(2, "0")}</span>
                        <span>:</span>
                        <span>{segundos.toString().padStart(2, "0")}</span>

                    </div>
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
      <a><Link to={"../SuporteColaborador"}>
        <img src={icone_Suporte} alt="" />
        <span>Suporte</span></Link>
      </a>
    </div>
    
    <div className="instrucoes">
    <div className="itensCaixa">
      <h2 className="tituloConteudo1">Intranet</h2>
      <p>
        Onde todos os funcionários encontram documentos, procedimentos, links
        para portais importantes como o PORTAL RH, Central de TI e Chamados.
      </p>
      </div>
      <div className="botao">
        <a className="botao_acessar" href="">
          Acessar
        </a>
        <a className="botao_acessar"><Link to ={"/ParabensColaborador"}>
          Finalizar</Link>
        </a>
      </div>
    </div>
  </div>
</div>
</main>

    )
}

export default ConteudoColaborador