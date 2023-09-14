import React, { useState } from "react";
import "./style.css";

import { Link } from "react-router-dom";
import Aside from "../../components/aside";
import fusca1 from "../../assets/icons/fusca1.png"
import mapa from "../../assets/icons/mapa1.png"
import cadeadofechado from "../../assets/icons/cadeadofechado.svg";

import { useCadeado } from '../../pages/VisualizarCertificadosColaborador/CadeadoContext'; // Importe o hook useCadeado
import Context from "../../utils/Context";


function TrilhaColaborador() {

    const [carroStyle, setCarroStyle] = useState({
        animation: "",
        top: "0px",
        right: "-150px",
    });

    const { cadeadoVisivel, ocultarCadeado, mostrarCadeado } = useCadeado();
    const cadeadoClasses = cadeadoVisivel ? 'icone-cadeado' : 'icone-cadeado hidden';

    const handleAnimationClick = (animation: any, top: any, right: any) => {
        setCarroStyle((prevCarroStyle) => ({
            ...prevCarroStyle,
            top,
            right,
            animation,
        }));
    };


    // const botaoAnimar = document.getElementById("animar");
    // const botaoAnimar1 = document.getElementById("animar1");
    // const botaoAnimar2 = document.getElementById("animar2");
    // const botaoAnimar3 = document.getElementById("animar3");
    // const botaoAnimar4 = document.getElementById("animar4");
    // const botaoAnimar5 = document.getElementById("animar5");
    // const botaoAnimar6 = document.getElementById("animar6");
    // const botaoAnimar7 = document.getElementById("animar7");
    // const botaoAnimar8 = document.getElementById("animar8");
    // const botaoAnimar9 = document.getElementById("animar9");





    return (
        <main id="aside_colaborador">
            <Aside />
            <section>
                <div className="tela">
                    <img src={mapa} alt="" />
                    <div className="car">
                        {/* <div className="carrinho">
                    <img id="carro" src={fusca1} alt="" />
                </div> */}
                        <div className="carrinho">

                            <img id="carro" style={carroStyle} src={fusca1} alt="" />
                        </div>
                    </div>
                </div>
                <div className="botoesModulos">

                    <div className="botoes">
                        <Context.Provider value={1}>
                            <input
                                className="botao1"
                                onClick={() => { ocultarCadeado(); handleAnimationClick("veic1 3s ease-in-out", "0px", "60px") }}
                                id="animar"
                                type="button"
                                defaultValue="Módulo - 1"
                            // const carro = document.querySelector(".carro");

                            //   botaoAnimar.addEventListener("click", ()=> {
                            //   carro.style.animation = "";
                            //   setTimeout(() => carro.style.animation = "veic1 3s ease-in-out");
                            //   carro.style.top = "0px";
                            //   carro.style.right = "60px";
                            // });

                            />
                        </Context.Provider>
                        <input
                            className="botao2"
                            onClick={() => handleAnimationClick("veic2 3s ease-in-out", "-65px", "200px")}
                            id="animar1"
                            type="button"
                            defaultValue="Módulo - 2"
                        // botaoAnimar1.addEventListener("click", ()=> {
                        //   carro.style.animation = "";
                        //   setTimeout(() => carro.style.animation = "veic2 3s ease-in-out");
                        //   carro.style.top = "-65px";
                        //   carro.style.right = "200px";
                        // });
                        />
                        <input
                            className="botao3"
                            onClick={() => handleAnimationClick("veic3 3s ease-in-out", "-170px", "80px")}
                            id="animar2"
                            type="button"
                            defaultValue="Módulo - 3"
                        // botaoAnimar2.addEventListener("click", ()=> {
                        //   carro.style.animation = "";
                        //   setTimeout(() => carro.style.animation = "veic3 3s ease-in-out");
                        //   carro.style.top = "-170px";
                        //   carro.style.right = "80px";
                        //   // carro.style.transform = scaleX(-1)
                        // });
                        />
                        <input
                            className="botao4"
                            onClick={() => handleAnimationClick("veic4 3s ease-in-out", "-160px", "-90px")}
                            type="button"
                            id="animar3"
                            defaultValue="Módulo - 4"
                        // botaoAnimar3.addEventListener("click", ()=> {
                        //   carro.style.animation = "";
                        //   setTimeout(() => carro.style.animation = "veic4 3s ease-in-out");
                        //   carro.style.top = "-160px";
                        //   carro.style.right = "-90px";
                        //   // carro.style.transform = scaleX(-1)

                        // });
                        />
                        <input
                            className="botao5"
                            onClick={() => handleAnimationClick("veic5 5s ease-in-out", "-300px", "-150px")}
                            id="animar4"
                            type="button"
                            defaultValue="Módulo - 5"

                        // botaoAnimar4.addEventListener("click", ()=> {
                        //   carro.style.animation = "";
                        //   setTimeout(() => carro.style.animation = "veic5 3s ease-in-out");
                        //   carro.style.top = "-300px";
                        //   carro.style.right = "-150px";
                        // });
                        />
                        <input
                            className="final"
                            onClick={() => handleAnimationClick("veic6 5s ease-in-out", "-300px", "65px")}
                            id="animar5"
                            type="button"
                            defaultValue="Final"
                        // botaoAnimar5.addEventListener("click", ()=> {
                        //   carro.style.animation = "";
                        //   setTimeout(() => carro.style.animation = "veic6 3s ease-in-out");
                        //   carro.style.top = "-300px";
                        //   carro.style.right = "65px";
                        // });
                        />
                    </div>
                </div>
                <div className="posicionamento_footer">
                    <div className="elementos">
                        <h3 className="tituloModulo" >Módulo 1 - Instruções de Acesso</h3>
                        <div className="texto1">
                            <h3>Ingrid Marques Bem Vindo</h3>
                        </div>
                        <p>Primeiro Módulo! Bora lá?</p>
                        <div className="botao_entrar">
                            <a href="../tela_conteudo/index.html">Entrar</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}



export default TrilhaColaborador;