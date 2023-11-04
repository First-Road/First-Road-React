//Estilizaçao
import "./style.css";

import Aside from "../../../components/aside";

//icons/images
import icone_compartilhar from "../../../assets/icons/icone_compartilhar.png"
import icone_instagram from "../../../assets/icons/icone_instagram.png"
import imagemCertificado from "../../../assets/icons/certificado.png"
import icone_linkedin from "../../../assets/icons/icone_linkedin.png"
import icone_whats from "../../../assets/icons/icone_whats.png"
import icone_down from "../../../assets/icons/down.png"

function CertificadoColaborador() {
  return (

    <main id="aside_colaborador">
      <Aside />

      <div className="certificado grid ">
        <img
          className="imagem_certificado"
          src={imagemCertificado}
          alt=""
        />
        <div className="icones_certificado">
          <img src={icone_compartilhar} alt="" />
          <img src={icone_instagram} alt="" />
          <img src={icone_linkedin} alt="" />
          <img src={icone_whats} alt="" />
          <img src={icone_down} alt="" />
        </div>
      </div>
    </main>



  )
}

export default CertificadoColaborador;
