import './log.css'
import { Link, useNavigate } from 'react-router-dom';

import React, { useState } from 'react';
/* import PerfilGestor from '../Gestor/PerfilGestor';
import PerfilConectado from '../PerfilConectadoStatic';
import HomeColaborador from '../HomeColaborador'; */
import belaVista from "../../assets/img/bela-vista-de-uma-estrada-ao-nascer-do-sol-no-inicio-da-manha.jpg";
import logo from "../../assets/img/Group 39.png";
import secureLocalStorage from 'react-secure-storage';
import api from '../../utils/api';



function Login() {


    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [tipoUsuario, setTipoUsuario] = useState('');


    const navigate = useNavigate();


    function realizarAutenticacao(event: any) {
        event.preventDefault();

        const usuario = {
            email: email,
            senha: senha,
            tipoUsuario: tipoUsuario
        };

        api.post("usuarios", usuario)
            .then((response: any) => {
                console.log(response.data);
                secureLocalStorage.setItem("email", response.data.email);
                secureLocalStorage.setItem("senha", response.data.senha);
               const local = secureLocalStorage.setItem("tipoUsuario", response.data.id_tipo_usuario.titulo_tipo_usuario);

            // Redirecione o usuário com base no tipo de usuário
            
            
            //redirecionar ao componente perfil
                navigate("/perfil/" + response.data.user.id);
                //recarrega a tela
                navigate(0);

            })
            .catch((error: any) => {
                alert("Erro ao tentar se logar! :(");
            })

    }
    
        


    

    return (

        <><main id='login'>
            <section className='secao_login'>
                <div className="form-box">
                    <div className="logoFirst">
                        <img className="logo" src={logo} alt="logo FirstRoad" />
                    </div>
                    <div className="form-value">
                        <form className="form_login" action="" onSubmit={realizarAutenticacao}>
                            <h2 className='titulo_login'>Login</h2>
                            <div className="inputbox">
                                <input type="email" placeholder="Email" required onChange= {(e) => {
                                    setEmail(e.target.value)}} />
                            </div>
                            <div className="inputbox">
                                <input type="password" placeholder="Senha" required />
                            </div>
                            <div className="esqueceuSenha">
                                <label htmlFor="">
                                    <input type="checkbox" />
                                    Lembrar senha
                                </label>
                            </div>
                            <div className="form_botao">
                                <button className='btn_login'>Login</button>
                                <a className="esquecerSenha" href="#">
                                    Esqueceu Senha
                                </a>
                                <div className="registrar">
                                    <p>
                                        Precisa de ajuda? <a href="#">Suporte</a>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

        </main><script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script><script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script></>

    )

}

export default Login;


{/* <button onClick={PerfilConectado}>AdmMaster</button>
                        <button onClick={PerfilGestor}>Gestor</button>
                        <button onClick={HomeColaborador}>Colaborador</button> */}


