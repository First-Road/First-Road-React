
//Estilizaçao
import "./style.css";

import Aside from "../../../components/aside";


import IconeInsatisfeito from "../../../assets/icons/insatisfeito.gif"
import IconeNaoGostei from "../../../assets/icons/nao_gostei.gif"
import Gostei from "../../../assets/icons/gostei.gif"
import GosteiMuito from "../../../assets/icons/gostei_muito.gif"


function PesquisaSatisfacaoColaborador(){

    return (
        <main id="aside_colaborador">
        <Aside />
    <div id="pesquisa_satisfacao">
    <h3 className="tituloPesquisaSatisfacao">Pesquisa de Satisfação</h3>
    <div className="icones">
      <a href="#">
        <img src={IconeInsatisfeito} alt="" />
      </a>
      <a href="#">
        <img src={IconeNaoGostei} alt="" />
      </a>
      <a href="#">
        <img src={Gostei} alt="" />
      </a>
      <a href="#">
        <img src={GosteiMuito} alt="" />
      </a>
    </div>
    <h2>Conte para nós como foi sua experiência</h2>
    <textarea name="feedback" id="" cols={30} rows={10} defaultValue={""} />
    <div className="botao_enviar">
      <a href="#">Enviar Pesquisa</a>
    </div>
  </div>
  </main>
  )
}

export default PesquisaSatisfacaoColaborador;