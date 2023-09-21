import './log.css'
import { Link } from 'react-router-dom';
import LogoColorido from "../../assets/img/Logo_FirstRoad_Vertical_Colorido.png"
import React, { useState } from 'react';
/* import PerfilGestor from '../Gestor/PerfilGestor';
import PerfilConectado from '../PerfilConectadoStatic';
import HomeColaborador from '../HomeColaborador'; */



function Login() {


    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [logado, setLogado] = useState(false);
    const [tipoUsuario, setTipoUsuario] = useState('');


    const EntradaPerfil = () => {
        // Valores de email e senha definidos
        const users = [
            { email: 'admmaster@vw.com', senha: 'adm123', tipoUsuario: 'administrador' },
            { email: 'gestor@vw.com', senha: 'gestor123', tipoUsuario: 'gestor' },
            { email: 'colaborador@vw.com', senha: 'colaborador123', tipoUsuario: 'colaborador' },
        ];

        const usuarioBuscado = users.find((u) => u.email === email && u.senha === senha);

        if (usuarioBuscado) {
            // Autenticação bem-sucedida
            setLogado(true);
            setTipoUsuario(usuarioBuscado.tipoUsuario);
        } else {
            // Autenticação falhou
            alert('Email ou senha incorretos');
        }

        console.log({
            email,
            tipoUsuario,
                     
          });
    };

    if (logado) {
        // Redirecione o usuário com base no tipo de usuário
        switch (tipoUsuario) {
            case 'administrador':
                return <Link to={"../PerfilConectadoStatic/index.tsx"} />;
            case 'gestor':
                return <Link to={"../Gestor/PerfilGestor/index.tsx"} />;
            case 'colaborador':
                return <Link to={"/HomeColaborador"} />;
            default:
                break;
        }


    }

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
                    <form onSubmit={EntradaPerfil}>
                        <div>
                            <label htmlFor="">E-mail</label>
                            <input
                                type="text"
                                placeholder="exemplo@vwb.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <label htmlFor="">Senha</label>
                            <input
                                type="password"
                                placeholder="******"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                            />
                            <button type="submit">Entrar</button>
                        </div>
                        <div className="login_ancora">
                            <Link to={"/resetaSenha"}>Esqueceu sua senha?</Link>
                            <Link to={"/perfil"}>AdmMaster</Link>
                            <Link to={"/dashboard"}>Gestor</Link>
                            <Link to={"/HomeColaborador"}>Colaborador</Link>

                        </div>
                       
                    </form>
                </div>
            </div>
        </main>
    )

}

export default Login;


 {/* <button onClick={PerfilConectado}>AdmMaster</button>
                        <button onClick={PerfilGestor}>Gestor</button>
                        <button onClick={HomeColaborador}>Colaborador</button> */}


