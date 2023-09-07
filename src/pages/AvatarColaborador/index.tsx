// Importe o React
import React from "react";
import { useState } from "react";

// pacote swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";

import Aside from "../../components/aside"; // Certifique-se de fornecer o caminho correto para o componente Aside
import "./style.css";
import Fusca from "../../assets/img/fusca.png";
import Gol from "../../assets/img/gol.png";
import Bugatti from "../../assets/img/bugatti.png";

function AvatarColaborador() {
  //state

  const [listaAvatar, setListaAvatar] = useState<any[]>([
    {
      nome: "Fusca",
      imagem: Fusca,
      caracteristicas:
        "Primeiro modelo de automóvel fabricado pela VW, foi o carro mais vendido do mundo. É um carro popular compacto. Tenha a sensação nostálgica nesta viagem dirigindo nosso clássico!",
    },
    {
      nome: "Gol",
      imagem: Gol,
      caracteristicas:
        "Primeiro modelo de automóvel fabricado pela VW, foi o carro mais vendido do mundo. É um carro popular compacto. Tenha a sensação nostálgica nesta viagem dirigindo nosso clássico!",
    },
    {
      nome: "Audi",
      imagem: Bugatti,
      caracteristicas:
        "Primeiro modelo de automóvel fabricado pela VW, foi o carro mais vendido do mundo. É um carro popular compacto. Tenha a sensação nostálgica nesta viagem dirigindo nosso clássico!",
    }
  ]);

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

        <Swiper
          className="mySwiper"
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
        >
          {listaAvatar.map((avatar: any, index: number) => {
            return (
              <SwiperSlide key={index}>
                <div className="card_fusca">
                  <span className="texto_card">{avatar.nome}</span>
                  <div className="imagem_gol">
                    <img src={avatar.imagem} alt={"imagem do carro" + avatar.nome} />
                  </div>
                  <div className="texto_gol">
                    <span>Características:</span>
                    <p>
                      {avatar.caracteristicas}
                    </p>
                  </div>
                  <div className="botao_selecionar">
                    <button>Selecionar</button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </main>
  );
}

export default AvatarColaborador;
