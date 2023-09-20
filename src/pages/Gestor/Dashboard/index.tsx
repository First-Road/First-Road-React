import "./style.css";

import { Link } from "react-router-dom";
import AsideGestor from "../../../components/Aside_gestor";

function Dashboard() {
  return (
    <main id="dashboard_grafico">
      <AsideGestor/>
      <section className="posicao_conteudo">
        <h1>Dashboard</h1>
        <div className="posicao_grafico">
          <div className="caixa">
            <div className="modulo1">
              <div className="barras">
                <div className="barra_externa">
                  <div className="barra_interna1" />
                  <span>75%</span>
                </div>
                <div className="barra_externa">
                  <div className="barra_interna2" />
                  <span>50%</span>
                </div>
                <div className="barra_externa">
                  <div className="barra_interna3" />
                  <span>25%</span>
                </div>
              </div>
              <div className="text">
                <span className="text_modulo">Módulo 1</span>
              </div>
            </div>
            <div className="modulo2">
              <div className="barras">
                <div className="barra_externa">
                  <div className="barra_interna1" />
                  <span>75%</span>
                </div>
                <div className="barra_externa">
                  <div className="barra_interna2" />
                  <span>50%</span>
                </div>
                <div className="barra_externa">
                  <div className="barra_interna3" />
                  <span>25%</span>
                </div>
              </div>
              <div className="text">
                <span className="text_modulo">Módulo 2</span>
              </div>
            </div>
            <div className="modulo3">
              <div className="barras">
                <div className="barra_externa">
                  <div className="barra_interna1" />
                  <span>75%</span>
                </div>
                <div className="barra_externa">
                  <div className="barra_interna2" />
                  <span>50%</span>
                </div>
                <div className="barra_externa">
                  <div className="barra_interna3" />
                  <span>25%</span>
                </div>
              </div>
              <div className="text">
                <span className="text_modulo">Módulo 3</span>
              </div>
            </div>
            <div className="modulo4">
              <div className="barras">
                <div className="barra_externa">
                  <div className="barra_interna1" />
                  <span>75%</span>
                </div>
                <div className="barra_externa">
                  <div className="barra_interna2" />
                  <span>50%</span>
                </div>
                <div className="barra_externa">
                  <div className="barra_interna3" />
                  <span>25%</span>
                </div>
              </div>
              <div className="text">
                <span className="text_modulo">Módulo 4</span>
              </div>
            </div>
            <div className="modulo5">
              <div className="barras">
                <div className="barra_externa">
                  <div className="barra_interna1" />
                  <span>75%</span>
                </div>
                <div className="barra_externa">
                  <div className="barra_interna2" />
                  <span>50%</span>
                </div>
                <div className="barra_externa">
                  <div className="barra_interna3" />
                  <span>25%</span>
                </div>
              </div>
              <div className="text">
                <span className="text_modulo">Módulo 5</span>
              </div>
            </div>
            <div className="posicao_legenda">
              <div className="posicao_elemento_legenda">
                <div className="verde" />
                <span>Concluido</span>
              </div>
              <div className="posicao_elemento_legenda">
                <div className="azul" />
                <span>Em andamento</span>
              </div>
              <div className="posicao_elemento_legenda">
                <div className="laranja" />
                <span>Atraso</span>
              </div>
            </div>
          </div>
        </div>
        <div className="posicao_quadrado">
          <div className="quadrado">
            <span>Colaboradores</span>
            <span className="text_conteudo">150</span>
          </div>
          <div className="quadrado">
            <span>Aproveitamento</span>
            <span className="text_conteudo">70%</span>
          </div>
          <div className="quadrado">
            <span>Ociosidade</span>
            <span className="text_conteudo">10%</span>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Dashboard
