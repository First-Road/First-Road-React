import './style.css'
import { Link } from "react-router-dom"
import LogoColorido from "../../assets/img/Logo_FirstRoad_Vertical_Colorido.png"





function Login() {

    return (

        <main id='loginAdm'>

            <div className="login_login">

                <div className="login_one">

                    <img src={LogoColorido} alt="logo first road colorido" />
                </div>
                <div className="login_two">
                    <h1>Bem vindo!</h1>
                </div>
                <div className="login_tree">
                    <span>Qual foi a última vez que você fez algo pela primeira vez?</span>
                    <span>Estamos muito feliz em recebê-lo nesta estrada!</span>
                    <span>Coloque os cintos e acelere!</span>
                </div>
            </div>
            <div className="login_direcional">
                <div className="login_comandos">
                    <h2>Acesse sua conta</h2>
                    <div>
                        <label htmlFor="">E-mail</label>
                        <input type="email" 
                        placeholder="            exemplo@vwb.com  " 
                        required
                        />
                    </div>
                    <div>
                        <label htmlFor="">Senha</label>
                        <input type="password" 
                        placeholder="           ******  " 
                        required
                        />
                    </div>
                    <div className="login_ancora">
                        <Link to={"#"}>Esqueceu sua senha?</Link>

                    </div>
                    <button>Entrar</button>
                </div>
            </div>
        </main>
    )

}

export default Login