//Estilizaçao
import "./style.css";

import Aside from "../../components/aside";

function CertificadoColaborador(){
    return(

        <main id="aside_colaborador">
        <Aside />

        <div className="certificado grid ">
  <img
    className="imagem_certificado"
    src="assets/icons/certificado.png"
    alt=""
  />
  <div className="icones_certificado">
    <img src="assets/icons/icone_compartilhar.png" alt="" />
    <img src="assets/icons/icone_instagram.png" alt="" />
    <img src="assets/icons/icone_linkedin.png" alt="" />
    <img src="assets/icons/icone_whats.png" alt="" />
    <img src="assets/icons/down.png" alt="" />
  </div>
</div>
</main>



    )
}

export default CertificadoColaborador;
