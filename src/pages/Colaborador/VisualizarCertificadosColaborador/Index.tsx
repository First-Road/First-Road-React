
import Aside from '../../../components/aside';
import CertificadosIcon from '../../../assets/icons/certificado2.png';
import cadeadoaberto from '../../../assets/icons/cadeadoaberto.svg';
import cadeadofechado from '../../../assets/icons/cadeadofechado.svg';
import './style.css';

import { Link } from "react-router-dom";




function VisualizarCertificadosColaborador() {

    // const { moduloAtual, setModuloAtual } = useContext(Context);
    // console.log(moduloAtual);

    return (

        <main id="aside_colaborador">
            <Aside />

            <div className="tela_meuscertificados">
                <div className="carrousel_texto">
                    <h5 className="tituloCertificados">Certificados</h5>
                    <p className="textoCertificados">Acesse aqui os seus certificados adquiridos em sua jornada:</p>
                </div>
                <div className="caixa_certificado">
                    <div className="certificados1">
                        <div className="certificado-container"><Link to={"../CertificadoColaborador"}>
                            <img src={CertificadosIcon} alt="certificado" /></Link>
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

                </div>
            </div>
        </main>)
}
   

export default VisualizarCertificadosColaborador;