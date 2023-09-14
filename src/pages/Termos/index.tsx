import './style.css'
import { Link } from "react-router-dom"
import LogoColorido from "../../assets/img/Logo_FirstRoad_Vertical_Colorido.png"

function Termos() {

    return (
        <main id='admTermos'>
            <div className="termos_termos">
                <div className="termos_one">
                    <img src={LogoColorido} alt="logo first road colorido" />
                </div>
                <div className="termos_two">
                    <h1>Bem vindo!</h1>
                </div>
                <div className="termos_tree">
                    <span>Qual foi a última vez que você fez algo pela primeira vez?</span>
                    <span>Estamos muito feliz em recebê-lo nesta estrada!</span>
                    <span>Coloque os cintos e acelere!</span>
                </div>
            </div>
            <div className="termos_direcional">
                <div className="termos_comandos">
                    <div className="termos_h2">
                        <h2>Termos e condições de uso do sistema</h2>
                    </div>
                    <div className="termos_span">
                        {/* <span>
                  Termos e condições de uso do sistema
              </span> */}
                        <p>
                            Seja bem-vindo ao nosso site. Leia com atenção todos os termos abaixo.
                        </p>
                        <p>
                            Este documento, e todo o conteúdo do site é oferecido por (ADICIONAR
                            DADOS DA EMPRESA OU NOME FANTASIA), neste termo representado apenas
                            por “EMPRESA”, que regulamenta todos os direitos e obrigações com
                            todos que acessam o site, denominado neste termo como “VISITANTE”,
                            reguardado todos os direitos previstos na legislação, trazem as
                            cláusulas abaixo como requisito para acesso e visita do mesmo, situado
                            no endereço (ADICIONAR ENDEREÇO DO SITE).
                        </p>
                        <p>
                            A permanência no website implica-se automaticamente na leitura e
                            aceitação tácita do presente termos de uso a seguir. Este termo foi
                            atualizado pela última vez em 14 de setembro de 2021.
                        </p>
                    </div>
                    <div className="termos_checkbox">
                        <input type="checkbox" />
                        <label htmlFor="">Concordo, com o termo e as condições.</label>
                    </div>
                    <div className="tipo_login">

                        <Link to={'/perfil'}>Salvar</Link>
                    </div>
                </div>
            </div>
        </main>
    )

}

export default Termos