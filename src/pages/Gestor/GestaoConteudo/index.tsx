import "./style.css";

import { Link } from 'react-router-dom'
import AsideGestor from "../../../components/Aside_gestor";

function GestaoConteudo() {





    return(
    
        <main id="gestaoConteudo">
            <AsideGestor/>
            <section className="container_conteudos">
            <div className="titulo">
                <h1>Gestão Conteúdos</h1>
            </div>
            <div className="conteudo_check">
                <div className="checkbox">
                <input id="box" type="checkbox" />
                <label htmlFor="">Manual de boas vindas</label>
                </div>
                <div className="checkbox">
                <input id="box" type="checkbox" />
                <label htmlFor="">Configurar o banco de dados</label>
                </div>
                <div className="checkbox">
                <input id="box" type="checkbox" />
                <label htmlFor="">Baixar VS Code</label>
                </div>
                <div className="checkbox">
                <input id="box" type="checkbox" />
                <label htmlFor="">Configurar o Doker</label>
                </div>
                <div className="checkbox">
                <input id="box" type="checkbox" />
                <label htmlFor="">Conhecer as APIs</label>
                </div>
            </div>
            </section>
      </main>
    )
}
export default GestaoConteudo