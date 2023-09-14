import React, { useContext } from 'react';
import Aside from '../../components/aside';
import './style.css';
import CertificadosIcon from '../../assets/icons/certificado2.png';
import cadeadoaberto from '../../assets/icons/cadeadoaberto.svg';
import cadeadofechado from '../../assets/icons/cadeadofechado.svg';
import './style.css';
import { useCadeado } from '../../pages/VisualizarCertificadosColaborador/CadeadoContext'; // Importe o hook useCadeado

import Context from '../../utils/Context';



function VisualizarCertificadosColaborador() {

    const c = useContext(Context); 

    const { cadeadoVisivel, ocultarCadeado, mostrarCadeado } = useCadeado(); // Use o contexto do CadeadoProvider
    return (
        <main id="aside_colaborador">
            <Aside />
            {c}
            <div className="tela_meuscertificados">
                <div className="carrousel_texto">
                    <h5 className="tituloCertificados">Certificados</h5>
                    <p className="textoCertificados">Acesse aqui os seus certificados adquiridos em sua jornada:</p>
                </div>
                <div className="caixa_certificado">
                    <div className="certificados1">
                        <div className="certificado-container">
                            <img src={CertificadosIcon} alt="certificado" />
                            <img className={`icone-cadeado ${cadeadoVisivel ? 'visible' : 'hidden'}`}
                                src={cadeadofechado}
                                alt="certificado"
                            />
                        </div>
                        <div className="certificado-container">
                            <img src={CertificadosIcon} alt="certificado" />
                            <img className="icone-cadeado" src={cadeadofechado} alt="certificado" />
                        </div>
                        <div className="certificado-container">
                            <img src={CertificadosIcon} alt="certificado" />
                            <img className="icone-cadeado" src={cadeadofechado} alt="certificado" />
                        </div>
                    </div>
                    <div className="caixa_certificado2">
                        <div className="certificado-container">
                            <img src={CertificadosIcon} alt="certificado" />
                            <img className="icone-cadeado" src={cadeadofechado} alt="certificado" />
                        </div>
                        <div className="certificado-container">
                            <img src={CertificadosIcon} alt="certificado" />
                            <img className="icone-cadeado" src={cadeadofechado} alt="certificado" />
                        </div>
                        <div className="certificado-container">
                            <img src={CertificadosIcon} alt="certificado" />
                            <img className="icone-cadeado" src={cadeadofechado} alt="certificado" />
                        </div>
                    </div>
                    {/* <button onClick={ocultarCadeado}>Clique para Ocultar Certificado</button> */}
                </div>
            </div>
        </main>
    );
}

export default VisualizarCertificadosColaborador;