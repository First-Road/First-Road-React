//Estilizaçao
import "./style.css";

import Aside from "../../components/aside";


import FotoPerfil from "../../assets/icons/foto_perfil2.svg"
import LapisPerfil from "../../assets/icons/lapis_perfil.svg"


function PerfilColaborador (){
    return (


        <main id="aside_colaborador">
        <Aside />
        <section className="secao_perfil">
  <div className="elementos_texto_imagem">
    <div className="user_config">
      <img className="foto_padrao" src={FotoPerfil} alt="" />
      <img
        className="config config1"
        src={LapisPerfil}
        alt=""
      />
    </div>
    <form className="centralizar">
      <div className="texto_perfil">
        <h1>Perfil</h1>
        <p>
          O tamanho da imagem deve ter pelo menos 500px de tamanho e menos de
          300kb. Arquivos permitidos são .png e .jpg
        </p>
      </div>
      <div className="posicao_linha">
        <div className="primeira_linha">
          <div className="input input1">
            <label htmlFor="Nome completo">Nome Completo</label>
            <input className="input_caixa" type="text" />
          </div>
          <div className="input input2">
            <label htmlFor="Cpf">Cpf</label>
            <input className="input_caixa" type="number" />
          </div>
        </div>
        <div className="segunda_linha">
          <div className="input input3">
            <label htmlFor="NIF">NIF</label>
            <input className="input_caixa" type="number" />
          </div>
          <div className="input input4">
            <label className="data" htmlFor="Data de Nascimento">
              Data de Nascimento
            </label>
            <input className="input_caixa" type="date" />
          </div>
          <div className="input input5">
            <label htmlFor="Unidade">Unidade</label>
            <select className="input_caixa" name="selecionar" id="">
              selecionar
            </select>
          </div>
        </div>
        <div className="terceira_linha">
          <div className="input input6">
            <label htmlFor="Perfil">Perfil</label>
            <input className="input_caixa" type="text" />
          </div>
          <div className="input input7">
            <label htmlFor="Cargo">Cargo</label>
            <input className="input_caixa" type="text" />
          </div>
        </div>
        <div className="quarta_linha">
          <div className="input input8">
            <label htmlFor="email">E-mail</label>
            <input className="input_caixa" type="email" />
          </div>
          <div className="button_salvar">
            <button>Salvar</button>
          </div>
        </div>
      </div>
      <hr />
    </form>
    <form>
      {/* <div className="posicionamento_alterar">
        <h2>Alterar senha</h2>
        <div className="senha">
          <div className="senha_antiga">
            <label htmlFor="">Senha antiga</label>
            <input
              className="input_senha"
              type="password"
              name="senha antiga"
              id=""
            />
          </div>
          <div className="senha_nova">
            <label htmlFor="">Senha nova</label>
            <input
              className="input_senha2"
              type="password"
              name="senha nova"
              id=""
            />
            <div className="texto_senha">
              <p>
                Mínimo de 8 carácteres com letras minúsculas, maiúsculas,
                números e símbolos
              </p>
            </div>
          </div>
        </div>
        <div className="button_alterar">
          <button>Alterar</button>
        </div>
      </div> */}
    </form>
  {/* </div>
  <div className="elementos_carrousel">
    <div className="carrousel_texto">
      <h2>Certificados</h2>
      <p>Acesse os certificados que foi adquirindo em sua jornada:</p>
    </div>
    <div className="carrousel_certificado">
      <img src="assets/icons/flecha_esquerda.svg" alt="icone flecha" />
      <div className="certificados">
        <img src="assets/images/certificado2.png" alt="certificado" />
        <img src="assets/images/certificado2.png" alt="certificado" />
        <img src="assets/images/certificado2.png" alt="certificado" />
      </div>
      <img
        className="flecha_esquerda"
        src="assets/icons/flecha_direita.svg"
        alt="icone flecha"
      />
    </div> */}
  </div>
  
</section>
</main>




    )
}

export default PerfilColaborador;