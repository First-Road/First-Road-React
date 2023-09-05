//Estilizaçao
import "./style.css";
import { Link } from 'react-router-dom'
import Aside from "../../components/aside";



import Icone1 from "../../assets/icons/Vector (4).png"
import IconeCaminhao from "../../assets/icons/Icone_Caminhão.png"
import IconeLocalizacao from "../../assets/icons/location (1).png"
import IconeAgenda from "../../assets/icons/Icone_Agenda.png"


function HomeColaborador (){
    return(

        <main id="aside_colaborador">
        <Aside/>
        <div  id="imagem_botoes">
  <div className="posicao_icone">
    <ul>
      <li>
        <a href="../tela_perfil/index.html">
          <div>
            <img src={Icone1} alt="" />
          </div>
          <span>Perfil</span>
        </a>
      </li>
      <li>
        <a href="../tela_avatar/index.html">
          <div>
            <img src={IconeCaminhao} alt="" />
          </div>
          <span>Avatar</span>
        </a>
      </li>
      <li>
        <a href="../trilhacolaborador/index.html">
          <div>
            <img src={IconeLocalizacao} alt="" />
          </div>
          <span>Trilha</span>
        </a>
      </li>
      <li>
        <a href="../agenda_colaborador_ingressante/index.html">
          <div>
            <img
              src={IconeAgenda}
              alt=""
            />
          </div>
          <span>Agenda</span>
        </a>
      </li>
    </ul>
  </div>
</div>
</main>

    )
}


export default HomeColaborador;
