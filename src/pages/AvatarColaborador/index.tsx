import React from 'react'; // Importe o React

import Aside from '../../components/aside'; // Certifique-se de fornecer o caminho correto para o componente Aside
import './style.css';
import Fusca from '../../assets/img/fusca.png';
import Gol from '../../assets/img/gol.png';
import Bugatti from '../../assets/img/bugatti.png';

function AvatarColaborador() {
  return (
    <main id="aside_colaborador">
      <Aside />
      <section className="section">
        <div className="titulo">
          <h2>Avatar</h2>
          <p>
            Sabemos que para viajar, escolher seu veículo é muito importante.
            Confira os modelos disponíveis e escolha seu parceiro de viagem!
          </p>
        </div>
        <div className="alinhamento_swiper">
          <div className="swiper mySwiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div id="card_fusca">
                  <span className="texto_card">Golf</span>
                  <div className="imagem_gol">
                    <img src={Gol} alt="carro Golf" />
                  </div>
                  <div className="texto_gol">
                    <span>Características:</span>
                    <p>
                      Primeiro modelo de automóvel fabricado pela VW, foi o carro
                      mais vendido do mundo. É um carro popular compacto. Tenha a
                      sensação nostálgica nesta viagem dirigindo nosso clássico!
                    </p>
                  </div>
                  <div id="botao_selecionar">
                    <button>Selecionar</button>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div id="card_fusca">
                  <span className="texto_card">Fusca</span>
                  <div className="imagem_gol">
                    <img src={Fusca} alt="carro Fusca" />
                  </div>
                  <div className="texto_gol">
                    <span>Características:</span>
                    <p>
                      Primeiro modelo de automóvel fabricado pela VW, foi o carro
                      mais vendido do mundo. É um carro popular compacto. Tenha a
                      sensação nostálgica nesta viagem dirigindo nosso clássico!
                    </p>
                  </div>
                  <div id="botao_selecionar">
                    <button>Selecionar</button>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div id="card_fusca">
                  <span className="texto_card">Audi</span>
                  <div className="imagem_gol">
                    <img src={Bugatti} alt="carro Audi" />
                  </div>
                  <div className="texto_gol">
                    <span>Características:</span>
                    <p>
                      Primeiro modelo de automóvel fabricado pela VW, foi o carro
                      mais vendido do mundo. É um carro popular compacto. Tenha a
                      sensação nostálgica nesta viagem dirigindo nosso clássico!
                    </p>
                  </div>
                  <div id="botao_selecionar">
                    <button>Selecionar</button>
                  </div>
                </div>
              </div>
              {/* <div class="swiper-slide">Slide 4</div>
                <div class="swiper-slide">Slide 5</div>
                <div class="swiper-slide">Slide 6</div>
                <div class="swiper-slide">Slide 7</div>
                <div class="swiper-slide">Slide 8</div>
                <div class="swiper-slide">Slide 9</div> */}
            </div>
          </div>
        </div>
      </section>
      {/* Swiper JS */}
      {/* Initialize Swiper */}
    </main>
  );
}

export default AvatarColaborador;