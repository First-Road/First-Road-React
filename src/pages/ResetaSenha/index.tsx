import './style.css'
import { Link } from "react-router-dom"
import LogoColorido from "../../assets/img/Logo_FirstRoad_Vertical_Colorido.png"

function ResetaSenha() {

    return(
        <main id='resetaSenha'>
  <div className="reseta_all">
    <div className="reseta_one">
    <img src={LogoColorido} alt="logo first road colorido" />
    </div>
    <div className="reseta_two">
      <h1>Bem vindo!</h1>
    </div>
    <div className="reseta_tree">
      <span>Qual foi a última vez que você fez algo pela primeira vez?</span>
      <span>Estamos muito feliz em recebê-lo nesta estrada!</span>
      <span>Coloque os cintos e acelere!</span>
    </div>
  </div>
  <div className="reseta_direcional">
    <div className="reseta_comandos">
      <h2>Resetar senha</h2>
      <div>
        <label htmlFor="">E-mail</label>
        <input type="email" placeholder="  exemplo@vwb.com  " />
      </div>
      <div className="reseta_ancora">
        <Link to={"/login"}>Voltar para o login</Link>
        <a href=""></a>
      </div>
      <button>recuperar senha</button>
    </div>
  </div>
</main>
    )
    
}

export default ResetaSenha