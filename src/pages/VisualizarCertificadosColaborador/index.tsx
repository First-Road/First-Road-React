
import Aside from "../../components/aside";

import "./style.css";
import CertificadosIcon from "../../assets/icons/certificado2.png"

function VisualizarCertificadosColaborador() {
    return (


        <main id="aside_colaborador">
            <Aside />
            {/* <div className="MeusCertificados">
                <div className="Caixas">
                    <div className="caixaCertificado1">
                    </div>
                    <div className="caixaCertificado2">
                    </div>

                    <div className="caixaCertificado3">
                    </div>
                </div>



            </div> */}


            <div className="elementos_carrousel">
                <div className="carrousel_texto">
                    <h2>Certificados</h2>
                    <p>Acesse os certificados que foi adquirindo em sua jornada:</p>
                </div>
                <div className="carrousel_certificado">
                    {/* <img src="assets/icons/flecha_esquerda.svg" alt="icone flecha" /> */}
                    <div className="certificados1">
                        <img src={CertificadosIcon} alt="certificado" />
                        <img src={CertificadosIcon} alt="certificado" />
                        <img src={CertificadosIcon} alt="certificado" />
                    </div>
                    <div className="certificados2">
                        <img src={CertificadosIcon} alt="certificado" />
                        <img src={CertificadosIcon} alt="certificado" />
                        <img src={CertificadosIcon} alt="certificado" />
                       </div>
                        {/* // className="flecha_esquerda"
                        // src="assets/icons/flecha_direita.svg"
                        // alt="icone flecha"
                        /> */}
                    </div>
                </div>

        </main>

    )
}


export default VisualizarCertificadosColaborador


