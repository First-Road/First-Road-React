import "./style.css";

import { Link } from 'react-router-dom'
import AsideGestor from "../../../components/Aside_gestor";
import mapa from "../../../assets/icons/Map.svg"

function Dashboard() {


    return(
    <main id="dashboard">

        <AsideGestor/>
        <section className="container_dashboard">
          <h1>Dashboard</h1>
          <div className="dashboard_man">
            <div className="dashboard_one">
              <div className="dashboard_one_a">
                <span>Nome</span>
                <p>Maria de Lurdes Nascimento</p>
              </div>
              <div className="dashboard_one_b">
                <img
                  className="relogio_dashboard"
                  src="./assets/icons/Clock.svg"
                  alt=""
                />
                
              </div>
            </div>
            <div className="dashboard_two">
              <div className="dashboard_two_a">
                <span>Progresso:</span>
                <div className="dashboard_two_aa">
                  <progress id="file" max={100} value={60}>
                    {" "}
                  </progress>
                  <p>60%</p>
                </div>
              </div>
              <div className="dashboard_two_b">
                <span>Módulos:</span>
                <div className="dashboard_two_bb">
                  <a href="">
                    <img src={mapa} alt="" />
                  </a>
                  <a href="">
                    <img src={mapa} alt="" />
                  </a>
                  <a href="">
                    <img src={mapa} alt="" />
                  </a>
                  <a href="">
                    <img src={mapa} alt="" />
                  </a>
                  <a href="">
                    <img src={mapa} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      )
    
}

export default Dashboard